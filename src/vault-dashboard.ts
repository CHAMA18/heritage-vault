/**
 * HeritageAtlas — World-class Vault Dashboard driver
 *
 * Populates the Vault screen with a cinematic, bento-style dashboard built
 * from the live archive store. The dashboard:
 *   - Reads its snapshot from `archiveStore` (localStorage-backed CRUD store)
 *   - Re-renders automatically whenever the store changes
 *   - Wires the "Add memory" tile to open a real create-memory modal
 *   - Shows hover Edit + Delete buttons on every memory card
 *   - Renders the activity timeline from real user actions
 *
 * Vanilla JS. No deps. Reduced-motion aware.
 */
import { archiveStore, onArchiveChange, type ArchiveSnapshot, type AtlasMemory } from "./services/archive-store";
import { renderSidebar, injectSidebarCSS, wireSidebarCollapse } from "./shared-sidebar";
import { openCrudModal } from "./components/crud-modal";
import { toast } from "./components/toast";

const esc = (s: string | number | null | undefined): string => {
  if (s === null || s === undefined) return "";
  const el = document.createElement("span");
  el.textContent = String(s);
  return el.innerHTML;
};

const ICON_FOR_TYPE: Record<string, string> = {
  letter: "mail",
  photo: "photo_camera",
  audio: "graphic_eq",
  video: "videocam",
  document: "description",
};

interface ActivityItem {
  when: string;
  what: string;
}

function relativeTime(ts: number): string {
  const diff = Date.now() - ts;
  const min = Math.floor(diff / 60000);
  if (min < 1) return "Just now";
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const day = Math.floor(hr / 24);
  if (day < 7) return `${day}d ago`;
  return new Date(ts).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function buildActivity(snapshot: ArchiveSnapshot): ActivityItem[] {
  // Use the real activity log from the store. If empty (fresh seed),
  // synthesise a friendly welcome from the demo data.
  const acts = snapshot.activities;
  if (acts.length > 0) {
    return acts.slice(0, 6).map((a) => ({
      when: relativeTime(a.createdAt),
      what: a.message,
    }));
  }
  const mems = [...snapshot.memories]
    .filter((m) => m.year)
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
    .slice(0, 3);
  const items: ActivityItem[] = mems.map((m) => ({
    when: "Earlier",
    what: `Memory preserved: "${m.title}"${m.location ? ` · ${m.location}` : ""}`,
  }));
  items.push({
    when: "Earlier",
    what: `${snapshot.stories.length} stories compiled from the archive.`,
  });
  items.push({
    when: "Earlier",
    what: `${snapshot.members.length} family members connected across the constellation.`,
  });
  return items;
}

function buildSparkline(values: number[]): string {
  if (values.length < 2) return "";
  const max = Math.max(...values, 1);
  const W = 100;
  const H = 36;
  const step = W / (values.length - 1);
  const points = values.map((v, i) => `${i * step},${H - (v / max) * (H - 4) - 2}`).join(" ");
  return `
    <svg class="hv-vd-spark" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true">
      <polyline points="${points}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7" />
    </svg>
  `;
}

function memoryYearCounts(snapshot: ArchiveSnapshot): number[] {
  const counts = new Map<number, number>();
  snapshot.memories.forEach((m) => {
    if (m.year) counts.set(m.year, (counts.get(m.year) ?? 0) + 1);
  });
  return [...counts.entries()].sort((a, b) => a[0] - b[0]).map(([, c]) => c);
}

const MEMORY_TYPE_OPTIONS = [
  { value: "photo", label: "Photograph" },
  { value: "letter", label: "Letter" },
  { value: "audio", label: "Audio recording" },
  { value: "video", label: "Video" },
  { value: "document", label: "Document" },
];

/** Open the create-memory modal. */
async function openCreateMemoryModal(): Promise<void> {
  const snapshot = archiveStore.getSnapshot();
  const memberOptions = snapshot.members.map((m) => ({
    value: m.id,
    label: m.fullName,
  }));
  const values = await openCrudModal({
    title: "Add a new memory",
    subtitle: "Bring another piece of your family story into the light.",
    submitLabel: "Add memory",
    fields: [
      { name: "title", label: "Title", type: "text", required: true, placeholder: "The blue trunk opens again" },
      { name: "type", label: "Type", type: "select", required: true, options: MEMORY_TYPE_OPTIONS, value: "photo" },
      { name: "year", label: "Year", type: "number", placeholder: "2026", min: 1800, max: 2100 },
      { name: "dateLabel", label: "Date label", type: "text", placeholder: "April 2026" },
      { name: "location", label: "Location", type: "text", placeholder: "Lusaka, Zambia" },
      { name: "description", label: "Description", type: "textarea", placeholder: "What makes this memory worth keeping?" },
      { name: "familyMemberIds", label: "Family members in this memory", type: "multiselect", options: memberOptions },
      { name: "tags", label: "Tags", type: "tags", placeholder: "Press Enter to add" },
    ],
  });
  if (!values) return;
  const memory = archiveStore.createMemory({
    title: String(values.title ?? ""),
    description: String(values.description ?? ""),
    type: String(values.type ?? "document") as AtlasMemory["type"],
    assetUrl: "",
    thumbnailUrl: null,
    year: typeof values.year === "number" ? values.year : null,
    dateLabel: values.dateLabel ? String(values.dateLabel) : null,
    location: values.location ? String(values.location) : null,
    familyMemberIds: Array.isArray(values.familyMemberIds) ? values.familyMemberIds.map(String) : [],
    tags: Array.isArray(values.tags) ? values.tags.map(String) : [],
    archived: false,
    createdBy: "you",
  });
  toast.success("Memory added", `“${memory.title}” is now in the vault.`);
}

/** Open the edit-memory modal. */
async function openEditMemoryModal(id: string): Promise<void> {
  const memory = archiveStore.getMemory(id);
  if (!memory) {
    toast.error("Memory not found", "It may have been removed.");
    return;
  }
  const snapshot = archiveStore.getSnapshot();
  const memberOptions = snapshot.members.map((m) => ({
    value: m.id,
    label: m.fullName,
  }));
  const values = await openCrudModal({
    title: "Edit memory",
    subtitle: `Updating “${memory.title}”`,
    submitLabel: "Save changes",
    fields: [
      { name: "title", label: "Title", type: "text", required: true, value: memory.title },
      { name: "type", label: "Type", type: "select", required: true, options: MEMORY_TYPE_OPTIONS, value: memory.type },
      { name: "year", label: "Year", type: "number", value: memory.year ?? undefined, min: 1800, max: 2100 },
      { name: "dateLabel", label: "Date label", type: "text", value: memory.dateLabel ?? "" },
      { name: "location", label: "Location", type: "text", value: memory.location ?? "" },
      { name: "description", label: "Description", type: "textarea", value: memory.description },
      { name: "familyMemberIds", label: "Family members", type: "multiselect", options: memberOptions, value: memory.familyMemberIds },
      { name: "tags", label: "Tags", type: "tags", value: memory.tags },
    ],
  });
  if (!values) return;
  const updated = archiveStore.updateMemory(id, {
    title: String(values.title ?? memory.title),
    description: String(values.description ?? memory.description),
    type: String(values.type ?? memory.type) as AtlasMemory["type"],
    year: typeof values.year === "number" ? values.year : null,
    dateLabel: values.dateLabel ? String(values.dateLabel) : null,
    location: values.location ? String(values.location) : null,
    familyMemberIds: Array.isArray(values.familyMemberIds) ? values.familyMemberIds.map(String) : memory.familyMemberIds,
    tags: Array.isArray(values.tags) ? values.tags.map(String) : memory.tags,
  });
  if (updated) {
    toast.success("Memory updated", `“${updated.title}” has been saved.`);
  }
}

/** Confirm + delete a memory. */
function deleteMemory(id: string): void {
  const memory = archiveStore.getMemory(id);
  if (!memory) return;
  // Use a toast with an Undo action instead of a destructive confirm dialog.
  toast.info(
    "Memory removed",
    `“${memory.title}” has been deleted from the vault.`,
    {
      duration: 6000,
      actionLabel: "Undo",
      onAction: () => {
        // Re-create with the same data.
        archiveStore.createMemory({
          title: memory.title,
          description: memory.description,
          type: memory.type,
          assetUrl: memory.assetUrl,
          thumbnailUrl: memory.thumbnailUrl,
          year: memory.year,
          dateLabel: memory.dateLabel,
          location: memory.location,
          familyMemberIds: memory.familyMemberIds,
          tags: memory.tags,
          archived: memory.archived,
          createdBy: memory.createdBy,
        });
        toast.success("Memory restored", `“${memory.title}” is back in the vault.`);
      },
    },
  );
  archiveStore.deleteMemory(id);
}

export function initVaultDashboard(root: HTMLElement): void {
  // Render once + subscribe to store changes for live CRUD updates.
  renderDashboard(root);
  const unsubscribe = onArchiveChange(() => {
    // Only re-render if the vault screen is currently visible.
    if (root.offsetParent !== null || root.style.display !== "none") {
      renderDashboard(root);
    }
  });
  // Stash unsubscribe on the root so navigation.ts can clean up if needed.
  (root as unknown as { _hvUnsubscribe?: () => void })._hvUnsubscribe = unsubscribe;
}

function renderDashboard(root: HTMLElement): void {
  const snapshot = archiveStore.getSnapshot();
  const memories = snapshot.memories;
  const members = snapshot.members;
  const stories = snapshot.stories;

  const years = memories
    .map((m) => m.year)
    .filter((y): y is number => y !== null)
    .sort((a, b) => a - b);
  const yearSpan = years.length ? `${years[0]}–${years[years.length - 1]}` : "—";
  const recentMemories = [...memories]
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
    .slice(0, 4);
  const activity = buildActivity(snapshot);
  const spark = memoryYearCounts(snapshot);

  // Format today's date
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  injectSidebarCSS();
  root.innerHTML = `
    ${renderSidebar({ activeView: "vault" })}
    <div class="hv-vd-backdrop" aria-hidden="true">
      <div class="hv-vd-aurora"></div>
    </div>
    <div class="hv-vd-grain" aria-hidden="true"></div>

    <section class="hv-vd-main">
    <header class="hv-vd-topbar">
      <div>
        <p class="hv-vd-topbar__date">${esc(dateStr)}</p>
        <h2 class="hv-vd-topbar__greeting">Good morning, <em>Amara.</em></h2>
      </div>
      <div class="hv-vd-topbar__actions">
        <button class="hv-vd-topbar__icon-btn" type="button" aria-label="Add memory" data-vd-new-memory-btn title="Add memory">
          <span class="material-symbols-outlined" style="font-size:20px">add</span>
        </button>
        <button class="hv-vd-topbar__icon-btn" type="button" aria-label="Notifications">
          <span class="material-symbols-outlined" style="font-size:20px">notifications</span>
        </button>
        <button class="hv-vd-topbar__icon-btn" type="button" aria-label="Search" data-archive-search>
          <span class="material-symbols-outlined" style="font-size:20px">search</span>
        </button>
        <div class="hv-vd-avatar">AK</div>
      </div>
    </header>

    <section class="hv-vd-hero" data-vd-reveal>
      <div class="hv-vd-hero__inner">
        <div>
          <p class="hv-vd-hero__eyebrow">Your private archive</p>
          <h1 class="hv-vd-hero__title">The <em>Vault.</em></h1>
          <p class="hv-vd-hero__lede">
            A living collection of the people, places, and moments that make
            your family yours. ${memories.length} memories, ${members.length} people,
            and ${stories.length} stories — preserved across ${yearSpan}.
          </p>
        </div>
        <button class="hv-vd-hero__cta" type="button" data-vd-atlas>
          <span class="material-symbols-outlined">auto_awesome</span>
          Explore Atlas
        </button>
      </div>
    </section>

    <div class="hv-vd-bento" data-vd-stagger>
      <article class="hv-vd-metric hv-vd-metric--span4">
        <div class="hv-vd-metric__top">
          <span class="hv-vd-metric__icon"><span class="material-symbols-outlined">photo_library</span></span>
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_up</span> live</span>
        </div>
        <p class="hv-vd-metric__value">${memories.length}</p>
        <p class="hv-vd-metric__label">Memories preserved</p>
        <p class="hv-vd-metric__sub">Across ${new Set(memories.map((m) => m.location).filter(Boolean)).size} places</p>
        ${buildSparkline(spark)}
      </article>

      <article class="hv-vd-metric hv-vd-metric--span4">
        <div class="hv-vd-metric__top">
          <span class="hv-vd-metric__icon"><span class="material-symbols-outlined">groups</span></span>
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_flat</span> stable</span>
        </div>
        <p class="hv-vd-metric__value">${members.length}</p>
        <p class="hv-vd-metric__label">Family members</p>
        <p class="hv-vd-metric__sub">${new Set(members.filter((m) => m.parentId).map((m) => m.parentId)).size + 1} generations connected</p>
      </article>

      <article class="hv-vd-metric hv-vd-metric--span4 hv-vd-metric--inverted">
        <div class="hv-vd-metric__top">
          <span class="hv-vd-metric__icon"><span class="material-symbols-outlined">auto_stories</span></span>
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_up</span> live</span>
        </div>
        <p class="hv-vd-metric__value"><em>${stories.length}</em></p>
        <p class="hv-vd-metric__label">Stories ready to read</p>
        <p class="hv-vd-metric__sub">Curated from ${memories.length} source memories</p>
      </article>

      <article class="hv-vd-metric hv-vd-metric--span4">
        <div class="hv-vd-metric__top">
          <span class="hv-vd-metric__icon"><span class="material-symbols-outlined">auto_stories</span></span>
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_flat</span> stable</span>
        </div>
        <p class="hv-vd-metric__value"><em>${new Set(years.map((y) => Math.floor(y / 10) * 10)).size}</em></p>
        <p class="hv-vd-metric__label">Decades preserved</p>
        <p class="hv-vd-metric__sub">From ${years[0] ?? "—"} to ${years[years.length - 1] ?? "—"}</p>
      </article>

      <article class="hv-vd-metric hv-vd-metric--span8 hv-vd-metric--accent">
        <div class="hv-vd-metric__top">
          <span class="hv-vd-metric__icon"><span class="material-symbols-outlined">timeline</span></span>
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_up</span> ${yearSpan}</span>
        </div>
        <p class="hv-vd-metric__value">${years.length} <em>years</em> of one family</p>
        <p class="hv-vd-metric__label">${years.length ? `From ${years[0]} to ${years[years.length - 1]} · ${years[years.length - 1] - years[0]} years of memory` : "Add a memory to start the timeline"}</p>
        <p class="hv-vd-metric__sub">The archive reaches from Samuel's first postcard to Miles's hand-drawn atlas — every decade is preserved.</p>
      </article>
    </div>

    <div class="hv-vd-section-head" data-vd-reveal>
      <div class="hv-vd-section-head__left">
        <p class="hv-vd-section-head__eyebrow">The newest pieces</p>
        <h3 class="hv-vd-section-head__title">Recent <em>memories.</em></h3>
      </div>
      <a class="hv-vd-section-head__link" data-vd-view="story-mode" role="button" tabindex="0">
        View all
        <span class="material-symbols-outlined" style="font-size:16px">arrow_forward</span>
      </a>
    </div>

    <div class="hv-vd-gallery" data-vd-stagger>
      ${recentMemories
        .map((m) => {
          const img =
            m.thumbnailUrl ||
            m.assetUrl ||
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBw1w7ZGV-Mn7TPkS2VI8cmZq03Sw9CGO9cYtQzKEjMEMQAMVGaJW3YlObPIDsGD6sgTlWQMhOwczomm_hQtsxBSG0bMHICQ1PEgCN1hNsA2coITZaO1tI8T_rIdi0CQjv4mGBDGnkdGZ4kfwSBMATeJNVtvsNHHIpaIyMlnjPFMu35PpeZiHun3U9KvACNIHwi4CO5DRuKQRlyACmIbTOyv7qngi08VdNlyu9at02lclaSacS7KvpwICz2xw2xlXQrAkLM_lrcyUM";
          return `
            <article class="hv-vd-memory" data-vd-memory data-memory-id="${esc(m.id)}" role="button" tabindex="0">
              <div class="hv-vd-memory__media">
                <img class="hv-vd-memory__img" src="${esc(img)}" alt="${esc(m.title)}" loading="lazy" />
                <div class="hv-vd-memory__overlay"></div>
                <span class="hv-vd-memory__year">${esc(m.year)}</span>
                <div class="hv-vd-memory__crud">
                  <button type="button" class="hv-vd-memory__crud-btn" data-vd-edit-memory="${esc(m.id)}" aria-label="Edit memory" title="Edit">
                    <span class="material-symbols-outlined" style="font-size:16px">edit</span>
                  </button>
                  <button type="button" class="hv-vd-memory__crud-btn hv-vd-memory__crud-btn--danger" data-vd-delete-memory="${esc(m.id)}" aria-label="Delete memory" title="Delete">
                    <span class="material-symbols-outlined" style="font-size:16px">delete</span>
                  </button>
                </div>
              </div>
              <div class="hv-vd-memory__body">
                <span class="hv-vd-memory__tag">
                  <span class="material-symbols-outlined" style="font-size:12px">${ICON_FOR_TYPE[m.type] ?? "description"}</span>
                  ${esc(m.type)}
                </span>
                <h4 class="hv-vd-memory__title">${esc(m.title)}</h4>
                <p class="hv-vd-memory__desc">${esc(m.description)}</p>
                <div class="hv-vd-memory__footer">
                  <span><span class="material-symbols-outlined" style="vertical-align:middle">location_on</span> ${esc(m.location ?? "Undated")}</span>
                  <span>${esc(m.dateLabel ?? "")}</span>
                </div>
              </div>
            </article>
          `;
        })
        .join("")}
      <article class="hv-vd-memory hv-vd-memory--add" data-vd-new-memory>
        <div>
          <div class="hv-vd-add__icon"><span class="material-symbols-outlined" style="font-size:28px">add_photo_alternate</span></div>
          <h4>Add a new memory</h4>
          <p>Bring another piece of your family story into the light.</p>
          <button type="button" data-vd-new-memory-btn>
            <span class="material-symbols-outlined" style="font-size:16px">upload</span>
            Upload memory
          </button>
        </div>
      </article>
    </div>

    <div class="hv-vd-bottom">
      <section class="hv-vd-stories" data-vd-reveal>
        <div class="hv-vd-stories__head">
          <h3 class="hv-vd-stories__title">Story <em>chapters.</em></h3>
          <a class="hv-vd-section-head__link" data-vd-view="story-mode" role="button" tabindex="0">
            Open Story Mode
            <span class="material-symbols-outlined" style="font-size:16px">arrow_forward</span>
          </a>
        </div>
        ${stories
          .map(
            (s, i) => `
            <div class="hv-vd-story-item" data-vd-story data-story-id="${esc(s.id)}" role="button" tabindex="0">
              <span class="hv-vd-story-item__num">${String(i + 1).padStart(2, "0")}</span>
              <div class="hv-vd-story-item__body">
                <p class="hv-vd-story-item__title">${esc(s.title)}</p>
                <p class="hv-vd-story-item__excerpt">${esc(s.excerpt)}</p>
              </div>
              <span class="material-symbols-outlined hv-vd-story-item__arrow">arrow_forward</span>
            </div>
          `
          )
          .join("")}
      </section>

      <section class="hv-vd-activity" data-vd-reveal>
        <h3 class="hv-vd-activity__title">Recent <em>activity.</em></h3>
        <ul class="hv-vd-activity__list">
          ${activity
            .map(
              (a) => `
              <li class="hv-vd-activity__item">
                <p class="hv-vd-activity__when">${esc(a.when)}</p>
                <p class="hv-vd-activity__what">${esc(a.what)}</p>
              </li>
            `
            )
            .join("")}
        </ul>
      </section>
    </div>
  `;

  // ── Wire interactions ────────────────────────────────────────────────

  // Reveal-on-scroll
  setupReveals(root);

  // Explore Atlas → go to atlas view
  root.querySelector<HTMLButtonElement>("[data-vd-atlas]")?.addEventListener("click", () => {
    navigateTo("atlas");
  });

  // View-all / Story Mode links
  root.querySelectorAll<HTMLElement>("[data-vd-view]").forEach((el) => {
    el.addEventListener("click", () => navigateTo(el.dataset.vdView ?? "story-mode"));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        navigateTo(el.dataset.vdView ?? "story-mode");
      }
    });
  });

  // Memory cards → cinematic detail modal; users can hand off to Agent from there.
  root.querySelectorAll<HTMLElement>("[data-vd-memory]").forEach((el) => {
    const open = () => document.dispatchEvent(new CustomEvent("heritage:memory-detail", { detail: { id: el.dataset.memoryId } }));
    el.addEventListener("click", (e) => {
      // Don't open detail when clicking the Edit/Delete buttons.
      const target = e.target as HTMLElement;
      if (target.closest("[data-vd-edit-memory]") || target.closest("[data-vd-delete-memory]")) return;
      open();
    });
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });

  // Edit memory buttons (hover-revealed)
  root.querySelectorAll<HTMLElement>("[data-vd-edit-memory]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = el.dataset.vdEditMemory;
      if (id) void openEditMemoryModal(id);
    });
  });

  // Delete memory buttons (hover-revealed)
  root.querySelectorAll<HTMLElement>("[data-vd-delete-memory]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = el.dataset.vdDeleteMemory;
      if (id) deleteMemory(id);
    });
  });

  // Story items → open Story Mode
  root.querySelectorAll<HTMLElement>("[data-vd-story]").forEach((el) => {
    el.addEventListener("click", () => navigateTo("story-mode"));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        navigateTo("story-mode");
      }
    });
  });

  // New memory buttons (topbar + add tile + tile body button)
  root.querySelectorAll<HTMLElement>("[data-vd-new-memory], [data-vd-new-memory-btn]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      void openCreateMemoryModal();
    });
  });

  wireSidebarCollapse(root);

  // Reveal hero immediately
  requestAnimationFrame(() => {
    root.querySelectorAll<HTMLElement>("[data-vd-reveal]").forEach((el) => el.classList.add("is-revealed"));
  });

}


function setupReveals(scope: HTMLElement) {
  const targets = scope.querySelectorAll<HTMLElement>("[data-vd-reveal], [data-vd-stagger]");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    targets.forEach((t) => t.classList.add("is-revealed"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
  );
  targets.forEach((t) => io.observe(t));
}

function navigateTo(view: string) {
  const link = document.querySelector<HTMLElement>(`[data-dashboard-view="${view}"]`);
  if (link) link.click();
}
