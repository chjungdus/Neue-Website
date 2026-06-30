import Link from "next/link"
import { ArrowRight, Monitor, Code2, ShoppingBag, TrendingUp } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const services = [
  {
    icon: Monitor,
    title: "Webdesign",
    description: "Kein Template, kein Baukasten. Individuell für Ihr Unternehmen, Ihre Zielgruppe, Ihre Ziele.",
    points: ["Mobile-first von Anfang an", "Design schafft Vertrauen", "Einmalig — kein Copy-Paste"],
    accent: "#3b82f6",
    bg: "rgba(59,130,246,0.08)",
    visual: "design",
  },
  {
    icon: Code2,
    title: "Entwicklung",
    description: "Schnell, sicher, ohne Lock-in. Jede Millisekunde Ladezeit kostet Conversion.",
    points: ["Lighthouse 90+ als Standard", "Kein teures CMS", "Auf jedem Gerät fehlerfrei"],
    accent: "#06b6d4",
    bg: "rgba(6,182,212,0.08)",
    visual: "code",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description: "Ihr Shop muss nicht hübsch sein — er muss verkaufen. Checkout-Flows ohne Abbrüche.",
    points: ["Stripe & PayPal integriert", "Produktseiten, die überzeugen", "Analytics statt Raten"],
    accent: "#8b5cf6",
    bg: "rgba(139,92,246,0.08)",
    visual: "shop",
  },
  {
    icon: TrendingUp,
    title: "SEO & Performance",
    description: "#1 bei Google bekommt man nicht zufällig. Wir sorgen dafür, dass Sie gefunden werden.",
    points: ["Technisches SEO inklusive", "Core Web Vitals optimiert", "Kaufbereite Kunden erreichen"],
    accent: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    visual: "seo",
  },
]

function ServiceVisual({ type, accent }: { type: string; accent: string }) {
  if (type === "design") {
    return (
      <div className="w-full h-28 rounded-xl bg-[#0a0a0f] border border-white/[0.06] p-3 flex flex-col gap-2">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 grid grid-cols-3 gap-1.5">
          <div className="rounded-md" style={{ backgroundColor: `${accent}25` }} />
          <div className="col-span-2 flex flex-col gap-1.5">
            <div className="h-2 w-2/3 rounded-full" style={{ backgroundColor: `${accent}40` }} />
            <div className="h-1.5 w-full rounded-full bg-white/[0.07]" />
            <div className="h-1.5 w-4/5 rounded-full bg-white/[0.07]" />
          </div>
        </div>
      </div>
    )
  }
  if (type === "code") {
    return (
      <div className="w-full h-28 rounded-xl bg-[#0a0a0f] border border-white/[0.06] p-3 font-mono text-[10px] leading-relaxed">
        <div><span style={{ color: accent }}>const</span> <span className="text-white/70">site</span> = <span className="text-white/40">build()</span></div>
        <div className="text-white/30 ml-3">.optimize()</div>
        <div className="text-white/30 ml-3">.deploy()</div>
        <div className="mt-2 h-1.5 w-3/4 rounded-full" style={{ backgroundColor: `${accent}35` }} />
        <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-white/[0.07]" />
      </div>
    )
  }
  if (type === "shop") {
    return (
      <div className="w-full h-28 rounded-xl bg-[#0a0a0f] border border-white/[0.06] p-3 grid grid-cols-3 gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-md flex flex-col gap-1 p-1.5" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
            <div className="flex-1 rounded" style={{ backgroundColor: `${accent}25` }} />
            <div className="h-1 w-3/4 rounded-full bg-white/[0.1]" />
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="w-full h-28 rounded-xl bg-[#0a0a0f] border border-white/[0.06] p-3 flex items-end gap-1.5">
      {[40, 65, 50, 85, 60, 95].map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-t"
          style={{ height: `${h}%`, backgroundColor: i === 5 ? accent : `${accent}30` }}
        />
      ))}
    </div>
  )
}

export default function Services() {
  return (
    <section className="py-28 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Vier Dinge.
              <br />
              <span className="text-slate-600 font-normal text-3xl md:text-4xl">Richtig gemacht.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
              Andere Agenturen listen 47 Leistungen. Wir konzentrieren uns auf vier — die vier, die tatsächlich Kunden bringen.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: s.bg }}>
                      <Icon size={22} style={{ color: s.accent }} />
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#3b82f6] transition-colors">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.description}</p>
                  <ul className="space-y-2 mb-6">
                    {s.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-sm text-slate-500">
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: s.accent }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <ServiceVisual type={s.visual} accent={s.accent} />
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn>
          <div className="mt-10 pt-10 border-t border-white/5 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-slate-600 text-sm">Etwas anderes? Wir reden gerne darüber.</p>
            <Link
              href="/leistungen"
              className="text-slate-400 text-sm font-semibold hover:text-white transition-colors flex items-center gap-2 group"
            >
              Alle Leistungen
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
