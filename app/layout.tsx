import { Instrument_Serif, JetBrains_Mono, Manrope, Syne } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LenisProvider } from "@/components/motion/lenis-provider";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { AppKitProvider } from "@/lib/appkit";
import { site } from "@/lib/site";

import type { Metadata } from "next";

import "./globals.css";

const body = Manrope({ subsets: ["latin"], variable: "--font-body" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jet" });

const displayVariable = {
  syne: syne.variable,
  serif: serif.variable,
  mono: mono.variable,
}[site.fontPair];

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${body.variable} ${displayVariable} ${mono.variable}`}
        style={{ ["--font-display" as string]: fontFamilyFor(site.fontPair) }}
        suppressHydrationWarning
      >
        <AppKitProvider>
          <style>{`:root { --primary: ${site.accent}; }`}</style>
          <LenisProvider />
          <ScrollProgress />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </AppKitProvider>
      </body>
    </html>
  );
}

function fontFamilyFor(pair: typeof site.fontPair): string {
  if (pair === "serif") return "var(--font-serif)";
  if (pair === "mono") return "var(--font-jet)";
  return "var(--font-syne)";
}
