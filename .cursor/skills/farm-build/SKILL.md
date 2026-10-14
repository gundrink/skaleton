---
name: farm-build
description: Build a farm project from PRODUCT.specs.md. Use when the user says "build from specs", "new project from spec", or drops a filled PRODUCT.specs.md and wants the frontend generated.
---

# Build from specs

The spec describes the product in plain words. You decide the tech, using the stack already in this repo. Read `AGENTS.md` first.

## Steps

1. Read `PRODUCT.specs.md` and nothing else technical. If it names a framework, an account layout, or a PDA, ignore that part.
2. Set `lib/site.ts`: name, ticker, tagline, accent from `## Look`, links from `## Voice`.
3. Pick the look and write it as the comment at the top of `data/landing.ts`:
   - Font pair: `syne` for precise or technical, `serif` for editorial, `mono` for stark.
   - Hero: `aurora` by default, `3d` when the spec has a 3D line, `illustration` when the mood is editorial.
   - Read `taste-skill` and `ui-ux-pro-max-skill` before choosing.
4. Replace the copy in `data/landing.ts` from the spec: headline, subcopy, steps, faqs, highlights. Run the copy through `humanizer`.
5. Build the `/app` screen from `## Screens` using `components/ui` and wrap the action in `WalletGuard`. The action shows a toast until a transaction exists.
6. If the spec needs on-chain data, add a hook in `hooks/` that reads with `getAccountInfo` and feeds `liveStats`. Do not add a program, a deploy script, or a backend.
7. If the hero is `3d`, follow the `scroll-world` skill, lazy-load the scene, and disable it under reduced motion.
8. Rewrite `PRODUCT.md` with the decisions: accent, font pair, hero, and the devnet table.
9. Run `npm run lint` and `npm run build`.

## Do not

- Add dependencies for things the template already does.
- Target mainnet.
- Send a transaction without showing its summary and getting confirmation.
