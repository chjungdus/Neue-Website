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
    url: "https://www.milonga-foodtruck.de/",
    image_url: "https://image.thum.io/get/width/1280/crop/800/https://www.milonga-foodtruck.de/",
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
    url: "https://www.limpiezas-el-valle.es/",
    image_url: "https://image.thum.io/get/width/1280/crop/800/https://www.limpiezas-el-valle.es/",
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
    url: "",
    image_url: "",
    featured: true,
    created_at: "2025-05-20",
  },
  {
    id: "4",
    title: "Projekt in Bearbeitung",
    slug: "projekt-4",
    description: "Neues Projekt — demnächst verfügbar.",
    long_description: "Dieses Projekt wird bald veröffentlicht.",
    tags: ["Webdesign"],
    client: "",
    url: "",
    image_url: "",
    featured: false,
    created_at: "2025-07-01",
  },
]
