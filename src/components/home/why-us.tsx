import { Sparkles, Cpu, Zap, MessageCircle } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const reasons = [
  {
    icon: Sparkles,
    title: "Individuelles Design",
    body: "Kein Template, kein Baukasten. Jede Seite wird für Ihr Unternehmen entworfen — nicht aus einer Vorlage kopiert.",
    accent: "#3b82f6",
    bg: "rgba(59,130,246,0.1)",
  },
  {
    icon: Cpu,
    title: "Moderner Tech-Stack",
    body: "Next.js, TypeScript, durchdachte Performance. Dieselben Werkzeuge, mit denen große Agenturen arbeiten — ohne deren Preisschild.",
    accent: "#06b6d4",
    bg: "rgba(6,182,212,0.1)",
  },
  {
    icon: Zap,
    title: "Schneller Festpreis-Prozess",
    body: "Klares Angebot vor Projektstart, keine versteckten Stunden-Abrechnungen. Sie wissen vorher, was es kostet.",
    accent: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
  },
  {
    icon: MessageCircle,
    title: "Persönlicher Kontakt",
    body: "Sie sprechen direkt mit der Person, die Ihre Website baut — nicht mit einem Sales-Team und wechselnden Ansprechpartnern.",
    accent: "#10b981",
    bg: "rgba(16,185,129,0.1)",
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-[#111827] leading-tight mb-4">
              Warum eine Website
              <br />
              bei uns?
            </h2>
            <p className="text-[#6b7280] text-lg leading-relaxed">
              Agentur-Qualität, ohne den Agentur-Preis. Das ist kein Slogan — das ist, wie wir
              arbeiten.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <FadeIn key={r.title} delay={i * 0.08}>
                <div className="h-full bg-white/60 backdrop-blur-sm border border-gray-100 rounded-2xl p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-gray-200 transition-all">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: r.bg }}
                  >
                    <Icon size={20} style={{ color: r.accent }} />
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] mb-2">{r.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{r.body}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
