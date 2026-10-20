import type { MetadataRoute } from "next"
import { mockProjects } from "@/lib/mock-data"
import { branchen } from "@/lib/branchen"

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
  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }))

  const projects: MetadataRoute.Sitemap = mockProjects.map((project) => ({
    url: `${BASE}/portfolio/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }))

  const branchenPages: MetadataRoute.Sitemap = branchen.map((b) => ({
    url: `${BASE}/webdesign/${b.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...pages, ...branchenPages, ...projects]
}
