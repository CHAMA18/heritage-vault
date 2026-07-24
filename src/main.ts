import "./firebase";
import { onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./firebase";
import { collection, doc, getDoc, serverTimestamp, setDoc, addDoc, onSnapshot, orderBy, query as firestoreQuery, type Unsubscribe } from "firebase/firestore";
import { firestore } from "./firebase";
import { firebaseStorage } from "./firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { initializeSidebars, type SidebarView } from "./components/sidebar";
import type { FamilyMemberDocument } from "./types/firestore";
import { loadVaultDashboard } from "./services/vault-data";
import { bindAtlas, createAtlasScreen } from "./atlas/ui";
import type { AtlasDataset } from "./atlas/types";
import { demoAtlasDataset } from "./demo-data";
import { initDemoPolish } from "./demo-polish";

type View = "landing" | "login" | "vault" | "family-map" | "story-mode" | "atlas" | "agent";
type AuthMode = "login" | "register";

interface AppElements {
  landing: HTMLElement;
  login: HTMLElement;
  vault: HTMLElement;
  familyMap: HTMLElement;
  storyMode: HTMLElement;
  agent: HTMLElement;
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
  agent: query<HTMLElement>("#agent-screen"),
  loginForm: query<HTMLFormElement>("#loginForm"),
  registerForm: query<HTMLFormElement>("#registerForm"),
  authHeading: query<HTMLElement>("#login-screen header h2"),
  authSubheading: query<HTMLElement>("#login-screen header p"),
  authSwitch: query<HTMLElement>(".auth-switch"),
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
let demoMode = false;
let familyMapZoom = 1;

function standardizeProductName(root: ParentNode = document): void {
  root.querySelectorAll<HTMLImageElement>("img[alt='HeritageAtlas']").forEach((image) => {
    image.alt = "Heritage Atlas";
  });
  root.querySelectorAll<HTMLElement>("[aria-label='HeritageAtlas navigation']").forEach((navigation) => {
    navigation.setAttribute("aria-label", "Heritage Atlas navigation");
  });
  root.querySelectorAll<HTMLElement>("[data-dashboard-view='atlas'], .relative-page__brand").forEach((element) => {
    Array.from(element.childNodes).forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent?.includes("HeritageAtlas")) {
        node.textContent = node.textContent.replaceAll("HeritageAtlas", "Heritage Atlas");
      }
    });
  });
}

async function loadAtlasDataset(): Promise<AtlasDataset | null> {
  if (demoMode) return demoAtlasDataset;
  const user = firebaseAuth.currentUser;
  if (!user) return null;
  const profile = await getDoc(doc(firestore, "users", user.uid));
  if (!profile.exists()) return null;
  const dashboard = await loadVaultDashboard(profile.data() as Parameters<typeof loadVaultDashboard>[0]);
  if (!dashboard) return null;
  return { vault: dashboard.vault, members: dashboard.familyMembers, memories: dashboard.memories, stories: dashboard.stories };
}

function renderDemoDashboard(): void {
  const years = demoAtlasDataset.memories
    .map((memory) => memory.year)
    .filter((year): year is number => year !== null)
    .sort((a, b) => a - b);
  const statValues: Record<string, string> = {
    memories: String(demoAtlasDataset.memories.length),
    familyMembers: String(demoAtlasDataset.members.length),
    timeline: years.length ? `${years[0]}–${years.at(-1)}` : "—",
    stories: String(demoAtlasDataset.stories.length),
  };
  document.querySelectorAll<HTMLElement>("[data-stat]").forEach((stat) => {
    const key = stat.dataset.stat;
    if (key && statValues[key]) stat.textContent = statValues[key];
  });
  document.querySelectorAll<HTMLElement>("[data-demo-banner]").forEach((banner) => banner.remove());
  const main = document.querySelector<HTMLElement>("#vault-screen .vault-main");
  if (main) {
    main.insertAdjacentHTML("afterbegin", '<div data-demo-banner class="mb-7 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-secondary/30 bg-secondary-container/50 px-5 py-3 text-sm text-on-surface"><span class="flex items-center gap-2"><span class="material-symbols-outlined text-secondary">auto_awesome</span><b>Demo Mode</b> · Exploring the read-only Banda–Chama family archive.</span><button type="button" data-exit-demo class="font-semibold text-secondary underline underline-offset-4">Exit demo</button></div>');
    main.querySelector<HTMLButtonElement>("[data-exit-demo]")?.addEventListener("click", exitDemoMode);
  }
  const storyTitle = document.querySelector<HTMLElement>("#story-mode-screen h1");
  const storySubtitle = storyTitle?.parentElement?.querySelector<HTMLElement>("p");
  const storyPaperTitle = document.querySelector<HTMLElement>("#story-mode-screen article h2");
  if (storyTitle) storyTitle.textContent = "“How did the Banda–Chama story unfold?”";
  if (storySubtitle) storySubtitle.textContent = "A visual inquiry grounded in the seeded demonstration archive";
  if (storyPaperTitle) storyPaperTitle.textContent = "The Banda–Chama Family Story";
}

function renderStoryModeExperience(): void {
  const content = document.querySelector<HTMLElement>("#story-mode-screen > .flex > section");
  if (!content) return;
  content.innerHTML = `<div class="story-experience"><div class="story-experience__inner"><section class="story-hero"><div><p class="story-kicker">Guided family narrative</p><h1>Follow the threads that made this family.</h1><p>Story Mode turns evidence into a guided reading path. Begin with a chapter, inspect the source moments beside it, then ask the archive what should come next.</p></div><div class="story-hero__status"><span class="material-symbols-outlined">auto_awesome</span><div><b>Visual reading guide</b><small>4 chapters · 19 source memories · 114 years</small></div></div></section><nav class="story-path" aria-label="Story reading path"><button class="story-path__step is-active" type="button" data-story-chapter="roots"><i class="material-symbols-outlined">mail</i><b>01 · Begin</b><small>The letter that started the archive</small></button><button class="story-path__step" type="button" data-story-chapter="table"><i class="material-symbols-outlined">table_restaurant</i><b>02 · Gather</b><small>A ritual with room for everyone</small></button><button class="story-path__step" type="button" data-story-chapter="routes"><i class="material-symbols-outlined">route</i><b>03 · Travel</b><small>Routes, stamps, and borrowed roads</small></button><button class="story-path__step" type="button" data-story-chapter="future"><i class="material-symbols-outlined">auto_stories</i><b>04 · Continue</b><small>The next generation takes the pen</small></button></nav><section class="story-layout"><article class="story-paper story-paper--guided"><header class="story-paper__header"><div><p class="story-kicker" data-story-kicker>Chapter 01 · Begin</p><h2 data-story-title>The blue trunk and the promise of books</h2></div><button type="button" data-story-next><span class="material-symbols-outlined">arrow_forward</span>Next chapter</button></header><div class="story-chapter-summary" data-story-summary>Start here: a rain-stained postcard explains why Samuel began preserving the small details that distance could erase.</div><div class="story-paper__body" data-story-body><p>In 1912, Samuel Banda wrote home from a railway platform in Livingstone. His postcard had room for only three hurried lines, yet he made space for rain on the tracks, the sound of a whistle, and a promise to bring home a proper atlas. It was the first record in what would become the Banda–Chama archive.</p><p>Years later, when Samuel took his first teaching post in Mongu, he wrote again—this time about books, and the hope that every child might have one to borrow. Beatrice kept both letters in a blue trunk alongside an atlas, two school slates, and a hand-cranked radio. The trunk was not meant to be a museum. It was simply how they kept one another close.</p><div class="story-journey"><div><b>1912</b><span>A postcard begins the thread</span></div><div><b>1920</b><span>A teacher writes home about books</span></div><div><b>1935</b><span>The blue trunk is inventoried</span></div></div></div></article><aside class="story-storyline"><section class="story-sidecard"><h3><span class="material-symbols-outlined">verified</span>Evidence trail</h3><p>Each chapter is anchored in original archive material. Select a card to see why it matters.</p><div class="story-evidence"><button type="button" data-story-evidence="postcard"><span class="material-symbols-outlined">mail</span><span><b>Postcard from the railway</b><small>Livingstone · 1912</small></span></button><button type="button" data-story-evidence="letter"><span class="material-symbols-outlined">history_edu</span><span><b>Samuel’s first school letter</b><small>Mongu · 1920</small></span></button><button type="button" data-story-evidence="trunk"><span class="material-symbols-outlined">inventory_2</span><span><b>The blue trunk inventory</b><small>Kabwe · 1935</small></span></button></div><div class="story-inspector" data-story-inspector>Select a source to reveal how it moves the family story forward.</div></section><section class="story-sidecard"><h3><span class="material-symbols-outlined">explore</span>How to explore</h3><p>Move chapter by chapter, choose a source, or ask a question below. HeritageAtlas turns each question into an evidence-led path.</p></section></aside></section></div></div><footer class="story-composer"><div class="story-composer__inner"><span class="material-symbols-outlined">auto_awesome</span><input aria-label="Ask about another family memory" placeholder="Ask about another family memory..."/><button type="button"><span class="material-symbols-outlined">send</span><span>Explore</span></button></div><p class="story-composer__hint">Try: “What changed when the family moved?” · “Show the stories behind the Sunday table.”</p></footer>`;

  const chapters = [
    { id: "roots", kicker: "Chapter 01 · Begin", title: "The blue trunk and the promise of books", summary: "Start here: a rain-stained postcard explains why Samuel began preserving the small details that distance could erase.", body: `<p>In 1912, Samuel Banda wrote home from a railway platform in Livingstone. His postcard had room for only three hurried lines, yet he made space for rain on the tracks, the sound of a whistle, and a promise to bring home a proper atlas. It was the first record in what would become the Banda–Chama archive.</p><p>Years later, when Samuel took his first teaching post in Mongu, he wrote again—this time about books, and the hope that every child might have one to borrow. Beatrice kept both letters in a blue trunk alongside an atlas, two school slates, and a hand-cranked radio. The trunk was not meant to be a museum. It was simply how they kept one another close.</p><div class="story-journey"><div><b>1912</b><span>A postcard begins the thread</span></div><div><b>1920</b><span>A teacher writes home about books</span></div><div><b>1935</b><span>The blue trunk is inventoried</span></div></div>` },
    { id: "table", kicker: "Chapter 02 · Gather", title: "A table large enough for everyone", summary: "Follow the ritual that turned recipes, laughter, and listening into a family language.", body: `<p>At Martha’s Sunday table, no conversation was too small to keep. The enamel plates and Beatrice’s embroidered cloth made a stage for arrivals, apologies, job news, and stories that grew funnier with every retelling.</p><p>Martha’s garden fed the table, but it also supplied its wisdom. In a cassette recorded at dusk, she named each plant and then said a family grows the same way: slowly, by being tended. Decades later, Nandi found Beatrice’s recipe card—‘stir until the house smells right’—and understood that the instructions were really an invitation to make extra for neighbours.</p><div class="story-journey"><div><b>1951</b><span>The first Sunday table</span></div><div><b>1984</b><span>Martha records the garden</span></div><div><b>2007</b><span>Four generations gather</span></div></div>` },
    { id: "routes", kicker: "Chapter 03 · Travel", title: "Routes, stamps, and borrowed roads", summary: "Trace the movement of people, photographs, and stories between the homes that shaped the family.", body: `<p>Joseph’s passport is full of stamps, but the more revealing marks are the addresses written in the margins: Harare, Bulawayo, Lusaka, then home again. Each border crossing carried practical news and a few photographs for the people who could not travel.</p><p>Daniel later placed a cassette recorder on the living-room table and asked Joseph to explain the move, the missing suitcase, and the song nobody could finish. The recording reveals that migration was not a single departure. It was a repeated act of remembering where to return.</p><div class="story-journey"><div><b>1961</b><span>Ruth catalogues the trunks</span></div><div><b>1967</b><span>Joseph’s passport opens routes</span></div><div><b>2023</b><span>Tapiwa walks the old road</span></div></div>` },
    { id: "future", kicker: "Chapter 04 · Continue", title: "The next keepers", summary: "The archive becomes alive when the youngest generation adds questions, maps, and new ways to remember.", body: `<p>Malia’s list begins where the photographs stop: Who took this? Why were they laughing? Where did the blue trunk sleep? Her questions make visible the work an archive still has to do.</p><p>Linda’s short film brings letters, cassettes, and lunch-table photographs into the same room. Miles responds with a hand-drawn map of railway lines, garden paths, and addresses, calling it ‘How we kept finding each other.’ Theo will inherit not a finished history, but a living invitation to add his own.</p><div class="story-journey"><div><b>2022</b><span>Questions enter the archive</span></div><div><b>2025</b><span>Linda premieres the family film</span></div><div><b>2026</b><span>Miles maps the routes home</span></div></div>` },
  ];
  const updateChapter = (id: string): void => {
    const chapter = chapters.find((item) => item.id === id) ?? chapters[0];
    content.querySelector<HTMLElement>("[data-story-kicker]")!.textContent = chapter.kicker;
    content.querySelector<HTMLElement>("[data-story-title]")!.textContent = chapter.title;
    content.querySelector<HTMLElement>("[data-story-summary]")!.textContent = chapter.summary;
    content.querySelector<HTMLElement>("[data-story-body]")!.innerHTML = chapter.body;
    content.querySelectorAll<HTMLElement>("[data-story-chapter]").forEach((button) => button.classList.toggle("is-active", button.dataset.storyChapter === chapter.id));
  };
  content.querySelectorAll<HTMLElement>("[data-story-chapter]").forEach((button) => button.addEventListener("click", () => updateChapter(button.dataset.storyChapter ?? "roots")));
  content.querySelector<HTMLButtonElement>("[data-story-next]")?.addEventListener("click", () => {
    const active = chapters.findIndex((chapter) => content.querySelector(`[data-story-chapter=\"${chapter.id}\"]`)?.classList.contains("is-active"));
    updateChapter(chapters[(active + 1) % chapters.length].id);
  });
  const evidenceNotes: Record<string, string> = { postcard: "This is the archive’s earliest dated record. It gives the story a starting place, a journey, and Samuel’s own voice.", letter: "The letter turns an aspiration—books for children—into a recurring family value carried through later generations.", trunk: "The inventory proves that preservation was already a family practice long before the archive became digital." };
  content.querySelectorAll<HTMLElement>("[data-story-evidence]").forEach((button) => button.addEventListener("click", () => {
    content.querySelectorAll<HTMLElement>("[data-story-evidence]").forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");
    const inspector = content.querySelector<HTMLElement>("[data-story-inspector]");
    if (inspector) inspector.textContent = evidenceNotes[button.dataset.storyEvidence ?? ""] ?? "This source is part of the family’s evidence trail.";
  }));
}

function enterDemoMode(): void {
  demoMode = true;
  stopFamilyMap?.();
  familyNodes = demoAtlasDataset.members;
  selectedFamilyNodeId = "martha";
  renderFamilyMap();
  renderDemoDashboard();
  setView("vault");
}

function exitDemoMode(): void {
  demoMode = false;
  familyNodes = [];
  selectedFamilyNodeId = null;
  document.querySelector<HTMLElement>("[data-demo-banner]")?.remove();
  renderFamilyMap();
  setView(firebaseAuth.currentUser ? "vault" : "landing");
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
  const stage = canvas.querySelector<HTMLElement>("[data-family-map-stage]");
  if (!svg || !stage) return;
  const bounds = stage.getBoundingClientRect();
  svg.replaceChildren();
  familyNodes.filter((member) => member.parentId).forEach((member) => {
    const parent = canvas.querySelector<HTMLElement>(`[data-family-node-id="${member.parentId}"]`);
    const child = canvas.querySelector<HTMLElement>(`[data-family-node-id="${member.id}"]`);
    if (!parent || !child) return;
    const parentBounds = parent.getBoundingClientRect();
    const childBounds = child.getBoundingClientRect();
    const startX = (parentBounds.left + parentBounds.width / 2 - bounds.left) / familyMapZoom;
    const startY = (parentBounds.bottom - bounds.top) / familyMapZoom;
    const endX = (childBounds.left + childBounds.width / 2 - bounds.left) / familyMapZoom;
    const endY = (childBounds.top - bounds.top) / familyMapZoom;
    const bendY = startY + Math.max(30, (endY - startY) / 2);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `M ${startX} ${startY} V ${bendY} H ${endX} V ${endY}`);
    path.setAttribute("class", "family-connector");
    svg.append(path);
  });
}

function setFamilyMapZoom(canvas: HTMLElement, nextZoom: number): void {
  familyMapZoom = Math.min(1.35, Math.max(0.7, Number(nextZoom.toFixed(2))));
  const stage = canvas.querySelector<HTMLElement>("[data-family-map-stage]");
  if (stage) stage.style.transform = `scale(${familyMapZoom})`;
  const status = canvas.querySelector<HTMLElement>("[data-map-zoom-status]");
  if (status) status.textContent = `Map zoom ${Math.round(familyMapZoom * 100)}%`;
  requestAnimationFrame(() => drawFamilyConnections(canvas));
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
  elements.storyMode.style.display = view === "story-mode" ? "flex" : "none";
  elements.agent.style.display = view === "agent" ? "flex" : "none";
  const atlas = document.getElementById("atlas-screen");
  if (atlas) atlas.style.display = view === "atlas" ? "flex" : "none";
  if (view === "family-map") document.dispatchEvent(new Event("heritage:family-route"));
  if (view === "story-mode") document.dispatchEvent(new Event("heritage:story-route"));
  if (view === "agent") document.dispatchEvent(new Event("heritage:agent-route"));
  document.dispatchEvent(new CustomEvent("heritage:view", { detail: { view } }));
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.pushState({ view }, "", view === "landing" ? "#" : `#${view}`);
}

function setAuthMode(mode: AuthMode): void {
  authMode = mode;
  clearAuthError();
  const isRegister = mode === "register";
  elements.loginForm.classList.toggle("is-hidden", isRegister);
  elements.registerForm.classList.toggle("is-hidden", !isRegister);
  elements.authSwitch.classList.toggle("register-active", isRegister);
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
    tab.classList.toggle("text-primary", isActive);
    tab.classList.toggle("text-on-surface-variant", !isActive);
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

function userInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  return (words.slice(0, 2).map((word) => word[0]).join("") || "AK").toUpperCase();
}

function applyAuthenticatedIdentity(displayName: string | null | undefined, email: string | null | undefined): void {
  const fallback = email?.split("@")[0]?.replace(/[._-]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()) || "Vault keeper";
  const name = displayName?.trim() || fallback;
  const firstName = name.split(/\s+/)[0] || "there";
  document.documentElement.dataset.authUserName = name;
  document.documentElement.dataset.authUserInitials = userInitials(name);
  document.querySelectorAll<HTMLElement>("[data-auth-user-name]").forEach((element) => { element.textContent = name; });
  document.querySelectorAll<HTMLElement>("[data-sidebar] > div:last-child p.font-semibold").forEach((element) => { element.textContent = name; });
  document.querySelectorAll<HTMLElement>("[data-auth-user-initials]").forEach((element) => { element.textContent = userInitials(name); });
  document.querySelectorAll<HTMLElement>("#vault-screen > section > header .bg-primary.font-label-md, #story-mode-screen header .bg-primary.text-xs").forEach((element) => { element.textContent = userInitials(name); });
  document.querySelectorAll<HTMLElement>("[data-auth-greeting]").forEach((element) => { element.textContent = `Good morning, ${firstName}.`; });
  document.querySelectorAll<HTMLElement>("#vault-screen > section > header h2").forEach((element) => { element.textContent = `Good morning, ${firstName}.`; });
  document.dispatchEvent(new CustomEvent("heritage:identity", { detail: { name, initials: userInitials(name) } }));
}

function bindArchiveCanvas(): void {
  const canvas = document.querySelector<HTMLElement>("[data-archive-canvas]");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  canvas.querySelectorAll<HTMLElement>("[data-archive-tile]").forEach((tile) => {
    let startX = 0;
    let startY = 0;
    let originLeft = 0;
    let originTop = 0;
    tile.addEventListener("pointerdown", (event) => {
      if (event.button !== 0) return;
      const canvasBox = canvas.getBoundingClientRect();
      const tileBox = tile.getBoundingClientRect();
      startX = event.clientX;
      startY = event.clientY;
      originLeft = tileBox.left - canvasBox.left;
      originTop = tileBox.top - canvasBox.top;
      tile.style.left = `${originLeft}px`;
      tile.style.top = `${originTop}px`;
      tile.style.right = "auto";
      tile.style.bottom = "auto";
      tile.style.transform = "rotate(0deg)";
      tile.style.zIndex = "5";
      tile.setPointerCapture(event.pointerId);
    });
    tile.addEventListener("pointermove", (event) => {
      if (!tile.hasPointerCapture(event.pointerId)) return;
      const maxLeft = Math.max(0, canvas.clientWidth - tile.offsetWidth);
      const maxTop = Math.max(0, canvas.clientHeight - tile.offsetHeight);
      tile.style.left = `${Math.min(maxLeft, Math.max(0, originLeft + event.clientX - startX))}px`;
      tile.style.top = `${Math.min(maxTop, Math.max(0, originTop + event.clientY - startY))}px`;
    });
    tile.addEventListener("pointerup", (event) => {
      if (tile.hasPointerCapture(event.pointerId)) tile.releasePointerCapture(event.pointerId);
      tile.style.zIndex = "2";
    });
  });
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
  bindArchiveCanvas();
  document.querySelectorAll<HTMLButtonElement>("[data-demo-mode]").forEach((button) => {
    button.addEventListener("click", enterDemoMode);
  });
  const memoryModal = document.createElement("div");
  memoryModal.className = "memory-page";
  memoryModal.innerHTML = '<div class="invite-modal p-7 md:p-9"><div class="mb-7 flex items-start justify-between gap-5"><div><span class="material-symbols-outlined mb-3 text-3xl text-secondary">add_photo_alternate</span><h2 class="font-display-lg text-3xl font-semibold text-primary">Add a new memory</h2><p class="mt-2 text-sm leading-6 text-on-surface-variant">Preserve a photo, document, recording, or the story behind it.</p></div><button type="button" data-close-memory aria-label="Close dialog" class="rounded-full p-2 text-on-surface-variant"><span class="material-symbols-outlined">close</span></button></div><form class="space-y-5"><div><label class="mb-2 block font-label-md text-label-md text-secondary">Memory title</label><input name="title" required class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="e.g. Sunday at grandmother’s table" /></div><div class="grid grid-cols-2 gap-4"><div><label class="mb-2 block font-label-md text-label-md text-secondary">Type</label><select name="type" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3"><option value="photo">Photo</option><option value="document">Document</option><option value="audio">Audio</option><option value="video">Video</option><option value="letter">Letter</option></select></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Year</label><input name="year" type="number" min="1000" max="2100" class="w-full rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="1958" /></div></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Description</label><textarea name="description" required rows="3" class="w-full resize-none rounded-xl border border-outline-variant/50 bg-transparent px-4 py-3" placeholder="What should your family remember about this?" /></div><div><label class="mb-2 block font-label-md text-label-md text-secondary">Attachment <span class="font-normal text-on-surface-variant">(optional)</span></label><input name="asset" type="file" class="block w-full text-sm text-on-surface-variant" accept="image/*,audio/*,video/*,.pdf,.doc,.docx" /></div><p data-memory-status class="hidden rounded-lg px-4 py-3 text-sm" role="status"></p><div class="flex justify-end gap-3"><button type="button" data-close-memory class="rounded-full border border-secondary px-5 py-3 font-label-md text-label-md text-secondary">Cancel</button><button type="submit" class="rounded-full bg-primary px-6 py-3 font-label-md text-label-md text-on-primary"><span class="material-symbols-outlined mr-2 align-middle text-base">save</span>Save memory</button></div></form></div>';
  memoryModal.innerHTML = `
    <header class="memory-page__topbar">
      <div class="memory-page__brand"><img src="./heritageatlas-mark.svg" alt="" /><span>Heritage Atlas</span></div>
      <button type="button" class="memory-page__close" data-close-memory aria-label="Close memory editor"><span class="material-symbols-outlined">close</span></button>
    </header>
    <main class="memory-page__content">
      <div class="memory-page__heading"><div><p class="atlas-eyebrow">Preserve a moment</p><h2>Add a new memory</h2><p>Capture the context behind a photograph, document, recording, or family story. It will become part of your searchable, explorable archive.</p></div></div>
      <form class="memory-page__form">
        <div class="memory-page__field memory-page__field--wide"><label for="memory-title">Memory title</label><input id="memory-title" name="title" required placeholder="e.g. Sunday at grandmother’s table" /></div>
        <div class="memory-page__field"><label for="memory-type">Type</label><select id="memory-type" name="type"><option value="photo">Photo</option><option value="document">Document</option><option value="audio">Audio</option><option value="video">Video</option><option value="letter">Letter</option></select></div>
        <div class="memory-page__field"><label for="memory-year">Year</label><input id="memory-year" name="year" type="number" min="1000" max="2100" placeholder="1958" /></div>
        <div class="memory-page__field"><label for="memory-location">Location</label><input id="memory-location" name="location" placeholder="e.g. Lusaka, Zambia" /></div>
        <div class="memory-page__field"><label for="memory-date">Date label</label><input id="memory-date" name="dateLabel" placeholder="e.g. August 1958" /></div>
        <div class="memory-page__field memory-page__field--wide"><label for="memory-description">Description</label><textarea id="memory-description" name="description" required placeholder="Tell the story that should travel with this memory."></textarea></div>
        <div class="memory-page__field memory-page__field--wide"><label for="memory-asset">Attachment</label><label class="memory-page__dropzone" for="memory-asset"><span class="material-symbols-outlined">cloud_upload</span><span>Choose a photo, recording, document, or video</span><input id="memory-asset" name="asset" type="file" accept="image/*,audio/*,video/*,.pdf,.doc,.docx" /></label></div>
        <div class="memory-page__footer"><p data-memory-status class="hidden rounded-lg px-4 py-3 text-sm" role="status"></p><div class="memory-page__actions"><button type="button" data-close-memory class="border border-secondary text-secondary">Cancel</button><button type="submit" class="bg-primary text-on-primary"><span class="material-symbols-outlined mr-2 align-middle text-base">save</span>Save memory</button></div></div>
      </form>
    </main>`;
  document.body.append(memoryModal);
  const openMemory = (): void => {
    memoryModal.classList.add("is-open");
    if (demoMode) {
      const status = memoryModal.querySelector<HTMLElement>("[data-memory-status]");
      if (status) { status.textContent = "Demo Mode is read-only. Create an account to preserve a new memory."; status.className = "rounded-lg bg-primary-fixed px-4 py-3 text-sm text-on-primary-fixed-variant"; }
    }
  };
  document.querySelectorAll<HTMLButtonElement>("[data-new-memory]").forEach((button) => button.addEventListener("click", openMemory));
  memoryModal.querySelectorAll<HTMLElement>("[data-close-memory]").forEach((button) => button.addEventListener("click", () => memoryModal.classList.remove("is-open")));
  memoryModal.addEventListener("click", (event) => { if (event.target === memoryModal) memoryModal.classList.remove("is-open"); });
  memoryModal.querySelector("form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const status = memoryModal.querySelector<HTMLElement>("[data-memory-status]");
    if (!form.reportValidity()) return;
    if (demoMode) return;
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
      await addDoc(collection(firestore, `vaults/${vaultId}/memories`), { title: values.get("title"), description: values.get("description"), type: values.get("type"), assetUrl, thumbnailUrl: null, year: Number(values.get("year")) || null, dateLabel: String(values.get("dateLabel") || "").trim() || null, location: String(values.get("location") || "").trim() || null, familyMemberIds: [], tags: [], archived: false, createdBy: firebaseAuth.currentUser.uid, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
      form.reset();
      memoryModal.classList.remove("is-open");
    } catch (error) {
      if (status) { status.textContent = "We could not save this memory. Please try again."; status.className = "rounded-lg bg-error-container px-4 py-3 text-sm text-on-error-container"; }
    } finally { if (submit) { submit.disabled = false; submit.textContent = "Save memory"; } }
  });
  const storySidebar = document.querySelector<HTMLElement>("#story-mode-screen aside");
  if (storySidebar) {
    storySidebar.setAttribute("data-sidebar", "");
    storySidebar.className = "vault-nav hidden flex-col p-6 lg:flex";
  storySidebar.innerHTML = '<div class="mb-10"><img class="brand-logo" src="./heritageatlas-logo.svg" alt="HeritageAtlas" /></div><nav class="flex-1 space-y-2" aria-label="HeritageAtlas navigation"><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#vault" data-dashboard-view="vault"><span class="material-symbols-outlined">inventory_2</span>The Vault</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#family-map" data-dashboard-view="family-map"><span class="material-symbols-outlined">account_tree</span>Family Map</a><a class="vault-nav-link active flex items-center gap-3 rounded-xl px-4 py-3 font-label-md text-label-md" href="#story-mode" data-dashboard-view="story-mode"><span class="material-symbols-outlined">auto_stories</span>Story Mode</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#atlas" data-dashboard-view="atlas"><span class="material-symbols-outlined">auto_awesome</span>HeritageAtlas</a><a class="vault-nav-link flex items-center gap-3 rounded-xl px-4 py-3 text-on-surface-variant" href="#agent" data-dashboard-view="agent"><span class="material-symbols-outlined">smart_toy</span>Agent</a></nav><button data-new-memory class="mb-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-label-md text-label-md text-on-primary shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-container"><span class="material-symbols-outlined">add</span>New memory</button><button class="theme-toggle mb-5" type="button" data-theme-toggle><span class="flex items-center gap-3"><span class="material-symbols-outlined" data-theme-icon>dark_mode</span><span class="font-label-md text-label-md" data-theme-label>Dark mode</span></span><span class="material-symbols-outlined text-base">contrast</span></button><button class="theme-toggle mb-5 text-secondary" type="button" data-logout><span class="flex items-center gap-3"><span class="material-symbols-outlined">logout</span><span class="font-label-md text-label-md">Log out</span></span><span class="material-symbols-outlined text-base">arrow_forward</span></button><div class="border-t border-outline-variant/20 pt-5"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-container text-secondary"><span class="material-symbols-outlined">person</span></div><div><p class="font-label-md text-label-md font-semibold text-primary">Atlas keeper</p><p class="font-caption text-caption text-on-surface-variant">Your private archive</p></div></div></div>';
  }
  renderStoryModeExperience();
  const relativeModal = document.createElement("div");
  relativeModal.className = "relative-page";
  relativeModal.setAttribute("role", "dialog");
  relativeModal.setAttribute("aria-modal", "true");
  relativeModal.setAttribute("aria-labelledby", "relativePageTitle");
  relativeModal.innerHTML = `<header class="relative-page__topbar"><a href="#family-map" class="relative-page__brand" aria-label="Return to family map"><img src="./heritageatlas-mark.svg" alt="" />HeritageAtlas</a><button type="button" data-close-relative class="relative-page__close" aria-label="Return to family map"><span class="material-symbols-outlined">close</span><span>Close editor</span></button></header><main class="relative-page__content"><section class="relative-page__heading"><span class="material-symbols-outlined">account_tree</span><div><h2 id="relativePageTitle">Add a relative</h2><p>Create a person, then connect them to their parent or ancestor. Your relationship line will appear on the Family Map as soon as it is saved.</p></div></section><div class="relative-page__guide"><span><span class="material-symbols-outlined text-base">person_add</span>Describe the person</span><span><span class="material-symbols-outlined text-base">account_tree</span>Connect their branch</span><span><span class="material-symbols-outlined text-base">map</span>See the map update</span></div><form class="relative-page__form"><div class="relative-page__field relative-page__field--wide"><label>Full name</label><input name="fullName" placeholder="e.g. Martha Banda" required /></div><div class="relative-page__field"><label>Relationship</label><input name="relationship" placeholder="e.g. Daughter, grandfather, cousin" required /></div><div class="relative-page__field"><label>Connect to</label><select name="parentId"><option value="">No connection yet — start a new branch</option></select><small>Choose a parent or ancestor to draw a relationship line on the map.</small></div><div class="relative-page__field"><label>Birth year</label><input name="birthYear" type="number" min="1000" max="2100" placeholder="e.g. 1921" /></div><div class="relative-page__field"><label>Death year <span class="normal-case font-normal">(optional)</span></label><input name="deathYear" type="number" min="1000" max="2100" placeholder="e.g. 2008" /></div><div class="relative-page__field relative-page__field--wide"><label>Notes</label><textarea name="notes" placeholder="What should your family remember about this person?"></textarea></div><div class="relative-page__footer"><p data-relative-status class="hidden rounded-lg px-4 py-3 text-sm" role="status"></p><div class="relative-page__actions"><button type="button" data-close-relative class="border border-secondary text-secondary">Cancel</button><button type="submit" class="bg-primary text-on-primary"><span class="material-symbols-outlined mr-2 align-middle text-base">save</span>Save relative</button></div></div></form></main>`;
  standardizeProductName(relativeModal);
  document.body.append(relativeModal);
  const openRelative = (): void => {
    const select = relativeModal.querySelector<HTMLSelectElement>('select[name="parentId"]');
    if (select) {
      select.innerHTML = '<option value="">No connection yet — start a new branch</option>' + familyNodes.map((member) => `<option value="${member.id}">${escapeHtml(member.fullName)} · ${escapeHtml(member.relationship || "Family member")}</option>`).join("");
      select.value = selectedFamilyNodeId ?? "";
    }
    relativeModal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    relativeModal.scrollTo({ top: 0 });
    relativeModal.querySelector<HTMLElement>("[data-close-relative]")?.focus();
    if (demoMode) {
      const status = relativeModal.querySelector<HTMLElement>("[data-relative-status]");
      if (status) { status.textContent = "Demo Mode is read-only. Create an account to add relatives to your own archive."; status.className = "rounded-lg bg-primary-fixed px-4 py-3 text-sm text-on-primary-fixed-variant"; }
    }
  };
  document.addEventListener("heritage:add-relative", openRelative);
  document.querySelectorAll<HTMLButtonElement>("[data-add-relative]").forEach((button) => button.addEventListener("click", openRelative));
  const closeRelative = (): void => { relativeModal.classList.remove("is-open"); document.body.style.overflow = ""; };
  relativeModal.querySelectorAll<HTMLElement>("[data-close-relative]").forEach((button) => button.addEventListener("click", closeRelative));
  relativeModal.querySelector("form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    if (!form.reportValidity()) return;
    if (demoMode) return;
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
      closeRelative();
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
        memoryDetailImage.classList.remove("is-empty");
        memoryDetailImage.setAttribute("aria-label", `${title} memory image`);
      } else {
        memoryDetailImage.style.backgroundImage = "";
        memoryDetailImage.classList.add("is-empty");
        memoryDetailImage.setAttribute("aria-label", "Memory image unavailable");
      }
    }
    if (memoryDetailDateLabel) {
      memoryDetailDateLabel.textContent = year ? `Captured in ${year}` : "Date unknown";
    }
    memoryDetailModal?.classList.add("is-open");
    document.body.style.overflow = "hidden";
    memoryDetailModal?.scrollTo({ top: 0 });
    memoryDetailModal?.querySelector<HTMLElement>("[data-close-memory-detail]")?.focus();
  }
  function closeMemoryDetail(): void {
    memoryDetailModal?.classList.remove("is-open");
    document.body.style.overflow = "";
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
    button.addEventListener("click", closeMemoryDetail);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && memoryDetailModal?.classList.contains("is-open")) closeMemoryDetail();
  });

  initializeSidebars({ onNavigate: (view: SidebarView) => setView(view) });

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

  const storedTheme = localStorage.getItem("heritageatlas-theme") ?? localStorage.getItem("heritagevault-theme");
  const applyTheme = (dark: boolean): void => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
    localStorage.setItem("heritageatlas-theme", dark ? "dark" : "light");
    document.querySelectorAll<HTMLImageElement>(".brand-logo").forEach((logo) => {
      logo.src = logo.hasAttribute("data-logo-inverse") || dark
        ? "/heritageatlas-logo-light.svg"
        : "/heritageatlas-logo.svg";
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

  document.addEventListener("click", (event) => {
    const link = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-dashboard-view]") : null;
    if (!link) return;
    const view = link.dataset.dashboardView as View | undefined;
    if (view !== "vault" && view !== "family-map" && view !== "story-mode" && view !== "atlas" && view !== "agent") return;
    event.preventDefault();
    setView(view);
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
      .then(async ({ user }) => { const displayName = `${firstName} ${lastName}`.trim(); await updateProfile(user, { displayName }); await provisionVault({ ...user, displayName }); applyAuthenticatedIdentity(displayName, user.email); setView("vault"); })
      .catch((error: unknown) => { setAuthButtonState(elements.registerForm, false, "Create my vault"); showAuthError(authMessage(error)); });
  });

  window.addEventListener("popstate", () => {
    const hash = window.location.hash.replace("#", "").split("?")[0] as View;
    setView(hash === "login" || hash === "vault" || hash === "family-map" || hash === "story-mode" || hash === "atlas" || hash === "agent" ? hash : "landing");
  });
}

function boot(): void {
  document.documentElement.dataset.tsRuntime = "true";
  standardizeProductName();
  const atlasScreen = createAtlasScreen(() => setView("vault"));
  elements.storyMode.before(atlasScreen);
  bindAtlas(atlasScreen, loadAtlasDataset);
  const familyMapCanvas = document.querySelector<HTMLElement>("#family-map-screen .family-map-canvas");
  if (familyMapCanvas) {
    familyMapCanvas.innerHTML = '<div class="absolute right-6 top-6 z-20 flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-lg" role="group" aria-label="Family Map controls"><button type="button" data-map-control="in" class="p-3 text-primary transition hover:bg-surface-container-low focus-visible:bg-surface-container-low" aria-label="Zoom in"><span class="material-symbols-outlined">add</span></button><button type="button" data-map-control="out" class="border-t border-outline-variant/20 p-3 text-primary transition hover:bg-surface-container-low focus-visible:bg-surface-container-low" aria-label="Zoom out"><span class="material-symbols-outlined">remove</span></button><button type="button" data-map-control="fit" class="border-t border-outline-variant/20 p-3 text-primary transition hover:bg-surface-container-low focus-visible:bg-surface-container-low" aria-label="Fit family tree to view"><span class="material-symbols-outlined">center_focus_strong</span></button></div><span class="sr-only" aria-live="polite" data-map-zoom-status>Map zoom 100%</span><div data-family-map-stage><svg data-family-connectors class="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true"></svg><div data-family-map-content></div></div>';
    familyMapCanvas.querySelectorAll<HTMLButtonElement>("[data-map-control]").forEach((button) => button.addEventListener("click", () => {
      const action = button.dataset.mapControl;
      setFamilyMapZoom(familyMapCanvas, action === "in" ? familyMapZoom + 0.1 : action === "out" ? familyMapZoom - 0.1 : 1);
    }));
    window.addEventListener("resize", () => drawFamilyConnections(familyMapCanvas));
    renderFamilyMap();
  }
  document.querySelectorAll<HTMLElement>("#family-map-screen .text-2xl").forEach((stat) => { stat.textContent = "—"; });
  const initialHash = window.location.hash.replace("#", "").split("?")[0] as View;
  currentView = initialHash === "login" || initialHash === "vault" || initialHash === "family-map" || initialHash === "story-mode" || initialHash === "atlas" || initialHash === "agent" ? initialHash : "landing";
  setAuthMode(authMode);
  bindInteractions();
  initDemoPolish(setView);
  elements.landing.classList.toggle("is-hidden", currentView !== "landing");
  elements.login.style.display = currentView === "login" ? "flex" : "none";
  elements.vault.style.display = currentView === "vault" ? "flex" : "none";
  elements.familyMap.style.display = currentView === "family-map" ? "flex" : "none";
  elements.storyMode.style.display = currentView === "story-mode" ? "flex" : "none";
  elements.agent.style.display = currentView === "agent" ? "flex" : "none";
  atlasScreen.style.display = currentView === "atlas" ? "flex" : "none";
  if (currentView === "story-mode") document.dispatchEvent(new Event("heritage:story-route"));
  if (currentView === "agent") document.dispatchEvent(new Event("heritage:agent-route"));
  onAuthStateChanged(firebaseAuth, async (user) => {
    if (demoMode) return;
    if (user) {
      try {
        const profile = await getDoc(doc(firestore, "users", user.uid));
        const storedName = profile.data()?.displayName as string | undefined;
        const legacyPlaceholder = storedName?.trim().toLocaleLowerCase() === "amara kabwe";
        applyAuthenticatedIdentity(user.displayName || (legacyPlaceholder ? null : storedName), user.email);
      } catch {
        applyAuthenticatedIdentity(user.displayName, user.email);
      }
      void watchFamilyMap(user.uid);
      if (currentView === "landing") setView("vault");
    } else {
      stopFamilyMap?.();
      familyNodes = [];
      renderFamilyMap();
    }
  });
}

boot();
