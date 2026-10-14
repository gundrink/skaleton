---
name: farm-content
description: Produce the X brand kit and copy for a farm project. Use when the user asks for the logo, banner, profile image, post images, or the X posts for a project.
---

# Brand and X content

Works from `PRODUCT.specs.md` and `lib/site.ts`. Produces files only. Nothing is posted.

## Images

1. Write the logo as `brand/logo.svg` using `logo-design-skill`, from the mood words.
2. Fill `brand/brand.json`: name, ticker, tagline, accent, handle, and one entry per post under `posts` with a headline and subline.
3. Run `npm run brand`. It renders `brand/out/banner.png` (1500x500), `pfp.png` (400x400), `og.png` (1200x630), and one 1600x900 image per post.
4. For an illustration hero, generate the artwork separately and save it under `brand/art/`.

## Copy

Write these, using `marketingskills` for the shape and `humanizer` for the final pass:

- `content/x/profile.md`: display name, bio under 160 characters, link.
- `content/x/pinned.md`: one post.
- `content/x/launch-thread.md`: six posts, the first referencing `brand/out/post-launch.png`.
- `content/x/calendar.md`: 14 days, each row naming its image.
- `content/x/replies.md`: the recurring questions.

The language and tone come from the spec's `## Voice`. Default to English.

## Do not

- Post, schedule, or log in to X.
- Put text into an image by hand. Text goes through `brand.json` so it renders sharp.
