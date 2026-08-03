import { archiveStore } from "./services/archive-store";

type View = "vault" | "family-map" | "story-mode" | "atlas" | "agent" | "landing";
type Navigate = (view: View) => void;

const esc = (value: unknown): string => {
  const node = document.createElement("span");
  node.textContent = String(value ?? "");
  return node.innerHTML;
};

const eventLog = (name: string, detail: Record<string, unknown> = {}): void => {
  const key = "heritage-atlas-analytics";
  const events = JSON.parse(localStorage.getItem(key) ?? "[]") as Array<Record<string, unknown>>;
  events.push({ name, at: new Date().toISOString(), ...detail });
  localStorage.setItem(key, JSON.stringify(events.slice(-100)));
};

function injectStyles(): void {
  if (document.getElementById("ha-demo-polish")) return;
  const style = document.createElement("style");
  style.id = "ha-demo-polish";
  style.textContent = `
    .ha-live-badge{display:inline-flex;align-items:center;gap:.5rem;margin-top:1rem;padding:.52rem .82rem;border:1px solid rgba(73,115,77,.3);border-radius:999px;background:rgba(255,255,255,.66);color:#2c3a2e;font:700 .75rem/1 Satoshi,system-ui;letter-spacing:.03em;text-decoration:none;box-shadow:0 8px 24px rgba(28,40,32,.08)}
    .ha-live-badge i{width:.5rem;height:.5rem;border-radius:999px;background:#40a35a;box-shadow:0 0 0 0 rgba(64,163,90,.45);animation:haPulse 1.8s infinite}.ha-live-badge:hover{transform:translateY(-2px)}@keyframes haPulse{70%{box-shadow:0 0 0 8px rgba(64,163,90,0)}100%{box-shadow:0 0 0 0 rgba(64,163,90,0)}}
    .ha-powered-footer{position:fixed;right:1.15rem;bottom:1.05rem;z-index:70;display:flex;align-items:center;gap:.45rem;padding:.48rem .72rem;border:1px solid rgba(119,87,77,.16);border-radius:999px;background:rgba(255,253,251,.9);backdrop-filter:blur(12px);color:#6a5a51;font:600 .69rem/1.2 Satoshi,system-ui;box-shadow:0 8px 22px rgba(38,31,26,.12)}html.dark .ha-powered-footer{background:rgba(35,31,27,.9);color:#e9ddd5}.ha-powered-footer b{color:#2c3a2e}html.dark .ha-powered-footer b{color:#e9ddd5}.ha-powered-footer button{border:0;border-left:1px solid rgba(119,87,77,.18);background:transparent;color:inherit;cursor:pointer}
    .ha-overlay{position:fixed;inset:0;z-index:200;display:grid;place-items:center;padding:1.25rem;background:rgba(24,25,22,.55);backdrop-filter:blur(10px)}.ha-dialog{width:min(100%,46rem);max-height:min(88vh,52rem);overflow:auto;border:1px solid rgba(119,87,77,.2);border-radius:1.5rem;background:#fffdfa;color:#283327;box-shadow:0 28px 80px rgba(16,18,14,.35)}.ha-dialog__hero{min-height:14rem;padding:2rem;display:flex;align-items:flex-end;background:linear-gradient(135deg,#233327,#728a70);color:#fff}.ha-dialog__body{padding:clamp(1.5rem,4vw,2.5rem)}.ha-dialog__close{float:right;border:0;background:transparent;color:inherit;font-size:1.75rem;cursor:pointer}.ha-dialog__meta,.ha-dialog__tags{display:flex;flex-wrap:wrap;gap:.55rem;margin:1rem 0}.ha-pill{padding:.35rem .58rem;border-radius:999px;background:#f5e7df;color:#805d4e;font:700 .74rem/1 Satoshi,system-ui}.ha-dialog__people{display:flex;flex-wrap:wrap;gap:.55rem}.ha-dialog__person{padding:.45rem .65rem;border:1px solid #e8ddd6;border-radius:.7rem;font:600 .8rem Satoshi,system-ui}.ha-dialog__ask{margin-top:1.5rem;border:0;border-radius:.8rem;background:#283327;color:#fff;padding:.85rem 1.05rem;font:700 .9rem Satoshi,system-ui;cursor:pointer}
    .ha-search{width:min(100%,52rem);padding:1.2rem}.ha-search input{width:100%;padding:1rem 1.1rem;border:1px solid #d8ccc4;border-radius:.85rem;background:#fff;color:#283327;font:500 1rem Satoshi,system-ui}.ha-search__meta{margin:.75rem 0;color:#786c64;font:600 .78rem Satoshi,system-ui}.ha-search__results{display:grid;gap:.55rem;max-height:55vh;overflow:auto}.ha-search__result{width:100%;padding:1rem;border:1px solid #eee3dc;border-radius:.9rem;background:#fff;text-align:left;color:#283327;cursor:pointer}.ha-search__result:hover{border-color:#a47c6b;background:#fdf7f2}.ha-search__result b,.ha-search__result small{display:block}.ha-search__result small{margin-top:.3rem;color:#716963}.ha-search__empty{padding:1.4rem 0;color:#716963;text-align:center}
    .ha-tour{position:fixed;inset:0;z-index:210;pointer-events:none}.ha-tour__spot{position:fixed;border:2px solid #d4a44c;border-radius:1rem;box-shadow:0 0 0 9999px rgba(20,22,18,.55);transition:all .35s ease}.ha-tour__card{position:fixed;right:1.25rem;bottom:4.5rem;width:min(22rem,calc(100vw - 2.5rem));padding:1.25rem;border-radius:1rem;background:#fffdfa;color:#283327;box-shadow:0 18px 48px rgba(0,0,0,.28);pointer-events:auto}.ha-tour__card p{margin:.4rem 0 1rem;color:#625b55;line-height:1.5}.ha-tour__actions{display:flex;justify-content:space-between;align-items:center;gap:.75rem}.ha-tour button{border:0;border-radius:.65rem;padding:.65rem .85rem;background:#283327;color:#fff;font:700 .8rem Satoshi,system-ui;cursor:pointer}.ha-tour button:first-child{background:transparent;color:#79594c}
    .ha-shortcuts{width:min(100%,34rem);padding:1.4rem}.ha-shortcuts kbd{display:inline-block;min-width:1.6rem;padding:.2rem .35rem;border:1px solid #d7cbc3;border-bottom-width:2px;border-radius:.35rem;background:#fff;font:700 .75rem Satoshi,system-ui;text-align:center}.ha-shortcuts li{display:flex;justify-content:space-between;gap:1rem;padding:.5rem 0;border-bottom:1px solid #f0e6df;color:#514c47}.ha-share{border:1px solid rgba(119,87,77,.22);border-radius:.7rem;background:#fff;color:#77574d;padding:.55rem .7rem;font:700 .76rem Satoshi,system-ui;cursor:pointer}
    .hv-agent__skeleton{display:grid;gap:.55rem;margin-top:.8rem}.hv-agent__skeleton i{display:block;height:.75rem;border-radius:999px;background:linear-gradient(90deg,#eee7df,#fbf6f1,#eee7df);background-size:200% 100%;animation:haShimmer 1.3s infinite}.hv-agent__skeleton i:nth-child(2){width:82%}.hv-agent__skeleton i:nth-child(3){width:61%}@keyframes haShimmer{to{background-position:-200% 0}}.hv-agent__error{display:grid;gap:.55rem;padding:1rem;border:1px solid rgba(186,26,26,.24);border-radius:.85rem;background:#fff5f3;color:#78251e}.hv-agent__error span{font-size:.88rem}.hv-agent__error div{display:flex;gap:.5rem}.hv-agent__error button{border:0;border-radius:.55rem;background:#7d3329;color:#fff;padding:.48rem .65rem;font:700 .75rem Satoshi,system-ui;cursor:pointer}.hv-agent__error button+button{background:#f1ded8;color:#7d3329}.hv-agent__recent{margin-top:1rem}
    @media(max-width:640px){.ha-powered-footer{display:none}.ha-live-badge{font-size:.68rem}}
  `;
  document.head.append(style);
}

function closeOverlay(): void { document.querySelector<HTMLElement>(".ha-overlay")?.remove(); }

function openMemory(memory: any, navigate: Navigate): void {
  closeOverlay();
  const snapshot = archiveStore.getSnapshot();
  const people = (memory.familyMemberIds ?? memory.related_entity_ids ?? []).map((id: string) => snapshot.members.find((p) => p.id === id)?.fullName ?? id);
  const overlay = document.createElement("div");
  overlay.className = "ha-overlay";
  overlay.innerHTML = `<article class="ha-dialog" role="dialog" aria-modal="true" aria-label="${esc(memory.title)}"><div class="ha-dialog__hero"><button class="ha-dialog__close" aria-label="Close">×</button><div><span class="ha-pill">${esc(memory.type ?? memory.entity_type ?? "memory")}</span><h2 style="font:600 clamp(2rem,6vw,3.8rem)/.98 Satoshi,system-ui;margin:.8rem 0 0">${esc(memory.title)}</h2></div></div><div class="ha-dialog__body"><div class="ha-dialog__meta"><span class="ha-pill">${esc(memory.year ?? memory.event_year ?? "Undated")}</span><span class="ha-pill">${esc(memory.location ?? "Place not yet recorded")}</span></div><p style="font-size:1.05rem;line-height:1.7">${esc(memory.description ?? "This preserved artifact is waiting for a fuller description.")}</p><div class="ha-dialog__tags">${(memory.tags ?? []).map((tag: string) => `<span class="ha-pill">#${esc(tag)}</span>`).join("")}</div>${people.length ? `<div class="ha-dialog__people">${people.map((name: string) => `<span class="ha-dialog__person">${esc(name)}</span>`).join("")}</div>` : ""}<button class="ha-dialog__ask" data-ask-memory>Ask the agent about this <span aria-hidden="true">→</span></button></div></article>`;
  overlay.addEventListener("click", (event) => { if (event.target === overlay) closeOverlay(); });
  overlay.querySelector(".ha-dialog__close")?.addEventListener("click", closeOverlay);
  overlay.querySelector<HTMLButtonElement>("[data-ask-memory]")?.addEventListener("click", () => {
    const prompt = `Tell me the story behind ${memory.title}${memory.location ? ` in ${memory.location}` : ""}.`;
    sessionStorage.setItem("heritage-atlas-pending-prompt", prompt);
    eventLog("memory_agent_handoff", { title: memory.title });
    closeOverlay();
    navigate("agent");
    setTimeout(() => {
      const input = document.querySelector<HTMLInputElement>("[data-agent-input]");
      if (input) { input.value = prompt; input.focus(); }
    }, 300);
  });
  document.body.append(overlay);
  overlay.querySelector<HTMLElement>(".ha-dialog__close")?.focus();
  eventLog("memory_detail_opened", { title: memory.title });
}

function bindSearch(navigate: Navigate): void {
  const open = (): void => {
    closeOverlay();
    const overlay = document.createElement("div");
    overlay.className = "ha-overlay";
    overlay.innerHTML = `<section class="ha-dialog ha-search" role="dialog" aria-modal="true" aria-label="Search archive"><button class="ha-dialog__close" aria-label="Close">×</button><h2 style="margin:0 0 .8rem;font:700 1.55rem Satoshi,system-ui">Search the archive</h2><input autofocus placeholder="Search titles, places, or descriptions…" aria-label="Search archive"/><p class="ha-search__meta">Your archive · memories</p><div class="ha-search__results"><p class="ha-search__empty">Start typing to search the preserved archive.</p></div></section>`;
    const input = overlay.querySelector<HTMLInputElement>("input")!;
    const results = overlay.querySelector<HTMLElement>(".ha-search__results")!;
    let timer = 0;
    input.addEventListener("input", () => {
      window.clearTimeout(timer);
      const term = input.value.trim();
      if (term.length < 2) { results.innerHTML = '<p class="ha-search__empty">Enter at least two letters.</p>'; return; }
      timer = window.setTimeout(() => {
        const q = input.value.trim().toLowerCase();
        const rows = archiveStore
          .getSnapshot()
          .memories.filter((m) =>
            [m.title, m.description, m.location ?? ""].some((field) => field.toLowerCase().includes(q))
          )
          .slice(0, 20);
        results.innerHTML = rows.length
          ? rows.map((row) => `<button type="button" class="ha-search__result" data-search-result="${esc(row.id)}"><b>${esc(row.title)}</b><small>${esc(row.year ?? "Undated")} · ${esc(row.location ?? "Location pending")} · ${esc(row.type)}</small></button>`).join("")
          : '<p class="ha-search__empty">No preserved memories match that search.</p>';
        rows.forEach((row) => results.querySelector<HTMLElement>(`[data-search-result="${CSS.escape(row.id)}"]`)?.addEventListener("click", () => openMemory(row, navigate)));
        eventLog("archive_search", { term: q, results: rows.length });
      }, 220);
    });
    overlay.addEventListener("click", (event) => { if (event.target === overlay) closeOverlay(); });
    overlay.querySelector(".ha-dialog__close")?.addEventListener("click", closeOverlay);
    document.body.append(overlay);
    input.focus();
  };
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (target.closest("[aria-label='Search'], [data-archive-search]")) { event.preventDefault(); open(); }
  });
}

function ensureLandingBadge(navigate: Navigate): void {
  const row = document.querySelector<HTMLElement>(".landing-page .hv-hero__cta-row");
  if (!row || row.querySelector(".ha-live-badge")) return;
  const badge = document.createElement("a");
  badge.href = "#agent";
  badge.className = "ha-live-badge";
  badge.innerHTML = "<i></i> Live demo — in-browser archive";
  badge.addEventListener("click", (event) => { event.preventDefault(); eventLog("live_demo_opened"); navigate("agent"); });
  row.append(badge);
}

function ensureFooter(): void {
  if (document.querySelector(".ha-powered-footer")) return;
  const footer = document.createElement("div");
  footer.className = "ha-powered-footer";
  footer.innerHTML = '<b>Powered by</b> HeritageVault · in-browser archive runtime <button type="button" data-ha-settings aria-label="Open settings">⚙</button>';
  footer.querySelector<HTMLButtonElement>("[data-ha-settings]")?.addEventListener("click", openSettings);
  document.body.append(footer);
}

function openSettings(): void {
  closeOverlay();
  const saved = JSON.parse(localStorage.getItem("heritage-atlas-preferences") ?? "{}") as { theme?: string; displayName?: string; notifications?: boolean };
  const overlay = document.createElement("div");
  overlay.className = "ha-overlay";
  overlay.innerHTML = `<section class="ha-dialog ha-search" role="dialog" aria-modal="true" aria-label="Archive settings"><button class="ha-dialog__close" aria-label="Close">×</button><h2 style="margin:0 0 1rem;font:700 1.55rem Satoshi,system-ui">Archive settings</h2><form style="display:grid;gap:1rem"><label>Theme<select name="theme" style="display:block;width:100%;margin-top:.4rem;padding:.7rem;border:1px solid #ddd0c8;border-radius:.65rem"><option value="system">System</option><option value="light">Light</option><option value="dark">Dark</option></select></label><label>Name displayed in your archive<input name="displayName" value="${esc(saved.displayName ?? document.documentElement.dataset.authUserName ?? "")}" style="display:block;width:100%;margin-top:.4rem;padding:.7rem;border:1px solid #ddd0c8;border-radius:.65rem" /></label><label style="display:flex;gap:.6rem;align-items:center"><input name="notifications" type="checkbox" ${saved.notifications ? "checked" : ""}/> Receive archive activity reminders</label><button style="border:0;border-radius:.7rem;padding:.75rem;background:#283327;color:#fff;font-weight:700;cursor:pointer">Save preferences</button></form><p class="ha-search__meta">Preferences are kept on this device until account-level preferences are enabled.</p></section>`;
  const form = overlay.querySelector<HTMLFormElement>("form")!;
  (form.elements.namedItem("theme") as HTMLSelectElement).value = saved.theme ?? "system";
  form.addEventListener("submit", (event) => { event.preventDefault(); const data = new FormData(form); const preference = { theme: String(data.get("theme")), displayName: String(data.get("displayName") ?? "").trim(), notifications: data.get("notifications") === "on" }; localStorage.setItem("heritage-atlas-preferences", JSON.stringify(preference)); const dark = preference.theme === "dark" || (preference.theme === "system" && matchMedia("(prefers-color-scheme: dark)").matches); document.documentElement.classList.toggle("dark", dark); if (preference.displayName) document.querySelectorAll<HTMLElement>("[data-auth-user-name]").forEach((el) => { el.textContent = preference.displayName; }); eventLog("settings_saved", { theme: preference.theme, notifications: preference.notifications }); closeOverlay(); });
  overlay.addEventListener("click", (event) => { if (event.target === overlay) closeOverlay(); }); overlay.querySelector(".ha-dialog__close")?.addEventListener("click", closeOverlay); document.body.append(overlay);
}

function openShortcutHelp(): void {
  closeOverlay();
  const overlay = document.createElement("div");
  overlay.className = "ha-overlay";
  overlay.innerHTML = `<section class="ha-dialog ha-shortcuts" role="dialog" aria-modal="true" aria-label="Keyboard shortcuts"><button class="ha-dialog__close" aria-label="Close">×</button><h2 style="margin:0 0 1rem;font:700 1.5rem Satoshi,system-ui">Keyboard shortcuts</h2><ul style="margin:0;padding:0;list-style:none"><li><span>Focus Agent input</span><kbd>/</kbd></li><li><span>Go to Vault</span><span><kbd>g</kbd> <kbd>v</kbd></span></li><li><span>Go to Family Map</span><span><kbd>g</kbd> <kbd>f</kbd></span></li><li><span>Go to Story Mode</span><span><kbd>g</kbd> <kbd>s</kbd></span></li><li><span>Go to Agent</span><span><kbd>g</kbd> <kbd>a</kbd></span></li><li><span>Show shortcuts</span><kbd>?</kbd></li></ul></section>`;
  overlay.addEventListener("click", (event) => { if (event.target === overlay) closeOverlay(); });
  overlay.querySelector("button")?.addEventListener("click", closeOverlay);
  document.body.append(overlay);
}

function bindShortcuts(navigate: Navigate): void {
  let prefixAt = 0;
  document.addEventListener("keydown", (event) => {
    const target = event.target as HTMLElement | null;
    if (target?.matches("input, textarea, select") && event.key !== "Escape") return;
    if (event.key === "?") { event.preventDefault(); openShortcutHelp(); return; }
    if (event.key === "/") { event.preventDefault(); navigate("agent"); setTimeout(() => document.querySelector<HTMLInputElement>("[data-agent-input]")?.focus(), 280); return; }
    if (event.key.toLowerCase() === "g") { prefixAt = Date.now(); return; }
    if (Date.now() - prefixAt < 900) {
      const next = ({ v: "vault", f: "family-map", s: "story-mode", a: "agent" } as Record<string, View>)[event.key.toLowerCase()];
      prefixAt = 0;
      if (next) { event.preventDefault(); eventLog("shortcut_navigation", { view: next }); navigate(next); }
    }
  });
}

function bindTour(navigate: Navigate): void {
  if (localStorage.getItem("heritage-atlas-tour-complete")) return;
  const steps = [
    { selector: "#vault-screen", title: "Your Vault", text: "Your archive at a glance: memories, people, and chapters, all grounded in live data." },
    { selector: "[data-dashboard-view='agent']", title: "Ask visually", text: "Agent turns your questions into charts, maps, and relationship diagrams." },
    { selector: "[data-dashboard-view='story-mode']", title: "Follow the narrative", text: "Story Mode guides each chapter with evidence and a readable path." },
    { selector: "[data-dashboard-view='family-map']", title: "See the constellation", text: "Family Map reveals who connects the archive across generations." },
  ];
  let index = 0;
  const tour = document.createElement("div");
  tour.className = "ha-tour";
  tour.innerHTML = '<div class="ha-tour__spot"></div><section class="ha-tour__card"><small data-tour-progress></small><h2 data-tour-title></h2><p data-tour-text></p><div class="ha-tour__actions"><button data-tour-skip>Skip tour</button><button data-tour-next>Next</button></div></section>';
  const show = (): void => {
    const step = steps[index]; const target = document.querySelector<HTMLElement>(step.selector);
    const spot = tour.querySelector<HTMLElement>(".ha-tour__spot")!;
    if (target) { const box = target.getBoundingClientRect(); Object.assign(spot.style, { top: `${Math.max(8, box.top)}px`, left: `${Math.max(8, box.left)}px`, width: `${Math.max(40, box.width)}px`, height: `${Math.max(40, box.height)}px` }); }
    tour.querySelector<HTMLElement>("[data-tour-progress]")!.textContent = `${index + 1} of ${steps.length}`;
    tour.querySelector<HTMLElement>("[data-tour-title]")!.textContent = step.title;
    tour.querySelector<HTMLElement>("[data-tour-text]")!.textContent = step.text;
    tour.querySelector<HTMLButtonElement>("[data-tour-next]")!.textContent = index === steps.length - 1 ? "Finish" : "Next";
  };
  tour.querySelector("[data-tour-skip]")?.addEventListener("click", () => { localStorage.setItem("heritage-atlas-tour-complete", "1"); tour.remove(); });
  tour.querySelector("[data-tour-next]")?.addEventListener("click", () => { index += 1; if (index >= steps.length) { localStorage.setItem("heritage-atlas-tour-complete", "1"); eventLog("onboarding_completed"); tour.remove(); return; } show(); });
  document.body.append(tour); show();
  void navigate;
}

export function initDemoPolish(navigate: Navigate): void {
  injectStyles(); ensureFooter(); ensureLandingBadge(navigate); bindSearch(navigate); bindShortcuts(navigate);
  document.addEventListener("heritage:memory-detail", ((event: CustomEvent) => {
    const id = event.detail?.id as string | undefined;
    const memory = archiveStore.getSnapshot().memories.find((item) => item.id === id) ?? event.detail?.memory;
    if (memory) openMemory(memory, navigate);
  }) as EventListener);
  document.addEventListener("heritage:view", ((event: CustomEvent) => { eventLog("page_view", { view: event.detail?.view }); }) as EventListener);
  document.addEventListener("heritage:story-route", () => {
    const header = document.querySelector<HTMLElement>("#story-mode-screen header");
    if (!header || header.querySelector(".ha-share")) return;
    const button = document.createElement("button"); button.className = "ha-share"; button.textContent = "Share story";
    button.addEventListener("click", async () => { const url = `${location.origin}${location.pathname}#story-mode?chapter=roots`; await navigator.clipboard?.writeText(url); button.textContent = "Link copied"; setTimeout(() => { button.textContent = "Share story"; }, 1600); eventLog("story_shared"); });
    header.append(button);
  });
  setTimeout(() => bindTour(navigate), 700);
}
