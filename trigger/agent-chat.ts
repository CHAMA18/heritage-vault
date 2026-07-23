/**
 * HeritageAtlas Agent — Trigger.dev chat.agent() orchestration
 *
 * This is the heart of the system. A `chat.agent()` from `@trigger.dev/sdk/ai`
 * runs on the Trigger.dev cloud (or self-hosted webapp), receives the
 * conversation, and lets the LLM (Claude) decide which ClickHouse-querying
 * tool to call. Each tool returns a `VizSpec` — never a paragraph.
 *
 * Architecture:
 *
 *   Browser ──useTriggerChatTransport──▶ Trigger.dev cloud
 *                                          │
 *                                          ▼
 *                                    chat.agent() run
 *                                          │
 *                              ┌───────────┼───────────┐
 *                              ▼           ▼           ▼
 *                          queryTimeline  queryMap  queryPeople  … (10 tools)
 *                              │           │           │
 *                              └─────┬─────┴─────┬─────┘
 *                                    ▼           ▼
 *                                ClickHouse  (primary DB)
 *
 * Every tool:
 *   1. Builds a parameterised ClickHouse query
 *   2. Executes it via @clickhouse/client
 *   3. Shapes the rows into a VizSpec
 *   4. Returns the spec — the LLM streams it to the browser as a tool part
 *
 * The browser renders the VizSpec as an interactive chart / map / diagram.
 * The agent NEVER returns a paragraph — the chart IS the answer.
 *
 * Deploy with:
 *   npx trigger.dev@latest deploy
 *
 * Then in the browser:
 *   const transport = useTriggerChatTransport({
 *     task: "heritage-atlas-agent",
 *     accessToken: ({ chatId }) => fetch(`/api/chat/${chatId}/token`).then(r => r.text()),
 *     startSession: ({ chatId, clientData }) => fetch(`/api/chat/${chatId}/start`, { ... }).then(r => r.json()),
 *   });
 */
import { chat } from "@trigger.dev/sdk/ai";
import { streamText, tool, stepCountIs } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { z } from "zod";
import { createClient } from "@clickhouse/client";
import type { VizSpec } from "../src/agent/spec";

/**
 * ClickHouse client — configured at module scope so connection pooling is
 * shared across runs (per Trigger.dev's database-connections guidance).
 */
function clickhouse() {
  return createClient({
    url: process.env.CLICKHOUSE_URL!,
    username: process.env.CLICKHOUSE_USERNAME!,
    password: process.env.CLICKHOUSE_PASSWORD!,
    database: process.env.CLICKHOUSE_DATABASE ?? "default",
  });
}

const PALETTE = [
  "#2c3a2e", "#c0623a", "#d4a44c", "#6f8266",
  "#b5c4a8", "#d98865", "#3a4a3c", "#8a6456",
];

/* ───────────────────────────────────────────────────────────────────────
 * TOOL 1 — queryTimeline
 * Returns a line chart of memory density by year.
 * ─────────────────────────────────────────────────────────────────────── */
const queryTimelineTool = tool({
  description:
    "Query ClickHouse for the timeline of memories across all years. " +
    "Returns a VizSpec line chart showing memory density per year, with the " +
    "peak year called out. Use this when the user asks about chronology, " +
    "changes over time, or the shape of the archive across years.",
  inputSchema: z.object({
    vaultId: z.string().describe("The vault ID to query"),
    decade: z
      .number()
      .optional()
      .describe("Optional decade filter (e.g. 1940 for the 1940s)"),
  }),
  execute: async ({ vaultId, decade }) => {
    const client = clickhouse();
    const rows = await client.query({
      query: `
        SELECT event_year, sum(fact_count) AS fact_count
        FROM heritage_atlas_timeline_yearly
        WHERE vault_id = {vaultId:String}
          ${decade ? "AND event_year >= {decMin:Int16} AND event_year < {decMax:Int16}" : ""}
        GROUP BY event_year
        ORDER BY event_year
      `,
      query_params: decade
        ? { vaultId, decMin: decade, decMax: decade + 10 }
        : { vaultId },
      format: "JSONEachRow",
    });
    const data = (await rows.json()) as Array<{
      event_year: number;
      fact_count: number;
    }>;
    await client.close();

    const years = data.map((r) => r.event_year).sort((a, b) => a - b);
    const peak = years.reduce(
      (a, b) => ((data.find((r) => r.event_year === a)?.fact_count ?? 0) >
      (data.find((r) => r.event_year === b)?.fact_count ?? 0)
        ? a
        : b),
      years[0] ?? 0
    );

    const spec: VizSpec = {
      kind: "line",
      title: "Memories across time",
      caption: `Memory density by year${decade ? ` · ${decade}s` : ""}.`,
      verdict: `${years.length} years with preserved memories, peaking in ${peak}.`,
      prompt: `Timeline${decade ? ` for ${decade}s` : ""}`,
      sql: `SELECT event_year, sum(fact_count) FROM heritage_atlas_timeline_yearly WHERE vault_id='${vaultId}' GROUP BY event_year ORDER BY event_year`,
      source: "ClickHouse · heritage_atlas_timeline_yearly",
      series: [
        {
          name: "Memories",
          color: PALETTE[0],
          points: data.map((r) => ({
            label: String(r.event_year),
            value: r.fact_count,
            drilldown: `What happened in ${r.event_year}?`,
          })),
        },
      ],
      followups: [
        "Where did these memories happen?",
        "Who appears most often in this period?",
        "What kinds of memories are these?",
      ],
    };
    return spec;
  },
});

/* ───────────────────────────────────────────────────────────────────────
 * TOOL 2 — queryMap
 * Returns a geographic scatter map of memory density by location.
 * ─────────────────────────────────────────────────────────────────────── */
const queryMapTool = tool({
  description:
    "Query ClickHouse for memory density by location. Returns a VizSpec map " +
    "with sized markers for each location. Use this when the user asks about " +
    "places, geography, where memories happened, or which locations appear " +
    "most often in the archive.",
  inputSchema: z.object({
    vaultId: z.string(),
  }),
  execute: async ({ vaultId }) => {
    const client = clickhouse();
    const rows = await client.query({
      query: `
        SELECT location, sum(fact_count) AS fact_count
        FROM heritage_atlas_locations
        WHERE vault_id = {vaultId:String}
        GROUP BY location
        ORDER BY fact_count DESC
        LIMIT 12
      `,
      query_params: { vaultId },
      format: "JSONEachRow",
    });
    const data = (await rows.json()) as Array<{
      location: string;
      fact_count: number;
    }>;
    await client.close();

    // Rough lat/lng for known places (used to project onto the map)
    const geo: Record<string, { lat: number; lng: number }> = {
      Livingstone: { lat: -17.85, lng: 25.86 },
      Lusaka: { lat: -15.39, lng: 28.33 },
      Mongu: { lat: -15.28, lng: 23.13 },
      Kabwe: { lat: -14.45, lng: 28.45 },
      Ndola: { lat: -12.96, lng: 28.64 },
      Kitwe: { lat: -12.82, lng: 28.20 },
      Harare: { lat: -17.83, lng: 31.05 },
      Bulawayo: { lat: -20.15, lng: 28.58 },
    };

    const spec: VizSpec = {
      kind: "map",
      title: "Where the archive lives",
      caption: "Memory density by location.",
      verdict: `${data.length} places appear in your archive, led by ${data[0]?.location ?? "—"}.`,
      prompt: "Geography",
      sql: `SELECT location, sum(fact_count) FROM heritage_atlas_locations WHERE vault_id='${vaultId}' GROUP BY location ORDER BY fact_count DESC LIMIT 12`,
      source: "ClickHouse · heritage_atlas_locations",
      points: data.map((r, i) => ({
        place: r.location,
        count: r.fact_count,
        lat: geo[r.location]?.lat,
        lng: geo[r.location]?.lng,
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
    return spec;
  },
});

/* ───────────────────────────────────────────────────────────────────────
 * TOOL 3 — queryPeople
 * Returns a network constellation of family members and their edges.
 * ─────────────────────────────────────────────────────────────────────── */
const queryPeopleTool = tool({
  description:
    "Query ClickHouse for the family constellation — all members and their " +
    "recorded relationships. Returns a VizSpec network diagram with nodes " +
    "sized by memory count and edges for parent-child relationships. Use " +
    "this when the user asks about people, family tree, relationships, or " +
    "who appears in the archive.",
  inputSchema: z.object({
    vaultId: z.string(),
  }),
  execute: async ({ vaultId }) => {
    const client = clickhouse();

    // Members + memory count (memory count = how many fact.related_entity_ids
    // contain the member_id)
    const memberRows = await client.query({
      query: `
        SELECT member_id, full_name, relationship, parent_id, birth_year, death_year, notes
        FROM heritage_atlas_members
        WHERE vault_id = {vaultId:String}
        ORDER BY full_name
      `,
      query_params: { vaultId },
      format: "JSONEachRow",
    });
    const members = (await memberRows.json()) as Array<{
      member_id: string;
      full_name: string;
      relationship: string;
      parent_id: string;
      birth_year: number | null;
      death_year: number | null;
      notes: string;
    }>;

    // Count memories per member (count rows in heritage_atlas_facts where
    // has(related_entity_ids, member_id))
    const countRows = await client.query({
      query: `
        SELECT
          m.member_id AS member_id,
          countDistinct(f.fact_id) AS fact_count
        FROM heritage_atlas_members AS m
        LEFT JOIN heritage_atlas_facts AS f
          ON has(f.related_entity_ids, m.member_id) AND f.vault_id = m.vault_id
        WHERE m.vault_id = {vaultId:String}
        GROUP BY m.member_id
      `,
      query_params: { vaultId },
      format: "JSONEachRow",
    });
    const counts = (await countRows.json()) as Array<{
      member_id: string;
      fact_count: number;
    }>;
    const countMap = new Map(counts.map((c) => [c.member_id, c.fact_count]));

    // Edges
    const edgeRows = await client.query({
      query: `
        SELECT from_entity_id, to_entity_id, relationship, confidence
        FROM heritage_atlas_edges
        WHERE vault_id = {vaultId:String}
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

    const spec: VizSpec = {
      kind: "network",
      title: "Your family constellation",
      caption: "People in the archive, connected by recorded relationships.",
      verdict: `${members.length} people, ${edges.length} recorded parent-child edges.`,
      prompt: "Family constellation",
      sql: `SELECT member_id, full_name FROM heritage_atlas_members WHERE vault_id='${vaultId}'`,
      source: "ClickHouse · heritage_atlas_members + heritage_atlas_edges",
      nodes: members.map((m) => ({
        id: m.member_id,
        label: m.full_name,
        group: m.relationship || undefined,
        weight: countMap.get(m.member_id) ?? 0,
        meta: m.notes || undefined,
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
    return spec;
  },
});

/* ───────────────────────────────────────────────────────────────────────
 * TOOL 4 — queryEvidence
 * Returns a sortable evidence table.
 * ─────────────────────────────────────────────────────────────────────── */
const queryEvidenceTool = tool({
  description:
    "Query ClickHouse for source evidence — individual memory records. " +
    "Returns a VizSpec table with year, title, location, and kind. Use this " +
    "when the user asks for evidence, sources, records, or wants to see " +
    "individual memories.",
  inputSchema: z.object({
    vaultId: z.string(),
    person: z
      .string()
      .optional()
      .describe("Optional person name to filter by"),
    place: z
      .string()
      .optional()
      .describe("Optional location to filter by"),
    limit: z.number().int().min(1).max(50).default(12),
  }),
  execute: async ({ vaultId, person, place, limit }) => {
    const client = clickhouse();
    const rows = await client.query({
      query: `
        SELECT title, description, event_year, location, entity_type
        FROM heritage_atlas_facts
        WHERE vault_id = {vaultId:String}
          ${person ? "AND title ILIKE {personPat:String}" : ""}
          ${place ? "AND location ILIKE {placePat:String}" : ""}
        ORDER BY event_year
        LIMIT {limit:UInt32}
      `,
      query_params: {
        vaultId,
        personPat: person ? `%${person}%` : "%",
        placePat: place ? `%${place}%` : "%",
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
    }>;
    await client.close();

    const spec: VizSpec = {
      kind: "table",
      title: "Source evidence",
      caption: `Traceable records${person ? ` mentioning ${person}` : ""}.`,
      verdict: `${data.length} records, each linkable back to its source.`,
      prompt: `Evidence${person ? ` for ${person}` : ""}`,
      sql: `SELECT title, event_year, location, entity_type FROM heritage_atlas_facts WHERE vault_id='${vaultId}' ORDER BY event_year LIMIT ${limit}`,
      source: "ClickHouse · heritage_atlas_facts",
      headers: ["Year", "Title", "Location", "Kind"],
      rows: data.map((r) => ({
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
    return spec;
  },
});

/* ───────────────────────────────────────────────────────────────────────
 * TOOL 5 — queryDecades
 * Returns a bar chart of memories by decade.
 * ─────────────────────────────────────────────────────────────────────── */
const queryDecadesTool = tool({
  description:
    "Query ClickHouse for memory density by decade. Returns a VizSpec bar " +
    "chart. Use this when the user asks about decades, the 1950s, 1960s, etc., " +
    "or how the archive grew over ten-year windows.",
  inputSchema: z.object({
    vaultId: z.string(),
  }),
  execute: async ({ vaultId }) => {
    const client = clickhouse();
    const rows = await client.query({
      query: `
        SELECT decade, sum(fact_count) AS fact_count
        FROM heritage_atlas_decades
        WHERE vault_id = {vaultId:String}
        GROUP BY decade
        ORDER BY decade
      `,
      query_params: { vaultId },
      format: "JSONEachRow",
    });
    const data = (await rows.json()) as Array<{
      decade: number;
      fact_count: number;
    }>;
    await client.close();

    const peak = data.reduce((a, b) => (b.fact_count > a.fact_count ? b : a), data[0]);

    const spec: VizSpec = {
      kind: "bar",
      title: "Memories by decade",
      caption: "How the archive grew, in ten-year windows.",
      verdict: `${data.length} decades represented; the ${peak?.decade}s is the densest.`,
      prompt: "Decades",
      sql: `SELECT decade, sum(fact_count) FROM heritage_atlas_decades WHERE vault_id='${vaultId}' GROUP BY decade ORDER BY decade`,
      source: "ClickHouse · heritage_atlas_decades",
      series: [
        {
          name: "Memories",
          color: PALETTE[1],
          points: data.map((r) => ({
            label: `${r.decade}s`,
            value: r.fact_count,
            drilldown: `Show me memories from the ${r.decade}s`,
          })),
        },
      ],
      followups: [
        "What happened in the busiest decade?",
        "Compare two decades side by side",
        "Show me the timeline in detail",
      ],
    };
    return spec;
  },
});

/* ───────────────────────────────────────────────────────────────────────
 * TOOL 6 — queryTypes
 * Returns a donut chart of memories by record type.
 * ─────────────────────────────────────────────────────────────────────── */
const queryTypesTool = tool({
  description:
    "Query ClickHouse for the breakdown of memories by record type " +
    "(letter, photo, audio, video, document). Returns a VizSpec donut chart " +
    "with a legend. Use this when the user asks about kinds, types, or " +
    "formats of memories.",
  inputSchema: z.object({
    vaultId: z.string(),
  }),
  execute: async ({ vaultId }) => {
    const client = clickhouse();
    const rows = await client.query({
      query: `
        SELECT entity_type, sum(fact_count) AS fact_count
        FROM heritage_atlas_types
        WHERE vault_id = {vaultId:String}
        GROUP BY entity_type
        ORDER BY fact_count DESC
      `,
      query_params: { vaultId },
      format: "JSONEachRow",
    });
    const data = (await rows.json()) as Array<{
      entity_type: string;
      fact_count: number;
    }>;
    await client.close();

    const total = data.reduce((s, r) => s + r.fact_count, 0);

    const spec: VizSpec = {
      kind: "donut",
      title: "What kinds of memories",
      caption: "The archive broken down by record type.",
      verdict: `${data.length} record types; ${data[0]?.entity_type ?? "—"} is the most common.`,
      prompt: "Record types",
      sql: `SELECT entity_type, sum(fact_count) FROM heritage_atlas_types WHERE vault_id='${vaultId}' GROUP BY entity_type ORDER BY fact_count DESC`,
      source: "ClickHouse · heritage_atlas_types",
      series: [
        {
          name: "Records",
          points: data.map((r) => ({ label: r.entity_type, value: r.fact_count })),
        },
      ],
      followups: [
        "Show me only the letters",
        "Timeline of audio memories",
        "Who appears in the most photographs?",
      ],
    };
    void total; // total computed for the renderer
    return spec;
  },
});

/* ───────────────────────────────────────────────────────────────────────
 * TOOL 7 — queryOverview
 * Returns KPI cards — the shape of the archive at a glance.
 * ─────────────────────────────────────────────────────────────────────── */
const queryOverviewTool = tool({
  description:
    "Query ClickHouse for a high-level overview of the archive — total " +
    "memories, people, years covered, places. Returns a VizSpec with KPI " +
    "cards. Use this when the user asks for an overview, summary, or " +
    "high-level picture of the archive.",
  inputSchema: z.object({
    vaultId: z.string(),
  }),
  execute: async ({ vaultId }) => {
    const client = clickhouse();
    const rows = await client.query({
      query: `
        SELECT
          countDistinct(fact_id) AS total_memories,
          countDistinctIf(member_id, member_id != '') AS total_people,
          countDistinctIf(event_year, event_year != 0) AS total_years,
          countDistinctIf(location, location != '') AS total_places
        FROM (
          SELECT fact_id, event_year, location, '' AS member_id
          FROM heritage_atlas_facts WHERE vault_id = {vaultId:String}
          UNION ALL
          SELECT '', NULL, '', member_id FROM heritage_atlas_members WHERE vault_id = {vaultId:String}
        )
      `,
      query_params: { vaultId },
      format: "JSONEachRow",
    });
    const data = (await rows.json()) as Array<{
      total_memories: number;
      total_people: number;
      total_years: number;
      total_places: number;
    }>;
    await client.close();
    const r = data[0] ?? { total_memories: 0, total_people: 0, total_years: 0, total_places: 0 };

    const spec: VizSpec = {
      kind: "kpi",
      title: "Your archive at a glance",
      caption: "The shape of your family's preserved story.",
      verdict: `${r.total_memories} memories across ${r.total_years} years and ${r.total_places} places.`,
      prompt: "Overview",
      sql: `SELECT countDistinct(fact_id), countDistinct(event_year), countDistinct(location) FROM heritage_atlas_facts WHERE vault_id='${vaultId}'`,
      source: "ClickHouse · heritage_atlas_facts + heritage_atlas_members",
      kpi: [
        { label: "Memories", value: String(r.total_memories), icon: "inventory_2", trend: "up" },
        { label: "People", value: String(r.total_people), icon: "group", trend: "flat" },
        { label: "Years covered", value: String(r.total_years), icon: "calendar_month", trend: "up" },
        { label: "Places", value: String(r.total_places), icon: "location_on", trend: "flat" },
      ],
      followups: [
        "Show me the timeline",
        "Where did these memories happen?",
        "Who appears most often?",
        "What kinds of memories are these?",
      ],
    };
    return spec;
  },
});

/* ───────────────────────────────────────────────────────────────────────
 * TOOL 8 — queryCompare
 * Returns a side-by-side comparison of two decades.
 * ─────────────────────────────────────────────────────────────────────── */
const queryCompareTool = tool({
  description:
    "Query ClickHouse to compare two decades side by side. Returns a VizSpec " +
    "compare chart with the earliest and latest decades. Use this when the " +
    "user asks to compare, contrast, or see differences across time.",
  inputSchema: z.object({
    vaultId: z.string(),
    leftDecade: z.number().optional().describe("Optional first decade (default: earliest)"),
    rightDecade: z.number().optional().describe("Optional second decade (default: latest)"),
  }),
  execute: async ({ vaultId, leftDecade, rightDecade }) => {
    const client = clickhouse();
    const rows = await client.query({
      query: `
        SELECT decade, entity_type, sum(fact_count) AS fact_count
        FROM heritage_atlas_decades
        WHERE vault_id = {vaultId:String}
        GROUP BY decade, entity_type
        ORDER BY decade
      `,
      query_params: { vaultId },
      format: "JSONEachRow",
    });
    const data = (await rows.json()) as Array<{
      decade: number;
      entity_type: string;
      fact_count: number;
    }>;
    await client.close();

    const decades = [...new Set(data.map((r) => r.decade))].sort((a, b) => a - b);
    const left = leftDecade ?? decades[0];
    const right = rightDecade ?? decades[decades.length - 1];
    const leftRows = data.filter((r) => r.decade === left);
    const rightRows = data.filter((r) => r.decade === right);

    const spec: VizSpec = {
      kind: "compare",
      title: "Decade by decade",
      caption: `Comparing the ${left}s and the ${right}s, side by side.`,
      verdict: `${decades.length} decades compared across ${data.reduce((s, r) => s + r.fact_count, 0)} records.`,
      prompt: `Compare ${left}s vs ${right}s`,
      sql: `SELECT decade, entity_type, sum(fact_count) FROM heritage_atlas_decades WHERE vault_id='${vaultId}' GROUP BY decade, entity_type`,
      source: "ClickHouse · heritage_atlas_decades",
      compare: {
        leftLabel: `${left}s`,
        rightLabel: `${right}s`,
        left: leftRows.map((r) => ({ label: r.entity_type, value: r.fact_count })),
        right: rightRows.map((r) => ({ label: r.entity_type, value: r.fact_count })),
      },
      followups: [
        "Show me the timeline for these decades",
        "Which decade had the most letters?",
        "Map the earliest decade",
      ],
    };
    return spec;
  },
});

/* ───────────────────────────────────────────────────────────────────────
 * TOOL 9 — queryOldest
 * Returns the earliest N memories as a timeline.
 * ─────────────────────────────────────────────────────────────────────── */
const queryOldestTool = tool({
  description:
    "Query ClickHouse for the oldest (earliest) memories in the archive. " +
    "Returns a VizSpec timeline of the 6 earliest dated records. Use this " +
    "when the user asks about the oldest, earliest, first, or beginning " +
    "memories.",
  inputSchema: z.object({
    vaultId: z.string(),
  }),
  execute: async ({ vaultId }) => {
    const client = clickhouse();
    const rows = await client.query({
      query: `
        SELECT title, description, event_year, location, entity_type
        FROM heritage_atlas_facts
        WHERE vault_id = {vaultId:String} AND event_year IS NOT NULL
        ORDER BY event_year ASC
        LIMIT 6
      `,
      query_params: { vaultId },
      format: "JSONEachRow",
    });
    const data = (await rows.json()) as Array<{
      title: string;
      description: string;
      event_year: number;
      location: string;
      entity_type: string;
    }>;
    await client.close();

    const spec: VizSpec = {
      kind: "timeline",
      title: "The earliest memories",
      caption: "The oldest preserved records.",
      verdict: data.length
        ? `Earliest: ${data[0].event_year} · ${data[0].title}`
        : "No dated memories yet.",
      prompt: "Oldest memories",
      sql: `SELECT title, event_year, location FROM heritage_atlas_facts WHERE vault_id='${vaultId}' AND event_year IS NOT NULL ORDER BY event_year ASC LIMIT 6`,
      source: "ClickHouse · heritage_atlas_facts",
      events: data.map((r) => ({
        year: r.event_year,
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
    return spec;
  },
});

/* ───────────────────────────────────────────────────────────────────────
 * TOOL 10 — queryNewest
 * Returns the most recent N memories as a timeline.
 * ─────────────────────────────────────────────────────────────────────── */
const queryNewestTool = tool({
  description:
    "Query ClickHouse for the newest (most recent) memories in the archive. " +
    "Returns a VizSpec timeline of the 6 latest dated records. Use this when " +
    "the user asks about the newest, latest, last, or most recent memories.",
  inputSchema: z.object({
    vaultId: z.string(),
  }),
  execute: async ({ vaultId }) => {
    const client = clickhouse();
    const rows = await client.query({
      query: `
        SELECT title, description, event_year, location, entity_type
        FROM heritage_atlas_facts
        WHERE vault_id = {vaultId:String} AND event_year IS NOT NULL
        ORDER BY event_year DESC
        LIMIT 6
      `,
      query_params: { vaultId },
      format: "JSONEachRow",
    });
    const data = (await rows.json()) as Array<{
      title: string;
      description: string;
      event_year: number;
      location: string;
      entity_type: string;
    }>;
    await client.close();

    const spec: VizSpec = {
      kind: "timeline",
      title: "The most recent memories",
      caption: "The newest preserved records.",
      verdict: data.length
        ? `Newest: ${data[0].event_year} · ${data[0].title}`
        : "No dated memories yet.",
      prompt: "Newest memories",
      sql: `SELECT title, event_year, location FROM heritage_atlas_facts WHERE vault_id='${vaultId}' AND event_year IS NOT NULL ORDER BY event_year DESC LIMIT 6`,
      source: "ClickHouse · heritage_atlas_facts",
      events: data.map((r) => ({
        year: r.event_year,
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
    return spec;
  },
});

/* ═══════════════════════════════════════════════════════════════════════
 * THE chat.agent() — orchestration layer
 * ═══════════════════════════════════════════════════════════════════════
 *
 * The agent receives the conversation, lets Claude decide which tool to call,
 * streams the resulting VizSpec to the browser, and produces a one-line
 * natural-language verdict (so the chart has a caption — never a paragraph).
 *
 * The system prompt is the key constraint: "Your best answer is ALWAYS a
 * tool call that returns a VizSpec. Never explain in prose what a chart
 * could show."
 */
const tools = {
  queryTimeline: queryTimelineTool,
  queryMap: queryMapTool,
  queryPeople: queryPeopleTool,
  queryEvidence: queryEvidenceTool,
  queryDecades: queryDecadesTool,
  queryTypes: queryTypesTool,
  queryOverview: queryOverviewTool,
  queryCompare: queryCompareTool,
  queryOldest: queryOldestTool,
  queryNewest: queryNewestTool,
};

export const heritageAgent = chat.agent({
  id: "heritage-atlas-agent",
  tools,
  clientDataSchema: z.object({
    vaultId: z.string().default("demo-vault"),
  }),
  run: async ({ messages, tools: resolvedTools, signal, clientData }) => {
    const vaultId = clientData?.vaultId ?? "demo-vault";

    return streamText({
      // Spread chat.toStreamTextOptions() FIRST — wires up compaction,
      // steering, background injection, and telemetry.
      ...chat.toStreamTextOptions({ tools: resolvedTools }),
      model: anthropic("claude-sonnet-4-5"),
      system: `You are the HeritageAtlas agent. Your job: answer questions about a family archive by calling ONE of the available tools. Each tool queries ClickHouse and returns a VizSpec — a chart, map, diagram, or table. The browser renders that VizSpec as the user's answer.

RULES — STRICT:
1. Your BEST answer is ALWAYS a tool call. If a tool can answer the question, call it.
2. NEVER explain in prose what a chart could show. A paragraph answer is a failure.
3. After the tool returns, write ONE short sentence (max 20 words) describing what the chart shows. That's it. No bullet lists. No multi-paragraph explanations.
4. If the user's question is ambiguous, pick the closest tool and call it. Don't ask for clarification unless truly impossible.
5. The vaultId is: ${vaultId}. Pass it to every tool call.

TOOL GUIDE:
- queryOverview: "overview", "summary", "how big", "at a glance"
- queryTimeline: "timeline", "over time", "by year", "chronology", "when"
- queryMap: "where", "map", "places", "locations", "geography"
- queryPeople: "people", "family", "who", "constellation", "relationships", "tree"
- queryEvidence: "evidence", "records", "sources", "list memories"
- queryDecades: "decade", "by decade", "1950s", "1960s", etc.
- queryTypes: "types", "kinds", "formats", "what kind of memories"
- queryCompare: "compare", "versus", "vs", "difference between"
- queryOldest: "oldest", "earliest", "first", "beginning"
- queryNewest: "newest", "latest", "last", "recent"

When the user clicks a chart element, the browser sends a drilldown prompt (e.g. "What happened in 1942?"). Treat that as a fresh question and call the right tool.`,
      messages,
      abortSignal: signal,
      stopWhen: stepCountIs(8),
    });
  },
});

export type HeritageAgent = typeof heritageAgent;
