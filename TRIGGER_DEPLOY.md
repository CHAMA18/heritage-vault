# Trigger.dev Deploy — Troubleshooting

## The error

```
Error: Error building image. Full build logs have been saved to ...
failed to resolve source metadata for docker.io/docker/dockerfile:1:
failed to authorize: DeadlineExceeded: context deadline exceeded
```

## What it means

Trigger.dev's build infrastructure couldn't pull the base Docker image (`docker.io/docker/dockerfile:1`) from Docker Hub. The request timed out after the deadline. This is a **transient network/registry issue on Trigger.dev's build side** — not a problem with your code.

## What to do

### Option 1: Retry (most likely to work)

The build cache may have partially warmed up. Just re-run:

```bash
npx trigger.dev@latest deploy
```

Transient Docker Hub timeouts usually clear on the second or third attempt.

### Option 2: Retry with a clean build

If the retry hits the same cached failure:

```bash
npx trigger.dev@latest deploy --skip-update-check
```

### Option 3: Check Trigger.dev status

- Go to https://status.trigger.dev/ — check for ongoing incidents
- Go to https://cloud.trigger.dev/ → your project → Deployments — see if the build logs have more detail

### Option 4: Try a different runtime

If the node-22 image keeps failing, try node-20:

```bash
# Edit trigger.config.ts, change:
#   runtime: "node-22"
# to:
#   runtime: "node-20"
# Then:
npx trigger.dev@latest deploy
```

### Option 5: Deploy from a different network

Docker Hub rate-limits by IP. If you're on a shared/corporate network, try:
- A different network (mobile hotspot, different WiFi)
- A VPN to a different region

## What succeeded

The deploy got past:
- ✅ Authentication (retrieved account details for `chungu@thestackone.com`)
- ✅ Code build (successfully built code)
- ❌ Image build (Docker Hub timeout)

So your code is fine, your auth is fine — it's purely the Docker pull step.

## After successful deploy

Once the worker deploys, verify:

```bash
# Check the health endpoint
curl https://preview-3770180e-d32b-4a00-a0fb-1f99bf6dec67.space-z.ai/api/agent-health
# Should show: "trigger": { "configured": true, "workerDeployed": true }

# Or check the Trigger.dev dashboard
# https://cloud.trigger.dev/ → your project → Tasks
# You should see "heritage-atlas-agent" registered
```

Then update the browser agent to actually use the deployed worker by removing the short-circuit in `src/agent/trigger-transport.ts` — change `runTriggerTurn` to call `loadTransport()` instead of immediately returning `null`.
