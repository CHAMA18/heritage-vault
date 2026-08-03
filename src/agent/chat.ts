/**
 * HeritageVault Agent — Chat Orchestrator
 *
 * Manages the conversation state and computes every answer IN THE BROWSER
 * from the user's archive (the in-browser archive runtime — `buildSpec` over
 * the archive-store snapshot). No backend, no external database: the agent
 * turns each question into a visualization-first response and wires drilldown
 * interactions to the next turn.
 *
 * The agent's response is NEVER a paragraph. It is always a VizSpec rendered
 * as an interactive chart / map / diagram / table.
 */
import type { AtlasDataset } from "../atlas/types";
import type { AgentMessage } from "./spec";
import { buildSpec } from "./mock";
import { renderSidebar } from "../shared-sidebar";
import { renderViz } from "./renderers";
import { initializeSidebars } from "../components/sidebar";

const SUGGESTED_PROMPTS = [
  "Show me the timeline of memories",
  "Where did my family live?",
  "Who appears most often in the archive?",
  "What kinds of memories are preserved?",
  "Compare the 1920s and the 2020s",
  "What are the oldest memories?",
  "Show me the family constellation",
  "Give me an overview of the archive",
];

const PHASE_LABELS: Record<NonNullable<AgentMessage["phase"]>, string> = {
  queued: "Queued",
  interpreting: "Interpreting your question",
  querying: "Querying your archive",
  rendering: "Rendering visualization",
  done: "Done",
  error: "Something went wrong",
};

export interface ChatOptions {
  /** The element where chat messages are rendered */
  mount: HTMLElement;
  /** The archive dataset to compute answers from (in-browser runtime) */
  dataset: AtlasDataset;
  /** Reserved for future server-backed paths */
  vaultId: string;
  /** Optional callback when a follow-up is suggested */
  onFollowup?: (prompt: string) => void;
}

export class AgentChat {
  private mount: HTMLElement;
  private dataset: AtlasDataset;
  private messages: AgentMessage[] = [];
  private isStreaming = false;

  constructor(opts: ChatOptions) {
    this.mount = opts.mount;
    this.dataset = opts.dataset;
    // vaultId / onFollowup are reserved for a future server-backed path.
    // Today every answer is computed in-browser from this.dataset.
    void opts.vaultId;
    void opts.onFollowup;
  }

  /** Render the initial empty state with suggested prompts */
  init() {
    this.renderShell();
    this.renderSuggestedPrompts();
    const pending = sessionStorage.getItem("heritage-atlas-pending-prompt");
    if (pending) {
      sessionStorage.removeItem("heritage-atlas-pending-prompt");
      void this.send(pending);
    }
  }

  /** Send a user prompt and produce the visual answer */
  async send(prompt: string): Promise<void> {
    if (this.isStreaming || !prompt.trim()) return;
    this.isStreaming = true;

    // Push user message
    const userMsg: AgentMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      prompt,
      at: new Date().toISOString(),
    };
    this.messages.push(userMsg);
    this.rememberPrompt(prompt);
    this.renderMessages();

    // Push a placeholder agent message that we mutate through phases:
    //   queued → interpreting → querying (the archive) → rendering → done
    const agentMsg: AgentMessage = {
      id: `a-${Date.now()}`,
      role: "agent",
      prompt,
      at: new Date().toISOString(),
      phase: "queued",
    };
    this.messages.push(agentMsg);
    this.renderMessages();

    const start = Date.now();
    try {
      const phases: NonNullable<AgentMessage["phase"]>[] = ["interpreting", "querying", "rendering"];
      for (const phase of phases) {
        const msg = this.messages.find((m) => m.id === agentMsg.id);
        if (msg) {
          msg.phase = phase;
          this.renderMessages();
        }
        await new Promise((resolve) => setTimeout(resolve, phase === "rendering" ? 120 : 220));
      }
      const spec = buildSpec(this.dataset, prompt);
      spec.elapsedMs = Date.now() - start;
      spec.source = "Your archive · in-browser runtime";
      agentMsg.spec = spec;
      agentMsg.phase = "done";
      this.renderMessages();
    } catch (err) {
      agentMsg.phase = "error";
      agentMsg.text = err instanceof Error ? err.message : String(err);
      this.renderMessages();
    } finally {
      this.isStreaming = false;
    }
  }

  /* ── Rendering ────────────────────────────────────────────────────── */

  private renderShell() {
    this.mount.innerHTML = `
      ${renderSidebar({ activeView: "agent" })}

      <div class="hv-agent">
        <header class="hv-agent__header">
          <div class="hv-agent__header-left">
            <span class="material-symbols-outlined hv-agent__header-icon">auto_awesome</span>
            <div>
              <h2>Heritage Atlas Agent</h2>
              <p>Ask anything about your archive — the answer is a chart, map, or diagram.</p>
            </div>
          </div>
          <div class="hv-agent__header-right">
            <span class="hv-agent__powered hv-agent__powered--live" title="Answers are computed in your browser from your archive — no external database needed.">
              <span class="material-symbols-outlined" style="font-size:14px">bolt</span>
              Archive runtime · in-browser
            </span>
          </div>
        </header>

        <div class="hv-agent__scroll" data-agent-scroll>
          <div class="hv-agent__messages" data-agent-messages></div>
          <div class="hv-agent__suggestions" data-agent-suggestions></div>
        </div>

        <form class="hv-agent__input-row" data-agent-form>
          <div class="hv-agent__input-wrap">
            <span class="material-symbols-outlined hv-agent__input-icon">search</span>
            <input
              type="text"
              class="hv-agent__input"
              data-agent-input
              placeholder="Ask: where did my family live? what are the oldest memories?"
              autocomplete="off"
              aria-label="Ask the Heritage Atlas agent"
            />
            <button type="submit" class="hv-agent__send" data-agent-send aria-label="Send">
              <span class="material-symbols-outlined">arrow_upward</span>
            </button>
          </div>
          <p class="hv-agent__hint">
            The agent returns charts, maps, and diagrams — never paragraphs.
            Click any chart element to drill down.
          </p>
        </form>
      </div>
    `;
    initializeSidebars();

    // Wire form
    const form = this.mount.querySelector<HTMLFormElement>("[data-agent-form]");
    const input = this.mount.querySelector<HTMLInputElement>("[data-agent-input]");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const value = input?.value.trim() ?? "";
      if (!value) return;
      this.send(value);
      if (input) input.value = "";
    });
  }

  private renderSuggestedPrompts() {
    const sug = this.mount.querySelector<HTMLElement>("[data-agent-suggestions]");
    if (!sug) return;
    const recent = JSON.parse(localStorage.getItem("heritage-atlas-recent-prompts") ?? "[]") as string[];
    sug.innerHTML = `
      <p class="hv-agent__suggestions-label">Try asking</p>
      <div class="hv-agent__chips">
        ${SUGGESTED_PROMPTS.map(
          (p) => `
          <button class="hv-agent__chip" data-prompt="${this.esc(p)}">${this.esc(p)}</button>
        `
        ).join("")}
      </div>
      ${recent.length ? `<div class="hv-agent__recent"><p class="hv-agent__suggestions-label">Recently asked</p><div class="hv-agent__chips">${recent.map((p) => `<button class="hv-agent__chip" data-recent-prompt="${this.esc(p)}">${this.esc(p)}</button>`).join("")}</div></div>` : ""}
    `;
    sug.querySelectorAll<HTMLButtonElement>("[data-prompt]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const prompt = btn.dataset.prompt ?? "";
        const input = this.mount.querySelector<HTMLInputElement>("[data-agent-input]");
        if (input) input.value = prompt;
        this.send(prompt);
        if (input) input.value = "";
      });
    });
    sug.querySelectorAll<HTMLButtonElement>("[data-recent-prompt]").forEach((btn) => {
      btn.addEventListener("click", () => this.send(btn.dataset.recentPrompt ?? ""));
    });
  }

  private renderMessages() {
    const wrap = this.mount.querySelector<HTMLElement>("[data-agent-messages]");
    if (!wrap) return;

    if (this.messages.length === 0) {
      wrap.innerHTML = "";
      this.showSuggestions();
      return;
    }

    this.hideSuggestions();
    wrap.innerHTML = this.messages.map((m) => this.renderMessage(m)).join("");

    // Wire interactivity for completed agent messages
    this.messages.forEach((m) => {
      if (m.role === "agent" && m.phase === "done" && m.spec) {
        this.bindInteractions(m.id);
      }
    });
    wrap.querySelectorAll<HTMLButtonElement>("[data-agent-retry]").forEach((button) => {
      button.addEventListener("click", () => this.send(button.dataset.agentRetry ?? ""));
    });
    wrap.querySelectorAll<HTMLButtonElement>("[data-agent-suggest]").forEach((button) => {
      button.addEventListener("click", () => {
        const input = this.mount.querySelector<HTMLInputElement>("[data-agent-input]");
        if (input) { input.value = "Show me the timeline of memories"; input.focus(); }
      });
    });

    // Scroll to bottom
    const scroll = this.mount.querySelector<HTMLElement>("[data-agent-scroll]");
    if (scroll) scroll.scrollTop = scroll.scrollHeight;
  }

  private renderMessage(m: AgentMessage): string {
    if (m.role === "user") {
      return `
        <div class="hv-agent__msg hv-agent__msg--user">
          <div class="hv-agent__msg-bubble hv-agent__msg-bubble--user">
            ${this.esc(m.prompt ?? "")}
          </div>
        </div>
      `;
    }
    if (m.role === "agent") {
      return this.renderAgentMessage(m);
    }
    return `
      <div class="hv-agent__msg hv-agent__msg--system">
        <div class="hv-agent__msg-bubble hv-agent__msg-bubble--system">${this.esc(m.text ?? "")}</div>
      </div>
    `;
  }

  private renderAgentMessage(m: AgentMessage): string {
    if (m.phase && m.phase !== "done" && m.phase !== "error") {
      return `
        <div class="hv-agent__msg hv-agent__msg--agent">
          <div class="hv-agent__msg-avatar">
            <span class="material-symbols-outlined">auto_awesome</span>
          </div>
          <div class="hv-agent__msg-body">
            <div class="hv-agent__phase">
              <span class="hv-agent__phase-spinner"></span>
              <span class="hv-agent__phase-label">${PHASE_LABELS[m.phase]}</span>
            </div>
            <div class="hv-agent__skeleton" aria-label="Preparing a visual answer"><i></i><i></i><i></i></div>
          </div>
        </div>
      `;
    }
    if (m.phase === "error") {
      return `
        <div class="hv-agent__msg hv-agent__msg--agent">
          <div class="hv-agent__msg-avatar"><span class="material-symbols-outlined">error</span></div>
          <div class="hv-agent__msg-body">
            <div class="hv-agent__error"><b>We could not complete that visual answer.</b><span>${this.esc(m.text ?? "The archive did not respond.")}</span><div><button type="button" data-agent-retry="${this.esc(m.prompt ?? "")}">Retry</button><button type="button" data-agent-suggest>Try a different question</button></div></div>
          </div>
        </div>
      `;
    }

    const spec = m.spec!;
    return `
      <div class="hv-agent__msg hv-agent__msg--agent" data-msg-id="${m.id}">
        <div class="hv-agent__msg-avatar"><span class="material-symbols-outlined">auto_awesome</span></div>
        <div class="hv-agent__msg-body">
          <div class="hv-agent__viz-card" data-viz-card>
            <header class="hv-agent__viz-header">
              <div>
                <h3>${this.esc(spec.title)}</h3>
                <p>${this.esc(spec.caption)}</p>
              </div>
              <span class="hv-agent__viz-kind" data-kind="${spec.kind}">${spec.kind}</span>
            </header>
            ${spec.verdict ? `<p class="hv-agent__viz-verdict">${this.esc(spec.verdict)}</p>` : ""}
            <div class="hv-agent__viz-body" data-viz-body>
              ${renderViz(spec)}
            </div>
            <footer class="hv-agent__viz-footer">
              ${
                spec.source
                  ? `<span class="hv-agent__viz-source"><span class="material-symbols-outlined" style="font-size:13px">database</span>${this.esc(spec.source)}</span>`
                  : ""
              }
              ${
                spec.elapsedMs !== undefined
                  ? `<span class="hv-agent__viz-elapsed"><span class="material-symbols-outlined" style="font-size:13px">schedule</span>${spec.elapsedMs} ms</span>`
                  : ""
              }
            </footer>
            ${
              spec.followups && spec.followups.length
                ? `
                <div class="hv-agent__followups">
                  <p>Follow up</p>
                  <div class="hv-agent__chips hv-agent__chips--inline">
                    ${spec.followups.map((f) => `<button class="hv-agent__chip" data-followup="${this.esc(f)}">${this.esc(f)}</button>`).join("")}
                  </div>
                </div>
              `
                : ""
            }
          </div>
        </div>
      </div>
    `;
  }

  /** Wire click handlers on chart elements that have drilldown prompts */
  private bindInteractions(msgId: string) {
    const msg = this.mount.querySelector<HTMLElement>(`[data-msg-id="${msgId}"]`);
    if (!msg) return;

    // Drilldown on any element with data-drilldown
    msg.querySelectorAll<HTMLElement>("[data-drilldown]").forEach((el) => {
      const drilldown = el.getAttribute("data-drilldown");
      if (!drilldown) return;
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
      const handler = () => {
        if (this.isStreaming) return;
        const input = this.mount.querySelector<HTMLInputElement>("[data-agent-input]");
        if (input) input.value = drilldown;
        this.send(drilldown);
        if (input) input.value = "";
      };
      el.addEventListener("click", handler);
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handler();
        }
      });
    });

    // Follow-up chips
    msg.querySelectorAll<HTMLButtonElement>("[data-followup]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const p = btn.dataset.followup ?? "";
        const input = this.mount.querySelector<HTMLInputElement>("[data-agent-input]");
        if (input) input.value = p;
        this.send(p);
        if (input) input.value = "";
      });
    });

    // Hover tooltips for legend items in donut
    msg.querySelectorAll<HTMLElement>(".hv-agent__legend-item").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const label = el.dataset.label;
        msg.querySelectorAll<HTMLElement>(".hv-agent__slice").forEach((s) => {
          s.style.opacity = s.dataset.label === label ? "1" : "0.25";
        });
      });
      el.addEventListener("mouseleave", () => {
        msg.querySelectorAll<HTMLElement>(".hv-agent__slice").forEach((s) => {
          s.style.opacity = "";
        });
      });
    });
  }

  private showSuggestions() {
    const sug = this.mount.querySelector<HTMLElement>("[data-agent-suggestions]");
    if (sug) sug.style.display = "";
  }

  private rememberPrompt(prompt: string): void {
    const key = "heritage-atlas-recent-prompts";
    const existing = JSON.parse(localStorage.getItem(key) ?? "[]") as string[];
    localStorage.setItem(key, JSON.stringify([prompt, ...existing.filter((item) => item !== prompt)].slice(0, 5)));
  }
  private hideSuggestions() {
    const sug = this.mount.querySelector<HTMLElement>("[data-agent-suggestions]");
    if (sug) sug.style.display = "none";
  }

  private esc(s: string): string {
    const el = document.createElement("span");
    el.textContent = s;
    return el.innerHTML;
  }
}
