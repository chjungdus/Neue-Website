import Link from "next/link"
import { ArrowRight, Monitor, Code2, CreditCard, TrendingUp } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const ACCENT = "#0066FF"
const ACCENT_LIGHT = "#0066FF"

function DesignVisual() {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/[0.08]" style={{ height: "160px" }}>
      {/* Mac browser chrome */}
      <div className="h-8 bg-white/[0.05] flex items-center gap-1.5 px-3 border-b border-white/[0.05]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>
        <div className="flex-1 mx-2 h-4 bg-white/[0.06] rounded text-[9px] text-white/20 flex items-center px-2 font-mono">
          milonga-foodtruck.de
        </div>
      </div>
      {/* Mini site — Milonga-style content */}
      <div className="bg-[#0a0a0f] h-[128px] relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.12) 0%, transparent 55%)" }} />
        {/* Fake navbar */}
        <div className="relative flex items-center justify-between px-4 py-2 border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#0066FF]/50" />
            <div className="h-1.5 w-10 rounded-full bg-white/20" />
          </div>
          <div className="flex gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-1 w-6 rounded-full bg-white/10" />
            ))}
          </div>
        </div>
        {/* Fake hero content */}
        <div className="relative px-4 pt-3">
          <div className="text-[8px] font-black text-white/50 mb-1.5 tracking-[0.2em] uppercase">MILONGA ARG</div>
          <div className="h-2.5 w-3/5 rounded-full mb-2" style={{ background: "linear-gradient(90deg, #0066FF, #0066FF)" }} />
          <div className="h-1.5 w-2/5 rounded-full mb-4 bg-white/10" />
          <div className="h-6 w-20 rounded-full flex items-center justify-center text-[7px] font-bold text-white" style={{ backgroundColor: "#0066FFcc" }}>
            Menü ansehen
          </div>
        </div>
      </div>
    </div>
  )
}

function CodeVisual() {
  return (
    <div className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] p-4 font-mono text-[11px] leading-6" style={{ height: "148px" }}>
      <div>
        <span style={{ color: ACCENT }}>const</span>
        {" "}
        <span className="text-white/80">site</span>
        {" = "}
        <span className="text-[#0066FF]">build</span>
        <span className="text-white/40">(config)</span>
      </div>
      <div className="text-white/30 ml-4">
        .optimize(){" "}
        <span className="text-white/15">{"// Lighthouse 95+"}</span>
      </div>
      <div className="text-white/30 ml-4">.deploy()</div>
      <div className="mt-4 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
        <span className="text-[#0066FF] text-[10px]">Build successful · 847ms</span>
      </div>
    </div>
  )
}

function PaymentVisual() {
  return (
    <div className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] p-3.5 flex flex-col gap-3" style={{ height: "148px" }}>
      {/* Product card */}
      <div className="flex gap-3 flex-1">
        <div
          className="w-16 rounded-lg flex-shrink-0 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, rgba(0, 102, 255,0.2), rgba(0, 102, 255,0.05))" }}
        >
          <span className="text-[9px] font-black" style={{ color: `${ACCENT}60` }}>IMG</span>
        </div>
        <div className="flex-1 flex flex-col justify-between py-0.5">
          <div>
            <div className="h-1.5 w-4/5 rounded-full bg-white/20 mb-1.5" />
            <div className="h-1 w-3/5 rounded-full bg-white/10" />
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="text-[12px] font-black text-white/80">€ 29,99</div>
            <div
              className="h-5 px-2 rounded text-[7px] font-bold flex items-center flex-shrink-0"
              style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}
            >
              In den Warenkorb
            </div>
          </div>
        </div>
      </div>
      {/* Payment badges */}
      <div className="flex gap-1.5 pt-2 border-t border-white/[0.05]">
        {["Stripe", "PayPal", "SEPA"].map((label) => (
          <div
            key={label}
            className="flex-1 h-5 rounded flex items-center justify-center text-[7px] font-bold"
            style={{ backgroundColor: "rgba(255,255,255,0.04)", color: `${ACCENT_LIGHT}70` }}
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
    <div className="w-full rounded-xl bg-white/[0.03] border border-white/[0.08] p-4 flex flex-col" style={{ height: "160px" }}>
      <div className="flex items-end gap-1.5 flex-1 pb-2">
        {[32, 44, 38, 58, 50, 74, 92].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{ height: `${h}%`, backgroundColor: i >= 5 ? ACCENT : `${ACCENT}22` }}
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
    <section className="py-28 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
              Vier Dinge.{" "}
              <span className="text-white/55 font-light">Richtig gemacht.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* 01 — Webdesign: full-width banner, text left · visual right */}
          <FadeIn delay={0} className="md:col-span-2">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 md:p-10 hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                      <Monitor size={18} className="text-[#0066FF]" />
                    </div>
                    <span className="text-[#0066FF] text-xs font-bold uppercase tracking-[0.15em]">Webdesign</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                    Kein Template.<br />Gebaut für Sie.
                  </h3>
                  <p className="text-white/55 text-[15px] leading-relaxed mb-7 max-w-sm">
                    Design ist nicht Dekoration — es ist das erste Verkaufsgespräch.
                  </p>
                  <ul className="space-y-3">
                    {["Mobile-first", "Design schafft Vertrauen", "Einmalig. Kein Copy-Paste"].map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-white/55">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#0066FF]" />
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
            <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 h-full flex flex-col">
              <div className="flex items-start justify-between mb-7">
                <span className="text-[#0066FF]/25 text-5xl font-black leading-none">02</span>
                <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center">
                  <Code2 size={18} className="text-[#0066FF]" />
                </div>
              </div>
              <h3 className="text-xl font-black text-white mb-2">Entwicklung</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5 italic">
                Schnell, sicher, ohne Lock-in.
              </p>
              <ul className="space-y-2.5 mb-6">
                {["Lighthouse 90+ als Standard", "Kein teures CMS", "Auf jedem Gerät fehlerfrei"].map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-white/45">
                    <span className="w-1 h-1 rounded-full flex-shrink-0 bg-[#0066FF]" />
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
            <div className="bg-[#0066FF]/[0.04] border border-[#0066FF]/[0.12] rounded-2xl p-8 hover:bg-[#0066FF]/[0.07] hover:border-[#0066FF]/[0.22] transition-all duration-300 h-full flex flex-col">
              <div className="flex items-start justify-between mb-7">
                <div className="w-10 h-10 rounded-xl bg-[#0066FF]/15 flex items-center justify-center">
                  <CreditCard size={18} className="text-[#0066FF]" />
                </div>
                <span className="text-[#0066FF]/25 text-5xl font-black leading-none">03</span>
              </div>
              <h3 className="text-xl font-black text-white mb-2">E-Commerce</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">
                Bezahlprozesse,{" "}
                <span className="font-semibold text-white/60">die funktionieren.</span>
              </p>
              <ul className="space-y-2.5 mb-6">
                {["Stripe & PayPal integriert", "Checkout ohne Abbrüche", "Produktseiten, die überzeugen"].map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-white/45">
                    <span className="w-1 h-1 rounded-full flex-shrink-0 bg-[#0066FF]" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <PaymentVisual />
              </div>
            </div>
          </FadeIn>

          {/* 04 — SEO: full-width banner reversed, visual left · text right */}
          <FadeIn delay={0.16} className="md:col-span-2">
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 md:p-10 hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-300">
              <div className="flex flex-col md:flex-row-reverse gap-10 items-start">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp size={18} className="text-[#0066FF]" />
                    </div>
                    <span className="text-[#0066FF] text-xs font-bold uppercase tracking-[0.15em]">SEO & Performance</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                    Gefunden werden<br />von Kunden, die kaufen.
                  </h3>
                  <p className="text-white/55 text-[15px] leading-relaxed mb-7 max-w-sm">
                    Nicht irgendwelche Besucher — die, die Ihr Angebot tatsächlich brauchen.
                  </p>
                  <ul className="space-y-3">
                    {["Technisches SEO inklusive", "Core Web Vitals optimiert", "Kaufbereite Kunden erreichen"].map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-white/55">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#0066FF]" />
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
              className="text-white/55 text-sm font-semibold hover:text-white transition-colors flex items-center gap-2 group"
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
