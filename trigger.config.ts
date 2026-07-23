import { defineConfig } from "@trigger.dev/sdk";

export default defineConfig({
  project: "proj_fuxqqqgzdulxvbuthevo",
  dirs: ["./trigger"],
  runtime: "node-22",
  maxDuration: 3600,
  retries: {
    enabledInDev: false,
    default: { maxAttempts: 3, minTimeoutInMs: 1000, maxTimeoutInMs: 10000, factor: 2, randomize: true },
  },
});
