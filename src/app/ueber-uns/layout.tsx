import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Über uns – Webdesign aus Düsseldorf",
  description:
    "Nexuzo ist ein kleines Webdesign-Team aus Düsseldorf: Mateo Sainz de la Maza und Zhuo Jun Li. Websites ab 199 €, Zahlung erst nach kostenloser Probe-Website.",
  alternates: { canonical: "/ueber-uns" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
