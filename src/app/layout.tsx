import type { Metadata } from "next"
import { Atkinson_Hyperlegible_Next, Silkscreen } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Reveal from "@/components/stack/reveal"

// Every headline and paragraph: Atkinson Hyperlegible Next, two weights.
const atkinson = Atkinson_Hyperlegible_Next({
  variable: "--font-atkinson",
  subsets: ["latin"],
  weight: ["400", "800"],
  adjustFontFallback: false,
  display: "swap",
})

// Pixel caps for the menu bar, title bars and card numbers only.
const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nexuzo.de"),
  title: {
    default: "Nexuzo – Webdesign aus Düsseldorf",
    template: "%s | Nexuzo",
  },
  description:
    "Webdesign aus Düsseldorf. Individuelle Websites ab 199 € Festpreis, live in vier Wochen, bezahlt wird erst nach Freigabe.",
  keywords: ["Webdesign", "Webdesign Düsseldorf", "Website erstellen", "Online-Shop", "SEO", "Agentur", "Düsseldorf"],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Nexuzo",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${atkinson.variable} ${silkscreen.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks script support before paint so cards can wait for their dissolve. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-screen flex-col pt-[var(--menubar)]">
        <a href="#inhalt" className="btn sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-14 focus:z-[60]">
          Zum Inhalt springen
        </a>
        <Navbar />
        <main id="inhalt" className="flex-1">
          {children}
        </main>
        <Footer />
        <Reveal />
      </body>
    </html>
  )
}
