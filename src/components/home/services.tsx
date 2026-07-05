import Link from "next/link"
import { ArrowRight, Monitor, Code2, CreditCard, TrendingUp } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const ACCENT = "#3B82F6"
const ACCENT_LIGHT = "#60A5FA"

function DesignVisual() {
  return (
    <div className="w-full rounded-xl bg-[#0a0a0f] border border-white/[0.06] overflow-hidden" style={{ height: "160px" }}>
      <div className="h-7 bg-white/[0.04] border-b border-white/[0.04] flex items-center gap-2 px-3">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57]/60" />
          <div className="w-2 h-2 rounded-full bg-[#ffbd2e]/60" />
          <div className="w-2 h-2 rounded-full bg-[#28c840]/60" />
        </div>
        <div className="flex-1 mx-2 h-4 bg-white/[0.04] rounded text-[9px] text-white/15 flex items-center px-2 font-mono">nexuzo.de</div>
      </div>
      <div className="p-4">
        <div className="h-2.5 w-2/5 rounded-full mb-2.5" style={{ backgroundColor: `${ACCENT}80` }} />
        <div className="h-1.5 w-3/5 rounded-full mb-1.5 bg-white/[0.08]" />
        <div className="h-1.5 w-2/5 rounded-full mb-4 bg-white/[0.05]" />
        <div className="flex gap-2">
          <div className="h-6 w-20 rounded-full" style={{ backgroundColor: ACCENT }} />
          <div className="h-6 w-16 rounded-full border border-white/15" />
        </div>
      </div>
    </div>
  )
}

function CodeVisual() {
  return (
    <div className="w-full rounded-xl bg-[#0a0a0f] border border-white/[0.06] p-4 font-mono text-[11px] leading-6" style={{ height: "148px" }}>
      <div>
        <span style={{ color: ACCENT_LIGHT }}>const</span>
        {" "}
        <span className="text-white/80">site</span>
        {" = "}
        <span className="text-[#4ade80]">build</span>
        <span className="text-white/40">(config)</span>
      </div>
      <div className="text-white/30 ml-4">.optimize() <span className="text-white/15">{"// 95+"}</span></div>
      <div className="text-white/30 ml-4">.deploy()</div>
      <div className="mt-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#4ade80]" />
        <span className="text-[#4ade80] text-[10px]">Build successful · 847ms</span>
      </div>
    </div>
  )
}

function PaymentVisual() {
  return (
    <div className="w-full rounded-xl bg-[#0a0a0f] border border-white/[0.06] p-4 flex flex-col gap-3" style={{ height: "148px" }}>
      <div className="rounded-xl p-3 flex items-center gap-3" style={{ backgroundColor: `${ACCENT}15` }}>
        <div className="w-8 h-5 rounded" style={{ backgroundColor: `${ACCENT}60` }} />
        <div className="flex flex-col gap-1 flex-1">
          <div className="h-2 w-1/2 rounded-full bg-white/[0.15]" />
          <div className="h-1.5 w-1/3 rounded-full bg-white/[0.07]" />
        </div>
        <div
          className="w-14 h-5 rounded-full text-[8px] font-bold flex items-center justify-center"
          style={{ backgroundColor: `${ACCENT}40`, color: ACCENT_LIGHT }}
        >
          Zahlen
        </div>
      </div>
      <div className="flex gap-2">
        {["Stripe", "PayPal", "SEPA"].map((label) => (
          <div
            key={label}
            className="flex-1 h-9 rounded-lg flex items-center justify-center text-[8px] font-bold"
            style={{ backgroundColor: "rgba(255,255,255,0.04)", color: `${ACCENT_LIGHT}90` }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}

function SeoVisual() {
  return (
    <div className="w-full rounded-xl bg-[#0a0a0f] border border-white/[0.06] p-4 flex flex-col" style={{ height: "160px" }}>
      <div className="flex items-end gap-1.5 flex-1 pb-2">
        {[32, 44, 38, 58, 50, 74, 92].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{
              height: `${h}%`,
              backgroundColor: i >= 5 ? ACCENT : `${ACCENT}22`,
            }}
          />
        ))}
      </div>
      <div className="flex items-center gap-2 border-t border-white/[0.06] pt-2.5">
        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: ACCENT }} />
        <span className="text-[9px] text-white/30">Organische Sichtbarkeit · +64% nach 3 Monaten</span>
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
              Vier Dinge.{" "}
              <span className="text-slate-400 font-light">Richtig gemacht.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* 01 — Webdesign: full-width, horizontal split */}
          <FadeIn delay={0} className="md:col-span-2">
            <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 md:p-10 hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-300 overflow-hidden">
              <span className="absolute top-6 right-8 text-[110px] font-black leading-none select-none pointer-events-none text-white/[0.03]">01</span>
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                      <Monitor size={18} className="text-[#3B82F6]" />
                    </div>
                    <span className="text-[#60A5FA] text-xs font-bold uppercase tracking-[0.15em]">Webdesign</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                    Kein Template.<br />Gebaut für Sie.
                  </h3>
                  <p className="text-slate-400 text-[15px] leading-relaxed mb-7 max-w-sm">
                    Design ist nicht Dekoration — es ist das erste Verkaufsgespräch.
                  </p>
                  <ul className="space-y-3">
                    {["Mobile-first", "Design schafft Vertrauen", "Einmalig. Kein Copy-Paste"].map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#3B82F6]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-80 flex-shrink-0">
                  <DesignVisual />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 02 — Entwicklung: number top-left, icon top-right */}
          <FadeIn delay={0.08}>
            <div className="relative bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 h-full flex flex-col">
              <div className="flex items-start justify-between mb-7">
                <span className="text-[#60A5FA]/25 text-5xl font-black leading-none">02</span>
                <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center">
                  <Code2 size={18} className="text-[#3B82F6]" />
                </div>
              </div>
              <h3 className="text-xl font-black text-white mb-2">Entwicklung</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 italic">
                Schnell, sicher, ohne Lock-in.
              </p>
              <ul className="space-y-2.5 mb-6">
                {["Lighthouse 90+ als Standard", "Kein teures CMS", "Auf jedem Gerät fehlerfrei"].map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-slate-500">
                    <span className="w-1 h-1 rounded-full flex-shrink-0 bg-[#3B82F6]" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <CodeVisual />
              </div>
            </div>
          </FadeIn>

          {/* 03 — E-Commerce: icon top-left, number top-right, accent tint */}
          <FadeIn delay={0.12}>
            <div className="relative bg-[#3B82F6]/[0.04] border border-[#3B82F6]/[0.12] rounded-2xl p-8 hover:bg-[#3B82F6]/[0.07] hover:border-[#3B82F6]/[0.22] transition-all duration-300 h-full flex flex-col">
              <div className="flex items-start justify-between mb-7">
                <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/15 flex items-center justify-center">
                  <CreditCard size={18} className="text-[#3B82F6]" />
                </div>
                <span className="text-[#60A5FA]/25 text-5xl font-black leading-none">03</span>
              </div>
              <h3 className="text-xl font-black text-white mb-2">E-Commerce</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Bezahlprozesse,{" "}
                <span className="font-semibold text-white/60">die funktionieren.</span>
              </p>
              <ul className="space-y-2.5 mb-6">
                {["Stripe & PayPal integriert", "Checkout ohne Abbrüche", "Produktseiten, die überzeugen"].map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-slate-500">
                    <span className="w-1 h-1 rounded-full flex-shrink-0 bg-[#3B82F6]" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <PaymentVisual />
              </div>
            </div>
          </FadeIn>

          {/* 04 — SEO: full-width, horizontal split reversed */}
          <FadeIn delay={0.16} className="md:col-span-2">
            <div className="relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 md:p-10 hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-300 overflow-hidden">
              <span className="absolute bottom-6 left-8 text-[110px] font-black leading-none select-none pointer-events-none text-white/[0.03]">04</span>
              <div className="flex flex-col md:flex-row-reverse gap-10 items-start">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp size={18} className="text-[#3B82F6]" />
                    </div>
                    <span className="text-[#60A5FA] text-xs font-bold uppercase tracking-[0.15em]">SEO & Performance</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                    Gefunden werden<br />von Kunden, die kaufen.
                  </h3>
                  <p className="text-slate-400 text-[15px] leading-relaxed mb-7 max-w-sm">
                    Nicht irgendwelche Besucher — die, die Ihr Angebot tatsächlich brauchen.
                  </p>
                  <ul className="space-y-3">
                    {["Technisches SEO inklusive", "Core Web Vitals optimiert", "Kaufbereite Kunden erreichen"].map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#3B82F6]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-80 flex-shrink-0">
                  <SeoVisual />
                </div>
              </div>
            </div>
          </FadeIn>

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
