/**
 * Verify Trigger.dev SDK auth works with the secret key from .env.
 * Run: node scripts/test-trigger-auth.mjs
 */
import { auth } from "@trigger.dev/sdk";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// Load .env
try {
  const envText = readFileSync(resolve(process.cwd(), ".env"), "utf8");
  for (const line of envText.split("\n")) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
} catch {
  // fall back to process.env
}

if (!process.env.TRIGGER_SECRET_KEY) {
  console.error("✗ TRIGGER_SECRET_KEY not set in .env or process.env");
  process.exit(1);
}

try {
  const token = await auth.createPublicToken({
    scopes: { read: { sessions: "test-session" }, write: { sessions: "test-session" } },
    expirationTime: "1m",
  });
  if (!token) throw new Error("Trigger.dev returned an empty token");
  console.log("✓ Trigger.dev SDK authenticated with the configured key.");
} catch (err) {
  console.error("✗ Auth failed:", err.message?.slice(0, 300));
  process.exit(1);
}
