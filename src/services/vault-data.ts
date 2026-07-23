import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
  type QueryDocumentSnapshot,
} from "firebase/firestore";
import { firestore } from "../firebase";
import type { FamilyMemberDocument, MemoryDocument, StoryDocument, UserDocument, VaultDocument } from "../types/firestore";

export interface VaultDashboardData {
  vaultId: string;
  vault: VaultDocument;
  memories: Array<MemoryDocument & { id: string }>;
  familyMembers: Array<FamilyMemberDocument & { id: string }>;
  stories: Array<StoryDocument & { id: string }>;
}

const asDocument = <T>(snapshot: QueryDocumentSnapshot): T & { id: string } => ({
  id: snapshot.id,
  ...(snapshot.data() as T),
});

export async function loadVaultDashboard(user: UserDocument): Promise<VaultDashboardData | null> {
  if (!user.defaultVaultId) return null;

  const vaultId = user.defaultVaultId;
  const [vaultSnapshot, memoriesSnapshot, membersSnapshot, storiesSnapshot] = await Promise.all([
    getDoc(doc(firestore, `vaults/${vaultId}`)),
    getDocs(query(collection(firestore, `vaults/${vaultId}/memories`), where("archived", "==", false), orderBy("createdAt", "desc"), limit(12))),
    getDocs(query(collection(firestore, `vaults/${vaultId}/familyMembers`), orderBy("fullName", "asc"))),
    getDocs(query(collection(firestore, `vaults/${vaultId}/stories`), where("status", "==", "published"), orderBy("updatedAt", "desc"), limit(12))),
  ]);

  if (!vaultSnapshot.exists()) return null;

  return {
    vaultId,
    vault: vaultSnapshot.data() as VaultDocument,
    memories: memoriesSnapshot.docs.map((doc) => asDocument<MemoryDocument>(doc)),
    familyMembers: membersSnapshot.docs.map((doc) => asDocument<FamilyMemberDocument>(doc)),
    stories: storiesSnapshot.docs.map((doc) => asDocument<StoryDocument>(doc)),
  };
}
