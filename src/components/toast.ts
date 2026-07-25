/**
 * HvToast — tiny toast notification system for CRUD feedback.
 *
 * Usage:
 *   import { toast } from "./components/toast";
 *   toast.success("Memory added");
 *   toast.error("Could not save");
 *   toast.info("Working…");
 *
 * The container is lazily created on first call. Toasts auto-dismiss
 * after 4s (success/info) or 6s (error). Hovering pauses the timer.
 */

type ToastKind = "success" | "error" | "info";

interface ToastOptions {
  duration?: number;
  actionLabel?: string;
  onAction?: () => void;
}

const ICONS: Record<ToastKind, string> = {
  success: "check_circle",
  error: "error",
  info: "info",
};

const COLORS: Record<ToastKind, { fg: string; bg: string; border: string }> = {
  success: {
    fg: "#2c3a2e",
    bg: "rgba(44, 58, 46, 0.08)",
    border: "rgba(44, 58, 46, 0.28)",
  },
  error: {
    fg: "#8a1f1f",
    bg: "rgba(138, 31, 31, 0.08)",
    border: "rgba(138, 31, 31, 0.3)",
  },
  info: {
    fg: "#c0623a",
    bg: "rgba(192, 98, 58, 0.08)",
    border: "rgba(192, 98, 58, 0.28)",
  },
};

const DARK_COLORS: Record<ToastKind, { fg: string; bg: string; border: string }> = {
  success: {
    fg: "#c4c8c0",
    bg: "rgba(196, 200, 192, 0.1)",
    border: "rgba(196, 200, 192, 0.3)",
  },
  error: {
    fg: "#e7bdb1",
    bg: "rgba(231, 189, 177, 0.1)",
    border: "rgba(231, 189, 177, 0.3)",
  },
  info: {
    fg: "#e7bdb1",
    bg: "rgba(231, 189, 177, 0.1)",
    border: "rgba(231, 189, 177, 0.3)",
  },
};

let container: HTMLElement | null = null;
let styleEl: HTMLStyleElement | null = null;
let toastCounter = 0;

function ensureStyles(): void {
  if (styleEl) return;
  styleEl = document.createElement("style");
  styleEl.id = "hv-toast-styles";
  styleEl.textContent = `
.hv-toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: min(380px, calc(100vw - 40px));
  pointer-events: none;
}
.hv-toast {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  font-family: "Spectral", "Inter", system-ui, sans-serif;
  font-size: 0.86rem;
  line-height: 1.45;
  box-shadow: 0 12px 32px rgba(28, 32, 24, 0.12),
              0 2px 6px rgba(28, 32, 24, 0.06);
  pointer-events: auto;
  animation: hv-toast-in 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.hv-toast.is-leaving {
  opacity: 0;
  transform: translateX(20px);
}
@keyframes hv-toast-in {
  from { opacity: 0; transform: translateX(20px) translateY(-4px); }
  to   { opacity: 1; transform: translateX(0) translateY(0); }
}
.hv-toast__icon {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
}
.hv-toast__icon .material-symbols-outlined {
  font-size: 20px;
  font-variation-settings: "wght" 500;
}
.hv-toast__body {
  flex: 1;
  min-width: 0;
}
.hv-toast__title {
  font-family: "Fraunces", "Spectral", serif;
  font-weight: 600;
  font-size: 0.88rem;
  letter-spacing: 0.005em;
  margin: 0 0 2px;
}
.hv-toast__msg {
  margin: 0;
  opacity: 0.85;
  font-size: 0.82rem;
  word-break: break-word;
}
.hv-toast__action {
  flex-shrink: 0;
  background: transparent;
  border: none;
  font-family: "Fraunces", "Spectral", serif;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background 0.2s ease;
}
.hv-toast__action:hover {
  background: rgba(28, 32, 24, 0.08);
}
html.dark .hv-toast__action:hover {
  background: rgba(245, 238, 232, 0.1);
}
.hv-toast__close {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  display: grid;
  place-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s ease;
  color: inherit;
}
.hv-toast__close:hover { opacity: 1; }
.hv-toast__close .material-symbols-outlined { font-size: 16px; }
@media (max-width: 480px) {
  .hv-toast-container {
    top: 12px;
    right: 12px;
    left: 12px;
    max-width: none;
  }
}
`;
  document.head.appendChild(styleEl);
}

function ensureContainer(): HTMLElement {
  ensureStyles();
  if (container && document.body.contains(container)) return container;
  container = document.createElement("div");
  container.className = "hv-toast-container";
  container.setAttribute("role", "status");
  container.setAttribute("aria-live", "polite");
  document.body.appendChild(container);
  return container;
}

function isDark(): boolean {
  return document.documentElement.classList.contains("dark");
}

function show(
  kind: ToastKind,
  title: string,
  message?: string,
  opts: ToastOptions = {},
): void {
  const root = ensureContainer();
  const palette = (isDark() ? DARK_COLORS : COLORS)[kind];
  const id = ++toastCounter;

  const el = document.createElement("div");
  el.className = "hv-toast";
  el.dataset.toastId = String(id);
  el.style.color = palette.fg;
  el.style.background = palette.bg;
  el.style.borderColor = palette.border;

  el.innerHTML = `
    <div class="hv-toast__icon">
      <span class="material-symbols-outlined">${ICONS[kind]}</span>
    </div>
    <div class="hv-toast__body">
      <p class="hv-toast__title">${escapeHtml(title)}</p>
      ${message ? `<p class="hv-toast__msg">${escapeHtml(message)}</p>` : ""}
    </div>
    ${
      opts.actionLabel && opts.onAction
        ? `<button class="hv-toast__action" type="button">${escapeHtml(opts.actionLabel)}</button>`
        : ""
    }
    <button class="hv-toast__close" type="button" aria-label="Dismiss">
      <span class="material-symbols-outlined">close</span>
    </button>
  `;

  root.appendChild(el);

  const defaultDuration = kind === "error" ? 6000 : 4000;
  const duration = opts.duration ?? defaultDuration;
  let timer: number | null = window.setTimeout(() => dismiss(), duration);

  function dismiss(): void {
    if (timer !== null) {
      window.clearTimeout(timer);
      timer = null;
    }
    el.classList.add("is-leaving");
    window.setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 320);
  }

  // Hover pauses auto-dismiss.
  el.addEventListener("mouseenter", () => {
    if (timer !== null) {
      window.clearTimeout(timer);
      timer = null;
    }
  });
  el.addEventListener("mouseleave", () => {
    if (timer === null) {
      timer = window.setTimeout(() => dismiss(), 1500);
    }
  });

  // Close button.
  el.querySelector(".hv-toast__close")?.addEventListener("click", dismiss);

  // Action button.
  if (opts.actionLabel && opts.onAction) {
    el.querySelector(".hv-toast__action")?.addEventListener("click", () => {
      try {
        opts.onAction?.();
      } finally {
        dismiss();
      }
    });
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const toast = {
  success(title: string, message?: string, opts?: ToastOptions): void {
    show("success", title, message, opts);
  },
  error(title: string, message?: string, opts?: ToastOptions): void {
    show("error", title, message, opts);
  },
  info(title: string, message?: string, opts?: ToastOptions): void {
    show("info", title, message, opts);
  },
};
