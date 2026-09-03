import type { Metadata } from "next";
import Link from "next/link";
import { SiteImage, IMAGES } from "@/components/SiteImage";
import { SystemOverview } from "@/components/SystemOverview";
import { CheckItem, CtaBanner } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How TechNexus builds excellence—consultation, requirements, proposal, development, and deployment support.",
};

const steps = [
  {
    n: "01",
    title: "Consultation",
    text: "We align on vision, constraints, and success metrics before a single line of code.",
    items: [
      "Stakeholder Interviews",
      "Market Research",
      "Feasibility Analysis",
      "Technology Audit",
    ],
    image: IMAGES.process1,
  },
  {
    n: "02",
    title: "Requirements",
    text: "Technical specifications become a shared source of truth for product and engineering.",
    items: [
      "Feature Mapping",
      "User Journey Design",
      "Technical Stack",
      "Security Planning",
    ],
    image: IMAGES.process2,
  },
  {
    n: "03",
    title: "Proposal",
    text: "Transparent roadmaps, resourcing, and risk assessment—so investment decisions are clear.",
    items: [
      "Detailed Project Roadmap",
      "Resource Allocation",
      "Budget Breakdown",
      "Risk Assessment",
    ],
    image: IMAGES.process3,
  },
  {
    n: "04",
    title: "Development",
    text: "Agile engineering with demos, tests, and continuous integration from the first sprint.",
    items: [
      "Sprint-Based Coding",
      "Regular Demo Sessions",
      "Unit & Integration Testing",
      "CI/CD Implementation",
    ],
    image: IMAGES.process4,
  },
  {
    n: "05",
    title: "Deployment & Support",
    text: "Zero-drama launches with monitoring and maintenance that protect production value.",
    items: [
      "Zero-downtime Launch",
      "Post-Launch Audit",
      "24/7 Monitoring",
      "Ongoing Maintenance",
    ],
    image: IMAGES.process5,
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="gradient-mesh">
        <div className="container-nx py-16 text-center lg:py-20">
          <span className="badge">The TechNexus Way</span>
          <h1 className="font-display mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            How We Build Excellence.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            A structured, high-performance workflow that turns ambition into
            shipped software—with clarity at every milestone.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Start Your Project →
            </Link>
            <Link href="/work" className="text-sm font-semibold text-primary">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-nx space-y-16">
          {steps.map((step, index) => (
            <article
              key={step.n}
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <SiteImage
                src={step.image}
                alt={`Step ${step.n}: ${step.title}`}
                className="aspect-[5/4] rounded-2xl ring-1 ring-border"
              />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
                  Step {step.n}
                </p>
                <h2 className="font-display mt-2 text-3xl font-bold tracking-tight">
                  {step.title}
                </h2>
                <p className="mt-3 text-muted">{step.text}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {step.items.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#151b28] py-16 text-white">
        <div className="container-nx">
          <h2 className="font-display mb-10 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Why Our Process Works
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Speed to Market", "Agile cycles that compress time-to-value."],
              ["Risk Mitigation", "Early clarity prevents late-stage pivots."],
              ["Total Transparency", "Direct access to the builders shipping work."],
              ["Code Quality", "Enterprise-grade architecture and testing."],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SystemOverview dense />

      <CtaBanner
        title="Ready to build your next technical breakthrough?"
        subtitle="Book a free consultation—or checkout selected packages to our team."
        primaryLabel="Book Free Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}
