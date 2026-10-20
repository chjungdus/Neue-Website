// Zentrale, vom Inhaber bestätigte Fakten (Preise, Kontakt, Lieferzeit).
// Bitte nur hier ändern — Preisseite, Startseite und die Branchen-Seiten lesen daraus.

export const SITE_URL = "https://nexuzo.de"

export const contact = {
  phoneDisplay: "+49 176 8025 7270",
  phoneE164: "+4917680257270",
  whatsappNumber: "4917680257270",
  email: "nexuzo.kontakt@gmail.com",
  instagram: "https://www.instagram.com/nexuzowebdesign/",
  instagramHandle: "@nexuzowebdesign",
  city: "Düsseldorf",
}

export const whatsappLink = (
  text = "Hallo Nexuzo, ich interessiere mich für eine Website.",
) => `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`

export const DELIVERY_TIME = "in 1–2 Wochen"
export const VAT_NOTE = "Alle Preise ohne MwSt. – gemäß § 19 UStG wird keine Umsatzsteuer berechnet."
export const PAYMENT_NOTE =
  "Wir bauen vorab eine kostenlose, unverbindliche Probe-Website. Sie zahlen erst, wenn sie Ihnen gefällt."

export type WebsitePackage = {
  id: "starter" | "pro" | "premium" | "komplett"
  name: string
  tagline: string
  price: string
  badge: string | null
  desc: string
  /** one-line summary for compact price boxes */
  short: string
  features: string[]
  highlight: boolean
}

export const packages: WebsitePackage[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Selbstständige & kleine Unternehmen",
    price: "199",
    badge: null,
    desc: "Eine klare, professionelle Website, die Ihre Leistungen zeigt und Anfragen generiert.",
    short: "1–3 Seiten, individuelles Design, fürs Smartphone optimiert, Kontaktformular.",
    features: [
      "1–3 Seiten, individuelles Design",
      "Für Smartphone optimiert",
      "Kontaktformular",
      "Grundstruktur für Google",
      "30 Tage Support nach Launch",
      "2 Korrekturrunden inklusive",
    ],
    highlight: false,
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Für wachsende Unternehmen",
    price: "399",
    badge: "Beliebtestes Paket",
    desc: "Mehr Seiten, mehr Funktionen, besser für Google. Für Unternehmen, die online wachsen wollen.",
    short: "4–8 Seiten, Besucherstatistiken, umfassendes SEO-Paket, 3 Monate Support.",
    features: [
      "4–8 Seiten, Premium-Design mit Animationen",
      "Besucherstatistiken eingebunden",
      "Umfassendes SEO-Paket",
      "Schnelle Ladezeiten optimiert",
      "3 Monate Support",
      "Unbegrenzte Korrekturrunden",
    ],
    highlight: true,
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Komplexere Anforderungen",
    price: "699",
    badge: null,
    desc: "Unbegrenzte Seiten, individuelle Funktionen und erweiterte technische Umsetzung.",
    short: "Unbegrenzte Seiten, Zusatzfunktionen nach Absprache, z. B. Buchungssystem.",
    features: [
      "Unbegrenzte Seiten",
      "Individuelle Zusatzfunktionen nach Absprache",
      "Buchungssystem oder Kundenbereich möglich",
      "Auswertung & Monitoring eingerichtet",
      "6 Monate dedizierter Support",
      "Unbegrenzte Korrekturrunden",
    ],
    highlight: false,
  },
  {
    id: "komplett",
    name: "Komplett",
    tagline: "Alles aus einer Hand",
    price: "899",
    badge: "Neu",
    desc: "Website, Logo, Google-Profil, Instagram und ein kleiner Online-Shop. Für Betriebe, die komplett neu starten wollen.",
    short: "Alles aus Premium plus Logo, Google-Profil, Instagram-Start, zweisprachig und kleiner Online-Shop.",
    features: [
      "Alles aus Premium",
      "Logo oder Logo-Auffrischung",
      "Speisekarte/Preisliste als PDF und auf der Website",
      "Google-Unternehmensprofil einrichten & optimieren",
      "Website zweisprachig",
      "Instagram-Profil einrichten mit 3 Start-Posts",
      "Kleiner Online-Shop oder Bestellsystem bis 30 Produkte (PayPal/Karte)",
      "12 Monate Support",
    ],
    highlight: false,
  },
]

export const SHOP_NOTE =
  "Größere Shops auf Anfrage. Rechtstexte für Shops (AGB, Widerrufsbelehrung) stellt der Kunde selbst."

export const carePackages = [
  {
    name: "Basic",
    price: "19",
    features: [
      "Hosting & Domain inklusive",
      "SSL-Zertifikat inklusive",
      "Monatliche Updates & Sicherheitschecks",
      "1 kleine Änderung pro Monat",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    price: "39",
    features: ["Alles aus Basic", "3 Änderungen pro Monat", "Priorität bei Anfragen"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "59",
    features: [
      "Hosting & Domain inklusive (+ Supabase-Datenbank)",
      "SSL-Zertifikat inklusive",
      "Monatliche Updates & Sicherheitschecks",
      "Unbegrenzte Änderungen",
    ],
    highlight: false,
  },
]
