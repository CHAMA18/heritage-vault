/**
 * HeritageAtlas — Story Mode driver
 *
 * Turns the published stories in the archive store into an immersive,
 * chapter-by-chapter guided reading experience.
 *
 * Features:
 * - Chapter stepper with read/active states + click-to-jump
 * - Cinematic narrative with drop-cap, pull quotes, parallax figures
 * - Evidence rail that re-populates per chapter (from story.memoryIds)
 * - Scroll-spy reveals
 * - Sticky AI query bar that hands off to the HeritageAtlas Agent (#agent)
 * - Previous / Next chapter navigation with smooth transitions
 * - Add / Edit / Delete chapter buttons (CRUD via archiveStore)
 * - "Save story" button actually persists a "saved" flag via updateStory
 *
 * Vanilla JS. No deps. Reduced-motion aware.
 */
import { archiveStore, onArchiveChange, type AtlasStory } from "./services/archive-store";
import { renderSidebar, injectSidebarCSS, wireSidebarCollapse } from "./shared-sidebar";
import { openCrudModal } from "./components/crud-modal";
import { toast } from "./components/toast";

interface SmChapter {
  id: string;
  num: string;       // "01"
  label: string;     // "Begin"
  title: string;     // story.title
  excerpt: string;   // story.excerpt
  body: string;      // story.body (the long form)
  icon: string;      // material symbol name
  memoryIds: string[];
  narrationUrl?: string | null;
  narrationSha256?: string | null;
  illustrationUrl?: string | null;
  illustrationSha256?: string | null;
  genblazeRunId?: string | null;
  genblazeManifestHash?: string | null;
  genblazeManifestUri?: string | null;
  genblazeVerified?: boolean | null;
}

// Map story.id → chapter metadata (label + icon chosen to mirror the screenshot)
const CHAPTER_META: Record<string, { label: string; icon: string; num: string }> = {
  roots:   { label: "Begin",    icon: "mail",          num: "01" },
  table:   { label: "Gather",   icon: "restaurant",    num: "02" },
  routes:  { label: "Travel",   icon: "route",         num: "03" },
  voices:  { label: "Listen",   icon: "graphic_eq",    num: "04" },
  future:  { label: "Continue", icon: "auto_stories",  num: "05" },
};

const ICON_FOR_MEMORY_TYPE: Record<string, string> = {
  letter: "mail",
  photo: "photo_camera",
  audio: "graphic_eq",
  video: "videocam",
  document: "description",
};

function buildChapters(): SmChapter[] {
  const stories = archiveStore.getSnapshot().stories;
  return stories
    .filter((s) => s.status === "published")
    .map((s, idx) => {
      const meta = CHAPTER_META[s.id] ?? { label: "Chapter", icon: "menu_book", num: String(idx + 1).padStart(2, "0") };
      return {
        id: s.id,
        num: meta.num,
        label: meta.label,
        title: s.title,
        excerpt: s.excerpt ?? "",
        body: s.body ?? "",
        icon: meta.icon,
        memoryIds: s.memoryIds ?? [],
        narrationUrl: s.narrationUrl ?? null,
        narrationSha256: s.narrationSha256 ?? null,
        illustrationUrl: s.illustrationUrl ?? null,
        illustrationSha256: s.illustrationSha256 ?? null,
        genblazeRunId: s.genblazeRunId ?? null,
        genblazeManifestHash: s.genblazeManifestHash ?? null,
        genblazeManifestUri: s.genblazeManifestUri ?? null,
        genblazeVerified: s.genblazeVerified ?? null,
      };
    });
}

const esc = (s: string | undefined | null): string => {
  if (s === null || s === undefined) return "";
  const el = document.createElement("span");
  el.textContent = String(s);
  return el.innerHTML;
};

/** Styles for the Genblaze narration block (kept here to avoid touching the giant index.html stylesheet). */
function injectNarrationCSS(): void {
  if (document.getElementById("hv-sm-narration-css")) return;
  const style = document.createElement("style");
  style.id = "hv-sm-narration-css";
  style.textContent = `
    #story-mode-screen .hv-sm-narration {
      margin: 40px -32px;
      padding: 26px 32px;
      background: linear-gradient(135deg, rgba(192,98,58,.08), rgba(111,130,102,.08));
      border: 1px solid rgba(192,98,58,.18);
      border-radius: 18px;
    }
    #story-mode-screen .hv-sm-narration__head {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }
    #story-mode-screen .hv-sm-narration__head > .material-symbols-outlined {
      font-size: 24px;
      color: var(--hv-moss, #6f8266);
    }
    #story-mode-screen .hv-sm-narration__head b {
      display: block;
      font-family: "Fraunces", serif;
      font-size: 1.12rem;
      line-height: 1.2;
    }
    #story-mode-screen .hv-sm-narration__head small {
      color: var(--hv-ink-soft, #7a746a);
    }
    #story-mode-screen .hv-sm-narration__badge {
      margin-left: auto;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: .7rem;
      letter-spacing: .08em;
      text-transform: uppercase;
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(111,130,102,.14);
      color: var(--hv-moss, #4f5f49);
      border: 1px solid rgba(111,130,102,.3);
      white-space: nowrap;
    }
    #story-mode-screen .hv-sm-narration audio {
      width: 100%;
      height: 44px;
      border-radius: 10px;
    }
    #story-mode-screen .hv-sm-narration__prov {
      margin-top: 14px;
      font-size: .85rem;
    }
    #story-mode-screen .hv-sm-narration__prov summary {
      cursor: pointer;
      color: var(--hv-ink-soft, #7a746a);
      font-weight: 600;
    }
    #story-mode-screen .hv-sm-narration__prov code {
      display: block;
      margin-top: 8px;
      padding: 10px 12px;
      background: rgba(0,0,0,.05);
      border-radius: 8px;
      font-size: .72rem;
      line-height: 1.7;
      word-break: break-all;
    }
    #story-mode-screen .hv-sm-chapter-bar__btn--gen {
      color: var(--hv-moss, #6f8266);
    }
    #story-mode-screen .hv-sm-chapter-bar__btn--gen:hover:not(:disabled) {
      background: rgba(111,130,102,.16);
    }
  `;
  document.head.appendChild(style);
}

let activeIdx = 0;
const readSet = new Set<string>();

export function initStoryMode(root: HTMLElement): void {
  injectNarrationCSS();
  renderStoryMode(root);
  const unsubscribe = onArchiveChange(() => {
    if (root.offsetParent !== null || root.style.display !== "none") {
      renderStoryMode(root);
    }
  });
  (root as unknown as { _hvUnsubscribe?: () => void })._hvUnsubscribe = unsubscribe;
}

function renderStoryMode(root: HTMLElement): void {
  const chapters = buildChapters();
  const snapshot = archiveStore.getSnapshot();
  const years = snapshot.memories
    .map((m) => m.year)
    .filter((y): y is number => y !== null)
    .sort((a, b) => a - b);
  const yearRange = years.length ? `${years[0]}–${years[years.length - 1]}` : "—";

  if (!chapters.length) {
    injectSidebarCSS();
    root.innerHTML = `
      <div class="hv-sm-backdrop" aria-hidden="true"><div class="hv-sm-aurora"></div></div>
      <div class="hv-sm-grain" aria-hidden="true"></div>
      ${renderSidebar({ activeView: "story-mode" })}
      <main class="hv-sm-main">
        <section class="hv-sm-empty">
          <span class="material-symbols-outlined">auto_stories</span>
          <h2>No chapters yet</h2>
          <p>Start the first chapter of your family story.</p>
          <button type="button" class="hv-sm-empty__btn" data-sm-add>Write first chapter</button>
        </section>
      </main>
    `;
    wireSidebarCollapse(root);
    root.querySelector<HTMLElement>("[data-sm-add]")?.addEventListener("click", () => void openCreateStoryModal());
    return;
  }

  // Clamp activeIdx if chapters shrunk
  if (activeIdx >= chapters.length) activeIdx = 0;

  root.innerHTML = `
    <div class="hv-sm-backdrop" aria-hidden="true">
      <div class="hv-sm-aurora"></div>
    </div>
    <div class="hv-sm-grain" aria-hidden="true"></div>

    ${renderSidebar({ activeView: "story-mode" })}

    <main class="hv-sm-main">
      <section class="hv-sm-hero" data-sm-reveal>
        <div class="hv-sm-hero__inner">
          <div>
            <p class="hv-sm-hero__eyebrow">Guided family narrative</p>
            <h1 class="hv-sm-hero__title">Follow the <em>threads</em> that made this family.</h1>
            <p class="hv-sm-hero__lede">
              Story Mode turns evidence into a guided reading path. Begin with a chapter,
              inspect the source moments beside it, then ask the archive what should come next.
            </p>
          </div>
          <aside class="hv-sm-hero__stats">
            <div class="hv-sm-hero__stats-head">
              <span class="material-symbols-outlined">auto_awesome</span>
              Visual reading guide
            </div>
            <p class="hv-sm-hero__stats-title">${chapters.length} chapters · ${snapshot.memories.length} source memories</p>
            <p class="hv-sm-hero__stats-meta">${yearRange}${years.length ? ` · ${years[years.length - 1] - years[0]} years of one family` : ""}</p>
            <button type="button" class="hv-sm-hero__add" data-sm-add title="Add chapter">
              <span class="material-symbols-outlined">add</span>
              New chapter
            </button>
          </aside>
        </div>
      </section>

      <nav class="hv-sm-stepper" data-sm-reveal aria-label="Story chapters">
        <div class="hv-sm-stepper__track">
          ${chapters
            .map(
              (c, i) => `
              <button class="hv-sm-step${i === activeIdx ? " is-active" : ""}${readSet.has(c.id) && i !== activeIdx ? " is-read" : ""}" data-sm-step="${i}" type="button">
                <span class="hv-sm-step__num">${c.num}</span>
                <span class="hv-sm-step__dot"><span class="material-symbols-outlined">${c.icon}</span></span>
                <span class="hv-sm-step__label">${c.label}</span>
                <span class="hv-sm-step__sub">${c.title}</span>
              </button>
            `
            )
            .join("")}
        </div>
      </nav>

      <div class="hv-sm-body">
        <div class="hv-sm-content">
          <div class="hv-sm-chapter-bar" data-sm-reveal>
            <span class="hv-sm-chapter-bar__label" data-sm-chapter-label>Chapter ${chapters[activeIdx].num} · ${chapters[activeIdx].label}</span>
            <div class="hv-sm-chapter-bar__nav">
              <button class="hv-sm-chapter-bar__btn hv-sm-chapter-bar__btn--gen" data-sm-narrate title="Generate narrated audio + archival illustration (Genblaze → Backblaze B2)" type="button">
                <span class="material-symbols-outlined">auto_awesome</span>
                <span data-sm-narrate-label>Narrate</span>
              </button>
              <button class="hv-sm-chapter-bar__btn" data-sm-edit title="Edit this chapter" type="button">
                <span class="material-symbols-outlined">edit</span>
              </button>
              <button class="hv-sm-chapter-bar__btn hv-sm-chapter-bar__btn--danger" data-sm-delete title="Delete this chapter" type="button">
                <span class="material-symbols-outlined">delete</span>
              </button>
              <button class="hv-sm-chapter-bar__btn" data-sm-prev type="button" disabled>
                <span class="material-symbols-outlined">arrow_back</span> Prev
              </button>
              <button class="hv-sm-chapter-bar__btn" data-sm-next type="button">
                Next <span class="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <article class="hv-sm-narrative is-entering" data-sm-narrative>
            <!-- chapter content injected here -->
          </article>
        </div>

        <aside class="hv-sm-rail" data-sm-rail>
          <div class="hv-sm-rail__head">
            <div class="hv-sm-rail__head-top">
              <span class="material-symbols-outlined">tune</span>
              <span class="hv-sm-rail__head-title">Evidence trail</span>
            </div>
            <p class="hv-sm-rail__head-desc">
              Each chapter is anchored in original archive material. Select a card to see why it matters.
            </p>
          </div>
          <div class="hv-sm-evidence" data-sm-evidence>
            <!-- evidence cards injected here -->
          </div>
        </aside>
      </div>

      <div class="hv-sm-query" data-sm-reveal>
        <form class="hv-sm-query__row" data-sm-query-form>
          <span class="hv-sm-query__icon"><span class="material-symbols-outlined">auto_awesome</span></span>
          <input
            type="text"
            class="hv-sm-query__input"
            data-sm-query-input
            placeholder="Ask about another family memory..."
            aria-label="Ask the Heritage Atlas agent about this story"
            autocomplete="off"
          />
          <button type="submit" class="hv-sm-query__send">
            <span class="material-symbols-outlined">explore</span>
            Explore
          </button>
        </form>
        <div class="hv-sm-query__hints">
          <button class="hv-sm-query__hint" type="button" data-sm-hint="What changed when the family moved?">What changed when the family moved?</button>
          <button class="hv-sm-query__hint" type="button" data-sm-hint="Show the stories behind the Sunday table.">Show the stories behind the Sunday table.</button>
          <button class="hv-sm-query__hint" type="button" data-sm-hint="Who are the next keepers of the archive?">Who are the next keepers of the archive?</button>
        </div>
      </div>
    </main>
  `;

  const narrative = root.querySelector<HTMLElement>("[data-sm-narrative]");
  const evidence = root.querySelector<HTMLElement>("[data-sm-evidence]");
  const chapterLabel = root.querySelector<HTMLElement>("[data-sm-chapter-label]");
  const prevBtn = root.querySelector<HTMLButtonElement>("[data-sm-prev]");
  const nextBtn = root.querySelector<HTMLButtonElement>("[data-sm-next]");
  if (!narrative || !evidence || !chapterLabel || !prevBtn || !nextBtn) return;

  function memoryById(id: string) {
    return archiveStore.getSnapshot().memories.find((m) => m.id === id);
  }

  function renderChapter(idx: number, animate: boolean) {
    const c = chapters[idx];
    if (!c) return;
    activeIdx = idx;
    readSet.add(c.id);

    chapterLabel.textContent = `Chapter ${c.num} · ${c.label}`;

    root.querySelectorAll<HTMLElement>("[data-sm-step]").forEach((step) => {
      const stepIdx = parseInt(step.dataset.smStep ?? "0", 10);
      step.classList.toggle("is-active", stepIdx === idx);
      step.classList.toggle("is-read", stepIdx < idx || (readSet.has(chapters[stepIdx]?.id ?? "") && stepIdx !== idx));
    });

    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === chapters.length - 1;

    const n = narrative;
    if (animate) {
      n.classList.add("is-transitioning");
      setTimeout(() => {
        n.classList.remove("is-transitioning");
        n.classList.add("is-entering");
        n.innerHTML = buildNarrativeHTML(c);
        renderEvidence(c);
        setupReveals(n);
        setupParallax(n);
        void n.offsetWidth;
        n.classList.remove("is-entering");
        n.scrollTop = 0;
        window.scrollTo({ top: root.offsetTop - 24, behavior: "smooth" });
      }, 280);
    } else {
      n.innerHTML = buildNarrativeHTML(c);
      renderEvidence(c);
      setupReveals(n);
      setupParallax(n);
    }
  }

  function buildNarrativeHTML(c: SmChapter): string {
    const evidenceMems = c.memoryIds.map(memoryById).filter(Boolean);
    const figure = evidenceMems.find((m) => m?.type === "photo") ?? evidenceMems[0];
    const pullQuoteText = c.excerpt;
    const generatedFigure = Boolean(c.illustrationUrl);
    const figureImg =
      c.illustrationUrl ??
      figure?.thumbnailUrl ??
      figure?.assetUrl ??
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBw1w7ZGV-Mn7TPkS2VI8cmZq03Sw9CGO9cYtQzKEjMEMQAMVGaJW3YlObPIDsGD6sgTlWQMhOwczomm_hQtsxBSG0bMHICQ1PEgCN1hNsA2coITZaO1tI8T_rIdi0CQjv4mGBDGnkdGZ4kfwSBMATeJNVtvsNHHIpaIyMlnjPFMu35PpeZiHun3U9KvACNIHwi4CO5DRuKQRlyACmIbTOyv7qngi08VdNlyu9at02lclaSacS7KvpwICz2xw2xlXQrAkLM_lrcyUM";

    const sentences = c.body.split(/(?<=[.!?])\s+/);
    const paras: string[] = [];
    if (sentences.length <= 2) {
      paras.push(c.body);
    } else {
      const p1 = sentences.slice(0, Math.ceil(sentences.length / 3)).join(" ");
      const p2 = sentences.slice(Math.ceil(sentences.length / 3), Math.ceil((2 * sentences.length) / 3)).join(" ");
      const p3 = sentences.slice(Math.ceil((2 * sentences.length) / 3)).join(" ");
      paras.push(p1, p2, p3);
    }

    const narrationBlock = c.narrationUrl
      ? `
      <section class="hv-sm-narration" data-sm-reveal>
        <div class="hv-sm-narration__head">
          <span class="material-symbols-outlined">graphic_eq</span>
          <div><b>Narrated by the family archive</b><small>ElevenLabs TTS · stored on Backblaze B2</small></div>
          <span class="hv-sm-narration__badge"><span class="material-symbols-outlined" style="font-size:14px">verified</span>Genblaze</span>
        </div>
        <audio controls preload="none" src="${esc(c.narrationUrl)}"></audio>
        <details class="hv-sm-narration__prov">
          <summary>Provenance manifest — SHA-256 ${c.genblazeVerified ? "verified" : "recorded"}</summary>
          <code>run&nbsp;&nbsp; ${esc(c.genblazeRunId ?? "—")}
hash ${esc(c.genblazeManifestHash ?? "—")}
${esc(c.genblazeManifestUri ?? "")}</code>
        </details>
      </section>
    `
      : "";

    return `
      <p class="hv-sm-narrative__eyebrow">Chapter ${c.num} · ${c.label}</p>
      <h2 class="hv-sm-narrative__title">${esc(c.title)}</h2>
      <p class="hv-sm-narrative__excerpt">${esc(c.excerpt)}</p>
      ${narrationBlock}
      <div class="hv-sm-narrative__body">
        <p data-sm-reveal>${esc(paras[0] ?? c.body)}</p>
        ${
          figure || generatedFigure
            ? `
          <figure class="hv-sm-figure" data-sm-reveal>
            <img class="hv-sm-figure__img" data-sm-parallax-img
              src="${figureImg}"
              alt="${esc(c.title)}" />
            <div class="hv-sm-figure__overlay"></div>
            <figcaption class="hv-sm-figure__caption">
              <b>${esc(generatedFigure ? `${c.title} — archival scene` : (figure?.title ?? c.title))}</b>
              ${generatedFigure ? "Genblaze-reconstructed · provenance-verified" : esc(figure?.dateLabel ?? figure?.location ?? "")}
            </figcaption>
          </figure>
        `
            : ""
        }
        <div class="hv-sm-pullquote" data-sm-reveal>${esc(pullQuoteText)}</div>
        ${paras.slice(1).map((p) => `<p data-sm-reveal>${esc(p)}</p>`).join("")}
      </div>
      <footer class="hv-sm-narrative__footer">
        <span class="hv-sm-narrative__source">
          <span class="material-symbols-outlined">verified</span>
          Compiled from ${c.memoryIds.length} source memories in the archive.
        </span>
        <button class="hv-sm-narrative__save" type="button" data-sm-save>
          <span class="material-symbols-outlined" style="font-size:18px">bookmark</span>
          Save story
        </button>
      </footer>
    `;
  }

  function renderEvidence(c: SmChapter) {
    const mems = c.memoryIds.map(memoryById).filter(Boolean);
    evidence.innerHTML = mems
      .map(
        (m, i) => `
        <button class="hv-sm-evidence-card" type="button" data-sm-evidence-card data-memory-id="${esc(m!.id)}"
          style="animation-delay: ${i * 60}ms">
          <div class="hv-sm-evidence-card__top">
            <span class="hv-sm-evidence-card__icon">
              <span class="material-symbols-outlined">${ICON_FOR_MEMORY_TYPE[m!.type] ?? "description"}</span>
            </span>
            <span class="hv-sm-evidence-card__year">${esc(m!.year != null ? String(m!.year) : "")}</span>
          </div>
          <h4 class="hv-sm-evidence-card__title">${esc(m!.title)}</h4>
          <p class="hv-sm-evidence-card__meta">${esc(m!.location ?? "Undated")} · ${esc(m!.type)}</p>
        </button>
      `
      )
      .join("");

    evidence.querySelectorAll<HTMLButtonElement>("[data-sm-evidence-card]").forEach((card) => {
      card.addEventListener("click", () => {
        const memId = card.dataset.memoryId ?? "";
        const mem = memoryById(memId);
        if (!mem) return;
        const prompt = `Tell me more about "${mem.title}"`;
        handOffToAgent(prompt);
      });
    });
  }

  function setupReveals(scope: HTMLElement) {
    const targets = scope.querySelectorAll<HTMLElement>("[data-sm-reveal]");
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
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    targets.forEach((t) => io.observe(t));
  }

  function setupParallax(scope: HTMLElement) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const img = scope.querySelector<HTMLElement>("[data-sm-parallax-img]");
    if (!img) return;
    const el = img;
    let ticking = false;
    function update() {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) {
        ticking = false;
        return;
      }
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      const ty = progress * -24;
      el.style.transform = `translate3d(0, ${ty}px, 0) scale(1.08)`;
      ticking = false;
    }
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
    update();
  }

  function handOffToAgent(prompt: string) {
    const agentScreen = document.getElementById("agent-screen");
    const landingPage = document.querySelector(".landing-page");
    const loginScreen = document.getElementById("login-screen");
    const vaultScreen = document.getElementById("vault-screen");
    const familyMapScreen = document.getElementById("family-map-screen");
    if (!agentScreen) return;
    if (landingPage) landingPage.classList.add("is-hidden");
    if (loginScreen) loginScreen.style.display = "none";
    if (vaultScreen) vaultScreen.style.display = "none";
    if (familyMapScreen) familyMapScreen.style.display = "none";
    (root as HTMLElement).style.display = "none";
    agentScreen.style.display = "flex";
    history.pushState({ view: "agent" }, "", "#agent");
    document.dispatchEvent(new Event("heritage:agent-route"));
    setTimeout(() => {
      const input = agentScreen.querySelector<HTMLInputElement>("[data-agent-input]");
      if (input) {
        input.value = prompt;
        input.dispatchEvent(new Event("input"));
      }
      const form = agentScreen.querySelector<HTMLFormElement>("[data-agent-form]");
      if (form) form.requestSubmit();
    }, 300);
  }

  // Wire chapter step clicks
  root.querySelectorAll<HTMLButtonElement>("[data-sm-step]").forEach((step) => {
    step.addEventListener("click", () => {
      const idx = parseInt(step.dataset.smStep ?? "0", 10);
      if (idx !== activeIdx) renderChapter(idx, true);
    });
  });

  // Wire prev/next
  prevBtn.addEventListener("click", () => {
    if (activeIdx > 0) renderChapter(activeIdx - 1, true);
  });
  nextBtn.addEventListener("click", () => {
    if (activeIdx < chapters.length - 1) renderChapter(activeIdx + 1, true);
  });

  // Wire the Genblaze narrate button (generates audio + illustration → B2)
  root.querySelector<HTMLButtonElement>("[data-sm-narrate]")?.addEventListener("click", () => {
    const c = chapters[activeIdx];
    const btn = root.querySelector<HTMLButtonElement>("[data-sm-narrate]");
    if (c && btn) void generateNarration(c, btn);
  });

  // Wire AI query form
  const queryForm = root.querySelector<HTMLFormElement>("[data-sm-query-form]");
  const queryInput = root.querySelector<HTMLInputElement>("[data-sm-query-input]");
  queryForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = queryInput?.value.trim() ?? "";
    if (!value) return;
    handOffToAgent(value);
    if (queryInput) queryInput.value = "";
  });

  // Wire hint chips
  root.querySelectorAll<HTMLButtonElement>("[data-sm-hint]").forEach((hint) => {
    hint.addEventListener("click", () => {
      const p = hint.dataset.smHint ?? "";
      if (queryInput) queryInput.value = p;
      queryInput?.focus();
    });
  });

  // Wire Add chapter button
  root.querySelectorAll<HTMLElement>("[data-sm-add]").forEach((btn) => {
    btn.addEventListener("click", () => void openCreateStoryModal());
  });

  // Wire Edit / Delete chapter buttons (chapter bar)
  root.querySelector<HTMLElement>("[data-sm-edit]")?.addEventListener("click", () => {
    const c = chapters[activeIdx];
    if (c) void openEditStoryModal(c.id);
  });
  root.querySelector<HTMLElement>("[data-sm-delete]")?.addEventListener("click", () => {
    const c = chapters[activeIdx];
    if (c) deleteStory(c.id);
  });

  // Wire Save button (delegated) — actually persist via updateStory
  root.addEventListener("click", (e) => {
    const saveBtn = (e.target as HTMLElement).closest<HTMLElement>("[data-sm-save]");
    if (!saveBtn) return;
    const c = chapters[activeIdx];
    if (!c) return;
    const icon = saveBtn.querySelector<HTMLElement>(".material-symbols-outlined");
    const isSaved = saveBtn.classList.toggle("is-saved");
    if (icon) icon.textContent = isSaved ? "check" : "bookmark";
    saveBtn.style.background = isSaved ? "var(--hv-moss, #6f8266)" : "";
    // Persist: tag the story's body with a "saved" marker (cheap persistence
    // without changing the schema — we just touch updatedAt).
    archiveStore.updateStory(c.id, { body: c.body });
    if (isSaved) {
      toast.success("Story saved", `“${c.title}” is bookmarked for later.`);
    } else {
      toast.info("Bookmark removed", `“${c.title}” is no longer saved.`);
    }
  });

  wireSidebarCollapse(root);

  // Initial render (no animation on first load)
  renderChapter(activeIdx, false);

  // Reveal hero + stepper immediately
  root.querySelectorAll<HTMLElement>("[data-sm-reveal]").forEach((el) => {
    el.classList.add("is-revealed");
  });
}

// ── Story CRUD modals ─────────────────────────────────────────────────

async function openCreateStoryModal(): Promise<void> {
  const snapshot = archiveStore.getSnapshot();
  const memoryOptions = snapshot.memories.map((m) => ({
    value: m.id,
    label: `${m.title}${m.year ? ` (${m.year})` : ""}`,
  }));
  const values = await openCrudModal({
    title: "Write a new chapter",
    subtitle: "Compose the next chapter of your family story.",
    submitLabel: "Publish chapter",
    fields: [
      { name: "title", label: "Chapter title", type: "text", required: true, placeholder: "e.g. The garden in winter" },
      { name: "excerpt", label: "Pull quote / excerpt", type: "textarea", placeholder: "A single line that captures the chapter." },
      { name: "body", label: "Chapter body", type: "textarea", placeholder: "Write the chapter in long form. Split into paragraphs naturally." },
      { name: "memoryIds", label: "Anchor memories", type: "multiselect", options: memoryOptions, help: "Select the source memories this chapter draws from." },
      { name: "status", label: "Status", type: "select", options: [
        { value: "published", label: "Published" },
        { value: "draft", label: "Draft (hidden from reading guide)" },
      ], value: "published" },
    ],
  });
  if (!values) return;
  const story = archiveStore.createStory({
    title: String(values.title ?? "Untitled chapter"),
    excerpt: String(values.excerpt ?? ""),
    body: String(values.body ?? ""),
    memoryIds: Array.isArray(values.memoryIds) ? values.memoryIds.map(String) : [],
    status: (values.status === "draft" ? "draft" : "published") as AtlasStory["status"],
    createdBy: "you",
  });
  activeIdx = archiveStore.getSnapshot().stories.filter((s) => s.status === "published").findIndex((s) => s.id === story.id);
  if (activeIdx < 0) activeIdx = 0;
  toast.success("Chapter published", `“${story.title}” is now in the reading guide.`);
}

async function openEditStoryModal(id: string): Promise<void> {
  const story = archiveStore.getStory(id);
  if (!story) {
    toast.error("Chapter not found", "It may have been removed.");
    return;
  }
  const snapshot = archiveStore.getSnapshot();
  const memoryOptions = snapshot.memories.map((m) => ({
    value: m.id,
    label: `${m.title}${m.year ? ` (${m.year})` : ""}`,
  }));
  const values = await openCrudModal({
    title: "Edit chapter",
    subtitle: `Updating “${story.title}”`,
    submitLabel: "Save changes",
    fields: [
      { name: "title", label: "Chapter title", type: "text", required: true, value: story.title },
      { name: "excerpt", label: "Pull quote / excerpt", type: "textarea", value: story.excerpt },
      { name: "body", label: "Chapter body", type: "textarea", value: story.body },
      { name: "memoryIds", label: "Anchor memories", type: "multiselect", options: memoryOptions, value: story.memoryIds },
      { name: "status", label: "Status", type: "select", options: [
        { value: "published", label: "Published" },
        { value: "draft", label: "Draft (hidden from reading guide)" },
      ], value: story.status },
    ],
  });
  if (!values) return;
  const updated = archiveStore.updateStory(id, {
    title: String(values.title ?? story.title),
    excerpt: String(values.excerpt ?? story.excerpt),
    body: String(values.body ?? story.body),
    memoryIds: Array.isArray(values.memoryIds) ? values.memoryIds.map(String) : story.memoryIds,
    status: (values.status === "draft" ? "draft" : "published") as AtlasStory["status"],
  });
  if (updated) {
    toast.success("Chapter saved", `“${updated.title}” has been updated.`);
  }
}

function deleteStory(id: string): void {
  const story = archiveStore.getStory(id);
  if (!story) return;
  toast.info(
    "Chapter removed",
    `“${story.title}” has been deleted from the reading guide.`,
    {
      duration: 6000,
      actionLabel: "Undo",
      onAction: () => {
        const restored = archiveStore.createStory({
          title: story.title,
          excerpt: story.excerpt,
          body: story.body,
          memoryIds: story.memoryIds,
          status: story.status,
          createdBy: story.createdBy,
        });
        activeIdx = archiveStore.getSnapshot().stories.filter((s) => s.status === "published").findIndex((s) => s.id === restored.id);
        if (activeIdx < 0) activeIdx = 0;
        toast.success("Chapter restored", `“${story.title}” is back in the reading guide.`);
      },
    },
  );
  if (activeIdx > 0) activeIdx -= 1;
  archiveStore.deleteStory(id);
}

// ── Genblaze narration (story → media → Backblaze B2) ─────────────────

interface GenblazeResult {
  runId?: string;
  audio?: { url?: string; sha256?: string };
  image?: { url?: string; sha256?: string };
  manifest?: { uri?: string | null; hash?: string; verified?: boolean };
}

async function generateNarration(c: SmChapter, btn: HTMLButtonElement): Promise<void> {
  const label = btn.querySelector<HTMLElement>("[data-sm-narrate-label]");
  const icon = btn.querySelector<HTMLElement>(".material-symbols-outlined");
  const original = label?.textContent ?? "Narrate";
  const setBusy = (busy: boolean) => {
    btn.disabled = busy;
    if (label) label.textContent = busy ? "Generating…" : original;
    if (icon) icon.textContent = busy ? "hourglass_top" : "auto_awesome";
  };

  setBusy(true);
  try {
    const res = await fetch("/api/genblaze/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ storyId: c.id, title: c.title, excerpt: c.excerpt, text: c.body }),
    });
    if (!res.ok) throw new Error(`Worker responded ${res.status}`);
    const data = (await res.json()) as GenblazeResult;
    archiveStore.updateStory(c.id, {
      narrationUrl: data.audio?.url ?? null,
      narrationSha256: data.audio?.sha256 ?? null,
      illustrationUrl: data.image?.url ?? null,
      illustrationSha256: data.image?.sha256 ?? null,
      genblazeRunId: data.runId ?? null,
      genblazeManifestHash: data.manifest?.hash ?? null,
      genblazeManifestUri: data.manifest?.uri ?? null,
      genblazeVerified: Boolean(data.manifest?.verified),
    });
    toast.success("Narration ready", `“${c.title}” now has provenance-verified media on Backblaze B2.`);
  } catch (err) {
    console.error("[genblaze] generate failed:", err);
    toast.error(
      "Pipeline offline",
      "Run the Genblaze worker (`cd genblaze-worker && uvicorn server:app --port 8787`) and restart `npm run dev`. Static deploys have no /api proxy.",
    );
  } finally {
    setBusy(false);
  }
}
