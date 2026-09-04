import type { Metadata } from "next";
import Link from "next/link";
import { AddToCartButton } from "@/components/AddToCartButton";
import { FaqList } from "@/components/FaqList";
import { SiteImage, IMAGES } from "@/components/SiteImage";
import { SystemOverview } from "@/components/SystemOverview";
import { CheckItem, CtaBanner, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Managed IT Solutions",
  description:
    "Managed IT, helpdesk, networking, and cloud infrastructure from Axentra Tech Solutions.",
};

const faqs = [
  {
    q: "What is your average response time?",
    a: "Priority incidents average a 15-minute first response, with 24/7 coverage across our global support grid.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "We offer flexible month-to-month and annual partnership models. Most clients choose annual for better SLA economics.",
  },
  {
    q: "Can you work with our in-house team?",
    a: "Yes. We integrate as an extension of your IT org—sharing runbooks, channels, and escalation paths.",
  },
  {
    q: "How do you handle security compliance?",
    a: "We align controls to your compliance targets (SOC2-ready practices, MFA, least privilege, and continuous monitoring).",
  },
];

export default function ItServicesPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="container-nx grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <div className="space-y-6">
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Managed IT Solutions Built for Growth.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              We design, deploy, and manage IT ecosystems that keep your teams
              productive, your data protected, and your infrastructure ready to
              scale.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Request IT Audit
              </Link>
              <Link href="/services" className="btn btn-ghost-light">
                View Our Services
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["99.9%", "Uptime Guarantee"],
              ["15min", "Avg. Response Time"],
              ["500+", "Satisfied Clients"],
              ["24/7", "Global Support"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <p className="font-display text-3xl font-extrabold text-sky-300">
                  {value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/65">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-nx grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="badge">IT Support</span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Responsive IT Support & Helpdesk
            </h2>
            <p className="mt-3 text-muted">
              Keep operations flowing with proactive monitoring, rapid ticket
              resolution, and human expertise when it matters most.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {[
                "Remote Monitoring",
                "Cybersecurity Hardening",
                "Patch Management",
                "On-site Support",
                "Cloud Backup",
                "Team Training",
              ].map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <AddToCartButton itemId="it-support" label="Add IT Support to cart" />
              <Link href="/contact" className="btn btn-secondary">
                Explore Service Details →
              </Link>
            </div>
          </div>
          <SiteImage
            src={IMAGES.itSupport}
            alt="IT support operations"
            className="aspect-[5/4] rounded-2xl ring-1 ring-border"
          />
        </div>
      </section>

      <section className="bg-surface py-8">
        <div className="container-nx flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-display text-xl font-bold">
            Ready to secure your business?
          </p>
          <Link href="/contact" className="btn btn-primary bg-navy hover:bg-navy-2">
            Book A Consultation
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container-nx grid items-center gap-10 lg:grid-cols-2">
          <SiteImage
            src={IMAGES.itNetwork}
            alt="Network connectivity"
            className="order-2 aspect-[5/4] rounded-2xl ring-1 ring-border lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <span className="badge">Networking</span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Advanced Networking & Connectivity
            </h2>
            <p className="mt-3 text-muted">
              High-availability networks engineered for secure collaboration
              across offices, clouds, and remote teams.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {[
                "Wi-Fi Setup",
                "SD-WAN",
                "Firewall / VPN",
                "Fiber Optic",
                "VLAN Design",
                "Health Audits",
              ].map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
            <AddToCartButton
              itemId="it-network"
              label="Add Networking to cart"
              variant="secondary"
              className="mt-6"
            />
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-nx">
          <SectionHeading
            eyebrow="Our Advantage"
            title="Why Leading Firms Trust Our IT Expertise"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Security First", "Defense-in-depth controls across endpoints and identity."],
              ["Rapid Deployment", "Stand up resilient environments without disrupting work."],
              ["Scalable Design", "Architectures that expand cleanly with headcount and load."],
              ["Proactive Monitoring", "Catch anomalies before users feel the impact."],
            ].map(([title, text]) => (
              <article key={title} className="card p-5">
                <h3 className="font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-nx grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="badge">Infrastructure</span>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Scalable Server & Cloud Infrastructure
            </h2>
            <p className="mt-3 text-muted">
              Migrate, modernize, and operate cloud estates with reliability and
              cost control as first-class goals.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {[
                "Cloud Migration",
                "Data Centers",
                "Disaster Recovery",
                "Virtualization",
                "Automation",
                "Hyper-converged Systems",
              ].map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
            <AddToCartButton
              itemId="it-cloud"
              label="Add Cloud Infrastructure to cart"
              className="mt-6"
            />
          </div>
          <SiteImage
            src={IMAGES.itCloud}
            alt="Cloud infrastructure"
            className="aspect-[5/4] rounded-2xl ring-1 ring-border"
          />
        </div>
      </section>

      <section className="bg-navy py-14 text-white">
        <div className="container-nx grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Our Technical Partnerships
            </h2>
            <p className="mt-3 max-w-xl text-white/70">
              We build on proven platforms so your stack stays supportable,
              secure, and ready for the next phase of growth.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-300">
                  Cloud & Virtual
                </p>
                <p className="mt-2 text-sm text-white/75">
                  AWS · Azure · VMware · Google Cloud
                </p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-300">
                  Security & Network
                </p>
                <p className="mt-2 text-sm text-white/75">
                  Cisco Meraki · Palo Alto · Okta · Cloudflare
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {["AWS", "Azure", "VMware", "Cisco", "Okta", "CF"].map((p) => (
              <div
                key={p}
                className="grid aspect-square place-items-center rounded-2xl border border-white/10 bg-white/5 text-sm font-bold"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-nx grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="card mt-6 bg-primary p-6 text-white">
              <p className="font-display text-xl font-bold">
                Still have questions?
              </p>
              <p className="mt-2 text-sm text-white/80">
                Our support architects are ready to walk through your environment.
              </p>
              <Link href="/contact" className="btn btn-light mt-5">
                Contact Support
              </Link>
            </div>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <SystemOverview dense />

      <CtaBanner
        title="Ready to optimize your IT infrastructure?"
        subtitle="Add IT packages to your cart, then WhatsApp or email our team with your full selection."
        primaryLabel="Free IT Proposal"
        primaryHref="/contact"
        secondaryLabel="Speak to an Expert"
        secondaryHref="/contact"
      />
    </>
  );
}
