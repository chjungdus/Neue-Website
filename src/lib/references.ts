// Single source of truth for the live reference websites shown in the hero
// carousel AND on the Referenzen page.

export type Reference = {
  url: string
  display: string
  label: string
  tag: string
  /** short result/impact line shown on the references page */
  note?: string
  featured?: boolean
  /** concept site without its own domain yet; shown as demo, not as a live client site */
  demo?: boolean
}

export const references: Reference[] = [
  {
    url: "https://www.milonga-foodtruck.de/",
    display: "milonga-foodtruck.de",
    label: "Milonga Food Truck",
    tag: "Food Truck",
    note: "Speisekarte, Standort und Auftritt: Gäste finden alles selbst.",
    featured: true,
  },
  {
    url: "https://www.limpiezas-el-valle.es/",
    display: "limpiezas-el-valle.es",
    label: "Limpiezas El Valle",
    tag: "Reinigung",
    note: "Lokales SEO: Top-Ranking in der Region Burgos.",
    featured: true,
  },
  {
    url: "https://chjungdus.github.io/Antonioconstruccion/",
    display: "Demo-Entwurf",
    demo: true,
    label: "Antonio Construcción",
    tag: "Bau & Handwerk",
    note: "Leistungen & Referenzen klar präsentiert.",
  },
  {
    url: "https://chjungdus.github.io/Peluqueria-loli/",
    display: "Demo-Entwurf",
    demo: true,
    label: "Peluquería Loli",
    tag: "Beauty",
    note: "Termine & Services für einen Friseursalon.",
  },
  {
    url: "https://essah-urfa.de/",
    display: "essah-urfa.de",
    label: "Essah Urfa Lahmacun",
    tag: "Restaurant",
    note: "Appetitliche Speisekarte, direkt zur Bestellung.",
  },
  {
    url: "https://chjungdus.github.io/Lorenz-DJ/",
    display: "Demo-Entwurf",
    demo: true,
    label: "Lorenz DJ",
    tag: "Events",
    note: "Buchungen für DJ & Events auf einen Blick.",
  },
  {
    url: "https://chjungdus.github.io/No-ra/",
    display: "Demo-Entwurf",
    demo: true,
    label: "No-ra",
    tag: "Beauty",
    note: "Beauty & Nails mit klarem Kontakt-Fokus.",
  },
]

// Live screenshot of a site, rendered + cached by thum.io.
export const shot = (url: string, width = 1200, crop = 900) =>
  `https://image.thum.io/get/width/${width}/crop/${crop}/${url}`
