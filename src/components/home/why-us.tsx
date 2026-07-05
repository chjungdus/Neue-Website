import { Sparkles, Cpu, Zap, MessageCircle } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const reasons = [
  {
    icon: Sparkles,
    title: "Individuelles Design",
    body: "Kein Template. Jede Seite individuell für Ihr Unternehmen.",
  },
  {
    icon: Cpu,
    title: "Moderner Tech-Stack",
    body: "Next.js, TypeScript, Performance. Große Agentur-Werkzeuge ohne den Preis.",
  },
  {
    icon: Zap,
    title: "Festpreis",
    body: "Klares Angebot vor Projektstart. Keine versteckten Kosten.",
  },
  {
    icon: MessageCircle,
    title: "Persönlicher Kontakt",
    body: "Sie sprechen direkt mit der Person, die Ihre Website baut.",
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] leading-tight mb-4">
              Warum eine Website
              <br />
              bei uns?
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <FadeIn key={r.title} delay={i * 0.08}>
                <div className="h-full bg-white border border-slate-200 rounded-2xl p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-slate-300 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#3B82F6]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{r.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{r.body}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
