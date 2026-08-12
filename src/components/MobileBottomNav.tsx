"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiIcon } from "./PiIcon";

const items = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/services", label: "Services", icon: "th-large" },
  { href: "/work", label: "Work", icon: "briefcase" },
  { href: "/pricing", label: "Pricing", icon: "dollar" },
  { href: "/contact", label: "Contact", icon: "envelope" },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-[var(--header-bg)] backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Mobile"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-5 px-1 pt-1.5 pb-1.5">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-0.5 rounded-xl px-1 py-1.5 text-[0.65rem] font-semibold transition-colors ${
                  active
                    ? "text-primary"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <span
                  className={`grid size-9 place-items-center rounded-xl transition-colors ${
                    active ? "bg-primary-soft" : "bg-transparent"
                  }`}
                >
                  <PiIcon name={item.icon} size="lg" />
                </span>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
