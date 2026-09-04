import type { Metadata } from "next";
import Link from "next/link";
import { AddToCartButton } from "@/components/AddToCartButton";
import { SiteImage, IMAGES } from "@/components/SiteImage";
import { SystemOverview } from "@/components/SystemOverview";
import { CheckItem, CtaBanner, SectionHeading } from "@/components/ui";
import { PiIcon } from "@/components/PiIcon";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, enterprise software systems, and engineering from Axentra Tech Solutions.",
};

const webPlans = [
  {
    id: "web-starter",
    name: "Starter",
    price: "$280",
    features: [
      "Single Page App",
      "Responsive Design",
      "Essential SEO",
      "Contact Integrations",
      "Launch Support",
    ],
    popular: false,
  },
  {
    id: "web-business",
    name: "Business",
    price: "$550",
    features: [
      "Up to 5 Pages",
      "CMS Integration",
      "Advanced SEO",
      "Analytics Setup",
      "Performance Tuning",
      "3-Month Support",
    ],
    popular: true,
  },
  {
    id: "web-ecommerce",
    name: "E-Commerce",
    price: "$850",
    features: [
      "Unlimited Products",
      "Payment Gateway",
      "Inventory Management",
      "Checkout Optimization",
      "Security Hardening",
      "Priority Support",
    ],
    popular: false,
  },
];

const edges = [
  {
    title: "Performance First",
    text: "We obsess over load times, Core Web Vitals, and SEO impact from day one.",
  },
  {
    title: "Security & Privacy",
    text: "Encryption, access controls, and continuous auditing are built into delivery.",
  },
  {
    title: "Agile Workflow",
    text: "Iterative sprints keep stakeholders close and feedback continuously applied.",
  },
  {
    title: "Global Scalability",
    text: "Cloud-native architectures designed to grow with demand—not against it.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="gradient-mesh">
        <div className="container-nx grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div className="fade-up space-y-6">
            <span className="badge">Our Expertise</span>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Technical Solutions{" "}
              <span className="text-primary">Tailored to Your Vision.</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              From websites to enterprise systems, we deliver engineering that
              drives growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Start Your Project
              </Link>
              <Link href="/work" className="btn btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
          <div className="fade-up-delay relative aspect-[5/4] overflow-hidden rounded-2xl shadow-[0_25px_50px_rgba(11,102,255,0.15)] ring-1 ring-border">
            <SiteImage
              src={IMAGES.servicesHero}
              alt="Engineering workspace"
              className="absolute inset-0"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 via-transparent to-primary/10" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-nx">
          <SectionHeading
            eyebrow="Web Engineering"
            title="Website Development"
            subtitle="React-powered experiences engineered for speed, conversion, and maintainability."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {webPlans.map((plan) => (
              <article
                key={plan.id}
                className={`card relative p-6 ${
                  plan.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-navy px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 font-display text-4xl font-extrabold">
                  {plan.price}
                  <span className="text-base font-semibold text-muted">
                    /project
                  </span>
                </p>
                <ul className="mt-5 space-y-2.5">
                  {plan.features.map((f) => (
                    <CheckItem key={f}>{f}</CheckItem>
                  ))}
                </ul>
                <AddToCartButton
                  itemId={plan.id}
                  label={`Add ${plan.name} to cart`}
                  variant={plan.popular ? "primary" : "secondary"}
                  className="mt-7 w-full"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-nx">
          <SectionHeading
            eyebrow="Backend & Systems"
            title="Enterprise Software Systems"
            subtitle="Scalable, secure platforms for ERP, SaaS, and mission-critical operations."
            align="left"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="card p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                Starting from $1,200
              </p>
              <h3 className="font-display mt-2 text-2xl font-bold">
                Enterprise Resource Planning (ERP)
              </h3>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  "Inventory Sync",
                  "HR / Payroll Modules",
                  "Finance Automation",
                  "Role-based Access",
                  "Reporting Suites",
                  "Legacy Connectors",
                ].map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
              <AddToCartButton
                itemId="erp"
                label="Add ERP to cart"
                variant="secondary"
                className="mt-6"
              />
            </article>
            <article className="card p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                Starting from $2,500
              </p>
              <h3 className="font-display mt-2 text-2xl font-bold">
                Custom SaaS Development
              </h3>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {[
                  "Multi-tenant Architecture",
                  "Cloud Infrastructure",
                  "Subscription Billing",
                  "Observability Stack",
                  "API Ecosystem",
                  "Growth Experiments",
                ].map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
              <AddToCartButton
                itemId="saas"
                label="Add SaaS to cart"
                variant="secondary"
                className="mt-6"
              />
            </article>
          </div>
          <div className="mt-8">
            <Link href="/services/it" className="btn btn-secondary">
              Explore Managed IT Services →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-nx">
          <SectionHeading
            eyebrow="Our Edge"
            title="Why Choose Us"
            subtitle="Clarity, velocity, and durable engineering."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {edges.map((edge) => (
              <article key={edge.title} className="rounded-2xl bg-surface p-5">
                <div className="mb-4 grid size-11 place-items-center rounded-xl bg-primary text-white">
                  <PiIcon name="verified" />
                </div>
                <h3 className="font-display text-lg font-bold">{edge.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {edge.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SystemOverview dense />

      <CtaBanner
        title="Ready to Build Your Next Digital Asset?"
        subtitle="Add packages to your cart, then message our team with a complete checkout brief."
        primaryLabel="Schedule a Consultation"
        primaryHref="/contact"
        secondaryLabel="View Pricing Packages"
        secondaryHref="/pricing"
      />
    </>
  );
}
