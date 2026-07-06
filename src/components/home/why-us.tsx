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
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-black text-[#0a0a0f] leading-tight mb-16">
            Warum eine Website
            <br />
            bei uns?
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-14">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <FadeIn key={r.title} delay={i * 0.08}>
                <div>
                  <Icon
                    size={30}
                    strokeWidth={1.5}
                    className="text-[#0066FF] mb-5"
                  />
                  <h3 className="text-lg font-bold text-[#0a0a0f] mb-2">{r.title}</h3>
                  <p className="text-[#0a0a0f] text-[15px] leading-relaxed">{r.body}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
