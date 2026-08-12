import type { Metadata } from "next";
import Link from "next/link";
import { SiteImage, IMAGES } from "@/components/SiteImage";
import { SystemOverview } from "@/components/SystemOverview";
import { CtaBanner } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies from TechNexus Agency—e-commerce, SaaS dashboards, and mobile platforms that scale.",
};

const projects = [
  {
    title: "NexusCommerce Elite",
    tags: ["E-Commerce Development", "Multi-Device Ready"],
    problem:
      "A global retailer needed a high-conversion storefront that could handle multi-region inventory without checkout friction.",
    solution:
      "We engineered a Next.js commerce platform with serverless checkout, CDN edge caching, and AI-assisted merchandising.",
    features: [
      "Multi-region global CDN",
      "One-click serverless checkout",
      "AI recommendations",
      "Real-time inventory",
    ],
    stack: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "SHOPIFY", "NODE.JS"],
    flip: false,
    image: IMAGES.workEcommerce,
  },
  {
    title: "DataInsight Dashboard",
    tags: ["SaaS / Enterprise Software", "Multi-Device Ready"],
    problem:
      "Operations leaders lacked a unified view of supply-chain risk across warehouses and carriers.",
    solution:
      "We delivered an interactive analytics suite with predictive models, RBAC, and automated executive reporting.",
    features: [
      "Interactive real-time visualizations",
      "Predictive supply chain modeling",
      "Role-based access control",
      "Automated PDF reports",
    ],
    stack: ["REACT", "PYTHON", "POSTGRESQL", "D3.JS", "AWS LAMBDA"],
    flip: true,
    image: IMAGES.workDashboard,
  },
  {
    title: "HealthSync Mobile",
    tags: ["Mobile Application", "Multi-Device Ready"],
    problem:
      "A healthcare provider needed secure patient engagement beyond the clinic walls.",
    solution:
      "We shipped a React Native app with biometric integrations, encrypted messaging, and clinical analytics.",
    features: [
      "Apple Health / Google Fit sync",
      "Secure encrypted messaging",
      "Medication reminders",
      "Clinical analytics portal",
    ],
    stack: ["REACT NATIVE", "FIREBASE", "GRAPHQL", "NODE.JS", "TWILIO"],
    flip: false,
    image: IMAGES.workMobile,
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="gradient-mesh overflow-hidden">
        <div className="container-nx relative py-16 lg:py-20">
          <div className="pointer-events-none absolute right-0 top-10 hidden h-64 w-64 opacity-40 lg:block">
            <div className="h-full w-full rotate-12 bg-[repeating-linear-gradient(135deg,transparent,transparent_12px,#bfdbfe_12px,#bfdbfe_13px)]" />
          </div>
          <span className="badge">Case Study</span>
          <h1 className="font-display mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Crafting Digital Solutions That{" "}
            <span className="text-primary">Scale.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            We don’t just build software; we solve complex business challenges
            through strategic engineering and human-centered design.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Discover Your Project
            </Link>
            <Link href="/process" className="btn btn-secondary">
              Our Process
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-nx space-y-16">
          <h2 className="font-display text-center text-3xl font-bold tracking-tight md:text-4xl">
            Featured Projects
          </h2>
          {projects.map((project) => (
            <article
              key={project.title}
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                project.flip ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <SiteImage
                src={project.image}
                alt={project.title}
                className="aspect-[4/3] rounded-2xl shadow-[0_20px_40px_rgba(7,24,51,0.18)] ring-1 ring-border"
              />
              <div>
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  {project.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm leading-relaxed">
                  <p>
                    <strong className="text-foreground">Problem: </strong>
                    <span className="text-muted">{project.problem}</span>
                  </p>
                  <p>
                    <strong className="text-foreground">Solution: </strong>
                    <span className="text-muted">{project.solution}</span>
                  </p>
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-muted">
                  Key Features
                </p>
                <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li key={f} className="text-sm text-foreground/85">
                      • {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-surface px-2.5 py-1 text-[0.68rem] font-bold tracking-wide text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <Link href="/contact" className="btn btn-primary mt-6">
                  Project Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy py-12 text-white">
        <div className="container-nx grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["250+", "Successful Deployments"],
            ["12", "Industry Awards"],
            ["99%", "Client Satisfaction"],
            ["1.2M+", "Lines of Code Shipped"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-sky-300">
                {value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-nx">
          <div className="grid items-center gap-8 rounded-[1.5rem] bg-navy px-8 py-12 text-white lg:grid-cols-2 lg:px-12">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                Ready to build your next breakthrough?
              </h2>
              <p className="mt-3 text-white/75">
                Join teams who trust TechNexus to ship ambitious products without
                sacrificing reliability.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-light">
                  Let&apos;s Talk
                </Link>
                <Link href="/pricing" className="btn btn-ghost-light">
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b1220] p-5 font-mono text-xs leading-relaxed text-sky-200/90 shadow-2xl">
              <p className="text-white/40">// nexus.delivery.ts</p>
              <pre className="mt-3 whitespace-pre-wrap">{`const launch = await technexus.ship({
  product: "breakthrough",
  quality: "enterprise",
  velocity: "sprint",
});

console.log(launch.status); // "production-ready"`}</pre>
            </div>
          </div>
        </div>
      </section>

      <SystemOverview dense />

      <CtaBanner
        variant="blue"
        title="Have a complex challenge?"
        subtitle="Add related packages to your cart, then message our developers with a full checkout brief."
        primaryLabel="Start a Conversation"
        primaryHref="/contact"
        secondaryLabel="See Our Process"
        secondaryHref="/process"
      />
    </>
  );
}
