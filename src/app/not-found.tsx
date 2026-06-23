import Link from "next/link"
import { ArrowRight, Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#6366f1]/8 blur-3xl" />
        </div>

        <div className="relative">
          <p className="text-[10rem] font-black leading-none text-white/4 select-none">404</p>
          <div className="-mt-12 mb-8">
            <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
              Diese Seite existiert{" "}
              <span className="gradient-text">nicht.</span>
            </h1>
            <p className="text-[#8b8da0] text-lg leading-relaxed">
              Entweder wurde die Seite verschoben, gelöscht oder der Link ist falsch. Das passiert.
              Hier sind ein paar nützliche Links:
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <Link
              href="/"
              className="gradient-bg text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Home size={16} />
              Zur Startseite
            </Link>
            <Link
              href="/portfolio"
              className="bg-white/6 text-white font-semibold px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
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
                className="text-[#8b8da0] hover:text-white transition-colors text-sm py-2 px-3 rounded-lg hover:bg-white/4 flex items-center justify-center gap-1.5"
              >
                {link.label}
                <ArrowRight size={12} className="opacity-50" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
