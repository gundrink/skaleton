import { CountNumber } from "@/components/motion/count-number";
import { liveStats } from "@/data/landing";

/**
 * Shows real on-chain numbers once a project fills `liveStats` from a hook.
 * Until then it says so, instead of inventing figures.
 */
export function LivePanel() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24">
      <div className="bg-surface rounded-xl border border-border p-8">
        {liveStats ? (
          <dl className="grid gap-8 sm:grid-cols-3">
            {liveStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <dt className="text-muted-foreground text-sm">{stat.label}</dt>
                <dd className="font-display text-4xl font-semibold">
                  <CountNumber to={stat.value} />
                </dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="text-muted-foreground text-sm">
            On-chain stats appear here once this project reads an account.
          </p>
        )}
      </div>
    </section>
  );
}
