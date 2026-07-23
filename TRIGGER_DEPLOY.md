# Trigger.dev Deploy — DNS / Docker Hub Resolution Fix

## The error

```
failed to fetch anonymous token: Get "https://auth.docker.io/token?...":
dial tcp: lookup auth.docker.io: no such host
```

## What it means

Your Mac **cannot resolve `auth.docker.io`** — DNS lookup fails. This is a local network issue, not Trigger.dev. Docker Hub's auth server is unreachable from your machine.

## Fix 1: Check your DNS (most common cause)

```bash
# Test if your Mac can reach Docker Hub's auth server
nslookup auth.docker.io
# Should return an IP like 44.205.64.79. If it says "server can't find", DNS is broken.

# Test with Google's DNS directly
nslookup auth.docker.io 8.8.8.8
# If this works but the first doesn't, your DNS server is the problem.

# Test the registry itself
curl -v https://auth.docker.io/token?scope=repository:docker/dockerfile:pull 2>&1 | head -20
```

### If DNS is broken, fix it:

**Option A — Use Google/Cloudflare DNS:**
1. System Settings → Network → Wi-Fi (or Ethernet) → Details → DNS
2. Add `8.8.8.8` and `1.1.1.1`
3. Remove any broken DNS servers
4. Apply

**Option B — Flush DNS cache:**
```bash
sudo dscacheutil -flushcache && sudo killall -HUP mDNSResponder
```

**Option C — Edit /etc/hosts (nuclear option):**
```bash
# Get the current IP for auth.docker.io
dig auth.docker.io +short @8.8.8.8
# Then add to /etc/hosts:
# 44.205.64.79 auth.docker.io
# 54.85.56.253 registry-1.docker.io
# (IPs change — use what dig returns)
```

## Fix 2: Switch networks

Docker Hub rate-limits and sometimes blocks IPs. Try:
- **Mobile hotspot** — connect your Mac to your phone's hotspot, retry
- **Different WiFi** — a coffee shop, library, different office network
- **VPN** — route through a different region

```bash
# After switching networks, test:
curl -sI https://auth.docker.io/token | head -3
# Should return HTTP/2 200 or 401 (both mean DNS works)

# Then retry the deploy
npx trigger.dev@latest deploy
```

## Fix 3: Use a different runtime (avoids the dockerfile:1 image)

The failing image is `docker.io/docker/dockerfile:1` — Trigger.dev uses it for the build. Switching runtimes may use a different base image:

```bash
# Edit trigger.config.ts
# Change: runtime: "node-22"
# To:     runtime: "node-20"
# Then:
npx trigger.dev@latest deploy
```

If node-20 still pulls `dockerfile:1`, this won't help — but worth trying.

## Fix 4: Retry at a different time

Docker Hub has intermittent outages. Check:
- https://status.docker.com/ — see if there's an active incident
- Wait 15-30 minutes and retry

## Fix 5: Use Docker Desktop as a proxy

If you have Docker Desktop running, it may have its own DNS that works:

```bash
# Start Docker Desktop
open -a Docker
# Wait for it to fully start, then:
npx trigger.dev@latest deploy
```

Docker Desktop's daemon handles image pulls differently and may bypass the broken DNS.

## Quick diagnostic — run this first

```bash
# 1. Can you reach Docker Hub at all?
curl -sI https://hub.docker.com 2>&1 | head -3

# 2. Can you resolve the auth server?
nslookup auth.docker.io

# 3. Can you resolve the registry?
nslookup registry-1.docker.io

# 4. Are you on a network that blocks Docker Hub?
#    (corporate networks, some ISPs, some countries)
```

## Most likely fix

Based on `no such host` — your DNS is the problem. The fastest fix:

1. **Switch to mobile hotspot** (30 seconds)
2. `npx trigger.dev@latest deploy`

If that works, your normal network is blocking Docker Hub. You can either:
- Deploy from the hotspot each time
- Fix your network's DNS (Fix 1 above)
- Use a VPN

## After successful deploy

Once it deploys, verify:
```bash
curl https://preview-3770180e-d32b-4a00-a0fb-1f99bf6dec67.space-z.ai/api/agent-health
# Should show: "trigger": { "configured": true, "workerDeployed": true }
```
