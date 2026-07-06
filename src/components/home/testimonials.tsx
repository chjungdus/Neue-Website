import FadeIn from "@/components/ui/fade-in"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Seit der neuen Website werde ich täglich 2 Mal angerufen. Wir sind bis September ausgebucht.",
    name: "Limpiezas El Valle",
    meta: "Reinigungsfirma · Burgos, Spanien",
    initials: "LV",
    badge: "Bis September ausgebucht",
  },
  {
    quote:
      "Gäste finden jetzt Speisekarte und Standort, ohne uns anzuschreiben. Die Seite fühlt sich an wie unser Truck: direkt und ehrlich.",
    name: "Milonga Food Truck",
    meta: "Argentinische Küche · Düsseldorf",
    initials: "MF",
    badge: "Weniger Anfragen, mehr Gäste",
  },
]

export default function Testimonials() {
  return (
    <section className="py-14 md:py-16 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <p className="text-white/35 text-xs font-semibold uppercase tracking-widest mb-3">
            Kundenstimmen
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-10 leading-tight">
            Was Kunden sagen.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.12} className={i === 1 ? "md:mt-10" : ""}>
              <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} className="text-[#0066FF] fill-[#0066FF]" />
                  ))}
                </div>

                <p className="text-white text-xl md:text-2xl font-medium leading-relaxed mb-7">
                  &bdquo;{t.quote}&ldquo;
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4 pt-5 border-t border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    {/* Logo-Platzhalter — durch Kundenlogo ersetzbar */}
                    <div className="w-10 h-10 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/25 flex items-center justify-center text-[#0066FF] text-xs font-black shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-white/45 text-xs mt-0.5">{t.meta}</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs font-bold bg-[#0066FF]/15 text-[#0066FF] border border-[#0066FF]/20 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                    {t.badge}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
