"use client";

import { useMemo, useState } from "react";
import {
  INFO_DESK,
  buildProjectMessage,
  mailtoUrl,
  whatsappUrl,
} from "@/lib/site";
import { useCart } from "./CartProvider";
import { PiIcon } from "./PiIcon";

export function CartButton() {
  const { count, toggleCart } = useCart();

  return (
    <button
      type="button"
      onClick={toggleCart}
      className="relative grid size-10 place-items-center rounded-lg border border-border bg-[var(--panel-bg)] text-foreground transition hover:border-primary/40 hover:text-primary"
      aria-label={`Open cart${count ? ` (${count} items)` : ""}`}
    >
      <PiIcon name="shopping-cart" />
      {count > 0 && (
        <span className="absolute -right-1.5 -top-1.5 grid min-w-5 place-items-center rounded-full bg-accent px-1 text-[0.65rem] font-bold text-white">
          {count}
        </span>
      )}
    </button>
  );
}

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    count,
    estimatedTotal,
    hasCustomPricing,
    setQty,
    removeItem,
    clear,
  } = useCart();

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");

  const message = useMemo(
    () =>
      buildProjectMessage({
        items: items.map((item) => ({
          name: item.name,
          priceLabel: item.priceLabel,
          qty: item.qty,
        })),
        customerName: name,
        company,
        notes,
      }),
    [items, name, company, notes],
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]">
      <button
        type="button"
        className="absolute inset-0 bg-navy/45 backdrop-blur-[2px]"
        aria-label="Close cart"
        onClick={closeCart}
      />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-[var(--panel-bg)] shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div>
            <h2 className="font-display text-lg font-bold">Your project cart</h2>
            <p className="text-xs text-muted">{count} selected package(s)</p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="grid size-9 place-items-center rounded-lg border border-border text-lg"
            aria-label="Close"
          >
            <PiIcon name="times" />
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="rounded-xl bg-surface p-4 text-sm text-muted">
              Your cart is empty. Add packages from Services or Pricing, then
              checkout to WhatsApp or email our team.
            </p>
          ) : (
            items.map((item) => (
              <article key={item.id} className="rounded-xl border border-border p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.68rem] font-bold uppercase tracking-wider text-primary">
                      {item.category}
                    </p>
                    <h3 className="font-display font-bold">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted">{item.priceLabel}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-xs font-semibold text-muted hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    className="grid size-8 place-items-center rounded-lg border border-border"
                    onClick={() => setQty(item.id, item.qty - 1)}
                  >
                    <PiIcon name="minus" size="sm" />
                  </button>
                  <span className="min-w-8 text-center text-sm font-bold">
                    {item.qty}
                  </span>
                  <button
                    type="button"
                    className="grid size-8 place-items-center rounded-lg border border-border"
                    onClick={() => setQty(item.id, item.qty + 1)}
                  >
                    <PiIcon name="plus" size="sm" />
                  </button>
                </div>
              </article>
            ))
          )}

          {items.length > 0 && (
            <>
              <div className="rounded-xl bg-surface p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-muted">
                  Estimated total
                </p>
                <p className="font-display mt-1 text-2xl font-extrabold">
                  {estimatedTotal === null
                    ? "Custom quote"
                    : `$${estimatedTotal.toLocaleString()}`}
                </p>
                {hasCustomPricing && (
                  <p className="mt-1 text-xs text-muted">
                    Includes custom-priced items — developers will confirm final
                    investment.
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold">Checkout details</p>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-[var(--panel-bg)] px-3 py-2.5 text-sm outline-none ring-primary/30 focus:ring-2"
                />
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company (optional)"
                  className="w-full rounded-xl border border-border bg-[var(--panel-bg)] px-3 py-2.5 text-sm outline-none ring-primary/30 focus:ring-2"
                />
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Notes / goals / deadlines"
                  rows={3}
                  className="w-full rounded-xl border border-border bg-[var(--panel-bg)] px-3 py-2.5 text-sm outline-none ring-primary/30 focus:ring-2"
                />
              </div>
            </>
          )}
        </div>

        <div className="space-y-2 border-t border-border px-5 py-4">
          {items.length > 0 ? (
            <>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Send cart to our team
              </p>
              <a
                href={whatsappUrl(INFO_DESK.whatsappE164, message)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full"
              >
                <PiIcon name="whatsapp" />
                WhatsApp {INFO_DESK.label}
              </a>
              <a
                href={mailtoUrl(
                  `TechNexus project cart — ${count} package(s)`,
                  message,
                )}
                className="btn btn-primary w-full"
              >
                <PiIcon name="envelope" />
                Email our team
              </a>
              <button
                type="button"
                onClick={clear}
                className="w-full py-2 text-sm font-semibold text-muted hover:text-foreground"
              >
                Clear cart
              </button>
            </>
          ) : (
            <button type="button" onClick={closeCart} className="btn btn-secondary w-full">
              Continue browsing
            </button>
          )}
        </div>
      </aside>
    </div>
  );
}
