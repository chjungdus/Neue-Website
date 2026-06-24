import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#2563eb] rounded-3xl">
          <div className="text-center py-20 px-6">
            <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-4">
              Jetzt starten
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Bereit für eine Website,
              <br />die wirklich arbeitet?
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-3">
              30 Minuten Erstgespräch. Kein Pitch, keine Folien.
            </p>
            <p className="text-white/60 text-base max-w-lg mx-auto mb-10">
              Wir hören zu — und sagen Ihnen ehrlich, ob und wie wir helfen können. Ohne Druck, ohne Verpflichtung.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/anfrage"
                className="bg-white text-[#2563eb] font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition-all flex items-center gap-2 text-base"
              >
                Jetzt Projekt anfragen
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/kontakt"
                className="flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 transition-all text-base"
              >
                <Calendar size={18} />
                Termin vereinbaren
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
