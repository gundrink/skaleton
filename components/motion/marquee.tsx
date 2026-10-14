interface MarqueeProps {
  items: string[];
  label: string;
}

export function Marquee({ items, label }: MarqueeProps) {
  return (
    <section
      aria-label={label}
      className="relative overflow-hidden border-y border-border py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <div className="flex w-max motion-safe:animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {items.map((item) => (
              <li
                key={item}
                className="text-muted-foreground flex items-center gap-3 px-6 text-sm font-medium whitespace-nowrap"
              >
                <span className="bg-primary size-1.5 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
