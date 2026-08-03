/**
 * ArchiveStore — localStorage-backed CRUD store for HeritageVault.
 *
 * The app is deployed to GitHub Pages (static, no backend). To deliver
 * fully-functional Create / Read / Update / Delete on every "inserted
 * content" type (memories, family members, stories, invitations), this
 * store:
 *   1. Seeds itself from `demoAtlasDataset` on first load.
 *   2. Persists every mutation to localStorage.
 *   3. Emits an `archive:changed` event on every mutation so UI drivers
 *      can re-render against the new snapshot.
 *   4. Auto-records an Activity row for every Create / Update / Delete
 *      so the Vault dashboard activity timeline reflects real user
 *      actions instead of synthesised fake ones.
 *
 * localStorage remains the source of truth — the app is fully self-contained
 * on static hosting, and the Agent computes its visual answers in-browser
 * directly from this store.
 */

import { demoAtlasDataset } from "../demo-data";
import type {
  AtlasDataset,
  AtlasMember,
  AtlasMemory,
  AtlasStory,
} from "../atlas/types";
import type {
  ActivityDocument,
  ActivityType,
  MemoryType,
  StoryStatus,
} from "../types/firestore";

// ── Public types ─────────────────────────────────────────────────────

export interface InvitationRecord {
  id: string;
  email: string;
  message: string;
  status: "pending" | "accepted" | "declined";
  createdAt: number;
}

export interface ActivityRecord extends ActivityDocument {
  id: string;
  createdAt: number; // epoch ms — replaces Firestore Timestamp
}

export interface ArchiveSnapshot {
  vault: AtlasDataset["vault"];
  members: AtlasMember[];
  memories: AtlasMemory[];
  stories: AtlasStory[];
  activities: ActivityRecord[];
  invitations: InvitationRecord[];
}

export type ArchiveChangeKind =
  | "memories"
  | "members"
  | "stories"
  | "activities"
  | "invitations"
  | "all";

export interface ArchiveChangeEvent extends CustomEvent {
  detail: { kind: ArchiveChangeKind; snapshot: ArchiveSnapshot };
}

// ── Internal helpers ─────────────────────────────────────────────────

const STORAGE_KEY = "heritage-vault:archive:v2";
const EVENT_NAME = "archive:changed";

function uid(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2, 8)}`;
}

function now(): number {
  return Date.now();
}

/** Deep clone via JSON — safe for our plain-data records. */
function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

// ── Seed: convert demoAtlasDataset (with null timestamps) to a working
// snapshot with epoch-ms timestamps + empty activities/invitations.
function seedSnapshot(): ArchiveSnapshot {
  const seed = clone(demoAtlasDataset);
  const seededAt = now();
  return {
    vault: seed.vault,
    members: seed.members.map((m) => ({
      ...m,
      createdAt: seededAt,
      updatedAt: seededAt,
    })),
    memories: seed.memories.map((m) => ({
      ...m,
      createdAt: seededAt,
      updatedAt: seededAt,
    })),
    stories: seed.stories.map((s) => ({
      ...s,
      createdAt: seededAt,
      updatedAt: seededAt,
    })),
    activities: [],
    invitations: [],
  };
}

// ── Persistence ──────────────────────────────────────────────────────

function loadFromStorage(): ArchiveSnapshot | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ArchiveSnapshot;
    if (!parsed || !Array.isArray(parsed.members)) return null;
    // Backfill any missing collections (forward-compat).
    if (!parsed.activities) parsed.activities = [];
    if (!parsed.invitations) parsed.invitations = [];
    return parsed;
  } catch {
    return null;
  }
}

function saveToStorage(snapshot: ArchiveSnapshot): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
  } catch (err) {
    console.warn("[archive-store] save failed", err);
  }
}

// ── The store ────────────────────────────────────────────────────────

class ArchiveStore {
  private snapshot: ArchiveSnapshot;
  private listeners: Set<(snapshot: ArchiveSnapshot) => void> = new Set();

  constructor() {
    this.snapshot = loadFromStorage() ?? seedSnapshot();
    saveToStorage(this.snapshot);
  }

  /** Returns a deep clone of the current snapshot. UI must not mutate. */
  getSnapshot(): ArchiveSnapshot {
    return clone(this.snapshot);
  }

  /** Subscribe to changes. Returns an unsubscribe function. */
  subscribe(fn: (snapshot: ArchiveSnapshot) => void): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  /** Force a fresh re-seed (used by "Reset demo data" UI). */
  resetToSeed(): ArchiveSnapshot {
    this.snapshot = seedSnapshot();
    saveToStorage(this.snapshot);
    this.emit("all");
    return this.getSnapshot();
  }

  private emit(kind: ArchiveChangeKind): void {
    saveToStorage(this.snapshot);
    const snapshot = this.getSnapshot();
    if (typeof window !== "undefined") {
      const event: ArchiveChangeEvent = new CustomEvent(EVENT_NAME, {
        detail: { kind, snapshot },
      }) as ArchiveChangeEvent;
      window.dispatchEvent(event);
    }
    this.listeners.forEach((fn) => fn(snapshot));
  }

  private recordActivity(
    type: ActivityType,
    targetId: string,
    message: string,
  ): void {
    const activity: ActivityRecord = {
      id: uid("activity"),
      actorId: "you",
      type,
      targetId,
      message,
      createdAt: now(),
    };
    this.snapshot.activities.unshift(activity);
    // Cap at 50 to keep localStorage lean.
    if (this.snapshot.activities.length > 50) {
      this.snapshot.activities = this.snapshot.activities.slice(0, 50);
    }
  }

  // ── Memories ──────────────────────────────────────────────────────

  listMemories(): AtlasMemory[] {
    return this.snapshot.memories
      .filter((m) => !m.archived)
      .slice()
      .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));
  }

  getMemory(id: string): AtlasMemory | null {
    return this.snapshot.memories.find((m) => m.id === id) ?? null;
  }

  createMemory(
    input: Omit<
      AtlasMemory,
      "id" | "createdAt" | "updatedAt" | "archived" | "createdBy"
    > & { archived?: boolean; createdBy?: string },
  ): AtlasMemory {
    const ts = now();
    const memory: AtlasMemory = {
      id: uid("memory"),
      title: input.title || "Untitled memory",
      description: input.description || "",
      type: input.type || "document",
      assetUrl: input.assetUrl || "",
      thumbnailUrl: input.thumbnailUrl ?? null,
      year: input.year ?? null,
      dateLabel: input.dateLabel ?? null,
      location: input.location ?? null,
      familyMemberIds: input.familyMemberIds ?? [],
      tags: input.tags ?? [],
      archived: input.archived ?? false,
      createdBy: input.createdBy ?? "you",
      createdAt: ts,
      updatedAt: ts,
    };
    this.snapshot.memories.push(memory);
    this.recordActivity(
      "memory_created",
      memory.id,
      `Added “${memory.title}” to the archive.`,
    );
    this.emit("memories");
    return clone(memory);
  }

  updateMemory(
    id: string,
    patch: Partial<AtlasMemory>,
  ): AtlasMemory | null {
    const idx = this.snapshot.memories.findIndex((m) => m.id === id);
    if (idx === -1) return null;
    const updated: AtlasMemory = {
      ...this.snapshot.memories[idx],
      ...patch,
      id,
      updatedAt: now(),
    };
    this.snapshot.memories[idx] = updated;
    this.recordActivity(
      "memory_updated",
      id,
      `Updated “${updated.title}”.`,
    );
    this.emit("memories");
    return clone(updated);
  }

  deleteMemory(id: string): boolean {
    const idx = this.snapshot.memories.findIndex((m) => m.id === id);
    if (idx === -1) return false;
    const [removed] = this.snapshot.memories.splice(idx, 1);
    this.recordActivity(
      "memory_updated",
      id,
      `Removed “${removed.title}” from the archive.`,
    );
    this.emit("memories");
    return true;
  }

  // ── Members ───────────────────────────────────────────────────────

  listMembers(): AtlasMember[] {
    return clone(this.snapshot.members);
  }

  getMember(id: string): AtlasMember | null {
    return this.snapshot.members.find((m) => m.id === id) ?? null;
  }

  createMember(
    input: Omit<AtlasMember, "id" | "createdAt" | "updatedAt">,
  ): AtlasMember {
    const ts = now();
    const member: AtlasMember = {
      id: uid("member"),
      fullName: input.fullName || "Unnamed relative",
      relationship: input.relationship ?? null,
      parentId: input.parentId ?? null,
      birthYear: input.birthYear ?? null,
      deathYear: input.deathYear ?? null,
      portraitUrl: input.portraitUrl ?? null,
      notes: input.notes ?? "",
      createdAt: ts,
      updatedAt: ts,
    };
    this.snapshot.members.push(member);
    this.snapshot.vault.memberIds.push(member.id);
    this.recordActivity(
      "member_added",
      member.id,
      `Added ${member.fullName} to the family map.`,
    );
    this.emit("members");
    return clone(member);
  }

  updateMember(
    id: string,
    patch: Partial<AtlasMember>,
  ): AtlasMember | null {
    const idx = this.snapshot.members.findIndex((m) => m.id === id);
    if (idx === -1) return null;
    const updated: AtlasMember = {
      ...this.snapshot.members[idx],
      ...patch,
      id,
      updatedAt: now(),
    };
    this.snapshot.members[idx] = updated;
    this.recordActivity(
      "member_added",
      id,
      `Updated ${updated.fullName}’s profile.`,
    );
    this.emit("members");
    return clone(updated);
  }

  deleteMember(id: string): boolean {
    const idx = this.snapshot.members.findIndex((m) => m.id === id);
    if (idx === -1) return false;
    const [removed] = this.snapshot.members.splice(idx, 1);
    // Also unset any children's parentId that pointed here.
    this.snapshot.members.forEach((m) => {
      if (m.parentId === id) m.parentId = null;
    });
    // And remove from vault.memberIds.
    this.snapshot.vault.memberIds = this.snapshot.vault.memberIds.filter(
      (x) => x !== id,
    );
    this.recordActivity(
      "member_added",
      id,
      `Removed ${removed.fullName} from the family map.`,
    );
    this.emit("members");
    return true;
  }

  // ── Stories ───────────────────────────────────────────────────────

  listStories(): AtlasStory[] {
    return clone(this.snapshot.stories);
  }

  getStory(id: string): AtlasStory | null {
    return this.snapshot.stories.find((s) => s.id === id) ?? null;
  }

  createStory(
    input: Omit<AtlasStory, "id" | "createdAt" | "updatedAt">,
  ): AtlasStory {
    const ts = now();
    const story: AtlasStory = {
      id: uid("story"),
      title: input.title || "Untitled chapter",
      excerpt: input.excerpt || "",
      body: input.body || "",
      memoryIds: input.memoryIds ?? [],
      status: input.status ?? ("draft" as StoryStatus),
      createdBy: input.createdBy ?? "you",
      createdAt: ts,
      updatedAt: ts,
    };
    this.snapshot.stories.push(story);
    this.recordActivity(
      "story_created",
      story.id,
      `Started a new chapter: “${story.title}”.`,
    );
    this.emit("stories");
    return clone(story);
  }

  updateStory(
    id: string,
    patch: Partial<AtlasStory>,
  ): AtlasStory | null {
    const idx = this.snapshot.stories.findIndex((s) => s.id === id);
    if (idx === -1) return null;
    const updated: AtlasStory = {
      ...this.snapshot.stories[idx],
      ...patch,
      id,
      updatedAt: now(),
    };
    this.snapshot.stories[idx] = updated;
    this.recordActivity(
      "story_created",
      id,
      `Updated “${updated.title}”.`,
    );
    this.emit("stories");
    return clone(updated);
  }

  deleteStory(id: string): boolean {
    const idx = this.snapshot.stories.findIndex((s) => s.id === id);
    if (idx === -1) return false;
    const [removed] = this.snapshot.stories.splice(idx, 1);
    this.recordActivity(
      "story_created",
      id,
      `Removed the chapter “${removed.title}”.`,
    );
    this.emit("stories");
    return true;
  }

  // ── Activities ────────────────────────────────────────────────────

  listActivities(limit = 20): ActivityRecord[] {
    return this.snapshot.activities.slice(0, limit);
  }

  // ── Invitations ───────────────────────────────────────────────────

  listInvitations(): InvitationRecord[] {
    return clone(this.snapshot.invitations);
  }

  createInvitation(
    email: string,
    message = "",
  ): InvitationRecord {
    const invite: InvitationRecord = {
      id: uid("invite"),
      email,
      message,
      status: "pending",
      createdAt: now(),
    };
    this.snapshot.invitations.unshift(invite);
    this.recordActivity(
      "vault_updated",
      invite.id,
      `Invited ${email} to join the vault.`,
    );
    this.emit("invitations");
    return clone(invite);
  }

  updateInvitation(
    id: string,
    patch: Partial<InvitationRecord>,
  ): InvitationRecord | null {
    const idx = this.snapshot.invitations.findIndex((i) => i.id === id);
    if (idx === -1) return null;
    this.snapshot.invitations[idx] = {
      ...this.snapshot.invitations[idx],
      ...patch,
      id,
    };
    this.emit("invitations");
    return clone(this.snapshot.invitations[idx]);
  }

  deleteInvitation(id: string): boolean {
    const idx = this.snapshot.invitations.findIndex((i) => i.id === id);
    if (idx === -1) return false;
    this.snapshot.invitations.splice(idx, 1);
    this.emit("invitations");
    return true;
  }
}

// ── Singleton ────────────────────────────────────────────────────────

export const archiveStore = new ArchiveStore();

// ── Convenience: subscribe helper for UI drivers ─────────────────────

export function onArchiveChange(
  fn: (snapshot: ArchiveSnapshot) => void,
): () => void {
  return archiveStore.subscribe(fn);
}

export function getArchiveSnapshot(): ArchiveSnapshot {
  return archiveStore.getSnapshot();
}

// Re-export types that UI drivers need:
export type {
  AtlasMemory,
  AtlasMember,
  AtlasStory,
  MemoryType,
  StoryStatus,
};
