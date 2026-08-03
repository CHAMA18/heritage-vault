# HeritageVault × Backblaze Generative AI Media Hackathon — Submission

**Project:** HeritageVault — *never lose your family's stories.* A private
family archive where every chapter can be narrated, illustrated, and stored
with verifiable provenance.

**Live app:** https://chama18.github.io/heritage-vault/
**Repo:** https://github.com/CHAMA18/heritage-vault
**Demo creds:** `curator@heritagevault.family` / `HeritageVault2026!` (or Demo Mode)

---

## 1. What it is (one paragraph)

HeritageVault is an AI media app for family archives. A family keeps the
letters, photos, cassettes, and places that tell its story; HeritageVault
organizes those fragments into an evidence-led archive, then turns any story
chapter into **narrated, illustrated, durably stored media** — a voice reading
the chapter (ElevenLabs TTS), an archival-style illustration (OpenAI DALL·E),
both persisted to **Backblaze B2** with a **SHA-256 provenance manifest** that
proves how each asset was generated and that it has not been tampered with.
For a family archive, authenticity *is* the product: judges can verify the
provenance of every generated asset.

## 2. Real-world utility

- **Audience:** families, genealogists, oral-history projects, community archives.
- **Problem:** photos and recordings are scattered, fragile, and *unattributed*;
  AI media adds a new risk — nobody can tell what was generated vs. original.
- **Solution:** one private vault + a pipeline that generates narration and
  archival imagery and cryptographically records how each piece of media was
  made (`manifest.verify()`), so the archive stays trustworthy as it grows.

## 3. AI providers and models used

| Provider | Model | Use |
|---|---|---|
| Backblaze B2 | S3-compatible object storage | durable storage for all generated assets + provenance manifests |
| ElevenLabs | `eleven_v3` (ElevenLabs TTS) | chapter narration audio (.mp3) |
| OpenAI | `dall-e-3` | archival-style chapter illustration (.png) |

*(The pipeline is Genblaze-native — swap in GMI Cloud, Runway, Luma, or
Stability Audio by changing one step; see `genblaze-worker/pipeline.py`.)*

## 4. How the app uses Backblaze B2 (meaningful, not decorative)

- Every generated asset (`.mp3`, `.png`) is uploaded to a B2 bucket via
  `S3StorageBackend.for_backblaze("heritage-vault-media")` with a
  hierarchical `runs/{date}/{run_id}/` layout — durable, credential-free URLs
  stored on the story record (never expiring CDN links).
- **Provenance manifests are stored in the same bucket**, one per run, as
  sidecar `.json` — the app renders the manifest hash + run id in the UI and
  `manifest.verify()` gates the "Genblaze verified" badge.
- `KeyStrategy.HIERARCHICAL` keeps every run grouped and browsable; the sink
  opts into B2 lifecycle defaults (orphaned multipart upload cleanup).

## 5. How the app uses Genblaze (meaningful orchestration, not a wrapper)

- `genblaze-worker/pipeline.py` builds a real `Pipeline`:
  `ElevenLabsTTSProvider` (audio narration) + `DalleProvider` (illustration),
  chained through the Genblaze `ObjectStorageSink` → B2, with retries
  (`max_retries`, `timeout`) and provider fallback support.
- **Provenance by default:** every run emits a canonical manifest; assets are
  SHA-256-hashed by the sink so `Manifest.verify()` passes; the UI exposes the
  hash and run id (expand "Provenance manifest" on any narrated chapter).
- **Production path:** the browser calls the worker through the Vite
  middleware proxy (`/api/genblaze/*`), so credentials never touch the
  browser; the same endpoint can be fronted by any serverless function or the
  worker itself in production.
- **Replayable:** the manifest captures provider/model/prompt/params, so any
  run can be reconstructed (`genblaze replay`).

## 6. Architecture

```
Story Mode "Narrate"
   │  POST /api/genblaze/generate          (Vite middleware proxy — no keys in browser)
   ▼
genblaze-worker  (Python · genblaze-core)
   │  Pipeline: ElevenLabsTTSProvider → DalleProvider
   │  ObjectStorageSink → S3StorageBackend.for_backblaze("heritage-vault-media")
   ▼
Backblaze B2  ←  assets + provenance manifest (SHA-256, verify())
   ▼
Story record (Firestore/localStorage) ← runId, hashes, durable URLs
   ▼
Story Mode renders audio player + illustration + "Genblaze" verified badge
```

## 7. Production readiness

- Live at `chama18.github.io/heritage-vault`; real Firebase auth; the visual
  agent runs fully in-browser from the user's archive (no external database);
  graceful degradation (offline-toast when the pipeline is unreachable).
- The worker fails loudly with actionable messages, the UI re-enables the
  button, and static deploys surface a clear "pipeline offline" hint.
- Genblaze retries/timeouts/fallback chains built in; B2 lifecycle defaults on.

## 8. Demo video script (~3 min)

1. **0:00–0:20** — Land on the Vault dashboard. "This is HeritageVault: a
   family archive where the response is a chart, a map, or a story — never a
   wall of text."
2. **0:20–0:50** — Open Story Mode, chapter *The blue trunk*. Click
   **Narrate**. "This fires a Genblaze pipeline: ElevenLabs narrates the
   chapter, DALL·E reconstructs an archival scene, and everything lands in
   Backblaze B2 with a provenance manifest."
3. **0:50–1:30** — The audio player + illustration appear; expand
   **Provenance manifest**. "Here's the SHA-256 manifest — `verify()` passed.
   For a family archive, we can prove how every piece of media was made."
4. **1:30–2:20** — Open the Backblaze B2 bucket: `runs/{date}/{run_id}/` with
   the `.mp3`, `.png`, and `manifest.json`. "Durable URLs, credential-free,
   never expiring."
5. **2:20–3:00** — Agent: "Where did my family live?" → map renders straight
   from the archive, in the browser. "And the same archive powers the visual
   agent. Prompt → pipeline → durable storage on Backblaze B2."

## 9. Devpost checklist

- [ ] Working app URL: `https://chama18.github.io/heritage-vault/`
- [ ] GitHub repo with setup instructions (README)
- [ ] Providers/models list (section 3)
- [ ] B2 + Genblaze usage (sections 4–5)
- [ ] ~3-min demo video (section 8)
- [ ] Star the Genblaze repo ⭐ (requested by the challenge)
