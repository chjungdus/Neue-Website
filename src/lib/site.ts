// Contact facts used across the stack. One place to change them.

export const WHATSAPP_NUMBER = "4917680257270"
export const PHONE_DISPLAY = "+49 176 8025 7270"
export const EMAIL = "nexuzo.kontakt@gmail.com"
export const HOURS = "Mo–Fr, 9–18 Uhr"
export const ADDRESS = ["Nägelestr. 19", "40225 Düsseldorf"]
export const INSTAGRAM = "https://instagram.com/nexuzo.de"
export const TIKTOK = "https://tiktok.com/@nexuzo.de"

export function waLink(text?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

/** Opening state in Düsseldorf time: Mo–Fr 9–18. Client-side only (depends on the clock). */
export function isOpenNow(now = new Date()) {
  const parts = new Intl.DateTimeFormat("de-DE", {
    timeZone: "Europe/Berlin",
    weekday: "short",
    hour: "numeric",
    hour12: false,
  }).formatToParts(now)
  const day = parts.find((p) => p.type === "weekday")?.value ?? ""
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0)
  const weekday = !["Sa", "So"].includes(day.replace(".", ""))
  return weekday && hour >= 9 && hour < 18
}

/** Rough launch date for a project started today: four weeks out. */
export function launchDate(now = new Date()) {
  const d = new Date(now)
  d.setDate(d.getDate() + 28)
  return new Intl.DateTimeFormat("de-DE", { day: "numeric", month: "long" }).format(d)
}

/** The cards of the home stack, in order. Prev/next links follow this trail. */
export const homeCards = [
  { id: "entwurf", name: "Entwurf" },
  { id: "zeichen", name: "Drei Zeichen" },
  { id: "abmachung", name: "Die Abmachung" },
  { id: "referenzen", name: "Referenzen" },
  { id: "leistungen", name: "Leistungen" },
  { id: "preise", name: "Preise" },
  { id: "ablauf", name: "Ablauf" },
  { id: "fragen", name: "Fragen" },
  { id: "kontakt", name: "Kontakt" },
] as const

export type HomeCardId = (typeof homeCards)[number]["id"]

export function cardNav(id: HomeCardId) {
  const i = homeCards.findIndex((c) => c.id === id)
  return {
    index: i + 1,
    total: homeCards.length,
    prev: i > 0 ? `#${homeCards[i - 1].id}` : undefined,
    next: i < homeCards.length - 1 ? `#${homeCards[i + 1].id}` : undefined,
    name: homeCards[i].name,
  }
}
