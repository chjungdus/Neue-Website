import { Quote } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const secondary = [
  {
    name: "Sarah M.",
    company: "GreenMeal",
    quote:
      "Conversion von 1,4 % auf 3,2 % — in den ersten drei Monaten nach Launch. Ich war ehrlich gesagt skeptisch, ob sich die Investition lohnt.",
  },
  {
    name: "Thomas R.",
    company: "KraftWerk Fitness",
    quote:
      "Pünktlich geliefert, transparenter Prozess. Nach zwei schlechten Erfahrungen mit anderen Agenturen war das keine Selbstverständlichkeit.",
  },
  {
    name: "Andrea K.",
    company: "HolzMeister",
    quote:
      "Erstmals auf Seite 1 für unser wichtigstes Keyword — 6 Wochen nach dem Launch. Ohne bezahlte Anzeigen.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 lg:gap-20 items-start mb-16">
          <FadeIn>
            <div>
              <Quote size={52} className="text-[#f3f4f6] mb-6" strokeWidth={1.5} />
              <blockquote className="text-2xl md:text-3xl font-medium text-[#111827] leading-relaxed mb-10">
                „Nach dem Relaunch im Februar sind unsere monatlichen Online-Anfragen von
                durchschnittlich 3 auf 11 gestiegen. Das sind keine Hochrechnungen — das sind
                echte Zahlen aus unserem CRM."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f3f4f6] flex items-center justify-center text-[#6b7280] font-bold text-sm">
                  MW
                </div>
                <div>
                  <div className="font-bold text-[#111827]">Markus Weber</div>
                  <div className="text-[#9ca3af] text-sm">Kunde</div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Key metrics from the testimonial */}
          <FadeIn delay={0.15} direction="right">
            <div className="flex flex-col gap-4">
              <div className="bg-[#f9fafb] border border-gray-100 rounded-2xl p-6">
                <div className="text-[10px] text-[#9ca3af] font-semibold uppercase tracking-wide mb-2">
                  Ergebnis
                </div>
                <div className="text-4xl font-black text-[#111827] mb-1">3 → 11</div>
                <div className="text-sm text-[#6b7280]">Online-Anfragen pro Monat</div>
                <div className="text-xs text-[#10b981] font-semibold mt-2 bg-[#f0fdf4] inline-block px-2.5 py-1 rounded-full">
                  +267% Steigerung
                </div>
              </div>
              <div className="bg-[#f9fafb] border border-gray-100 rounded-2xl p-6">
                <div className="text-[10px] text-[#9ca3af] font-semibold uppercase tracking-wide mb-2">
                  Timeline
                </div>
                <div className="text-4xl font-black text-[#111827] mb-1">4 Wo.</div>
                <div className="text-sm text-[#6b7280]">Von Briefing bis Launch</div>
                <div className="text-xs text-[#6b7280] font-medium mt-2">wie versprochen</div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Secondary testimonials */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
            {secondary.map((t) => (
              <div key={t.name} className="space-y-4">
                <p className="text-[#374151] text-sm leading-relaxed">„{t.quote}"</p>
                <div>
                  <div className="text-xs font-bold text-[#111827]">{t.name}</div>
                  <div className="text-xs text-[#9ca3af]">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
