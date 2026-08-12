"use client";

import { useState } from "react";
import { AddToCartButton } from "@/components/AddToCartButton";
import { CheckItem } from "@/components/ui";

const websitePlans = [
  {
    id: "web-starter",
    name: "Starter Site",
    price: "$280",
    unit: "/project",
    popular: false,
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
      "1-Month Support",
    ],
  },
  {
    id: "web-business",
    name: "Business Suite",
    price: "$800+",
    unit: "/project",
    popular: true,
    features: [
      "Up to 15 Pages",
      "Advanced SEO Pack",
      "Full CMS Control",
      "Third-party Integrations",
      "3 Months Support",
      "Analytics Dashboard",
    ],
  },
  {
    id: "web-enterprise",
    name: "Enterprise Web",
    price: "Custom",
    unit: "",
    popular: false,
    features: [
      "Unlimited Pages",
      "High-Performance Stack",
      "Full E-Commerce",
      "API Development",
      "Priority Support",
      "Security Audit",
      "Dedicated PM",
    ],
  },
];

const softwarePlans = [
  {
    id: "soft-mvp",
    name: "MVP Build",
    price: "$2,500",
    unit: " starting",
    popular: false,
    features: [
      "Core product scope",
      "Auth & roles",
      "API foundation",
      "Cloud deploy",
      "2-month support",
    ],
  },
  {
    id: "soft-growth",
    name: "Growth Platform",
    price: "$6,500+",
    unit: "",
    popular: true,
    features: [
      "Multi-module architecture",
      "Integrations layer",
      "Observability suite",
      "Automated testing",
      "Quarterly roadmap",
      "Priority SLA",
    ],
  },
  {
    id: "soft-enterprise",
    name: "Enterprise System",
    price: "Custom",
    unit: "",
    popular: false,
    features: [
      "ERP / CRM programs",
      "Multi-tenant SaaS",
      "Compliance controls",
      "Dedicated squad",
      "Security program",
      "24/7 ops support",
    ],
  },
];

export function PricingToggle() {
  const [tab, setTab] = useState<"websites" | "software">("websites");
  const plans = tab === "websites" ? websitePlans : softwarePlans;

  return (
    <div>
      <div className="mx-auto mb-10 flex w-fit rounded-xl bg-surface-2 p-1">
        <button
          type="button"
          onClick={() => setTab("websites")}
          className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
            tab === "websites"
              ? "bg-primary text-white shadow"
              : "text-muted hover:text-foreground"
          }`}
        >
          Websites
        </button>
        <button
          type="button"
          onClick={() => setTab("software")}
          className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
            tab === "software"
              ? "bg-primary text-white shadow"
              : "text-muted hover:text-foreground"
          }`}
        >
          Software Systems
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className={`card relative overflow-hidden p-6 ${
              plan.popular ? "ring-2 ring-primary" : ""
            }`}
          >
            {plan.popular && (
              <span className="absolute right-4 top-4 rounded-full bg-navy px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-white">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-xl font-bold">{plan.name}</h3>
            <p className="mt-3 font-display text-4xl font-extrabold tracking-tight">
              {plan.price}
              <span className="text-base font-semibold text-muted">
                {plan.unit}
              </span>
            </p>
            <ul className="mt-6 space-y-2.5">
              {plan.features.map((f) => (
                <CheckItem key={f}>{f}</CheckItem>
              ))}
            </ul>
            <AddToCartButton
              itemId={plan.id}
              label="Add to cart"
              variant={plan.popular ? "primary" : "secondary"}
              className="mt-8 w-full"
            />
          </article>
        ))}
      </div>
    </div>
  );
}
