import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import ScrollToTop from "@/components/ui/scroll-to-top"

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "DigitalForge – Webdesign Agentur Düsseldorf",
    template: "%s | DigitalForge",
  },
  description:
    "Webdesign Agentur in Düsseldorf. Websites ab 300 € — fertig in unter einer Woche. Festpreis, keine Überraschungen.",
  keywords: ["Webdesign", "Web-Entwicklung", "Online-Shop", "SEO", "Agentur", "Düsseldorf"],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "DigitalForge",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={geist.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
