export const COMPANY = {
  name: "TechNexus Agency",
  shortName: "TechNexus",
  tagline: "Innovate. Develop. Elevate.",
  address: "123 Innovation Way, Tech City",
  hours: "Mon–Fri 9:00–18:00 (CAT) · Managed clients: 24/7",
} as const;

export const DEVELOPERS = [
  {
    id: "tedwell",
    name: "Tedwell",
    role: "Lead Developer & Architect",
    email: "tedwell@outlook.com",
    whatsapp: "+263789276807",
    whatsappE164: "263789276807",
  },
  {
    id: "amunike",
    name: "Amunike Sibanibani",
    role: "Senior Developer & Systems Engineer",
    email: "amunikesibanibani@outlook.com",
    whatsapp: "+263774003861",
    whatsappE164: "263774003861",
  },
] as const;

export const CONTACT_EMAILS = DEVELOPERS.map((d) => d.email).join(",");

export type CatalogItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  priceLabel: string;
  priceValue: number | null;
  features: string[];
};

export const CATALOG: CatalogItem[] = [
  {
    id: "web-starter",
    name: "Starter Website",
    category: "Web Development",
    description: "Focused launch site for clarity and conversion.",
    priceLabel: "$280 / project",
    priceValue: 280,
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Essential SEO",
      "Contact form",
      "1-month support",
    ],
  },
  {
    id: "web-business",
    name: "Business Suite Website",
    category: "Web Development",
    description: "Multi-page CMS experience with analytics and SEO depth.",
    priceLabel: "$800+ / project",
    priceValue: 800,
    features: [
      "Up to 15 pages",
      "Full CMS control",
      "Advanced SEO pack",
      "Integrations",
      "3-month support",
      "Analytics dashboard",
    ],
  },
  {
    id: "web-ecommerce",
    name: "E-Commerce Platform",
    category: "Web Development",
    description: "Storefront with payments, inventory, and checkout flow.",
    priceLabel: "$850 / project",
    priceValue: 850,
    features: [
      "Unlimited products",
      "Payment gateway",
      "Inventory management",
      "Security hardening",
      "Priority support",
    ],
  },
  {
    id: "web-enterprise",
    name: "Enterprise Web",
    category: "Web Development",
    description: "Custom high-performance web programs with dedicated PM.",
    priceLabel: "Custom quote",
    priceValue: null,
    features: [
      "Unlimited pages",
      "API development",
      "Security audit",
      "Dedicated project manager",
      "Priority SLA",
    ],
  },
  {
    id: "soft-mvp",
    name: "Software MVP Build",
    category: "Software Systems",
    description: "Core product foundation with auth, API, and cloud deploy.",
    priceLabel: "$2,500 starting",
    priceValue: 2500,
    features: [
      "Auth & roles",
      "API foundation",
      "Cloud deploy",
      "2-month support",
    ],
  },
  {
    id: "soft-growth",
    name: "Growth Platform",
    category: "Software Systems",
    description: "Multi-module architecture with observability and SLA.",
    priceLabel: "$6,500+ ",
    priceValue: 6500,
    features: [
      "Multi-module architecture",
      "Integrations layer",
      "Observability suite",
      "Automated testing",
      "Priority SLA",
    ],
  },
  {
    id: "soft-enterprise",
    name: "Enterprise System",
    category: "Software Systems",
    description: "ERP/CRM/SaaS programs with compliance and dedicated squad.",
    priceLabel: "Custom quote",
    priceValue: null,
    features: [
      "ERP / CRM programs",
      "Multi-tenant SaaS",
      "Compliance controls",
      "24/7 ops support",
    ],
  },
  {
    id: "erp",
    name: "Enterprise Resource Planning (ERP)",
    category: "Software Systems",
    description: "Operational backbone for inventory, HR, finance, and reporting.",
    priceLabel: "From $1,200",
    priceValue: 1200,
    features: [
      "Inventory sync",
      "HR / payroll",
      "Finance automation",
      "Role-based access",
    ],
  },
  {
    id: "saas",
    name: "Custom SaaS Development",
    category: "Software Systems",
    description: "Multi-tenant product engineering with billing and APIs.",
    priceLabel: "From $2,500",
    priceValue: 2500,
    features: [
      "Multi-tenant architecture",
      "Subscription billing",
      "Cloud infrastructure",
      "API ecosystem",
    ],
  },
  {
    id: "it-support",
    name: "Managed IT Support & Helpdesk",
    category: "Managed IT",
    description: "Proactive monitoring, patching, and rapid response coverage.",
    priceLabel: "Custom retainer",
    priceValue: null,
    features: [
      "Remote monitoring",
      "Cybersecurity hardening",
      "Patch management",
      "15-min avg response",
    ],
  },
  {
    id: "it-network",
    name: "Networking & Connectivity",
    category: "Managed IT",
    description: "Secure WAN/LAN, VPN, Wi-Fi, and health audits.",
    priceLabel: "Custom quote",
    priceValue: null,
    features: ["SD-WAN", "Firewall / VPN", "Wi-Fi setup", "Health audits"],
  },
  {
    id: "it-cloud",
    name: "Server & Cloud Infrastructure",
    category: "Managed IT",
    description: "Migration, DR, virtualization, and cloud operations.",
    priceLabel: "Custom quote",
    priceValue: null,
    features: [
      "Cloud migration",
      "Disaster recovery",
      "Automation",
      "Hyper-converged systems",
    ],
  },
  {
    id: "consult-audit",
    name: "Technical Architecture Audit",
    category: "Consulting",
    description: "Deep review of stack, security, performance, and roadmap fit.",
    priceLabel: "From $350",
    priceValue: 350,
    features: [
      "Architecture review",
      "Security checklist",
      "Performance report",
      "Roadmap recommendations",
    ],
  },
];

export function getCatalogItem(id: string) {
  return CATALOG.find((item) => item.id === id);
}

export function buildProjectMessage(options: {
  items: { name: string; priceLabel: string; qty: number }[];
  customerName?: string;
  company?: string;
  notes?: string;
}) {
  const { items, customerName, company, notes } = options;
  const lines = [
    `Hello TechNexus Agency — I'd like to discuss a project.`,
    "",
    customerName ? `Name: ${customerName}` : null,
    company ? `Company: ${company}` : null,
    "",
    "Selected packages:",
    ...items.map(
      (item, i) =>
        `${i + 1}. ${item.name} × ${item.qty} (${item.priceLabel})`,
    ),
    "",
    notes ? `Notes: ${notes}` : null,
    "",
    "Please confirm availability, timeline, and next steps.",
    "— Sent from the TechNexus website cart",
  ].filter(Boolean);

  return lines.join("\n");
}

export function whatsappUrl(e164: string, message: string) {
  return `https://wa.me/${e164}?text=${encodeURIComponent(message)}`;
}

export function mailtoUrl(subject: string, body: string, to = CONTACT_EMAILS) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const MESSAGE_TEMPLATES = [
  {
    id: "intro",
    title: "Project introduction",
    body: `Hi TechNexus team,\n\nI'm exploring a new digital project and would like to speak with a developer about scope, timeline, and pricing.\n\nPlease let me know a good time to connect.\n\nThanks.`,
  },
  {
    id: "quote",
    title: "Request a formal quote",
    body: `Hi TechNexus team,\n\nPlease send a formal quotation for the packages I selected on the website. I can share requirements, preferred timeline, and constraints.\n\nLooking forward to your proposal.`,
  },
  {
    id: "urgent",
    title: "Urgent support / audit",
    body: `Hi TechNexus team,\n\nI need urgent technical support / an architecture audit. Please advise the earliest availability for Tedwell or Amunike.\n\nContext: [briefly describe the issue]\n\nThank you.`,
  },
  {
    id: "partnership",
    title: "Long-term partnership",
    body: `Hi TechNexus team,\n\nWe're interested in a longer-term engineering partnership (retainer / managed delivery). Please share how engagements typically work with your developers.\n\nRegards.`,
  },
] as const;

export const SYSTEM_OVERVIEW = {
  summary:
    "TechNexus Agency is a full-lifecycle digital engineering partner. We design, build, launch, and operate websites, software platforms, and managed IT estates—with direct access to the developers shipping the work.",
  pillars: [
    {
      title: "Product Engineering",
      detail:
        "Web apps, SaaS, ERP/CRM, mobile, and API ecosystems delivered with typed codebases, CI/CD, and measurable release quality.",
    },
    {
      title: "Infrastructure & Ops",
      detail:
        "Cloud migration, networking, monitoring, backup/DR, and 24/7 coverage patterns for teams that need reliability without a large in-house IT bench.",
    },
    {
      title: "Direct Developer Access",
      detail:
        "Talk to Tedwell and Amunike over WhatsApp or email using ready templates—or checkout a cart of selected packages and send the brief in one message.",
    },
  ],
  capabilities: [
    "Discovery & technical audits",
    "UX / information architecture",
    "Frontend & backend engineering",
    "Cloud infrastructure & DevOps",
    "Security hardening & compliance prep",
    "Managed support retainers",
    "Training & knowledge transfer",
    "Post-launch growth iterations",
  ],
  sla: [
    "Architecture replies typically within 24 hours",
    "Managed IT priority incidents: ~15 min first response",
    "Code ownership transferred on final payment",
    "Transparent scoped proposals before kickoff",
  ],
} as const;
