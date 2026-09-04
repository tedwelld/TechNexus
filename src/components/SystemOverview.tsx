import { SYSTEM_OVERVIEW } from "@/lib/site";

export function SystemOverview({
  dense = false,
}: {
  dense?: boolean;
}) {
  return (
    <section className={dense ? "section-tight bg-surface" : "section bg-surface"}>
      <div className="container-nx">
        <div className="mb-8 max-w-3xl">
          <span className="badge">How we work</span>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Select packages, checkout, and reach developers
          </h2>
          <p className="mt-3 text-muted">{SYSTEM_OVERVIEW.summary}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {SYSTEM_OVERVIEW.pillars.map((pillar) => (
            <article key={pillar.title} className="card p-5">
              <h3 className="font-display text-lg font-bold">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {pillar.detail}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="card p-5">
            <h3 className="font-display text-lg font-bold">Platform capabilities</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {SYSTEM_OVERVIEW.capabilities.map((item) => (
                <li key={item} className="text-sm text-foreground/85">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="font-display text-lg font-bold">Delivery commitments</h3>
            <ul className="mt-3 space-y-2">
              {SYSTEM_OVERVIEW.sla.map((item) => (
                <li key={item} className="text-sm text-foreground/85">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
