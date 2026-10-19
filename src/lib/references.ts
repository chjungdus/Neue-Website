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
  /** key of the local screenshots in public/referenzen: <key>.webp, <key>-640.webp, <key>-1bit.png */
  image: string
}

export const refImage = (r: Reference, size: "full" | "640" | "1bit" = "full") =>
  size === "full" ? `/referenzen/${r.image}.webp` : size === "640" ? `/referenzen/${r.image}-640.webp` : `/referenzen/${r.image}-1bit.png`

export const references: Reference[] = [
  {
    url: "https://www.milonga-foodtruck.de/",
    image: "milonga",
    display: "milonga-foodtruck.de",
    label: "Milonga Food Truck",
    tag: "Food Truck",
    note: "Speisekarte, Standort und Auftritt: Gäste finden alles selbst.",
    featured: true,
  },
  {
    url: "https://www.limpiezas-el-valle.es/",
    image: "limpiezas",
    display: "limpiezas-el-valle.es",
    label: "Limpiezas El Valle",
    tag: "Reinigung",
    note: "Website mit lokalem SEO für die Region Burgos.",
    featured: true,
  },
  {
    url: "https://chjungdus.github.io/Antonioconstruccion/",
    image: "antonio",
    display: "Demo-Entwurf",
    demo: true,
    label: "Antonio Construcción",
    tag: "Bau & Handwerk",
    note: "Leistungen & Referenzen klar präsentiert.",
  },
  {
    url: "https://chjungdus.github.io/Peluqueria-loli/",
    image: "loli",
    display: "Demo-Entwurf",
    demo: true,
    label: "Peluquería Loli",
    tag: "Beauty",
    note: "Termine & Services für einen Friseursalon.",
  },
  {
    url: "https://essah-urfa.de/",
    image: "essah",
    display: "essah-urfa.de",
    label: "Essah Urfa Lahmacun",
    tag: "Restaurant",
    note: "Appetitliche Speisekarte, direkt zur Bestellung.",
  },
  {
    url: "https://chjungdus.github.io/Lorenz-DJ/",
    image: "lorenz",
    display: "Demo-Entwurf",
    demo: true,
    label: "Lorenz DJ",
    tag: "Events",
    note: "Buchungen für DJ & Events auf einen Blick.",
  },
  {
    url: "https://chjungdus.github.io/No-ra/",
    image: "nora",
    display: "Demo-Entwurf",
    demo: true,
    label: "No-ra",
    tag: "Beauty",
    note: "Beauty & Nails mit klarem Kontakt-Fokus.",
  },
]

// Live screenshot via thum.io; only the admin area still uses it.
export const shot = (url: string, width = 1200, crop = 900) =>
  `https://image.thum.io/get/width/${width}/crop/${crop}/${url}`
