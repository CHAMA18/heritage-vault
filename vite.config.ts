import { defineConfig } from "vite";
import { heritageAgentPlugin } from "./vite-agent-plugin";

export default defineConfig({
  server: {
    port: 8002,
    strictPort: false,
  },
  plugins: [heritageAgentPlugin()],
});
