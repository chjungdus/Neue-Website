import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

const usefulLinks = [
  { label: "Startseite", href: "/", desc: "Zurück zum Anfang" },
  { label: "Leistungen", href: "/leistungen", desc: "Was wir anbieten" },
  { label: "Portfolio", href: "/portfolio", desc: "Unsere bisherigen Projekte" },
  { label: "Preise", href: "/preise", desc: "Transparente Festpreise" },
  { label: "Über uns", href: "/ueber-uns", desc: "Wer wir sind" },
  { label: "Kontakt", href: "/kontakt", desc: "Kein Pitch, kein Druck" },
]

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* Big 404 number. barely visible, just texture */}
        <div
          className="text-[20rem] font-black leading-none select-none text-right pr-8 mb-0"
          style={{ color: "#ffffff", lineHeight: 1 }}
        >
          404
        </div>

        {/* Main content. overlapping the number visually */}
        <div className="-mt-32 relative z-10 max-w-2xl">
          <p className="text-[#0a0a0f]/40 text-xs font-semibold uppercase tracking-widest mb-5">
            Seite nicht gefunden
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-[#0a0a0f] leading-tight mb-5">
            Diese Seite haben
            <br />
            wir <span className="text-[#0066FF]">abgelehnt.</span>
          </h1>
          <p className="text-[#0a0a0f]/55 text-lg leading-relaxed mb-4 max-w-lg">
            Wir nehmen nicht jedes Projekt an. manchmal tun wir das auch mit Seiten.
          </p>
          <p className="text-[#0a0a0f]/40 text-sm leading-relaxed mb-10 max-w-md">
            Entweder wurde der Link verschoben, gelöscht oder Sie haben sich vertippt. Das passiert.
            Hier sind ein paar Seiten, die wir definitiv nicht abgelehnt haben:
          </p>

          {/* Primary action */}
          <div className="flex flex-col sm:flex-row items-start gap-3 mb-14">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0066FF]/85 text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm"
            >
              <ArrowLeft size={15} />
              Zurück zur Startseite
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 border border-[#0a0a0f]/10 hover:bg-[#0a0a0f]/[0.03] text-[#0a0a0f] font-semibold px-7 py-3.5 rounded-full transition-all text-sm"
            >
              Schreiben Sie uns
            </Link>
          </div>
        </div>

        {/* Useful links grid */}
        <div className="border-t border-[#0a0a0f]/5 pt-10">
          <p className="text-[#0a0a0f]/40 text-xs font-semibold uppercase tracking-widest mb-6">
            Nützliche Seiten
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {usefulLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-start justify-between gap-3 p-4 rounded-xl border border-[#0a0a0f]/5 hover:border-[#0066FF]/30 hover:bg-[#0a0a0f]/[0.03] transition-all"
              >
                <div>
                  <p className="text-[#0a0a0f] font-semibold text-sm group-hover:text-[#0066FF] transition-colors">
                    {link.label}
                  </p>
                  <p className="text-[#0a0a0f]/40 text-xs mt-0.5">{link.desc}</p>
                </div>
                <ArrowRight
                  size={14}
                  className="text-[#0a0a0f]/20 group-hover:text-[#0066FF] transition-colors shrink-0 mt-0.5"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Small reminder of who we are */}
        <div className="mt-12 pt-8 border-t border-[#0a0a0f]/5">
          <p className="text-[#0a0a0f]/20 text-xs text-center">
            Nexuzo · Düsseldorf · Kein Template wurde in der
            Herstellung dieser Website verletzt
          </p>
        </div>
      </div>
    </div>
  )
}
