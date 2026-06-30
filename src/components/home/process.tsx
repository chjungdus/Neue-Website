import FadeIn from "@/components/ui/fade-in"
import { Search, Palette, Code2, Rocket } from "lucide-react"

const steps = [
  { week: "Woche 1", icon: Search, title: "Discovery", body: "Wir lernen Ihr Unternehmen kennen und liefern ein konkretes Konzept — mit Festpreis.", deliverable: "Sitemap · Festpreis", color: "#3b82f6", bg: "rgba(59,130,246,0.12)" },
  { week: "Woche 2", icon: Palette, title: "Design", body: "Vollständiger Design-Entwurf zur Freigabe. Unbegrenzte Feedbackrunden — ohne Aufpreis.", deliverable: "Design zur Freigabe", color: "#06b6d4", bg: "rgba(6,182,212,0.12)" },
  { week: "Woche 3", icon: Code2, title: "Entwicklung", body: "Design wird zu Code. Live-Staging-Link zum Testen auf dem echten Gerät.", deliverable: "Staging-Link · Entwicklung", color: "#8b5cf6", bg: "rgba(139,92,246,0.12)" },
  { week: "Woche 4", icon: Rocket, title: "Launch", body: "Testing auf allen Geräten, dann Go-Live. Ein konkretes Datum — eingehalten. Immer.", deliverable: "Launch · Übergabe", color: "#10b981", bg: "rgba(16,185,129,0.12)" },
]

export default function Process() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#111827] mb-5 leading-tight">In 4 Wochen live.<br /><span className="text-[#9ca3af] font-normal text-3xl md:text-4xl">Wirklich.</span></h2>
            <p className="text-[#6b7280] text-lg max-w-lg leading-relaxed">Kein Marketing-Versprechen — eine verbindliche Deadline mit echtem Prozess dahinter.</p>
          </div>
        </FadeIn>
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute top-[26px] left-[52px] right-[52px] h-px opacity-20" style={{ background: "linear-gradient(to right, #3b82f6, #06b6d4, #8b5cf6, #10b981)" }} />
            <div className="grid grid-cols-4 gap-4">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <FadeIn key={step.week} delay={i * 0.1}>
                    <div className="flex flex-col items-center">
                      <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center mb-6 z-10 relative ring-4 ring-white" style={{ backgroundColor: step.bg }}>
                        <Icon size={22} style={{ color: step.color }} />
                      </div>
                      <div className="bg-[#f9fafb] border border-gray-100 rounded-2xl p-6 w-full text-left">
                        <span className="text-[10px] font-bold uppercase tracking-wider mb-1 block" style={{ color: step.color }}>{step.week}</span>
                        <h3 className="text-[#111827] font-black text-lg mb-2">{step.title}</h3>
                        <p className="text-[#6b7280] text-sm leading-relaxed mb-4">{step.body}</p>
                        <span className="text-xs font-medium text-[#374151] bg-white border border-gray-200 px-3 py-1.5 rounded-full inline-block">{step.deliverable}</span>
                      </div>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </div>
        <div className="md:hidden relative">
          <div className="absolute left-[24px] top-4 bottom-4 w-px bg-gray-100" />
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <FadeIn key={step.week} delay={i * 0.1}>
                  <div className="grid grid-cols-[50px_1fr] gap-4 items-start">
                    <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center z-10 ring-4 ring-white" style={{ backgroundColor: step.bg }}>
                      <Icon size={20} style={{ color: step.color }} />
                    </div>
                    <div className="bg-[#f9fafb] border border-gray-100 rounded-2xl p-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider mb-0.5 block" style={{ color: step.color }}>{step.week}</span>
                      <h3 className="text-[#111827] font-black text-lg mb-2">{step.title}</h3>
                      <p className="text-[#6b7280] text-sm leading-relaxed mb-3">{step.body}</p>
                      <span className="text-xs font-medium text-[#374151] bg-white border border-gray-200 px-3 py-1.5 rounded-full inline-block">{step.deliverable}</span>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
