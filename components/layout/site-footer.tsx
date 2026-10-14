import { HeaderMarks } from "@/components/layout/header-marks";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
        <span className="font-display font-semibold">{site.name}</span>
        <HeaderMarks xUrl={site.xUrl} ca={site.ca} />
        <span className="text-muted-foreground font-mono text-xs tracking-wide uppercase">
          devnet
        </span>
      </div>
    </footer>
  );
}
