import { createClient } from "@clickhouse/client";
import { logger, schemaTask } from "@trigger.dev/sdk";
import { z } from "zod";

const edgeSchema = z.object({
  vaultId: z.string().min(1),
  edgeId: z.string().min(1),
  fromEntityId: z.string().min(1),
  toEntityId: z.string().min(1),
  relationship: z.string().min(1),
  confidence: z.number().min(0).max(1).default(1),
  evidenceIds: z.array(z.string()).default([]),
  observedAt: z.string().datetime(),
});

export const ingestFamilyEdge = schemaTask({
  id: "heritage-atlas-ingest-family-edge",
  schema: edgeSchema,
  run: async (payload) => {
    const client = createClient({ url: process.env.CLICKHOUSE_URL, username: process.env.CLICKHOUSE_USERNAME, password: process.env.CLICKHOUSE_PASSWORD, database: process.env.CLICKHOUSE_DATABASE ?? "default" });
    await client.insert({ table: "heritage_atlas_edges", format: "JSONEachRow", values: [{ vault_id: payload.vaultId, edge_id: payload.edgeId, from_entity_id: payload.fromEntityId, to_entity_id: payload.toEntityId, relationship: payload.relationship, confidence: payload.confidence, evidence_ids: payload.evidenceIds, observed_at: payload.observedAt }] });
    await client.close();
    logger.info("HeritageAtlas relationship indexed", { vaultId: payload.vaultId, edgeId: payload.edgeId });
    return { indexed: true, edgeId: payload.edgeId };
  },
});
