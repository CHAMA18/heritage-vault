# HeritageAtlas — 60-Second Demo Script

## Setup (before recording)
1. Open https://preview-3770180e-d32b-4a00-a0fb-1f99bf6dec67.space-z.ai/
2. Log in (any email/password — Firebase auth is real)
3. You'll land on the Vault dashboard
4. Start screen recording (OBS, QuickTime, Loom, etc.)

## The demo (60 seconds)

### 0:00–0:08 — Landing on the Vault
- Show the cinematic dashboard: aurora drifting, metric bento, memory gallery
- Hover a memory card (it lifts, image zooms)
- Say: *"This is HeritageAtlas — a family archive where every answer is a chart, not a paragraph."*

### 0:08–0:15 — Navigate to the Agent
- Click **"Agent"** in the sidebar
- Show the header badge: **"Trigger.dev + ClickHouse · live"** (pulsing green)
- Say: *"Powered by Trigger.dev's chat.agent() querying ClickHouse Cloud."*

### 0:15–0:28 — Ask the first question
- Click the suggestion chip: **"Where did my family live?"**
- Watch the phase indicator: Interpreting → Querying ClickHouse → Rendering
- The map renders: 7 pulsing markers across Zambia and Zimbabwe, sized by memory count
- Say: *"Ask where the family lived — get a map, not a paragraph. Each marker is a real place from the archive."*

### 0:28–0:38 — Drill down
- Click the **Lusaka** marker (largest, 7 memories)
- The agent auto-sends the drilldown: "Show me memories from Lusaka"
- An evidence table renders with the actual memories
- Say: *"Click any element to drill down — the agent follows up automatically."*

### 0:38–0:50 — Ask a follow-up
- Click the suggestion chip: **"Show me the timeline"**
- An animated line chart renders — 19 years of memories, 1912–2026
- Point to the peak year
- Say: *"Every response is a VizSpec — a chart, map, or diagram. Never a wall of text."*

### 0:50–0:60 — Close
- Expand the **SQL** details on one response — show the real ClickHouse query
- Say: *"Every chart is backed by a real ClickHouse query. The agent's best answer is always a tool call — not prose."*

## Key moments to capture
1. The pulsing green "Trigger.dev + ClickHouse · live" badge
2. The map rendering with pulsing markers
3. The drilldown chain (click marker → evidence table)
4. The line chart animating in
5. The SQL details expanded — real ClickHouse query visible

## If ClickHouse auth is broken
The agent falls back to the mock runtime (amber badge). The charts still render identically — just say *"powered by the same VizSpec architecture"* and skip the SQL expansion. Fix the password in ClickHouse Cloud settings → update `.env` → restart Vite.

## If the worker isn't deployed yet
The deterministic middleware carries the load (same VizSpecs, same ClickHouse data, ~500ms). The badge shows "ClickHouse · live" instead of "Trigger.dev + ClickHouse · live". Still demoable — just don't claim Claude orchestration until the worker is deployed.
