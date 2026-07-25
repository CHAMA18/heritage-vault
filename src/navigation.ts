import { initVaultDashboard } from "./vault-dashboard";
import { initStoryMode } from "./story-mode";
import { initFamilyMap } from "./family-map";
import { AgentChat } from "./agent/chat";
import { demoAtlasDataset } from "./demo-data";
const initState: Record<string, boolean> = {};
function initScreen(view: string): void {
  if (initState[view]) return;
  try {
    if (view === "vault") { const s = document.getElementById("vault-screen"); if (s) initVaultDashboard(s); }
    else if (view === "family-map") { const s = document.getElementById("family-map-screen"); if (s) initFamilyMap(s); }
    else if (view === "story-mode") { const s = document.getElementById("story-mode-screen"); if (s) initStoryMode(s); }
    else if (view === "agent") { const s = document.getElementById("agent-screen"); if (s) { const c = new AgentChat({ mount: s, dataset: demoAtlasDataset, vaultId: "demo-vault" }); c.init(); } }
    initState[view] = true;
  } catch (e) { console.warn("[init] " + view + ":", e); }
}
function navigateToView(view: string): void {
  const ids = ["vault-screen", "family-map-screen", "story-mode-screen", "agent-screen", "atlas-screen", "login-screen"];
  const landing = document.querySelector<HTMLElement>(".landing-page");
  ids.forEach((id) => { const el = document.getElementById(id); if (el) el.style.display = "none"; });
  if (!view || view === "landing") { if (landing) landing.classList.remove("is-hidden"); return; }
  if (landing) landing.classList.add("is-hidden");
  const screenMap: Record<string, string> = { "vault": "vault-screen", "family-map": "family-map-screen", "story-mode": "story-mode-screen", "agent": "agent-screen", "atlas": "atlas-screen", "login": "login-screen" };
  const modes: Record<string, string> = { "vault": "flex", "family-map": "flex", "story-mode": "flex", "agent": "flex", "atlas": "block", "login": "flex" };
  const screenId = screenMap[view];
  if (screenId) { const screen = document.getElementById(screenId); if (screen) screen.style.display = modes[view] || "block"; }
  requestAnimationFrame(() => initScreen(view));
  history.pushState({ view }, "", "#" + view);
}
document.addEventListener("click", (e: Event) => { const link = (e.target as HTMLElement).closest<HTMLElement>("[data-dashboard-view]"); if (!link) return; e.preventDefault(); e.stopPropagation(); navigateToView(link.dataset.dashboardView || ""); });
window.addEventListener("popstate", () => { navigateToView(window.location.hash.replace("#", "") || "landing"); });
if (window.location.hash) { const h = window.location.hash.replace("#", ""); if (["vault", "family-map", "story-mode", "agent", "atlas"].includes(h)) { setTimeout(() => navigateToView(h), 200); } }
(window as any).navigateToView = navigateToView;
