import "./navigation";
import "./firebase";
import { onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseAuth } from "./firebase";
import { collection, doc, getDoc, serverTimestamp, setDoc, addDoc, onSnapshot, orderBy, query as firestoreQuery, type Unsubscribe } from "firebase/firestore";
import { firestore } from "./firebase";
import { firebaseStorage } from "./firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import type { FamilyMemberDocument } from "./types/firestore";
import { loadVaultDashboard } from "./services/vault-data";
import { bindAtlas, createAtlasScreen } from "./atlas/ui";
import type { AtlasDataset } from "./atlas/types";

type View = "landing" | "login" | "vault" | "family-map" | "story-mode" | "atlas" | "agent";
type AuthMode = "login" | "register";

interface AppElements {
  landing: HTMLElement;
  login: HTMLElement;
  vault: HTMLElement;
  familyMap: HTMLElement;
  storyMode: HTMLElement;
  loginForm: HTMLFormElement;
  registerForm: HTMLFormElement;
  authHeading: HTMLElement;
  authSubheading: HTMLElement;
  authSwitch: HTMLElement;
  emailDivider: HTMLElement;
  footerPrompt: HTMLElement;
  authError: HTMLElement;
}

const query = <T extends Element>(selector: string): T => {
  const element = document.querySelector<T>(selector);
  if (!element) throw new Error(`Missing required element: ${selector}`);
  return element;
};

const elements: AppElements = {
  landing: query<HTMLElement>(".landing-page"),
  login: query<HTMLElement>("#login-screen"),
  vault: query<HTMLElement>("#vault-screen"),
  familyMap: query<HTMLElement>("#family-map-screen"),
  storyMode: query<HTMLElement>("#story-mode-screen"),
  loginForm: query<HTMLFormElement>("#loginForm"),
  registerForm: query<HTMLFormElement>("#registerForm"),
  authHeading: query<HTMLElement>("#login-screen header h2"),
  authSubheading: query<HTMLElement>("#login-screen header p"),
  authSwitch: query<HTMLElement>(".auth-switch-wrapper"),
  emailDivider: query<HTMLElement>(".relative.mb-8.flex.items-center"),
  footerPrompt: query<HTMLElement>("#footerPrompt"),
  authError: query<HTMLElement>("#authError"),
};

let currentView: View = "landing";
let authMode: AuthMode = "login";
type FamilyNode = FamilyMemberDocument & { id: string };
let familyNodes: FamilyNode[] = [];
let stopFamilyMap: Unsubscribe | undefined;
let selectedFamilyNodeId: string | null = null;

async function loadAtlasDataset(): Promise<AtlasDataset | null> {
  const user = firebaseAuth.currentUser;
  if (!user) return null;
  const profile = await getDoc(doc(firestore, "users", user.uid));
  if (!profile.exists()) return null;
  const dashboard = await loadVaultDashboard(profile.data() as Parameters<typeof loadVaultDashboard>[0]);
  if (!dashboard) return null;
  return { vault: dashboard.vault, members: dashboard.familyMembers, memories: dashboard.memories, stories: dashboard.stories };
}

function escapeHtml(value: string): string {
  const node = document.createElement("span");
  node.textContent = value;
  return node.innerHTML;
}

function familyYears(member: FamilyNode): string {
  const start = member.birthYear ?? "";
  const end = member.deathYear ?? "Present";
  return start ? `${start}–${end}` : String(end);
}

function drawFamilyConnections(canvas: HTMLElement): void {
  const svg = canvas.querySelector<SVGSVGElement>("[data-family-connectors]");
  if (!svg) return;
  const bounds = canvas.getBoundingClientRect();
  svg.replaceChildren();
  familyNodes.filter((member) => member.parentId).forEach((member) => {
    const parent = canvas.querySelector<HTMLElement>(`[data-family-node-id="${member.parentId}"]`);
    const child = canvas.querySelector<HTMLElement>(`[data-family-node-id="${member.id}"]`);
    if (!parent || !child) return;
    const parentBounds = parent.getBoundingClientRect();
    const childBounds = child.getBoundingClientRect();
    const startX = parentBounds.left + parentBounds.width / 2 - bounds.left;
    const startY = parentBounds.bottom - bounds.top;
    const endX = childBounds.left + childBounds.width / 2 - bounds.left;
    const endY = childBounds.top - bounds.top;
    const bendY = startY + Math.max(30, (endY - startY) / 2);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `M ${startX} ${startY} V ${bendY} H ${endX} V ${endY}`);
    path.setAttribute("class", "family-connector");
    svg.append(path);
  });
}

function renderFamilyMap(): void {
  const canvas = document.querySelector<HTMLElement>("#family-map-screen .family-map-canvas");
  const map = canvas?.querySelector<HTMLElement>("[data-family-map-content]");
  if (!canvas || !map) return;
  if (!familyNodes.length) {
    map.innerHTML = '<div class="flex min-h-[520px] items-center justify-center"><div class="max-w-md rounded-2xl border border-dashed border-secondary/40 bg-surface-container-lowest/80 p-10 text-center shadow-sm"><span class="material-symbols-outlined mb-4 text-4xl text-secondary">account_tree</span><h3 class="font-display-lg text-2xl font-semibold text-primary">Your family map is ready</h3><p class="mt-3 leading-7 text-on-surface-variant">Add your first family member, then choose who they are connected to as your archive grows.</p><button data-open-relative class="mt-6 rounded-full bg-primary px-5 py-3 font-label-md text-label-md text-on-primary">Add your first relative</button></div></div>';
    map.querySelector<HTMLButtonElement>("[data-open-relative]")?.addEventListener("click", () => document.dispatchEvent(new Event("heritage:add-relative")));
    return;
  }
  const byId = new Map(familyNodes.map((member) => [member.id, member]));
  const depthFor = (member: FamilyNode, trail = new Set<string>()): number => {
    if (!member.parentId || !byId.has(member.parentId) || trail.has(member.id)) return 0;
    trail.add(member.id);
    return depthFor(byId.get(member.parentId)!, trail) + 1;
  };
  const levels = new Map<number, FamilyNode[]>();
  familyNodes.forEach((member) => {
    const depth = depthFor(member);
    levels.set(depth, [...(levels.get(depth) ?? []), member]);
  });
  map.innerHTML = [...levels.entries()].sort(([a], [b]) => a - b).map(([depth, members]) => `<div class="family-generation grid gap-7 ${members.length > 1 ? "sm:grid-cols-2 xl:grid-cols-3" : "justify-items-center"}" data-generation="${depth}">${members.map((member) => `<button type="button" data-family-node-id="${member.id}" class="map-node ${selectedFamilyNodeId === member.id ? "is-selected" : ""} relative z-10 w-full max-w-xs rounded-2xl border border-outline-variant/30 bg-surface-container-lowest p-5 text-center"><span class="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-secondary-container text-secondary"><span class="material-symbols-outlined text-2xl">person</span></span><span class="block font-display-lg text-xl font-semibold text-primary">${escapeHtml(member.fullName)}</span><span class="mt-1 block text-xs uppercase tracking-widest text-secondary">${escapeHtml(member.relationship || "Family member")} · ${familyYears(member)}</span></button>`).join("")}</div>`).join("") + '<button data-open-relative type="button" class="relative z-10 mx-auto flex min-h-36 w-full max-w-xs items-center justify-center rounded-2xl border border-dashed border-secondary/40 bg-surface-container-low p-5 text-center text-secondary"><span><span class="material-symbols-outlined mb-1 text-2xl">add</span><span class="block font-label-md text-label-md">Add a connected relative</span></span></button>';
  map.querySelectorAll<HTMLButtonElement>("[data-family-node-id]").forEach((node) => node.addEventListener("click", () => {
    selectedFamilyNodeId = node.dataset.familyNodeId ?? null;
    renderFamilyMap();
  }));
  map.querySelector<HTMLButtonElement>("[data-open-relative]")?.addEventListener("click", () => document.dispatchEvent(new Event("heritage:add-relative")));
  requestAnimationFrame(() => drawFamilyConnections(canvas));
}

async function watchFamilyMap(userId: string): Promise<void> {
  const profile = await getDoc(doc(firestore, "users", userId));
  const vaultId = profile.data()?.defaultVaultId as string | undefined;
  stopFamilyMap?.();
  if (!vaultId) { familyNodes = []; renderFamilyMap(); return; }
  stopFamilyMap = onSnapshot(firestoreQuery(collection(firestore, `vaults/${vaultId}/familyMembers`), orderBy("fullName", "asc")), (snapshot) => {
    familyNodes = snapshot.docs.map((member) => ({ id: member.id, ...(member.data() as FamilyMemberDocument) }));
    if (selectedFamilyNodeId && !familyNodes.some((member) => member.id === selectedFamilyNodeId)) selectedFamilyNodeId = null;
    renderFamilyMap();
  });
}

function setView(view: View): void {
  currentView = view;
  elements.landing.classList.toggle("is-hidden", view !== "landing");
  elements.login.style.display = view === "login" ? "flex" : "none";
  elements.vault.style.display = view === "vault" ? "flex" : "none";
  elements.familyMap.style.display = view === "family-map" ? "flex" : "none";
  elements.storyMode.style.display = view === "story-mode" ? "block" : "none";
  const atlas = document.getElementById("atlas-screen");
  if (atlas) atlas.style.display = view === "atlas" ? "block" : "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.pushState({ view }, "", view === "landing" ? "#" : `#${view}`);
}

function setAuthMode(mode: AuthMode): void {
  authMode = mode;
  clearAuthError();
  const isRegister = mode === "register";
  elements.loginForm.classList.toggle("is-hidden", isRegister);
  elements.registerForm.classList.toggle("is-hidden", !isRegister);
  const authThumb = elements.authSwitch.querySelector<HTMLElement>(".auth-switch-thumb");
  if (authThumb) authThumb.setAttribute("data-active", mode);
  elements.authHeading.textContent = isRegister ? "Begin your legacy" : "Enter the Vault";
  elements.authSubheading.textContent = isRegister
    ? "Create a sanctuary for the stories that matter."
    : "Sign in to continue preserving what matters.";
  elements.emailDivider.classList.toggle("is-hidden", isRegister);

  elements.footerPrompt.innerHTML = isRegister
    ? 'Already have a vault? <a class="font-semibold text-primary hover:underline" href="#" data-login-link>Enter the Vault</a>'
    : 'Don\'t have a vault yet? <a class="font-semibold text-primary hover:underline" href="#" data-register-link>Create account</a>';

  document.querySelectorAll<HTMLButtonElement>(".auth-tab").forEach((tab) => {
    const isActive = tab.dataset.mode === mode;
    tab.setAttribute("aria-selected", String(isActive));
    tab.classList.toggle("active", isActive);
  });
}

function clearAuthError(): void {
  elements.authError.textContent = "";
  elements.authError.classList.add("hidden");
}

function showAuthError(message: string): void {
  elements.authError.textContent = message;
  elements.authError.classList.remove("hidden");
}

function authMessage(error: unknown): string {
  const code = error instanceof Error && "code" in error ? String((error as Error & { code?: string }).code) : "";
  if (code.includes("invalid-credential") || code.includes("wrong-password") || code.includes("user-not-found")) return "That email and password do not match an account.";
  if (code.includes("email-already-in-use")) return "An account already exists for this email. Try signing in instead.";
  if (code.includes("weak-password")) return "Choose a stronger password with at least 8 characters.";
  if (code.includes("invalid-email")) return "Enter a valid email address.";
  return "We could not complete that request. Please try again.";
}

function setAuthButtonState(form: HTMLFormElement, loading: boolean, label: string): void {
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (!button) return;
  button.disabled = loading;
  button.textContent = loading ? "Securing your vault…" : label;
}

async function provisionVault(user: { uid: string; displayName: string | null; email: string | null }): Promise<void> {
  const userRef = doc(firestore, "users", user.uid);
  const vaultRef = await addDoc(collection(firestore, "vaults"), {
    name: `${user.displayName || "My family"}’s Vault`,
    description: "A private home for the stories that matter.",
    ownerId: user.uid,
    memberIds: [user.uid],
    coverImageUrl: null,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  await setDoc(userRef, {
    displayName: user.displayName || "Vault keeper",
    email: user.email || "",
    photoURL: null,
    defaultVaultId: vaultRef.id,
    createdAt: serverTimestamp(),
    lastSeenAt: serverTimestamp(),
  }, { merge: true });
}

function bindInteractions(): void {
  const memoryModal = document.createElement("div");
  memoryModal.className = "invite-backdrop";
  memoryModal.innerHTML = '<div class="invite-modal p-7 md:p-9"><div class="mb-7 flex items-start justify-between gap-5"><div><span class="material-symbols-outlined mb-3 text-3xl text-secondary">add_photo_alternate</span><h2 class="font-display-lg text-3xl font-semibold text-primary">Add a new memory</h2><p class="mt-2 text-sm leading-6 text-on-surface-variant">Preserve a photo, document, recording, or the story behind it.</p></div><button type="button" data-close-memory aria-label="Close dialog" class="rounded-full p-2 text-on-surface-variant"><span class="material-symbols-outlined">close</span></button></div><form class="space-y-5"><div><label class="mb-2 block font-label-md text-label-md text-secondary">Memory title</label><input name="title" required class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="e.g. Sunday at grandmother’s table" /></div><div class="grid grid-cols-2 gap-4"><div><label class="mb-2 block font-label-md text-label-md text-secondary">Type</label><select name="type" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3"><option value="photo">Photo</option><option value="document">Document</option><option value="audio">Audio</option><option value="video">Video</option><option value="letter">Letter</option></select></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Year</label><input name="year" type="number" min="1000" max="2100" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="1958" /></div></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Description</label><textarea name="description" required rows="3" class="w-full resize-none rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="What should your family remember about this?" /></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Attachment <span class="font-normal text-on-surface-variant">(optional)</span></label><input name="asset" type="file" class="block w-full text-sm text-on-surface-variant" accept="image/*,audio/*,video/*,.pdf,.doc,.docx" /></div><p data-memory-status class="hidden rounded-lg px-4 py-3 text-sm" role="status"></p><div class="flex justify-end gap-3"><button type="button" data-close-memory class="rounded-full border border-secondary px-5 py-3 font-label-md text-label-md text-secondary">Cancel</button><button type="submit" class="rounded-full bg-primary px-6 py-3 font-label-md text-label-md text-on-primary"><span class="material-symbols-outlined mr-2 align-middle text-base">save</span>Save memory</button></div></form></div>';
  document.body.append(memoryModal);
  const openMemory = (): void => memoryModal.classList.add("is-open");
  document.querySelectorAll<HTMLButtonElement>("[data-new-memory]").forEach((button) => button.addEventListener("click", openMemory));
  memoryModal.querySelectorAll<HTMLElement>("[data-close-memory]").forEach((button) => button.addEventListener("click", () => memoryModal.classList.remove("is-open")));
  memoryModal.addEventListener("click", (event) => { if (event.target === memoryModal) memoryModal.classList.remove("is-open"); });
  memoryModal.querySelector("form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const status = memoryModal.querySelector<HTMLElement>("[data-memory-status]");
    if (!form.reportValidity()) return;
    if (!firebaseAuth.currentUser) { if (status) { status.textContent = "Sign in to save memories to your private vault."; status.className = "rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container"; } return; }
    const profile = await getDoc(doc(firestore, "users", firebaseAuth.currentUser.uid));
    const vaultId = profile.data()?.defaultVaultId as string | undefined;
    if (!vaultId) { if (status) { status.textContent = "No vault is associated with this account yet."; status.className = "rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container"; } return; }
    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (submit) { submit.disabled = true; submit.textContent = "Saving memory…"; }
    try {
      const values = new FormData(form);
      const file = values.get("asset");
      let assetUrl = "";
      if (file instanceof File && file.size > 0) {
        const path = `vaults/${vaultId}/memories/${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "-")}`;
        const uploaded = await uploadBytes(ref(firebaseStorage, path), file);
        assetUrl = await getDownloadURL(uploaded.ref);
      }
      await addDoc(collection(firestore, `vaults/${vaultId}/memories`), { title: values.get("title"), description: values.get("description"), type: values.get("type"), assetUrl, thumbnailUrl: null, year: Number(values.get("year")) || null, dateLabel: null, location: null, familyMemberIds: [], tags: [], archived: false, createdBy: firebaseAuth.currentUser.uid, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
      form.reset();
      memoryModal.classList.remove("is-open");
    } catch (error) {
      if (status) { status.textContent = "We could not save this memory. Please try again."; status.className = "rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container"; }
    } finally { if (submit) { submit.disabled = false; submit.textContent = "Save memory"; } }
  });
  const storySidebar = document.querySelector<HTMLElement>("#story-mode-screen aside");
  if (storySidebar) {
    storySidebar.setAttribute("data-sidebar", "");
    storySidebar.className = "vault-nav vault-nav--heritage hidden flex-col p-6 lg:flex";
    storySidebar.innerHTML = '<div class="mb-8"><img class="brand-logo" src="/heritagevault-logo.svg" alt="HeritageVault" /><p class="mt-3 font-caption text-[11px] uppercase tracking-[.28em]" data-slogan style="color:rgba(236,227,219,0.65)">Preserving the Legacy</p></div><nav class="flex-1 space-y-1"><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3" href="#vault" data-dashboard-view="vault"><span class="material-symbols-outlined">inventory_2</span>The Vault</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3" href="#family-map" data-dashboard-view="family-map"><span class="material-symbols-outlined">account_tree</span>Family Map</a><a class="vault-nav-link active flex items-center gap-3 rounded-xl px-4 py-3 font-label-md text-label-md" href="#story-mode" data-dashboard-view="story-mode"><span class="material-symbols-outlined">auto_stories</span>Story Mode</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3" href="#atlas" data-dashboard-view="atlas"><span class="material-symbols-outlined">auto_awesome</span>HeritageAtlas</a></nav><button data-new-memory class="mb-5 flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 font-label-md text-label-md shadow-lg transition"><span class="material-symbols-outlined text-[18px]">add</span>New memory</button><button class="theme-toggle mb-3" type="button" data-theme-toggle><span class="flex items-center gap-3"><span class="material-symbols-outlined text-[18px]" data-theme-icon>dark_mode</span><span class="font-label-md text-label-md" data-theme-label>Dark mode</span></span><span class="material-symbols-outlined text-sm opacity-60">contrast</span></button><button class="theme-toggle" type="button" data-logout><span class="flex items-center gap-3"><span class="material-symbols-outlined text-[18px]">logout</span><span class="font-label-md text-label-md">Log out</span></span><span class="material-symbols-outlined text-sm opacity-60">arrow_forward</span></button><div class="mt-auto border-t pt-4" style="border-color:rgba(236,227,219,0.12)"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-full" style="background:rgba(236,227,219,0.12);color:#d4b896"><span class="font-label-md text-label-md font-bold" data-user-initials>—</span></div><div><p class="font-label-md text-label-md font-semibold" data-user-name style="color:#ece3db">Vault keeper</p><p class="font-caption text-caption" style="color:rgba(236,227,219,0.5)">Your private archive</p></div></div></div>';
  }
  const relativeModal = document.createElement("div");
  relativeModal.className = "invite-backdrop";
  relativeModal.innerHTML = '<div class="invite-modal p-7 md:p-9"><div class="mb-7 flex items-start justify-between gap-5"><div><span class="material-symbols-outlined mb-3 text-3xl text-secondary">account_tree</span><h2 class="font-display-lg text-3xl font-semibold text-primary">Add a relative</h2><p class="mt-2 text-sm leading-6 text-on-surface-variant">Create a person, then connect them to their parent or ancestor.</p></div><button type="button" data-close-relative aria-label="Close dialog" class="rounded-full p-2 text-on-surface-variant"><span class="material-symbols-outlined">close</span></button></div><form class="space-y-5"><div><label class="mb-2 block font-label-md text-label-md text-secondary">Full name</label><input name="fullName" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="e.g. Martha Banda" required /></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Relationship</label><input name="relationship" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="e.g. Daughter" required /></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Connect to</label><select name="parentId" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3"><option value="">No connection yet — start a new branch</option></select><p class="mt-2 text-xs text-on-surface-variant">Choose a parent or ancestor to draw a relationship line on the map.</p></div><div class="grid grid-cols-2 gap-4"><div><label class="mb-2 block font-label-md text-label-md text-secondary">Birth year</label><input name="birthYear" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" type="number" min="1000" max="2100" /></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Death year</label><input name="deathYear" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" type="number" min="1000" max="2100" /></div></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Notes</label><textarea name="notes" class="w-full resize-none rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" rows="3" placeholder="What should your family remember?"></textarea></div><p data-relative-status class="hidden rounded-lg px-4 py-3 text-sm"></p><div class="flex justify-end gap-3"><button type="button" data-close-relative class="rounded-full border border-secondary px-5 py-3 font-label-md text-label-md text-secondary">Cancel</button><button type="submit" class="rounded-full bg-primary px-6 py-3 font-label-md text-label-md text-on-primary"><span class="material-symbols-outlined mr-2 align-middle text-base">save</span>Save relative</button></div></form></div>';
  document.body.append(relativeModal);
  const openRelative = (): void => {
    const select = relativeModal.querySelector<HTMLSelectElement>('select[name="parentId"]');
    if (select) {
      select.innerHTML = '<option value="">No connection yet — start a new branch</option>' + familyNodes.map((member) => `<option value="${member.id}">${escapeHtml(member.fullName)} · ${escapeHtml(member.relationship || "Family member")}</option>`).join("");
      select.value = selectedFamilyNodeId ?? "";
    }
    relativeModal.classList.add("is-open");
  };
  document.addEventListener("heritage:add-relative", openRelative);
  document.querySelectorAll<HTMLButtonElement>("[data-add-relative]").forEach((button) => button.addEventListener("click", openRelative));
  relativeModal.querySelectorAll<HTMLElement>("[data-close-relative]").forEach((button) => button.addEventListener("click", () => relativeModal.classList.remove("is-open")));
  relativeModal.addEventListener("click", (event) => { if (event.target === relativeModal) relativeModal.classList.remove("is-open"); });
  relativeModal.querySelector("form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    if (!form.reportValidity()) return;
    const status = relativeModal.querySelector<HTMLElement>("[data-relative-status]");
    if (!firebaseAuth.currentUser) {
      if (status) { status.textContent = "Sign in to save this relative to your private family archive."; status.className = "rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container"; }
      return;
    }
    const profile = await getDoc(doc(firestore, "users", firebaseAuth.currentUser.uid));
    const vaultId = profile.data()?.defaultVaultId as string | undefined;
    const values = new FormData(form);
    if (!vaultId) { if (status) { status.textContent = "No vault is associated with this account yet."; status.className = "rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container"; } return; }
    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (submit) { submit.disabled = true; submit.textContent = "Saving relative…"; }
    try {
      await addDoc(collection(firestore, `vaults/${vaultId}/familyMembers`), { fullName: values.get("fullName"), relationship: values.get("relationship"), parentId: values.get("parentId") || null, birthYear: Number(values.get("birthYear")) || null, deathYear: Number(values.get("deathYear")) || null, portraitUrl: null, notes: values.get("notes") || "", createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
      form.reset();
      relativeModal.classList.remove("is-open");
    } catch (error) {
      if (status) { status.textContent = error instanceof Error ? "We could not save this relative. Please try again." : "We could not save this relative. Please try again."; status.className = "rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container"; }
    } finally {
      if (submit) { submit.disabled = false; submit.textContent = "Save relative"; }
    }
  });

  const inviteModal = document.getElementById("inviteModal");
  const inviteForm = document.getElementById("inviteForm") as HTMLFormElement | null;
  const inviteStatus = document.getElementById("inviteStatus");
  const closeInvite = (): void => inviteModal?.classList.remove("is-open");
  document.querySelectorAll<HTMLElement>("[data-invite-family]").forEach((button) => button.addEventListener("click", () => {
    inviteModal?.classList.add("is-open");
    (document.getElementById("inviteEmail") as HTMLInputElement | null)?.focus();
  }));
  document.querySelectorAll<HTMLElement>("[data-close-invite]").forEach((button) => button.addEventListener("click", closeInvite));
  inviteModal?.addEventListener("click", (event) => { if (event.target === inviteModal) closeInvite(); });
  inviteForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!inviteForm.reportValidity()) return;
    if (!firebaseAuth.currentUser) {
      if (inviteStatus) { inviteStatus.textContent = "Sign in to send a secure invitation from your family vault."; inviteStatus.className = "rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container"; }
      return;
    }
    const submit = inviteForm.querySelector<HTMLButtonElement>('button[type="submit"]');
    const email = (document.getElementById("inviteEmail") as HTMLInputElement).value.trim().toLowerCase();
    const message = (document.getElementById("inviteMessage") as HTMLTextAreaElement).value.trim();
    submit?.setAttribute("disabled", "true");
    if (inviteStatus) { inviteStatus.textContent = "Creating secure invitation…"; inviteStatus.className = "rounded-lg bg-surface-container px-4 py-3 text-sm text-on-surface-variant"; }
    try {
      const profile = await getDoc(doc(firestore, "users", firebaseAuth.currentUser.uid));
      const vaultId = profile.data()?.defaultVaultId as string | undefined;
      if (!vaultId) throw new Error("No vault is associated with this account.");
      await addDoc(collection(firestore, `vaults/${vaultId}/invitations`), { email, message, invitedBy: firebaseAuth.currentUser.uid, status: "pending", createdAt: serverTimestamp() });
      if (inviteStatus) { inviteStatus.textContent = "Invitation created. Your email client will open so you can send it."; inviteStatus.className = "rounded-lg bg-primary-fixed px-4 py-3 text-sm text-on-primary-fixed-variant"; }
      window.location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent("You’re invited to HeritageVault")}&body=${encodeURIComponent(message || "I’ve invited you to join my HeritageVault family archive.")}`;
      setTimeout(() => { inviteForm.reset(); closeInvite(); }, 500);
    } catch (error) {
      if (inviteStatus) { inviteStatus.textContent = error instanceof Error ? error.message : "We could not create the invitation. Please try again."; inviteStatus.className = "rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container"; }
    } finally { submit?.removeAttribute("disabled"); }
  });

  const memoryDetailModal = document.getElementById("memoryDetailModal");
  const memoryDetailImage = document.getElementById("memoryDetailImage");
  const memoryDetailTitle = document.getElementById("memoryDetailTitle");
  const memoryDetailType = document.getElementById("memoryDetailType");
  const memoryDetailYear = document.getElementById("memoryDetailYear");
  const memoryDetailDescription = document.getElementById("memoryDetailDescription");
  const memoryDetailDateLabel = document.getElementById("memoryDetailDateLabel");
  function openMemoryDetail(card: HTMLElement): void {
    const title = card.dataset.memoryTitle || "Untitled memory";
    const description = card.dataset.memoryDescription || "";
    const type = card.dataset.memoryType || "";
    const year = card.dataset.memoryYear || "";
    const image = card.dataset.memoryImage || "";
    if (memoryDetailTitle) memoryDetailTitle.textContent = title;
    if (memoryDetailType) {
      memoryDetailType.textContent = type;
      memoryDetailType.style.display = type ? "" : "none";
    }
    if (memoryDetailYear) {
      memoryDetailYear.textContent = year;
      memoryDetailYear.style.display = year ? "" : "none";
    }
    if (memoryDetailDescription) memoryDetailDescription.textContent = description;
    if (memoryDetailImage) {
      if (image) {
        memoryDetailImage.style.backgroundImage = `url("${image}")`;
        memoryDetailImage.style.display = "";
      } else {
        memoryDetailImage.style.display = "none";
      }
    }
    if (memoryDetailDateLabel) {
      memoryDetailDateLabel.textContent = year ? `Captured in ${year}` : "Date unknown";
    }
    memoryDetailModal?.classList.add("is-open");
  }
  document.querySelectorAll<HTMLElement>("[data-memory-detail]").forEach((card) => {
    card.addEventListener("click", () => openMemoryDetail(card));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openMemoryDetail(card);
      }
    });
  });
  document.querySelectorAll<HTMLElement>("[data-close-memory-detail]").forEach((button) => {
    button.addEventListener("click", () => memoryDetailModal?.classList.remove("is-open"));
  });
  memoryDetailModal?.addEventListener("click", (event) => {
    if (event.target === memoryDetailModal) memoryDetailModal.classList.remove("is-open");
  });


  const storyInput = document.querySelector<HTMLInputElement>('#story-mode-screen input[placeholder="Ask about another family memory..."]');
  const storySend = storyInput?.closest("div")?.querySelector<HTMLButtonElement>("button");
  storySend?.addEventListener("click", () => {
    const question = storyInput?.value.trim();
    if (!question || !storyInput) return;
    const article = document.querySelector<HTMLElement>("#story-mode-screen article.story-paper");
    if (!article) return;
    const message = document.createElement("div");
    message.className = "mb-6 ml-auto max-w-xl rounded-2xl bg-primary px-5 py-4 text-on-primary shadow-sm";
    message.textContent = question;
    article.parentElement?.insertBefore(message, article);
    const response = document.createElement("div");
    response.className = "mb-8 flex gap-3 rounded-2xl border border-outline-variant/30 bg-surface-container-low px-5 py-4 text-sm leading-6 text-on-surface-variant";
    response.innerHTML = '<span class="material-symbols-outlined text-secondary">auto_awesome</span><span>Your question has been added to this archive inquiry. I’ll use the memories and documents in your vault to build the answer as they become available.</span>';
    article.parentElement?.insertBefore(response, article);
    storyInput.value = "";
  });
  storyInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") { event.preventDefault(); storySend?.click(); }
  });

  document.querySelectorAll<HTMLButtonElement>("[data-logout]").forEach((button) => {
    button.addEventListener("click", async () => {
      const confirmed = window.confirm("Log out of HeritageVault?");
      if (!confirmed) return;
      button.disabled = true;
      button.querySelector<HTMLElement>("[data-logout-label]")?.replaceChildren(document.createTextNode("Signing out…"));
      await signOut(firebaseAuth).catch(() => undefined);
      setView("landing");
    });
  });

  document.querySelectorAll<HTMLAnchorElement>("[data-forgot-password]").forEach((link) => link.addEventListener("click", async (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const email = emailInput.value.trim();
    if (!email || !emailInput.checkValidity()) {
      showAuthError("Enter your email address first, then choose Forgot password.");
      emailInput.focus();
      return;
    }
    link.textContent = "Sending reset link…";
    clearAuthError();
    try {
      await sendPasswordResetEmail(firebaseAuth, email);
      showAuthError("Password reset instructions have been sent. Check your inbox and spam folder.");
      elements.authError.classList.remove("bg-error-container/60", "text-on-error-container");
      elements.authError.classList.add("bg-primary-fixed", "text-on-primary-fixed-variant");
    } catch (error: unknown) {
      showAuthError(authMessage(error));
    } finally {
      link.textContent = "Forgot password?";
    }
  }));

  const storedTheme = localStorage.getItem("heritagevault-theme");
  const applyTheme = (dark: boolean): void => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("heritagevault-theme", dark ? "dark" : "light");
    document.querySelectorAll<HTMLImageElement>(".brand-logo").forEach((logo) => {
      logo.src = logo.hasAttribute("data-logo-inverse") || dark
        ? "/heritagevault-logo-light.svg"
        : "/heritagevault-logo.svg";
    });
    document.querySelectorAll<HTMLElement>("[data-theme-label]").forEach((label) => { label.textContent = dark ? "Light mode" : "Dark mode"; });
    document.querySelectorAll<HTMLElement>("[data-theme-icon]").forEach((icon) => { icon.textContent = dark ? "light_mode" : "dark_mode"; });
  };
  applyTheme(storedTheme === "dark");
  document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach((toggle) => toggle.addEventListener("click", () => applyTheme(!document.documentElement.classList.contains("dark"))));

  document.querySelectorAll<HTMLAnchorElement>("[data-login-cta]").forEach((cta) => {
    cta.addEventListener("click", (event) => {
      event.preventDefault();
      setView("login");
    });
  });

  document.querySelectorAll<HTMLElement>("[data-dashboard-view]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const view = link.dataset.dashboardView as View | undefined;
      if (view === "vault" || view === "family-map" || view === "story-mode" || view === "atlas") setView(view);
    });
  });
  document.querySelectorAll<HTMLButtonElement>("[data-atlas-open]").forEach((button) => button.addEventListener("click", () => setView("atlas")));

  document.querySelectorAll<HTMLButtonElement>(".auth-tab").forEach((tab) => {
    tab.addEventListener("click", () => setAuthMode(tab.dataset.mode as AuthMode));
  });

  elements.footerPrompt.addEventListener("click", (event) => {
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a");
    if (!link) return;
    event.preventDefault();
    setAuthMode(link.hasAttribute("data-login-link") ? "login" : "register");
  });

  elements.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!elements.loginForm.reportValidity()) return;
    clearAuthError();
    setAuthButtonState(elements.loginForm, true, "Enter the Vault");
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => setView("vault"))
      .catch((error: unknown) => { setAuthButtonState(elements.loginForm, false, "Enter the Vault"); showAuthError(authMessage(error)); });
  });

  elements.registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!elements.registerForm.reportValidity()) return;
    clearAuthError();
    setAuthButtonState(elements.registerForm, true, "Create my vault");
    const email = (document.getElementById("registerEmail") as HTMLInputElement).value;
    const password = (document.getElementById("registerPassword") as HTMLInputElement).value;
    const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
    const lastName = (document.getElementById("lastName") as HTMLInputElement).value;
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(async ({ user }) => { await provisionVault({ ...user, displayName: `${firstName} ${lastName}`.trim() }); setView("vault"); })
      .catch((error: unknown) => { setAuthButtonState(elements.registerForm, false, "Create my vault"); showAuthError(authMessage(error)); });
  });

  window.addEventListener("popstate", () => {
    const hash = window.location.hash.replace("#", "") as View;
    setView(hash === "login" || hash === "vault" || hash === "family-map" || hash === "story-mode" || hash === "atlas" ? hash : "landing");
  });
}

function initScrollReveal(): void {
  const reveals = document.querySelectorAll(".aw-reveal, .aw-reveal-left, .aw-reveal-right, .aw-reveal-scale");
  if (!reveals.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => observer.observe(el));
}

function initParallaxHero(): void {
  const hero = document.querySelector<HTMLElement>(".hero-image");
  if (!hero) return;
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const rate = scrollY * 0.15;
    hero.style.transform = `translate3d(0, ${rate}px, 0) scale(1.05)`;
  }, { passive: true });
}

function updateUserDisplay(user: { displayName: string | null } | null): void {
  const name = user?.displayName?.trim() || "Vault keeper";
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  const firstInitial = name.charAt(0).toUpperCase();
  const spaceIdx = name.indexOf(" ");
  const initials = spaceIdx > -1 ? firstInitial + name.charAt(spaceIdx + 1).toUpperCase() : firstInitial;
  document.querySelectorAll<HTMLElement>("[data-user-name]").forEach((el) => { el.textContent = name; });
  document.querySelectorAll<HTMLElement>("[data-user-initials]").forEach((el) => { el.textContent = initials; });
  const greetingEl = document.querySelector<HTMLElement>("[data-user-greeting]");
  if (greetingEl) greetingEl.textContent = `${greeting}, ${name}.`;
  const dateEl = document.getElementById("currentDate");
  if (dateEl) {
    const now = new Date();
    const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    dateEl.textContent = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  }
}

function boot(): void {
  document.documentElement.dataset.tsRuntime = "true";
  const atlasScreen = createAtlasScreen(() => setView("vault"));
  elements.storyMode.before(atlasScreen);
  bindAtlas(atlasScreen, loadAtlasDataset);
  const familyMapCanvas = document.querySelector<HTMLElement>("#family-map-screen .family-map-canvas");
  if (familyMapCanvas) {
    familyMapCanvas.innerHTML = '<div class="absolute right-6 top-6 z-20 flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-lg"><button type="button" class="p-3 text-primary transition hover:bg-surface-container-low" aria-label="Zoom in"><span class="material-symbols-outlined">add</span></button><button type="button" class="border-t border-outline-variant/20 p-3 text-primary transition hover:bg-surface-container-low" aria-label="Zoom out"><span class="material-symbols-outlined">remove</span></button><button type="button" class="border-t border-outline-variant/20 p-3 text-primary transition hover:bg-surface-container-low" aria-label="Center map"><span class="material-symbols-outlined">center_focus_strong</span></button></div><svg data-family-connectors class="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true"></svg><div data-family-map-content></div>';
    window.addEventListener("resize", () => drawFamilyConnections(familyMapCanvas));
    renderFamilyMap();
  }
  document.querySelectorAll<HTMLElement>("#family-map-screen .text-2xl").forEach((stat) => { stat.textContent = "—"; });
  const initialHash = window.location.hash.replace("#", "") as View;
  currentView = initialHash === "login" || initialHash === "vault" || initialHash === "family-map" || initialHash === "story-mode" || initialHash === "atlas" ? initialHash : "landing";
  setAuthMode(authMode);
  bindInteractions();
  elements.landing.classList.toggle("is-hidden", currentView !== "landing");
  elements.login.style.display = currentView === "login" ? "flex" : "none";
  elements.vault.style.display = currentView === "vault" ? "flex" : "none";
  elements.familyMap.style.display = currentView === "family-map" ? "flex" : "none";
  elements.storyMode.style.display = currentView === "story-mode" ? "block" : "none";
  atlasScreen.style.display = currentView === "atlas" ? "block" : "none";
  initScrollReveal();
  initParallaxHero();

  updateUserDisplay(firebaseAuth.currentUser);
  onAuthStateChanged(firebaseAuth, (user) => {
    updateUserDisplay(user);
    if (user) {
      void watchFamilyMap(user.uid);
      if (currentView === "landing") setView("vault");
    } else {
      stopFamilyMap?.();
      familyNodes = [];
      renderFamilyMap();
    }
  });
}

boot()
