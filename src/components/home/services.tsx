import Link from "next/link"
import { ArrowRight, Monitor, Code2, CreditCard, TrendingUp } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"
import ParallaxY from "@/components/ui/parallax-y"

const ACCENT = "#0066FF"

function DesignVisual() {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-[#0a0a0f]/10 bg-white shadow-sm" style={{ height: "160px" }}>
      {/* Mac browser chrome */}
      <div className="h-8 bg-[#0a0a0f]/[0.04] flex items-center gap-1.5 px-3 border-b border-[#0a0a0f]/[0.06]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0f]/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0f]/15" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0f]/15" />
        </div>
        <div className="flex-1 mx-2 h-4 bg-white rounded text-[9px] text-[#0a0a0f]/30 flex items-center px-2 font-mono border border-[#0a0a0f]/5">
          ihre-website.de
        </div>
      </div>
      {/* Mini site mockup */}
      <div className="bg-white h-[128px] relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.08) 0%, transparent 55%)" }} />
        {/* Fake navbar */}
        <div className="relative flex items-center justify-between px-4 py-2 border-b border-[#0a0a0f]/[0.06]">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#0066FF]/60" />
            <div className="h-1.5 w-10 rounded-full bg-[#0a0a0f]/15" />
          </div>
          <div className="flex gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-1 w-6 rounded-full bg-[#0a0a0f]/10" />
            ))}
          </div>
        </div>
        {/* Fake hero content */}
        <div className="relative px-4 pt-3">
          <div className="text-[8px] font-black text-[#0a0a0f]/50 mb-1.5 tracking-[0.2em] uppercase">IHRE MARKE</div>
          <div className="h-2.5 w-3/5 rounded-full mb-2" style={{ background: "linear-gradient(90deg, #0066FF, #4f8bff)" }} />
          <div className="h-1.5 w-2/5 rounded-full mb-4 bg-[#0a0a0f]/10" />
          <div className="h-6 w-20 rounded-full flex items-center justify-center text-[7px] font-bold text-white" style={{ backgroundColor: "#0066FF" }}>
            Jetzt anfragen
          </div>
        </div>
      </div>
    </div>
  )
}

function ReliabilityVisual() {
  const checks = ["Lädt in unter 1 Sekunde", "Funktioniert auf jedem Handy", "Keine Fehler, kein Absturz"]
  return (
    <div className="w-full rounded-xl bg-white border border-[#0a0a0f]/10 p-4 shadow-sm flex flex-col justify-center gap-3" style={{ height: "148px" }}>
      {checks.map((c) => (
        <div key={c} className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${ACCENT}18` }}>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ACCENT }} />
          </div>
          <span className="text-[#0a0a0f]/70 text-[12px]">{c}</span>
        </div>
      ))}
    </div>
  )
}

function PaymentVisual() {
  return (
    <div className="w-full rounded-xl bg-white border border-[#0a0a0f]/10 p-3.5 flex flex-col gap-3 shadow-sm" style={{ height: "148px" }}>
      {/* Product card */}
      <div className="flex gap-3 flex-1">
        <div
          className="w-16 rounded-lg flex-shrink-0 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.2), rgba(0,102,255,0.05))" }}
        >
          <span className="text-[9px] font-black" style={{ color: `${ACCENT}99` }}>IMG</span>
        </div>
        <div className="flex-1 flex flex-col justify-between py-0.5">
          <div>
            <div className="h-1.5 w-4/5 rounded-full bg-[#0a0a0f]/15 mb-1.5" />
            <div className="h-1 w-3/5 rounded-full bg-[#0a0a0f]/10" />
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="text-[12px] font-black text-[#0a0a0f]/80">€ 29,99</div>
            <div
              className="h-5 px-2 rounded text-[7px] font-bold flex items-center flex-shrink-0"
              style={{ backgroundColor: `${ACCENT}18`, color: ACCENT }}
            >
              In den Warenkorb
            </div>
          </div>
        </div>
      </div>
      {/* Payment badges */}
      <div className="flex gap-1.5 pt-2 border-t border-[#0a0a0f]/[0.06]">
        {["Stripe", "PayPal", "SEPA"].map((label) => (
          <div
            key={label}
            className="flex-1 h-5 rounded flex items-center justify-center text-[7px] font-bold"
            style={{ backgroundColor: "rgba(0,102,255,0.06)", color: `${ACCENT}99` }}
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
    <div className="w-full rounded-xl bg-white border border-[#0a0a0f]/10 p-4 flex flex-col shadow-sm" style={{ height: "160px" }}>
      <div className="flex items-end gap-1.5 flex-1 pb-2">
        {[32, 44, 38, 58, 50, 74, 92].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t"
            style={{ height: `${h}%`, backgroundColor: i >= 5 ? ACCENT : `${ACCENT}22` }}
          />
        ))}
      </div>
      <div className="flex items-center gap-2 border-t border-[#0a0a0f]/[0.06] pt-2.5">
        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: ACCENT }} />
        <span className="text-[9px] text-[#0a0a0f]/40">Mehr Besucher über Google · +64% nach 3 Monaten</span>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section className="py-14 md:py-16 bg-[#0a0a0f]/[0.03]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0a0f] mb-4 leading-tight">
              Vier Dinge.{" "}
              <span className="text-[#0a0a0f]/45 font-light">Richtig gemacht.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* 01 — Webdesign: full-width banner, text left · visual right */}
          <FadeIn delay={0} className="md:col-span-2">
            <div className="relative overflow-hidden bg-white border border-[#0a0a0f]/[0.08] rounded-2xl p-8 md:p-10 hover:border-[#0066FF]/30 hover:shadow-lg hover:shadow-[#0a0a0f]/5 transition-all duration-300">
              <span className="absolute top-5 right-7 text-[#0066FF]/15 text-6xl font-black leading-none select-none pointer-events-none">01</span>
              <div className="relative flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                      <Monitor size={18} className="text-[#0066FF]" />
                    </div>
                    <span className="text-[#0066FF] text-xs font-bold uppercase tracking-[0.15em]">Webdesign</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0a0a0f] mb-3 leading-tight">
                    Kein Template.<br />Gebaut für Sie.
                  </h3>
                  <p className="text-[#0a0a0f]/60 text-[15px] leading-relaxed mb-7 max-w-sm">
                    Design ist nicht Dekoration, es ist das erste Verkaufsgespräch.
                  </p>
                  <ul className="space-y-3">
                    {["Mobile-first", "Design schafft Vertrauen", "Einmalig. Kein Copy-Paste"].map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-[#0a0a0f]/60">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#0066FF]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <ParallaxY range={14} className="w-full md:w-80 flex-shrink-0">
                  <DesignVisual />
                </ParallaxY>
              </div>
            </div>
          </FadeIn>

          {/* 02 — Entwicklung: number top-left, icon top-right */}
          <FadeIn delay={0.08}>
            <div className="bg-white border border-[#0a0a0f]/[0.08] rounded-2xl p-8 hover:border-[#0066FF]/30 hover:shadow-lg hover:shadow-[#0a0a0f]/5 transition-all duration-300 h-full flex flex-col">
              <div className="flex items-start justify-between mb-7">
                <span className="text-[#0066FF]/25 text-5xl font-black leading-none">02</span>
                <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center">
                  <Code2 size={18} className="text-[#0066FF]" />
                </div>
              </div>
              <h3 className="text-xl font-extrabold text-[#0a0a0f] mb-2">Funktioniert einfach</h3>
              <p className="text-[#0a0a0f]/60 text-sm leading-relaxed mb-5 italic">
                Schnell und zuverlässig, ohne dass Sie sich um Technik kümmern müssen.
              </p>
              <ul className="space-y-2.5 mb-6">
                {["Lädt in Sekundenbruchteilen", "Keine versteckten Zusatzkosten", "Auf jedem Gerät fehlerfrei"].map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-[#0a0a0f]/55">
                    <span className="w-1 h-1 rounded-full flex-shrink-0 bg-[#0066FF]" />
                    {p}
                  </li>
                ))}
              </ul>
              <ParallaxY range={10} className="mt-auto">
                <ReliabilityVisual />
              </ParallaxY>
            </div>
          </FadeIn>

          {/* 03 — E-Commerce: icon top-left, number top-right, accent tint */}
          <FadeIn delay={0.12}>
            <div className="bg-[#0066FF]/[0.05] border border-[#0066FF]/20 rounded-2xl p-8 hover:bg-[#0066FF]/[0.08] hover:border-[#0066FF]/30 transition-all duration-300 h-full flex flex-col">
              <div className="flex items-start justify-between mb-7">
                <div className="w-10 h-10 rounded-xl bg-[#0066FF]/15 flex items-center justify-center">
                  <CreditCard size={18} className="text-[#0066FF]" />
                </div>
                <span className="text-[#0066FF]/25 text-5xl font-black leading-none">03</span>
              </div>
              <h3 className="text-xl font-extrabold text-[#0a0a0f] mb-2">E-Commerce</h3>
              <p className="text-[#0a0a0f]/60 text-sm leading-relaxed mb-5">
                Bezahlprozesse,{" "}
                <span className="font-semibold text-[#0a0a0f]/70">die funktionieren.</span>
              </p>
              <ul className="space-y-2.5 mb-6">
                {["Stripe & PayPal integriert", "Checkout ohne Abbrüche", "Produktseiten, die überzeugen"].map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-[#0a0a0f]/55">
                    <span className="w-1 h-1 rounded-full flex-shrink-0 bg-[#0066FF]" />
                    {p}
                  </li>
                ))}
              </ul>
              <ParallaxY range={10} className="mt-auto">
                <PaymentVisual />
              </ParallaxY>
            </div>
          </FadeIn>

          {/* 04 — SEO: full-width banner reversed, visual left · text right */}
          <FadeIn delay={0.16} className="md:col-span-2">
            <div className="relative overflow-hidden bg-white border border-[#0a0a0f]/[0.08] rounded-2xl p-8 md:p-10 hover:border-[#0066FF]/30 hover:shadow-lg hover:shadow-[#0a0a0f]/5 transition-all duration-300">
              <span className="absolute top-5 left-7 text-[#0066FF]/15 text-6xl font-black leading-none select-none pointer-events-none">04</span>
              <div className="relative flex flex-col md:flex-row-reverse gap-10 items-start">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp size={18} className="text-[#0066FF]" />
                    </div>
                    <span className="text-[#0066FF] text-xs font-bold uppercase tracking-[0.15em]">SEO & Performance</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0a0a0f] mb-3 leading-tight">
                    Gefunden werden<br />von Kunden, die kaufen.
                  </h3>
                  <p className="text-[#0a0a0f]/60 text-[15px] leading-relaxed mb-7 max-w-sm">
                    Nicht irgendwelche Besucher, sondern die, die Ihr Angebot tatsächlich brauchen.
                  </p>
                  <ul className="space-y-3">
                    {["Technisches SEO inklusive", "Core Web Vitals optimiert", "Kaufbereite Kunden erreichen"].map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-[#0a0a0f]/60">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#0066FF]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <ParallaxY range={14} className="w-full md:w-80 flex-shrink-0">
                  <SeoVisual />
                </ParallaxY>
              </div>
            </div>
          </FadeIn>

        </div>

        <FadeIn>
          <div className="mt-10 pt-10 border-t border-[#0a0a0f]/10 flex items-center justify-end">
            <Link
              href="/leistungen"
              className="text-[#0a0a0f]/60 text-sm font-semibold hover:text-[#0a0a0f] transition-colors flex items-center gap-2 group"
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
