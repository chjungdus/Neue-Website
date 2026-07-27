import FadeIn from "@/components/ui/fade-in"
import FloatingShapes from "@/components/ui/floating-shapes"
import { Search, Palette, Code2, Rocket } from "lucide-react"

const ACCENT = "#0066FF"
const ACCENT_BG = "rgba(0, 102, 255,0.12)"

const steps = [
  {
    week: "Woche 1",
    icon: Search,
    title: "Discovery",
    body: "Wir lernen Ihr Unternehmen kennen. Am Ende steht ein verbindliches Angebot.",
    deliverable: "Sitemap · Fixes Angebot",
  },
  {
    week: "Woche 2",
    icon: Palette,
    title: "Design",
    body: "Vollständiger Entwurf. Feedbackrunden kostenlos.",
    deliverable: "Design zur Freigabe",
  },
  {
    week: "Woche 3",
    icon: Code2,
    title: "Entwicklung",
    body: "Design wird zu Code. Staging-Link zum Testen.",
    deliverable: "Staging-Link",
  },
  {
    week: "Woche 4",
    icon: Rocket,
    title: "Launch",
    body: "Testing auf allen Geräten, dann Go-Live. Datum eingehalten.",
    deliverable: "Launch · Übergabe",
  },
]

export default function Process() {
  return (
    <section id="ablauf" className="relative overflow-hidden py-14 md:py-16 bg-white scroll-mt-16">
      <FloatingShapes tone="light" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0f] mb-5 leading-tight">
              In 4 Wochen live.
              <br />
              <span className="text-[#0a0a0f]/45 font-normal text-3xl md:text-4xl">Wirklich.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            <div
              className="absolute top-[26px] left-[52px] right-[52px] h-px opacity-20"
              style={{ background: ACCENT }}
            />
            <div className="grid grid-cols-4 gap-4">
              {steps.map((step, i) => {
                const Icon = step.icon
                return (
                  <FadeIn key={step.week} delay={i * 0.1}>
                    <div className="flex flex-col items-center">
                      <div
                        className="w-[52px] h-[52px] rounded-full flex items-center justify-center mb-6 z-10 relative ring-4 ring-white"
                        style={{ backgroundColor: ACCENT_BG }}
                      >
                        <Icon size={22} style={{ color: ACCENT }} />
                      </div>
                      <div className="bg-[#0a0a0f]/[0.03] border border-[#0a0a0f]/5 rounded-2xl p-6 w-full text-left">
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider mb-1 block"
                          style={{ color: ACCENT }}
                        >
                          {step.week}
                        </span>
                        <h3 className="text-[#0a0a0f] font-black text-lg mb-2">{step.title}</h3>
                        <p className="text-[#0a0a0f] text-sm leading-relaxed mb-4">{step.body}</p>
                        <span className="text-xs font-medium text-[#0a0a0f] bg-white border border-[#0a0a0f]/10 px-3 py-1.5 rounded-full inline-block">
                          {step.deliverable}
                        </span>
                      </div>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative">
          <div className="absolute left-[24px] top-4 bottom-4 w-px" style={{ backgroundColor: `${ACCENT}30` }} />
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <FadeIn key={step.week} delay={i * 0.1}>
                  <div className="grid grid-cols-[50px_1fr] gap-4 items-start">
                    <div
                      className="w-[50px] h-[50px] rounded-full flex items-center justify-center z-10 ring-4 ring-white"
                      style={{ backgroundColor: ACCENT_BG }}
                    >
                      <Icon size={20} style={{ color: ACCENT }} />
                    </div>
                    <div className="bg-[#0a0a0f]/[0.03] border border-[#0a0a0f]/5 rounded-2xl p-6">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider mb-0.5 block"
                        style={{ color: ACCENT }}
                      >
                        {step.week}
                      </span>
                      <h3 className="text-[#0a0a0f] font-black text-lg mb-2">{step.title}</h3>
                      <p className="text-[#0a0a0f] text-sm leading-relaxed mb-3">{step.body}</p>
                      <span className="text-xs font-medium text-[#0a0a0f] bg-white border border-[#0a0a0f]/10 px-3 py-1.5 rounded-full inline-block">
                        {step.deliverable}
                      </span>
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
