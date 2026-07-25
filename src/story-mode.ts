/**
 * HeritageAtlas — Story Mode driver
 *
 * Turns the 5 published stories in demo-data.ts into an immersive,
 * chapter-by-chapter guided reading experience.
 *
 * Features:
 * - Chapter stepper with read/active states + click-to-jump
 * - Cinematic narrative with drop-cap, pull quotes, parallax figures
 * - Evidence rail that re-populates per chapter (from story.memoryIds)
 * - Scroll-spy reveals
 * - Sticky AI query bar that hands off to the HeritageAtlas Agent (#agent)
 * - Previous / Next chapter navigation with smooth transitions
 *
 * Vanilla JS. No deps. Reduced-motion aware.
 */
import { demoAtlasDataset } from "./demo-data";
import { renderSidebar, injectSidebarCSS, wireSidebarCollapse } from "./shared-sidebar";
import { initializeSidebars } from "./components/sidebar";

interface SmChapter {
  id: string;
  num: string;       // "01"
  label: string;     // "Begin"
  title: string;     // story.title
  excerpt: string;   // story.excerpt
  body: string;      // story.body (the long form)
  icon: string;      // material symbol name
  memoryIds: string[];
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
  return demoAtlasDataset.stories
    .filter((s) => s.status === "published")
    .map((s) => {
      const meta = CHAPTER_META[s.id] ?? { label: "Chapter", icon: "menu_book", num: "00" };
      return {
        id: s.id,
        num: meta.num,
        label: meta.label,
        title: s.title,
        excerpt: s.excerpt ?? "",
        body: s.body ?? "",
        icon: meta.icon,
        memoryIds: s.memoryIds ?? [],
      };
    });
}

const esc = (s: string | undefined | null): string => {
  if (s === null || s === undefined) return "";
  const el = document.createElement("span");
  el.textContent = String(s);
  return el.innerHTML;
};

const yearRange = (() => {
  const years = demoAtlasDataset.memories
    .map((m) => m.year)
    .filter((y): y is number => y !== null)
    .sort((a, b) => a - b);
  return years.length ? `${years[0]}–${years[years.length - 1]}` : "—";
})();

export function initStoryMode(root: HTMLElement): void {
  const chapters = buildChapters();
  if (!chapters.length) return;

  let activeIdx = 0;
  const readSet = new Set<string>();

  // Inject backdrop layers + sidebar + main content
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
            <p class="hv-sm-hero__stats-title">${chapters.length} chapters · ${demoAtlasDataset.memories.length} source memories</p>
            <p class="hv-sm-hero__stats-meta">${yearRange} · ${new Date().getFullYear() - parseInt(yearRange.split("–")[0])} years of one family</p>
          </aside>
        </div>
      </section>

      <nav class="hv-sm-stepper" data-sm-reveal aria-label="Story chapters">
        <div class="hv-sm-stepper__track">
          ${chapters
            .map(
              (c, i) => `
              <button class="hv-sm-step${i === 0 ? " is-active" : ""}" data-sm-step="${i}" type="button">
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
            <span class="hv-sm-chapter-bar__label" data-sm-chapter-label>Chapter 01 · Begin</span>
            <div class="hv-sm-chapter-bar__nav">
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

  const narrative = root.querySelector<HTMLElement>("[data-sm-narrative]")!;
  const evidence = root.querySelector<HTMLElement>("[data-sm-evidence]")!;
  const chapterLabel = root.querySelector<HTMLElement>("[data-sm-chapter-label]")!;
  const prevBtn = root.querySelector<HTMLButtonElement>("[data-sm-prev]")!;
  const nextBtn = root.querySelector<HTMLButtonElement>("[data-sm-next]")!;

  // Bail if any required element is missing (defensive — the innerHTML above
  // always includes them, but TS can't know that).
  if (!narrative || !evidence || !chapterLabel || !prevBtn || !nextBtn) return;

  function memoryById(id: string) {
    return demoAtlasDataset.memories.find((m) => m.id === id);
  }

  function renderChapter(idx: number, animate: boolean) {
    const c = chapters[idx];
    if (!c) return;
    activeIdx = idx;
    readSet.add(c.id);

    // Update chapter bar
    chapterLabel.textContent = `Chapter ${c.num} · ${c.label}`;

    // Update all chapter step buttons (sidebar list + horizontal stepper)
    root.querySelectorAll<HTMLElement>("[data-sm-step]").forEach((step) => {
      const stepIdx = parseInt(step.dataset.smStep ?? "0", 10);
      step.classList.toggle("is-active", stepIdx === idx);
      step.classList.toggle("is-read", stepIdx < idx || (readSet.has(chapters[stepIdx]?.id ?? "") && stepIdx !== idx));
    });

    // Update prev/next
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === chapters.length - 1;

    // Animate narrative out, then in. Use non-null assertions inside the
    // setTimeout closure — TS doesn't carry the early-return narrowing into
    // nested callbacks, but we've already verified these are non-null above.
    const n = narrative!;
    if (animate) {
      n.classList.add("is-transitioning");
      setTimeout(() => {
        n.classList.remove("is-transitioning");
        n.classList.add("is-entering");
        n.innerHTML = buildNarrativeHTML(c);
        renderEvidence(c);
        setupReveals(n);
        setupParallax(n);
        // Re-trigger entrance
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
    // Build 2-3 paragraphs from the body, with a pull quote and a figure
    const evidenceMems = c.memoryIds.map(memoryById).filter(Boolean);
    const figure = evidenceMems.find((m) => m?.type === "photo") ?? evidenceMems[0];
    const pullQuoteText = c.excerpt;

    // Split body into paragraphs (if it's a single long string, split on sentences)
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

    return `
      <p class="hv-sm-narrative__eyebrow">Chapter ${c.num} · ${c.label}</p>
      <h2 class="hv-sm-narrative__title">${esc(c.title)}</h2>
      <p class="hv-sm-narrative__excerpt">${esc(c.excerpt)}</p>
      <div class="hv-sm-narrative__body">
        <p data-sm-reveal>${esc(paras[0] ?? c.body)}</p>
        ${
          figure
            ? `
          <figure class="hv-sm-figure" data-sm-reveal>
            <img class="hv-sm-figure__img" data-sm-parallax-img
              src="${figure.thumbnailUrl || figure.assetUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuBw1w7ZGV-Mn7TPkS2VI8cmZq03Sw9CGO9cYtQzKEjMEMQAMVGaJW3YlObPIDsGD6sgTlWQMhOwczomm_hQtsxBSG0bMHICQ1PEgCN1hNsA2coITZaO1tI8T_rIdi0CQjv4mGBDGnkdGZ4kfwSBMATeJNVtvsNHHIpaIyMlnjPFMu35PpeZiHun3U9KvACNIHwi4CO5DRuKQRlyACmIbTOyv7qngi08VdNlyu9at02lclaSacS7KvpwICz2xw2xlXQrAkLM_lrcyUM"}"
              alt="${esc(figure.title)}" />
            <div class="hv-sm-figure__overlay"></div>
            <figcaption class="hv-sm-figure__caption">
              <b>${esc(figure.title)}</b>
              ${esc(figure.dateLabel ?? figure.location ?? "")}
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
          Compiled from ${c.memoryIds.length} source memories in the Banda–Chama archive.
        </span>
        <button class="hv-sm-narrative__save" type="button" data-sm-save>
          <span class="material-symbols-outlined" style="font-size:18px">bookmark</span>
          Save story
        </button>
      </footer>
    `;
  initializeSidebars();
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

    // Click an evidence card → hand off to the agent
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
    // Local non-null alias so TS keeps the narrowing inside the closure.
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
    // Switch to the agent screen and pre-fill the prompt
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
    // Pre-fill the agent input and auto-send
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

  // Wire chapter step clicks (sidebar list + horizontal stepper)
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

  // Wire save button (delegated)
  root.addEventListener("click", (e) => {
    const saveBtn = (e.target as HTMLElement).closest<HTMLElement>("[data-sm-save]");
    if (!saveBtn) return;
    const icon = saveBtn.querySelector<HTMLElement>(".material-symbols-outlined");
    if (icon) {
      icon.textContent = icon.textContent === "bookmark" ? "check" : "bookmark";
    }
    saveBtn.style.background = "var(--hv-moss, #6f8266)";
    setTimeout(() => {
      if (icon) icon.textContent = "bookmark";
      saveBtn.style.background = "";
    }, 1800);
  });

  // Initial render (no animation on first load)
  renderChapter(0, false);

  // Reveal hero + stepper immediately
  root.querySelectorAll<HTMLElement>("[data-sm-reveal]").forEach((el) => {
    el.classList.add("is-revealed");
  });
}
