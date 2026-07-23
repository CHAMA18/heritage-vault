/**
 * Print a safe, minimal status summary for the latest Trigger.dev deployment.
 * The project secret is supplied at runtime and is never persisted.
 *
 * Run: TRIGGER_ENV_SECRET_KEY=tr_prod_... node scripts/check-trigger-deployment.mjs
 */
const secret = process.env.TRIGGER_ENV_SECRET_KEY;
if (!secret) throw new Error("TRIGGER_ENV_SECRET_KEY is required.");

const response = await fetch("https://api.trigger.dev/api/v1/deployments?period=1d&page%5Bsize%5D=5", {
  headers: { Authorization: `Bearer ${secret}` },
});

if (!response.ok) throw new Error(`Trigger.dev deployment check failed: ${response.status}`);

const { data = [] } = await response.json();
const deployment = data[0];
if (!deployment) throw new Error("Trigger.dev returned no deployments for the last day.");
const tasks = deployment.worker?.tasks ?? [];
console.log(`Status: ${deployment.status}`);
console.log(`Version: ${deployment.version ?? "unknown"}`);
console.log(`Tasks detected: ${tasks.length}`);
if (tasks.length) console.log(`Task IDs: ${tasks.map((task) => task.id).join(", ")}`);
if (deployment.status === "FAILED") {
  const redact = (value) => JSON.stringify(value ?? {})
    .replace(/tr_(?:dev|prod|stg)_[A-Za-z0-9_-]+/g, "[redacted-trigger-key]")
    .replace(/(password|secret|token)\\s*[:=]\\s*[^,}\\s]+/gi, "$1=[redacted]");
  console.log(`Failure: ${redact(deployment.error ?? deployment.errorData)}`);
}
