"""
HeritageVault × Genblaze worker — HTTP surface for the narration pipeline.

Run from this directory:
    uvicorn server:app --port 8787

Endpoints
    GET  /health     liveness + which providers/keys are configured
    POST /generate   {title, excerpt, text, imagePrompt?, voiceId?}
                    -> narration + illustration + provenance manifest on Backblaze B2
    POST /verify     {manifest: {...}}  re-verify a provenance manifest

The Vite middleware (vite-agent-plugin.ts) proxies /api/genblaze/* to this
server so the browser never touches B2 / ElevenLabs / OpenAI credentials.
"""

from __future__ import annotations

import os
from typing import Any, Optional

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from pipeline import generate_chapter_media, verify_manifest

app = FastAPI(title="HeritageVault × Genblaze worker", version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # dev-only; tighten before production
    allow_methods=["*"],
    allow_headers=["*"],
)


class GenerateRequest(BaseModel):
    storyId: str = ""
    title: str
    excerpt: str = ""
    text: str
    imagePrompt: Optional[str] = None
    voiceId: Optional[str] = None


class VerifyRequest(BaseModel):
    manifest: dict[str, Any]


@app.get("/health")
def health() -> dict[str, Any]:
    return {
        "ok": True,
        "service": "genblaze-worker",
        "pipeline": "heritage-chapter-narration",
        "storage": {
            "b2": bool(os.environ.get("B2_KEY_ID") and os.environ.get("B2_APP_KEY")),
            "bucket": os.environ.get("B2_BUCKET", "heritage-vault-media"),
        },
        "providers": {
            "elevenlabs": bool(os.environ.get("ELEVENLABS_API_KEY")),
            "openai": bool(os.environ.get("OPENAI_API_KEY")),
        },
    }


@app.post("/generate")
def generate(req: GenerateRequest) -> dict[str, Any]:
    return generate_chapter_media(
        title=req.title,
        text=req.text,
        excerpt=req.excerpt,
        image_prompt=req.imagePrompt,
        voice_id=req.voiceId,
    )


@app.post("/verify")
def verify(req: VerifyRequest) -> dict[str, Any]:
    return verify_manifest(req.manifest)
