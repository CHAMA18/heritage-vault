import { buildAtlasAnswer } from "./answer-engine";
import type { AtlasDataset, AtlasAnswer } from "./types";

const escapeHtml = (value: string): string => {
  const element = document.createElement("span");
  element.textContent = value;
  return element.innerHTML;
};

const labelYear = (year: number | null): string => year ? String(year) : "Undated";

function renderNetwork(answer: AtlasAnswer): string {
  if (!answer.members.length) return '<div class="atlas-empty">Add relatives to reveal the relationship constellation.</div>';
  const memberById = new Map(answer.members.map((member) => [member.id, member]));
  return `<div class="atlas-network">${answer.members.slice(0, 9).map((member, index) => {
    const parent = member.parentId ? memberById.get(member.parentId) : undefined;
    return `<button class="atlas-person" data-atlas-person="${member.id}" style="--atlas-delay:${index * 55}ms"><span class="atlas-person__dot"></span><strong>${escapeHtml(member.fullName)}</strong><small>${escapeHtml(member.relationship || "Family member")}${parent ? ` · linked to ${escapeHtml(parent.fullName)}` : ""}</small></button>`;
  }).join("")}</div>`;
}

function renderTimeline(answer: AtlasAnswer): string {
  if (!answer.years.length) return '<div class="atlas-empty">Add dates to your memories to unlock the living timeline.</div>';
  const min = answer.years[0];
  const max = answer.years.at(-1) ?? min;
  const span = Math.max(1, max - min);
  return `<div class="atlas-timeline"><div class="atlas-timeline__rail"></div>${answer.years.map((year) => `<button class="atlas-timeline__point" data-atlas-year="${year}" style="left:${((year - min) / span) * 94 + 3}%"><span></span><b>${year}</b></button>`).join("")}</div>`;
}

function renderMap(answer: AtlasAnswer): string {
  if (!answer.locations.length) return '<div class="atlas-empty">Add a location to a memory to place it on your family map.</div>';
  return `<div class="atlas-map" aria-label="Memory geography">${answer.locations.slice(0, 7).map((location, index) => {
    const left = 16 + ((index * 29) % 67);
    const top = 18 + ((index * 37) % 54);
    return `<button class="atlas-map__place" data-atlas-location="${escapeHtml(location.name)}" style="left:${left}%;top:${top}%"><i style="--size:${20 + location.count * 7}px"></i><span>${escapeHtml(location.name)} <b>${location.count}</b></span></button>`;
  }).join("")}</div>`;
}

function renderEvidence(answer: AtlasAnswer): string {
  if (!answer.evidence.length) return '<div class="atlas-empty">Evidence cards appear as memories are added to your vault.</div>';
  return `<div class="atlas-evidence">${answer.evidence.map((item) => `<article class="atlas-evidence__card"><span class="material-symbols-outlined">${item.kind === "photo" ? "photo" : item.kind === "audio" ? "graphic_eq" : "description"}</span><div><p>${escapeHtml(item.title)}</p><small>${escapeHtml(item.detail)}</small></div><b>${labelYear(item.year)}</b></article>`).join("")}</div>`;
}

function renderAnswer(target: HTMLElement, dataset: AtlasDataset, prompt: string): void {
  const answer = buildAtlasAnswer(dataset, prompt);
  target.innerHTML = `<section class="atlas-hero"><div><p class="atlas-eyebrow">HeritageAtlas · visual answer</p><h1>${escapeHtml(prompt)}</h1><p>${escapeHtml(answer.verdict)}</p></div><div class="atlas-answer-mark"><span class="material-symbols-outlined">auto_awesome</span><small>Evidence-led</small></div></section><section class="atlas-grid"><article class="atlas-panel atlas-panel--wide"><header><div><span class="material-symbols-outlined">account_tree</span><p>Relationship constellation</p></div><button type="button" data-atlas-focus="relationships">Explore</button></header>${renderNetwork(answer)}</article><article class="atlas-panel"><header><div><span class="material-symbols-outlined">map</span><p>Memory geography</p></div><button type="button" data-atlas-focus="places">Explore</button></header>${renderMap(answer)}</article><article class="atlas-panel atlas-panel--wide"><header><div><span class="material-symbols-outlined">timeline</span><p>Living timeline</p></div><button type="button" data-atlas-focus="timeline">Explore</button></header>${renderTimeline(answer)}</article><article class="atlas-panel"><header><div><span class="material-symbols-outlined">verified</span><p>Source evidence</p></div><span class="atlas-count">${answer.evidence.length} records</span></header>${renderEvidence(answer)}</article></section>`;
  target.querySelectorAll<HTMLElement>("[data-atlas-year], [data-atlas-location], [data-atlas-person]").forEach((item) => item.addEventListener("click", () => item.classList.toggle("is-selected")));
}

export function createAtlasScreen(onBack: () => void): HTMLElement {
  const screen = document.createElement("main");
  screen.id = "atlas-screen";
  screen.className = "atlas-screen";
  screen.innerHTML = `<div class="atlas-app-shell"><aside data-sidebar class="atlas-sidebar vault-nav hidden flex-col p-6 lg:flex"><div class="mb-10"><img class="brand-logo" src="/heritageatlas-logo.svg" alt="HeritageAtlas" /></div><nav class="flex-1 space-y-2" aria-label="HeritageAtlas navigation"><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#vault" data-dashboard-view="vault"><span class="material-symbols-outlined">inventory_2</span>The Vault</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#family-map" data-dashboard-view="family-map"><span class="material-symbols-outlined">account_tree</span>Family Map</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#story-mode" data-dashboard-view="story-mode"><span class="material-symbols-outlined">auto_stories</span>Story Mode</a><a class="vault-nav-link active flex items-center gap-3 rounded-xl px-4 py-3 font-label-md text-label-md" href="#atlas" data-dashboard-view="atlas"><span class="material-symbols-outlined">explore</span>HeritageAtlas</a></nav><button data-new-memory class="mb-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-label-md text-label-md text-on-primary shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-container"><span class="material-symbols-outlined">add</span>New memory</button><button class="theme-toggle mb-5" type="button" data-theme-toggle><span class="flex items-center gap-3"><span class="material-symbols-outlined" data-theme-icon>dark_mode</span><span class="font-label-md text-label-md" data-theme-label>Dark mode</span></span><span class="material-symbols-outlined text-base">contrast</span></button><button class="theme-toggle text-secondary" type="button" data-logout><span class="flex items-center gap-3"><span class="material-symbols-outlined">logout</span><span class="font-label-md text-label-md" data-logout-label>Log out</span></span><span class="material-symbols-outlined text-base">arrow_forward</span></button><div class="mt-6 border-t border-outline-variant/20 pt-5"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container text-secondary"><span class="material-symbols-outlined">person</span></div><div><p class="font-label-md text-label-md font-semibold text-primary">Atlas keeper</p><p class="font-caption text-caption text-on-surface-variant">Your private archive</p></div></div></div></aside><section class="atlas-main"><header class="atlas-topbar"><button type="button" class="atlas-brand" data-atlas-back><img src="/heritageatlas-mark.svg" alt=""/><span>HeritageAtlas</span></button><p>Ask your archive. Explore the answer.</p><button type="button" class="atlas-close" data-atlas-back aria-label="Return to Vault"><span class="material-symbols-outlined">close</span></button></header><div class="atlas-shell"><section class="atlas-intro"><div><p class="atlas-eyebrow">Beyond the wall of text</p><h2>Your family, made explorable.</h2><p>Every answer is a timeline, relationship constellation, map, and trail back to the original memories.</p></div><form class="atlas-query" data-atlas-query><span class="material-symbols-outlined">auto_awesome</span><input aria-label="Ask HeritageAtlas" value="How did our family story unfold over time?" /><button type="submit">Explore answer <span class="material-symbols-outlined">arrow_forward</span></button></form><div class="atlas-suggestions"><button type="button">How did our family story unfold over time?</button><button type="button">Show the people connected to our memories</button><button type="button">Where do our memories take place?</button></div></section><div data-atlas-answer class="atlas-answer"><div class="atlas-loading">Preparing an evidence-led visual answer…</div></div></div></section></div>`;
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
