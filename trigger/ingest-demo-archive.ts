/**
 * HeritageAtlas — Ingest the demo archive into ClickHouse
 *
 * Trigger.dev task that loads the Banda–Chama demo dataset (members, memories,
 * stories, edges) into ClickHouse so the chat.agent() tools can query a real
 * database instead of in-memory data.
 *
 * Run once per vault (idempotent — ReplacingMergeTree dedupes on ingest_at).
 *
 *   npx trigger.dev@latest dev
 *   # then trigger the task from the dashboard or via:
 *   # await ingestDemoArchive.trigger({ vaultId: "demo-vault" })
 */
import { createClient } from "@clickhouse/client";
import { logger, schemaTask } from "@trigger.dev/sdk";
import { z } from "zod";
import { demoAtlasDataset } from "../src/demo-data";

const ingestSchema = z.object({
  vaultId: z.string().min(1).default("demo-vault"),
  /** Drop existing rows for this vault before re-inserting (default: true) */
  replace: z.boolean().default(true),
});

export const ingestDemoArchive = schemaTask({
  id: "heritage-atlas-ingest-demo-archive",
  schema: ingestSchema,
  retry: { maxAttempts: 3 },
  run: async (payload) => {
    const client = createClient({
      url: process.env.CLICKHOUSE_URL!,
      username: process.env.CLICKHOUSE_USERNAME!,
      password: process.env.CLICKHOUSE_PASSWORD!,
      database: process.env.CLICKHOUSE_DATABASE ?? "default",
    });

    const vaultId = payload.vaultId;
    const ds = demoAtlasDataset;

    logger.info("Ingesting demo archive into ClickHouse", {
      vaultId,
      members: ds.members.length,
      memories: ds.memories.length,
      stories: ds.stories.length,
    });

    if (payload.replace) {
      // Wipe this vault's rows from every table so re-ingests are clean
      for (const table of [
        "heritage_atlas_facts",
        "heritage_atlas_members",
        "heritage_atlas_stories",
        "heritage_atlas_edges",
      ]) {
        await client.query({
          query: `ALTER TABLE ${table} DELETE WHERE vault_id = {vaultId:String}`,
          query_params: { vaultId },
        });
      }
      logger.info("Existing rows cleared", { vaultId });
    }

    // 1. Members
    await client.insert({
      table: "heritage_atlas_members",
      format: "JSONEachRow",
      values: ds.members.map((m) => ({
        vault_id: vaultId,
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

    // 2. Facts (memories + members both become "facts" the agent can query)
    const memoryFacts = ds.memories.map((m) => ({
      vault_id: vaultId,
      fact_id: m.id,
      entity_type: m.type, // "letter" | "photo" | "audio" | "video" | "document"
      entity_id: m.id,
      title: m.title,
      description: m.description ?? "",
      event_year: m.year,
      occurred_at: m.year
        ? `${m.year}-01-01 00:00:00.000`
        : "1900-01-01 00:00:00.000",
      location: m.location ?? "",
      related_entity_ids: m.familyMemberIds ?? [],
      tags: m.tags ?? [],
      source_url: m.assetUrl ?? "",
      payload_json: JSON.stringify(m),
    }));
    await client.insert({
      table: "heritage_atlas_facts",
      format: "JSONEachRow",
      values: memoryFacts,
    });

    // 3. Stories
    await client.insert({
      table: "heritage_atlas_stories",
      format: "JSONEachRow",
      values: ds.stories.map((s) => ({
        vault_id: vaultId,
        story_id: s.id,
        title: s.title,
        excerpt: s.excerpt ?? "",
        body: s.body ?? "",
        memory_ids: s.memoryIds ?? [],
        status: s.status ?? "published",
      })),
    });

    // 4. Edges — derive parent → child edges from members
    const edges = ds.members
      .filter((m) => m.parentId)
      .map((m, i) => ({
        vault_id: vaultId,
        edge_id: `edge-${i + 1}`,
        from_entity_id: m.parentId!,
        to_entity_id: m.id,
        relationship: "parent_child",
        confidence: 1,
        evidence_ids: [] as string[],
        observed_at: `${m.birthYear ?? 1900}-01-01 00:00:00.000`,
      }));
    if (edges.length) {
      await client.insert({
        table: "heritage_atlas_edges",
        format: "JSONEachRow",
        values: edges,
      });
    }

    await client.close();

    logger.info("Demo archive ingested", {
      vaultId,
      rowsInserted: {
        members: ds.members.length,
        facts: memoryFacts.length,
        stories: ds.stories.length,
        edges: edges.length,
      },
    });

    return {
      vaultId,
      ingested: true,
      counts: {
        members: ds.members.length,
        facts: memoryFacts.length,
        stories: ds.stories.length,
        edges: edges.length,
      },
    };
  },
});
