# Heritage Atlas

> **Your family, made explorable.**

[![Deploy GitHub Pages](https://github.com/CHAMA18/heritage-vault/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/CHAMA18/heritage-vault/actions/workflows/deploy-pages.yml)

**Heritage Atlas** is a visual, evidence-led family archive. Rather than returning a wall of text, its agent turns questions about a family’s history into interactive timelines, relationship constellations, maps, and source trails that can be explored and verified.

**Live showcase:** [chama18.github.io/heritage-vault](https://chama18.github.io/heritage-vault/)

> GitHub Pages publishes the polished client experience. The live ClickHouse and Trigger.dev path is intentionally deployed separately, because database and worker credentials must never be exposed in a static site.

## Why this exists

Most family archives are scattered across phones, folders, email threads, and fading boxes of photographs. Even when that material is digitised, it normally stays trapped in a grid of files with little context about who appears, where events happened, or how individual memories connect.

Heritage Atlas treats an archive as a connected body of evidence. It offers a human way to browse a family’s past and an agent that makes the answer itself useful: a visual artefact to inspect, not a paragraph to skim.

## The experience

| Surface | What it enables |
| --- | --- |
| **Landing** | A cinematic entry point, sign-in flow, and a direct hand-off to the visual archive. |
| **Vault** | A living overview of preserved memories, people, date coverage, locations, and recent additions. |
| **Family Map** | An editable constellation of relatives and parent-child relationships, with connected nodes rather than a flat contact list. |
| **Story Mode** | A guided, chapter-based narrative grounded in the same source memories. |
| **Heritage Atlas** | An explorable answer layer that makes relationships, geography, timelines, and evidence visible together. |
| **Agent** | A visualization-first chat experience with clickable charts, follow-up prompts, recent questions, and recovery states. |

### Demonstration archive

The bundled demonstration follows the **Banda–Chama family** across 1912–2026: 15 people, five generations, 19 memories, and seven places. It is deliberately rich enough to demonstrate chronology, location, family links, source evidence, and narrative storytelling without reducing the product to placeholder cards.

## Beyond the wall of text

The central product decision is simple: the agent’s best response should not be a paragraph.

| Ask | Explore |
| --- | --- |
| “How did our family story unfold?” | A living timeline with eras, events, and drill-down evidence. |
| “Where did our family live?” | A geographic memory map with location density. |
| “Who appears most often?” | A relationship constellation connecting people to shared memories. |
| “What are the oldest records?” | A source-backed event trail, not a search-result dump. |
| “Compare the 1920s and 2020s.” | A visual comparison of decades, formats, and archive activity. |

Each visual answer includes a source label and supports follow-up exploration. The goal is an archive a family can understand at a glance while retaining a path back to the evidence behind every claim.

## Architecture

```text
                         ┌──────────────────────────────────┐
                         │       Heritage Atlas client       │
                         │ Vite + TypeScript + hand-built SVG│
                         └───────────────┬──────────────────┘
                                         │
                 visual query / interaction / drill-down
                                         │
             ┌───────────────────────────▼───────────────────────────┐
             │                  Trigger.dev worker                    │
             │  chat.agent() + Claude Sonnet 4.5 + 10 typed tools     │
             └───────────────────────────┬───────────────────────────┘
                                         │
                       parameterised ClickHouse queries
                                         │
             ┌───────────────────────────▼───────────────────────────┐
             │                 ClickHouse Cloud                       │
             │ facts · members · stories · edges · materialised views │
             └───────────────────────────────────────────────────────┘
```

### ClickHouse Cloud

ClickHouse is the archive’s analytical source of truth. The schema is designed around durable facts instead of UI-only objects:

- `heritage_atlas_facts` stores memory facts, dates, places, tags, related entities, source URLs, and a structured payload.
- `heritage_atlas_members` stores people and their biographical context.
- `heritage_atlas_edges` stores family relationships and the evidence that supports them.
- `heritage_atlas_stories` stores curated narratives constructed from memory identifiers.
- Materialised views pre-aggregate archive facts by **year**, **location**, **type**, and **decade** for responsive visual answers.
- `heritage_atlas_users` holds registered account profile data.

The agent’s tools issue focused ClickHouse queries and return a compact `VizSpec` payload. The browser renders that payload as an interactive chart, map, constellation, comparison, or evidence list.

### Trigger.dev and `chat.agent()`

Trigger.dev hosts the long-running, retriable intelligence layer. The `heritageAtlasAgent` worker uses `chat.agent()` with Claude Sonnet 4.5 to select from ten typed archive tools:

1. `queryOverview`
2. `queryTimeline`
3. `queryMap`
4. `queryPeople`
5. `queryEvidence`
6. `queryDecades`
7. `queryTypes`
8. `queryCompare`
9. `queryOldest`
10. `queryNewest`

The model orchestrates tool selection; ClickHouse remains the data authority. This separation keeps the agent grounded and makes the response deterministic enough to render safely as a visual interface.

## Technology

- **Vite 6** for the client build and local development server
- **Vanilla TypeScript** for application state, navigation, rendering, and interaction
- **ClickHouse Cloud** for archive facts and analytical views
- **Trigger.dev** for `chat.agent()` orchestration and background ingestion jobs
- **AI SDK + Anthropic** for tool-aware agent reasoning
- **Firebase** for authentication and account persistence
- **Satoshi**, Fraunces, and Spectral for the editorial visual system
- **GitHub Pages** for the public static showcase

## Local development

### Prerequisites

- Node.js 22+
- npm 10+
- A ClickHouse Cloud service for live archive queries
- A Trigger.dev project for the agent worker

### Install and run

```bash
git clone https://github.com/CHAMA18/heritage-vault.git
cd heritage-vault
npm install
cp .env.example .env
npm run dev
```

The Vite application runs at `http://localhost:8002` by default.

### Verify the client build

```bash
npm run typecheck
npm run build
npm run preview
```

## Live data setup

### 1. Configure environment variables

Copy `.env.example` to `.env` and set only your own credentials. Never commit this file.

```bash
CLICKHOUSE_URL=https://your-clickhouse-service.clickhouse.cloud:8443
CLICKHOUSE_USERNAME=default
CLICKHOUSE_PASSWORD=your-secret
CLICKHOUSE_DATABASE=default

TRIGGER_PROJECT_REF=proj_your_project
TRIGGER_SECRET_KEY=tr_dev_or_prod_your_secret

# Browser-safe identifiers only — never a Trigger secret key.
VITE_TRIGGER_PROJECT_REF=proj_your_project
VITE_TRIGGER_PUBLIC_TOKEN=your_public_browser_token
```

### 2. Create the ClickHouse schema

```bash
npm run clickhouse:schema
```

The schema lives in [`clickhouse/schema.sql`](clickhouse/schema.sql). It is idempotent, so it can be run again safely when setting up a clean environment.

### 3. Deploy the Trigger.dev worker

```bash
npx trigger.dev@latest login
npx trigger.dev@latest deploy
```

Before production deployment, add `CLICKHOUSE_URL`, `CLICKHOUSE_USERNAME`, `CLICKHOUSE_PASSWORD`, and `CLICKHOUSE_DATABASE` to the Trigger.dev environment. These remain server-side and are never included in the static Pages build.

### 4. Ingest archive data

The repository includes ingestion tasks for archive facts, family edges, and a complete demonstration archive. Trigger.dev performs the ingestion in the background and retries safely when a job encounters a transient failure.

## GitHub Pages deployment

The public site is configured to serve the compiled `gh-pages` branch at [chama18.github.io/heritage-vault](https://chama18.github.io/heritage-vault/). The repository also includes [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) for accounts where GitHub Actions is available. That workflow:

1. installs the locked dependencies;
2. type-checks and builds the Vite client;
3. uploads the `dist/` artifact;
4. deploys the artifact to GitHub Pages.

The build uses relative asset paths, so it works under the `/heritage-vault/` repository subpath without broken logos, fonts, or route assets. When the account’s GitHub Actions billing lock is resolved, switch Pages back to **GitHub Actions** to restore automatic deployment on every push to `main`.

## Security model

- `.env` and local deployment configuration are excluded from Git.
- ClickHouse credentials live only in local/server environments and Trigger.dev’s secret store.
- The browser receives only public configuration values needed to establish an authenticated session.
- The GitHub Pages build contains no database passwords, Trigger secret keys, or private access tokens.
- The public Pages site is a static showcase; production query endpoints should live behind an authenticated server or worker boundary.

## Repository map

```text
.
├── clickhouse/schema.sql         # Archive data model and analytical views
├── trigger/                      # chat.agent() and ingestion tasks
├── src/agent/                    # Visual chat transport, state, and renderers
├── src/atlas/                    # Heritage Atlas visual answer experience
├── src/family-map.ts             # Relationship map rendering and editing
├── src/story-mode.ts             # Evidence-led narrative view
├── src/vault-dashboard.ts        # Archive dashboard and memory gallery
├── vite-agent-plugin.ts          # Local API middleware for live development
├── scripts/                      # Schema, sync, deployment, and demo helpers
└── .github/workflows/            # GitHub Pages automation
```

## Submission copy

**Tagline:** *Your family, made explorable.*

**Project description:** Heritage Atlas transforms family archives into an evidence-led visual experience. Ask a question and explore the answer as a timeline, relationship constellation, geography view, or source trail—never a wall of text.

**How ClickHouse is used:** ClickHouse Cloud stores archive facts, people, stories, relationship edges, and materialised views. The agent queries it for fast, grounded visual answers across dates, places, family connections, and evidence.

**How Trigger.dev is used:** Trigger.dev runs a `chat.agent()` worker that uses Claude Sonnet 4.5 to orchestrate ten typed ClickHouse tools. It returns a visual specification for the client to render and handles durable ingestion workflows for archive data.

## License

This project is provided for hackathon demonstration and product prototyping. Contact the repository owner for any reuse beyond that scope.
