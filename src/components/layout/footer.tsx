import Link from "next/link"
import { Zap, MapPin } from "lucide-react"

const footerLinks = {
  Leistungen: [
    { href: "/leistungen#webdesign", label: "Webdesign" },
    { href: "/leistungen#entwicklung", label: "Web-Entwicklung" },
    { href: "/leistungen#ecommerce", label: "E-Commerce" },
    { href: "/leistungen#seo", label: "SEO & Performance" },
  ],
  Unternehmen: [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/preise", label: "Preise" },
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
    <footer className="bg-[#0f172a] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center">
                <Zap size={16} className="text-white" />
              </div>
              <span>
                Digital<span className="text-[#60a5fa]">Forge</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Wir bauen Websites, die nicht nur schön aussehen – sondern messbar mehr Kunden bringen.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <span className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin size={14} />
                Düsseldorf, Deutschland
              </span>
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
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} DigitalForge GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <span>Gemacht mit Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
