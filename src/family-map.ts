/**
 * HeritageAtlas — World-class Family Map (cinematic constellation)
 *
 * Replaces the old static tree with a living, interactive constellation
 * built from the demo dataset. Family members are nodes positioned in
 * generational layers, connected by parent-child edges, with hover
 * cinema, click-to-inspect, and an ambient aurora backdrop.
 */
import { demoAtlasDataset } from "./demo-data";
import { renderSidebar, injectSidebarCSS, wireSidebarCollapse } from "./shared-sidebar";

const esc = (s: string | number | null | undefined): string => {
  if (s === null || s === undefined) return "";
  const el = document.createElement("span");
  el.textContent = String(s);
  return el.innerHTML;
};

export function initFamilyMap(root: HTMLElement): void {
  const members = demoAtlasDataset.members;
  const edges = members
    .filter((m) => m.parentId)
    .map((m) => ({ from: m.parentId!, to: m.id }));

  // Group members by generation (depth from root)
  const childToParent = new Map<string, string>();
  members.forEach((m) => { if (m.parentId) childToParent.set(m.id, m.parentId); });
  const getDepth = (id: string): number => {
    let depth = 0;
    let current = id;
    while (childToParent.has(current)) {
      current = childToParent.get(current)!;
      depth++;
      if (depth > 20) break; // safety
    }
    return depth;
  };
  const byDepth = new Map<number, typeof members>();
  members.forEach((m) => {
    const d = getDepth(m.id);
    if (!byDepth.has(d)) byDepth.set(d, []);
    byDepth.get(d)!.push(m);
  });
  const generations = [...byDepth.keys()].sort((a, b) => a - b);

  // Count memories per member
  const memCount = new Map<string, number>();
  demoAtlasDataset.memories.forEach((m) => {
    m.familyMemberIds?.forEach((id) => {
      memCount.set(id, (memCount.get(id) ?? 0) + 1);
    });
  });

  injectSidebarCSS();
  root.innerHTML = `
    <div class="hv-fm-backdrop" aria-hidden="true">
      <div class="hv-fm-aurora"></div>
    </div>
    <div class="hv-fm-grain" aria-hidden="true"></div>

    ${renderSidebar({ activeView: "family-map" })}

    <main class="hv-fm-main">
      <header class="hv-fm-topbar">
        <div>
          <p class="hv-fm-topbar__eyebrow">Your lineage, connected</p>
          <h2 class="hv-fm-topbar__title">Family <em>Map.</em></h2>
        </div>
        <div class="hv-fm-topbar__actions">
          <button class="hv-fm-topbar__btn" type="button" data-add-relative>
            <span class="material-symbols-outlined">person_add</span>
            Add relative
          </button>
          <button class="hv-fm-topbar__btn hv-fm-topbar__btn--primary" type="button" data-invite-family>
            <span class="material-symbols-outlined">group_add</span>
            Invite family
          </button>
        </div>
      </header>

      <section class="hv-fm-canvas" data-fm-canvas>
        <svg class="hv-fm-edges" data-fm-edges viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          ${edges.map((e) => {
            // Find positions by generation
            const fromDepth = getDepth(e.from);
            const toDepth = getDepth(e.to);
            const fromGen = byDepth.get(fromDepth) ?? [];
            const toGen = byDepth.get(toDepth) ?? [];
            const fromIdx = fromGen.findIndex((m) => m.id === e.from);
            const toIdx = toGen.findIndex((m) => m.id === e.to);
            const fromX = ((fromIdx + 1) / (fromGen.length + 1)) * 100;
            const fromY = ((fromDepth + 0.5) / generations.length) * 100;
            const toX = ((toIdx + 1) / (toGen.length + 1)) * 100;
            const toY = ((toDepth + 0.5) / generations.length) * 100;
            const midY = (fromY + toY) / 2;
            return `<path d="M ${fromX} ${fromY} C ${fromX} ${midY}, ${toX} ${midY}, ${toX} ${toY}" fill="none" stroke="rgba(45,58,46,0.2)" stroke-width="0.3" stroke-dasharray="0.8 0.8" />`;
          }).join("")}
        </svg>

        <div class="hv-fm-generations">
          ${generations.map((gen, genIdx) => {
            const genMembers = byDepth.get(gen) ?? [];
            return `
              <div class="hv-fm-generation" style="--gen-delay: ${genIdx * 100}ms">
                <p class="hv-fm-generation__label">Generation ${gen + 1}</p>
                <div class="hv-fm-generation__row">
                  ${genMembers.map((m, i) => {
                    const count = memCount.get(m.id) ?? 0;
                    const isRoot = gen === 0;
                    const birthYear = m.birthYear ?? "?";
                    const deathYear = m.deathYear ?? "present";
                    return `
                      <button class="hv-fm-node${isRoot ? " hv-fm-node--root" : ""}" data-fm-node data-member-id="${esc(m.id)}" style="--node-delay: ${(genIdx * 100) + (i * 40)}ms">
                        <span class="hv-fm-node__dot">
                          <span class="material-symbols-outlined">person</span>
                        </span>
                        <span class="hv-fm-node__body">
                          <span class="hv-fm-node__name">${esc(m.fullName)}</span>
                          <span class="hv-fm-node__meta">${esc(m.relationship ?? "Family")}</span>
                          <span class="hv-fm-node__years">${birthYear}–${deathYear}</span>
                          ${count > 0 ? `<span class="hv-fm-node__count">${count} ${count === 1 ? "memory" : "memories"}</span>` : ""}
                        </span>
                      </button>
                    `;
                  }).join("")}
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <aside class="hv-fm-inspector" data-fm-inspector>
          <div class="hv-fm-inspector__empty">
            <span class="material-symbols-outlined">touch_app</span>
            <p>Select a person to inspect their connections and memories.</p>
          </div>
        </aside>
      </section>
    </main>
  `;

  wireSidebarCollapse(root);

  // Wire node clicks → inspector
  const inspector = root.querySelector<HTMLElement>("[data-fm-inspector]");
  root.querySelectorAll<HTMLElement>("[data-fm-node]").forEach((node) => {
    node.addEventListener("click", () => {
      const memberId = node.dataset.memberId ?? "";
      const member = members.find((m) => m.id === memberId);
      if (!member || !inspector) return;

      // Highlight selected
      root.querySelectorAll<HTMLElement>("[data-fm-node]").forEach((n) => n.classList.remove("is-selected"));
      node.classList.add("is-selected");

      const count = memCount.get(memberId) ?? 0;
      const parent = members.find((m) => m.id === member.parentId);
      const children = members.filter((m) => m.parentId === memberId);
      const relatedMemories = demoAtlasDataset.memories.filter((m) => m.familyMemberIds?.includes(memberId));

      inspector.innerHTML = `
        <div class="hv-fm-inspector__card">
          <div class="hv-fm-inspector__top">
            <span class="hv-fm-inspector__avatar">
              <span class="material-symbols-outlined">person</span>
            </span>
            <div>
              <h3 class="hv-fm-inspector__name">${esc(member.fullName)}</h3>
              <p class="hv-fm-inspector__role">${esc(member.relationship ?? "Family member")}</p>
            </div>
          </div>
          ${member.notes ? `<p class="hv-fm-inspector__notes">${esc(member.notes)}</p>` : ""}
          <div class="hv-fm-inspector__meta">
            <div><b>${member.birthYear ?? "?"}</b><small>Born</small></div>
            <div><b>${member.deathYear ?? "—"}</b><small>Died</small></div>
            <div><b>${count}</b><small>Memories</small></div>
          </div>
          ${parent ? `
            <div class="hv-fm-inspector__section">
              <p class="hv-fm-inspector__section-label">Parent</p>
              <button class="hv-fm-inspector__link" data-fm-node data-member-id="${esc(parent.id)}">
                <span class="material-symbols-outlined">arrow_upward</span>
                ${esc(parent.fullName)}
              </button>
            </div>
          ` : ""}
          ${children.length ? `
            <div class="hv-fm-inspector__section">
              <p class="hv-fm-inspector__section-label">Children (${children.length})</p>
              ${children.map((c) => `
                <button class="hv-fm-inspector__link" data-fm-node data-member-id="${esc(c.id)}">
                  <span class="material-symbols-outlined">arrow_downward</span>
                  ${esc(c.fullName)}
                </button>
              `).join("")}
            </div>
          ` : ""}
          ${relatedMemories.length ? `
            <div class="hv-fm-inspector__section">
              <p class="hv-fm-inspector__section-label">Memories (${relatedMemories.length})</p>
              ${relatedMemories.slice(0, 5).map((m) => `
                <div class="hv-fm-inspector__memory">
                  <span class="material-symbols-outlined">${m.type === "photo" ? "photo_camera" : m.type === "audio" ? "graphic_eq" : m.type === "video" ? "videocam" : "description"}</span>
                  <div>
                    <b>${esc(m.title)}</b>
                    <small>${esc(m.year ?? "")} · ${esc(m.location ?? "")}</small>
                  </div>
                </div>
              `).join("")}
            </div>
          ` : ""}
        </div>
      `;

      // Wire inspector link clicks
      inspector.querySelectorAll<HTMLElement>("[data-fm-node]").forEach((link) => {
        link.addEventListener("click", () => {
          const targetNode = root.querySelector<HTMLElement>(`[data-fm-node][data-member-id="${link.dataset.memberId}"]`);
          targetNode?.click();
        });
      });
    });
  });
}
