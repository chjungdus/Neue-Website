import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 gradient-bg opacity-90" />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(0,0,0,0.2) 0%, transparent 60%)",
            }}
          />
          <div className="relative z-10 text-center py-20 px-6">
            <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">
              Bereit loszulegen?
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Ihr Projekt wartet.
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
              Lassen Sie uns in einem kostenlosen Erstgespräch herausfinden, wie wir Ihre
              Online-Präsenz auf das nächste Level bringen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/anfrage"
                className="bg-white text-[#6366f1] font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all hover:scale-105 flex items-center gap-2 text-base"
              >
                Jetzt Projekt anfragen
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/kontakt"
                className="flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 hover:bg-white/10 transition-all text-base"
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
