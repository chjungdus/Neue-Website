import Link from "next/link"
import { ArrowRight, Monitor, Code2, CreditCard, TrendingUp } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const ACCENT = "#3B82F6"
const ACCENT_LIGHT = "#60A5FA"

const services = [
  {
    icon: Monitor,
    title: "Webdesign",
    description: "Kein Template. Gebaut für Ihr Unternehmen.",
    points: ["Mobile-first", "Design schafft Vertrauen", "Einmalig. Kein Copy-Paste"],
    visual: "design",
  },
  {
    icon: Code2,
    title: "Entwicklung",
    description: "Schnell, sicher, ohne Lock-in.",
    points: ["Lighthouse 90+ als Standard", "Kein teures CMS", "Auf jedem Gerät fehlerfrei"],
    visual: "code",
  },
  {
    icon: CreditCard,
    title: "E-Commerce",
    description: "Bezahlprozesse, die funktionieren.",
    points: ["Stripe & PayPal integriert", "Checkout ohne Abbrüche", "Produktseiten, die überzeugen"],
    visual: "payment",
  },
  {
    icon: TrendingUp,
    title: "SEO & Performance",
    description: "Gefunden werden von kaufbereiten Kunden.",
    points: ["Technisches SEO inklusive", "Core Web Vitals optimiert", "Kaufbereite Kunden erreichen"],
    visual: "seo",
  },
]

function ServiceVisual({ type }: { type: string }) {
  if (type === "design") {
    return (
      <div className="w-full h-28 rounded-xl bg-[#0a0a0f] border border-white/[0.06] overflow-hidden">
        {/* mini nav */}
        <div className="h-6 bg-white/[0.04] border-b border-white/[0.04] flex items-center gap-2 px-3">
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="w-12 h-1 rounded-full bg-white/10" />
          <div className="flex-1" />
          <div className="w-8 h-1 rounded-full bg-white/10" />
          <div className="w-6 h-1 rounded-full bg-white/10" />
        </div>
        {/* mini hero */}
        <div className="p-3">
          <div className="h-2 w-2/5 rounded-full mb-2" style={{ backgroundColor: `${ACCENT}70` }} />
          <div className="h-1.5 w-3/5 rounded-full mb-3 bg-white/[0.07]" />
          <div className="flex gap-2">
            <div className="h-5 w-16 rounded-full" style={{ backgroundColor: ACCENT }} />
            <div className="h-5 w-14 rounded-full border border-white/15" />
          </div>
        </div>
      </div>
    )
  }
  if (type === "code") {
    return (
      <div className="w-full h-28 rounded-xl bg-[#0a0a0f] border border-white/[0.06] p-3 font-mono text-[10px] leading-5">
        <div>
          <span style={{ color: ACCENT_LIGHT }}>const</span>
          {" "}
          <span className="text-white/80">site</span>
          {" = "}
          <span className="text-[#4ade80]">build</span>
          <span className="text-white/40">(config)</span>
        </div>
        <div className="text-white/30 ml-3">.optimize() <span className="text-white/15">{"// Lighthouse 95+"}</span></div>
        <div className="text-white/30 ml-3">.deploy()</div>
        <div className="mt-2 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
          <span className="text-[#4ade80] text-[9px]">Build successful · 847ms</span>
        </div>
        <div className="mt-1.5 h-1 w-1/3 rounded-full bg-white/[0.07]" />
      </div>
    )
  }
  if (type === "payment") {
    return (
      <div className="w-full h-28 rounded-xl bg-[#0a0a0f] border border-white/[0.06] p-3 flex flex-col gap-2">
        <div className="rounded-lg p-2 flex items-center gap-2" style={{ backgroundColor: `${ACCENT}15` }}>
          <div className="w-6 h-4 rounded" style={{ backgroundColor: `${ACCENT}60` }} />
          <div className="flex flex-col gap-1 flex-1">
            <div className="h-1.5 w-1/2 rounded-full bg-white/[0.15]" />
            <div className="h-1 w-1/3 rounded-full bg-white/[0.07]" />
          </div>
          <div className="w-8 h-3 rounded-full" style={{ backgroundColor: `${ACCENT}40` }} />
        </div>
        <div className="flex gap-1.5">
          {["Stripe", "PayPal", "SEPA"].map((label) => (
            <div
              key={label}
              className="flex-1 h-7 rounded flex items-center justify-center text-[7px] font-bold"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", color: `${ACCENT_LIGHT}90` }}
            >
              {label}
            </div>
          ))}
        </div>
        <div className="h-1.5 w-full rounded-full mt-auto" style={{ backgroundColor: `${ACCENT}20` }} />
      </div>
    )
  }
  // seo — bar chart
  return (
    <div className="w-full h-28 rounded-xl bg-[#0a0a0f] border border-white/[0.06] p-3 flex flex-col justify-end gap-1">
      <div className="flex items-end gap-1.5 flex-1">
        {[40, 55, 45, 70, 60, 90].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{
              height: `${h}%`,
              backgroundColor: i === 5 ? ACCENT : `${ACCENT}30`,
            }}
          />
        ))}
      </div>
      <div className="flex items-center gap-1.5 mt-1">
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
        <span className="text-[9px] text-white/30">Sichtbarkeit · +64% nach 3 Mon.</span>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section className="py-28 bg-[#0F1E3D]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Vier Dinge.
              <br />
              <span className="text-slate-300 font-medium text-3xl md:text-4xl">Richtig gemacht.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-[#3B82F6]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#60A5FA] transition-colors">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.description}</p>
                  <ul className="space-y-2 mb-6">
                    {s.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-sm text-slate-500">
                        <span className="w-1 h-1 rounded-full flex-shrink-0 bg-[#3B82F6]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <ServiceVisual type={s.visual} />
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn>
          <div className="mt-10 pt-10 border-t border-white/5 flex items-center justify-end">
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
