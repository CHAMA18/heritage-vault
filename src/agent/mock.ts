/**
 * HeritageAtlas Agent — Browser-side Mock Runtime
 *
 * Computes VizSpecs from the archive dataset using a deterministic intent
 * interpreter. This is the in-browser archive runtime: every answer is
 * derived from the user's archive (memories, members, relationships) with no
 * external database or backend.
 */
import type { AtlasDataset } from "../atlas/types";
import type { VizSpec } from "./spec";

/** Deterministic intent interpreter shared by the Agent and Atlas views. */
export type AgentIntent =
  | "timeline"
  | "geography"
  | "people"
  | "evidence"
  | "decades"
  | "types"
  | "compare_decades"
  | "oldest"
  | "newest"
  | "overview";

export interface Interpretation {
  intent: AgentIntent;
  terms: string[];
  decade?: number;
  person?: string;
  place?: string;
}

const STOPWORDS = new Set([
  "the", "a", "an", "of", "to", "in", "on", "at", "by", "for", "with",
  "about", "show", "tell", "give", "me", "my", "our", "their", "family",
  "what", "when", "where", "who", "which", "how", "and", "or", "is", "are",
  "was", "were", "be", "been", "from", "that", "this", "these", "those",
  "across", "between", "during", "over", "under", "into",
]);

const KNOWN_PEOPLE = new Set([
  "Samuel", "Beatrice", "Martha", "Joseph", "Agnes", "Edward",
  "Ruth", "Daniel", "Chungu", "Tapiwa", "Linda", "Miles",
  "Nandi", "Malia", "Theo",
]);

export function interpret(prompt: string): Interpretation {
  const lower = prompt.toLowerCase();
  const terms = (lower.match(/[a-z]{3,}/g) ?? []).filter((t) => !STOPWORDS.has(t));

  let intent: AgentIntent = "overview";
  if (/\b(timeline|chronolog|over time|by year|years|decades?)\b/.test(lower)) {
    intent = "timeline";
  } else if (/\b(map|where|place|location|geograph|countr|cit(y|ies))\b/.test(lower)) {
    intent = "geography";
  } else if (/\b(people|person|relative|member|family tree|constellation|connected)\b/.test(lower)) {
    intent = "people";
  } else if (/\b(evidence|source|proof|records?)\b/.test(lower)) {
    intent = "evidence";
  } else if (/\b(decade|1950s|1960s|1970s|1980s|1990s|2000s|2010s|2020s)\b/.test(lower)) {
    intent = "decades";
  } else if (/\b(type|kind|photo|letter|audio|video|document|format)\b/.test(lower)) {
    intent = "types";
  } else if (/\b(oldest|earliest|first|beginning)\b/.test(lower)) {
    intent = "oldest";
  } else if (/\b(newest|latest|last|recent)\b/.test(lower)) {
    intent = "newest";
  } else if (/\b(compare|versus|vs|against|difference)\b/.test(lower)) {
    intent = "compare_decades";
  }

  const decadeMatch = lower.match(/\b(18|19|20|21)(\d0)s?\b/);
  const decade = decadeMatch ? parseInt(`${decadeMatch[1]}${decadeMatch[2]}`, 10) : undefined;

  const personMatch = prompt.match(/\b([A-Z][a-z]+)\b/);
  const person = personMatch && KNOWN_PEOPLE.has(personMatch[1]) ? personMatch[1] : undefined;

  const placeMatch = prompt.match(/\b(Livingstone|Lusaka|Mongu|Kabwe|Ndola|Kitwe|Harare|Bulawayo)\b/);
  const place = placeMatch ? placeMatch[1] : undefined;

  return { intent, terms, decade, person, place };
}

/** Approximate lat/lng for the known places (used by the map renderer). */
const PLACE_GEO: Record<string, { lat: number; lng: number }> = {
  Livingstone: { lat: -17.85, lng: 25.86 },
  Lusaka: { lat: -15.39, lng: 28.33 },
  Mongu: { lat: -15.28, lng: 23.13 },
  Kabwe: { lat: -14.45, lng: 28.45 },
  Ndola: { lat: -12.96, lng: 28.64 },
  Kitwe: { lat: -12.82, lng: 28.20 },
  Harare: { lat: -17.83, lng: 31.05 },
  Bulawayo: { lat: -20.15, lng: 28.58 },
};

function decadeOf(year: number): number {
  return Math.floor(year / 10) * 10;
}

/** Build a VizSpec from the demo dataset using the same intent contract. */
export function buildSpec(dataset: AtlasDataset, prompt: string): VizSpec {
  const interp = interpret(prompt);
  const memories = dataset.memories;
  const members = dataset.members;

  switch (interp.intent) {
    case "timeline": {
      const byYear = new Map<number, number>();
      memories.forEach((m) => {
        if (m.year) byYear.set(m.year, (byYear.get(m.year) ?? 0) + 1);
      });
      const years = [...byYear.keys()].sort((a, b) => a - b);
      const peak = years.reduce(
        (a, b) => ((byYear.get(a) ?? 0) > (byYear.get(b) ?? 0) ? a : b),
        years[0] ?? 0
      );
      return {
        kind: "line",
        title: "Memories across time",
        caption: `Memory density by year${interp.decade ? ` · ${interp.decade}s` : ""}.`,
        verdict: `${years.length} years with preserved memories, peaking in ${peak}.`,
        prompt,
        source: "Archive · memories by year",
        series: [
          {
            name: "Memories",
            color: "#2c3a2e",
            points: years.map((y) => ({
              label: String(y),
              value: byYear.get(y) ?? 0,
              drilldown: `What happened in ${y}?`,
            })),
          },
        ],
        followups: [
          "Where did these memories happen?",
          "Who appears most often in this period?",
          "What kinds of memories are these?",
        ],
      };
    }

    case "geography": {
      const byPlace = new Map<string, number>();
      memories.forEach((m) => {
        if (!m.location) return;
        byPlace.set(m.location, (byPlace.get(m.location) ?? 0) + 1);
      });
      const places = [...byPlace.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 12);
      return {
        kind: "map",
        title: "Where the archive lives",
        caption: "Memory density by location.",
        verdict: `${places.length} places appear in your archive, led by ${places[0]?.[0] ?? "—"}.`,
        prompt,
        source: "Archive · memory locations",
        points: places.map(([place, count]) => ({
          place,
          count,
          lat: PLACE_GEO[place]?.lat,
          lng: PLACE_GEO[place]?.lng,
          drilldown: `Show me memories from ${place}`,
        })),
        followups: [
          "Show me the timeline for these places",
          "Which people are tied to these locations?",
          "Compare locations by decade",
        ],
      };
    }

    case "people": {
      // Count memories per person
      const memCount = new Map<string, number>();
      memories.forEach((m) => {
        m.familyMemberIds?.forEach((id) => {
          memCount.set(id, (memCount.get(id) ?? 0) + 1);
        });
      });
      // Build edges from parentId
      const edges = members
        .filter((m) => m.parentId)
        .map((m) => ({
          from: m.parentId!,
          to: m.id,
          label: "parent → child",
          weight: 1,
        }));
      return {
        kind: "network",
        title: "Your family constellation",
        caption: "People in the archive, connected by recorded relationships.",
        verdict: `${members.length} people, ${edges.length} recorded parent-child edges.`,
        prompt,
        source: "Archive · people + relationships",
        nodes: members.map((m) => ({
          id: m.id,
          label: m.fullName,
          group: m.relationship ?? undefined,
          weight: memCount.get(m.id) ?? 0,
          meta: m.notes ?? undefined,
        })),
        edges,
        followups: [
          "Show me the oldest person in the archive",
          "Who is most connected?",
          "Timeline for Samuel Banda",
        ],
      };
    }

    case "evidence": {
      const rows = memories
        .filter((m) => !interp.person || m.familyMemberIds?.some((id) => {
          const mem = members.find((mm) => mm.id === id);
          return mem?.fullName.startsWith(interp.person!);
        }))
        .filter((m) => !interp.place || m.location === interp.place)
        .sort((a, b) => (a.year ?? 0) - (b.year ?? 0))
        .slice(0, 12);
      return {
        kind: "table",
        title: "Source evidence",
        caption: `Traceable records${interp.person ? ` mentioning ${interp.person}` : ""}.`,
        verdict: `${rows.length} records, each linkable back to its source.`,
        prompt,
        source: "Archive · source records",
        headers: ["Year", "Title", "Location", "Kind"],
        rows: rows.map((r) => ({
          cells: [
            r.year ? String(r.year) : "—",
            r.title,
            r.location ?? "—",
            r.type,
          ],
          drilldown: `Tell me more about "${r.title}"`,
        })),
        followups: [
          "Show me the oldest evidence",
          "Group this evidence by type",
          "Map this evidence by location",
        ],
      };
    }

    case "decades": {
      const byDecade = new Map<number, number>();
      memories.forEach((m) => {
        if (m.year) byDecade.set(decadeOf(m.year), (byDecade.get(decadeOf(m.year)) ?? 0) + 1);
      });
      const decades = [...byDecade.keys()].sort((a, b) => a - b);
      const peak = decades.reduce(
        (a, b) => ((byDecade.get(a) ?? 0) > (byDecade.get(b) ?? 0) ? a : b),
        decades[0] ?? 0
      );
      return {
        kind: "bar",
        title: "Memories by decade",
        caption: "How the archive grew, in ten-year windows.",
        verdict: `${decades.length} decades represented; the ${peak}s is the densest.`,
        prompt,
        source: "Archive · memories by year",
        series: [
          {
            name: "Memories",
            color: "#c0623a",
            points: decades.map((d) => ({
              label: `${d}s`,
              value: byDecade.get(d) ?? 0,
              drilldown: `Show me memories from the ${d}s`,
            })),
          },
        ],
        followups: [
          "What happened in the busiest decade?",
          "Compare two decades side by side",
          "Show me the timeline in detail",
        ],
      };
    }

    case "types": {
      const byType = new Map<string, number>();
      memories.forEach((m) => byType.set(m.type, (byType.get(m.type) ?? 0) + 1));
      const types = [...byType.entries()].sort((a, b) => b[1] - a[1]);
      return {
        kind: "donut",
        title: "What kinds of memories",
        caption: "The archive broken down by record type.",
        verdict: `${types.length} record types; ${types[0]?.[0] ?? "—"} is the most common.`,
        prompt,
        source: "Archive · source records",
        series: [
          {
            name: "Records",
            points: types.map(([label, value]) => ({ label, value })),
          },
        ],
        followups: [
          "Show me only the letters",
          "Timeline of audio memories",
          "Who appears in the most photographs?",
        ],
      };
    }

    case "oldest":
    case "newest": {
      const sorted = memories
        .filter((m) => m.year !== null)
        .sort((a, b) =>
          interp.intent === "oldest"
            ? (a.year! - b.year!)
            : (b.year! - a.year!)
        )
        .slice(0, 6);
      return {
        kind: "timeline",
        title:
          interp.intent === "oldest" ? "The earliest memories" : "The most recent memories",
        caption: `The ${interp.intent === "oldest" ? "oldest" : "newest"} preserved records.`,
        verdict: sorted.length
          ? `${interp.intent === "oldest" ? "Earliest" : "Newest"}: ${sorted[0].year} · ${sorted[0].title}`
          : "No dated memories yet.",
        prompt,
        source: "Archive · source records",
        events: sorted.map((m) => ({
          year: m.year!,
          label: m.title,
          detail: m.description ?? undefined,
          category: m.type,
        })),
        followups: [
          "Show me the timeline for these years",
          "Where did these memories happen?",
          "Who is in these memories?",
        ],
      };
    }

    case "compare_decades": {
      const byDecade = new Map<number, Map<string, number>>();
      memories.forEach((m) => {
        if (!m.year) return;
        const d = decadeOf(m.year);
        if (!byDecade.has(d)) byDecade.set(d, new Map());
        byDecade.get(d)!.set(m.type, (byDecade.get(d)!.get(m.type) ?? 0) + 1);
      });
      const decades = [...byDecade.keys()].sort((a, b) => a - b);
      const first = decades[0];
      const last = decades[decades.length - 1];
      return {
        kind: "compare",
        title: "Decade by decade",
        caption: `Comparing the ${first}s and the ${last}s, side by side.`,
        verdict: `${decades.length} decades compared across ${memories.length} records.`,
        prompt,
        source: "Archive · source records",
        compare: {
          leftLabel: `${first}s`,
          rightLabel: `${last}s`,
          left: [...byDecade.get(first)!.entries()].map(([label, value]) => ({ label, value })),
          right: [...byDecade.get(last)!.entries()].map(([label, value]) => ({ label, value })),
        },
        followups: [
          "Show me the timeline for these decades",
          "Which decade had the most letters?",
          "Map the earliest decade",
        ],
      };
    }

    case "overview":
    default: {
      const years = new Set(memories.map((m) => m.year).filter((y): y is number => y !== null));
      const places = new Set(memories.map((m) => m.location).filter(Boolean));
      return {
        kind: "kpi",
        title: "Your archive at a glance",
        caption: "The shape of your family's preserved story.",
        verdict: `${memories.length} memories across ${years.size} years and ${places.size} places.`,
        prompt,
        source: "Archive · source records",
        kpi: [
          { label: "Memories", value: String(memories.length), icon: "inventory_2", trend: "up" },
          { label: "People", value: String(members.length), icon: "group", trend: "flat" },
          { label: "Years covered", value: String(years.size), icon: "calendar_month", trend: "up" },
          { label: "Places", value: String(places.size), icon: "location_on", trend: "flat" },
        ],
        followups: [
          "Show me the timeline",
          "Where did these memories happen?",
          "Who appears most often?",
          "What kinds of memories are these?",
        ],
      };
    }
  }
}
