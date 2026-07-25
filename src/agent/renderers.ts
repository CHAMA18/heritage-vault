/**
 * HeritageAtlas Agent — Renderers
 *
 * Each renderer takes a VizSpec and returns an HTML string (SVG + interactivity
 * hooks). All charts are hand-rolled SVG — no chart library — so the bundle
 * stays small and every pixel is designable. Interactions (hover, click) are
 * wired up after insertion by `bindInteractions()` in `chat.ts`.
 */
import type {
  VizSpec,
  VizSeries,
  VizKpiCard,
  VizNetworkNode,
  VizNetworkEdge,
  VizTableRow,
  VizHeatmapCell,
} from "./spec";

const PALETTE = [
  "#2c3a2e", // forest
  "#c0623a", // terracotta
  "#d4a44c", // amber
  "#6f8266", // moss
  "#b5c4a8", // sage
  "#d98865", // terracotta-soft
  "#3a4a3c", // forest-deep
  "#8a6456", // brown
];

const esc = (s: string | number | undefined | null): string => {
  if (s === null || s === undefined) return "";
  const el = document.createElement("span");
  el.textContent = String(s);
  return el.innerHTML;
};

/* ── KPI cards ─────────────────────────────────────────────────────── */
export function renderKpi(spec: VizSpec): string {
  const cards = spec.kpi ?? [];
  return `
    <div class="hv-agent__kpi-grid">
      ${cards
        .map((card: VizKpiCard) => {
          const trendIcon =
            card.trend === "up"
              ? '<span class="material-symbols-outlined hv-agent__trend hv-agent__trend--up">trending_up</span>'
              : card.trend === "down"
              ? '<span class="material-symbols-outlined hv-agent__trend hv-agent__trend--down">trending_down</span>'
              : "";
          return `
            <div class="hv-agent__kpi-card">
              <div class="hv-agent__kpi-top">
                <span class="material-symbols-outlined hv-agent__kpi-icon">${esc(card.icon ?? "stats")}</span>
                ${trendIcon}
              </div>
              <div class="hv-agent__kpi-value">${esc(card.value)}</div>
              <div class="hv-agent__kpi-label">${esc(card.label)}</div>
              ${card.sub ? `<div class="hv-agent__kpi-sub">${esc(card.sub)}</div>` : ""}
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

/* ── Bar chart ─────────────────────────────────────────────────────── */
export function renderBar(spec: VizSpec): string {
  const series = spec.series ?? [];
  if (!series.length) return emptyState("No data");
  const points = series[0].points;
  const max = Math.max(...points.map((p) => p.value), 1);
  const W = 720;
  const H = 320;
  const padL = 48;
  const padR = 24;
  const padT = 24;
  const padB = 56;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const barW = (plotW / points.length) * 0.62;
  const gap = (plotW / points.length) * 0.38;

  // Y-axis gridlines (5 steps)
  const gridlines = Array.from({ length: 5 }, (_, i) => {
    const v = Math.round((max / 4) * i);
    const y = padT + plotH - (v / max) * plotH;
    return { v, y };
  });

  return `
    <svg class="hv-agent__chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${esc(spec.title)}">
      ${gridlines
        .map(
          (g) => `
          <line x1="${padL}" y1="${g.y}" x2="${W - padR}" y2="${g.y}" stroke="rgba(28,32,24,0.08)" stroke-width="1" />
          <text x="${padL - 8}" y="${g.y + 4}" text-anchor="end" font-size="11" fill="#6b7060">${g.v}</text>
        `
        )
        .join("")}
      ${points
        .map((p, i) => {
          const x = padL + i * (barW + gap) + gap / 2;
          const h = (p.value / max) * plotH;
          const y = padT + plotH - h;
          const color = PALETTE[i % PALETTE.length];
          return `
            <g class="hv-agent__bar" data-drilldown="${esc(p.drilldown)}" data-label="${esc(p.label)}" data-value="${esc(p.value)}">
              <rect x="${x}" y="${y}" width="${barW}" height="${h}" rx="6" ry="6" fill="${color}" opacity="0.9">
                <animate attributeName="height" from="0" to="${h}" dur="0.6s" fill="freeze" begin="${i * 0.06}s" />
                <animate attributeName="y" from="${padT + plotH}" to="${y}" dur="0.6s" fill="freeze" begin="${i * 0.06}s" />
              </rect>
              <text x="${x + barW / 2}" y="${padT + plotH + 22}" text-anchor="middle" font-size="11" fill="#3a3f33">${esc(p.label)}</text>
              <text x="${x + barW / 2}" y="${y - 6}" text-anchor="middle" font-size="11" font-weight="600" fill="#1d2018">${esc(p.value)}</text>
            </g>
          `;
        })
        .join("")}
      <line x1="${padL}" y1="${padT + plotH}" x2="${W - padR}" y2="${padT + plotH}" stroke="rgba(28,32,24,0.18)" stroke-width="1.5" />
    </svg>
  `;
}

/* ── Line chart ────────────────────────────────────────────────────── */
export function renderLine(spec: VizSpec): string {
  const series = spec.series ?? [];
  if (!series.length) return emptyState("No data");
  const points = series[0].points;
  if (points.length < 2) return emptyState("Need at least 2 points");
  const max = Math.max(...points.map((p) => p.value), 1);
  const W = 720;
  const H = 320;
  const padL = 48;
  const padR = 24;
  const padT = 24;
  const padB = 56;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const xStep = plotW / (points.length - 1);

  const gridlines = Array.from({ length: 5 }, (_, i) => {
    const v = Math.round((max / 4) * i);
    const y = padT + plotH - (v / max) * plotH;
    return { v, y };
  });

  const path = points
    .map((p, i) => {
      const x = padL + i * xStep;
      const y = padT + plotH - (p.value / max) * plotH;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  const area = `${path} L ${padL + (points.length - 1) * xStep} ${padT + plotH} L ${padL} ${padT + plotH} Z`;

  return `
    <svg class="hv-agent__chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${esc(spec.title)}">
      <defs>
        <linearGradient id="hv-agent-line-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2c3a2e" stop-opacity="0.28" />
          <stop offset="100%" stop-color="#2c3a2e" stop-opacity="0" />
        </linearGradient>
      </defs>
      ${gridlines
        .map(
          (g) => `
          <line x1="${padL}" y1="${g.y}" x2="${W - padR}" y2="${g.y}" stroke="rgba(28,32,24,0.08)" stroke-width="1" />
          <text x="${padL - 8}" y="${g.y + 4}" text-anchor="end" font-size="11" fill="#6b7060">${g.v}</text>
        `
        )
        .join("")}
      <path d="${area}" fill="url(#hv-agent-line-grad)" />
      <path d="${path}" fill="none" stroke="#2c3a2e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <animate attributeName="stroke-dasharray" from="0 2000" to="2000 0" dur="1s" fill="freeze" />
      </path>
      ${points
        .map((p, i) => {
          const x = padL + i * xStep;
          const y = padT + plotH - (p.value / max) * plotH;
          return `
            <g class="hv-agent__point" data-drilldown="${esc(p.drilldown)}" data-label="${esc(p.label)}" data-value="${esc(p.value)}">
              <circle cx="${x}" cy="${y}" r="4" fill="#fbf5ec" stroke="#2c3a2e" stroke-width="2">
                <animate attributeName="r" from="0" to="4" dur="0.4s" fill="freeze" begin="${0.8 + i * 0.04}s" />
              </circle>
              ${i % Math.max(1, Math.floor(points.length / 8)) === 0 ? `<text x="${x}" y="${padT + plotH + 22}" text-anchor="middle" font-size="11" fill="#3a3f33">${esc(p.label)}</text>` : ""}
            </g>
          `;
        })
        .join("")}
      <line x1="${padL}" y1="${padT + plotH}" x2="${W - padR}" y2="${padT + plotH}" stroke="rgba(28,32,24,0.18)" stroke-width="1.5" />
    </svg>
  `;
}

/* ── Donut chart ───────────────────────────────────────────────────── */
export function renderDonut(spec: VizSpec): string {
  const series = spec.series ?? [];
  if (!series.length) return emptyState("No data");
  const points = series[0].points;
  const total = points.reduce((sum, p) => sum + p.value, 0);
  if (total === 0) return emptyState("No data");

  const cx = 180;
  const cy = 180;
  const r = 130;
  const innerR = 78;

  let angle = -Math.PI / 2;
  const slices = points.map((p, i) => {
    const slice = (p.value / total) * Math.PI * 2;
    const startAngle = angle;
    const endAngle = angle + slice;
    angle = endAngle;

    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);
    const xi1 = cx + innerR * Math.cos(endAngle);
    const yi1 = cy + innerR * Math.sin(endAngle);
    const xi2 = cx + innerR * Math.cos(startAngle);
    const yi2 = cy + innerR * Math.sin(startAngle);
    const largeArc = slice > Math.PI ? 1 : 0;
    const path = `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} L ${xi1} ${yi1} A ${innerR} ${innerR} 0 ${largeArc} 0 ${xi2} ${yi2} Z`;
    const midAngle = (startAngle + endAngle) / 2;
    const labelR = (r + innerR) / 2;
    const lx = cx + labelR * Math.cos(midAngle);
    const ly = cy + labelR * Math.sin(midAngle);
    const pct = Math.round((p.value / total) * 100);
    return { path, color: PALETTE[i % PALETTE.length], label: p.label, value: p.value, pct, lx, ly };
  });

  return `
    <div class="hv-agent__donut-wrap">
      <svg class="hv-agent__chart hv-agent__donut" viewBox="0 0 360 360" preserveAspectRatio="xMidYMid meet" role="img" aria-label="${esc(spec.title)}">
        ${slices
          .map(
            (s, i) => `
            <g class="hv-agent__slice" data-label="${esc(s.label)}" data-value="${esc(s.value)}" data-pct="${esc(s.pct)}">
              <path d="${s.path}" fill="${s.color}" opacity="0.92">
                <animate attributeName="opacity" from="0" to="0.92" dur="0.5s" fill="freeze" begin="${i * 0.08}s" />
              </path>
              ${s.pct >= 8 ? `<text x="${s.lx}" y="${s.ly}" text-anchor="middle" font-size="13" font-weight="600" fill="#fbf5ec">${s.pct}%</text>` : ""}
            </g>
          `
          )
          .join("")}
        <text x="${cx}" y="${cy - 6}" text-anchor="middle" font-size="14" fill="#6b7060" font-family="Spectral, serif">total</text>
        <text x="${cx}" y="${cy + 18}" text-anchor="middle" font-size="28" font-weight="500" fill="#1d2018" font-family="Fraunces, serif">${total}</text>
      </svg>
      <ul class="hv-agent__legend">
        ${slices
          .map(
            (s) => `
            <li class="hv-agent__legend-item" data-label="${esc(s.label)}" data-value="${esc(s.value)}">
              <span class="hv-agent__legend-swatch" style="background:${s.color}"></span>
              <span class="hv-agent__legend-label">${esc(s.label)}</span>
              <span class="hv-agent__legend-value">${esc(s.value)} · ${s.pct}%</span>
            </li>
          `
          )
          .join("")}
      </ul>
    </div>
  `;
}

/* ── Timeline (event) ──────────────────────────────────────────────── */
export function renderTimeline(spec: VizSpec): string {
  const events = spec.events ?? [];
  if (!events.length) return emptyState("No events");
  const years = events.map((e) => e.year);
  const min = Math.min(...years);
  const max = Math.max(...years);
  const span = Math.max(1, max - min);

  return `
    <div class="hv-agent__timeline">
      <div class="hv-agent__timeline-axis">
        <span>${min}</span>
        <div class="hv-agent__timeline-line"></div>
        <span>${max}</span>
      </div>
      <div class="hv-agent__timeline-events">
        ${events
          .map((e, i) => {
            const left = ((e.year - min) / span) * 92 + 4;
            const color = PALETTE[i % PALETTE.length];
            return `
              <button class="hv-agent__timeline-event" data-label="${esc(e.label)}" data-year="${esc(e.year)}" style="--left: ${left}%; --color: ${color}; --delay: ${i * 80}ms">
                <span class="hv-agent__timeline-dot"></span>
                <span class="hv-agent__timeline-card">
                  <b>${esc(e.year)}</b>
                  <span class="hv-agent__timeline-title">${esc(e.label)}</span>
                  ${e.detail ? `<small>${esc(e.detail)}</small>` : ""}
                </span>
              </button>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

/* ── Network (family constellation) ────────────────────────────────── */
export function renderNetwork(spec: VizSpec): string {
  const nodes = spec.nodes ?? [];
  const edges = spec.edges ?? [];
  if (!nodes.length) return emptyState("No people");

  // Position nodes in a circular layout, weighted by `weight` (radius)
  const maxWeight = Math.max(...nodes.map((n) => n.weight ?? 0), 1);
  const cx = 50;
  const cy = 50;
  const baseR = 32;
  nodes.forEach((node, i) => {
    const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
    const r = baseR - ((node.weight ?? 0) / maxWeight) * 10;
    (node as VizNetworkNode & { _x?: number; _y?: number })._x = cx + r * Math.cos(angle);
    (node as VizNetworkNode & { _x?: number; _y?: number })._y = cy + r * Math.sin(angle);
  });
  const nodeById = new Map(nodes.map((n) => [n.id, n]));

  return `
    <div class="hv-agent__network">
      <svg class="hv-agent__network-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        ${edges
          .map((e: VizNetworkEdge) => {
            const from = nodeById.get(e.from);
            const to = nodeById.get(e.to);
            if (!from || !to) return "";
            const fx = (from as VizNetworkNode & { _x: number })._x;
            const fy = (from as VizNetworkNode & { _y: number })._y;
            const tx = (to as VizNetworkNode & { _x: number })._x;
            const ty = (to as VizNetworkNode & { _y: number })._y;
            return `<line x1="${fx}" y1="${fy}" x2="${tx}" y2="${ty}" stroke="rgba(28,32,24,0.18)" stroke-width="0.3" />`;
          })
          .join("")}
      </svg>
      ${nodes
        .map((n, i) => {
          const node = n as VizNetworkNode & { _x: number; _y: number };
          const size = 16 + ((n.weight ?? 0) / maxWeight) * 16;
          return `
            <button class="hv-agent__node" data-label="${esc(n.label)}" data-meta="${esc(n.meta ?? n.group ?? "")}" style="--x: ${node._x}%; --y: ${node._y}%; --size: ${size}px; --delay: ${i * 60}ms">
              <span class="hv-agent__node-dot"></span>
              <span class="hv-agent__node-label">${esc(n.label.split(" ")[0])}</span>
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

/* ── Map (geographic scatter with sized markers) ───────────────────── */
export function renderMap(spec: VizSpec): string {
  const points = spec.points ?? [];
  if (!points.length) return emptyState("No locations");

  // If we have geo coords, project them. Otherwise fall back to grid positions.
  const hasGeo = points.every((p) => p.lat !== undefined && p.lng !== undefined);

  // Zambia/Zimbabwe bounding box (where most of the demo data lives)
  const bbox = hasGeo
    ? { minLat: -22, maxLat: -8, minLng: 21, maxLng: 34 }
    : { minLat: 0, maxLat: 0, minLng: 0, maxLng: 0 };

  const maxCount = Math.max(...points.map((p) => p.count), 1);

  const project = (lat: number, lng: number) => {
    const x = ((lng - bbox.minLng) / (bbox.maxLng - bbox.minLng)) * 100;
    const y = 100 - ((lat - bbox.minLat) / (bbox.maxLat - bbox.minLat)) * 100;
    return { x, y };
  };

  return `
    <div class="hv-agent__map">
      <svg class="hv-agent__map-bg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <pattern id="hv-agent-map-grid" width="6.25" height="6.25" patternUnits="userSpaceOnUse">
            <path d="M 6.25 0 L 0 0 0 6.25" fill="none" stroke="rgba(28,32,24,0.08)" stroke-width="0.2" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#hv-agent-map-grid)" />
        ${hasGeo ? `<path d="M ${project(-8, 22).x},${project(-8, 22).y} L ${project(-8, 34).x},${project(-8, 34).y} L ${project(-22, 34).x},${project(-22, 34).y} L ${project(-22, 22).x},${project(-22, 22).y} Z" fill="rgba(111,130,102,0.10)" stroke="rgba(45,58,46,0.25)" stroke-width="0.3" />` : ""}
      </svg>
      ${points
        .map((p, i) => {
          const pos = hasGeo ? project(p.lat!, p.lng!) : { x: p.x ?? 50, y: p.y ?? 50 };
          const size = 18 + (p.count / maxCount) * 28;
          const color = PALETTE[i % PALETTE.length];
          return `
            <button class="hv-agent__map-place" data-drilldown="${esc(p.drilldown)}" data-label="${esc(p.place)}" data-count="${esc(p.count)}" style="--x: ${pos.x}%; --y: ${pos.y}%; --size: ${size}px; --color: ${color}; --delay: ${i * 70}ms">
              <span class="hv-agent__map-pulse"></span>
              <span class="hv-agent__map-dot"></span>
              <span class="hv-agent__map-label">${esc(p.place)} <b>${esc(p.count)}</b></span>
            </button>
          `;
        })
        .join("")}
      <div class="hv-agent__map-legend">
        <span>Density</span>
        <i style="width: 12px; height: 12px"></i>
        <i style="width: 18px; height: 18px"></i>
        <i style="width: 26px; height: 26px"></i>
      </div>
    </div>
  `;
}

/* ── Evidence table (sortable, drilldown) ──────────────────────────── */
export function renderTable(spec: VizSpec): string {
  const headers = spec.headers ?? [];
  const rows = spec.rows ?? [];
  if (!rows.length) return emptyState("No records");

  return `
    <div class="hv-agent__table-wrap">
      <table class="hv-agent__table">
        <thead>
          <tr>${headers.map((h) => `<th>${esc(h)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (r: VizTableRow, i) => `
              <tr class="hv-agent__table-row" data-drilldown="${esc(r.drilldown)}" style="--delay: ${i * 30}ms">
                ${r.cells.map((c, ci) => `<td${ci === 0 ? ' class="hv-agent__table-key"' : ""}>${esc(c)}</td>`).join("")}
              </tr>
            `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

/* ── Compare (side-by-side) ────────────────────────────────────────── */
export function renderCompare(spec: VizSpec): string {
  const cmp = spec.compare;
  if (!cmp) return emptyState("No comparison");
  const maxLeft = Math.max(...cmp.left.map((p) => p.value), 1);
  const maxRight = Math.max(...cmp.right.map((p) => p.value), 1);

  return `
    <div class="hv-agent__compare">
      <div class="hv-agent__compare-col hv-agent__compare-col--left">
        <h4>${esc(cmp.leftLabel)}</h4>
        ${cmp.left
          .map((p, i) => {
            const w = (p.value / maxLeft) * 100;
            return `
              <div class="hv-agent__compare-row" data-label="${esc(p.label)}" data-value="${esc(p.value)}">
                <span class="hv-agent__compare-label">${esc(p.label)}</span>
                <div class="hv-agent__compare-bar-wrap">
                  <div class="hv-agent__compare-bar" style="width: ${w}%; background: ${PALETTE[i % PALETTE.length]}; --delay: ${i * 80}ms"></div>
                </div>
                <span class="hv-agent__compare-value">${esc(p.value)}</span>
              </div>
            `;
          })
          .join("")}
      </div>
      <div class="hv-agent__compare-divider"></div>
      <div class="hv-agent__compare-col hv-agent__compare-col--right">
        <h4>${esc(cmp.rightLabel)}</h4>
        ${cmp.right
          .map((p, i) => {
            const w = (p.value / maxRight) * 100;
            return `
              <div class="hv-agent__compare-row" data-label="${esc(p.label)}" data-value="${esc(p.value)}">
                <span class="hv-agent__compare-label">${esc(p.label)}</span>
                <div class="hv-agent__compare-bar-wrap">
                  <div class="hv-agent__compare-bar" style="width: ${w}%; background: ${PALETTE[(i + 4) % PALETTE.length]}; --delay: ${i * 80}ms"></div>
                </div>
                <span class="hv-agent__compare-value">${esc(p.value)}</span>
              </div>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

/* ── Heatmap (placeholder — for future use) ────────────────────────── */
export function renderHeatmap(spec: VizSpec): string {
  const cells = spec.heatmap ?? [];
  if (!cells.length) return emptyState("No data");
  const rows = [...new Set(cells.map((c: VizHeatmapCell) => c.row))];
  const cols = [...new Set(cells.map((c: VizHeatmapCell) => c.col))];
  const max = Math.max(...cells.map((c) => c.value), 1);

  return `
    <div class="hv-agent__heatmap">
      ${rows
        .map(
          (row) => `
          <div class="hv-agent__heatmap-row">
            <span class="hv-agent__heatmap-label">${esc(row)}</span>
            ${cols
              .map((col) => {
                const cell = cells.find((c) => c.row === row && c.col === col);
                const v = cell?.value ?? 0;
                const opacity = v / max;
                return `<div class="hv-agent__heatmap-cell" style="background: rgba(192,98,58,${opacity}); --value: ${v}" data-row="${esc(row)}" data-col="${esc(col)}" data-value="${esc(v)}" title="${esc(row)} · ${esc(col)}: ${esc(v)}"></div>`;
              })
              .join("")}
          </div>
        `
        )
        .join("")}
    </div>
  `;
}

/* ── Empty state ───────────────────────────────────────────────────── */
function emptyState(msg: string): string {
  return `
    <div class="hv-agent__empty">
      <span class="material-symbols-outlined">query_stats</span>
      <p>${esc(msg)}</p>
    </div>
  `;
}

/* ── Master dispatcher ─────────────────────────────────────────────── */
export function renderViz(spec: VizSpec): string {
  switch (spec.kind) {
    case "kpi": return renderKpi(spec);
    case "bar": return renderBar(spec);
    case "line": return renderLine(spec);
    case "donut": return renderDonut(spec);
    case "timeline": return renderTimeline(spec);
    case "network": return renderNetwork(spec);
    case "map": return renderMap(spec);
    case "table": return renderTable(spec);
    case "compare": return renderCompare(spec);
    case "heatmap": return renderHeatmap(spec);
    default: return emptyState(`Unknown viz kind: ${spec.kind}`);
  }
}

/** Unused but kept for future series-legend rendering. */
export function legendFor(series: VizSeries[]): string {
  return `
    <ul class="hv-agent__legend">
      ${series
        .map(
          (s, i) => `
          <li class="hv-agent__legend-item">
            <span class="hv-agent__legend-swatch" style="background:${s.color ?? PALETTE[i % PALETTE.length]}"></span>
            <span class="hv-agent__legend-label">${esc(s.name)}</span>
          </li>
        `
        )
        .join("")}
    </ul>
  `;
}
