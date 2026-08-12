import type { Metadata } from "next";
import Link from "next/link";
import { DirectComms } from "@/components/DirectComms";
import { SiteImage, IMAGES } from "@/components/SiteImage";
import { SystemOverview } from "@/components/SystemOverview";
import { DEVELOPERS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet TechNexus Agency—our mission, developers Tedwell and Amunike, and technology-driven delivery culture.",
};

const engineers = [
  {
    name: DEVELOPERS[0].name,
    title: DEVELOPERS[0].role,
    bio: `Reachable on WhatsApp ${DEVELOPERS[0].whatsapp} and ${DEVELOPERS[0].email}. Leads architecture, delivery systems, and client technical strategy across web, software, and infrastructure programs.`,
    skills: ["System Design", "Node.js", "React/Next.js", "AWS"],
    image: IMAGES.team1,
  },
  {
    name: DEVELOPERS[1].name,
    title: DEVELOPERS[1].role,
    bio: `Reachable on WhatsApp ${DEVELOPERS[1].whatsapp} and ${DEVELOPERS[1].email}. Focuses on resilient systems engineering, integrations, and hands-on build quality from MVP through production ops.`,
    skills: ["Systems Engineering", "TypeScript", "Cloud Ops", "Integrations"],
    image: IMAGES.team2,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.35),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.2),transparent_35%),linear-gradient(160deg,#071833,#0c274d)]" />
        <div className="container-nx relative py-20 lg:py-24">
          <span className="badge bg-white/10 text-sky-200">Beyond the Code</span>
          <h1 className="font-display mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Bridging the Gap Between Vision and Velocity.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Innovate. Develop. Elevate. Combine technical expertise with
            strategic thinking—and keep a direct line to the developers shipping
            the work.
          </p>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-nx grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 text-muted">
              We empower organizations through high-performance software,
              durable infrastructure, and partnerships built on transparency.
              Clients can assemble packages in the cart, checkout via WhatsApp
              or email, and stay close to delivery through the full lifecycle.
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <p className="font-display font-bold">Precision Engineering</p>
                <p className="text-sm text-muted">
                  Robust solutions tuned for reliability and measurable performance.
                </p>
              </li>
              <li>
                <p className="font-display font-bold">Innovative Mindset</p>
                <p className="text-sm text-muted">
                  Creative problem-solving that creates lasting competitive edge.
                </p>
              </li>
              <li>
                <p className="font-display font-bold">Holistic Partnership</p>
                <p className="text-sm text-muted">
                  Security, maintainability, and long-term ownership baked in.
                </p>
              </li>
            </ul>
          </div>
          <div className="relative">
            <SiteImage
              src={IMAGES.aboutMission}
              alt="TechNexus mission"
              className="aspect-[5/4] rounded-2xl"
            />
            <blockquote className="absolute bottom-5 left-5 right-5 rounded-xl border border-border bg-[var(--panel-bg)] p-5 shadow-xl">
              <p className="text-sm leading-relaxed text-foreground">
                “At TechNexus, we don’t just build features; we build foundations
                for the next generation of industry leaders.”
              </p>
              <footer className="mt-3 text-xs font-bold uppercase tracking-wider text-primary">
                Technical Leadership Team
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-nx">
          <div className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Meet the Developers
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted">
              Tedwell and Amunike—reachable on WhatsApp and email with ready
              message templates from Contact or cart checkout.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {engineers.map((person) => (
              <article key={person.name} className="card overflow-hidden">
                <div className="grid md:grid-cols-[0.8fr_1.2fr]">
                  <SiteImage
                    src={person.image}
                    alt={person.name}
                    className="h-full min-h-48 md:min-h-full"
                  />
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-primary">
                      {person.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {person.bio}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {person.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-surface px-2.5 py-1 text-xs font-semibold text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-nx">
          <DirectComms />
        </div>
      </section>

      <SystemOverview dense />

      <section className="section">
        <div className="container-nx">
          <div className="card flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold md:text-3xl">
                Ready to accelerate your next project?
              </h2>
              <p className="mt-2 text-muted">
                See how we work—or talk with a developer about your roadmap.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/process" className="btn btn-secondary">
                How We Work
              </Link>
              <Link href="/contact" className="btn btn-primary">
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
