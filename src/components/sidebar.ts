export type SidebarView = "vault" | "family-map" | "story-mode" | "atlas";

export interface SidebarOptions {
  onNavigate?: (view: SidebarView) => void;
}

const supportedViews = new Set<SidebarView>(["vault", "family-map", "story-mode", "atlas"]);
const collapseStorageKey = "heritageatlas-sidebar-collapsed";

function wrapSidebarText(sidebar: HTMLElement): void {
  const walker = document.createTreeWalker(sidebar, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    if (!parent || !node.textContent?.trim() || parent.closest(".material-symbols-outlined, .sidebar-copy")) continue;
    textNodes.push(node as Text);
  }
  textNodes.forEach((textNode) => {
    const copy = document.createElement("span");
    copy.className = "sidebar-copy";
    copy.textContent = textNode.textContent;
    textNode.replaceWith(copy);
  });
}

export function initializeSidebars(options: SidebarOptions = {}): void {
  const sidebars = [...document.querySelectorAll<HTMLElement>("[data-sidebar]")];
  const setCollapsed = (collapsed: boolean): void => {
    sidebars.forEach((sidebar) => {
      sidebar.classList.toggle("is-collapsed", collapsed);
      const button = sidebar.querySelector<HTMLButtonElement>("[data-sidebar-collapse]");
      button?.setAttribute("aria-expanded", String(!collapsed));
      const icon = button?.querySelector<HTMLElement>(".material-symbols-outlined");
      if (icon) icon.textContent = collapsed ? "menu" : "menu_open";
    });
    localStorage.setItem(collapseStorageKey, collapsed ? "true" : "false");
  };

  sidebars.forEach((sidebar) => {
    sidebar.setAttribute("aria-label", "HeritageAtlas navigation");
    wrapSidebarText(sidebar);
    const collapseButton = document.createElement("button");
    collapseButton.type = "button";
    collapseButton.className = "sidebar-collapse-toggle";
    collapseButton.dataset.sidebarCollapse = "";
    collapseButton.setAttribute("aria-label", "Collapse sidebar");
    collapseButton.innerHTML = '<span class="material-symbols-outlined">menu_open</span><span class="sidebar-copy">Collapse sidebar</span>';
    const brand = sidebar.firstElementChild;
    sidebar.insertBefore(collapseButton, brand?.nextSibling ?? null);
    const mark = document.createElement("img");
    mark.className = "sidebar-collapse-mark";
    mark.src = "/heritageatlas-mark.svg";
    mark.alt = "HeritageAtlas";
    brand?.append(mark);
    collapseButton.addEventListener("click", () => setCollapsed(!sidebar.classList.contains("is-collapsed")));

    sidebar.querySelectorAll<HTMLAnchorElement>("[data-dashboard-view]").forEach((link) => {
      const view = link.dataset.dashboardView as SidebarView | undefined;
      if (!view || !supportedViews.has(view)) return;

      link.addEventListener("click", (event) => {
        event.preventDefault();
        options.onNavigate?.(view);
      });
    });
  });
  setCollapsed(localStorage.getItem(collapseStorageKey) === "true");
}
