"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Zap, Home } from "lucide-react"

const navLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/preise", label: "Preise" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg text-[#111827] group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center group-hover:bg-[#1d4ed8] transition-colors">
            <Zap size={16} className="text-white" />
          </div>
          <span>
            Digital<span className="text-[#2563eb]">Forge</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[#111827]"
                  : "text-[#6b7280] hover:text-[#111827]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/kontakt"
            className="text-sm font-medium text-[#6b7280] hover:text-[#111827] transition-colors"
          >
            Kontakt
          </Link>
          <Link
            href="/anfrage"
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Kostenloses Erstgespräch
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#111827] p-2"
          aria-label="Menü öffnen"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-1">
            <Link
              href="/"
              className={`flex items-center gap-2 text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                pathname === "/" ? "text-[#111827] bg-gray-50" : "text-[#6b7280] hover:text-[#111827] hover:bg-gray-50"
              }`}
            >
              <Home size={15} />
              Startseite
            </Link>
            <div className="border-t border-gray-100 my-1" />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                  pathname === link.href ? "text-[#111827] bg-gray-50" : "text-[#6b7280] hover:text-[#111827] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="text-sm font-medium text-[#6b7280] py-2.5 px-3 rounded-lg hover:text-[#111827] hover:bg-gray-50"
            >
              Kontakt
            </Link>
            <Link
              href="/anfrage"
              className="bg-[#2563eb] text-white text-sm font-semibold px-5 py-3 rounded-full text-center mt-3"
            >
              Kostenloses Erstgespräch
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
