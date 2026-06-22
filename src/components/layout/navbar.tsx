"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Zap } from "lucide-react"

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
          ? "bg-[#06070f]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg text-white group"
        >
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Zap size={16} className="text-white" />
          </div>
          <span>
            Digital<span className="gradient-text">Forge</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-white"
                  : "text-[#8b8da0] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/kontakt"
            className="text-sm font-medium text-[#8b8da0] hover:text-white transition-colors"
          >
            Kontakt
          </Link>
          <Link
            href="/anfrage"
            className="gradient-bg text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Projekt anfragen
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Menü öffnen"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-[#0e0f1c]/95 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium py-2 transition-colors ${
                  pathname === link.href ? "text-white" : "text-[#8b8da0]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="text-sm font-medium text-[#8b8da0] py-2"
            >
              Kontakt
            </Link>
            <Link
              href="/anfrage"
              className="gradient-bg text-white text-sm font-semibold px-4 py-3 rounded-lg text-center mt-2"
            >
              Projekt anfragen
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
