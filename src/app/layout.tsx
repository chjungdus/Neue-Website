import type { Metadata } from "next"
import { Inter, Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import ScrollToTop from "@/components/ui/scroll-to-top"
import ScrollProgress from "@/components/ui/scroll-progress"

// Body: Inter — clean, high legibility.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

// Headings: Bricolage Grotesque — characterful display grotesque used by modern studios.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nexuzo.de"),
  title: {
    default: "Nexuzo – Webdesign Agentur Düsseldorf",
    template: "%s | Nexuzo",
  },
  description:
    "Webdesign aus Düsseldorf für Gastronomie & lokale Betriebe. Websites ab 199 €, online in 1–2 Wochen. Kostenlose Probe-Website – Sie zahlen erst, wenn sie Ihnen gefällt.",
  keywords: ["Webdesign", "Website erstellen lassen", "Gastronomie", "Restaurant-Website", "Online-Shop", "SEO", "Düsseldorf"],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Nexuzo",
    title: "Nexuzo – Webdesign Agentur Düsseldorf",
    description:
      "Websites ab 199 €, online in 1–2 Wochen. Kostenlose Probe-Website – Sie zahlen erst, wenn sie Ihnen gefällt.",
    images: [{ url: "/logo/nexuzo.png", alt: "Nexuzo" }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
