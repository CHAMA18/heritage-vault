# HeritageVault

> A visualization-first chat agent for family archives — the response IS the product: a chart, a map, a diagram. Never a paragraph.

**Try it:** [https://chama18.github.io/heritage-vault/#family-map](https://chama18.github.io/heritage-vault/#family-map) → log in → click **Agent** in the sidebar

## The thesis

Every chat agent gives you a wall of text. HeritageVault doesn't. Ask "Where did my family live?" and you get an interactive map with pulsing, sized markers. Ask "Show me the timeline" and you get an animated line chart. Ask "Who appears most often?" and you get a family constellation network diagram. Click any chart element to drill down into the next turn. The agent's best answer is always a `VizSpec` — never prose.

## Architecture

```
Agent:  browser ── in-browser archive runtime (buildSpec over the archive) ── no backend

Media:  Story Mode "Narrate" ──POST /api/genblaze/generate──▶ Vite proxy (dev)
        ──▶ genblaze-worker/ (Python · Genblaze: ElevenLabs TTS + DALL·E)
        ──▶ S3StorageBackend.for_backblaze() ──▶ Backblaze B2 (assets + SHA-256 manifest)
        ──▶ manifest.verify() ──▶ "Genblaze" verified badge in Story Mode
```

| Layer | Tech | Status |
|---|---|---|
| Archive | **Firebase** auth + Firestore, with an in-browser localStorage archive store | ✅ Live |
| Agent | **In-browser runtime** — deterministic VizSpec builder over your archive (no external database) | ✅ Live |
| Media pipeline | **Genblaze (Python)** → ElevenLabs TTS + OpenAI DALL·E → **Backblaze B2** with provenance manifests | 🔧 Run locally |
| Frontend | Vite + vanilla TS — hand-rolled SVG charts (no chart library) | ✅ Live |
| Design | Fraunces + Spectral + Satoshi, warm archival palette, cinematic motion | ✅ World-class |

### The agent's intents (each computes a VizSpec from your archive)

| Intent | VizSpec kind | Question it answers |
|---|---|---|
| overview | KPI cards | "Give me an overview" |
| timeline | Line chart | "Show me the timeline" |
| geography | Geographic map | "Where did my family live?" |
| people | Network constellation | "Who appears most often?" |
| evidence | Sortable table | "Show me source evidence" |
| decades | Bar chart | "Memories by decade" |
| types | Donut chart | "What kinds of memories?" |
| compare_decades | Side-by-side comparison | "Compare the 1920s and 2020s" |
| oldest / newest | Event timeline | "What are the oldest/newest memories?" |

## The experience

| Screen | What it does |
|---|---|
| **Landing** | Cinematic hero with cascade entrance, magnetic CTAs, drifting aurora, custom cursor |
| **Vault Dashboard** | Bento layout with sparklines, memory gallery with hover cinema, activity timeline |
| **Family Map** | Family constellation with parent-child edges |
| **Story Mode** | 5-chapter cinematic reading experience — drop caps, parallax figures, pull quotes, evidence rail, AI hand-off, and a **Narrate** button that generates narration + illustration via the Genblaze pipeline |
| **Agent** | Visualization-first chat — every response is a chart/map/diagram, click any element to drill down |

## The story (demo data: the Banda–Chama family, 1912–2026)

**Demo access (pre-filled on the login screen):**

| Field | Value |
|---|---|
| Email | `curator@heritagevault.family` |
| Password | `HeritageVault2026!` |

Or click **Demo Mode** on the login screen to explore without an account.

- **Samuel Banda** (1897–1964) — railway clerk turned village teacher who saved every letter in a blue tin trunk
- **Beatrice Phiri Banda** (1901–1982) — seamstress, her embroidered tablecloth became the centrepiece of family gatherings
- **114 years** of memories across 7 locations in Zambia and Zimbabwe
- **19 memories** (letters, photos, audio recordings, documents) — from a 1912 railway postcard to a 2026 hand-drawn atlas
- **15 family members** across 5 generations, connected by 12 parent-child edges

## Run it locally

```bash
git clone https://github.com/CHAMA18/heritage-vault.git
cd heritage-vault
npm install
npm run dev
```

The Agent, Vault, and Story Mode all work with zero configuration — the archive
lives in your browser. Only the **Genblaze media pipeline** needs credentials:

1. Start the worker: `cd genblaze-worker && pip install -r requirements.txt && uvicorn server:app --port 8787`
2. Fill in `.env` — see [`.env.example`](.env.example) and
   [`genblaze-worker/README.md`](genblaze-worker/README.md)
   (`B2_KEY_ID`, `B2_APP_KEY`, `B2_BUCKET`, `B2_PUBLIC_URL_BASE`,
   `ELEVENLABS_API_KEY`, `OPENAI_API_KEY`, `GENBLAZE_WORKER_URL`)
3. Open Story Mode → **Narrate** on any chapter

## Backblaze B2 + Genblaze (hackathon media pipeline)

Story Mode can turn any chapter into **provenance-verified media**: an
ElevenLabs narration (.mp3) and an archival DALL·E illustration (.png),
persisted to **Backblaze B2** with a SHA-256 provenance manifest —
"prompt → pipeline → durable storage", exactly the [Backblaze Generative AI
Media Hackathon](https://devpost.com/software/...) brief.

- `genblaze-worker/pipeline.py` builds a real Genblaze `Pipeline`:
  `ElevenLabsTTSProvider` + `DalleProvider`, chained through the
  `ObjectStorageSink` → B2 via `S3StorageBackend.for_backblaze(...)` with
  `KeyStrategy.HIERARCHICAL`.
- Every run emits a canonical manifest; assets are SHA-256-hashed by the sink
  so `Manifest.verify()` passes — the UI shows the run id + hash and renders a
  **"Genblaze" verified badge** (expand "Provenance manifest" on any narrated
  chapter).
- Credentials stay server-side in the worker; the Vite middleware proxies
  `/api/genblaze/*` in dev, so no B2 / ElevenLabs / OpenAI keys ship in the
  browser bundle.

## Tech stack

- **Vite** — dev server + build
- **Vanilla TypeScript** — no React, no chart library, no UI framework
- **Firebase** — auth + Firestore (pre-existing)
- **Genblaze + Backblaze B2** — media pipeline with provenance manifests
- **ElevenLabs + OpenAI** — TTS narration + DALL·E illustration
- **Fraunces + Spectral + Satoshi** — typography

## Repository

- **GitHub:** [CHAMA18/heritage-vault](https://github.com/CHAMA18/heritage-vault)
- **Live preview:** [https://chama18.github.io/heritage-vault/#family-map](https://chama18.github.io/heritage-vault/#family-map)
- **Hackathon submission:** [`HACKATHON_SUBMISSION.md`](HACKATHON_SUBMISSION.md)
