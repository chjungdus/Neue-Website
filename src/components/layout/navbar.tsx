"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/portfolio", label: "Referenzen" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/preise", label: "Preise" },
  { href: "/kontakt", label: "Kontakt" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  // Pages whose hero is dark — navbar uses its light (white) variant on top.
  const darkHeroRoutes = ["/", "/portfolio"]
  const onDarkHero = darkHeroRoutes.includes(pathname) && !scrolled && !mobileOpen
  const solidHeader = scrolled || mobileOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  // Lock body scroll while the mobile panel is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          solidHeader ? "border-b border-[#0a0a0f]/10 shadow-sm" : "bg-transparent"
        }`}
        style={solidHeader ? { backdropFilter: "blur(12px)", background: "rgba(255,255,255,0.85)" } : undefined}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" aria-label="Nexuzo — Startseite" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={onDarkHero ? "/logo/nexuzo-white.png" : "/logo/nexuzo.png"}
              alt="Nexuzo"
              width={176}
              height={32}
              className="h-7 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.slice(0, 5).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  onDarkHero
                    ? pathname === link.href ? "text-white" : "text-white/60 hover:text-white"
                    : pathname === link.href ? "text-[#0a0a0f]" : "text-[#0a0a0f]/60 hover:text-[#0a0a0f]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/kontakt"
              className={`text-sm font-medium transition-colors ${onDarkHero ? "text-white/60 hover:text-white" : "text-[#0a0a0f]/60 hover:text-[#0a0a0f]"}`}
            >
              Kontakt
            </Link>
            <Link
              href="/anfrage"
              className="bg-[#0066FF] hover:bg-[#0066FF]/85 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              Projekt anfragen
            </Link>
          </div>

          {/* Burger: two bars that rotate into an X. Stays in the header (z-50) above the panel (z-40). */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[7px]"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-6 h-[2px] rounded-full transition-all duration-300 ease-in-out ${
                mobileOpen ? "rotate-45 translate-y-[4.5px] bg-[#0a0a0f]" : onDarkHero ? "bg-white" : "bg-[#0a0a0f]"
              }`}
            />
            <span
              className={`block w-6 h-[2px] rounded-full transition-all duration-300 ease-in-out ${
                mobileOpen ? "-rotate-45 -translate-y-[4.5px] bg-[#0a0a0f]" : onDarkHero ? "bg-white" : "bg-[#0a0a0f]"
              }`}
            />
          </button>
        </nav>
      </header>

      {/*
        Overlay + panel live OUTSIDE the header on purpose: the header uses
        backdrop-filter when solid, which would otherwise become the containing
        block for these position:fixed elements and break the drawer once the
        page is scrolled. As siblings of <header> they stay viewport-relative.
      */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(10,10,15,0.4)" }}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 z-40 w-[82%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!mobileOpen}
      >
        {/* Spacer matching the header height so links start below the morphing X */}
        <div className="h-16 shrink-0" />
        <nav className="flex-1 flex flex-col px-6 pt-4 gap-1 overflow-y-auto">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              tabIndex={mobileOpen ? 0 : -1}
              className={`text-lg font-semibold py-3 border-b border-[#0a0a0f]/5 transition-all duration-300 ${
                pathname === link.href ? "text-[#0066FF]" : "text-[#0a0a0f] hover:text-[#0066FF]"
              } ${mobileOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}
              style={{ transitionDelay: mobileOpen ? `${80 + i * 40}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="px-6 pb-8">
          <Link
            href="/anfrage"
            onClick={() => setMobileOpen(false)}
            tabIndex={mobileOpen ? 0 : -1}
            className="block bg-[#0066FF] hover:bg-[#0066FF]/85 text-white font-bold px-5 py-3.5 rounded-full text-center transition-colors"
          >
            Projekt anfragen
          </Link>
        </div>
      </div>
    </>
  )
}
