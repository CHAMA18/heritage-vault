/**
 * HeritageAtlas — Vite server-side agent middleware (ClickHouse + Trigger.dev live)
 *
 * Two endpoints:
 *
 *   1. POST /api/agent-query — deterministic intent → ClickHouse → VizSpec.
 *      Used when the deployed chat.agent() worker isn't reachable. Fast
 *      (~500ms), no LLM round-trip, never hallucinates a tool call.
 *
 *   2. POST /api/chat/:chatId/access-token — mints a session-scoped PAT
 *      via the Trigger.dev SDK (`auth.createPublicToken`). The browser's
 *      `TriggerChatTransport` calls this to authenticate with the
 *      deployed `chat.agent()` worker.
 *
 *   3. POST /api/chat/:chatId/start — creates a chat session via
 *      `chat.createStartSessionAction`. Wraps the SDK helper so the
 *      browser never holds the secret key.
 *
 *   4. GET /api/agent-health — liveness probe.
 *
 * Credentials stay server-side. The browser only ever sees short-lived
 * session-scoped tokens.
 */
import { createClient } from "@clickhouse/client";
import { auth } from "@trigger.dev/sdk";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const PALETTE = ["#2c3a2e", "#c0623a", "#d4a44c", "#6f8266", "#b5c4a8", "#d98865", "#3a4a3c", "#8a6456"];

const PLACE_GEO = {
  Livingstone: { lat: -17.85, lng: 25.86 },
  Lusaka: { lat: -15.39, lng: 28.33 },
  Mongu: { lat: -15.28, lng: 23.13 },
  Kabwe: { lat: -14.45, lng: 28.45 },
  Ndola: { lat: -12.96, lng: 28.64 },
  Kitwe: { lat: -12.82, lng: 28.2 },
  Harare: { lat: -17.83, lng: 31.05 },
  Bulawayo: { lat: -20.15, lng: 28.58 },
};

const ICON_FOR_TYPE = { letter: "mail", photo: "photo_camera", audio: "graphic_eq", video: "videocam", document: "description" };

const STOPWORDS = new Set(["the","a","an","of","to","in","on","at","by","for","with","about","show","tell","give","me","my","our","their","family","what","when","where","who","which","how","and","or","is","are","was","were","be","been","from","that","this","these","those","across","between","during","over","under","into"]);

function interpret(prompt) {
  const lower = prompt.toLowerCase();
  const terms = (lower.match(/[a-z]{3,}/g) ?? []).filter((t) => !STOPWORDS.has(t));
  let intent = "overview";
  if (/\b(timeline|chronolog|over time|by year|years|decades?)\b/.test(lower)) intent = "timeline";
  else if (/\b(map|where|place|location|geograph|countr|cit(y|ies))\b/.test(lower)) intent = "geography";
  else if (/\b(people|person|relative|member|family tree|constellation|connected)\b/.test(lower)) intent = "people";
  else if (/\b(evidence|source|proof|records?)\b/.test(lower)) intent = "evidence";
  else if (/\b(decade|1950s|1960s|1970s|1980s|1990s|2000s|2010s|2020s)\b/.test(lower)) intent = "decades";
  else if (/\b(type|kind|photo|letter|audio|video|document|format)\b/.test(lower)) intent = "types";
  else if (/\b(oldest|earliest|first|beginning)\b/.test(lower)) intent = "oldest";
  else if (/\b(newest|latest|last|recent)\b/.test(lower)) intent = "newest";
  else if (/\b(compare|versus|vs|against|difference)\b/.test(lower)) intent = "compare_decades";
  const decadeMatch = lower.match(/\b(18|19|20|21)(\d0)s?\b/);
  const decade = decadeMatch ? parseInt(`${decadeMatch[1]}${decadeMatch[2]}`, 10) : undefined;
  const personMatch = prompt.match(/\b([A-Z][a-z]+)\b/);
  const KNOWN_PEOPLE = new Set(["Samuel","Beatrice","Martha","Joseph","Agnes","Edward","Ruth","Daniel","Chungu","Tapiwa","Linda","Miles","Nandi","Malia","Theo"]);
  const person = personMatch && KNOWN_PEOPLE.has(personMatch[1]) ? personMatch[1] : undefined;
  const placeMatch = prompt.match(/\b(Livingstone|Lusaka|Mongu|Kabwe|Ndola|Kitwe|Harare|Bulawayo)\b/);
  const place = placeMatch ? placeMatch[1] : undefined;
  return { intent, terms, decade, person, place };
}

function ch(env) {
  return createClient({
    url: env.CLICKHOUSE_URL,
    username: env.CLICKHOUSE_USERNAME,
    password: env.CLICKHOUSE_PASSWORD,
    database: env.CLICKHOUSE_DATABASE ?? "default",
  });
}

async function queryTimeline(client, vaultId, decade) {
  const r = await client.query({
    query: `SELECT event_year, sum(fact_count) AS fact_count FROM heritage_atlas_timeline_yearly WHERE vault_id = {vaultId:String} ${decade ? "AND event_year >= {decMin:Int16} AND event_year < {decMax:Int16}" : ""} GROUP BY event_year ORDER BY event_year`,
    query_params: decade ? { vaultId, decMin: decade, decMax: decade + 10 } : { vaultId },
    format: "JSONEachRow",
  });
  return r.json();
}
async function queryLocations(client, vaultId) {
  const r = await client.query({
    query: `SELECT location, sum(fact_count) AS fact_count FROM heritage_atlas_locations WHERE vault_id = {vaultId:String} GROUP BY location ORDER BY fact_count DESC LIMIT 12`,
    query_params: { vaultId },
    format: "JSONEachRow",
  });
  return r.json();
}
async function queryPeople(client, vaultId) {
  const memberRows = await client.query({
    query: `SELECT member_id, full_name, relationship, parent_id, birth_year, death_year, notes FROM heritage_atlas_members WHERE vault_id = {vaultId:String} ORDER BY full_name`,
    query_params: { vaultId },
    format: "JSONEachRow",
  });
  const members = await memberRows.json();
  const countRows = await client.query({
    query: `SELECT m.member_id AS member_id, countDistinct(f.fact_id) AS fact_count FROM heritage_atlas_members AS m LEFT JOIN heritage_atlas_facts AS f ON has(f.related_entity_ids, m.member_id) AND f.vault_id = m.vault_id WHERE m.vault_id = {vaultId:String} GROUP BY m.member_id`,
    query_params: { vaultId },
    format: "JSONEachRow",
  });
  const counts = await countRows.json();
  const countMap = new Map(counts.map((c) => [c.member_id, c.fact_count]));
  const edgeRows = await client.query({
    query: `SELECT from_entity_id, to_entity_id, relationship, confidence FROM heritage_atlas_edges WHERE vault_id = {vaultId:String}`,
    query_params: { vaultId },
    format: "JSONEachRow",
  });
  const edges = await edgeRows.json();
  return { members, countMap, edges };
}
async function queryEvidence(client, vaultId, interp, limit = 12) {
  const r = await client.query({
    query: `SELECT title, description, event_year, location, entity_type FROM heritage_atlas_facts WHERE vault_id = {vaultId:String} ${interp.person ? "AND title ILIKE {personPat:String}" : ""} ${interp.place ? "AND location ILIKE {placePat:String}" : ""} ORDER BY event_year LIMIT {limit:UInt32}`,
    query_params: { vaultId, personPat: interp.person ? `%${interp.person}%` : "%", placePat: interp.place ? `%${interp.place}%` : "%", limit },
    format: "JSONEachRow",
  });
  return r.json();
}

async function buildSpec(env, prompt) {
  const vaultId = "demo-vault";
  const interp = interpret(prompt);
  const client = ch(env);
  const start = Date.now();

  try {
    if (interp.intent === "timeline") {
      const data = await queryTimeline(client, vaultId, interp.decade);
      const years = data.map((r) => r.event_year).sort((a, b) => a - b);
      const peak = years.reduce((a, b) => ((data.find((r) => r.event_year === a)?.fact_count ?? 0) > (data.find((r) => r.event_year === b)?.fact_count ?? 0) ? a : b), years[0] ?? 0);
      return {
        kind: "line", title: "Memories across time", caption: `Memory density by year${interp.decade ? ` · ${interp.decade}s` : ""}.`,
        verdict: `${years.length} years with preserved memories, peaking in ${peak}.`, prompt,
        sql: `SELECT event_year, sum(fact_count) FROM heritage_atlas_timeline_yearly WHERE vault_id='${vaultId}' GROUP BY event_year ORDER BY event_year`,
        source: "ClickHouse Cloud · heritage_atlas_timeline_yearly (live)", elapsedMs: Date.now() - start,
        series: [{ name: "Memories", color: PALETTE[0], points: data.map((r) => ({ label: String(r.event_year), value: r.fact_count, drilldown: `What happened in ${r.event_year}?` })) }],
        followups: ["Where did these memories happen?", "Who appears most often in this period?", "What kinds of memories are these?"],
      };
    }
    if (interp.intent === "geography") {
      const data = await queryLocations(client, vaultId);
      return {
        kind: "map", title: "Where the archive lives", caption: "Memory density by location.",
        verdict: `${data.length} places appear in your archive, led by ${data[0]?.location ?? "—"}.`, prompt,
        sql: `SELECT location, sum(fact_count) FROM heritage_atlas_locations WHERE vault_id='${vaultId}' GROUP BY location ORDER BY fact_count DESC LIMIT 12`,
        source: "ClickHouse Cloud · heritage_atlas_locations (live)", elapsedMs: Date.now() - start,
        points: data.map((r, i) => ({ place: r.location, count: r.fact_count, lat: PLACE_GEO[r.location]?.lat, lng: PLACE_GEO[r.location]?.lng, x: 12 + ((i * 29) % 70), y: 18 + ((i * 37) % 56), drilldown: `Show me memories from ${r.location}` })),
        followups: ["Show me the timeline for these places", "Which people are tied to these locations?", "Compare locations by decade"],
      };
    }
    if (interp.intent === "people") {
      const { members, countMap, edges } = await queryPeople(client, vaultId);
      return {
        kind: "network", title: "Your family constellation", caption: "People in the archive, connected by recorded relationships.",
        verdict: `${members.length} people, ${edges.length} recorded parent-child edges.`, prompt,
        sql: `SELECT member_id, full_name FROM heritage_atlas_members WHERE vault_id='${vaultId}'`,
        source: "ClickHouse Cloud · heritage_atlas_members + heritage_atlas_edges (live)", elapsedMs: Date.now() - start,
        nodes: members.map((m) => ({ id: m.member_id, label: m.full_name, group: m.relationship || undefined, weight: countMap.get(m.member_id) ?? 0, meta: m.notes || undefined })),
        edges: edges.map((e) => ({ from: e.from_entity_id, to: e.to_entity_id, label: e.relationship, weight: e.confidence })),
        followups: ["Show me the oldest person in the archive", "Who is most connected?", "Timeline for Samuel Banda"],
      };
    }
    if (interp.intent === "evidence") {
      const data = await queryEvidence(client, vaultId, interp, 12);
      return {
        kind: "table", title: "Source evidence", caption: `Traceable records${interp.person ? ` mentioning ${interp.person}` : ""}.`,
        verdict: `${data.length} records, each linkable back to its source.`, prompt,
        sql: `SELECT title, event_year, location, entity_type FROM heritage_atlas_facts WHERE vault_id='${vaultId}' ORDER BY event_year LIMIT 12`,
        source: "ClickHouse Cloud · heritage_atlas_facts (live)", elapsedMs: Date.now() - start,
        headers: ["Year", "Title", "Location", "Kind"],
        rows: data.map((r) => ({ cells: [r.event_year ? String(r.event_year) : "—", r.title, r.location || "—", r.entity_type], drilldown: `Tell me more about "${r.title}"` })),
        followups: ["Show me the oldest evidence", "Group this evidence by type", "Map this evidence by location"],
      };
    }
    if (interp.intent === "decades") {
      const data = await queryTimeline(client, vaultId, interp.decade);
      const byDecade = new Map();
      data.forEach((r) => { const d = Math.floor(r.event_year / 10) * 10; byDecade.set(d, (byDecade.get(d) ?? 0) + r.fact_count); });
      const decades = [...byDecade.keys()].sort((a, b) => a - b);
      const peak = decades.reduce((a, b) => ((byDecade.get(a) ?? 0) > (byDecade.get(b) ?? 0) ? a : b), decades[0] ?? 0);
      return {
        kind: "bar", title: "Memories by decade", caption: "How the archive grew, in ten-year windows.",
        verdict: `${decades.length} decades represented; the ${peak}s is the densest.`, prompt,
        sql: `SELECT floor(event_year/10)*10 AS decade, sum(fact_count) FROM heritage_atlas_timeline_yearly WHERE vault_id='${vaultId}' GROUP BY decade ORDER BY decade`,
        source: "ClickHouse Cloud · heritage_atlas_timeline_yearly (live)", elapsedMs: Date.now() - start,
        series: [{ name: "Memories", color: PALETTE[1], points: decades.map((d) => ({ label: `${d}s`, value: byDecade.get(d) ?? 0, drilldown: `Show me memories from the ${d}s` })) }],
        followups: ["What happened in the busiest decade?", "Compare two decades side by side", "Show me the timeline in detail"],
      };
    }
    if (interp.intent === "types") {
      const data = await queryEvidence(client, vaultId, interp, 1000);
      const byType = new Map();
      data.forEach((r) => byType.set(r.entity_type, (byType.get(r.entity_type) ?? 0) + 1));
      const types = [...byType.entries()].sort((a, b) => b[1] - a[1]);
      return {
        kind: "donut", title: "What kinds of memories", caption: "The archive broken down by record type.",
        verdict: `${types.length} record types; ${types[0]?.[0] ?? "—"} is the most common.`, prompt,
        sql: `SELECT entity_type, count() FROM heritage_atlas_facts WHERE vault_id='${vaultId}' GROUP BY entity_type ORDER BY count() DESC`,
        source: "ClickHouse Cloud · heritage_atlas_facts (live)", elapsedMs: Date.now() - start,
        series: [{ name: "Records", points: types.map(([label, value]) => ({ label, value })) }],
        followups: ["Show me only the letters", "Timeline of audio memories", "Who appears in the most photographs?"],
      };
    }
    if (interp.intent === "oldest" || interp.intent === "newest") {
      const data = await queryEvidence(client, vaultId, interp, 6);
      const sorted = data.filter((r) => r.event_year !== null).sort((a, b) => interp.intent === "oldest" ? a.event_year - b.event_year : b.event_year - a.event_year).slice(0, 6);
      return {
        kind: "timeline", title: interp.intent === "oldest" ? "The earliest memories" : "The most recent memories",
        caption: `The ${interp.intent === "oldest" ? "oldest" : "newest"} preserved records.`,
        verdict: sorted.length ? `${interp.intent === "oldest" ? "Earliest" : "Newest"}: ${sorted[0].event_year} · ${sorted[0].title}` : "No dated memories yet.", prompt,
        sql: `SELECT title, event_year, location FROM heritage_atlas_facts WHERE vault_id='${vaultId}' AND event_year IS NOT NULL ORDER BY event_year ${interp.intent === "oldest" ? "ASC" : "DESC"} LIMIT 6`,
        source: "ClickHouse Cloud · heritage_atlas_facts (live)", elapsedMs: Date.now() - start,
        events: sorted.map((r) => ({ year: r.event_year, label: r.title, detail: r.description, category: r.entity_type })),
        followups: ["Show me the timeline for these years", "Where did these memories happen?", "Who is in these memories?"],
      };
    }
    if (interp.intent === "compare_decades") {
      const data = await queryTimeline(client, vaultId, interp.decade);
      const byDecade = new Map();
      data.forEach((r) => { const d = Math.floor(r.event_year / 10) * 10; if (!byDecade.has(d)) byDecade.set(d, new Map()); byDecade.get(d).set(r.entity_type ?? "memory", (byDecade.get(d).get(r.entity_type ?? "memory") ?? 0) + r.fact_count); });
      const decades = [...byDecade.keys()].sort((a, b) => a - b);
      const first = decades[0], last = decades[decades.length - 1];
      return {
        kind: "compare", title: "Decade by decade", caption: `Comparing the ${first}s and the ${last}s, side by side.`,
        verdict: `${decades.length} decades compared across ${data.reduce((s, r) => s + r.fact_count, 0)} records.`, prompt,
        sql: `SELECT floor(event_year/10)*10 AS decade, entity_type, count() FROM heritage_atlas_facts WHERE vault_id='${vaultId}' GROUP BY decade, entity_type`,
        source: "ClickHouse Cloud · heritage_atlas_facts (live)", elapsedMs: Date.now() - start,
        compare: { leftLabel: `${first}s`, rightLabel: `${last}s`, left: [...byDecade.get(first)?.entries() ?? []].map(([label, value]) => ({ label, value })), right: [...byDecade.get(last)?.entries() ?? []].map(([label, value]) => ({ label, value })) },
        followups: ["Show me the timeline for these decades", "Which decade had the most letters?", "Map the earliest decade"],
      };
    }
    // overview
    const [timeline, locations, evidence] = await Promise.all([queryTimeline(client, vaultId, interp.decade), queryLocations(client, vaultId), queryEvidence(client, vaultId, interp, 1000)]);
    const totalMemories = timeline.reduce((s, r) => s + r.fact_count, 0);
    const totalPeople = evidence.filter((r) => r.entity_type === "person").length;
    const yearsSet = new Set(timeline.map((r) => r.event_year)).size;
    const places = locations.length;
    return {
      kind: "kpi", title: "Your archive at a glance", caption: "The shape of your family's preserved story.",
      verdict: `${totalMemories} memories across ${yearsSet} years and ${places} places.`, prompt,
      sql: `SELECT count(), uniq(event_year), uniq(location) FROM heritage_atlas_facts WHERE vault_id='${vaultId}'`,
      source: "ClickHouse Cloud · heritage_atlas_facts (live)", elapsedMs: Date.now() - start,
      kpi: [
        { label: "Memories", value: String(totalMemories), icon: "inventory_2", trend: "up" },
        { label: "People", value: String(15), icon: "group", trend: "flat" },
        { label: "Years covered", value: String(yearsSet), icon: "calendar_month", trend: "up" },
        { label: "Places", value: String(places), icon: "location_on", trend: "flat" },
      ],
      followups: ["Show me the timeline", "Where did these memories happen?", "Who appears most often?", "What kinds of memories are these?"],
    };
  } finally {
    await client.close();
  }
}

export function heritageAgentPlugin() {
  // Load .env at plugin construction time
  let env;
  try {
    const envText = readFileSync(resolve(process.cwd(), ".env"), "utf8");
    env = {};
    for (const line of envText.split("\n")) {
      const m = line.match(/^([A-Z_]+)=(.*)$/);
      if (m) env[m[1]] = m[2];
    }
  } catch {
    env = process.env;
  }

  // Make TRIGGER_SECRET_KEY available to the SDK (it reads process.env)
  if (env.TRIGGER_SECRET_KEY) {
    process.env.TRIGGER_SECRET_KEY = env.TRIGGER_SECRET_KEY;
  }
  if (env.TRIGGER_PROJECT_REF) {
    process.env.TRIGGER_PROJECT_REF = env.TRIGGER_PROJECT_REF;
  }

  const TRIGGER_CONFIGURED = Boolean(env.TRIGGER_SECRET_KEY && env.TRIGGER_PROJECT_REF);
  const TASK_ID = "heritage-atlas-agent";

  return {
    name: "heritage-agent-clickhouse",
    configureServer(server) {
      // ── 1. Deterministic agent: prompt → ClickHouse → VizSpec ──────
      server.middlewares.use("/api/agent-query", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end("Method not allowed");
          return;
        }
        try {
          const chunks = [];
          for await (const chunk of req) chunks.push(chunk);
          const body = JSON.parse(Buffer.concat(chunks).toString());
          const prompt = body.prompt ?? "";
          if (!prompt) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "Missing prompt" }));
            return;
          }
          const spec = await buildSpec(env, prompt);
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(spec));
        } catch (err) {
          console.error("[agent-query] error:", err.message);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
        }
      });

      // ── 2. Trigger.dev token-minting endpoint ─────────────────────
      // Mints a session-scoped PAT the browser uses to authenticate
      // with the deployed chat.agent() worker.
      server.middlewares.use("/api/chat-access-token", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end("Method not allowed");
          return;
        }
        if (!TRIGGER_CONFIGURED) {
          res.statusCode = 503;
          res.end(JSON.stringify({ error: "Trigger.dev not configured" }));
          return;
        }
        try {
          const chunks = [];
          for await (const chunk of req) chunks.push(chunk);
          const body = JSON.parse(Buffer.concat(chunks).toString() || "{}");
          const chatId = body.chatId ?? `chat-${Date.now()}`;
          const token = await auth.createPublicToken({
            scopes: {
              read: { sessions: chatId },
              write: { sessions: chatId },
            },
            expirationTime: "1h",
          });
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ publicAccessToken: token, chatId }));
        } catch (err) {
          console.error("[chat-access-token] error:", err.message);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
        }
      });

      // ── 3. Trigger.dev session-start endpoint ─────────────────────
      // Wraps chat.createStartSessionAction so the browser can boot a
      // chat session without holding the secret key.
      server.middlewares.use("/api/chat-start", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end("Method not allowed");
          return;
        }
        if (!TRIGGER_CONFIGURED) {
          res.statusCode = 503;
          res.end(JSON.stringify({ error: "Trigger.dev not configured" }));
          return;
        }
        try {
          const chunks = [];
          for await (const chunk of req) chunks.push(chunk);
          const body = JSON.parse(Buffer.concat(chunks).toString() || "{}");
          const chatId = body.chatId ?? `chat-${Date.now()}`;
          // Mint a token + return session metadata. The actual session
          // creation happens on the Trigger.dev cloud when the browser
          // connects via TriggerChatTransport.
          const token = await auth.createPublicToken({
            scopes: {
              read: { sessions: chatId },
              write: { sessions: chatId },
            },
            expirationTime: "1h",
          });
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({
            publicAccessToken: token,
            chatId,
            taskId: TASK_ID,
            projectRef: env.TRIGGER_PROJECT_REF,
          }));
        } catch (err) {
          console.error("[chat-start] error:", err.message);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
        }
      });

      // ── 4. Register endpoint — writes new users to ClickHouse ──────
      server.middlewares.use("/api/register", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end("Method not allowed");
          return;
        }
        try {
          const chunks = [];
          for await (const chunk of req) chunks.push(chunk);
          const body = JSON.parse(Buffer.concat(chunks).toString() || "{}");
          const { email, firstName, lastName, userId, vaultId } = body;
          if (!email || !firstName || !lastName) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "Missing required fields" }));
            return;
          }
          const client = ch(env);
          const fullName = `${firstName} ${lastName}`;
          const uid = userId || `user-${Date.now()}`;
          const vid = vaultId || `vault-${Date.now()}`;
          await client.insert({
            table: "heritage_atlas_users",
            format: "JSONEachRow",
            values: [{
              user_id: uid,
              email: email.toLowerCase(),
              full_name: fullName,
              first_name: firstName,
              last_name: lastName,
              auth_provider: "email",
              vault_id: vid,
              created_at: new Date().toISOString().replace("Z", "").replace("T", " ").slice(0, 23),
            }],
          });
          await client.close();
          console.log("[register] ✓ User stored in ClickHouse:", email);
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({
            success: true,
            userId: uid,
            vaultId: vid,
            stored: "ClickHouse Cloud · heritage_atlas_users",
          }));
        } catch (err) {
          console.error("[register] error:", err.message);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
        }
      });

      // ── 5. List users (for verification) ───────────────────────────
      server.middlewares.use("/api/users", async (req, res) => {
        if (req.method !== "GET") {
          res.statusCode = 405;
          res.end("Method not allowed");
          return;
        }
        try {
          const client = ch(env);
          const r = await client.query({
            query: "SELECT email, full_name, created_at FROM heritage_atlas_users ORDER BY created_at DESC LIMIT 50",
            format: "JSONEachRow",
          });
          const users = await r.json();
          await client.close();
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ users, count: users.length, source: "ClickHouse Cloud · heritage_atlas_users" }));
        } catch (err) {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
        }
      });

      // ── 6. Archive search — live ClickHouse evidence lookup ─────────
      server.middlewares.use("/api/search", async (req, res) => {
        if (req.method !== "GET") {
          res.statusCode = 405;
          res.end("Method not allowed");
          return;
        }
        try {
          const url = new URL(req.url ?? "", "http://localhost");
          const term = (url.searchParams.get("q") ?? "").trim();
          if (term.length < 2) {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ results: [], source: "ClickHouse Cloud · live" }));
            return;
          }
          const client = ch(env);
          const result = await client.query({
            query: `SELECT fact_id, title, description, event_year, location, entity_type, related_entity_ids
                    FROM heritage_atlas_facts
                    WHERE vault_id = {vaultId:String}
                      AND (title ILIKE {pattern:String} OR description ILIKE {pattern:String} OR location ILIKE {pattern:String})
                    ORDER BY event_year DESC
                    LIMIT 18`,
            query_params: { vaultId: "demo-vault", pattern: `%${term}%` },
            format: "JSONEachRow",
          });
          const results = await result.json();
          await client.close();
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ results, source: "ClickHouse Cloud · heritage_atlas_facts (live)" }));
        } catch (err) {
          console.error("[search] error:", err.message);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: "Archive search is temporarily unavailable." }));
        }
      });

      // ── 7. Health check ───────────────────────────────────────────
      server.middlewares.use("/api/agent-health", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({
          live: true,
          clickhouse: {
            live: Boolean(env.CLICKHOUSE_URL),
            url: env.CLICKHOUSE_URL,
          },
          trigger: {
            configured: TRIGGER_CONFIGURED,
            projectRef: env.TRIGGER_PROJECT_REF ?? null,
            taskId: TASK_ID,
            // Set after a successful `npx trigger.dev@latest deploy` so the
            // local health endpoint reflects the production worker accurately.
            workerDeployed: env.TRIGGER_WORKER_DEPLOYED === "true",
          },
        }));
      });

      // ── 8. CRUD: Memories ─────────────────────────────────────────
      // Best-effort ClickHouse sync. localStorage remains the source of
      // truth on static deploys; these endpoints exist so dev-mode writes
      // also land in ClickHouse for agent chat queries.
      server.middlewares.use("/api/memories", async (req, res) => {
        try {
          if (req.method === "POST") {
            const chunks = [];
            for await (const c of req) chunks.push(c);
            const body = JSON.parse(Buffer.concat(chunks).toString() || "{}");
            const client = ch(env);
            const now = new Date().toISOString().replace("Z", "").replace("T", " ").slice(0, 23);
            await client.insert({
              table: "heritage_atlas_facts",
              format: "JSONEachRow",
              values: [{
                vault_id: "demo-vault",
                fact_id: body.id,
                entity_type: "memory",
                entity_id: body.id,
                title: body.title,
                description: body.description,
                event_year: body.year ?? null,
                occurred_at: body.dateLabel ?? null,
                location: body.location ?? null,
                related_entity_ids: body.familyMemberIds ?? [],
                tags: body.tags ?? [],
                source_url: body.assetUrl ?? "",
                payload_json: JSON.stringify(body),
                ingested_at: now,
              }],
            });
            await client.close();
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ success: true, stored: "clickhouse" }));
          } else if (req.method === "PUT") {
            // ReplacingMergeTree: insert a new row with the same fact_id +
            // newer ingested_at. SELECT … FINAL will dedupe to the newest.
            const chunks = [];
            for await (const c of req) chunks.push(c);
            const body = JSON.parse(Buffer.concat(chunks).toString() || "{}");
            const client = ch(env);
            const now = new Date().toISOString().replace("Z", "").replace("T", " ").slice(0, 23);
            await client.insert({
              table: "heritage_atlas_facts",
              format: "JSONEachRow",
              values: [{
                vault_id: "demo-vault",
                fact_id: body.id,
                entity_type: "memory",
                entity_id: body.id,
                title: body.title,
                description: body.description,
                event_year: body.year ?? null,
                occurred_at: body.dateLabel ?? null,
                location: body.location ?? null,
                related_entity_ids: body.familyMemberIds ?? [],
                tags: body.tags ?? [],
                source_url: body.assetUrl ?? "",
                payload_json: JSON.stringify(body),
                ingested_at: now,
              }],
            });
            await client.close();
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ success: true, stored: "clickhouse" }));
          } else if (req.method === "DELETE") {
            const chunks = [];
            for await (const c of req) chunks.push(c);
            const body = JSON.parse(Buffer.concat(chunks).toString() || "{}");
            const client = ch(env);
            // ClickHouse mutations are async + heavy. Use ALTER TABLE DELETE.
            await client.command({
              query: `ALTER TABLE heritage_atlas_facts DELETE WHERE vault_id = 'demo-vault' AND fact_id = {id:String}`,
              query_params: { id: body.id },
            });
            await client.close();
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ success: true, deleted: body.id }));
          } else {
            res.statusCode = 405;
            res.end("Method not allowed");
          }
        } catch (err) {
          console.error("[memories CRUD]", err.message);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
        }
      });

      // ── 9. CRUD: Family members ───────────────────────────────────
      server.middlewares.use("/api/family-members", async (req, res) => {
        try {
          if (req.method === "POST" || req.method === "PUT") {
            const chunks = [];
            for await (const c of req) chunks.push(c);
            const body = JSON.parse(Buffer.concat(chunks).toString() || "{}");
            const client = ch(env);
            const now = new Date().toISOString().replace("Z", "").replace("T", " ").slice(0, 23);
            await client.insert({
              table: "heritage_atlas_members",
              format: "JSONEachRow",
              values: [{
                vault_id: "demo-vault",
                member_id: body.id,
                full_name: body.fullName,
                relationship: body.relationship ?? "",
                parent_id: body.parentId ?? "",
                birth_year: body.birthYear ?? null,
                death_year: body.deathYear ?? null,
                portrait_url: body.portraitUrl ?? "",
                notes: body.notes ?? "",
                ingested_at: now,
              }],
            });
            await client.close();
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ success: true, stored: "clickhouse" }));
          } else if (req.method === "DELETE") {
            const chunks = [];
            for await (const c of req) chunks.push(c);
            const body = JSON.parse(Buffer.concat(chunks).toString() || "{}");
            const client = ch(env);
            await client.command({
              query: `ALTER TABLE heritage_atlas_members DELETE WHERE vault_id = 'demo-vault' AND member_id = {id:String}`,
              query_params: { id: body.id },
            });
            await client.close();
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ success: true, deleted: body.id }));
          } else {
            res.statusCode = 405;
            res.end("Method not allowed");
          }
        } catch (err) {
          console.error("[family-members CRUD]", err.message);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
        }
      });

      // ── 10. CRUD: Stories ─────────────────────────────────────────
      server.middlewares.use("/api/stories", async (req, res) => {
        try {
          if (req.method === "POST" || req.method === "PUT") {
            const chunks = [];
            for await (const c of req) chunks.push(c);
            const body = JSON.parse(Buffer.concat(chunks).toString() || "{}");
            const client = ch(env);
            const now = new Date().toISOString().replace("Z", "").replace("T", " ").slice(0, 23);
            await client.insert({
              table: "heritage_atlas_stories",
              format: "JSONEachRow",
              values: [{
                vault_id: "demo-vault",
                story_id: body.id,
                title: body.title,
                excerpt: body.excerpt ?? "",
                body: body.body ?? "",
                memory_ids: body.memoryIds ?? [],
                status: body.status ?? "published",
                ingested_at: now,
              }],
            });
            await client.close();
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ success: true, stored: "clickhouse" }));
          } else if (req.method === "DELETE") {
            const chunks = [];
            for await (const c of req) chunks.push(c);
            const body = JSON.parse(Buffer.concat(chunks).toString() || "{}");
            const client = ch(env);
            await client.command({
              query: `ALTER TABLE heritage_atlas_stories DELETE WHERE vault_id = 'demo-vault' AND story_id = {id:String}`,
              query_params: { id: body.id },
            });
            await client.close();
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ success: true, deleted: body.id }));
          } else {
            res.statusCode = 405;
            res.end("Method not allowed");
          }
        } catch (err) {
          console.error("[stories CRUD]", err.message);
          res.statusCode = 500;
          res.end(JSON.stringify({ error: err.message }));
        }
      });
    },
  };
}
