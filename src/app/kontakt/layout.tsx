import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt – Angebot in 24 Stunden",
  description:
    "Schreiben Sie uns per WhatsApp, E-Mail oder Formular. Sie bekommen innerhalb von 24 Stunden eine Antwort und ein Festpreis-Angebot.",
  alternates: { canonical: "/kontakt" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
