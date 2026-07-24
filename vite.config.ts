import { defineConfig } from "vite";
import { heritageAgentPlugin } from "./vite-agent-plugin";

export default defineConfig({
  // Keep every generated asset relative to the current site. This lets the
  // same build run from localhost, a preview URL, or GitHub Pages.
  base: "./",
  server: {
    port: 8002,
    strictPort: false,
  },
  plugins: [heritageAgentPlugin()],
});
