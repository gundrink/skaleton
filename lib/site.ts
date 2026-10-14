/**
 * The one place a project's identity lives.
 * `farm-build` rewrites this file from PRODUCT.specs.md. Everything visual
 * reads from here, so rebranding never touches a component.
 */
export const site = {
  name: "__PROJECT_NAME__",
  ticker: "TOKEN",
  tagline: "One line about what this does.",
  description:
    "A short paragraph for the hero and the link preview. Two sentences at most.",
  accent: "#0052FF",
  /** One of "syne" | "serif" | "mono". Picked from the spec's mood words. */
  fontPair: "syne" as "syne" | "serif" | "mono",
  /** One of "aurora" | "3d" | "illustration". */
  hero: "aurora" as "aurora" | "3d" | "illustration",
  xUrl: process.env.NEXT_PUBLIC_X_URL ?? "",
  ca: process.env.NEXT_PUBLIC_CA ?? "",
  nav: [
    { label: "Now", href: "#now" },
    { label: "How", href: "#how" },
    { label: "FAQ", href: "#faq" },
  ],
};
