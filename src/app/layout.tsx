import type { Metadata } from "next"
import { Inter, Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import ScrollToTop from "@/components/ui/scroll-to-top"

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
    "Webdesign Agentur in Düsseldorf. Websites ab 300 € — fertig in unter einer Woche. Festpreis, keine Überraschungen.",
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
    <html lang="de" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
