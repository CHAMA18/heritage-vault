export type SidebarView = "vault" | "family-map" | "story-mode" | "atlas";

export interface SidebarOptions {
  onNavigate?: (view: SidebarView) => void;
}

const supportedViews = new Set<SidebarView>(["vault", "family-map", "story-mode", "atlas"]);

export function initializeSidebars(options: SidebarOptions = {}): void {
  document.querySelectorAll<HTMLElement>("[data-sidebar]").forEach((sidebar) => {
    sidebar.setAttribute("aria-label", "HeritageAtlas navigation");

    sidebar.querySelectorAll<HTMLAnchorElement>("[data-dashboard-view]").forEach((link) => {
      const view = link.dataset.dashboardView as SidebarView | undefined;
      if (!view || !supportedViews.has(view)) return;

      link.addEventListener("click", (event) => {
        event.preventDefault();
        options.onNavigate?.(view);
      });
    });
  });
}
