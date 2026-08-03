# HeritageVault × Genblaze worker

A small Python service that turns a family story chapter into durable,
**provenance-verified media** using the [Genblaze SDK](https://github.com/backblaze-labs/genblaze):

| Step | Provider | Modality | Output |
|---|---|---|---|
| Narration | ElevenLabs (`eleven_v3`) | audio | `.mp3` |
| Archival scene | OpenAI (`dall-e-3`) | image | `.png` |
| Provenance | Genblaze manifest | data | `.json` (SHA-256) |

Every asset + its manifest is persisted to **Backblaze B2** via
`S3StorageBackend.for_backblaze(...)` — provider CDN URLs become durable,
credential-free B2 URLs, and each output is SHA-256-hashed so
`manifest.verify()` passes.

## Setup

```bash
cd genblaze-worker
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env        # fill in keys
set -a && source .env && set +a
```

### Backblaze B2 (one-time)

1. Create a B2 bucket, e.g. `heritage-vault-media`.
2. **Public bucket** (so the Vault gets permanent asset URLs): in Bucket
   settings set *Files in bucket are public* and set `B2_PUBLIC_URL_BASE`
   to `https://fNNN.backblazeb2.com/file/heritage-vault-media`.
3. Create an **Application Key** with write access to the bucket; put the
   Key ID in `B2_KEY_ID` and the Application Key in `B2_APP_KEY`.

### Provider keys

- `ELEVENLABS_API_KEY` — https://elevenlabs.io/app/settings/api-keys
- `OPENAI_API_KEY` — https://platform.openai.com/api-keys

## Run

CLI (one chapter):

```bash
python pipeline.py --title "The blue trunk" \
  --text "Samuel began saving letters because distance made details precious..."
```

HTTP server (used by the Vault's Vite middleware):

```bash
uvicorn server:app --port 8787
curl http://127.0.0.1:8787/health
```

## Verify provenance

The `/generate` response includes `manifest.verified` (computed by
`Manifest.verify()`, which requires every asset to declare a valid SHA-256).
Re-verify any run later:

```bash
pip install genblaze-cli
genblaze verify <manifest.json>          # downloaded from the B2 manifest URI
curl -X POST http://127.0.0.1:8787/verify -H 'Content-Type: application/json' \
  -d '{"manifest": {...}}'
```

## Security note

The `/generate` endpoint has **no auth** — anyone who can reach it can trigger
paid generations. Fine for the local hackathon demo; before any real deploy,
add a shared-secret header or rate limiting (the Vite proxy can inject it).

## Deploy

Any Python host works (Railway, Render, Fly, Replit, a VPS, or your laptop
during the demo). Set the same env vars, expose port `8787`, then point the
repo's `.env` at it:

```
GENBLAZE_WORKER_URL=https://your-worker.example.com
```

The browser only ever talks to the Vite middleware (`/api/genblaze/*`) —
credentials stay server-side.
