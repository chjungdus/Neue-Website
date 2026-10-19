import type { Metadata } from "next"
import Link from "next/link"
import Card from "@/components/stack/card"
import { ArrowRight, WhatsApp } from "@/components/stack/icons"
import { waLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Nexuzo sind zwei Gründer aus Düsseldorf, die jede Website selbst bauen. Höchstens vier Projekte gleichzeitig, Zahlung erst nach Freigabe.",
}

const values = [
  {
    title: "Ehrlichkeit über Höflichkeit",
    body: "Wenn Ihr Projekt nicht passt, sagen wir das. Ein unangenehmes Gespräch heute ist besser als ein teures Ergebnis in drei Monaten.",
  },
  { title: "Ergebnisse über Ästhetik", body: "Eine schöne Website, die keine Kunden bringt, ist ein teures Kunstwerk." },
  {
    title: "Prozess über Improvisation",
    body: "Briefing, Konzept, Design, Entwicklung, Launch. Status-Updates mit Testlink. Keine bösen Überraschungen.",
  },
  { title: "Weniger Kunden, bessere Arbeit", body: "Höchstens vier Projekte gleichzeitig. Jedes bekommt volle Aufmerksamkeit." },
]

const forEveryone = [
  { type: "Handwerk und Gewerbe", desc: "Elektriker, Schreiner, Sanitär. Mehr lokale Kunden über Google." },
  { type: "Gastronomie und Hotellerie", desc: "Restaurants, Cafés, Hotels. Ihre Website als erste Visitenkarte." },
  { type: "Freiberufler und Berater", desc: "Coaches, Anwälte, Therapeuten. Vertrauen schaffen, bevor jemand anruft." },
  { type: "Online-Shops", desc: "Ein Bezahlvorgang ohne Abbrüche." },
]

const team = [
  {
    name: "Mateo Sainz de la Maza",
    initials: "MS",
    role: "Mitgründer, Entwicklung",
    body: "Entwickelt Websites mit einem klaren Ziel: dass Besucher zu Kunden werden. Gegründet, weil zu viel versprechen und zu wenig liefern das Standardmodell war.",
    focus: ["Webentwicklung", "Performance", "Conversion"],
  },
  {
    name: "Zhuo Jun Li",
    initials: "ZL",
    role: "Mitgründer, Design",
    body: "Gestaltet keine schönen Seiten, sondern Seiten, die verkaufen. Fokus auf Nutzerführung und messbare Ergebnisse.",
    focus: ["Design", "Benutzerfreundlichkeit", "Analyse"],
  },
]

export default function UeberUnsPage() {
  return (
    <>
      <Card title="Über uns" reveal={false} labelledBy="ueber-titel" className="!mt-6 md:!mt-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <h1 id="ueber-titel" className="display max-w-[13ch]">
              Eine kaputte Website, vier Nachbesserungen, ein Beschluss.
            </h1>
          </div>
          <div className="flex flex-col justify-end gap-5">
            <p>
              Zu viele Agenturen versprechen viel und liefern wenig. Vier Nachbesserungsrunden, zwei verpasste Deadlines, ein Kunde,
              der bereits bezahlt hatte und trotzdem nichts in der Hand hielt.
            </p>
            <p className="text-[1.25rem] font-extrabold leading-snug text-ink">
              Das Gegenteil wurde das Modell: klare Absprachen, jedes Projekt wirklich fertig, zum vereinbarten Preis, und Zahlung
              erst, wenn der Kunde die Probewebsite gesehen hat.
            </p>
          </div>
        </div>
      </Card>

      <Card id="team" title="Das Team" labelledBy="team-titel">
        <h2 id="team-titel" className="headline">
          Wir machen alles selbst.
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {team.map((m) => (
            <li key={m.name} className="field-box grid grid-cols-[88px_1fr] gap-5 p-5 sm:grid-cols-[120px_1fr]">
              <span
                aria-hidden="true"
                className="dither-25 grid aspect-square place-items-center border-2 border-ink"
              >
                <span className="pixel bg-paper px-1.5 text-[26px] leading-none text-ink sm:text-[34px]">{m.initials}</span>
              </span>
              <div>
                <h3 className="text-[1.4rem] leading-tight">{m.name}</h3>
                <p className="pixel mt-1 text-[12px] text-ink">{m.role}</p>
                <p className="mt-3">{m.body}</p>
                <p className="mt-3 text-base font-bold">{m.focus.join(" · ")}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 measure border-t-2 border-ink pt-6">
          <strong className="text-ink">Was das für Sie bedeutet:</strong> Wenn Sie mit uns sprechen, sprechen Sie mit der Person,
          die Ihr Projekt auch umsetzt. Keine Weitergabe, kein Wechsel des Ansprechpartners. Jede Deadline bisher eingehalten.
        </p>
      </Card>

      <Card id="werte" title="Wie wir arbeiten" labelledBy="werte-titel">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
          <h2 id="werte-titel" className="headline">
            Was uns antreibt.
          </h2>
          <dl className="border-2 border-ink">
            {values.map((v, i) => (
              <div key={v.title} className={`grid gap-2 p-5 sm:grid-cols-[15rem_1fr] sm:gap-6 ${i > 0 ? "border-t-2 border-ink" : ""}`}>
                <dt className="text-[1.25rem] font-extrabold leading-tight text-ink">{v.title}</dt>
                <dd>{v.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Card>

      <Card id="fuer-wen" title="Für wen" labelledBy="wen-titel">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="wen-titel" className="headline max-w-[18ch]">
            Für jeden, der online mehr erreichen will.
          </h2>
          <p className="max-w-sm">Egal welche Branche, welche Größe, welches Budget.</p>
        </div>
        <ul className="mt-10 grid border-2 border-ink sm:grid-cols-2">
          {forEveryone.map((f, i) => (
            <li
              key={f.type}
              className={`p-5 ${i > 0 ? "border-t-2 border-ink" : ""} ${i === 1 ? "sm:border-t-0 sm:border-l-2" : ""} ${i === 3 ? "sm:border-l-2" : ""}`}
            >
              <h3 className="text-[1.3rem] leading-tight">{f.type}</h3>
              <p className="mt-2">{f.desc}</p>
            </li>
          ))}
        </ul>
      </Card>

      <Card title="Anfragen" labelledBy="cta-titel">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 id="cta-titel" className="headline">
              Bereit für Ihre neue Website?
            </h2>
            <p className="lede mt-4">
              Schreiben Sie uns kurz, was Sie brauchen. Wir antworten innerhalb von 24 Stunden mit einem konkreten Angebot.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <a href={waLink("Hallo Mateo, hallo Zhuo, ich hätte gern eine neue Website.")} target="_blank" rel="noopener noreferrer" className="btn btn-default">
              <WhatsApp size={20} />
              Per WhatsApp schreiben
            </a>
            <Link href="/anfrage" className="btn">
              Jetzt anfragen
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </Card>
    </>
  )
}
