# Thehraav Counselling website

Static website for Thehraav Counselling (Sarah Shaikh, counselling psychologist). Built with [Astro](https://astro.build) into plain HTML/CSS with a little JS, served by Caddy on Railway. No backend, no database, and no client data stored on the site.

## Run it locally

```bash
npm install
npm run dev       # http://localhost:4321, live reload
npm run build     # outputs static files to dist/
npm run preview   # serve the built site
```

Needs Node 22.23 or newer.

## Where to edit things

| What | Where |
|---|---|
| Email, WhatsApp, social links, fees, session lengths, hours, Cal ID links, Formspree ID, site address | `src/config/site.ts` |
| Footer links and text | `src/config/site.ts` (`footer`) |
| Page text | `src/pages/*.astro` (plain HTML inside) |
| Colours and fonts | top of `src/styles/global.css` |
| Cancellation policy wording (used on 4 pages) | `src/components/CancellationPolicy.astro` |
| Logo | `public/assets/logo.svg` (see below) |
| Sarah's photo | `public/images/sarah-placeholder.webp` (or change `photo` in `site.ts`) |
| Favicon / link-preview image | `public/favicon.svg`, `public/favicon-32.png`, `public/apple-touch-icon.png`, `public/og-image.png` |

Values in `[SQUARE BRACKETS]` are placeholders. On the pages they show with a yellow highlight so they're easy to spot. Social links stay hidden until they're filled in.

### Swapping in the final logo

Replace `public/assets/logo.svg` with the final file (same name), and that's it. The logo sits in a fixed-size box (`--logo-w` / `--logo-h` in `global.css`), so the layout won't shift. For a PNG, drop it in `public/assets/` and change `logo.src` in `src/config/site.ts`. Then regenerate the favicon and `og-image.png` from the new mark.

## Pages

`/` Home · `/about` · `/services` · `/book` (Cal ID) · `/faq` · `/contact` (Formspree) · `/privacy` · `/terms` · 404

Generated automatically: `sitemap-index.xml`, `robots.txt`, canonical URLs and Open Graph tags (from the site address in `site.ts`).

## Guides

- [Cal ID setup and embed](docs/cal-id-setup.md)
- [Deploy to Railway and add a custom domain](docs/deploy-railway.md)
- [Launch checklist and Google Business Profile](docs/launch-checklist.md)
