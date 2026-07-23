import { createClient } from "@clickhouse/client";
import { logger, schemaTask } from "@trigger.dev/sdk";
import { z } from "zod";

const factSchema = z.object({
  vaultId: z.string().min(1),
  factId: z.string().min(1),
  entityType: z.enum(["memory", "person", "story", "event"]),
  entityId: z.string().min(1),
  title: z.string().default(""),
  description: z.string().default(""),
  eventYear: z.number().int().min(1000).max(2100).nullable().default(null),
  occurredAt: z.string().datetime(),
  location: z.string().default(""),
  relatedEntityIds: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  sourceUrl: z.string().default(""),
  payload: z.record(z.string(), z.unknown()).default({}),
});

const clickhouse = () => createClient({
  url: process.env.CLICKHOUSE_URL,
  username: process.env.CLICKHOUSE_USERNAME,
  password: process.env.CLICKHOUSE_PASSWORD,
  database: process.env.CLICKHOUSE_DATABASE ?? "default",
});

export const ingestArchiveFact = schemaTask({
  id: "heritage-atlas-ingest-archive-fact",
  schema: factSchema,
  run: async (payload) => {
    const client = clickhouse();
    await client.insert({
      table: "heritage_atlas_facts",
      format: "JSONEachRow",
      values: [{
        vault_id: payload.vaultId,
        fact_id: payload.factId,
        entity_type: payload.entityType,
        entity_id: payload.entityId,
        title: payload.title,
        description: payload.description,
        event_year: payload.eventYear,
        occurred_at: payload.occurredAt,
        location: payload.location,
        related_entity_ids: payload.relatedEntityIds,
        tags: payload.tags,
        source_url: payload.sourceUrl,
        payload_json: JSON.stringify(payload.payload),
      }],
    });
    await client.close();
    logger.info("HeritageAtlas fact indexed", { vaultId: payload.vaultId, factId: payload.factId, entityType: payload.entityType });
    return { indexed: true, factId: payload.factId };
  },
});
