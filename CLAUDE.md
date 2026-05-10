# cococo.fun landing page

Angular 20 SPA served at the root of `cococo.fun`.

## Deploy

```bash
npm run build
npx wrangler deploy
```

Build output: `dist/atoy-homepage/browser/` — uploaded as static assets to the `cococo-landing-page` Cloudflare Worker. SPA fallback is handled by `assets.not_found_handling: "single-page-application"` in `wrangler.jsonc` (do **not** add a `public/_redirects` file — it conflicts with SPA mode and the deploy will fail).

## Hosting topology

`cococo.fun` is owned by a separate router worker, **not** by this worker:

- `cococo-router` (Cloudflare Worker) — owns the `cococo.fun` custom domain. Dispatches:
  - `/tailor-resume*` → Firebase (`tailor-resume-app-staging.web.app`)
  - `/ai-reporter*` → Vercel (`project-h0rhm.vercel.app`)
  - everything else → `cococo-landing-page` worker via Service binding (variable name `LANDING`)
- `cococo-landing-page` (this repo) — static-assets-only Worker. Reachable directly at `cococo-landing-page.ludvig-orest.workers.dev` for testing.

When changing routing, edit the `cococo-router` worker's source in the Cloudflare dashboard. Don't try to attach `cococo.fun` as a custom domain on `cococo-landing-page` — only one worker can own the apex.

## Verify after deploy

```bash
curl -I https://cococo-landing-page.ludvig-orest.workers.dev/   # 200, the landing page directly
curl -I https://cococo.fun/                                      # 200, via the router
curl -I https://cococo.fun/tailor-resume                         # 200, Firebase
curl -I https://cococo.fun/ai-reporter                           # 200, Vercel
```

## Build budget note

`angular.json` has `anyComponentStyle` raised to `12kB` warn / `16kB` error because `product-card.component.scss` exceeds the Angular default. Keep this in mind if a future build fails on style budgets.
