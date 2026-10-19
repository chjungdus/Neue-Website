import Link from "next/link"
import { Check } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"
import SectionHead from "@/components/home/section-head"
import SwipeRail from "@/components/ui/swipe-rail"
import TiltCard from "@/components/ui/tilt-card"
import CountUp from "@/components/ui/count-up"

const packages = [
  {
    id: "starter",
    name: "Starter",
    forWhom: "Für Selbstständige und kleine Betriebe",
    price: 199,
    features: ["1–3 Seiten, individuelles Design", "Für Smartphone optimiert", "Kontaktformular", "Grundstruktur für Google", "2 Korrekturrunden"],
  },
  {
    id: "pro",
    name: "Pro",
    forWhom: "Für Betriebe, die online wachsen wollen",
    price: 399,
    badge: "Empfohlen",
    features: ["4–8 Seiten mit Animationen", "Umfassendes SEO-Paket", "Besucherstatistik eingebunden", "3 Monate Support", "Unbegrenzte Korrekturrunden"],
  },
  {
    id: "premium",
    name: "Premium",
    forWhom: "Für größere Vorhaben",
    price: 699,
    features: ["Unbegrenzte Seiten", "Eigene Funktionen nach Absprache", "Buchungssystem oder Kundenbereich", "6 Monate Support", "Unbegrenzte Korrekturrunden"],
  },
]

export default function PriceValue() {
  return (
    <section id="preise" className="scroll-mt-16 bg-[#F6F5F1] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHead
          title="Sie wissen vorher, was Ihre Website kostet."
          lead="Alle Preise netto zzgl. 19 % MwSt. Kein Stundenzettel, keine versteckten Kosten, kein Abo-Zwang."
        />

        <div className="mt-12">
          <SwipeRail
            label="Pakete"
            trackClassName="-mx-6 gap-4 px-6 pt-4 scroll-px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0"
          >
            {packages.map((pkg, i) => {
              const dark = Boolean(pkg.badge)
              return (
                <li key={pkg.id} className="w-[86%] flex-none snap-center sm:w-[58%] lg:w-auto">
                  <FadeIn delay={i * 0.1} className="h-full">
                    <TiltCard max={4} scale={1.015} className="h-full">
                      <div
                        className={`relative flex h-full flex-col rounded-2xl p-8 ${
                          dark
                            ? "bg-[#0a0a0f] text-white ring-2 ring-[#0066FF]"
                            : "border border-[#0a0a0f]/10 bg-white text-[#0a0a0f]"
                        }`}
                      >
                        {pkg.badge && (
                          <span className="absolute -top-3 left-8 rounded-full bg-[#0066FF] px-3 py-1 text-[12px] font-bold text-white">
                            {pkg.badge}
                          </span>
                        )}
                        <h3 className="text-[22px] font-extrabold">{pkg.name}</h3>
                        <p className={`mt-1 text-[15px] ${dark ? "text-white/60" : "text-[#0a0a0f]/55"}`}>{pkg.forWhom}</p>
                        <p className="mt-6 flex items-baseline gap-1.5">
                          <span className={`text-[16px] font-semibold ${dark ? "text-white/60" : "text-[#0a0a0f]/50"}`}>ab</span>
                          <span className="text-[52px] font-extrabold leading-none tracking-[-0.04em]">
                            <CountUp value={pkg.price} duration={1100} />
                          </span>
                          <span className="text-[24px] font-extrabold">€</span>
                        </p>
                        <p className={`mt-1 text-[14px] ${dark ? "text-white/50" : "text-[#0a0a0f]/45"}`}>netto, einmalig</p>
                        <ul className="mt-7 flex flex-1 flex-col gap-3">
                          {pkg.features.map((f) => (
                            <li key={f} className="flex items-start gap-3 text-[15px] font-medium">
                              <Check size={16} strokeWidth={3} className="mt-0.5 flex-none text-[#0066FF]" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={`/preise#${pkg.id}`}
                          className={`mt-8 rounded-xl px-5 py-3.5 text-center text-[15px] font-bold transition ${
                            dark
                              ? "bg-[#0066FF] text-white hover:bg-[#0057d9]"
                              : "border border-[#0a0a0f]/20 text-[#0a0a0f] hover:border-[#0a0a0f]/50"
                          }`}
                        >
                          {pkg.name} ansehen
                        </Link>
                      </div>
                    </TiltCard>
                  </FadeIn>
                </li>
              )
            })}
          </SwipeRail>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <FadeIn className="h-full">
            <div className="h-full rounded-2xl border border-[#0a0a0f]/10 bg-white p-6">
              <p className="text-[16px] font-extrabold text-[#0a0a0f]">So läuft die Bezahlung</p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-[#0a0a0f]/65">
                Keine Anzahlung. Sie sehen zuerst die fertige Probewebsite, bezahlt wird nach Ihrer Freigabe: per
                Überweisung, Kreditkarte oder PayPal.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08} className="h-full">
            <div className="h-full rounded-2xl border border-[#0a0a0f]/10 bg-white p-6">
              <p className="text-[16px] font-extrabold text-[#0a0a0f]">Optional: Pflege & Hosting ab 19 € im Monat</p>
              <p className="mt-1.5 text-[15px] leading-relaxed text-[#0a0a0f]/65">
                Hosting, SSL, monatliche Updates und Sicherheitschecks. Monatlich kündbar, kein Muss.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
