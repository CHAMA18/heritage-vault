import type { FamilyMemberDocument, MemoryDocument, StoryDocument, VaultDocument } from "../types/firestore";

export type AtlasMember = FamilyMemberDocument & { id: string };
export type AtlasMemory = MemoryDocument & { id: string };
export type AtlasStory = StoryDocument & { id: string };

export interface AtlasDataset {
  vault: VaultDocument;
  members: AtlasMember[];
  memories: AtlasMemory[];
  stories: AtlasStory[];
}

export interface AtlasAnswer {
  prompt: string;
  verdict: string;
  memories: AtlasMemory[];
  members: AtlasMember[];
  years: number[];
  locations: Array<{ name: string; count: number }>;
  evidence: Array<{ title: string; detail: string; kind: string; year: number | null }>;
}
