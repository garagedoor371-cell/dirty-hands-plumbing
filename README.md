# Dirty Hands Plumbing - pSEO Site

## Cloudflare Pages Deployment

In your Cloudflare Pages project settings, set:

- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node.js version:** 20 (or set via `.nvmrc`)

Then redeploy. The build generates ~15,000 static pages into `out/`.

## Local dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
