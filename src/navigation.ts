import { initVaultDashboard } from "./vault-dashboard";
import { initStoryMode } from "./story-mode";
import { initFamilyMap } from "./family-map";
import { AgentChat } from "./agent/chat";
import { archiveStore } from "./services/archive-store";
const initState: Record<string, boolean> = {};
function initScreen(view: string): void {
  if (initState[view]) return;
  try {
    if (view === "vault") { const s = document.getElementById("vault-screen"); if (s) initVaultDashboard(s); }
    else if (view === "family-map") { const s = document.getElementById("family-map-screen"); if (s) initFamilyMap(s); }
    else if (view === "story-mode") { const s = document.getElementById("story-mode-screen"); if (s) initStoryMode(s); }
    else if (view === "agent") { const s = document.getElementById("agent-screen"); if (s) { const c = new AgentChat({ mount: s, dataset: archiveStore.getSnapshot(), vaultId: "demo-vault" }); c.init(); } }
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
// Listen for the Demo Mode / Login "show vault" signal — initializes the
// vault dashboard on first entry, even if the user bypassed hash navigation.
document.addEventListener("heritage:show-vault", () => {
  const s = document.getElementById("vault-screen");
  if (s) {
    s.style.display = "flex";
    requestAnimationFrame(() => initScreen("vault"));
  }
});
document.addEventListener("click", (e: Event) => { const link = (e.target as HTMLElement).closest<HTMLElement>("[data-dashboard-view]"); if (!link) return; e.preventDefault(); e.stopPropagation(); navigateToView(link.dataset.dashboardView || ""); });
window.addEventListener("popstate", () => { navigateToView(window.location.hash.replace("#", "") || "landing"); });
if (window.location.hash) { const h = window.location.hash.replace("#", ""); if (["vault", "family-map", "story-mode", "agent", "atlas"].includes(h)) { setTimeout(() => navigateToView(h), 200); } }
(window as any).navigateToView = navigateToView;
document.addEventListener("click", (e: Event) => {
  const themeBtn = (e.target as HTMLElement).closest("[data-theme-toggle]");
  if (themeBtn) { e.preventDefault(); e.stopPropagation(); const isDark = document.documentElement.classList.contains("dark"); document.documentElement.classList.toggle("dark", !isDark); try { localStorage.setItem("heritagevault-theme", !isDark ? "dark" : "light"); } catch {} document.querySelectorAll<HTMLElement>("[data-theme-label]").forEach((l) => l.textContent = !isDark ? "Light mode" : "Dark mode"); document.querySelectorAll<HTMLElement>("[data-theme-icon]").forEach((i) => i.textContent = !isDark ? "light_mode" : "dark_mode"); return; }
  const logoutBtn = (e.target as HTMLElement).closest("[data-logout]");
  if (logoutBtn) { e.preventDefault(); e.stopPropagation(); if (!window.confirm("Log out of HeritageVault?")) return; const landing = document.querySelector<HTMLElement>(".landing-page"); const login = document.getElementById("login-screen"); ["vault-screen","family-map-screen","story-mode-screen","agent-screen","atlas-screen"].forEach(id => { const el = document.getElementById(id); if (el) el.style.display = "none"; }); if (login) login.style.display = "flex"; if (landing) landing.classList.remove("is-hidden"); window.scrollTo({ top: 0, behavior: "smooth" }); history.pushState({ view: "landing" }, "", "#"); }
});
try { const stored = localStorage.getItem("heritagevault-theme"); if (stored === "dark") { document.documentElement.classList.add("dark"); document.querySelectorAll<HTMLElement>("[data-theme-label]").forEach((l) => l.textContent = "Light mode"); document.querySelectorAll<HTMLElement>("[data-theme-icon]").forEach((i) => i.textContent = "light_mode"); } } catch {}
