import { buildAtlasAnswer } from "./answer-engine";
import type { AtlasDataset, AtlasAnswer } from "./types";

const escapeHtml = (value: string): string => {
  const element = document.createElement("span");
  element.textContent = value;
  return element.innerHTML;
};

const labelYear = (year: number | null): string => year ? String(year) : "Undated";

type ConstellationMember = { id: string; fullName: string; relationship: string; records: number };

function constellationMembers(answer: AtlasAnswer): ConstellationMember[] {
  const grouped = new Map<string, ConstellationMember>();
  answer.members.forEach((member) => {
    const key = member.fullName.trim().toLocaleLowerCase();
    if (!key) return;
    const current = grouped.get(key);
    if (current) {
      current.records += 1;
      if (!current.relationship && member.relationship) current.relationship = member.relationship;
      return;
    }
    grouped.set(key, { id: member.id, fullName: member.fullName, relationship: member.relationship || "Family member", records: 1 });
  });
  return [...grouped.values()].slice(0, 8);
}

function renderNetwork(answer: AtlasAnswer): string {
  const members = constellationMembers(answer);
  if (!members.length) return '<div class="atlas-empty atlas-empty--guided"><span class="material-symbols-outlined">account_tree</span><p>Add a relative to begin your living constellation.</p><small>Each new connection becomes explorable here.</small></div>';
  const points = members.map((_, index) => ({ x: 15 + ((index * 31) % 72), y: index % 2 ? 66 : 28 }));
  const connections = points.slice(1).map((point) => `<line x1="${points[0].x}" y1="${points[0].y}" x2="${point.x}" y2="${point.y}" />`).join("");
  return `<div class="atlas-network atlas-network--constellation"><svg class="atlas-network__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${connections}</svg>${members.map((member, index) => {
    const point = points[index];
    const duplicateLabel = member.records > 1 ? ` · ${member.records} linked records` : "";
    return `<button class="atlas-person" data-atlas-person="${escapeHtml(member.id)}" data-atlas-label="${escapeHtml(member.fullName)}" style="--x:${point.x}%;--y:${point.y}%;--atlas-delay:${index * 70}ms"><span class="atlas-person__dot"></span><strong>${escapeHtml(member.fullName)}</strong><small>${escapeHtml(member.relationship)}${duplicateLabel}</small></button>`;
  }).join("")}</div>`;
}

function renderTimeline(answer: AtlasAnswer): string {
  if (!answer.years.length) return '<div class="atlas-empty atlas-empty--guided"><span class="material-symbols-outlined">calendar_month</span><p>Add a year to a memory to unlock the living timeline.</p><small>Chronology turns your archive into a story.</small></div>';
  const counts = new Map<number, number>();
  answer.memories.forEach((memory) => { if (memory.year) counts.set(memory.year, (counts.get(memory.year) ?? 0) + 1); });
  const min = answer.years[0];
  const max = answer.years.at(-1) ?? min;
  const span = Math.max(1, max - min);
  return `<div class="atlas-timeline"><div class="atlas-timeline__range"><span>${min}</span><strong>${max === min ? "A defining year" : `${max - min} years of family history`}</strong><span>${max}</span></div><div class="atlas-timeline__rail"></div>${answer.years.map((year) => `<button class="atlas-timeline__point" data-atlas-year="${year}" data-atlas-label="${year} · ${counts.get(year) ?? 0} memor${counts.get(year) === 1 ? "y" : "ies"}" style="left:${((year - min) / span) * 90 + 5}%"><span style="--point-size:${22 + Math.min(12, (counts.get(year) ?? 1) * 4)}px"></span><b>${year}</b><small>${counts.get(year) ?? 0}</small></button>`).join("")}</div>`;
}

function renderMap(answer: AtlasAnswer): string {
  if (!answer.locations.length) return '<div class="atlas-empty atlas-empty--guided"><span class="material-symbols-outlined">location_on</span><p>Places appear when memories include a location.</p><small>Add a city, home, or landmark to bring your map to life.</small></div>';
  return `<div class="atlas-map" aria-label="Memory geography"><div class="atlas-map__legend"><span>Memory density</span><i></i><i></i><i></i></div>${answer.locations.slice(0, 7).map((location, index) => {
    const left = 15 + ((index * 29) % 68);
    const top = 18 + ((index * 37) % 56);
    return `<button class="atlas-map__place" data-atlas-location="${escapeHtml(location.name)}" data-atlas-label="${escapeHtml(location.name)} · ${location.count} memor${location.count === 1 ? "y" : "ies"}" style="left:${left}%;top:${top}%"><i style="--size:${24 + Math.min(22, location.count * 8)}px"></i><span>${escapeHtml(location.name)} <b>${location.count}</b></span></button>`;
  }).join("")}</div>`;
}

function renderEvidence(answer: AtlasAnswer): string {
  if (!answer.evidence.length) return '<div class="atlas-empty atlas-empty--guided"><span class="material-symbols-outlined">verified</span><p>Evidence cards appear as memories are added.</p><small>Every visual answer stays traceable to its source.</small></div>';
  return `<div class="atlas-evidence">${answer.evidence.map((item, index) => `<button class="atlas-evidence__card" data-atlas-evidence="${index}" data-atlas-label="${escapeHtml(item.title)} · ${labelYear(item.year)}"><span class="material-symbols-outlined">${item.kind === "photo" ? "photo" : item.kind === "audio" ? "graphic_eq" : "description"}</span><div><p>${escapeHtml(item.title)}</p><small>${escapeHtml(item.detail)}</small></div><b>${labelYear(item.year)}</b></button>`).join("")}</div>`;
}

function renderExpandedContent(answer: AtlasAnswer, focus: "relationships" | "places" | "timeline"): string {
  if (focus === "relationships") {
    const people = constellationMembers(answer);
    return `<div class="atlas-expand-detail"><p class="atlas-expand-detail__eyebrow">Connected people</p><div class="atlas-expand-detail__grid">${people.map((person) => `<button type="button" data-atlas-person="${escapeHtml(person.id)}" data-atlas-label="${escapeHtml(person.fullName)} · ${escapeHtml(person.relationship)}" class="atlas-expand-detail__item"><span class="material-symbols-outlined">person</span><span><b>${escapeHtml(person.fullName)}</b><small>${escapeHtml(person.relationship)}${person.records > 1 ? ` · ${person.records} records` : ""}</small></span></button>`).join("")}</div></div>`;
  }
  if (focus === "places") {
    return `<div class="atlas-expand-detail"><p class="atlas-expand-detail__eyebrow">Places in this answer</p><div class="atlas-expand-detail__grid">${answer.locations.map((location) => `<button type="button" data-atlas-location="${escapeHtml(location.name)}" data-atlas-label="${escapeHtml(location.name)} · ${location.count} memor${location.count === 1 ? "y" : "ies"}" class="atlas-expand-detail__item"><span class="material-symbols-outlined">location_on</span><span><b>${escapeHtml(location.name)}</b><small>${location.count} preserved memor${location.count === 1 ? "y" : "ies"}</small></span></button>`).join("") || '<p class="atlas-expand-detail__empty">Add locations to memories to build your family geography.</p>'}</div></div>`;
  }
  return `<div class="atlas-expand-detail"><p class="atlas-expand-detail__eyebrow">Moments on the timeline</p><div class="atlas-expand-detail__grid">${answer.memories.filter((memory) => memory.year).sort((a, b) => (a.year ?? 0) - (b.year ?? 0)).map((memory) => `<button type="button" data-atlas-year="${memory.year}" data-atlas-label="${memory.year} · ${escapeHtml(memory.title)}" class="atlas-expand-detail__item"><span class="material-symbols-outlined">event</span><span><b>${memory.year} · ${escapeHtml(memory.title)}</b><small>${escapeHtml(memory.dateLabel || memory.location || "Preserved family memory")}</small></span></button>`).join("") || '<p class="atlas-expand-detail__empty">Add years to memories to build a family timeline.</p>'}</div></div>`;
}

function renderAnswer(target: HTMLElement, dataset: AtlasDataset, prompt: string): void {
  const answer = buildAtlasAnswer(dataset, prompt);
  const dated = answer.years.length ? `${answer.years[0]}–${answer.years.at(-1)}` : "Undated archive";
  target.innerHTML = `<section class="atlas-hero"><div><p class="atlas-eyebrow">HeritageAtlas · visual answer</p><h1>${escapeHtml(prompt)}</h1><p>${escapeHtml(answer.verdict)}</p></div><div class="atlas-answer-mark"><span class="material-symbols-outlined">auto_awesome</span><small>Evidence-led</small></div></section><section class="atlas-insights" aria-label="Archive summary"><div><b>${answer.memories.length}</b><span>memories in view</span></div><div><b>${constellationMembers(answer).length}</b><span>people connected</span></div><div><b>${answer.locations.length}</b><span>places discovered</span></div><div><b>${dated}</b><span>story horizon</span></div></section><section class="atlas-grid"><article class="atlas-panel atlas-panel--wide" data-atlas-panel="relationships"><header><div><span class="material-symbols-outlined">account_tree</span><p>Relationship constellation</p></div><button type="button" data-atlas-focus="relationships">Explore</button></header>${renderNetwork(answer)}${renderExpandedContent(answer, "relationships")}</article><article class="atlas-panel" data-atlas-panel="places"><header><div><span class="material-symbols-outlined">map</span><p>Memory geography</p></div><button type="button" data-atlas-focus="places">Explore</button></header>${renderMap(answer)}${renderExpandedContent(answer, "places")}</article><article class="atlas-panel atlas-panel--wide" data-atlas-panel="timeline"><header><div><span class="material-symbols-outlined">timeline</span><p>Living timeline</p></div><button type="button" data-atlas-focus="timeline">Explore</button></header>${renderTimeline(answer)}${renderExpandedContent(answer, "timeline")}</article><article class="atlas-panel" data-atlas-panel="evidence"><header><div><span class="material-symbols-outlined">verified</span><p>Source evidence</p></div><span class="atlas-count">${answer.evidence.length} records</span></header>${renderEvidence(answer)}</article></section><aside class="atlas-inspector" aria-live="polite"><span class="material-symbols-outlined">touch_app</span><p>Select a person, year, place, or source to inspect the connection.</p></aside>`;
  target.querySelector<HTMLElement>(".atlas-hero .atlas-eyebrow")!.textContent = "Heritage Atlas · visual answer";

  const inspector = target.querySelector<HTMLElement>(".atlas-inspector");
  const selectItem = (item: HTMLElement): void => {
    target.querySelectorAll<HTMLElement>(".is-selected").forEach((selected) => selected.classList.remove("is-selected"));
    item.classList.add("is-selected");
    if (inspector) inspector.innerHTML = `<span class="material-symbols-outlined">auto_awesome</span><p><b>${escapeHtml(item.dataset.atlasLabel ?? "Archive connection")}</b><br/>This signal is drawn from your private archive and can be explored alongside its related memories.</p>`;
  };
  target.querySelectorAll<HTMLElement>("[data-atlas-year], [data-atlas-location], [data-atlas-person], [data-atlas-evidence]").forEach((item) => item.addEventListener("click", () => selectItem(item)));
  target.querySelectorAll<HTMLButtonElement>("[data-atlas-focus]").forEach((button) => button.addEventListener("click", () => {
    const panel = target.querySelector<HTMLElement>(`[data-atlas-panel="${button.dataset.atlasFocus}"]`);
    const expanding = !panel?.classList.contains("is-expanded");
    target.querySelectorAll<HTMLElement>("[data-atlas-panel]").forEach((otherPanel) => otherPanel.classList.remove("is-expanded"));
    target.querySelectorAll<HTMLButtonElement>("[data-atlas-focus]").forEach((otherButton) => { otherButton.textContent = "Explore"; });
    panel?.classList.toggle("is-expanded", expanding);
    button.textContent = expanding ? "Collapse" : "Explore";
    panel?.scrollIntoView({ behavior: "smooth", block: "center" });
    panel?.classList.add("is-focused");
    window.setTimeout(() => panel?.classList.remove("is-focused"), 1100);
  }));
}

export function createAtlasScreen(onBack: () => void): HTMLElement {
  const screen = document.createElement("main");
  screen.id = "atlas-screen";
  screen.className = "atlas-screen";
  screen.innerHTML = `<div class="atlas-app-shell"><aside data-sidebar class="atlas-sidebar vault-nav hidden flex-col p-6 lg:flex"><div class="mb-10"><img class="brand-logo" src="/heritageatlas-logo.svg" alt="HeritageAtlas" /></div><nav class="flex-1 space-y-2" aria-label="HeritageAtlas navigation"><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#vault" data-dashboard-view="vault"><span class="material-symbols-outlined">inventory_2</span>The Vault</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#family-map" data-dashboard-view="family-map"><span class="material-symbols-outlined">account_tree</span>Family Map</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#story-mode" data-dashboard-view="story-mode"><span class="material-symbols-outlined">auto_stories</span>Story Mode</a><a class="vault-nav-link active flex items-center gap-3 rounded-xl px-4 py-3 font-label-md text-label-md" href="#atlas" data-dashboard-view="atlas"><span class="material-symbols-outlined">explore</span>HeritageAtlas</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#agent" data-dashboard-view="agent"><span class="material-symbols-outlined">smart_toy</span>Agent</a></nav><button data-new-memory class="mb-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-label-md text-label-md text-on-primary shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-container"><span class="material-symbols-outlined">add</span>New memory</button><button class="theme-toggle mb-5" type="button" data-theme-toggle><span class="flex items-center gap-3"><span class="material-symbols-outlined" data-theme-icon>dark_mode</span><span class="font-label-md text-label-md" data-theme-label>Dark mode</span></span><span class="material-symbols-outlined text-base">contrast</span></button><button class="theme-toggle text-secondary" type="button" data-logout><span class="flex items-center gap-3"><span class="material-symbols-outlined">logout</span><span class="font-label-md text-label-md" data-logout-label>Log out</span></span><span class="material-symbols-outlined text-base">arrow_forward</span></button><div class="mt-6 border-t border-outline-variant/20 pt-5"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container text-secondary"><span class="material-symbols-outlined">person</span></div><div><p class="font-label-md text-label-md font-semibold text-primary">Atlas keeper</p><p class="font-caption text-caption text-on-surface-variant">Your private archive</p></div></div></div></aside><section class="atlas-main"><header class="atlas-topbar"><button type="button" class="atlas-brand" data-atlas-back><img src="/heritageatlas-mark.svg" alt=""/><span>HeritageAtlas</span></button><p>Ask your archive. Explore the answer.</p><button type="button" class="atlas-close" data-atlas-back aria-label="Return to Vault"><span class="material-symbols-outlined">close</span></button></header><div class="atlas-shell"><section class="atlas-intro"><div><p class="atlas-eyebrow">Beyond the wall of text</p><h2>Your family, made explorable.</h2><p>Every answer is a timeline, relationship constellation, map, and trail back to the original memories.</p></div><form class="atlas-query" data-atlas-query><span class="material-symbols-outlined">auto_awesome</span><input aria-label="Ask HeritageAtlas" value="How did our family story unfold over time?" /><button type="submit">Explore answer <span class="material-symbols-outlined">arrow_forward</span></button></form><div class="atlas-suggestions"><button type="button">How did our family story unfold over time?</button><button type="button">Show the people connected to our memories</button><button type="button">Where do our memories take place?</button></div></section><div data-atlas-answer class="atlas-answer"><div class="atlas-loading">Preparing an evidence-led visual answer…</div></div></div></section></div>`;
  screen.querySelector<HTMLImageElement>(".brand-logo")?.setAttribute("alt", "Heritage Atlas");
  screen.querySelector<HTMLElement>("[aria-label='HeritageAtlas navigation']")?.setAttribute("aria-label", "Heritage Atlas navigation");
  const atlasNavLink = screen.querySelector<HTMLElement>("[data-dashboard-view='atlas']");
  if (atlasNavLink) atlasNavLink.lastChild!.textContent = "Heritage Atlas";
  screen.querySelector<HTMLElement>(".atlas-brand span")!.textContent = "Heritage Atlas";
  screen.querySelector<HTMLInputElement>("[data-atlas-query] input")?.setAttribute("aria-label", "Ask Heritage Atlas");
  screen.querySelectorAll<HTMLElement>("[data-atlas-back]").forEach((button) => button.addEventListener("click", onBack));
  return screen;
}

export function bindAtlas(screen: HTMLElement, loadDataset: () => Promise<AtlasDataset | null>): void {
  const answerTarget = screen.querySelector<HTMLElement>("[data-atlas-answer]");
  const form = screen.querySelector<HTMLFormElement>("[data-atlas-query]");
  const input = form?.querySelector<HTMLInputElement>("input");
  const render = async (prompt: string): Promise<void> => {
    if (!answerTarget) return;
    answerTarget.innerHTML = '<div class="atlas-loading">Reading the memories, people, places, and dates in your archive…</div>';
    const dataset = await loadDataset();
    if (!dataset) {
      answerTarget.innerHTML = '<div class="atlas-empty atlas-empty--large"><span class="material-symbols-outlined">inventory_2</span><h3>Your Atlas is ready for its first memory.</h3><p>Add a few memories and relatives, then return here to explore your family story visually.</p></div>';
      return;
    }
    renderAnswer(answerTarget, dataset, prompt);
  };
  form?.addEventListener("submit", (event) => { event.preventDefault(); void render(input?.value.trim() || "How did our family story unfold over time?"); });
  screen.querySelectorAll<HTMLButtonElement>(".atlas-suggestions button").forEach((button) => button.addEventListener("click", () => { if (input) input.value = button.textContent?.trim() || ""; void render(input?.value || ""); }));
  void render(input?.value || "How did our family story unfold over time?");
}
