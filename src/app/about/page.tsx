import type { Metadata } from "next";
import Link from "next/link";
import { DirectComms } from "@/components/DirectComms";
import { SiteImage, IMAGES } from "@/components/SiteImage";
import { SystemOverview } from "@/components/SystemOverview";
import { COMPANY, DEVELOPERS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${COMPANY.name}—Tedwell, Amunike, and Stephen.`,
};

const engineers = [
  {
    name: DEVELOPERS[0].name,
    title: "Full Stack Developer / Software Engineer",
    bio: `Reachable on WhatsApp ${DEVELOPERS[0].whatsapp}. Full stack developer and software engineer focused mainly on ASP.NET architecture (C#).`,
    skills: ["ASP.NET", "C#", ".NET"],
    image: IMAGES.team1,
  },
  {
    name: DEVELOPERS[1].name,
    title: "Full Stack Developer / Software Engineer",
    bio: `Reachable on WhatsApp ${DEVELOPERS[1].whatsapp}. Full stack developer and software engineer focused mainly on ASP.NET architecture (C#).`,
    skills: ["ASP.NET", "C#", ".NET"],
    image: IMAGES.team2,
  },
  {
    name: "Stephen",
    title: "Senior Network Engineer",
    bio: "Designs, secures, and maintains the networks that keep Axentra solutions online—LAN/WAN, connectivity, firewalls, and infrastructure health so products and clients stay reachable.",
    skills: null,
    image: IMAGES.teamStephen,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.35),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(245,158,11,0.2),transparent_35%),linear-gradient(160deg,#071833,#0c274d)]" />
        <div className="container-nx relative py-20 lg:py-24">
          <span className="badge bg-white/10 text-sky-200">About</span>
          <h1 className="font-display mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            {COMPANY.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {COMPANY.tagline} Software, platforms, and IT—with a direct line to
            the people building them.
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
              We help organizations ship reliable software and infrastructure.
              Assemble packages in the cart, checkout via WhatsApp or email, and
              stay close to delivery.
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <p className="font-display font-bold">Precision Engineering</p>
                <p className="text-sm text-muted">
                  Solutions built for reliability and clear performance.
                </p>
              </li>
              <li>
                <p className="font-display font-bold">Practical Delivery</p>
                <p className="text-sm text-muted">
                  Scoped proposals, direct communication, and ownership that
                  lasts.
                </p>
              </li>
              <li>
                <p className="font-display font-bold">Partnership</p>
                <p className="text-sm text-muted">
                  Security, maintainability, and long-term support baked in.
                </p>
              </li>
            </ul>
          </div>
          <div className="relative">
            <SiteImage
              src={IMAGES.aboutMission}
              alt={`${COMPANY.shortName} mission`}
              className="aspect-[5/4] rounded-2xl"
            />
            <blockquote className="absolute bottom-5 left-5 right-5 rounded-xl border border-border bg-[var(--panel-bg)] p-5 shadow-xl">
              <p className="text-sm leading-relaxed text-foreground">
                “At {COMPANY.shortName}, we don’t just build features; we build
                foundations for lasting products.”
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
              Meet the Team
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted">
              Tedwell, Amunike, and Stephen—software and networking behind every{" "}
              {COMPANY.shortName} delivery.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {engineers.map((person) => (
              <article
                key={person.name}
                className="card flex h-full flex-col overflow-hidden"
              >
                <SiteImage
                  src={person.image}
                  alt={person.name}
                  className="aspect-[4/5] w-full object-cover"
                  priority={person.name === "Stephen"}
                />
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="font-display text-xl font-bold">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    {person.title}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {person.bio}
                  </p>
                  {person.skills && person.skills.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-primary">
                        Focus
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {person.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md bg-surface px-2.5 py-1 text-xs font-semibold text-foreground/80"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
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
                Ready for your next project?
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
