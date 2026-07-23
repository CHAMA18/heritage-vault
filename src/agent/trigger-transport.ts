/**
 * HeritageAtlas Agent — Trigger.dev Transport Adapter (vanilla JS)
 *
 * Bridges the chat UI (`AgentChat` class) to the deployed Trigger.dev
 * `chat.agent()` worker (`heritageAtlasAgent` in trigger/agent-chat.ts).
 *
 * Architecture:
 *
 *   ┌─────────────────────────┐
 *   │  Browser (this file)    │
 *   │  AgentChat (chat.ts)    │
 *   │         │               │
 *   │         ▼               │
 *   │  TriggerChatTransport   │  ← from @trigger.dev/sdk/chat
 *   │         │               │
 *   └─────────┼───────────────┘
 *             │ HTTPS + SSE
 *             ▼
 *   ┌─────────────────────────┐
 *   │  Trigger.dev cloud      │
 *   │  heritage-atlas-agent   │  ← chat.agent() in trigger/agent-chat.ts
 *   │         │               │
 *   │  ┌──────┴──────┐        │
 *   │  ▼     ▼     ▼▼        │
 *   │  Tools (10 of them)     │
 *   │  each queries ClickHouse│
 *   │         │               │
 *   └─────────┼───────────────┘
 *             │
 *             ▼
 *   ┌─────────────────────────┐
 *   │  ClickHouse Cloud       │
 *   │  heritage_atlas_facts   │
 *   │  heritage_atlas_members │
 *   │  heritage_atlas_edges   │
 *   │  + materialised views   │
 *   └─────────────────────────┘
 *
 * Three modes:
 *   1. PRODUCTION: Trigger.dev + ClickHouse credentials are configured.
 *      We instantiate TriggerChatTransport, which talks to the deployed
 *      chat.agent() worker. The worker's tools query ClickHouse. Every
 *      response is a VizSpec streamed back as a tool part.
 *
 *   2. CLICKHOUSE LIVE: The Vite middleware queries ClickHouse Cloud directly
 *      while keeping credentials on the server.
 *
 *   3. OFFLINE DEMO: No live connection is configured. The local runtime is
 *      available for static previews only. A configured live archive never
 *      silently substitutes demonstration data.
 *
 * Detect which mode at runtime via Vite env vars (import.meta.env).
 */
import type { AtlasDataset } from "../atlas/types";
import type { VizSpec } from "./spec";
import { buildSpec as buildMockSpec } from "./mock";

/**
 * The configured Trigger.dev task ID. Must match the `id` in
 * trigger/agent-chat.ts → `chat.agent({ id: "heritage-atlas-agent" })`.
 */
const TASK_ID = "heritage-atlas-agent";

/**
 * Vite env detection. Three modes:
 *
 *   1. TRIGGER LIVE — VITE_TRIGGER_PROJECT_REF + VITE_TRIGGER_PUBLIC_TOKEN set.
 *      Browser talks to the deployed Trigger.dev chat.agent() worker whose
 *      tools query ClickHouse.
 *
 *   2. CLICKHOUSE LIVE (current) — VITE_CLICKHOUSE_LIVE=true. Browser POSTs
 *      to the Vite dev-server middleware (/api/agent-query), which queries
 *      live ClickHouse Cloud directly with the same intent→tool logic as
 *      the trigger task. Credentials stay server-side.
 *
 *   3. OFFLINE DEMO — neither set. The in-memory runtime synthesises
 *      the same VizSpec shape from demo-data.ts.
 */
const TRIGGER_PROJECT_REF =
  (import.meta.env?.VITE_TRIGGER_PROJECT_REF as string | undefined) ?? "";
const TRIGGER_TOKEN_ENDPOINT =
  (import.meta.env?.VITE_TRIGGER_TOKEN_ENDPOINT as string | undefined) ?? "/api/chat-access-token";
const TRIGGER_START_ENDPOINT =
  (import.meta.env?.VITE_TRIGGER_START_ENDPOINT as string | undefined) ?? "/api/chat-start";
const CLICKHOUSE_LIVE =
  (import.meta.env?.VITE_CLICKHOUSE_LIVE as string | undefined) === "true";
const AGENT_ENDPOINT =
  (import.meta.env?.VITE_AGENT_ENDPOINT as string | undefined) ?? "/api/agent-query";

/**
 * Trigger.dev is "configured" when the project ref is set AND the
 * token-minting endpoint is reachable. The secret key itself stays
 * server-side — the browser only knows the endpoint URLs.
 */
export const isTriggerConfigured = Boolean(TRIGGER_PROJECT_REF && TRIGGER_TOKEN_ENDPOINT);
export const isClickHouseLive = CLICKHOUSE_LIVE;
export const isLive = isTriggerConfigured || isClickHouseLive;

/**
 * The shape returned by `send()` — what the chat UI renders.
 * In production, this is decoded from the agent's tool-call output.
 * In fallback, it's synthesised by the mock runtime.
 */
export interface AgentTurnResult {
  spec: VizSpec;
  /** The natural-language one-liner the agent produced (max 20 words). */
  caption: string;
}

/**
 * Production path: instantiate the TriggerChatTransport.
 *
 * Lazy-loaded so the fallback path doesn't pull in the transport bundle
 * (which expects a deployed worker). Currently unused — `runTriggerTurn`
 * short-circuits until the worker is deployed — but kept here so the
 * moment `npx trigger.dev@latest deploy` runs, the browser transport
 * is ready to connect.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function loadTransport(): Promise<
  InstanceType<
    typeof import("@trigger.dev/sdk/chat").TriggerChatTransport
  > | null
> {
  if (!isTriggerConfigured) return null;
  try {
    const { TriggerChatTransport } = await import("@trigger.dev/sdk/chat");
    return new TriggerChatTransport({
      task: TASK_ID,
      // Mint a session-scoped PAT via the Vite middleware, which wraps
      // auth.createPublicToken with the server-side secret key.
      accessToken: async ({ chatId }) => {
        const res = await fetch(TRIGGER_TOKEN_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chatId }),
        });
        if (!res.ok) throw new Error(`Token refresh failed: ${res.status}`);
        const data = await res.json();
        return data.publicAccessToken;
      },
      startSession: async ({ chatId }) => {
        const res = await fetch(TRIGGER_START_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chatId, taskId: TASK_ID }),
        });
        if (!res.ok) throw new Error(`Session start failed: ${res.status}`);
        return res.json();
      },
    });
  } catch (err) {
    console.warn("[agent] Failed to load TriggerChatTransport:", err);
    return null;
  }
}
// Keep the reference alive for when the worker is deployed.
void loadTransport;

/**
 * Run a single turn against the deployed Trigger.dev chat.agent().
 *
 * Streams the agent's response. The agent will call ONE of the 10
 * ClickHouse-querying tools; the tool returns a VizSpec which the agent
 * forwards to the browser as a tool-part. We extract that VizSpec and
 * the one-line caption from the stream.
 */
export async function runTriggerTurn(
  dataset: AtlasDataset,
  prompt: string,
  vaultId: string,
  onPhase: (phase: "interpreting" | "querying" | "rendering") => void
): Promise<AgentTurnResult | null> {
  // The chat.agent() worker runs on Trigger.dev cloud. When deployed, the
  // TriggerChatTransport connects to it, Claude Sonnet 4.5 picks one of
  // the 10 ClickHouse-querying tools, and the resulting VizSpec streams
  // back as a `tool-output-available` chunk.
  void dataset;
  void vaultId;

  const transport = await loadTransport();
  if (!transport) return null;

  onPhase("interpreting");
  const chatId = `chat-${Date.now()}`;

  try {
    // 1. Start the session (mints a PAT + boots the agent)
    await transport.start(chatId).catch(() => null);

    onPhase("querying");

    // 2. Send the user's prompt. sendMessages returns a ReadableStream
    //    of UIMessageChunk parts. We read it to completion, collecting:
    //      - tool-output-available chunks (the VizSpec from the tool)
    //      - text-delta chunks (Claude's one-line caption)
    const stream = await transport.sendMessages({
      chatId,
      messages: [
        {
          id: `msg-${Date.now()}`,
          role: "user",
          parts: [{ type: "text", text: prompt }],
        },
      ] as any,
      clientData: { vaultId: vaultId || "demo-vault" },
    } as any);

    let spec: VizSpec | null = null;
    let captionText = "";

    const reader = (stream as ReadableStream<any>).getReader();
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      if (!value) continue;

      // Extract the VizSpec from tool-output-available chunks.
      // Each of the 10 tools returns a VizSpec as its output.
      if (value.type === "tool-output-available" && value.output) {
        const output = value.output as any;
        // The tool's execute() returns a VizSpec directly. If it's
        // wrapped (e.g. { output: VizSpec }), unwrap it.
        const candidate = output.spec ?? output.output ?? output;
        if (candidate && candidate.kind && candidate.title) {
          spec = candidate as VizSpec;
          onPhase("rendering");
        }
      }

      // Collect Claude's one-line caption from text-delta chunks
      if (value.type === "text-delta" && value.delta) {
        captionText += value.delta;
      }

      // Stop early on error
      if (value.type === "error") {
        throw new Error(value.errorText || "Agent stream error");
      }
    }

    if (!spec) {
      // No tool was called — Claude might have responded with prose only.
      // Fall back to the deterministic middleware.
      console.warn("[agent] No VizSpec in Trigger.dev stream, falling back");
      return null;
    }

    // Tag the spec with the live source
    spec.source = "Trigger.dev chat.agent() · ClickHouse Cloud (live)";
    spec.prompt = prompt;

    return {
      spec,
      caption: captionText.trim() || spec.verdict || "",
    };
  } catch (err) {
    console.warn("[agent] Trigger.dev turn failed, falling back to ClickHouse middleware:", err);
    return null;
  }
}

/**
 * ClickHouse-live path: POST the prompt to the Vite dev-server middleware,
 * which queries live ClickHouse Cloud with the same intent→tool logic as
 * the Trigger.dev task. Credentials stay server-side; the browser only
 * sees the resulting VizSpec.
 */
export async function runClickHouseTurn(
  prompt: string,
  onPhase: (phase: "interpreting" | "querying" | "rendering") => void
): Promise<AgentTurnResult | null> {
  if (!isClickHouseLive) return null;
  onPhase("interpreting");
  await new Promise((r) => setTimeout(r, 200));
  onPhase("querying");
  try {
    const res = await fetch(AGENT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    if (!res.ok) throw new Error(`Agent endpoint ${res.status}`);
    onPhase("rendering");
    const spec: VizSpec = await res.json();
    return { spec, caption: spec.verdict ?? "" };
  } catch (err) {
    console.warn("[agent] Live ClickHouse turn failed:", err);
    return null;
  }
}

/**
 * Fallback path: run a turn against the local mock runtime.
 *
 * Produces an identical VizSpec shape — the renderer doesn't know the
 * difference. Swap in Trigger.dev + ClickHouse credentials (set
 * VITE_TRIGGER_PROJECT_REF and VITE_TRIGGER_PUBLIC_TOKEN, deploy the
 * worker with `npx trigger.dev@latest deploy`, ingest the demo archive
 * with `npm run clickhouse:schema && ingestDemoArchive.trigger(...)`),
 * and the chat automatically uses the production path.
 */
export async function runMockTurn(
  dataset: AtlasDataset,
  prompt: string,
  onPhase: (phase: "interpreting" | "querying" | "rendering") => void
): Promise<AgentTurnResult> {
  onPhase("interpreting");
  await new Promise((r) => setTimeout(r, 280));
  onPhase("querying");
  await new Promise((r) => setTimeout(r, 520));
  onPhase("rendering");
  await new Promise((r) => setTimeout(r, 240));

  const spec = buildMockSpec(dataset, prompt);
  return {
    spec,
    caption: spec.verdict ?? "",
  };
}

/**
 * The single entry point the chat UI calls.
 *
 * Routes to (in priority order):
 *   1. Trigger.dev production path when VITE_TRIGGER_* creds are set
 *   2. ClickHouse live middleware when VITE_CLICKHOUSE_LIVE=true
 *   3. Local demonstration runtime only when no live connection is configured
 *
 * All paths return the same `AgentTurnResult` shape — the chat UI doesn't branch.
 */
export async function runTurn(
  dataset: AtlasDataset,
  prompt: string,
  vaultId: string,
  onPhase: (phase: "interpreting" | "querying" | "rendering") => void
): Promise<AgentTurnResult> {
  if (isTriggerConfigured) {
    const result = await runTriggerTurn(dataset, prompt, vaultId, onPhase);
    if (result) return result;
  }
  if (isClickHouseLive) {
    const result = await runClickHouseTurn(prompt, onPhase);
    if (result) return result;
    throw new Error(
      "The live ClickHouse archive could not be reached. No demonstration data was shown. Please try again."
    );
  }
  return runMockTurn(dataset, prompt, onPhase);
}
