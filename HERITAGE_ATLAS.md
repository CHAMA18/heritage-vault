# HeritageAtlas implementation guide

HeritageAtlas is the interactive visual-answer layer for HeritageVault. The
archive lives in Firebase (and a browser localStorage store); every visual
answer — charts, maps, timelines, constellations — is computed **in the
browser** from the user's own archive. There is no external database: the
agent is a deterministic VizSpec builder over the archive snapshot.

## What is implemented

- An interactive Agent view with prompt suggestions, a relationship
  constellation, timeline, memory geography, and source-evidence cards.
- Answers are computed from the signed-in user's actual archive data via
  `buildSpec(dataset, prompt)` (`src/agent/mock.ts`). Empty archives receive
  an intentional onboarding state instead of fabricated results.
- The Atlas view (`src/atlas/`) reuses the same intent interpreter.
- A **Genblaze media pipeline** (`genblaze-worker/`) that turns Story Mode
  chapters into narrated audio + archival illustration stored on Backblaze B2
  with SHA-256 provenance manifests.

## Configure the media pipeline (optional)

The Agent, Vault, Family Map, and Story Mode need **no configuration**. Only
the Genblaze media pipeline requires credentials:

1. Copy `.env.example` to `.env` and set the Backblaze B2 + provider values
   (`B2_KEY_ID`, `B2_APP_KEY`, `B2_BUCKET`, `B2_PUBLIC_URL_BASE`,
   `ELEVENLABS_API_KEY`, `OPENAI_API_KEY`). Never put these in `VITE_*`
   variables.
2. Install + run the worker: `cd genblaze-worker && pip install -r
   requirements.txt && uvicorn server:app --port 8787`
3. In dev, the Vite middleware proxies `/api/genblaze/*` to the worker — see
   `vite-agent-plugin.ts`. Story Mode's **Narrate** button uses it.

## Security model

The browser never receives B2, ElevenLabs, or OpenAI credentials. It only ever
talks to `/api/genblaze/*` (proxied server-side in dev), so no keys ship in
the bundle. The Agent itself is fully in-browser — no archive data leaves the
user's device, and answers are derived from the archive rather than invented.
