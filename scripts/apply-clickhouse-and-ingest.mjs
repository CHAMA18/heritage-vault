#!/usr/bin/env node
/**
 * Apply the HeritageAtlas ClickHouse schema + ingest the demo archive.
 *
 * Run: node scripts/apply-clickhouse-and-ingest.mjs
 *
 * Reads credentials from .env (or process.env). Idempotent — safe to re-run.
 */
import { readFileSync } from "node:fs";
import { createClient } from "@clickhouse/client";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

// Load .env manually (no dotenv dep needed)
try {
  const env = readFileSync(resolve(root, ".env"), "utf8");
  for (const line of env.split("\n")) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
} catch {
  // .env optional — fall back to process.env
}

const URL = process.env.CLICKHOUSE_URL;
const USERNAME = process.env.CLICKHOUSE_USERNAME;
const PASSWORD = process.env.CLICKHOUSE_PASSWORD;
const DATABASE = process.env.CLICKHOUSE_DATABASE ?? "default";

if (!URL || !USERNAME || !PASSWORD) {
  console.error("Missing CLICKHOUSE_URL / CLICKHOUSE_USERNAME / CLICKHOUSE_PASSWORD");
  process.exit(1);
}

const client = createClient({ url: URL, username: USERNAME, password: PASSWORD, database: DATABASE });

console.log("→ Connecting to ClickHouse:", URL);

// ── 1. Apply schema ──────────────────────────────────────────────────
const schema = readFileSync(resolve(root, "clickhouse/schema.sql"), "utf8");

// Split on semicolons. Strip comment-only lines so they don't pollute the
// statement list. ClickHouse accepts one DDL statement per query() call.
const statements = schema
  .split(/;\s*\n/)
  .map((s) =>
    s
      .split("\n")
      .filter((l) => !l.trim().startsWith("--"))
      .join("\n")
      .trim()
  )
  .filter((s) => s.length > 0);

console.log(`→ Applying ${statements.length} schema statements…`);
for (const stmt of statements) {
  try {
    await client.query({ query: stmt });
    const firstLine = stmt.split("\n").find((l) => l.trim() && !l.trim().startsWith("--"))?.trim().slice(0, 80);
    console.log("  ✓", firstLine);
  } catch (err) {
    console.error("  ✗", err.message?.slice(0, 120));
  }
}

// ── 2. Verify tables exist ───────────────────────────────────────────
console.log("\n→ Verifying tables…");
const tables = await client.query({
  query: "SELECT name FROM system.tables WHERE database = {db:String} ORDER BY name",
  query_params: { db: DATABASE },
  format: "JSONEachRow",
});
const tableRows = await tables.json();
console.log("  Tables:", tableRows.map((r) => r.name).join(", "));

// ── 3. Ingest the demo archive ───────────────────────────────────────
console.log("\n→ Loading demo dataset…");
const { demoAtlasDataset } = await import(resolve(root, "src/demo-data.ts"));
const VAULT_ID = "demo-vault";

// Clear existing rows for this vault (idempotent re-run)
for (const table of ["heritage_atlas_facts", "heritage_atlas_members", "heritage_atlas_stories", "heritage_atlas_edges"]) {
  await client.query({
    query: `ALTER TABLE ${table} DELETE WHERE vault_id = {vaultId:String}`,
    query_params: { vaultId: VAULT_ID },
  });
}
console.log("  ✓ Cleared existing rows for vault:", VAULT_ID);

// Members
await client.insert({
  table: "heritage_atlas_members",
  format: "JSONEachRow",
  values: demoAtlasDataset.members.map((m) => ({
    vault_id: VAULT_ID,
    member_id: m.id,
    full_name: m.fullName,
    relationship: m.relationship ?? "",
    parent_id: m.parentId ?? "",
    birth_year: m.birthYear,
    death_year: m.deathYear,
    portrait_url: m.portraitUrl ?? "",
    notes: m.notes ?? "",
  })),
});
console.log(`  ✓ Inserted ${demoAtlasDataset.members.length} members`);

// Facts (memories)
const facts = demoAtlasDataset.memories.map((m) => ({
  vault_id: VAULT_ID,
  fact_id: m.id,
  entity_type: m.type,
  entity_id: m.id,
  title: m.title,
  description: m.description ?? "",
  event_year: m.year,
  occurred_at: m.year ? `${m.year}-01-01 00:00:00.000` : "1900-01-01 00:00:00.000",
  location: m.location ?? "",
  related_entity_ids: m.familyMemberIds ?? [],
  tags: m.tags ?? [],
  source_url: m.assetUrl ?? "",
  payload_json: JSON.stringify(m),
}));
await client.insert({ table: "heritage_atlas_facts", format: "JSONEachRow", values: facts });
console.log(`  ✓ Inserted ${facts.length} memory facts`);

// Stories
await client.insert({
  table: "heritage_atlas_stories",
  format: "JSONEachRow",
  values: demoAtlasDataset.stories.map((s) => ({
    vault_id: VAULT_ID,
    story_id: s.id,
    title: s.title,
    excerpt: s.excerpt ?? "",
    body: s.body ?? "",
    memory_ids: s.memoryIds ?? [],
    status: s.status ?? "published",
  })),
});
console.log(`  ✓ Inserted ${demoAtlasDataset.stories.length} stories`);

// Edges (parent → child)
const edges = demoAtlasDataset.members
  .filter((m) => m.parentId)
  .map((m, i) => ({
    vault_id: VAULT_ID,
    edge_id: `edge-${i + 1}`,
    from_entity_id: m.parentId,
    to_entity_id: m.id,
    relationship: "parent_child",
    confidence: 1,
    evidence_ids: [],
    observed_at: `${m.birthYear ?? 1900}-01-01 00:00:00.000`,
  }));
await client.insert({ table: "heritage_atlas_edges", format: "JSONEachRow", values: edges });
console.log(`  ✓ Inserted ${edges.length} family edges`);

// ── 4. Verify counts ─────────────────────────────────────────────────
console.log("\n→ Verifying row counts…");
for (const table of ["heritage_atlas_facts", "heritage_atlas_members", "heritage_atlas_stories", "heritage_atlas_edges"]) {
  const r = await client.query({
    query: `SELECT count() AS c FROM ${table} WHERE vault_id = {vaultId:String}`,
    query_params: { vaultId: VAULT_ID },
    format: "JSONEachRow",
  });
  const rows = await r.json();
  console.log(`  ${table}: ${rows[0]?.c ?? 0} rows`);
}

// ── 5. Test a real query ─────────────────────────────────────────────
console.log("\n→ Test query: memories by year…");
const testRows = await client.query({
  query: `
    SELECT event_year, count() AS c
    FROM heritage_atlas_facts
    WHERE vault_id = {vaultId:String} AND event_year IS NOT NULL
    GROUP BY event_year
    ORDER BY event_year
    LIMIT 5
  `,
  query_params: { vaultId: VAULT_ID },
  format: "JSONEachRow",
});
const testData = await testRows.json();
console.log("  Sample:", testData);

await client.close();
console.log("\n✅ ClickHouse schema applied + demo archive ingested. Live and queryable.");
