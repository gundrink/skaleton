import { AnimatedContent } from "@/components/motion/animated-content";
import { landing } from "@/data/landing";

export function StepsSection() {
  return (
    <section id="how" className="mx-auto w-full max-w-6xl px-6 py-24">
      <AnimatedContent>
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          How it works
        </h2>
      </AnimatedContent>
      <ol className="mt-12 grid gap-10 sm:grid-cols-3">
        {landing.steps.map((step, index) => (
          <AnimatedContent key={step.title} delay={index * 0.1}>
            <li className="flex flex-col gap-3">
              <span className="text-primary font-mono text-sm">
                0{index + 1}
              </span>
              <h3 className="font-display text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.body}
              </p>
            </li>
          </AnimatedContent>
        ))}
      </ol>
    </section>
  );
}
