# HeritageAtlas

> A visualization-first chat agent for family archives — the response IS the product: a chart, a map, a diagram. Never a paragraph.

**Try it:** [https://preview-3770180e-d32b-4a00-a0fb-1f99bf6dec67.space-z.ai/](https://preview-3770180e-d32b-4a00-a0fb-1f99bf6dec67.space-z.ai/) → log in → click **Agent** in the sidebar

## The thesis

Every chat agent gives you a wall of text. HeritageAtlas doesn't. Ask "Where did my family live?" and you get an interactive map with pulsing, sized markers. Ask "Show me the timeline" and you get an animated line chart. Ask "Who appears most often?" and you get a family constellation network diagram. Click any chart element to drill down into the next turn. The agent's best answer is always a tool call that returns a `VizSpec` — never prose.

## Architecture

```
Browser ──POST /api/agent-query──▶ Vite middleware ──▶ ClickHouse Cloud (live)
         ──TriggerChatTransport──▶ Trigger.dev cloud ──▶ chat.agent() ──▶ ClickHouse
                                   (Claude Sonnet 4.5 orchestrates 10 tools)
```

| Layer | Tech | Status |
|---|---|---|
| Primary database | **ClickHouse Cloud** (eu-central-1) — 4 tables + 4 materialised views | ✅ Live |
| Orchestration | **Trigger.dev `chat.agent()`** — 10 ClickHouse-querying tools, Claude Sonnet 4.5 | ✅ Code complete, deploying |
| Frontend | Vite + vanilla TS — hand-rolled SVG charts (no chart library) | ✅ Live |
| Design | Fraunces + Spectral + Satoshi, warm archival palette, cinematic motion | ✅ World-class |

### The 10 tools (each queries ClickHouse, returns a VizSpec)

| Tool | VizSpec kind | Question it answers |
|---|---|---|
| `queryOverview` | KPI cards | "Give me an overview" |
| `queryTimeline` | Line chart | "Show me the timeline" |
| `queryMap` | Geographic map | "Where did my family live?" |
| `queryPeople` | Network constellation | "Who appears most often?" |
| `queryEvidence` | Sortable table | "Show me source evidence" |
| `queryDecades` | Bar chart | "Memories by decade" |
| `queryTypes` | Donut chart | "What kinds of memories?" |
| `queryCompare` | Side-by-side comparison | "Compare the 1920s and 2020s" |
| `queryOldest` | Event timeline | "What are the oldest memories?" |
| `queryNewest` | Event timeline | "What are the newest memories?" |

## The experience

| Screen | What it does |
|---|---|
| **Landing** | Cinematic hero with cascade entrance, magnetic CTAs, drifting aurora, custom cursor |
| **Vault Dashboard** | Bento layout with sparklines, memory gallery with hover cinema, activity timeline |
| **Family Map** | Family constellation with parent-child edges |
| **Story Mode** | 5-chapter cinematic reading experience — drop caps, parallax figures, pull quotes, evidence rail, AI hand-off |
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
cp .env.example .env  # fill in ClickHouse + Trigger.dev creds
npm run dev
```

## Deploy the worker

```bash
npx trigger.dev@latest login     # browser OAuth
npx trigger.dev@latest deploy    # deploys chat.agent() + 10 tools
```

## Tech stack

- **ClickHouse Cloud** — primary database (4 tables, 4 materialised views)
- **Trigger.dev** — `chat.agent()` orchestration with Claude Sonnet 4.5
- **Vite** — dev server + build
- **Vanilla TypeScript** — no React, no chart library, no UI framework
- **Firebase** — auth + Firestore (pre-existing)
- **Fraunces + Spectral + Satoshi** — typography

## Repository

- **GitHub:** [CHAMA18/heritage-vault](https://github.com/CHAMA18/heritage-vault)
- **Live preview:** [https://preview-3770180e-d32b-4a00-a0fb-1f99bf6dec67.space-z.ai/](https://preview-3770180e-d32b-4a00-a0fb-1f99bf6dec67.space-z.ai/)
- **10 commits** on `main` — clean history, no credential leaks
