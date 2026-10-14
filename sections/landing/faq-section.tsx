import { landing } from "@/data/landing";

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto w-full max-w-6xl px-6 py-24">
      <h2 className="font-display text-3xl font-semibold sm:text-4xl">
        Questions
      </h2>
      <div className="mt-12 divide-y divide-border border-y border-border">
        {landing.faqs.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
              {faq.question}
              <span className="text-muted-foreground transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
