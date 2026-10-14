import { cpSync, readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";

const name = process.argv[2];
if (!name || !/^[a-z0-9-]+$/.test(name)) {
  console.error("usage: node scripts/new-project.mjs <kebab-name>");
  process.exit(1);
}

const source = dirname(new URL(import.meta.url).pathname).replace(/\/scripts$/, "");
const target = join(dirname(source), name);

cpSync(source, target, {
  recursive: true,
  filter: (path) => !/node_modules|\.next|brand\/out/.test(path),
});

const skip = new Set([".git", "node_modules", ".next", "brand"]);

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (skip.has(entry)) continue;
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      walk(path);
      continue;
    }
    if (!/\.(ts|tsx|json|mjs|md|css|svg)$/.test(entry)) continue;
    const text = readFileSync(path, "utf8");
    if (!text.includes("__PROJECT_NAME__")) continue;
    writeFileSync(path, text.replaceAll("__PROJECT_NAME__", name));
  }
}

walk(target);
console.log(`created ${target}`);
console.log("next: cd " + name + " && npm install && cp .env.example .env");
