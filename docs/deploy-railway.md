# Deploy to Railway

The repo includes a `Dockerfile`. It builds the site with Node, then serves the static files with **Caddy** (around 15–20 MB of RAM, with no Node process at runtime). Railway detects the Dockerfile automatically.

## First deploy

1. Push this repo to GitHub (`mirkarusama/Thehraav`).
2. In Railway: **New Project → Deploy from GitHub repo**, then pick the repo. (The first time, authorise the Railway GitHub app for this repo.)
3. Railway finds the `Dockerfile` and builds. You don't need to set a start command or a port. Caddy listens on Railway's `$PORT`.
4. Open the service, go to **Settings → Networking → Generate Domain**, and choose a name such as `thehraav` to get `https://thehraav.up.railway.app`. HTTPS is automatic.
5. If the generated address isn't exactly `https://thehraav.up.railway.app`, either update `url` in `src/config/site.ts` or add a service **Variable** `SITE_URL=https://<your-address>`, then redeploy. This keeps canonical links, the sitemap and link previews correct.
6. Every push to `main` now redeploys automatically.

### Keeping usage low (Hobby plan)
- One service, no database, no volumes.
- Serverless / App Sleeping (**Settings → Serverless**) can be turned on so the container sleeps when idle. The first visit after it sleeps takes a second or two longer. For a small practice site that's usually fine, but leave it off if you'd rather have every visit be instant.
- Optional: under **Settings → Deploy**, set a memory limit of around 128 MB.

## Custom domain later (e.g. thehraav.com)

1. Buy the domain from any registrar.
2. Railway: **Settings → Networking → Custom Domain → add `thehraav.com`** (and `www.thehraav.com` if you want it). Railway shows a DNS record for each.
3. At the registrar, add those records (usually a CNAME, or an ALIAS/flattened CNAME for the root domain). Wait for it to verify. HTTPS is issued automatically.
4. Set `SITE_URL=https://thehraav.com` in Railway Variables (or change `url` in `site.ts`) and redeploy.
5. Pick one main address and redirect the other (`www` → root, or the reverse) at the registrar or in DNS.
6. When the professional email (e.g. `hello@thehraav.com`) is ready, change `contact.email` in `site.ts`. It updates everywhere. Also update the email in Cal ID, Formspree and Google Business Profile.
7. Update the website link in Google Business Profile, Cal ID and Instagram/LinkedIn.
