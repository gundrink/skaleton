# Farm template

Frontend skeleton for Solana devnet projects. Next.js 16, React 19, Tailwind v4, shadcn/ui, GSAP + Lenis + framer-motion, Reown AppKit wallet-only on devnet.

This repo is frontend only. There is no Anchor program and no deploy script. When a spec needs on-chain data, add a read hook in `hooks/` and have it call `getAccountInfo`. Never add a backend service. A route in `app/api/` is allowed only when the spec needs a secret or off-chain data.

## Read order
1. `PRODUCT.specs.md` for the product. It contains no tech.
2. `PRODUCT.md` for the decisions already made.
3. This file. Then only the files you are about to change.

## Where things go
- `lib/site.ts`: name, tagline, accent, font pair, hero, links. The only identity file.
- `data/landing.ts`: all landing copy, plus the direction comment at top.
- `components/ui`: shadcn. Do not hand-roll buttons, inputs, cards, or dialogs.
- `components/motion`: the animation kit. Reuse it, do not add a new animation library.
- `components/wallet`: connect button and the devnet guard.
- `sections/landing`: one file per landing section.
- `brand/`: `brand.json`, `logo.svg`, rendered output in `brand/out/` via `npm run brand`.
- `content/x/`: X profile, pinned post, launch thread, calendar, replies.

## Design
- Accent comes from `site.accent` and is injected as `--primary`. Never hardcode a color.
- Font pair is `syne`, `serif`, or `mono`. Hero is `aurora`, `3d`, or `illustration`.
- 3D only when the spec asks for it. Use the `scroll-world` skill, lazy-load the scene, and disable it under reduced motion. One scene, and it replaces the aurora.
- Every motion component must respect `prefers-reduced-motion`.

## Skills
- Build from a spec: `.cursor/skills/farm-build/SKILL.md`
- Brand and X content: `.cursor/skills/farm-content/SKILL.md`
- Direction: `taste-skill`, `ui-ux-pro-max-skill`. Logo: `logo-design-skill`. Copy: `marketingskills`, then `humanizer`. 3D: `scroll-world`.
- Solana work: the global `solana-dev` skill.

## Commands
- `npm run dev`, `npm run lint`, `npm run build`
- `npm run brand` renders `brand/out/*.png` from `brand/brand.json`
- `node scripts/new-project.mjs <name>` copies this repo to a sibling folder

## Rules
- Devnet only. Never point the client at mainnet.
- Do not sign or send transactions without showing the summary and waiting for confirmation.
- No `any`. Import order is enforced: react, next, external, `@/`, relative, type-only.
- Landing copy is English unless the spec says otherwise.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
