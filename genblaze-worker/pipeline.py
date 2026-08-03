"""
HeritageVault × Genblaze — narrated chapter pipeline.

Turns a family story chapter into durable, provenance-verified media:

  audio narration  (ElevenLabs TTS)   -> .mp3
  archival scene   (OpenAI DALL·E)     -> .png
  provenance       (SHA-256 manifest)  -> .json

All three land in a Backblaze B2 bucket via the Genblaze ObjectStorageSink,
which rewrites provider CDN URLs into durable, credential-free B2 URLs and
hashes every asset (that is what makes ``manifest.verify()`` pass).

Credentials (env):
  B2_KEY_ID / B2_APP_KEY / B2_BUCKET   Backblaze B2 storage
  ELEVENLABS_API_KEY / ELEVENLABS_VOICE_ID   ElevenLabs TTS
  OPENAI_API_KEY                        OpenAI DALL·E image

Run directly:
    python pipeline.py --title "The blue trunk" --text "Samuel began saving letters..."

Serve over HTTP (used by the Vite middleware):
    uvicorn server:app --port 8787
"""

from __future__ import annotations

import argparse
import importlib
import json
import os
from typing import Any, Optional

from genblaze_core import KeyStrategy, Modality, ObjectStorageSink, Pipeline
from genblaze_s3 import S3StorageBackend


# ── Storage ────────────────────────────────────────────────────────────

def build_storage(bucket: Optional[str] = None, prefix: str = "heritage-vault") -> ObjectStorageSink:
    """Backblaze B2 sink. Reads B2_KEY_ID / B2_APP_KEY from the environment.

    Pass B2_PUBLIC_URL_BASE (https://fNNN.backblazeb2.com/file/<bucket>) for a
    public bucket so every asset gets a permanent, credential-free URL.
    """
    bucket = bucket or os.environ.get("B2_BUCKET") or "heritage-vault-media"
    kwargs: dict[str, Any] = {}
    if os.environ.get("B2_REGION"):
        kwargs["region"] = os.environ["B2_REGION"]
    if os.environ.get("B2_PUBLIC_URL_BASE"):
        kwargs["public_url_base"] = os.environ["B2_PUBLIC_URL_BASE"]
    kwargs["auto_lifecycle"] = True  # recommended defaults: expire orphaned multipart uploads
    backend = S3StorageBackend.for_backblaze(bucket, **kwargs)
    return ObjectStorageSink(backend, prefix=prefix, key_strategy=KeyStrategy.HIERARCHICAL)


# ── Pipeline ───────────────────────────────────────────────────────────

def generate_chapter_media(
    *,
    title: str,
    text: str,
    excerpt: str = "",
    image_prompt: Optional[str] = None,
    voice_id: Optional[str] = None,
    output_dir: str = "output",
    bucket: Optional[str] = None,
) -> dict[str, Any]:
    """Generate narration + illustration for one chapter and persist to B2.

    Returns a JSON-friendly dict the UI stores on the story record:
      runId, audio {url, sha256}, image {url, sha256}, manifest {uri, hash, verified}
    """
    from genblaze_elevenlabs import ElevenLabsTTSProvider
    from genblaze_openai import DalleProvider

    if not text:
        raise ValueError("text is required — the chapter body to narrate")

    storage = build_storage(bucket)
    voice = voice_id or os.environ.get("ELEVENLABS_VOICE_ID") or "JBFqnCBsd6RMkjVDRZzb"
    tts_model = os.environ.get("GENBLAZE_TTS_MODEL") or "eleven_v3"
    image_model = os.environ.get("GENBLAZE_IMAGE_MODEL") or "dall-e-3"

    if not image_prompt:
        image_prompt = (
            f"A faded sepia archival photograph of the family moment described: {title}. "
            f"Zambia, early-to-mid 1900s, warm film grain, softly worn edges, honest "
            f"documentary tone, no text, no watermark."
        )

    pipeline = (
        Pipeline("heritage-chapter-narration", project_id="heritage-vault")
        .step(
            ElevenLabsTTSProvider(output_dir=f"{output_dir}/audio"),
            model=tts_model,
            prompt=text,
            modality=Modality.AUDIO,
            voice_id=voice,
            output_format="mp3_44100_128",
        )
        .step(
            DalleProvider(),
            model=image_model,
            prompt=image_prompt,
            modality=Modality.IMAGE,
            size="1024x1024",
        )
    )

    # The sink transfers assets to B2, hashes them, and closes itself on return.
    result = pipeline.run(sink=storage, timeout=300, max_retries=2)
    run = result.run
    manifest = result.manifest

    return {
        "runId": run.run_id,
        "title": title,
        "audio": _step_asset(result, 0),
        "image": _step_asset(result, 1),
        "manifest": {
            "uri": getattr(manifest, "manifest_uri", None),
            "hash": manifest.canonical_hash,
            "verified": bool(manifest.verify()),
        },
    }


def _step_asset(result: Any, index: int) -> dict[str, Any]:
    steps = result.run.steps
    if index >= len(steps):
        return {"url": None, "sha256": None}
    assets = steps[index].assets or []
    if not assets:
        return {"url": None, "sha256": None}
    return {"url": assets[0].url, "sha256": assets[0].sha256}


# ── Verification ───────────────────────────────────────────────────────

def _manifest_cls() -> Optional[type]:
    """Locate the Manifest pydantic model defensively (import path varies by version)."""
    for module, attr in (("genblaze_core", "Manifest"), ("genblaze_core.manifest", "Manifest")):
        try:
            mod = importlib.import_module(module)
            cls = getattr(mod, attr, None)
            if cls is not None:
                return cls
        except Exception:
            continue
    return None


def verify_manifest(data: dict[str, Any]) -> dict[str, Any]:
    """Re-verify a provenance manifest document.

    The SDK's canonical path is the CLI:  genblaze verify manifest.json
    This endpoint mirrors it for pipeline calls that already hold the JSON.
    """
    cls = _manifest_cls()
    if cls is None:
        return {
            "verified": None,
            "hash": data.get("canonical_hash"),
            "error": "Manifest model unavailable — use `genblaze verify <manifest.json>`",
        }
    try:
        manifest = cls.model_validate(data)
        return {"verified": bool(manifest.verify()), "hash": manifest.canonical_hash}
    except Exception as exc:  # noqa: BLE001 - surface any parse/verify error
        return {"verified": None, "hash": None, "error": str(exc)}


# ── CLI ────────────────────────────────────────────────────────────────

def main() -> None:
    parser = argparse.ArgumentParser(description="HeritageVault × Genblaze narration pipeline")
    parser.add_argument("--title", required=True, help="Chapter title")
    parser.add_argument("--text", required=True, help="Chapter body to narrate")
    parser.add_argument("--excerpt", default="", help="Chapter pull quote (optional)")
    parser.add_argument("--image-prompt", default=None, help="Override the illustration prompt")
    parser.add_argument("--voice-id", default=None, help="ElevenLabs voice id (default from env)")
    args = parser.parse_args()

    result = generate_chapter_media(
        title=args.title,
        text=args.text,
        excerpt=args.excerpt,
        image_prompt=args.image_prompt,
        voice_id=args.voice_id,
    )
    print(json.dumps(result, indent=2))
    print("\nRe-verify anytime with: genblaze verify <manifest.json>")


if __name__ == "__main__":
    main()
