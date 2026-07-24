/**
 * HeritageAtlas — Shared sidebar component
 * Every screen renders this exact sidebar. Same structure, same collapse
 * button position, same branding, nav, footer.
 */
import { initializeSidebars } from "./components/sidebar";

export type ScreenView = "vault" | "family-map" | "story-mode" | "agent";

export interface SidebarOptions {
  activeView: ScreenView;
}

const NAV_ITEMS: Array<{ view: ScreenView; href: string; icon: string; label: string }> = [
  { view: "vault", href: "#vault", icon: "inventory_2", label: "The Vault" },
  { view: "family-map", href: "#family-map", icon: "account_tree", label: "Family Map" },
  { view: "story-mode", href: "#story-mode", icon: "auto_stories", label: "Story Mode" },
  { view: "agent", href: "#agent", icon: "smart_toy", label: "Agent" },
];

const esc = (s: string): string => {
  const el = document.createElement("span");
  el.textContent = s;
  return el.innerHTML;
};

export function renderSidebar(opts: SidebarOptions): string {
  const { activeView } = opts;
  return `
    <aside class="hv-unified-sidebar" data-sidebar aria-label="HeritageAtlas navigation">
      <button class="hv-unified-sidebar__collapse" type="button" data-sidebar-toggle aria-label="Collapse sidebar">
        <span class="material-symbols-outlined">menu_open</span>
        <span class="hv-unified-sidebar__collapse-text">Collapse</span>
      </button>
      <div class="hv-unified-sidebar__brand">
        <a href="#vault" data-dashboard-view="vault" aria-label="HeritageAtlas home">
          <img data-brand-logo class="brand-logo brand-logo--compact" src="./heritageatlas-logo.png" alt="HeritageAtlas" />
        </a>
      </div>
      <nav class="hv-unified-sidebar__nav" aria-label="Primary">
        ${NAV_ITEMS.map((item) => `
          <a class="hv-unified-sidebar__nav-link${item.view === activeView ? " is-active" : ""}"
             href="${item.href}" data-dashboard-view="${item.view}"
             ${item.view === activeView ? 'aria-current="page"' : ""}>
            <span class="material-symbols-outlined">${item.icon}</span>
            <span>${esc(item.label)}</span>
          </a>`).join("")}
      </nav>
      <div class="hv-unified-sidebar__divider"></div>
      <div class="hv-unified-sidebar__footer">
        <button class="hv-unified-sidebar__theme" type="button" data-theme-toggle>
          <span class="material-symbols-outlined" data-theme-icon>dark_mode</span>
          <span data-theme-label>Dark mode</span>
          <span class="material-symbols-outlined hv-unified-sidebar__theme-arrow">contrast</span>
        </button>
        <button class="hv-unified-sidebar__logout" type="button" data-logout>
          <span class="material-symbols-outlined">logout</span>
          <span>Log out</span>
          <span class="material-symbols-outlined hv-unified-sidebar__logout-arrow">arrow_forward</span>
        </button>
        <div class="hv-unified-sidebar__user">
          <div class="hv-unified-sidebar__avatar">AK</div>
          <div><p class="hv-unified-sidebar__user-name">Amara Kabwe</p><p class="hv-unified-sidebar__user-role">Vault keeper</p></div>
        </div>
      </div>
    </aside>`;
}

export function injectSidebarCSS(): void {
  if (document.querySelector("#hv-unified-sidebar-css")) return;
  const style = document.createElement("style");
  style.id = "hv-unified-sidebar-css";
  style.textContent = `
    .hv-unified-sidebar{position:sticky;top:0;flex:0 0 280px;width:280px;min-width:280px;max-width:280px;height:100vh;overflow-y:auto;overflow-x:hidden;background:linear-gradient(180deg,rgba(243,234,217,.92) 0%,rgba(251,245,236,.88) 100%);border-right:1px solid rgba(28,32,24,.08);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);display:flex;flex-direction:column;padding:20px 22px;z-index:10;transition:width .3s cubic-bezier(.22,1,.36,1),min-width .3s cubic-bezier(.22,1,.36,1),max-width .3s cubic-bezier(.22,1,.36,1),padding .3s cubic-bezier(.22,1,.36,1)}
    .hv-unified-sidebar::-webkit-scrollbar{width:6px}.hv-unified-sidebar::-webkit-scrollbar-track{background:transparent}.hv-unified-sidebar::-webkit-scrollbar-thumb{background:rgba(28,32,24,.14);border-radius:3px}
    .hv-unified-sidebar.is-collapsed{width:72px;min-width:72px;max-width:72px;padding:20px 12px}
    .hv-unified-sidebar.is-collapsed .hv-unified-sidebar__collapse-text,.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__nav-link span:last-child,.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__divider,.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__theme span:nth-child(2),.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__theme-arrow,.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__logout span:nth-child(2),.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__logout-arrow,.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__user>div:last-child{display:none}
    .hv-unified-sidebar.is-collapsed .hv-unified-sidebar__brand img{height:32px;width:32px;object-fit:cover;border-radius:8px}
    .hv-unified-sidebar.is-collapsed .hv-unified-sidebar__nav-link{justify-content:center;padding:12px}
    .hv-unified-sidebar.is-collapsed .hv-unified-sidebar__theme,.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__logout{justify-content:center;padding:12px}
    .hv-unified-sidebar.is-collapsed .hv-unified-sidebar__user{justify-content:center;padding:8px}
    .hv-unified-sidebar.is-collapsed .hv-unified-sidebar__collapse{justify-content:center}
    .hv-unified-sidebar.is-collapsed .hv-unified-sidebar__collapse .material-symbols-outlined{transform:rotate(180deg)}
    .hv-unified-sidebar__collapse{display:flex;align-items:center;gap:10px;width:100%;padding:10px 14px;margin-bottom:18px;border:1px solid rgba(28,32,24,.1);border-radius:12px;background:rgba(251,245,236,.6);color:var(--hv-ink-soft,#3a3f33);font-size:.82rem;font-weight:500;cursor:pointer;transition:all .25s cubic-bezier(.22,1,.36,1)}
    .hv-unified-sidebar__collapse .material-symbols-outlined{font-size:20px;color:var(--hv-ink-mute,#6b7060);transition:transform .3s ease}
    .hv-unified-sidebar__collapse:hover{background:var(--hv-forest,#2c3a2e);color:var(--hv-cream,#fbf5ec);border-color:var(--hv-forest,#2c3a2e)}
    .hv-unified-sidebar__collapse:hover .material-symbols-outlined{color:var(--hv-amber,#d4a44c)}
    .hv-unified-sidebar__brand{display:flex;align-items:center;margin-bottom:24px;padding-bottom:18px;border-bottom:1px solid rgba(28,32,24,.06)}
    .hv-unified-sidebar__brand a{display:flex;align-items:center;text-decoration:none}
    .hv-unified-sidebar__brand img{height:38px;width:auto;max-width:220px}
    .hv-unified-sidebar__nav{display:flex;flex-direction:column;gap:4px;margin-bottom:20px}
    .hv-unified-sidebar__nav-link{display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:12px;font-size:.9rem;font-weight:500;color:var(--hv-ink-soft,#3a3f33);text-decoration:none;transition:all .25s cubic-bezier(.22,1,.36,1);white-space:nowrap;overflow:hidden}
    .hv-unified-sidebar__nav-link .material-symbols-outlined{font-size:20px;color:var(--hv-ink-mute,#6b7060);transition:color .25s ease;flex-shrink:0}
    .hv-unified-sidebar__nav-link:hover{background:rgba(28,32,24,.05);color:var(--hv-ink,#1d2018)}
    .hv-unified-sidebar__nav-link.is-active{background:linear-gradient(135deg,var(--hv-forest,#2c3a2e),var(--hv-forest-deep,#1c2820));color:var(--hv-cream,#fbf5ec);box-shadow:0 4px 14px rgba(28,40,32,.22)}
    .hv-unified-sidebar__nav-link.is-active .material-symbols-outlined{color:var(--hv-amber,#d4a44c)}
    .hv-unified-sidebar__divider{height:1px;background:linear-gradient(90deg,transparent,rgba(28,32,24,.12),transparent);margin:4px 0 16px}
    .hv-unified-sidebar__footer{margin-top:auto;padding-top:16px;border-top:1px solid rgba(28,32,24,.06);display:flex;flex-direction:column;gap:6px}
    .hv-unified-sidebar__theme,.hv-unified-sidebar__logout{display:flex;align-items:center;gap:12px;padding:10px 14px;border:none;border-radius:10px;background:transparent;font-size:.85rem;font-weight:500;color:var(--hv-ink-soft,#3a3f33);cursor:pointer;transition:background .2s ease;text-align:left;width:100%;white-space:nowrap;overflow:hidden}
    .hv-unified-sidebar__theme:hover,.hv-unified-sidebar__logout:hover{background:rgba(28,32,24,.05)}
    .hv-unified-sidebar__theme .material-symbols-outlined,.hv-unified-sidebar__logout .material-symbols-outlined{font-size:18px;color:var(--hv-ink-mute,#6b7060);flex-shrink:0}
    .hv-unified-sidebar__theme-arrow,.hv-unified-sidebar__logout-arrow{margin-left:auto;font-size:16px!important;opacity:.5}
    .hv-unified-sidebar__user{display:flex;align-items:center;gap:12px;padding:12px 14px;margin-top:8px;border-radius:12px;background:rgba(251,245,236,.6);white-space:nowrap;overflow:hidden}
    .hv-unified-sidebar__avatar{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,var(--hv-forest,#2c3a2e),var(--hv-forest-deep,#1c2820));color:var(--hv-amber,#d4a44c);font-family:"Fraunces",serif;font-weight:500;font-size:.88rem;flex-shrink:0}
    .hv-unified-sidebar__user-name{font-size:.86rem;font-weight:600;color:var(--hv-ink,#1d2018);margin:0}
    .hv-unified-sidebar__user-role{font-size:.72rem;color:var(--hv-ink-mute,#6b7060);margin:0}
    @media(max-width:1024px){.hv-unified-sidebar{position:fixed;top:0;left:0;z-index:100;transform:translateX(-100%);transition:transform .3s cubic-bezier(.22,1,.36,1);box-shadow:0 0 60px rgba(28,32,24,.2)}.hv-unified-sidebar.is-open{transform:translateX(0)}.hv-unified-sidebar.is-collapsed{width:280px;min-width:280px;max-width:280px;padding:20px 22px}.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__collapse-text,.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__nav-link span:last-child,.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__divider,.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__theme span:nth-child(2),.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__logout span:nth-child(2),.hv-unified-sidebar.is-collapsed .hv-unified-sidebar__user>div:last-child{display:block}}
    html.dark .hv-unified-sidebar{background:linear-gradient(180deg,#292622 0%,#211d19 100%);border-color:rgba(231,189,177,.12)}
    html.dark .hv-unified-sidebar__collapse{background:rgba(36,33,30,.6);border-color:rgba(231,189,177,.12);color:#c9bdb4}
    html.dark .hv-unified-sidebar__nav-link{color:#c9bdb4}
    html.dark .hv-unified-sidebar__nav-link .material-symbols-outlined{color:#8a8f80}
    html.dark .hv-unified-sidebar__nav-link:hover{background:rgba(231,189,177,.06);color:#f5eee8}
    html.dark .hv-unified-sidebar__nav-link.is-active{background:linear-gradient(135deg,#4a5b49,#344333);color:#fffdf9}
    html.dark .hv-unified-sidebar__user{background:rgba(36,33,30,.6)}
    html.dark .hv-unified-sidebar__user-name{color:#f5eee8}
    html.dark .hv-unified-sidebar__theme,html.dark .hv-unified-sidebar__logout{color:#c9bdb4}
  `;
  document.head.appendChild(style);
}

export function wireSidebarCollapse(root: HTMLElement): void {
  const sidebar = root.querySelector<HTMLElement>(".hv-unified-sidebar");
  const toggle = root.querySelector<HTMLElement>("[data-sidebar-toggle]");
  if (!sidebar || !toggle) return;
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.toggle("is-collapsed");
    try { localStorage.setItem("hv-sidebar-collapsed", sidebar.classList.contains("is-collapsed") ? "true" : "false"); } catch {}
  });
  try { if (localStorage.getItem("hv-sidebar-collapsed") === "true") sidebar.classList.add("is-collapsed"); } catch {}
  try { initializeSidebars(); } catch {}
}
