# Farm template

Frontend skeleton for a Solana devnet project. Clone it, fill in `PRODUCT.specs.md`, and tell the agent "build from specs".

## Stack

Next.js 16, React 19, Tailwind CSS 4, shadcn/ui, GSAP, Lenis, framer-motion, Reown AppKit on Solana devnet.

## Start

```bash
node scripts/new-project.mjs my-project
cd ../my-project
npm install
cp .env.example .env
npm run dev
```

Set `NEXT_PUBLIC_REOWN_PROJECT_ID` in `.env` before the wallet button will open. Get one at https://dashboard.reown.com.

## Brand images

Edit `brand/brand.json`, then:

```bash
npm run brand
```

That writes the X banner, profile image, link card, and post images to `brand/out/`.

## What this repo does not contain

No Anchor program, no deploy scripts, no backend. On-chain reads are added per project as a hook in `hooks/`. See `AGENTS.md`.
# skaleton
