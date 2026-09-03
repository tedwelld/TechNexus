import { INFO_DESK } from "./site";

export type ProjectType = {
  value: string;
  label: string;
  desc: string;
  icon: string;
};

export const PROJECT_TYPES: ProjectType[] = [
  {
    value: "web",
    label: "Website",
    desc: "Marketing site, business site or web platform",
    icon: "globe",
  },
  {
    value: "software",
    label: "Software Systems",
    desc: "Custom apps, SaaS, ERP/CRM or integrations",
    icon: "code",
  },
  {
    value: "it",
    label: "Managed IT",
    desc: "Support, networking, cloud and infrastructure",
    icon: "server",
  },
  {
    value: "mobile",
    label: "Mobile App",
    desc: "iOS & Android applications",
    icon: "mobile",
  },
];

export type ServiceOption = {
  value: string;
  label: string;
  desc: string;
  category: string;
};

export const SERVICE_OPTIONS: ServiceOption[] = [
  { value: "web-starter", label: "Starter Website", desc: "Up to 5 pages, responsive, essential SEO", category: "Web" },
  { value: "web-business", label: "Business Website", desc: "Full CMS, advanced SEO, integrations", category: "Web" },
  { value: "web-ecommerce", label: "E-Commerce", desc: "Storefront, payments, inventory", category: "Web" },
  { value: "software-mvp", label: "Software MVP", desc: "Core product with auth, API, cloud deploy", category: "Software" },
  { value: "software-saas", label: "Custom SaaS", desc: "Multi-tenant product engineering", category: "Software" },
  { value: "erp", label: "ERP / CRM", desc: "Inventory, HR, finance automation", category: "Software" },
  { value: "it-support", label: "IT Support & Helpdesk", desc: "Monitoring, patching, rapid response", category: "Managed IT" },
  { value: "it-network", label: "Networking", desc: "WAN/LAN, VPN, Wi-Fi, health audits", category: "Managed IT" },
  { value: "it-cloud", label: "Server & Cloud", desc: "Migration, DR, virtualization", category: "Managed IT" },
];

export type EnquiryData = {
  projectType: string;
  services: string[];
  timeline: string;
  flexibleTimeline: boolean;
  budget: string;
  details: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  preferredContact: "Email" | "WhatsApp" | "Phone Call";
};

export const INITIAL_ENQUIRY: EnquiryData = {
  projectType: "",
  services: [],
  timeline: "",
  flexibleTimeline: false,
  budget: "",
  details: "",
  fullName: "",
  email: "",
  phone: "",
  company: "",
  preferredContact: "Email",
};

export const TIMELINE_OPTIONS = [
  { value: "ASAP", label: "As soon as possible", desc: "Ready to start now" },
  { value: "1-2 months", label: "1–2 Months", desc: "Within the quarter" },
  { value: "3-6 months", label: "3–6 Months", desc: "Planning ahead" },
  { value: "6+ months", label: "6+ Months", desc: "Longer term" },
];

export const BUDGET_OPTIONS = [
  { value: "under 1k", label: "Under $1,000" },
  { value: "1-5k", label: "$1,000 – $5,000" },
  { value: "5-15k", label: "$5,000 – $15,000" },
  { value: "15k+", label: "$15,000+" },
  { value: "not sure", label: "Not sure yet" },
];

export const DETAILS_HINTS = [
  "What the project should do",
  "Who it serves / audience",
  "Any existing systems to integrate",
  "Design references or brand assets",
];

const TIMELINE_LABELS: Record<string, string> = Object.fromEntries(
  TIMELINE_OPTIONS.map((t) => [t.value, t.label]),
);
const BUDGET_LABELS: Record<string, string> = Object.fromEntries(
  BUDGET_OPTIONS.map((b) => [b.value, b.label]),
);
const TYPE_LABELS: Record<string, string> = Object.fromEntries(
  PROJECT_TYPES.map((p) => [p.value, p.label]),
);
const SERVICE_LABELS: Record<string, string> = Object.fromEntries(
  SERVICE_OPTIONS.map((s) => [s.value, s.label]),
);

function serviceLabel(value: string) {
  return SERVICE_LABELS[value] ?? value;
}

export function buildEnquiryEmailBody(data: EnquiryData) {
  const services =
    data.services.length > 0
      ? data.services.map(serviceLabel).join(", ")
      : "To be discussed";
  const lines = [
    "New project enquiry from the TechNexus website",
    "",
    "PROJECT TYPE",
    PROJECT_TYPES.find((p) => p.value === data.projectType)?.label ?? data.projectType,
    "",
    "SERVICES / AREAS OF INTEREST",
    services,
    "",
    "TIMELINE",
    data.flexibleTimeline ? "Flexible" : TIMELINE_LABELS[data.timeline] ?? data.timeline,
    "",
    "BUDGET",
    BUDGET_LABELS[data.budget] ?? data.budget,
    "",
    "PROJECT DETAILS",
    data.details || "Not provided",
    "",
    "CONTACT",
    `Name: ${data.fullName}`,
    `Company: ${data.company || "—"}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `Preferred contact: ${data.preferredContact}`,
  ];
  return lines.join("\n");
}

export function buildEnquiryEmailSubject(data: EnquiryData) {
  const type = PROJECT_TYPES.find((p) => p.value === data.projectType)?.label;
  return `Project Enquiry — ${data.fullName}${type ? ` (${type})` : ""}`;
}

export function buildEnquiryWhatsAppMessage(data: EnquiryData) {
  const type = PROJECT_TYPES.find((p) => p.value === data.projectType)?.label;
  const services = data.services.map(serviceLabel).join(", ");
  const bits = [
    `Project type: ${type ?? "—"}`,
    `Services: ${services || "To be discussed"}`,
    data.flexibleTimeline
      ? "Timeline: Flexible"
      : `Timeline: ${TIMELINE_LABELS[data.timeline] ?? data.timeline}`,
    `Budget: ${BUDGET_LABELS[data.budget] ?? data.budget}`,
  ];
  return [
    `Hello ${INFO_DESK.label}, I'd like to start a project with TechNexus.`,
    "",
    ...bits,
    "",
    "Looking forward to hearing from you.",
  ].join("\n");
}

export function buildGeneralEnquiryEmailBody(data: {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  return [
    "New general enquiry from the TechNexus website",
    "",
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `Subject: ${data.subject}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

export function buildGeneralEnquiryWhatsAppMessage(data: {
  fullName: string;
  subject: string;
}) {
  return `Hello ${INFO_DESK.label}, I'd like to get in touch regarding "${data.subject}". — ${data.fullName}. Looking forward to hearing from you.`;
}

export { TIMELINE_LABELS, BUDGET_LABELS, TYPE_LABELS, SERVICE_LABELS };
