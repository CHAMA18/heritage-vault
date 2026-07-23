/**
 * HeritageAtlas Agent — Trigger.dev task
 *
 * Server-side task that turns a natural-language question into a VizSpec:
 *   1. Interpret the prompt (intent + parameters)
 *   2. Run the appropriate ClickHouse query against `heritage_atlas_facts`
 *      and the `heritage_atlas_timeline_yearly` / `heritage_atlas_locations`
 *      materialised views
 *   3. Shape the rows into a `VizSpec` and return it
 *
 * This task is the single source of truth for "what the agent does". When
 * Trigger.dev + ClickHouse credentials are configured (see `.env.example`),
 * the browser invokes this task via the Trigger.dev SDK and renders the
 * returned spec. When credentials are absent, the browser falls back to the
 * local mock agent (`mock.ts`) which produces equivalent specs from the
 * in-memory demo dataset so the chat is fully interactive in any context.
 *
 * Run this task with:
 *   npx trigger.dev@latest dev   # local dev
 *   npx trigger.dev@latest deploy   # production
 */
import { createClient } from "@clickhouse/client";
import { logger, schemaTask } from "@trigger.dev/sdk";
import { z } from "zod";
import type { VizSpec } from "../src/agent/spec";

const agentQuerySchema = z.object({
  vaultId: z.string().min(1),
  prompt: z.string().min(1).max(500),
  /** Optional prior prompts in the conversation — used for follow-up context */
  history: z
    .array(z.object({ role: z.enum(["user", "agent"]), prompt: z.string() }))
    .default([]),
});

export type AgentQuery = z.infer<typeof agentQuerySchema>;

/**
 * The intent recognised from the prompt. Each intent maps to a known
 * ClickHouse query and a default VizSpec kind. The interpreter is deliberately
 * keyword-driven (no LLM round-trip) so the agent stays fast (<200ms typical).
 */
export type AgentIntent =
  | "timeline"
  | "geography"
  | "people"
  | "evidence"
  | "decades"
  | "types"
  | "compare_decades"
  | "oldest"
  | "newest"
  | "overview";

export interface Interpretation {
  intent: AgentIntent;
  /** Free-text terms extracted from the prompt (used for filtering) */
  terms: string[];
  /** Decade like 1940, 1950 — if the prompt mentions one */
  decade?: number;
  /** Person name — if the prompt mentions one */
  person?: string;
  /** Place — if the prompt mentions one */
  place?: string;
}

const STOPWORDS = new Set([
  "the", "a", "an", "of", "to", "in", "on", "at", "by", "for", "with",
  "about", "show", "tell", "give", "me", "my", "our", "their", "family",
  "what", "when", "where", "who", "which", "how", "and", "or", "is", "are",
  "was", "were", "be", "been", "from", "that", "this", "these", "those",
  "across", "between", "during", "over", "under", "into",
]);

/** Exported so the browser-side mock agent can reuse the exact same intent logic. */
export function interpret(prompt: string): Interpretation {
  const lower = prompt.toLowerCase();
  const terms = (lower.match(/[a-z]{3,}/g) ?? []).filter((t) => !STOPWORDS.has(t));

  let intent: AgentIntent = "overview";
  if (/\b(timeline|chronolog|over time|by year|years|decades?)\b/.test(lower)) {
    intent = "timeline";
  } else if (/\b(map|where|place|location|geograph|countr|cit(y|ies))\b/.test(lower)) {
    intent = "geography";
  } else if (/\b(people|person|relative|member|family tree|constellation|connected)\b/.test(lower)) {
    intent = "people";
  } else if (/\b(evidence|source|proof|records?)\b/.test(lower)) {
    intent = "evidence";
  } else if (/\b(decade|1950s|1960s|1970s|1980s|1990s|2000s|2010s|2020s)\b/.test(lower)) {
    intent = "decades";
  } else if (/\b(type|kind|photo|letter|audio|video|document|format)\b/.test(lower)) {
    intent = "types";
  } else if (/\b(oldest|earliest|first|beginning)\b/.test(lower)) {
    intent = "oldest";
  } else if (/\b(newest|latest|last|recent)\b/.test(lower)) {
    intent = "newest";
  } else if (/\b(compare|versus|vs|against|difference)\b/.test(lower)) {
    intent = "compare_decades";
  }

  const decadeMatch = lower.match(/\b(18|19|20|21)(\d0)s?\b/);
  const decade = decadeMatch ? parseInt(`${decadeMatch[1]}${decadeMatch[2]}`, 10) : undefined;

  // Crude person extraction: any capitalised word in the original prompt
  const personMatch = prompt.match(/\b([A-Z][a-z]+)\b/);
  const knownPeople = new Set([
    "Samuel", "Beatrice", "Martha", "Joseph", "Agnes", "Edward",
    "Ruth", "Daniel", "Chungu", "Tapiwa", "Linda", "Miles",
    "Nandi", "Malia", "Theo",
  ]);
  const person = personMatch && knownPeople.has(personMatch[1]) ? personMatch[1] : undefined;

  const placeMatch = prompt.match(/\b(Livingstone|Lusaka|Mongu|Kabwe|Ndola|Kitwe|Harare|Bulawayo)\b/);
  const place = placeMatch ? placeMatch[1] : undefined;

  return { intent, terms, decade, person, place };
}

/**
 * The ClickHouse client. Configured from environment variables that match
 * `.env.example`. In production this is a ClickHouse Cloud instance.
 */
function ch() {
  return createClient({
    url: process.env.CLICKHOUSE_URL!,
    username: process.env.CLICKHOUSE_USERNAME!,
    password: process.env.CLICKHOUSE_PASSWORD!,
    database: process.env.CLICKHOUSE_DATABASE ?? "default",
  });
}

async function queryTimeline(vaultId: string, interp: Interpretation) {
  const client = ch();
  const rows = await client.query({
    query: `
      SELECT event_year, entity_type, sum(fact_count) AS fact_count
      FROM heritage_atlas_timeline_yearly
      WHERE vault_id = {vaultId:String}
        ${interp.decade ? "AND event_year >= {decMin:Int16} AND event_year < {decMax:Int16}" : ""}
      GROUP BY event_year, entity_type
      ORDER BY event_year
    `,
    query_params: interp.decade
      ? { vaultId, decMin: interp.decade, decMax: interp.decade + 10 }
      : { vaultId },
    format: "JSONEachRow",
  });
  const data = (await rows.json()) as Array<{
    event_year: number;
    entity_type: string;
    fact_count: number;
  }>;
  await client.close();
  return data;
}

async function queryLocations(vaultId: string) {
  const client = ch();
  const rows = await client.query({
    query: `
      SELECT location, entity_type, sum(fact_count) AS fact_count
      FROM heritage_atlas_locations
      WHERE vault_id = {vaultId:String}
      GROUP BY location, entity_type
      ORDER BY fact_count DESC
      LIMIT 12
    `,
    query_params: { vaultId },
    format: "JSONEachRow",
  });
  const data = (await rows.json()) as Array<{
    location: string;
    entity_type: string;
    fact_count: number;
  }>;
  await client.close();
  return data;
}

async function queryPeople(vaultId: string) {
  const client = ch();
  const rows = await client.query({
    query: `
      SELECT
        entity_id,
        title AS full_name,
        any(description) AS relationship,
        count() AS fact_count
      FROM heritage_atlas_facts
      WHERE vault_id = {vaultId:String} AND entity_type = 'person'
      GROUP BY entity_id, full_name
      ORDER BY fact_count DESC
      LIMIT 20
    `,
    query_params: { vaultId },
    format: "JSONEachRow",
  });
  const people = (await rows.json()) as Array<{
    entity_id: string;
    full_name: string;
    relationship: string;
    fact_count: number;
  }>;

  // Edges — relationships between people
  const edgeRows = await client.query({
    query: `
      SELECT from_entity_id, to_entity_id, relationship, confidence
      FROM heritage_atlas_edges
      WHERE vault_id = {vaultId:String}
      LIMIT 100
    `,
    query_params: { vaultId },
    format: "JSONEachRow",
  });
  const edges = (await edgeRows.json()) as Array<{
    from_entity_id: string;
    to_entity_id: string;
    relationship: string;
    confidence: number;
  }>;
  await client.close();
  return { people, edges };
}

async function queryEvidence(vaultId: string, interp: Interpretation, limit = 20) {
  const client = ch();
  const rows = await client.query({
    query: `
      SELECT title, description, event_year, location, entity_type, tags
      FROM heritage_atlas_facts
      WHERE vault_id = {vaultId:String}
        ${interp.person ? "AND title ILIKE {personPat:String}" : ""}
        ${interp.place ? "AND location ILIKE {placePat:String}" : ""}
      ORDER BY event_year
      LIMIT {limit:UInt32}
    `,
    query_params: {
      vaultId,
      personPat: interp.person ? `%${interp.person}%` : "%",
      placePat: interp.place ? `%${interp.place}%` : "%",
      limit,
    },
    format: "JSONEachRow",
  });
  const data = (await rows.json()) as Array<{
    title: string;
    description: string;
    event_year: number | null;
    location: string;
    entity_type: string;
    tags: string[];
  }>;
  await client.close();
  return data;
}

/**
 * The task itself. Trigger.dev wraps this with retries, observability, and
 * idempotency. The browser invokes it via:
 *
 *   import { runTask } from "@trigger.dev/sdk/react";
 *   const result = await runTask("heritage-atlas-agent-query", { payload });
 */
export const agentQuery = schemaTask({
  id: "heritage-atlas-agent-query",
  schema: agentQuerySchema,
  retry: { maxAttempts: 2 },
  run: async (payload, { signal }) => {
    const start = Date.now();
    logger.info("HeritageAtlas agent invoked", { vaultId: payload.vaultId, prompt: payload.prompt });

    const interp = interpret(payload.prompt);
    logger.info("Intent interpreted", { intent: interp.intent, terms: interp.terms });

    signal?.throwIfAborted();

    // Dispatch to the appropriate ClickHouse query and shape the result.
    // Each branch produces a fully-populated VizSpec.
    const spec = await buildSpecFromIntent(payload, interp, signal);

    spec.elapsedMs = Date.now() - start;
    spec.source = "ClickHouse · heritage_atlas_facts";
    logger.info("Agent response ready", { kind: spec.kind, elapsedMs: spec.elapsedMs });

    return spec;
  },
});

/**
 * Intent → VizSpec builder. The Trigger.dev task uses this; the mock agent
 * (`mock.ts`) imports it for the intent interpretation only and then synthesises
 * the spec from the in-memory dataset — keeping the intent contract identical.
 */
async function buildSpecFromIntent(
  payload: AgentQuery,
  interp: Interpretation,
  signal: AbortSignal | undefined
): Promise<VizSpec> {
  signal?.throwIfAborted();

  switch (interp.intent) {
    case "timeline": {
      const rows = await queryTimeline(payload.vaultId, interp);
      const byYear = new Map<number, number>();
      rows.forEach((r) => byYear.set(r.event_year, (byYear.get(r.event_year) ?? 0) + r.fact_count));
      const years = [...byYear.keys()].sort((a, b) => a - b);
      return {
        kind: "line",
        title: "Memories across time",
        caption: `Memory density by year${interp.decade ? ` · ${interp.decade}s` : ""}.`,
        verdict: `${years.length} years with preserved memories, peaking in ${
          years.reduce((a, b) => (byYear.get(a)! > byYear.get(b)! ? a : b))
        }.`,
        prompt: payload.prompt,
        sql: `SELECT event_year, sum(fact_count) FROM heritage_atlas_timeline_yearly GROUP BY event_year ORDER BY event_year`,
        series: [
          {
            name: "Memories",
            points: years.map((y) => ({ label: String(y), value: byYear.get(y) ?? 0 })),
          },
        ],
        followups: [
          "Where did these memories happen?",
          "Who appears most often in this period?",
          "What kinds of memories are these?",
        ],
      };
    }
    case "geography": {
      const rows = await queryLocations(payload.vaultId);
      return {
        kind: "map",
        title: "Where the archive lives",
        caption: "Memory density by location.",
        verdict: `${rows.length} places appear in your archive, led by ${rows[0]?.location ?? "—"}.`,
        prompt: payload.prompt,
        sql: `SELECT location, sum(fact_count) FROM heritage_atlas_locations GROUP BY location ORDER BY fact_count DESC LIMIT 12`,
        points: rows.map((r, i) => ({
          place: r.location,
          count: r.fact_count,
          x: 12 + ((i * 29) % 70),
          y: 18 + ((i * 37) % 56),
          drilldown: `Show me memories from ${r.location}`,
        })),
        followups: [
          "Show me the timeline for these places",
          "Which people are tied to these locations?",
          "Compare locations by decade",
        ],
      };
    }
    case "people": {
      const { people, edges } = await queryPeople(payload.vaultId);
      return {
        kind: "network",
        title: "Your family constellation",
        caption: "People in the archive, connected by recorded relationships.",
        verdict: `${people.length} people, ${edges.length} recorded relationships.`,
        prompt: payload.prompt,
        sql: `SELECT entity_id, title, count() FROM heritage_atlas_facts WHERE entity_type='person' GROUP BY entity_id, title`,
        nodes: people.map((p) => ({
          id: p.entity_id,
          label: p.full_name,
          group: p.relationship,
          weight: p.fact_count,
        })),
        edges: edges.map((e) => ({
          from: e.from_entity_id,
          to: e.to_entity_id,
          label: e.relationship,
          weight: e.confidence,
        })),
        followups: [
          "Show me the oldest person in the archive",
          "Who is most connected?",
          "Timeline for Samuel Banda",
        ],
      };
    }
    case "evidence": {
      const rows = await queryEvidence(payload.vaultId, interp, 12);
      return {
        kind: "table",
        title: "Source evidence",
        caption: `Traceable records${interp.person ? ` mentioning ${interp.person}` : ""}.`,
        verdict: `${rows.length} records, each linkable back to its source.`,
        prompt: payload.prompt,
        sql: `SELECT title, event_year, location, entity_type FROM heritage_atlas_facts ORDER BY event_year LIMIT 12`,
        headers: ["Year", "Title", "Location", "Kind"],
        rows: rows.map((r) => ({
          cells: [
            r.event_year ? String(r.event_year) : "—",
            r.title,
            r.location || "—",
            r.entity_type,
          ],
          drilldown: `Tell me more about "${r.title}"`,
        })),
        followups: [
          "Show me the oldest evidence",
          "Group this evidence by type",
          "Map this evidence by location",
        ],
      };
    }
    case "decades": {
      const rows = await queryTimeline(payload.vaultId, interp);
      const byDecade = new Map<number, number>();
      rows.forEach((r) => {
        const d = Math.floor(r.event_year / 10) * 10;
        byDecade.set(d, (byDecade.get(d) ?? 0) + r.fact_count);
      });
      const decades = [...byDecade.keys()].sort((a, b) => a - b);
      return {
        kind: "bar",
        title: "Memories by decade",
        caption: "How the archive grew, in ten-year windows.",
        verdict: `${decades.length} decades represented; ${decades.reduce((a, b) => (byDecade.get(a)! > byDecade.get(b)! ? a : b))}s is the densest.`,
        prompt: payload.prompt,
        sql: `SELECT floor(event_year/10)*10 AS decade, sum(fact_count) FROM heritage_atlas_timeline_yearly GROUP BY decade ORDER BY decade`,
        series: [
          {
            name: "Memories",
            points: decades.map((d) => ({ label: `${d}s`, value: byDecade.get(d) ?? 0 })),
          },
        ],
        followups: [
          "What happened in the busiest decade?",
          "Compare two decades side by side",
          "Show me the timeline in detail",
        ],
      };
    }
    case "types": {
      const rows = await queryEvidence(payload.vaultId, interp, 1000);
      const byType = new Map<string, number>();
      rows.forEach((r) => byType.set(r.entity_type, (byType.get(r.entity_type) ?? 0) + 1));
      const types = [...byType.entries()].sort((a, b) => b[1] - a[1]);
      return {
        kind: "donut",
        title: "What kinds of memories",
        caption: "The archive broken down by record type.",
        verdict: `${types.length} record types; ${types[0]?.[0] ?? "—"} is the most common.`,
        prompt: payload.prompt,
        sql: `SELECT entity_type, count() FROM heritage_atlas_facts GROUP BY entity_type ORDER BY count() DESC`,
        series: [
          {
            name: "Records",
            points: types.map(([label, value]) => ({ label, value })),
          },
        ],
        followups: [
          "Show me only the letters",
          "Timeline of audio memories",
          "Who appears in the most photographs?",
        ],
      };
    }
    case "oldest":
    case "newest": {
      const rows = await queryEvidence(payload.vaultId, interp, 5);
      const sorted = rows
        .filter((r) => r.event_year !== null)
        .sort((a, b) =>
          interp.intent === "oldest"
            ? (a.event_year! - b.event_year!)
            : (b.event_year! - a.event_year!)
        )
        .slice(0, 5);
      return {
        kind: "timeline",
        title:
          interp.intent === "oldest" ? "The earliest memories" : "The most recent memories",
        caption: `The five ${interp.intent === "oldest" ? "oldest" : "newest"} preserved records.`,
        verdict: sorted.length
          ? `Earliest: ${sorted[0].event_year} · ${sorted[0].title}`
          : "No dated memories yet.",
        prompt: payload.prompt,
        sql: `SELECT title, event_year, location FROM heritage_atlas_facts WHERE event_year IS NOT NULL ORDER BY event_year ${interp.intent === "oldest" ? "ASC" : "DESC"} LIMIT 5`,
        events: sorted.map((r) => ({
          year: r.event_year!,
          label: r.title,
          detail: r.description,
          category: r.entity_type,
        })),
        followups: [
          "Show me the timeline for these years",
          "Where did these memories happen?",
          "Who is in these memories?",
        ],
      };
    }
    case "compare_decades": {
      const rows = await queryTimeline(payload.vaultId, interp);
      const byDecade = new Map<number, Map<string, number>>();
      rows.forEach((r) => {
        const d = Math.floor(r.event_year / 10) * 10;
        if (!byDecade.has(d)) byDecade.set(d, new Map());
        byDecade.get(d)!.set(r.entity_type, (byDecade.get(d)!.get(r.entity_type) ?? 0) + r.fact_count);
      });
      const decades = [...byDecade.keys()].sort((a, b) => a - b);
      return {
        kind: "compare",
        title: "Decade by decade",
        caption: "Side-by-side comparison of memory types across decades.",
        verdict: `${decades.length} decades compared across ${rows.length} records.`,
        prompt: payload.prompt,
        sql: `SELECT floor(event_year/10)*10 AS decade, entity_type, count() FROM heritage_atlas_facts GROUP BY decade, entity_type`,
        compare: {
          leftLabel: `${decades[0]}s`,
          rightLabel: `${decades[decades.length - 1]}s`,
          left: [...byDecade.get(decades[0])!.entries()].map(([label, value]) => ({ label, value })),
          right: [...byDecade.get(decades[decades.length - 1])!.entries()].map(([label, value]) => ({ label, value })),
        },
        followups: [
          "Show me the timeline for these decades",
          "Which decade had the most letters?",
          "Map the earliest decade",
        ],
      };
    }
    case "overview":
    default: {
      const [timeline, locations, evidence] = await Promise.all([
        queryTimeline(payload.vaultId, interp),
        queryLocations(payload.vaultId),
        queryEvidence(payload.vaultId, interp, 1000),
      ]);
      const totalMemories = timeline.reduce((sum, r) => sum + r.fact_count, 0);
      const totalPeople = evidence.filter((r) => r.entity_type === "person").length;
      const yearsWithMemories = new Set(timeline.map((r) => r.event_year)).size;
      const places = locations.length;
      return {
        kind: "kpi",
        title: "Your archive at a glance",
        caption: "The shape of your family's preserved story.",
        verdict: `${totalMemories} memories across ${yearsWithMemories} years and ${places} places.`,
        prompt: payload.prompt,
        sql: `SELECT count(), uniq(event_year), uniq(location) FROM heritage_atlas_facts`,
        kpi: [
          { label: "Memories", value: String(totalMemories), icon: "inventory_2", trend: "up" },
          { label: "People", value: String(totalPeople), icon: "group", trend: "flat" },
          { label: "Years covered", value: String(yearsWithMemories), icon: "calendar_month", trend: "up" },
          { label: "Places", value: String(places), icon: "location_on", trend: "flat" },
        ],
        followups: [
          "Show me the timeline",
          "Where did these memories happen?",
          "Who appears most often?",
          "What kinds of memories are these?",
        ],
      };
    }
  }
}
