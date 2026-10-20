import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Leistungen – Webdesign, Relaunch und SEO",
  description:
    "Individuelle Websites ab 199 €, Website-Relaunch ohne Rankingverlust ab 550 € und technisches SEO. Webdesign aus Düsseldorf zum Festpreis.",
  alternates: { canonical: "/leistungen" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
