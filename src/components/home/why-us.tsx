import { Sparkles, Cpu, Zap, MessageCircle } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const reasons = [
  {
    icon: Sparkles,
    title: "Individuelles Design",
    body: "Kein Baukasten, kein Template. Jede Seite entsteht von Grund auf für Ihr Unternehmen.",
  },
  {
    icon: Cpu,
    title: "Schnell & zuverlässig",
    body: "Ihre Website lädt schnell, sieht auf jedem Handy gut aus und läuft ohne Probleme — dafür sorgen wir im Hintergrund.",
  },
  {
    icon: Zap,
    title: "Fester Preis",
    body: "Das Angebot steht vor Projektstart. Keine versteckten Kosten, keine Überraschung am Ende.",
  },
  {
    icon: MessageCircle,
    title: "Persönlicher Kontakt",
    body: "Sie sprechen direkt mit der Person, die Ihre Website baut — nicht mit einem Callcenter.",
  },
]

export default function WhyUs() {
  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0a0a0f] leading-tight mb-12">
            Warum eine Website
            <br />
            <span className="text-[#0066FF]">bei uns?</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <FadeIn key={r.title} delay={i * 0.08}>
                <div className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF]/10 flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#0066FF]" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0a0a0f] mb-2">{r.title}</h3>
                  <p className="text-[#0a0a0f]/60 text-[15px] leading-relaxed">{r.body}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
