import type { PortfolioProject } from "./supabase"

export const mockProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Milonga Food Truck",
    slug: "milonga-arg",
    description: "Argentinischer Foodtruck in Düsseldorf. Speisekarte, Standortinfos, starker visueller Auftritt.",
    long_description:
      "Komplette Website für einen argentinischen Foodtruck in Düsseldorf. Mit Speisekarte, Standortinfos und einem starken visuellen Auftritt, der die Leidenschaft für argentinische Küche transportiert.",
    tags: ["Restaurant", "Webdesign", "Next.js"],
    client: "Milonga Food Truck",
    url: "https://milonga-foodtruck.de/",
    image_url: "/referenzen/milonga-foodtruck.jpg",
    featured: true,
    created_at: "2025-03-10",
  },
  {
    id: "2",
    title: "Limpiezas El Valle",
    slug: "limpiezas-el-valle",
    description: "Reinigungsfirma in Burgos mit lokalem SEO. Top-Ranking für die wichtigsten Suchbegriffe in der Region.",
    long_description:
      "Website mit starkem lokalem SEO für eine Reinigungsfirma in der Region Merindades, Burgos. Ergebnis: Top-Ranking für die wichtigsten Suchbegriffe in der Region.",
    tags: ["Reinigung", "SEO", "Webdesign"],
    client: "Limpiezas El Valle",
    url: "https://limpiezas-el-valle.es/",
    image_url: "https://image.thum.io/get/width/1280/crop/800/https://limpiezas-el-valle.es/",
    featured: true,
    created_at: "2025-01-15",
  },
  {
    id: "3",
    title: "Caféthiopia",
    slug: "cafethiopia",
    description: "Von Äthiopien inspiriertes Café in Düsseldorf Bilk.",
    long_description:
      "Moderne Website für ein äthiopisch inspiriertes Café in Düsseldorf Bilk. Das Projekt betont die Herkunft und Qualität des Kaffees.",
    tags: ["Café", "Webdesign", "Branding"],
    client: "Caféthiopia",
    url: "https://xn--cafthiopia-d7a.de/",
    image_url: "/referenzen/cafethiopia.jpg",
    featured: true,
    created_at: "2025-05-20",
  },
  {
    id: "4",
    title: "Frittenliebe Bilk",
    slug: "frittenliebe-bilk",
    description: "Imbiss am Kirchplatz in Düsseldorf-Bilk: Pommes, Currywurst und Burger.",
    long_description:
      "Website für einen Imbiss in Düsseldorf-Bilk: Speisen, Öffnungszeiten, Anfahrt und Anruf-Button für die Vorbestellung, schnell auf dem Handy.",
    tags: ["Imbiss", "Webdesign", "Lokales SEO"],
    client: "Frittenliebe Bilk",
    url: "https://frittenliebe-bilk.de/",
    image_url: "/referenzen/frittenliebe-bilk.jpg",
    featured: true,
    created_at: "2026-09-01",
  },
]
