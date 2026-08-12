import type { Metadata } from "next";
import { SystemOverview } from "@/components/SystemOverview";
import { TechGrid } from "@/components/TechGrid";
import { CtaBanner, SectionHeading } from "@/components/ui";
import { PiIcon } from "@/components/PiIcon";

export const metadata: Metadata = {
  title: "Tech Stack",
  description:
    "Explore the TechNexus technical arsenal—frontend, backend, databases, infrastructure, and mobile.",
};

export default function StackPage() {
  return (
    <>
      <section className="gradient-mesh">
        <div className="container-nx grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div className="space-y-6">
            <span className="badge">Our Technical Arsenal</span>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Built on the{" "}
              <span className="text-primary">Best Tools</span> in the Industry.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              A curated stack for scalable, future-proof solutions—selected for
              velocity without sacrificing reliability.
            </p>
            <ul className="flex flex-wrap gap-4 text-sm font-semibold text-foreground/85">
              {["Scalable Architecture", "High Performance", "Security First"].map(
                (item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <PiIcon name="check" className="text-primary" /> {item}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="card p-6">
              <div className="mb-5 flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-lg bg-primary text-white">
                <PiIcon name="bolt" />
              </span>
              <h2 className="font-display text-lg font-bold">Nexus Engine</h2>
            </div>
            {[
              ["Cloud-Native Deployment", 100],
              ["Type-Safe Architecture", 100],
              ["Automated CI/CD", 98],
              ["Component Reliability", 99],
            ].map(([label, value]) => (
              <div key={String(label)} className="mb-4">
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="font-semibold text-primary">{label}</span>
                  <span className="font-bold">{value}%</span>
                </div>
                <div className="progress">
                  <span style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-nx">
          <SectionHeading
            title="Expertise Index"
            subtitle="Explore our proficiencies across different domains."
          />
          <TechGrid />
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-nx grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="badge">Our Philosophy</span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              The Nexus Philosophy: Pragmatic Innovation.
            </h2>
            <p className="mt-3 text-muted">
              Every technology we adopt must earn its place through longevity,
              clarity, and delivery speed.
            </p>
            <ol className="mt-6 space-y-4">
              {[
                ["Maintainability", "Code that lives longer than the developers."],
                ["Interoperability", "Seamless communication across microservices."],
                ["Developer Velocity", "Rapid iterations without sacrificing quality."],
              ].map(([title, text], i) => (
                <li key={title} className="flex gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display font-bold">{title}</p>
                    <p className="text-sm text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["12+", "Core Frameworks", "bg-surface-2"],
              ["50+", "API Integrations", "bg-[var(--panel-bg)] border border-border"],
              ["100%", "Data Integrity", "bg-primary text-white"],
              ["Zero", "Critical Vulnerabilities", "bg-surface-2"],
            ].map(([value, label, cls]) => (
              <div key={label} className={`rounded-2xl p-5 ${cls}`}>
                <p className="font-display text-3xl font-extrabold">{value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wider opacity-80">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SystemOverview dense />

      <CtaBanner
        variant="navy"
        title="Ready to build your next masterpiece?"
        subtitle="Our stack is production-ready—select packages, checkout, and talk to the developers."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
