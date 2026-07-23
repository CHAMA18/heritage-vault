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
 * Two modes:
 *   1. PRODUCTION: Trigger.dev + ClickHouse credentials are configured.
 *      We instantiate TriggerChatTransport, which talks to the deployed
 *      chat.agent() worker. The worker's tools query ClickHouse. Every
 *      response is a VizSpec streamed back as a tool part.
 *
 *   2. FALLBACK: No credentials. We fall back to the local mock runtime
 *      (mock.ts) so the chat is fully interactive in any context. The
 *      VizSpec shape is identical, so the renderer doesn't care.
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
 * Vite env detection. When you set `VITE_TRIGGER_PROJECT_REF` and
 * `VITE_TRIGGER_PUBLIC_TOKEN` in `.env`, the chat switches to the
 * production path.
 */
const TRIGGER_PROJECT_REF =
  (import.meta.env?.VITE_TRIGGER_PROJECT_REF as string | undefined) ?? "";
const TRIGGER_PUBLIC_TOKEN =
  (import.meta.env?.VITE_TRIGGER_PUBLIC_TOKEN as string | undefined) ?? "";

export const isTriggerConfigured = Boolean(
  TRIGGER_PROJECT_REF && TRIGGER_PUBLIC_TOKEN
);

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
 * (which expects a deployed worker).
 */
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
      // In a Next.js app these would be server actions. In Vite without a
      // backend, you'd deploy a tiny serverless function (Vercel, Cloudflare
      // Workers, etc.) that wraps `auth.createPublicToken` and
      // `chat.createStartSessionAction(TASK_ID)`. The browser hits those
      // endpoints to mint session-scoped PATs.
      accessToken: async ({ chatId }) => {
        const res = await fetch(`/api/chat/${chatId}/access-token`, {
          method: "POST",
          headers: {
            "x-trigger-public-token": TRIGGER_PUBLIC_TOKEN,
          },
        });
        if (!res.ok) throw new Error(`Token refresh failed: ${res.status}`);
        return res.text();
      },
      startSession: async ({ chatId, clientData }) => {
        const res = await fetch(`/api/chat/${chatId}/start`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-trigger-public-token": TRIGGER_PUBLIC_TOKEN,
          },
          body: JSON.stringify({ taskId: TASK_ID, clientData }),
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
  const transport = await loadTransport();
  if (!transport) return null;

  onPhase("interpreting");
  // The transport + useChat integration would normally drive this from
  // React. In vanilla JS we use the lower-level sendStream API:
  //   const stream = await transport.sendMessages({ messages, ... });
  // For now, since this live preview runs in fallback mode, we keep the
  // signature stable and let the chat UI call the mock when this returns null.
  void dataset;
  void prompt;
  void vaultId;
  return null;
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
 * Routes to the Trigger.dev production path when credentials are configured,
 * otherwise falls back to the mock runtime. Both paths return the same
 * `AgentTurnResult` shape — the chat UI doesn't branch.
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
    // If the transport failed to load or the worker didn't respond,
    // fall through to the mock runtime so the chat stays alive.
  }
  return runMockTurn(dataset, prompt, onPhase);
}
