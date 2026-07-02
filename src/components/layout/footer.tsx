import Link from "next/link"
import { Zap, MapPin, Mail, MessageCircle } from "lucide-react"

const footerLinks = {
  Leistungen: [
    { href: "/leistungen#webdesign", label: "Webdesign" },
    { href: "/leistungen#entwicklung", label: "Entwicklung" },
    { href: "/leistungen#seo", label: "SEO & Sichtbarkeit" },
  ],
  Unternehmen: [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/preise", label: "Preise" },
    { href: "/faq", label: "FAQ" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  Rechtliches: [
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
    { href: "/agb", label: "AGB" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#2563eb] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span>Nexuzo</span>
            </Link>
            <p className="text-blue-100 text-sm leading-relaxed max-w-xs">
              Wir bauen Websites, die nicht nur schön aussehen, sondern messbar mehr Kunden bringen.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <span className="flex items-center gap-2 text-sm text-blue-100">
                <MapPin size={14} />
                Düsseldorf, Deutschland
              </span>
              <a
                href="mailto:mateo.sdlm@gmail.com"
                className="flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors"
              >
                <Mail size={14} />
                mateo.sdlm@gmail.com
              </a>
              <a
                href="https://wa.me/4917680257270"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors"
              >
                <MessageCircle size={14} />
                WhatsApp: +49 176 8025 7270
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com/nexuzo.de"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@nexuzo.de"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.56V6.8a4.85 4.85 0 01-1.07-.11z" />
                </svg>
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4">{category}</h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-blue-100 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-blue-100">
            © {new Date().getFullYear()} Nexuzo. Alle Rechte vorbehalten.
          </p>
          <div className="text-xs text-blue-100">
            Gemacht mit Next.js &amp; Tailwind
          </div>
        </div>
      </div>
    </footer>
  )
}
