/**
 * HeritageVault — Vite server-side middleware
 *
 * After the Trigger.dev + ClickHouse backends were removed, this plugin's only
 * job is the Genblaze media-pipeline proxy (used in dev):
 *
 *   1. POST /api/genblaze/generate — forwards a story chapter to the Python
 *      Genblaze worker (ElevenLabs TTS narration + DALL·E illustration, stored
 *      on Backblaze B2 with a SHA-256 provenance manifest).
 *   2. GET  /api/genblaze/health   — liveness probe for the worker.
 *   3. GET  /api/agent-health      — liveness probe for this middleware.
 *
 * Credentials stay server-side in the worker's environment. The browser only
 * ever talks to /api/genblaze/*, so no B2 / ElevenLabs / OpenAI keys ship in
 * the bundle. The Agent itself is fully in-browser (src/agent/chat.ts computes
 * answers from the archive store) and needs no backend.
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export function heritageAgentPlugin() {
  // Load .env at plugin construction time (server-side only).
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

  const GENBLAZE_WORKER_URL = (env.GENBLAZE_WORKER_URL || "http://127.0.0.1:8787").replace(/\/+$/, "");

  return {
    name: "heritage-genblaze-proxy",
    configureServer(server) {
      // ── 1. Genblaze worker: generate ─────────────────────────────
      server.middlewares.use("/api/genblaze/generate", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end("Method not allowed");
          return;
        }
        try {
          const chunks = [];
          for await (const c of req) chunks.push(c);
          const body = JSON.parse(Buffer.concat(chunks).toString() || "{}");
          const upstream = await fetch(`${GENBLAZE_WORKER_URL}/generate`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          const text = await upstream.text();
          res.statusCode = upstream.status;
          res.setHeader("Content-Type", "application/json");
          res.end(text);
        } catch (err) {
          console.error("[genblaze/generate] proxy error:", err.message);
          res.statusCode = 502;
          res.end(JSON.stringify({ error: "Genblaze worker unreachable — start it with: cd genblaze-worker && uvicorn server:app --port 8787" }));
        }
      });

      // ── 2. Genblaze worker: health ───────────────────────────────
      server.middlewares.use("/api/genblaze/health", async (_req, res) => {
        try {
          const upstream = await fetch(`${GENBLAZE_WORKER_URL}/health`);
          res.statusCode = upstream.status;
          res.setHeader("Content-Type", "application/json");
          res.end(await upstream.text());
        } catch {
          res.statusCode = 502;
          res.end(JSON.stringify({ ok: false, service: "genblaze-worker", error: "unreachable" }));
        }
      });

      // ── 3. Health check ──────────────────────────────────────────
      server.middlewares.use("/api/agent-health", (_req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({
            live: true,
            runtime: "in-browser archive runtime (no external database)",
            genblaze: {
              workerUrl: GENBLAZE_WORKER_URL,
              live: Boolean(env.GENBLAZE_WORKER_URL),
            },
          }),
        );
      });
    },
  };
}
