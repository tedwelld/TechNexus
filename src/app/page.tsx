import Link from "next/link";
import { LiveSystemsMonitor } from "@/components/LiveSystemsMonitor";
import { SiteImage, IMAGES } from "@/components/SiteImage";
import { SystemOverview } from "@/components/SystemOverview";
import { TechBackdrop } from "@/components/TechBackdrop";
import { CheckItem, CtaBanner, SectionHeading } from "@/components/ui";
import { PiIcon } from "@/components/PiIcon";
import { COMPANY } from "@/lib/site";

const services = [
  {
    title: "Software Development",
    description:
      "Enterprise-grade systems engineered for reliability, integration depth, and long-term scale.",
    items: ["ERP & CRM Systems", "API Integrations", "Legacy Modernization"],
    image: IMAGES.serviceSoftware,
  },
  {
    title: "Web Development",
    description:
      "Conversion-focused websites and platforms built with modern frameworks and performance budgets.",
    items: ["Responsive Design", "E-Commerce Platforms", "CMS Solutions"],
    image: IMAGES.serviceWeb,
  },
  {
    title: "IT Consulting",
    description:
      "Strategic infrastructure guidance that hardens security and optimizes operational uptime.",
    items: ["Cloud Infrastructure", "Cybersecurity", "Network Optimization"],
    image: IMAGES.serviceIt,
  },
];

const projects = [
  {
    title: "Global E-Commerce Hub",
    tag: "Web Development",
    image: IMAGES.workEcommerce,
  },
  {
    title: "Enterprise BI Dashboard",
    tag: "Software Systems",
    image: IMAGES.workDashboard,
  },
  {
    title: "Smart Logistics Mobile",
    tag: "Mobile Solutions",
    image: IMAGES.workMobile,
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "12+", label: "Years Experience" },
  { value: "45+", label: "Tech Experts" },
  { value: "98%", label: "Client Retention" },
];

export default function HomePage() {
  return (
    <>
      <section className="gradient-mesh overflow-hidden">
        <TechBackdrop />
        <div className="container-nx grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div className="fade-up space-y-6">
            <span className="badge">Innovation at Scale</span>
            <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.4rem]">
              Your Business.{" "}
              <span className="text-primary">Our Technology.</span>
            </h1>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-muted">
              Software · Web · IT
            </p>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {COMPANY.name} builds software, websites, and IT solutions.
              Select packages, checkout via WhatsApp or email, and talk directly
              with the team who ships the work.
            </p>
            <p className="text-sm font-semibold text-accent">
              {COMPANY.tagline}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Get Started
                <PiIcon name="arrow-right" />
              </Link>
              <Link href="/work" className="btn btn-secondary">
                View Portfolio
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 pt-2 text-sm font-semibold text-muted">
              <span className="inline-flex items-center gap-2">
                <PiIcon name="shield" className="text-primary" /> Secure
              </span>
              <span className="inline-flex items-center gap-2">
                <PiIcon name="bolt" className="text-primary" /> Fast
              </span>
              <span className="inline-flex items-center gap-2">
                <PiIcon name="chart-bar" className="text-primary" /> Scalable
              </span>
            </div>
          </div>

          <div className="fade-up-delay relative">
            <LiveSystemsMonitor />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-nx">
          <SectionHeading
            title="Core Services"
            subtitle="Software, web, and IT—from idea to production."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="card overflow-hidden p-6">
                <SiteImage
                  src={service.image}
                  alt={service.title}
                  className="mb-5 aspect-[16/10] rounded-xl ring-1 ring-border"
                />
                <h3 className="font-display text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn btn-secondary">
              Explore All Services +
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary py-12 text-white">
        <div className="container-nx grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-extrabold tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-nx">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Selected Work
            </h2>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              View All Projects <PiIcon name="arrow-right" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.title}
                href="/work"
                className="card group overflow-hidden transition hover:-translate-y-1"
              >
                <SiteImage
                  src={project.image}
                  alt={project.title}
                  className="aspect-[4/3]"
                />
                <div className="space-y-2 p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {project.tag}
                  </span>
                  <h3 className="font-display text-lg font-bold group-hover:text-primary">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SystemOverview />

      <CtaBanner
        variant="dark"
        title="Ready to scale your technical capabilities?"
        subtitle="Add packages to your cart, then checkout straight to our team on WhatsApp or email."
        primaryLabel="Contact Us Now"
        primaryHref="/contact"
        secondaryLabel="Our Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
