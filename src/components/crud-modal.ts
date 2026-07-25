/**
 * CrudModal — reusable modal for create/edit forms.
 *
 * Builds a Fraunces/Spectral-styled modal with:
 *   - A header with title + close button
 *   - A body of form fields (passed as a spec)
 *   - A footer with Cancel + Submit buttons
 *   - Backdrop click + Escape key to close
 *   - Auto-removed from DOM on close
 *
 * Usage:
 *   import { openCrudModal, type FieldSpec } from "./components/crud-modal";
 *   const result = await openCrudModal({
 *     title: "Add memory",
 *     fields: [
 *       { name: "title", label: "Title", type: "text", required: true },
 *       { name: "year", label: "Year", type: "number" },
 *       { name: "type", label: "Type", type: "select",
 *         options: [{value:"photo",label:"Photo"}, …] },
 *       { name: "description", label: "Description", type: "textarea" },
 *     ],
 *     submitLabel: "Add memory",
 *   });
 *   if (result) { archiveStore.createMemory(result); }
 */

export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "select"
  | "multiselect"
  | "tags"
  | "date";

export interface FieldOption {
  value: string;
  label: string;
}

export interface FieldSpec {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  value?: string | number | string[] | null;
  options?: FieldOption[];
  help?: string;
  min?: number;
  max?: number;
  step?: number;
}

export interface CrudModalOptions {
  title: string;
  subtitle?: string;
  fields: FieldSpec[];
  submitLabel?: string;
  cancelLabel?: string;
  /** Optional async validator. Throw with a message to show inline error. */
  validate?: (values: Record<string, unknown>) => Promise<void> | void;
}

export interface CrudModalResult {
  [key: string]: unknown;
}

let modalStyleEl: HTMLStyleElement | null = null;
let modalCounter = 0;

function ensureModalStyles(): void {
  if (modalStyleEl) return;
  modalStyleEl = document.createElement("style");
  modalStyleEl.id = "hv-crud-modal-styles";
  modalStyleEl.textContent = `
.hv-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 99998;
  background: rgba(15, 18, 14, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: grid;
  place-items: center;
  padding: 20px;
  animation: hv-modal-fade 0.24s ease both;
  overflow-y: auto;
}
@keyframes hv-modal-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.hv-modal {
  width: min(560px, 100%);
  max-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  background: #fffdfb;
  border: 1px solid rgba(28, 32, 24, 0.1);
  border-radius: 18px;
  box-shadow: 0 30px 80px rgba(15, 18, 14, 0.3),
              0 4px 12px rgba(15, 18, 14, 0.1);
  overflow: hidden;
  animation: hv-modal-pop 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;
}
@keyframes hv-modal-pop {
  from { opacity: 0; transform: translateY(12px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
html.dark .hv-modal {
  background: #24211e;
  border-color: rgba(245, 238, 232, 0.12);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
}
.hv-modal__header {
  padding: 24px 28px 18px;
  border-bottom: 1px solid rgba(28, 32, 24, 0.08);
  display: flex;
  align-items: flex-start;
  gap: 16px;
}
html.dark .hv-modal__header {
  border-bottom-color: rgba(245, 238, 232, 0.08);
}
.hv-modal__title-wrap { flex: 1; min-width: 0; }
.hv-modal__title {
  font-family: "Fraunces", "Spectral", serif;
  font-size: 1.32rem;
  font-weight: 600;
  letter-spacing: -0.005em;
  margin: 0;
  color: #1c2018;
}
html.dark .hv-modal__title { color: #f5eee8; }
.hv-modal__subtitle {
  font-family: "Spectral", serif;
  font-size: 0.85rem;
  margin: 4px 0 0;
  color: #5a6055;
}
html.dark .hv-modal__subtitle { color: rgba(245, 238, 232, 0.65); }
.hv-modal__close {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  background: transparent;
  border: 1px solid rgba(28, 32, 24, 0.12);
  border-radius: 8px;
  cursor: pointer;
  color: #5a6055;
  transition: all 0.2s ease;
}
html.dark .hv-modal__close {
  border-color: rgba(245, 238, 232, 0.18);
  color: rgba(245, 238, 232, 0.7);
}
.hv-modal__close:hover {
  background: rgba(192, 98, 58, 0.1);
  color: #c0623a;
  border-color: rgba(192, 98, 58, 0.3);
}
.hv-modal__close .material-symbols-outlined { font-size: 18px; }
.hv-modal__body {
  flex: 1;
  overflow-y: auto;
  padding: 22px 28px 8px;
}
.hv-modal__field { margin-bottom: 18px; }
.hv-modal__label {
  display: block;
  font-family: "Spectral", serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  margin-bottom: 6px;
  color: #1c2018;
}
html.dark .hv-modal__label { color: #f5eee8; }
.hv-modal__label .req { color: #c0623a; margin-left: 2px; }
.hv-modal__input,
.hv-modal__textarea,
.hv-modal__select {
  width: 100%;
  padding: 10px 12px;
  font-family: "Spectral", serif;
  font-size: 0.92rem;
  background: transparent;
  border: 1px solid rgba(28, 32, 24, 0.16);
  border-radius: 10px;
  color: #1c2018;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  box-sizing: border-box;
}
html.dark .hv-modal__input,
html.dark .hv-modal__textarea,
html.dark .hv-modal__select {
  border-color: rgba(245, 238, 232, 0.2);
  color: #f5eee8;
}
.hv-modal__input:focus,
.hv-modal__textarea:focus,
.hv-modal__select:focus {
  outline: none;
  border-color: #c0623a;
  box-shadow: 0 0 0 3px rgba(192, 98, 58, 0.16);
  background: #fffdfb;
}
html.dark .hv-modal__input:focus,
html.dark .hv-modal__textarea:focus,
html.dark .hv-modal__select:focus {
  background: #2a2622;
}
.hv-modal__textarea {
  resize: vertical;
  min-height: 88px;
  line-height: 1.5;
}
.hv-modal__select {
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='%235a6055' d='M6 8L0 0h12z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
  cursor: pointer;
}
.hv-modal__help {
  font-family: "Spectral", serif;
  font-size: 0.74rem;
  color: #6a7065;
  margin: 5px 0 0;
}
html.dark .hv-modal__help { color: rgba(245, 238, 232, 0.5); }
.hv-modal__error {
  font-family: "Spectral", serif;
  font-size: 0.78rem;
  color: #8a1f1f;
  margin: 5px 0 0;
  padding: 8px 12px;
  background: rgba(138, 31, 31, 0.06);
  border: 1px solid rgba(138, 31, 31, 0.18);
  border-radius: 8px;
}
html.dark .hv-modal__error {
  color: #e7bdb1;
  background: rgba(231, 189, 177, 0.08);
  border-color: rgba(231, 189, 177, 0.2);
}
.hv-modal__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px 10px;
  border: 1px solid rgba(28, 32, 24, 0.16);
  border-radius: 10px;
  min-height: 44px;
  align-items: center;
  cursor: text;
}
html.dark .hv-modal__tags {
  border-color: rgba(245, 238, 232, 0.2);
}
.hv-modal__tags:focus-within {
  border-color: #c0623a;
  box-shadow: 0 0 0 3px rgba(192, 98, 58, 0.16);
}
.hv-modal__tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: rgba(192, 98, 58, 0.12);
  color: #c0623a;
  border-radius: 6px;
  font-size: 0.78rem;
  font-family: "Spectral", serif;
  font-weight: 600;
}
html.dark .hv-modal__tag {
  background: rgba(231, 189, 177, 0.16);
  color: #e7bdb1;
}
.hv-modal__tag-close {
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  display: grid;
  place-items: center;
  opacity: 0.7;
}
.hv-modal__tag-close:hover { opacity: 1; }
.hv-modal__tag-close .material-symbols-outlined { font-size: 13px; }
.hv-modal__tag-input {
  flex: 1;
  min-width: 80px;
  border: none;
  outline: none;
  background: transparent;
  font-family: "Spectral", serif;
  font-size: 0.86rem;
  color: #1c2018;
}
html.dark .hv-modal__tag-input { color: #f5eee8; }
.hv-modal__multiselect {
  display: grid;
  gap: 6px;
  max-height: 140px;
  overflow-y: auto;
  padding: 10px 12px;
  border: 1px solid rgba(28, 32, 24, 0.16);
  border-radius: 10px;
}
html.dark .hv-modal__multiselect {
  border-color: rgba(245, 238, 232, 0.2);
}
.hv-modal__check {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Spectral", serif;
  font-size: 0.86rem;
  cursor: pointer;
  color: #1c2018;
}
html.dark .hv-modal__check { color: #f5eee8; }
.hv-modal__check input {
  accent-color: #c0623a;
}
.hv-modal__footer {
  padding: 16px 28px 22px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  border-top: 1px solid rgba(28, 32, 24, 0.08);
}
html.dark .hv-modal__footer {
  border-top-color: rgba(245, 238, 232, 0.08);
}
.hv-modal__btn {
  padding: 10px 22px;
  border-radius: 999px;
  font-family: "Spectral", serif;
  font-size: 0.86rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: all 0.22s ease;
  border: 1px solid transparent;
}
.hv-modal__btn--cancel {
  background: transparent;
  color: #5a6055;
  border-color: rgba(28, 32, 24, 0.18);
}
html.dark .hv-modal__btn--cancel {
  color: rgba(245, 238, 232, 0.7);
  border-color: rgba(245, 238, 232, 0.2);
}
.hv-modal__btn--cancel:hover {
  background: rgba(28, 32, 24, 0.06);
}
html.dark .hv-modal__btn--cancel:hover {
  background: rgba(245, 238, 232, 0.06);
}
.hv-modal__btn--submit {
  background: #1c2018;
  color: #f5eee8;
}
html.dark .hv-modal__btn--submit {
  background: #c0623a;
  color: #fffdfb;
}
.hv-modal__btn--submit:hover {
  background: #2c3a2e;
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(28, 32, 24, 0.18);
}
html.dark .hv-modal__btn--submit:hover {
  background: #d97a4f;
  box-shadow: 0 6px 16px rgba(192, 98, 58, 0.3);
}
.hv-modal__btn--submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
@media (max-width: 480px) {
  .hv-modal__header,
  .hv-modal__body,
  .hv-modal__footer { padding-left: 18px; padding-right: 18px; }
  .hv-modal__footer { flex-direction: column-reverse; }
  .hv-modal__btn { width: 100%; }
}
`;
  document.head.appendChild(modalStyleEl);
}

function isDark(): boolean {
  return document.documentElement.classList.contains("dark");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildField(field: FieldSpec): HTMLElement {
  const wrap = document.createElement("div");
  wrap.className = "hv-modal__field";
  wrap.dataset.fieldName = field.name;

  const label = document.createElement("label");
  label.className = "hv-modal__label";
  label.htmlFor = `hv-field-${field.name}`;
  label.innerHTML = `${escapeHtml(field.label)}${
    field.required ? '<span class="req">*</span>' : ""
  }`;
  wrap.appendChild(label);

  if (field.type === "textarea") {
    const ta = document.createElement("textarea");
    ta.className = "hv-modal__textarea";
    ta.id = `hv-field-${field.name}`;
    ta.name = field.name;
    if (field.placeholder) ta.placeholder = field.placeholder;
    if (typeof field.value === "string") ta.value = field.value;
    if (field.required) ta.required = true;
    wrap.appendChild(ta);
  } else if (field.type === "select") {
    const sel = document.createElement("select");
    sel.className = "hv-modal__select";
    sel.id = `hv-field-${field.name}`;
    sel.name = field.name;
    if (field.required) sel.required = true;
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = field.placeholder ?? "Select…";
    placeholder.disabled = true;
    placeholder.selected = !field.value;
    sel.appendChild(placeholder);
    for (const opt of field.options ?? []) {
      const o = document.createElement("option");
      o.value = opt.value;
      o.textContent = opt.label;
      if (String(field.value ?? "") === opt.value) o.selected = true;
      sel.appendChild(o);
    }
    wrap.appendChild(sel);
  } else if (field.type === "multiselect") {
    const box = document.createElement("div");
    box.className = "hv-modal__multiselect";
    box.dataset.fieldName = field.name;
    box.dataset.fieldType = "multiselect";
    const selected = Array.isArray(field.value) ? field.value : [];
    for (const opt of field.options ?? []) {
      const lbl = document.createElement("label");
      lbl.className = "hv-modal__check";
      const inp = document.createElement("input");
      inp.type = "checkbox";
      inp.value = opt.value;
      if (selected.includes(opt.value)) inp.checked = true;
      lbl.appendChild(inp);
      lbl.appendChild(document.createTextNode(opt.label));
      box.appendChild(lbl);
    }
    wrap.appendChild(box);
  } else if (field.type === "tags") {
    const tagsBox = document.createElement("div");
    tagsBox.className = "hv-modal__tags";
    tagsBox.dataset.fieldName = field.name;
    tagsBox.dataset.fieldType = "tags";
    const initialTags = Array.isArray(field.value) ? field.value : [];
    initialTags.forEach((t) => addTag(tagsBox, t));
    const input = document.createElement("input");
    input.className = "hv-modal__tag-input";
    input.type = "text";
    input.placeholder = field.placeholder ?? "Type and press Enter…";
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === ",") {
        e.preventDefault();
        const val = input.value.trim().replace(/,$/, "");
        if (val) {
          addTag(tagsBox, val);
          input.value = "";
        }
      } else if (e.key === "Backspace" && !input.value) {
        const tags = tagsBox.querySelectorAll(".hv-modal__tag");
        if (tags.length > 0) {
          tags[tags.length - 1].remove();
        }
      }
    });
    tagsBox.appendChild(input);
    wrap.appendChild(tagsBox);
  } else {
    const inp = document.createElement("input");
    inp.className = "hv-modal__input";
    inp.id = `hv-field-${field.name}`;
    inp.name = field.name;
    inp.type = field.type === "number" ? "number" : field.type === "date" ? "date" : "text";
    if (field.placeholder) inp.placeholder = field.placeholder;
    if (typeof field.value === "number") inp.value = String(field.value);
    else if (typeof field.value === "string") inp.value = field.value;
    if (field.required) inp.required = true;
    if (typeof field.min === "number") inp.min = field.min;
    if (typeof field.max === "number") inp.max = field.max;
    if (typeof field.step === "number") inp.step = field.step;
    wrap.appendChild(inp);
  }

  if (field.help) {
    const help = document.createElement("p");
    help.className = "hv-modal__help";
    help.textContent = field.help;
    wrap.appendChild(help);
  }
  return wrap;
}

function addTag(tagsBox: HTMLElement, value: string): void {
  const tag = document.createElement("span");
  tag.className = "hv-modal__tag";
  tag.dataset.value = value;
  tag.innerHTML = `${escapeHtml(value)}<button type="button" class="hv-modal__tag-close" aria-label="Remove"><span class="material-symbols-outlined">close</span></button>`;
  tag.querySelector(".hv-modal__tag-close")?.addEventListener("click", () => {
    tag.remove();
  });
  // Insert before the input.
  const input = tagsBox.querySelector(".hv-modal__tag-input");
  if (input) tagsBox.insertBefore(tag, input);
  else tagsBox.appendChild(tag);
}

function collectValues(
  modal: HTMLElement,
  fields: FieldSpec[],
): Record<string, unknown> {
  const values: Record<string, unknown> = {};
  for (const field of fields) {
    if (field.type === "multiselect") {
      const box = modal.querySelector(
        `[data-field-name="${field.name}"][data-field-type="multiselect"]`,
      );
      const checked = Array.from(
        box?.querySelectorAll<HTMLInputElement>("input:checked") ?? [],
      ).map((i) => i.value);
      values[field.name] = checked;
    } else if (field.type === "tags") {
      const box = modal.querySelector(
        `[data-field-name="${field.name}"][data-field-type="tags"]`,
      );
      const tags = Array.from(
        box?.querySelectorAll<HTMLElement>(".hv-modal__tag") ?? [],
      ).map((t) => t.dataset.value || "");
      values[field.name] = tags;
    } else if (field.type === "number") {
      const el = modal.querySelector<HTMLInputElement>(
        `#hv-field-${field.name}`,
      );
      const raw = el?.value?.trim();
      values[field.name] = raw ? Number(raw) : null;
    } else {
      const el = modal.querySelector<HTMLInputElement>(
        `#hv-field-${field.name}`,
      ) || modal.querySelector<HTMLTextAreaElement>(
        `#hv-field-${field.name}`,
      );
      values[field.name] = el?.value ?? "";
    }
  }
  return values;
}

export function openCrudModal(
  opts: CrudModalOptions,
): Promise<CrudModalResult | null> {
  ensureModalStyles();
  const id = `hv-modal-${++modalCounter}`;

  return new Promise((resolve) => {
    const backdrop = document.createElement("div");
    backdrop.className = "hv-modal-backdrop";
    backdrop.id = id;

    const modal = document.createElement("div");
    modal.className = "hv-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", `${id}-title`);

    // Header
    const header = document.createElement("div");
    header.className = "hv-modal__header";
    header.innerHTML = `
      <div class="hv-modal__title-wrap">
        <h3 class="hv-modal__title" id="${id}-title">${escapeHtml(opts.title)}</h3>
        ${opts.subtitle ? `<p class="hv-modal__subtitle">${escapeHtml(opts.subtitle)}</p>` : ""}
      </div>
      <button type="button" class="hv-modal__close" aria-label="Close">
        <span class="material-symbols-outlined">close</span>
      </button>
    `;
    modal.appendChild(header);

    // Body
    const body = document.createElement("div");
    body.className = "hv-modal__body";
    const form = document.createElement("form");
    form.id = `${id}-form`;
    for (const field of opts.fields) {
      form.appendChild(buildField(field));
    }
    const errorBox = document.createElement("div");
    errorBox.className = "hv-modal__error";
    errorBox.style.display = "none";
    form.appendChild(errorBox);
    body.appendChild(form);
    modal.appendChild(body);

    // Footer
    const footer = document.createElement("div");
    footer.className = "hv-modal__footer";
    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.className = "hv-modal__btn hv-modal__btn--cancel";
    cancelBtn.textContent = opts.cancelLabel ?? "Cancel";
    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.form = form.id;
    submitBtn.className = "hv-modal__btn hv-modal__btn--submit";
    submitBtn.textContent = opts.submitLabel ?? "Save";
    footer.appendChild(cancelBtn);
    footer.appendChild(submitBtn);
    modal.appendChild(footer);

    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
    document.body.style.overflow = "hidden";

    function close(result: CrudModalResult | null): void {
      document.body.style.overflow = "";
      backdrop.classList.add("is-leaving");
      window.setTimeout(() => {
        if (backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
      }, 240);
      resolve(result);
    }

    // Backdrop click closes (but not when clicking inside modal).
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) close(null);
    });
    // Close button.
    header.querySelector(".hv-modal__close")?.addEventListener("click", () => close(null));
    // Cancel button.
    cancelBtn.addEventListener("click", () => close(null));
    // Escape key.
    function onKey(e: KeyboardEvent): void {
      if (e.key === "Escape") {
        document.removeEventListener("keydown", onKey);
        close(null);
      }
    }
    document.addEventListener("keydown", onKey);

    // Form submit.
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const values = collectValues(modal, opts.fields);
      // Required check.
      const missing = opts.fields.find(
        (f) => f.required && !values[f.name],
      );
      if (missing) {
        errorBox.textContent = `“${missing.label}” is required.`;
        errorBox.style.display = "block";
        return;
      }
      // Custom validator.
      if (opts.validate) {
        try {
          submitBtn.disabled = true;
          submitBtn.textContent = "Checking…";
          await opts.validate(values);
        } catch (err) {
          errorBox.textContent = err instanceof Error ? err.message : String(err);
          errorBox.style.display = "block";
          submitBtn.disabled = false;
          submitBtn.textContent = opts.submitLabel ?? "Save";
          return;
        }
      }
      submitBtn.disabled = false;
      submitBtn.textContent = opts.submitLabel ?? "Save";
      close(values);
    });

    // Focus first input.
    window.setTimeout(() => {
      const firstInput = modal.querySelector<HTMLInputElement>(
        "input, textarea, select",
      );
      firstInput?.focus();
    }, 100);
  });
}
