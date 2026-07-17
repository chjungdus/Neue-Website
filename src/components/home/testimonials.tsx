import FadeIn from "@/components/ui/fade-in"
import { Star } from "lucide-react"

// Nur echte Kundenstimmen. Weitere hier ergänzen, sobald sie vorliegen.
const testimonial = {
  quote:
    "Seit der neuen Website werde ich täglich 2 Mal angerufen. Wir sind bis September ausgebucht.",
  name: "Limpiezas El Valle",
  meta: "Reinigungsfirma · Burgos, Spanien",
  initials: "LV",
  badge: "Bis September ausgebucht",
}

export default function Testimonials() {
  return (
    <section className="py-14 md:py-16 bg-[#0a0a0f]/[0.03]">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <p className="text-[#0a0a0f]/40 text-xs font-semibold uppercase tracking-widest mb-3">
            Kundenstimme
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a0a0f] mb-10 leading-tight">
            Was Kunden sagen.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative bg-white border border-[#0a0a0f]/[0.08] shadow-sm rounded-2xl p-8 md:p-12">
            {/* großes dekoratives Anführungszeichen */}
            <span
              aria-hidden="true"
              className="absolute top-4 right-8 text-[#0066FF]/10 text-8xl font-black leading-none select-none pointer-events-none"
            >
              &rdquo;
            </span>

            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, s) => (
                <Star key={s} size={16} className="text-[#0066FF] fill-[#0066FF]" />
              ))}
            </div>

            <p className="text-[#0a0a0f] text-2xl md:text-3xl font-medium leading-relaxed mb-8 max-w-2xl">
              &bdquo;{testimonial.quote}&ldquo;
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-[#0a0a0f]/[0.08]">
              <div className="flex items-center gap-3">
                {/* Logo-Platzhalter — durch Kundenlogo ersetzbar */}
                <div className="w-11 h-11 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/25 flex items-center justify-center text-[#0066FF] text-sm font-black shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-[#0a0a0f] font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-[#0a0a0f]/50 text-xs mt-0.5">{testimonial.meta}</div>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-bold bg-[#0066FF]/15 text-[#0066FF] border border-[#0066FF]/20 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                {testimonial.badge}
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
