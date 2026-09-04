"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartButton } from "./CartDrawer";
import { Logo } from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-[var(--header-bg)] backdrop-blur-md">
      <div className="container-nx flex h-16 items-center justify-between gap-2 sm:h-[72px] sm:gap-4">
        <div className="min-w-0 shrink">
          <Logo />
        </div>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.78rem] font-semibold uppercase tracking-[0.12em] transition-colors ${
                  active ? "text-primary" : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <CartButton />
          <Link
            href="/enquiry"
            className="btn btn-primary hidden sm:inline-flex"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </header>
  );
}
