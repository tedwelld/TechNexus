import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { PricingToggle } from "@/components/PricingToggle";
import { SiteImage, IMAGES } from "@/components/SiteImage";
import { SystemOverview } from "@/components/SystemOverview";
import { CtaBanner, SectionHeading } from "@/components/ui";
import { PiIcon } from "@/components/PiIcon";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent Axentra pricing for websites and software systems—clear tiers, no hidden costs.",
};

const faqs = [
  {
    q: "How do you determine the final cost of a custom project?",
    a: "We scope complexity, integrations, compliance needs, and timeline. You receive a fixed proposal with assumptions, milestones, and optional add-ons before kickoff.",
  },
  {
    q: "Can we start with a smaller package and upgrade later?",
    a: "Absolutely. Most clients begin with a focused MVP or Business tier and expand modules as ROI becomes clear.",
  },
  {
    q: "What’s included in post-launch support?",
    a: "Bug fixes, monitoring, dependency updates, and prioritized enhancement slots based on your selected support window.",
  },
  {
    q: "Do we own the code?",
    a: "Yes. Upon final payment, you retain full ownership of project source code and production assets.",
  },
];

const comparison = [
  ["Tech Stack", "Modern SPA", "Next.js + CMS", "Custom Enterprise"],
  ["Request Limits", "Standard", "Elevated", "Unlimited / SLA"],
  ["Database Sync", "Basic", "Scheduled", "Realtime"],
  ["Security Protocols", "Essentials", "Hardened", "Compliance-ready"],
  ["Post-Launch Support", "1 Month", "3 Months", "Priority Retainer"],
  ["Load Balancing", "—", "Managed", "Global Edge"],
];

export default function PricingPage() {
  return (
    <>
      <section className="gradient-mesh">
        <div className="container-nx grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div className="space-y-6">
            <span className="badge">Transparent Pricing</span>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Investment in{" "}
              <span className="text-primary">Digital Excellence</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Quality software isn’t an expense—it’s an asset. We provide clear,
              tiered pricing to help your business scale with precision and
              performance. Add any mix of packages to your cart, then checkout to
              WhatsApp or email our team with a complete brief.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Get a Quote
              </Link>
              <Link href="/work" className="btn btn-secondary">
                View Case Studies
              </Link>
            </div>
          </div>
          <SiteImage
            src={IMAGES.pricingHero}
            alt="Digital excellence pricing"
            className="aspect-[5/4] rounded-2xl shadow-[0_25px_50px_rgba(11,102,255,0.12)] ring-1 ring-border"
            priority
          />
        </div>
      </section>

      <section className="section">
        <div className="container-nx">
          <SectionHeading
            eyebrow="Pricing Models"
            title="Tailored Packages for Every Scale"
            subtitle="Choose a starting point that matches your ambition—then grow without re-platforming."
          />
          <PricingToggle />
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-nx">
          <SectionHeading
            eyebrow="The Tech Archive"
            title="Full Transparency Comparison"
            subtitle="See how capabilities expand across Starter, Business, and Enterprise tiers."
          />
          <div className="card overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-border bg-[var(--panel-bg)]">
                <tr>
                  <th className="px-5 py-4 font-semibold text-muted">Feature</th>
                  <th className="px-5 py-4 font-semibold">Starter</th>
                  <th className="px-5 py-4 font-semibold">Business</th>
                  <th className="px-5 py-4 font-semibold text-primary">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row[0]} className="border-b border-border/70">
                    {row.map((cell, i) => (
                      <td
                        key={`${row[0]}-${i}`}
                        className={`px-5 py-4 ${
                          i === 0
                            ? "font-semibold text-foreground"
                            : i === 3
                              ? "font-medium text-primary"
                              : "text-muted"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-nx grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Advantage"
              title="Why our pricing reflects true value"
              align="left"
            />
            <ul className="space-y-5">
              {[
                ["Zero Hidden Costs", "Scope and assumptions are documented upfront."],
                ["Code Ownership", "You keep the IP you fund—no lock-in surprises."],
                ["Rapid Delivery", "Sprint cadence keeps time-to-value measurable."],
                ["Clean Architecture", "Maintainable systems that reduce long-term cost."],
              ].map(([title, text]) => (
                <li key={title} className="flex gap-3">
                  <span className="mt-1 grid size-8 place-items-center rounded-full bg-primary-soft text-primary">
                    <PiIcon name="check" size="sm" />
                  </span>
                  <div>
                    <p className="font-display font-bold">{title}</p>
                    <p className="text-sm text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Web Mastery", "Mobile First", "Data Integrity", "System Logic"].map(
              (title) => (
                <article key={title} className="card p-5">
                <div className="mb-3 grid size-10 place-items-center rounded-xl bg-primary text-white">
                  <PiIcon name="sparkles" />
                </div>
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-muted">
                    Specialty delivery patterns that protect quality as scope expands.
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-nx max-w-3xl">
          <SectionHeading
            eyebrow="Finding Answers"
            title="Frequently Asked Questions"
          />
          <FaqList items={faqs} />
        </div>
      </section>

      <SystemOverview dense />

      <CtaBanner
        title="Ready to start your digital journey?"
        subtitle="Book a free consultation—or checkout your cart to our information desk on WhatsApp."
        primaryLabel="Book Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore Our Work"
        secondaryHref="/work"
      />
    </>
  );
}
