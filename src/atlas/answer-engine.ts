import type { AtlasAnswer, AtlasDataset, AtlasMemory } from "./types";

const normalise = (value: string): string => value.toLocaleLowerCase();

function matches(memory: AtlasMemory, terms: string[]): boolean {
  if (!terms.length) return true;
  const haystack = normalise([memory.title, memory.description, memory.location ?? "", ...(memory.tags ?? [])].join(" "));
  return terms.some((term) => haystack.includes(term));
}

export function buildAtlasAnswer(dataset: AtlasDataset, prompt: string): AtlasAnswer {
  const terms = normalise(prompt).match(/[a-z]{3,}/g)?.filter((term) => !["about", "family", "their", "show", "tell", "with", "from", "that", "this", "what", "where", "when"].includes(term)) ?? [];
  const matchingMemories = dataset.memories.filter((memory) => matches(memory, terms));
  const memories = matchingMemories.length ? matchingMemories : dataset.memories;
  const years = [...new Set(memories.map((memory) => memory.year).filter((year): year is number => year !== null))].sort((a, b) => a - b);
  const locationCounts = new Map<string, number>();
  memories.forEach((memory) => {
    if (!memory.location?.trim()) return;
    locationCounts.set(memory.location, (locationCounts.get(memory.location) ?? 0) + 1);
  });
  const locations = [...locationCounts.entries()].map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);
  const focus = terms.length ? `matching “${terms.join(" ")}”` : "across your archive";
  const verdict = memories.length
    ? `${memories.length} ${memories.length === 1 ? "memory" : "memories"} ${focus}, connected to ${dataset.members.length} family member${dataset.members.length === 1 ? "" : "s"}.`
    : "Your visual answer will appear here as soon as your vault contains memories or family members.";

  return {
    prompt,
    verdict,
    memories,
    members: dataset.members,
    years,
    locations,
    evidence: memories.slice(0, 6).map((memory) => ({ title: memory.title, detail: memory.description || "A preserved family memory.", kind: memory.type, year: memory.year })),
  };
}
