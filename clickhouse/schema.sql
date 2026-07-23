-- =====================================================================
-- HeritageAtlas — extended ClickHouse schema (primary database)
--
-- This file extends the original clickhouse/schema.sql with member, story,
-- and edge tables so the chat.agent() tools can query a complete archive
-- from ClickHouse rather than from in-memory demo data.
--
-- Apply with:  npm run clickhouse:schema
-- (which calls scripts/apply-clickhouse-schema.mjs)
-- =====================================================================

-- ── Original fact table (kept verbatim) ──────────────────────────────
CREATE TABLE IF NOT EXISTS heritage_atlas_facts
(
  vault_id String,
  fact_id String,
  entity_type LowCardinality(String),
  entity_id String,
  title String,
  description String,
  event_year Nullable(Int16),
  occurred_at DateTime64(3, 'UTC'),
  location String,
  related_entity_ids Array(String),
  tags Array(String),
  source_url String,
  payload_json String,
  ingested_at DateTime64(3, 'UTC') DEFAULT now64(3)
)
ENGINE = ReplacingMergeTree(ingested_at)
PARTITION BY toYYYYMM(occurred_at)
ORDER BY (vault_id, entity_type, entity_id, occurred_at, fact_id);

-- ── Family members ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS heritage_atlas_members
(
  vault_id String,
  member_id String,
  full_name String,
  relationship String,
  parent_id String,
  birth_year Nullable(Int16),
  death_year Nullable(Int16),
  portrait_url String,
  notes String,
  ingested_at DateTime64(3, 'UTC') DEFAULT now64(3)
)
ENGINE = ReplacingMergeTree(ingested_at)
ORDER BY (vault_id, member_id);

-- ── Stories (curated narratives built from memories) ─────────────────
CREATE TABLE IF NOT EXISTS heritage_atlas_stories
(
  vault_id String,
  story_id String,
  title String,
  excerpt String,
  body String,
  memory_ids Array(String),
  status LowCardinality(String),
  ingested_at DateTime64(3, 'UTC') DEFAULT now64(3)
)
ENGINE = ReplacingMergeTree(ingested_at)
ORDER BY (vault_id, story_id);

-- ── Edges (relationships between members) ────────────────────────────
CREATE TABLE IF NOT EXISTS heritage_atlas_edges
(
  vault_id String,
  edge_id String,
  from_entity_id String,
  to_entity_id String,
  relationship LowCardinality(String),
  confidence Float32 DEFAULT 1,
  evidence_ids Array(String),
  observed_at DateTime64(3, 'UTC'),
  ingested_at DateTime64(3, 'UTC') DEFAULT now64(3)
)
ENGINE = ReplacingMergeTree(ingested_at)
ORDER BY (vault_id, from_entity_id, to_entity_id, relationship, observed_at, edge_id);

-- ── Materialised view: facts per year (original) ─────────────────────
CREATE MATERIALIZED VIEW IF NOT EXISTS heritage_atlas_timeline_yearly
ENGINE = SummingMergeTree
ORDER BY (vault_id, event_year, entity_type)
AS SELECT
  vault_id,
  ifNull(event_year, toInt16(0)) AS event_year,
  entity_type,
  count() AS fact_count,
  groupUniqArray(20)(fact_id) AS fact_ids
FROM heritage_atlas_facts
WHERE event_year IS NOT NULL
GROUP BY vault_id, event_year, entity_type;

-- ── Materialised view: facts per location (original) ─────────────────
CREATE MATERIALIZED VIEW IF NOT EXISTS heritage_atlas_locations
ENGINE = SummingMergeTree
ORDER BY (vault_id, location, entity_type)
AS SELECT
  vault_id,
  location,
  entity_type,
  count() AS fact_count,
  groupUniqArray(20)(fact_id) AS fact_ids
FROM heritage_atlas_facts
WHERE location != ''
GROUP BY vault_id, location, entity_type;

-- ── Materialised view: facts per type ────────────────────────────────
CREATE MATERIALIZED VIEW IF NOT EXISTS heritage_atlas_types
ENGINE = SummingMergeTree
ORDER BY (vault_id, entity_type)
AS SELECT
  vault_id,
  entity_type,
  count() AS fact_count,
  groupUniqArray(50)(fact_id) AS fact_ids
FROM heritage_atlas_facts
GROUP BY vault_id, entity_type;

-- ── Materialised view: facts per decade ──────────────────────────────
CREATE MATERIALIZED VIEW IF NOT EXISTS heritage_atlas_decades
ENGINE = SummingMergeTree
ORDER BY (vault_id, decade, entity_type)
AS SELECT
  vault_id,
  (floor(event_year / 10) * 10)::Int16 AS decade,
  entity_type,
  count() AS fact_count
FROM heritage_atlas_facts
WHERE event_year IS NOT NULL
GROUP BY vault_id, decade, entity_type;
