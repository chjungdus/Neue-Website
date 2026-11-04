import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt – WhatsApp, Telefon & E-Mail",
  description:
    "Nexuzo in Düsseldorf erreichen: WhatsApp und Telefon +49 176 8025 7270, E-Mail nexuzo.kontakt@gmail.com. Antwort innerhalb von 24 Stunden.",
  alternates: { canonical: "/kontakt" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
