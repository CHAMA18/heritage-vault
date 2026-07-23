# HeritageAtlas implementation guide

HeritageAtlas is the interactive visual-answer layer for HeritageVault. Firebase remains the source of truth for the archive; ClickHouse stores query-optimized facts and relationships for high-speed visual exploration.

## What is implemented

- An interactive `#atlas` product view with prompt suggestions, a relationship constellation, timeline, memory geography, and source-evidence cards.
- Answers are computed from the signed-in user’s actual Firebase vault data. Empty archives receive an intentional onboarding state instead of fabricated results.
- ClickHouse DDL in `clickhouse/schema.sql` for facts, relationships, timeline rollups, and location rollups.
- Trigger.dev v4 background tasks that index archive facts and family edges into ClickHouse.

## Configure analytics

1. Create a ClickHouse Cloud service and run `clickhouse/schema.sql` in its SQL console.
2. Copy `.env.example` to `.env` locally and set the ClickHouse and Trigger.dev values. Do not put these in `VITE_*` variables.
3. In Trigger.dev, create a project, set the same server-side environment variables, then run `npm run trigger:dev`.
4. Deploy with `npm run trigger:deploy` when ready.

## Indexing flow

Your Firebase or server webhook should trigger `heritage-atlas-ingest-archive-fact` after a memory, person, story, or event is created or updated. Trigger `heritage-atlas-ingest-family-edge` when a `parentId` relationship changes. Use a stable idempotency key such as `vaultId:entityId:updatedAt` when triggering jobs.

## Security model

The browser never receives ClickHouse credentials or Trigger.dev secret keys. It reads the private archive from Firebase and renders the Atlas. Only server-side Trigger.dev jobs write derived, minimal analytical facts into ClickHouse.
