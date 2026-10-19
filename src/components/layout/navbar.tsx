"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuLines, Close, WhatsApp } from "@/components/stack/icons"
import { waLink } from "@/lib/site"

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/portfolio", label: "Referenzen" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/preise", label: "Preise" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/faq", label: "Fragen" },
  { href: "/kontakt", label: "Kontakt" },
]

/** The menu bar of the stack: wordmark, the card menu, and the WhatsApp line. */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node
      if (!menuRef.current?.contains(t) && !buttonRef.current?.contains(t)) setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onClick)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onClick)
    }
  }, [open])

  const isCurrent = (href: string) => (href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href))

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[var(--menubar)] bg-paper border-b-2 border-ink">
      <div className="mx-auto flex h-full max-w-[1212px] items-center gap-3 px-4">
        <Link href="/" aria-label="Nexuzo Startseite" className="flex flex-none items-center py-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/nexuzo.png" alt="Nexuzo" width={176} height={32} className="h-5 w-auto sm:h-6" />
        </Link>

        {/* Wide screens: the cards as a menu row */}
        <nav aria-label="Hauptnavigation" className="ml-4 hidden flex-1 items-stretch self-stretch xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              className="pixel flex items-center px-3 text-[13px] text-ink hover:bg-ink hover:text-paper aria-[current=page]:bg-ink aria-[current=page]:text-paper"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={waLink("Hallo Nexuzo, ich interessiere mich für eine Website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm px-3 sm:px-[14px]"
            aria-label="Per WhatsApp schreiben"
          >
            <WhatsApp size={18} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Narrower screens: one pull-down menu named for what it holds */}
          <div className="relative xl:hidden">
            <button
              ref={buttonRef}
              type="button"
              className="btn btn-sm"
              aria-expanded={open}
              aria-controls="karten-menu"
              aria-pressed={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <Close size={14} /> : <MenuLines size={14} />}
              <span className="pixel text-[13px]">Karten</span>
            </button>
            <div
              ref={menuRef}
              id="karten-menu"
              hidden={!open}
              className="menu-panel right-0 top-[calc(100%+10px)] w-[min(86vw,300px)] py-1"
            >
              <nav aria-label="Hauptnavigation mobil" className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isCurrent(link.href) ? "page" : undefined}
                    className="menu-item"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/anfrage" className="menu-item border-t-2 border-ink" onClick={() => setOpen(false)}>
                  Projekt anfragen
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
