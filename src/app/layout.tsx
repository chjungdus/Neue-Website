import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "DigitalForge – Webdesign Agentur",
    template: "%s | DigitalForge",
  },
  description:
    "Wir entwickeln professionelle Websites, Online-Shops und Web-Apps, die Ihre Kunden begeistern und Ihren Umsatz steigern.",
  keywords: ["Webdesign", "Web-Entwicklung", "Online-Shop", "SEO", "Agentur"],
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
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
