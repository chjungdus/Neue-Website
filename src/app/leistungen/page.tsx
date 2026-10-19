import type { Metadata } from "next"
import Link from "next/link"
import Card from "@/components/stack/card"
import DisclosureList from "@/components/stack/disclosure-list"
import { ArrowRight, Check, Minus, WhatsApp } from "@/components/stack/icons"
import { waLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Webdesign, Entwicklung und Relaunch aus Düsseldorf. Individuell gebaut, Festpreis vor Projektstart, alle Zugänge bei Launch.",
}

const services = [
  {
    id: "webdesign",
    title: "Webdesign und Entwicklung",
    tagline: "Für Unternehmen, die mit ihrer Website Kunden gewinnen wollen.",
    problem:
      "Die meisten Websites werden nach Geschmack gebaut, nicht danach, wie sie funktionieren. Das Ergebnis sieht gut aus und tut nichts.",
    solution:
      "Wir starten mit einer einfachen Frage: Was soll der Besucher tun? Dann bauen wir rückwärts. Welches Design, welche Texte, welche Seitenstruktur bringt ihn dahin? Jede Entscheidung hat einen Grund.",
    includes: [
      "Konzept: Welche Seiten braucht die Website, was steht wo?",
      "Design-Entwurf zum Abnicken, bevor wir anfangen zu bauen",
      "Umsetzung ohne Baukastensystem oder Templates",
      "Schnelle Ladezeiten auf jedem Gerät",
      "Seitenstruktur, die Google versteht",
      "Starter-Projekte oft schon nach einer Woche fertig, spätestens nach vier",
    ],
    notIncludes: ["Texte und Fotos", "Laufende Wartung (optional buchbar)"],
    price: "ab 199 €",
    deliverable: "Fertige Website mit allen Zugängen bei Launch",
  },
  {
    id: "relaunch",
    title: "Website-Relaunch",
    tagline: "Für bestehende Websites, die unter ihrer eigenen Last zusammenbrechen.",
    problem:
      "Alte Websites mit dutzenden Plugins, langen Ladezeiten und einem Design, das auf dem Handy kaum nutzbar ist. Das kostet jeden Tag Kunden, nur unsichtbar.",
    solution:
      "Vollständiger Neuaufbau. Wir nehmen Ihre bestehenden Inhalte, verbessern Struktur und Texte, wo nötig, und liefern eine Website, die nicht in zwei Jahren wieder veraltet aussieht.",
    includes: [
      "Analyse der bestehenden Website",
      "Vollständiger Neuaufbau auf modernem Fundament",
      "Alle alten Links bleiben erreichbar, kein Verlust bei Google",
      "Deutlich schnellere Ladezeiten",
      "Übernahme aller bestehenden Inhalte",
      "Launch-Begleitung",
    ],
    notIncludes: ["Texte neu schreiben (auf Anfrage möglich)", "SEO-Kampagnen"],
    price: "ab 550 €",
    deliverable: "Neue Website ohne Rankingverlust",
  },
]

const process = [
  { step: "Erstgespräch", duration: "30 Min.", desc: "Wir hören zu. Sie erklären das Problem, wir stellen Fragen. Am Ende wissen beide, ob das passt oder nicht." },
  { step: "Konzept und Angebot", duration: "1–2 Tage", desc: "Wir skizzieren die Lösung: welche Seiten, wie aufgebaut, was es kostet. Das Angebot ist ein Festpreis ohne Überraschungen." },
  { step: "Design-Entwurf", duration: "2–3 Tage", desc: "Sie sehen, wie die Website aussehen wird, bevor wir bauen. Sie geben Feedback, wir überarbeiten. Erst wenn das Design sitzt, geht es weiter." },
  { step: "Entwicklung", duration: "3–5 Tage", desc: "Sie sehen jederzeit den aktuellen Stand über einen Testlink. Keine Überraschungen beim Launch." },
  { step: "Launch und Übergabe", duration: "1 Tag", desc: "Go-Live, alle Zugänge, kurze Einweisung. Die Website gehört Ihnen, kein Lock-in." },
]

const industries = [
  "Handwerk und Bau",
  "Gastronomie und Hotellerie",
  "Rechtsanwälte und Steuerberater",
  "Online-Dienstleister",
  "Medizin und Therapie",
  "Coaching und Beratung",
]

const guarantee = [
  "Festpreis ohne Stundensatz",
  "Deadline steht im Vertrag",
  "Testlink während der Entwicklung",
  "Alle Zugänge bei Launch",
  "30 Tage Support nach Launch",
]

const faqs = [
  {
    q: "Machen Sie auch SEO?",
    a: "Technische Grundlagen sind in jedem Projekt dabei: saubere Seitenstruktur, schnelle Ladezeiten, Sitemap. Laufende SEO-Kampagnen (Werbeanzeigen, Textstrategie, Linkaufbau) übernehmen wir nicht. Das ist ein eigenes Fachgebiet.",
  },
  {
    q: "Was ist mit Pflege und Updates nach dem Launch?",
    a: "Optional. Wir bieten Pflegepakete ab 19 € im Monat für regelmäßige Updates, Inhaltsänderungen und Backups an. Pflicht ist das nicht. Den Code haben Sie, und jeder Entwickler kann damit arbeiten.",
  },
  {
    q: "Ich habe schon ein Design von woanders. Können Sie das umsetzen?",
    a: "Ja, wenn das Design vollständig ist. Wir schauen uns an, was vorliegt, und geben Ihnen ehrliches Feedback, ob das so umsetzbar ist oder ob wir Anpassungen empfehlen würden.",
  },
  {
    q: "Kann ich die Website später selbst bearbeiten?",
    a: "Nein. Wir bauen keine selbst bearbeitbaren Systeme. Änderungen erledigen wir für Sie über unsere Pflegepakete ab 19 € im Monat. Das ist für die meisten Kunden günstiger und unkomplizierter als ein eigenes Verwaltungssystem.",
  },
]

export default function LeistungenPage() {
  return (
    <>
      <Card title="Leistungen" reveal={false} labelledBy="leistungen-titel" className="!mt-6 md:!mt-10">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <h1 id="leistungen-titel" className="display max-w-[13ch]">
              Was kostet eine schlechte Website wirklich?
            </h1>
            <p className="lede mt-6">
              Verpasste Kunden, die Sie nie zählen werden. Menschen, die auf Ihre Seite kommen, nicht finden, was sie suchen, und zur
              Konkurrenz gehen. Kein Drama, keine Fehlermeldung. Nur stille Verluste, jeden Tag.
            </p>
          </div>
          <div>
            <p className="mb-3 font-extrabold">Für wen wir bauen</p>
            <ul className="flex flex-wrap gap-2">
              {industries.map((i) => (
                <li key={i} className="border-2 border-ink px-3 py-1.5 text-base font-bold">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      {services.map((s) => (
        <Card key={s.id} id={s.id} title={s.title} labelledBy={`${s.id}-titel`}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 id={`${s.id}-titel`} className="headline">
                {s.title}
              </h2>
              <p className="lede mt-3">{s.tagline}</p>
            </div>
            <div className="field-box px-5 py-3 sm:text-right">
              <p className="tnum text-[2.2rem] font-extrabold leading-none tracking-[-0.03em] text-ink">{s.price}</p>
              <p className="mt-1 text-base">{s.deliverable}</p>
            </div>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-[1.35rem]">Das Problem</h3>
                <p className="mt-2 measure">{s.problem}</p>
              </div>
              <div>
                <h3 className="text-[1.35rem]">Unser Ansatz</h3>
                <p className="mt-2 measure">{s.solution}</p>
              </div>
            </div>
            <div className="border-2 border-ink">
              <div className="p-5">
                <h3 className="text-[1.35rem]">Enthalten</h3>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {s.includes.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center border-2 border-ink text-ink">
                        <Check size={12} />
                      </span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="dither-12 border-t-2 border-ink p-5">
                <h3 className="w-fit bg-paper px-1 text-[1.35rem]">Nicht enthalten</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {s.notIncludes.map((x) => (
                    <li key={x} className="flex w-fit items-center gap-3 bg-paper pr-2">
                      <span className="grid h-6 w-6 flex-none place-items-center border-2 border-ink text-ink">
                        <Minus size={12} />
                      </span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Card>
      ))}

      <Card id="ablauf" title="Ablauf" labelledBy="ablauf-titel">
        <h2 id="ablauf-titel" className="headline">
          Kein Überraschungsmoment.
        </h2>
        <p className="lede mt-4">Jeder Schritt hat eine klare Erwartung und ein klares Ergebnis.</p>
        <ol className="mt-10 border-2 border-ink">
          {process.map((p, i) => (
            <li key={p.step} className={`grid gap-2 p-5 md:grid-cols-[16rem_8rem_1fr] md:gap-6 ${i > 0 ? "border-t-2 border-ink" : ""}`}>
              <span className="text-[1.3rem] font-extrabold leading-tight text-ink">{p.step}</span>
              <span className="pixel text-[13px] text-ink md:pt-1.5">{p.duration}</span>
              <p>{p.desc}</p>
            </li>
          ))}
        </ol>
      </Card>

      <Card id="garantie" title="Garantie" labelledBy="garantie-titel">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 id="garantie-titel" className="headline">
              Nicht zufrieden? Wir überarbeiten kostenlos.
            </h2>
            <p className="mt-5 measure">
              Nach dem ersten Design-Entwurf haben Sie das Recht auf beliebig viele Überarbeitungen, ohne Diskussion und ohne
              Aufpreis, bis das Design dem entspricht, was im Briefing vereinbart war. Das steht so im Vertrag.
            </p>
            <p className="mt-4 text-base">Was nicht gilt: Neue Funktionen nach Projektstart kosten extra. Das ist nur fair.</p>
          </div>
          <ul className="field-box">
            {guarantee.map((g, i) => (
              <li key={g} className={`flex items-center gap-3 p-4 font-bold ${i > 0 ? "border-t-2 border-ink" : ""}`}>
                <Check size={16} className="flex-none text-ink" />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </Card>

      <Card id="fragen" title="Fragen" labelledBy="fragen-titel">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
          <h2 id="fragen-titel" className="headline">
            Häufige Fragen zu unseren Leistungen
          </h2>
          <DisclosureList items={faqs} firstOpen />
        </div>
      </Card>

      <Card title="Anfragen" labelledBy="cta-titel">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 id="cta-titel" className="headline">
              Welche Leistung passt zu Ihnen?
            </h2>
            <p className="lede mt-4">
              Kostenlos anfragen, innerhalb von 24 Stunden antworten wir mit einem konkreten Angebot. Kein Stundensatz, kein
              Überraschungsangebot.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <a href={waLink("Hallo Nexuzo, welche Leistung passt zu meinem Betrieb?")} target="_blank" rel="noopener noreferrer" className="btn btn-default">
              <WhatsApp size={20} />
              Per WhatsApp fragen
            </a>
            <Link href="/anfrage" className="btn">
              Projekt anfragen
              <ArrowRight size={14} />
            </Link>
            <Link href="/preise" className="link">
              Preise ansehen
            </Link>
          </div>
        </div>
      </Card>
    </>
  )
}
