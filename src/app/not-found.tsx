import Link from "next/link"
import { ArrowRight, Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="max-w-xl w-full text-center">
        <p className="text-[10rem] font-black leading-none text-gray-100 select-none">404</p>
        <div className="-mt-12 mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-[#111827] mb-4">
            Diese Seite existiert{" "}
            <span className="gradient-text">nicht.</span>
          </h1>
          <p className="text-[#6b7280] text-lg leading-relaxed">
            Entweder wurde die Seite verschoben, gelöscht oder der Link ist falsch. Das passiert.
            Hier sind ein paar nützliche Links:
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Link
            href="/"
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-6 py-3 rounded-full transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Home size={16} />
            Zur Startseite
          </Link>
          <Link
            href="/portfolio"
            className="text-[#374151] font-semibold px-6 py-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Search size={16} />
            Portfolio ansehen
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { label: "Leistungen", href: "/leistungen" },
            { label: "Preise", href: "/preise" },
            { label: "Über uns", href: "/ueber-uns" },
            { label: "Kontakt", href: "/kontakt" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#6b7280] hover:text-[#111827] transition-colors text-sm py-2 px-3 rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5"
            >
              {link.label}
              <ArrowRight size={12} className="opacity-50" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
