/**
 * HeritageAtlas Agent — Visualization Spec
 *
 * The contract between the in-browser archive runtime (which interprets a
 * natural-language question against the user's archive and emits a viz spec)
 * and the renderer (which turns the spec into an interactive SVG component).
 *
 * The principle: the agent's response is NEVER a paragraph. It is always a
 * structured `VizSpec` — a chart, map, diagram, or interactive component
 * paired with a one-line caption and optional follow-up prompts.
 */

export type VizKind =
  | "kpi" // big-number stat cards
  | "bar" // vertical / horizontal bar chart
  | "line" // time-series line chart
  | "donut" // donut / pie chart
  | "heatmap" // calendar / matrix heatmap
  | "timeline" // horizontal event timeline
  | "network" // node-link graph (family constellation)
  | "map" // geographic scatter with sized markers
  | "table" // sortable evidence table
  | "compare"; // before/after or A/B comparison

export interface VizSeriesPoint {
  label: string;
  value: number;
  /** Optional secondary dimension (e.g. confidence, count) used for sizing/coloring */
  weight?: number;
  /** Optional group key for stacked/clustered charts */
  group?: string;
  /** Optional drilldown payload — clicking the point can re-prompt the agent */
  drilldown?: string;
}

export interface VizSeries {
  name: string;
  color?: string;
  points: VizSeriesPoint[];
}

export interface VizKpiCard {
  label: string;
  value: string;
  sub?: string;
  trend?: "up" | "down" | "flat";
  icon?: string;
}

export interface VizTimelineEvent {
  year: number;
  label: string;
  detail?: string;
  category?: string;
}

export interface VizNetworkNode {
  id: string;
  label: string;
  group?: string;
  weight?: number;
  meta?: string;
}

export interface VizNetworkEdge {
  from: string;
  to: string;
  label?: string;
  weight?: number;
}

export interface VizMapPoint {
  place: string;
  lat?: number;
  lng?: number;
  count: number;
  /** For map layouts without geo coords, a 0–100 grid position */
  x?: number;
  y?: number;
  drilldown?: string;
}

export interface VizTableRow {
  cells: string[];
  /** Optional drilldown prompt for the row */
  drilldown?: string;
}

export interface VizHeatmapCell {
  row: string;
  col: string;
  value: number;
}

export interface VizSpec {
  kind: VizKind;
  title: string;
  caption: string;
  /** One-line "verdict" the agent has produced — kept short on purpose */
  verdict?: string;
  /** The natural-language prompt that produced this spec */
  prompt: string;
  /** Reserved for future backend evidence (e.g. the query behind this spec) */
  sql?: string;
  /** Optional: how long the agent took (ms) — surfaced in the chat footer */
  elapsedMs?: number;
  /** Optional: data source label (e.g. "Archive · source records") */
  source?: string;

  // Kind-specific payloads — only one is populated per spec
  kpi?: VizKpiCard[];
  series?: VizSeries[];
  events?: VizTimelineEvent[];
  nodes?: VizNetworkNode[];
  edges?: VizNetworkEdge[];
  points?: VizMapPoint[];
  rows?: VizTableRow[];
  headers?: string[];
  heatmap?: VizHeatmapCell[];
  compare?: {
    leftLabel: string;
    rightLabel: string;
    left: VizSeriesPoint[];
    right: VizSeriesPoint[];
  };

  /** Suggested follow-up prompts — clickable chips in the chat */
  followups?: string[];
}

export interface AgentMessage {
  id: string;
  role: "user" | "agent" | "system";
  prompt?: string;
  spec?: VizSpec;
  /** For system/error messages */
  text?: string;
  /** ISO timestamp */
  at: string;
  /** Agent processing phase — only for agent messages while in flight */
  phase?: "queued" | "interpreting" | "querying" | "rendering" | "done" | "error";
}
