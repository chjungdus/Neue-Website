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
  /** file stem of the screenshots in /public/referenzen */
  image: string
  /** location shown with the reference */
  place?: string
}

export const references: Reference[] = [
  {
    url: "https://milonga-foodtruck.de/",
    image: "milonga",
    display: "milonga-foodtruck.de",
    label: "Milonga Food Truck",
    tag: "Food Truck",
    place: "Düsseldorf",
    note: "Speisekarte, Standort und Auftritt: Gäste finden alles selbst.",
    featured: true,
  },
  {
    url: "https://xn--cafthiopia-d7a.de/",
    image: "cafethiopia",
    display: "caféthiopia.de",
    label: "Caféthiopia",
    tag: "Café",
    place: "Düsseldorf-Bilk",
    note: "Äthiopisches Café: Speisekarte, Öffnungszeiten, zweisprachig.",
  },
  {
    url: "https://limpiezas-el-valle.es/",
    image: "limpiezas",
    display: "limpiezas-el-valle.es",
    label: "Limpiezas El Valle",
    tag: "Reinigung",
    place: "Burgos, Spanien",
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
    place: "Düsseldorf",
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

// Local 1280px screenshot from /public/referenzen.
export const refImage = (ref: Reference) => `/referenzen/${ref.image}.webp`

/** Real client websites (no demo drafts). */
export const liveReferences = references.filter((r) => !r.demo)
