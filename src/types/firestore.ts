import type { Timestamp } from "firebase/firestore";

export type FirestoreDate = Timestamp;

export type MemoryType = "photo" | "video" | "audio" | "document" | "letter";
export type StoryStatus = "draft" | "published";
export type ActivityType = "memory_created" | "memory_updated" | "story_created" | "member_added" | "vault_updated";

export interface UserDocument {
  displayName: string;
  email: string;
  photoURL: string | null;
  createdAt: FirestoreDate;
  lastSeenAt: FirestoreDate;
  defaultVaultId: string | null;
}

export interface VaultDocument {
  name: string;
  description: string;
  ownerId: string;
  memberIds: string[];
  coverImageUrl: string | null;
  createdAt: FirestoreDate;
  updatedAt: FirestoreDate;
}

export interface MemoryDocument {
  title: string;
  description: string;
  type: MemoryType;
  assetUrl: string;
  thumbnailUrl: string | null;
  year: number | null;
  dateLabel: string | null;
  location: string | null;
  familyMemberIds: string[];
  tags: string[];
  archived: boolean;
  createdBy: string;
  createdAt: FirestoreDate;
  updatedAt: FirestoreDate;
}

export interface FamilyMemberDocument {
  fullName: string;
  relationship: string | null;
  /** The family member this person is connected to as a child/descendant. */
  parentId?: string | null;
  birthYear: number | null;
  deathYear: number | null;
  portraitUrl: string | null;
  notes: string;
  createdAt: FirestoreDate;
  updatedAt: FirestoreDate;
}

export interface StoryDocument {
  title: string;
  excerpt: string;
  body: string;
  memoryIds: string[];
  status: StoryStatus;
  createdBy: string;
  createdAt: FirestoreDate;
  updatedAt: FirestoreDate;
}

export interface ActivityDocument {
  actorId: string;
  type: ActivityType;
  targetId: string;
  message: string;
  createdAt: FirestoreDate;
}

export type VaultSubcollection = "memories" | "familyMembers" | "stories" | "activity";

export const vaultCollectionPath = (vaultId: string): string => `vaults/${vaultId}`;
export const vaultSubcollectionPath = (vaultId: string, collection: VaultSubcollection): string =>
  `${vaultCollectionPath(vaultId)}/${collection}`;
