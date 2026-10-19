import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import ScrollToTop from "@/components/ui/scroll-to-top"
import ScrollProgress from "@/components/ui/scroll-progress"

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
    "Webdesign Agentur in Düsseldorf. Websites ab 300 €, fertig in unter einer Woche. Festpreis, keine Überraschungen.",
  keywords: ["Webdesign", "Web-Entwicklung", "Online-Shop", "SEO", "Agentur", "Düsseldorf"],
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
    <html lang="de" className={jakarta.variable}>
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
