"use client";

import { MenuIcon } from "lucide-react";

import { HeaderMarks } from "@/components/layout/header-marks";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ConnectButton } from "@/components/wallet/connect-button";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="bg-background/80 sticky top-0 z-40 border-b border-border backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="#now" className="font-display text-lg font-semibold">
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:contents">
            <HeaderMarks xUrl={site.xUrl} ca={site.ca} />
          </span>
          <span className="hidden md:contents">
            <ConnectButton />
          </span>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="flex size-9 items-center justify-center rounded-lg border border-border md:hidden">
        <MenuIcon className="size-4" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="font-display">{site.name}</SheetTitle>
        <nav className="flex flex-col gap-4">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm">
              {item.label}
            </a>
          ))}
        </nav>
        <HeaderMarks xUrl={site.xUrl} ca={site.ca} />
        <ConnectButton />
      </SheetContent>
    </Sheet>
  );
}
