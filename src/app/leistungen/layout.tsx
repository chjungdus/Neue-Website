import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Leistungen – Webdesign, Relaunch & Online-Shop",
  description:
    "Webdesign, Website-Relaunch und kleine Online-Shops aus Düsseldorf. Festpreise ab 199 € ohne MwSt., online in 1–2 Wochen, Zahlung erst nach kostenloser Probe-Website.",
  alternates: { canonical: "/leistungen" },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
