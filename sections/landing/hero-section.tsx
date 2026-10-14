import { Aurora } from "@/components/motion/aurora";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { ScrambleText } from "@/components/motion/scramble-text";
import { Button } from "@/components/ui/button";
import { landing } from "@/data/landing";

export function HeroSection() {
  return (
    <section id="now" className="relative overflow-hidden">
      <Aurora />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-28 sm:py-36">
        <span className="text-primary font-mono text-xs tracking-widest uppercase">
          {landing.eyebrow}
        </span>
        <h1 className="font-display max-w-3xl text-5xl leading-[1.05] font-semibold sm:text-7xl">
          <ScrambleText text={landing.headline} />
        </h1>
        <p className="text-muted-foreground max-w-xl text-lg">{landing.subcopy}</p>
        <div className="flex flex-wrap items-center gap-4">
          <MagneticButton>
            <Button asChild size="lg">
              <a href={landing.primaryCta.href}>{landing.primaryCta.label}</a>
            </Button>
          </MagneticButton>
          <Button asChild size="lg" variant="outline">
            <a href={landing.secondaryCta.href}>{landing.secondaryCta.label}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
