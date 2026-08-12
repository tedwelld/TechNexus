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
      <div className="container-nx flex h-[76px] items-center justify-between gap-4">
        <Logo />

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

        <div className="flex items-center gap-3">
          <CartButton />
          <Link href="/contact" className="btn btn-primary hidden sm:inline-flex">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
