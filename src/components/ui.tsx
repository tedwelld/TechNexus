import Link from "next/link";
import { PiIcon } from "./PiIcon";

type CtaProps = {
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "blue" | "navy" | "dark";
};

export function CtaBanner({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "blue",
}: CtaProps) {
  const bg =
    variant === "blue"
      ? "bg-primary"
      : variant === "navy"
        ? "bg-navy"
        : "bg-[#151b28]";

  return (
    <section className="section-tight">
      <div className="container-nx">
        <div
          className={`${bg} relative overflow-hidden rounded-2xl px-5 py-10 text-center text-white sm:rounded-[1.5rem] sm:px-8 sm:py-12 md:px-14 md:py-14`}
        >
          <div className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 left-10 size-56 rounded-full bg-cyan-300/10 blur-2xl" />
          <h2 className="font-display mx-auto max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 md:text-lg">
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href={primaryHref} className="btn btn-light">
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link href={secondaryHref} className="btn btn-ghost-light">
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mb-10 max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && <span className="badge mb-4">{eyebrow}</span>}
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-foreground/85">
      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
        <PiIcon name="check" size="sm" />
      </span>
      <span>{children}</span>
    </li>
  );
}
