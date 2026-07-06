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

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/20 shadow-sm"
          : "bg-transparent"
      }`}
      style={scrolled ? { backdropFilter: "blur(12px)", background: "rgba(255,255,255,0.7)" } : undefined}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg text-[#0a0a0f] group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center group-hover:bg-[#1d4ed8] transition-colors">
            <Zap size={16} className="text-white" />
          </div>
          <span>Nexuzo</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-[#0a0a0f]"
                  : "text-[#0a0a0f]/60 hover:text-[#0a0a0f]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/kontakt"
            className="text-sm font-medium text-[#0a0a0f]/60 hover:text-[#0a0a0f] transition-colors"
          >
            Kontakt
          </Link>
          <Link
            href="/anfrage"
            className="border border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Kostenlos anfragen
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#0a0a0f] p-2"
          aria-label="Menü öffnen"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-b border-black/10 shadow-lg" style={{ backdropFilter: "blur(12px)", background: "rgba(255,255,255,0.92)" }}>
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-1">
            <Link
              href="/"
              className={`flex items-center gap-2 text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                pathname === "/" ? "text-[#0a0a0f] bg-black/5" : "text-[#0a0a0f]/60 hover:text-[#0a0a0f] hover:bg-black/5"
              }`}
            >
              <Home size={15} />
              Startseite
            </Link>
            <div className="border-t border-black/5 my-1" />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                  pathname === link.href ? "text-[#0a0a0f] bg-black/5" : "text-[#0a0a0f]/60 hover:text-[#0a0a0f] hover:bg-black/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="text-sm font-medium text-[#0a0a0f]/60 py-2.5 px-3 rounded-lg hover:text-[#0a0a0f] hover:bg-black/5"
            >
              Kontakt
            </Link>
            <Link
              href="/anfrage"
              className="border border-[#2563eb] text-[#2563eb] text-sm font-semibold px-5 py-3 rounded-full text-center mt-3 hover:bg-[#2563eb] hover:text-white transition-colors"
            >
              Kostenlos anfragen
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
