"use client"

import Link from "next/link"
import { ArrowRight, Check, X } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"

const services = [
  {
    number: "01",
    title: "Webdesign & Entwicklung",
    tagline: "Für Unternehmen, die mit ihrer Website Kunden gewinnen wollen.",
    problem:
      "Die meisten Websites werden nach Geschmack gebaut — nicht nach Conversion-Rate. Das Ergebnis sieht gut aus und tut nichts.",
    solution:
      "Wir starten mit der Frage: Was soll der Besucher tun? Dann bauen wir rückwärts: Welches Design, welche Texte, welche Seitenstruktur bringt ihn dahin? Jedes Designentscheidung hat einen Grund.",
    includes: [
      "UX-Konzept & Informationsarchitektur",
      "Figma-Design (Desktop + Mobile)",
      "Next.js Entwicklung (App Router)",
      "Performance-Optimierung (Core Web Vitals)",
      "SEO-Grundstruktur (Semantic HTML, Sitemap)",
      "4 Wochen Lieferzeit",
    ],
    notIncludes: ["Copywriting", "Fotografie/Videografie", "Laufende Wartung (optional buchbar)"],
    price: "ab 3.500 €",
    deliverable: "Produktionsreife Website mit vollständigem Code-Übergabe",
  },
  {
    number: "02",
    title: "E-Commerce",
    tagline: "Für Shops, die mehr verkaufen wollen als sie gerade tun.",
    problem:
      "Durchschnittliche E-Commerce-Conversion-Rate: 2–3 %. Bei den meisten unserer neuen Kunden lagen wir darunter. Das bedeutet: 97 von 100 Besuchern kaufen nichts. Das ist kein Traffic-Problem — das ist ein Website-Problem.",
    solution:
      "Wir analysieren, wo Nutzer abspringen (Heatmaps, Session-Recordings, Checkout-Funnel) und bauen dann gezielt dagegen: schnellere Ladezeiten, klarerer Checkout, strategisch platzierte Vertrauenssignale.",
    includes: [
      "Shop-Konzept & Produktstruktur",
      "Custom Design (kein Standard-Theme)",
      "Next.js + Shopify oder WooCommerce",
      "Checkout-Optimierung",
      "Mobile-First (>60 % aller Käufe sind mobil)",
      "Produkt-Seiten-Templates",
    ],
    notIncludes: [
      "Produktfotos",
      "Produktbeschreibungen",
      "Lagerbestand / ERP-Integration (auf Anfrage)",
    ],
    price: "ab 6.500 €",
    deliverable: "Fertig konfigurierter Shop mit Schulung für das Team",
  },
  {
    number: "03",
    title: "Web-Applikationen",
    tagline: "Für Prozesse, die noch auf Excel laufen.",
    problem:
      "Jedes Unternehmen ab einer gewissen Größe hat mindestens eine Excel-Datei, die eigentlich eine Software sein sollte. Angebotsmanagement, Kundenverwaltung, interne Workflows — die Lösung ist meist ein custom Tool, kein teures ERP.",
    solution:
      "Wir bauen Web-Apps, die genau das tun, was Sie brauchen — nicht mehr, nicht weniger. Stack: Next.js + Supabase (PostgreSQL). Auth, Echtzeit-Updates, File-Storage inklusive. Keine überdimensionierten Frameworks, kein Vendor-Lock-in.",
    includes: [
      "Anforderungsanalyse & technisches Konzept",
      "Datenbankdesign (PostgreSQL / Supabase)",
      "Auth-System (Login, Rollen, Permissions)",
      "Admin-Interface & Nutzer-Dashboard",
      "API-Entwicklung",
      "Testing & Dokumentation",
    ],
    notIncludes: ["Mobile Native Apps (iOS/Android)", "ML/AI-Features (auf Anfrage)"],
    price: "ab 9.500 €",
    deliverable: "Vollständig dokumentierte Applikation + Source Code",
  },
  {
    number: "04",
    title: "Website-Relaunch",
    tagline: "Für bestehende Websites, die unter ihrer eigenen Last zusammenbrechen.",
    problem:
      "Alte WordPress-Installationen mit 47 Plugins, Ladezeiten von 8 Sekunden, ein Design aus 2015, das auf dem Handy aussieht als wäre es für Ameisen gebaut — das kostet jeden Tag Kunden, nur unsichtbar.",
    solution:
      "Vollständiger Neuaufbau auf modernem Stack. Wir nehmen Ihre bestehenden Inhalte, verbessern Struktur und Texte wo nötig, und liefern eine Website, die in 30 Jahren nicht wie heute wirkt — weil gutes Design zeitlos ist, nicht trendy.",
    includes: [
      "Content-Audit & Migrationsplan",
      "Neuaufbau auf Next.js",
      "301-Weiterleitung (kein SEO-Verlust)",
      "Performance-Boost (PageSpeed Insights 90+)",
      "CMS-Integration (Contentful oder Sanity)",
      "Launch-Support & Monitoring",
    ],
    notIncludes: ["SEO-Kampagnen", "Content-Erstellung (optional buchbar)"],
    price: "ab 4.500 €",
    deliverable: "Migrierte Website ohne SEO-Rankingverlust",
  },
]

const process = [
  {
    step: "Erstgespräch",
    duration: "30 Min.",
    desc: "Wir hören zu. Sie erklären das Problem, wir stellen Fragen. Am Ende wissen beide, ob das passt — oder nicht.",
  },
  {
    step: "Konzept & Angebot",
    duration: "3–5 Tage",
    desc: "Wir skizzieren die Lösung: Seitenstruktur, technischer Ansatz, Zeitplan. Das Angebot ist ein Festpreis — keine Stundensatze, keine Überraschungen.",
  },
  {
    step: "Design-Phase",
    duration: "Woche 1–2",
    desc: "Figma-Prototyp mit allen wichtigen Seiten. Sie geben Feedback, wir überarbeiten. Erst wenn das Design sitzt, fangen wir an zu coden.",
  },
  {
    step: "Entwicklung",
    duration: "Woche 2–4",
    desc: "Live-Staging-Link von Tag 1. Sie sehen jederzeit den aktuellen Stand. Keine Überraschungen beim Launch.",
  },
  {
    step: "Launch & Übergabe",
    duration: "Woche 4",
    desc: "Go-Live, alle Zugänge, Schulung. Die Website gehört Ihnen — Code, Domain, alles. Kein Lock-in.",
  },
]

const trustedBy = [
  "Handwerk & Bau",
  "Gastronomie & Hotellerie",
  "Rechtsanwälte & Steuerberater",
  "E-Commerce & Retail",
  "Medizin & Therapie",
  "Coaching & Beratung",
]

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-6">
              Leistungen
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-[#111827] leading-[1.05] mb-8 max-w-3xl">
              Was kostet eine
              <br />
              <span className="text-[#ef4444]">schlechte Website</span>
              <br />
              wirklich?
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[#6b7280] text-xl max-w-2xl leading-relaxed">
              Verpasste Kunden, die Sie nie zählen werden. Menschen, die auf Ihre Seite kommen,
              nicht finden was sie suchen, und zur Konkurrenz gehen. Kein Drama, keine Fehlermeldung
              — nur stille Verluste, jeden Tag.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-3">
              {trustedBy.map((industry) => (
                <span
                  key={industry}
                  className="text-xs bg-[#f3f4f6] text-[#374151] px-3 py-1.5 rounded-full"
                >
                  {industry}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-0 divide-y divide-gray-100">
            {services.map((service, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="py-16 grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8">
                  <div className="shrink-0">
                    <span
                      className="text-7xl font-black leading-none select-none"
                      style={{ color: "#2563eb18" }}
                    >
                      {service.number}
                    </span>
                  </div>
                  <div>
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-black text-[#111827] mb-2">
                        {service.title}
                      </h2>
                      <p className="text-[#6b7280] text-base">{service.tagline}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-widest mb-3">Das Problem</p>
                        <p className="text-[#6b7280] text-sm leading-relaxed">{service.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-widest mb-3">Unser Ansatz</p>
                        <p className="text-[#6b7280] text-sm leading-relaxed">{service.solution}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-widest mb-3">Enthalten</p>
                        <ul className="space-y-2">
                          {service.includes.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-[#374151]">
                              <Check size={14} className="text-[#2563eb] mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-widest mb-3">Nicht enthalten</p>
                        <ul className="space-y-2">
                          {service.notIncludes.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-[#9ca3af]">
                              <X size={14} className="mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-100">
                      <div>
                        <span className="text-2xl font-black text-[#111827]">{service.price}</span>
                        <p className="text-xs text-[#9ca3af] mt-1">{service.deliverable}</p>
                      </div>
                      <Link
                        href="/anfrage"
                        className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-6 py-3 rounded-full transition-colors text-sm"
                      >
                        Anfrage stellen
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process dark */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-slate-600 text-xs font-semibold uppercase tracking-widest mb-6">So läuft es ab</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">Kein Überraschungsmoment.</h2>
            <p className="text-slate-400 text-lg mb-16 max-w-lg leading-relaxed">Jeder Schritt hat eine klare Erwartung. Jeder Schritt hat ein klares Ergebnis.</p>
          </FadeIn>
          <div>
            {process.map((step, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 py-8 border-b border-slate-800 last:border-b-0">
                  <div>
                    <div className="text-white font-bold mb-1">{step.step}</div>
                    <div className="text-slate-500 text-sm">{step.duration}</div>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-[#f9fafb] border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-center">
              <div>
                <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-widest mb-4">Unsere Garantie</p>
                <h2 className="text-3xl md:text-4xl font-black text-[#111827] mb-5 leading-tight">
                  Nicht zufrieden?<br />Wir überarbeiten kostenlos.
                </h2>
                <p className="text-[#6b7280] leading-relaxed text-base max-w-xl">
                  Nach dem ersten Design-Entwurf haben Sie das Recht auf beliebig viele
                  Überarbeitungen — ohne Diskussion, ohne Aufpreis — bis das Design dem entspricht,
                  was im Briefing vereinbart war. Das steht so im Vertrag.
                </p>
                <p className="text-[#9ca3af] text-sm mt-4">
                  Was nicht gilt: Scope-Änderungen während der Entwicklung. Neue Features nach
                  Projektstart kosten extra. Das ist nur fair.
                </p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-8">
                <div className="space-y-4">
                  {["Festpreis — kein Stundensatz", "Deadline steht im Vertrag", "Wöchentliche Updates mit Live-Link", "Alle Zugänge bei Launch", "30 Tage Support nach Launch"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#2563eb]/10 flex items-center justify-center flex-shrink-0">
                        <Check size={11} className="text-[#2563eb]" />
                      </div>
                      <span className="text-[#374151] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl font-black text-[#111827] mb-12 leading-tight">Häufige Fragen zu unseren Leistungen</h2>
          </FadeIn>
          <div className="space-y-8">
            {[
              { q: "Machen Sie auch SEO?", a: "Technisches SEO ist in jedem Projekt enthalten: saubere Seitenstruktur, schnelle Ladezeiten, Sitemap, Schema-Markup. Laufende SEO-Kampagnen (Linkbuilding, Keyword-Targeting, Content-Strategie) sind nicht Teil unserer Leistungen — das ist ein eigenes Fachgebiet." },
              { q: "Was ist mit Pflege und Updates nach dem Launch?", a: "Optional. Wir bieten Wartungspakete ab 150 €/Monat für regelmäßige Updates, Backups und kleine Änderungen. Pflicht ist das nicht. Den Code haben Sie, und jeder fähige Entwickler kann damit arbeiten." },
              { q: "Ich habe schon ein Design von woanders — können Sie das umsetzen?", a: "Ja, wenn das Figma-File vollständig ist. Wir schauen uns an, was vorliegt, und geben Ihnen ehrliches Feedback, ob das so umsetzbar ist — oder ob wir Anpassungen für Conversion und Performance empfehlen würden." },
              { q: "Kann ich die Website später selbst bearbeiten?", a: "Mit CMS ja. Ohne CMS benötigen Sie für Textänderungen technisches Grundwissen (Markdown oder direktes File-Editing). Wir empfehlen für alle Kunden, die regelmäßig Inhalte ändern wollen, ein CMS einzubauen — das kostet 500–1.000 € extra je nach Umfang." },
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="border-b border-gray-100 pb-8">
                  <h3 className="font-bold text-[#111827] mb-3">{faq.q}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#f9fafb]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-4xl font-black text-[#111827] mb-5 leading-tight">Welche Leistung passt zu Ihnen?</h2>
            <p className="text-[#6b7280] text-lg mb-10 leading-relaxed">
              Im Erstgespräch finden wir das heraus — kostenlos und ohne Verpflichtung.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/anfrage" className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-8 py-4 rounded-full transition-colors flex items-center gap-2 text-[15px]">
                Jetzt Projekt anfragen <ArrowRight size={17} />
              </Link>
              <Link href="/preise" className="flex items-center gap-2 text-[#374151] font-semibold px-8 py-4 rounded-full border border-gray-200 hover:border-gray-400 transition-colors text-[15px]">
                Preise ansehen
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
