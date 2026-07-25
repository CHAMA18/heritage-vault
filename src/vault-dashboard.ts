/**
 * HeritageAtlas — World-class Vault Dashboard driver
 *
 * Populates the Vault screen with a cinematic, bento-style dashboard built
 * from the demo dataset. The old 4-card + 3-memory grid is replaced with:
 *
 *   - Cinematic hero with editorial headline + CTA
 *   - Asymmetric metric bento (KPIs + sparkline + inverted accent card)
 *   - Memory gallery with hover cinema (sepia images, gradient overlays)
 *   - Story rail (clickable, hands off to Story Mode)
 *   - Activity timeline (inverted forest card with amber dots)
 *   - Aurora backdrop + grain + scroll reveals
 *
 * Vanilla JS. No deps. Reduced-motion aware.
 */
import { demoAtlasDataset } from "./demo-data";
import { renderSidebar, injectSidebarCSS, wireSidebarCollapse } from "./shared-sidebar";

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

function buildActivity(): ActivityItem[] {
  // Synthesise a recent-activity feed from the newest memories + stories
  const mems = [...demoAtlasDataset.memories]
    .filter((m) => m.year)
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
    .slice(0, 3);
  const items: ActivityItem[] = mems.map((m, i) => ({
    when: i === 0 ? "Today" : i === 1 ? "Yesterday" : "This week",
    what: `Memory preserved: "${m.title}"${m.location ? ` · ${m.location}` : ""}`,
  }));
  items.push({
    when: "This week",
    what: `${demoAtlasDataset.stories.length} stories compiled from the archive.`,
  });
  items.push({
    when: "Earlier",
    what: `${demoAtlasDataset.members.length} family members connected across the constellation.`,
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

function memoryYearCounts(): number[] {
  const counts = new Map<number, number>();
  demoAtlasDataset.memories.forEach((m) => {
    if (m.year) counts.set(m.year, (counts.get(m.year) ?? 0) + 1);
  });
  return [...counts.entries()].sort((a, b) => a[0] - b[0]).map(([, c]) => c);
}

export function initVaultDashboard(root: HTMLElement): void {
  const ds = demoAtlasDataset;
  const memories = ds.memories;
  const members = ds.members;
  const stories = ds.stories;

  const years = memories
    .map((m) => m.year)
    .filter((y): y is number => y !== null)
    .sort((a, b) => a - b);
  const yearSpan = years.length ? `${years[0]}–${years[years.length - 1]}` : "—";
  const recentMemories = [...memories]
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
    .slice(0, 2);
  const activity = buildActivity();
  const spark = memoryYearCounts();

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

    <header class="hv-vd-topbar">
      <div>
        <p class="hv-vd-topbar__date">${esc(dateStr)}</p>
        <h2 class="hv-vd-topbar__greeting">Good morning, <em>Amara.</em></h2>
      </div>
      <div class="hv-vd-topbar__actions">
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
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_up</span> +3 this week</span>
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
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_up</span> +1 new</span>
        </div>
        <p class="hv-vd-metric__value"><em>${stories.length}</em></p>
        <p class="hv-vd-metric__label">Stories ready to read</p>
        <p class="hv-vd-metric__sub">Curated from ${memories.length} source memories</p>
      </article>

      <article class="hv-vd-metric hv-vd-metric--span4" data-vd-users-card>
        <div class="hv-vd-metric__top">
          <span class="hv-vd-metric__icon"><span class="material-symbols-outlined">person_add</span></span>
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_up</span> live</span>
        </div>
        <p class="hv-vd-metric__value" data-vd-users-count>—</p>
        <p class="hv-vd-metric__label">Users registered</p>
        <p class="hv-vd-metric__sub">Stored in ClickHouse · heritage_atlas_users</p>
      </article>

      <article class="hv-vd-metric hv-vd-metric--span8 hv-vd-metric--accent">
        <div class="hv-vd-metric__top">
          <span class="hv-vd-metric__icon"><span class="material-symbols-outlined">timeline</span></span>
          <span class="hv-vd-metric__trend"><span class="material-symbols-outlined" style="font-size:14px">trending_up</span> ${yearSpan}</span>
        </div>
        <p class="hv-vd-metric__value">${years.length} <em>years</em> of one family</p>
        <p class="hv-vd-metric__label">From ${years[0]} to ${years[years.length - 1]} · ${years[years.length - 1] - years[0]} years of memory</p>
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
    el.addEventListener("click", open);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
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

  // New memory buttons
  root.querySelectorAll<HTMLElement>("[data-vd-new-memory], [data-vd-new-memory-btn]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      // Open the family-map view (where new memories/relatives are added)
      navigateTo("family-map");
    });
  });

  wireSidebarCollapse(root);

  // Reveal hero immediately
  requestAnimationFrame(() => {
    root.querySelectorAll<HTMLElement>("[data-vd-reveal]").forEach((el) => el.classList.add("is-revealed"));
  });

  // Fetch the live user count from ClickHouse (via the /api/users endpoint)
  fetchUsersCount(root);
}

async function fetchUsersCount(root: HTMLElement) {
  try {
    const res = await fetch("/api/users");
    if (!res.ok) return;
    const data = await res.json();
    const count = data.count ?? 0;
    const countEl = root.querySelector<HTMLElement>("[data-vd-users-count]");
    if (countEl) {
      countEl.textContent = String(count);
      countEl.innerHTML = count > 0 ? `${count}` : `<em>0</em>`;
    }
  } catch {
    // ClickHouse may be unreachable — leave the dash
  }
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
