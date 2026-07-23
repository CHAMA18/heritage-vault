/**
 * Sync the ClickHouse connection used by the live archive to a Trigger.dev
 * environment. The Trigger secret is deliberately supplied at runtime and is
 * never read from or written to .env.
 *
 * Run: TRIGGER_ENV_SECRET_KEY=tr_prod_... node scripts/sync-trigger-clickhouse-env.mjs
 */
import { configure, envvars } from "@trigger.dev/sdk";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const projectRef = "proj_fuxqqqgzdulxvbuthevo";
const environment = process.env.TRIGGER_ENVIRONMENT ?? "prod";

function loadLocalEnv() {
  const envPath = resolve(process.cwd(), ".env");
  const env = {};

  try {
    for (const line of readFileSync(envPath, "utf8").split("\n")) {
      const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
      if (match) env[match[1]] = match[2];
    }
  } catch {
    throw new Error("Missing .env. Add the ClickHouse connection settings before syncing Trigger.dev.");
  }

  return env;
}

const triggerSecret = process.env.TRIGGER_ENV_SECRET_KEY;
if (!triggerSecret) {
  throw new Error("TRIGGER_ENV_SECRET_KEY is required. It is intentionally not stored in .env.");
}

const localEnv = loadLocalEnv();
const requiredKeys = ["CLICKHOUSE_URL", "CLICKHOUSE_USERNAME", "CLICKHOUSE_PASSWORD", "CLICKHOUSE_DATABASE"];
const missingKeys = requiredKeys.filter((key) => !localEnv[key]);
if (missingKeys.length > 0) {
  throw new Error(`Missing required ClickHouse settings: ${missingKeys.join(", ")}`);
}

configure({ accessToken: triggerSecret });

await envvars.upload(projectRef, environment, {
  variables: Object.fromEntries(requiredKeys.map((key) => [key, localEnv[key]])),
  override: true,
});

console.log(`✓ Synced ${requiredKeys.length} ClickHouse variables to Trigger.dev ${environment}.`);
console.log(`  Project: ${projectRef}`);
console.log(`  Variables: ${requiredKeys.join(", ")}`);
