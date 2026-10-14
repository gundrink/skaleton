import { Marquee } from "@/components/motion/marquee";
import { landing } from "@/data/landing";
import { FaqSection } from "@/sections/landing/faq-section";
import { HeroSection } from "@/sections/landing/hero-section";
import { LivePanel } from "@/sections/landing/live-panel";
import { StepsSection } from "@/sections/landing/steps-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Marquee items={landing.highlights} label="Highlights" />
      <StepsSection />
      <LivePanel />
      <FaqSection />
    </>
  );
}
