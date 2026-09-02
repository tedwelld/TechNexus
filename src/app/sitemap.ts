import type { MetadataRoute } from "next";

const BASE_URL = "https://axentratechsolutions.com";

const routes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/services", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/services/it", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/work", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/pricing", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/process", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/stack", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
