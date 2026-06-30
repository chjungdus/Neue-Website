import { Quote } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const testimonials = [
  { name: "Carlos V.", company: "Limpiezas El Valle", initials: "CV", quote: "Vorher hat uns online niemand gefunden. Jetzt rufen täglich neue Kunden an — direkt über die Website.", result: "+240%", resultNote: "mehr Anfragen in 3 Monaten", color: "#10b981" },
  { name: "Alejandro R.", company: "Milonga ARG", initials: "AR", quote: "Seit dem Launch kennen uns Leute, die vorher nie am Truck vorbeigekommen wären. Mehr Kunden, ohne dass wir mehr Werbung geschaltet haben.", result: "3 → 11", resultNote: "Online-Anfragen pro Monat", color: "#3b82f6" },
]

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Was Kunden
              <br />
              über uns sagen.
            </h2>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed">
              Keine ausgedachten Zitate. Echte Kunden, echte Ergebnisse.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-5 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all h-full">
                <Quote size={28} className="text-white/10 shrink-0" strokeWidth={1.5} />
                <p className="text-slate-300 text-[15px] leading-relaxed flex-1">„{t.quote}"</p>
                <div className="pt-4 border-t border-white/5">
                  <div
                    className="text-2xl font-black mb-0.5"
                    style={{ color: t.color }}
                  >
                    {t.result}
                  </div>
                  <div className="text-slate-600 text-xs mb-4">{t.resultNote}</div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${t.color}70, ${t.color}30)`,
                        border: `1px solid ${t.color}25`,
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-slate-500 text-xs">{t.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
