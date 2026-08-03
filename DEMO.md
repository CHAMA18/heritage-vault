# HeritageVault — 60-Second Demo Script

## Setup (before recording)
1. Open https://chama18.github.io/heritage-vault/ (or the local preview)
2. Log in (Demo Mode or `curator@heritagevault.family` / `HeritageVault2026!`)
3. You'll land on the Vault dashboard
4. Start screen recording (OBS, QuickTime, Loom, etc.)

## The demo (60 seconds)

### 0:00–0:08 — Landing on the Vault
- Show the cinematic dashboard: aurora drifting, metric bento, memory gallery
- Hover a memory card (it lifts, image zooms)
- Say: *"This is HeritageVault — a family archive where every answer is a chart, not a paragraph."*

### 0:08–0:15 — Navigate to the Agent
- Click **"Agent"** in the sidebar
- Show the header badge: **"Archive runtime · in-browser"**
- Say: *"Every answer is computed right here in the browser, from the family's own archive — no external database."*

### 0:15–0:28 — Ask the first question
- Click the suggestion chip: **"Where did my family live?"**
- Watch the phase indicator: Interpreting → Querying your archive → Rendering
- The map renders: 7 pulsing markers across Zambia and Zimbabwe, sized by memory count
- Say: *"Ask where the family lived — get a map, not a paragraph. Each marker is a real place from the archive."*

### 0:28–0:38 — Drill down
- Click the **Lusaka** marker (largest)
- The agent auto-sends the drilldown: "Show me memories from Lusaka"
- An evidence table renders with the actual memories
- Say: *"Click any element to drill down — the agent follows up automatically."*

### 0:38–0:50 — Ask a follow-up
- Click the suggestion chip: **"Show me the timeline"**
- An animated line chart renders — memories across the years, 1912–2026
- Say: *"Every response is a VizSpec — a chart, map, or diagram. Never a wall of text."*

### 0:50–0:60 — Story Mode + the media pipeline
- Jump to **Story Mode**, open a chapter, click **Narrate**
- The Genblaze pipeline runs: ElevenLabs narrates, DALL·E illustrates, both
  land on **Backblaze B2** with a SHA-256 provenance manifest
- Expand **Provenance manifest** — show the run id + hash + "Genblaze verified" badge
- Say: *"The same archive powers the visual agent — and Story Mode can turn any chapter into provenance-verified media on Backblaze B2."*

## Key moments to capture
1. The dashboard bento + memory gallery
2. The map rendering with pulsing markers
3. The drilldown chain (click marker → evidence table)
4. The line chart animating in
5. **Narrate** → audio player + illustration + "Genblaze" verified badge + provenance manifest

## If the Genblaze worker isn't running
Story Mode still reads and renders every chapter. **Narrate** shows a clear
"pipeline offline" hint — say *"the pipeline runs locally / on a worker; here
it's unreachable, but the vault and agent are fully live."* Everything else
(the Agent, Vault, Family Map, Atlas) works with zero backend.
