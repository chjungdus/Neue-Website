import type { MetadataRoute } from "next"
import { mockProjects } from "@/lib/mock-data"

const BASE = "https://nexuzo.de"

// Public, indexable routes (admin/api are intentionally excluded — see robots.ts)
const staticRoutes = [
  "",
  "/leistungen",
  "/portfolio",
  "/preise",
  "/ueber-uns",
  "/faq",
  "/kontakt",
  "/anfrage",
  "/impressum",
  "/datenschutz",
  "/agb",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }))

  const projects: MetadataRoute.Sitemap = mockProjects.map((project) => ({
    url: `${BASE}/portfolio/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }))

  return [...pages, ...projects]
}
