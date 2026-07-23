import { readFile } from "node:fs/promises";
import { createClient } from "@clickhouse/client";

const required = ["CLICKHOUSE_URL", "CLICKHOUSE_USERNAME", "CLICKHOUSE_PASSWORD"];
const missing = required.filter((name) => !process.env[name]);

if (missing.length > 0) {
  throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
}

const client = createClient({
  url: process.env.CLICKHOUSE_URL,
  username: process.env.CLICKHOUSE_USERNAME,
  password: process.env.CLICKHOUSE_PASSWORD,
  database: process.env.CLICKHOUSE_DATABASE ?? "default",
});

const sql = await readFile(new URL("../clickhouse/schema.sql", import.meta.url), "utf8");
const statements = sql
  .replace(/^--.*$/gm, "")
  .split(/;\s*(?:\r?\n|$)/)
  .map((statement) => statement.trim())
  .filter(Boolean);

try {
  for (const statement of statements) {
    await client.command({ query: statement });
  }

  console.log(`Applied ${statements.length} ClickHouse schema statements.`);
} finally {
  await client.close();
}
