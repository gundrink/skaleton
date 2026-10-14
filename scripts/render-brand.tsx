import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { createElement, type ReactElement } from "react";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";

interface Post {
  headline: string;
  subline: string;
}

interface Brand {
  name: string;
  ticker: string;
  tagline: string;
  accent: string;
  background: string;
  text: string;
  muted: string;
  handle: string;
  posts: Record<string, Post>;
}

const brand = JSON.parse(readFileSync("brand/brand.json", "utf8")) as Brand;

function loadFont(): Promise<ArrayBuffer> {
  const url =
    "https://cdn.jsdelivr.net/fontsource/fonts/manrope@latest/latin-700-normal.ttf";
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`font download failed: ${response.status}`);
    return response.arrayBuffer();
  });
}

function frame(
  width: number,
  height: number,
  children: ReturnType<typeof createElement>[],
) {
  return createElement(
    "div",
    {
      style: {
        width,
        height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: brand.background,
        color: brand.text,
        padding: 64,
        fontFamily: "Manrope",
      },
    },
    ...children,
  );
}

function mark(size: number) {
  return createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: size / 4,
      background: brand.accent,
    },
  });
}

function wordmark(size: number) {
  return createElement(
    "div",
    { style: { display: "flex", alignItems: "center", gap: 20, fontSize: size, fontWeight: 700 } },
    mark(size),
    brand.name,
  );
}

const templates: Record<string, { width: number; height: number; tree: ReactElement }> = {
  banner: {
    width: 1500,
    height: 500,
    tree: frame(1500, 500, [
      wordmark(48),
      createElement("div", { style: { display: "flex", fontSize: 84, fontWeight: 700 } }, brand.tagline),
      createElement("div", { style: { display: "flex", color: brand.muted, fontSize: 28 } }, brand.handle),
    ]),
  },
  pfp: {
    width: 400,
    height: 400,
    tree: createElement(
      "div",
      {
        style: {
          width: 400,
          height: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: brand.background,
        },
      },
      mark(180),
    ),
  },
  og: {
    width: 1200,
    height: 630,
    tree: frame(1200, 630, [
      wordmark(40),
      createElement("div", { style: { display: "flex", fontSize: 72, fontWeight: 700 } }, brand.tagline),
      createElement("div", { style: { display: "flex", color: brand.accent, fontSize: 28 } }, brand.ticker),
    ]),
  },
};

for (const [key, post] of Object.entries(brand.posts)) {
  templates[`post-${key}`] = {
    width: 1600,
    height: 900,
    tree: frame(1600, 900, [
      wordmark(36),
      createElement(
        "div",
        { style: { display: "flex", flexDirection: "column", gap: 16 } },
        createElement("div", { style: { display: "flex", fontSize: 84, fontWeight: 700 } }, post.headline),
        createElement("div", { style: { display: "flex", color: brand.muted, fontSize: 36 } }, post.subline),
      ),
      createElement("div", { style: { display: "flex", color: brand.accent, fontSize: 28 } }, brand.handle),
    ]),
  };
}

async function main(): Promise<void> {
  const font = await loadFont();
  mkdirSync("brand/out", { recursive: true });

  for (const [name, template] of Object.entries(templates)) {
    const svg = await satori(template.tree, {
      width: template.width,
      height: template.height,
      fonts: [{ name: "Manrope", data: font, weight: 700, style: "normal" }],
    });
    const png = new Resvg(svg).render().asPng();
    writeFileSync(`brand/out/${name}.png`, png);
    console.log(`${name}.png  ${template.width}x${template.height}`);
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
