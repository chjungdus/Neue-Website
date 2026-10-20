import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import ScrollToTop from "@/components/ui/scroll-to-top"
import ScrollProgress from "@/components/ui/scroll-progress"
import MotionProvider from "@/components/ui/motion-provider"

// One family for everything: Plus Jakarta Sans, a modern geometric grotesk.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
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
    "Webdesign aus Düsseldorf: individuelle Websites zum Festpreis ab 199 €, live in zwei Wochen. Bezahlt wird erst, wenn Ihnen die fertige Seite gefällt.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Nexuzo",
    url: "https://nexuzo.de",
  },
}

// Firmendaten für Google (LocalBusiness). Adresse wie im Impressum.
const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://nexuzo.de/#organization",
  name: "Nexuzo",
  description: "Webdesign aus Düsseldorf. Individuelle Websites zum Festpreis ab 199 €.",
  url: "https://nexuzo.de",
  logo: "https://nexuzo.de/logo/nexuzo.png",
  email: "nexuzo.kontakt@gmail.com",
  telephone: "+4917680257270",
  priceRange: "ab 199 €",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nägelestr. 19",
    postalCode: "40225",
    addressLocality: "Düsseldorf",
    addressCountry: "DE",
  },
  areaServed: { "@type": "City", name: "Düsseldorf" },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  founder: [
    { "@type": "Person", name: "Mateo Sainz de la Maza" },
    { "@type": "Person", name: "Zhuo Jun Li" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={jakarta.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">
          <MotionProvider>{children}</MotionProvider>
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
