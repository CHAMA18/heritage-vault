-- HeritageAtlas: query-optimized visual facts for ClickHouse.
-- Apply this file with the ClickHouse SQL console or clickhouse-client.

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
