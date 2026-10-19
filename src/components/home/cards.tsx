import Link from "next/link"
import Card from "@/components/stack/card"
import { ArrowRight, Check } from "@/components/stack/icons"
import { cardNav } from "@/lib/site"

/* ---------- Drei Zeichen ---------- */

const signs = [
  {
    title: "Besucher, aber keine Anfragen.",
    body: "Ohne klare Handlungsaufforderung verlassen Besucher die Seite, ohne sich zu melden.",
  },
  {
    title: "Bei Google nicht zu finden.",
    body: "Fast niemand klickt sich bis auf die zweite Seite der Suchergebnisse durch.",
  },
  {
    title: "Auf dem Handy springen sie ab.",
    body: "Die meisten kommen übers Smartphone. Lädt die Seite langsam oder ist sie dort unbequem, sind sie weg.",
  },
]

export function Zeichen() {
  const nav = cardNav("zeichen")
  return (
    <Card id="zeichen" title={nav.name} index={nav.index} total={nav.total} prev={nav.prev} next={nav.next} labelledBy="zeichen-titel">
      <h2 id="zeichen-titel" className="headline max-w-[18ch]">
        Drei Zeichen, dass Ihre Website Kunden kostet.
      </h2>
      <ol className="mt-10 grid border-2 border-ink md:grid-cols-3">
        {signs.map((s, i) => (
          <li key={s.title} className={`p-6 ${i > 0 ? "border-t-2 border-ink md:border-t-0 md:border-l-2" : ""}`}>
            <h3 className="text-[1.5rem] leading-tight">{s.title}</h3>
            <p className="mt-3">{s.body}</p>
          </li>
        ))}
      </ol>
    </Card>
  )
}

/* ---------- Die Abmachung ---------- */

const promises = [
  {
    head: "Festpreis",
    body: "Der Preis steht vor Projektstart fest. Kein Stundensatz, keine Rechnung, die höher ausfällt als besprochen.",
  },
  {
    head: "Live in vier Wochen",
    body: "Ein fester Termin, wenn Texte und Bilder vorliegen. Beim Zusammentragen helfen wir.",
  },
  {
    head: "Zahlung nach Freigabe",
    body: "Sie sehen zuerst die fertige Probewebsite. Bezahlt wird danach, per Überweisung, Kreditkarte oder PayPal.",
  },
  {
    head: "Direkt mit uns",
    body: "Sie sprechen mit den zwei Gründern, die Ihre Website bauen. Höchstens vier Projekte gleichzeitig.",
  },
]

export function Abmachung() {
  const nav = cardNav("abmachung")
  return (
    <Card id="abmachung" title={nav.name} index={nav.index} total={nav.total} prev={nav.prev} next={nav.next} labelledBy="abmachung-titel">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        <div>
          <h2 id="abmachung-titel" className="headline">
            Vier Zusagen. Sie stehen im Angebot.
          </h2>
          <p className="mt-5 measure">
            Kein Baukasten, kein Template: Jede Seite entsteht für Ihren Betrieb. Und diese vier Punkte unterschreiben wir mit.
          </p>
        </div>
        <dl className="border-2 border-ink">
          {promises.map((p, i) => (
            <div
              key={p.head}
              className={`grid gap-2 p-5 sm:grid-cols-[13rem_1fr] sm:gap-6 ${i > 0 ? "border-t-2 border-ink" : ""}`}
            >
              <dt className="flex items-start gap-3 text-[1.35rem] font-extrabold leading-tight text-ink">
                <Check size={18} className="mt-1 flex-none" />
                {p.head}
              </dt>
              <dd>{p.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Card>
  )
}

/* ---------- Leistungen ---------- */

const services = [
  {
    id: "webdesign",
    title: "Individuelles Design",
    points: ["Zuerst fürs Handy gestaltet", "Ein Auftritt, der Vertrauen schafft", "Einmalig, kein Copy-Paste"],
  },
  {
    id: "entwicklung",
    title: "Technik, die einfach läuft",
    points: ["Schnelle Ladezeiten", "Keine versteckten Zusatzkosten", "Auf jedem Gerät getestet"],
  },
  {
    id: "shop",
    title: "Online-Shop",
    points: ["Stripe und PayPal eingebunden", "Ein Bezahlvorgang ohne Umwege", "Produktseiten, die überzeugen"],
  },
  {
    id: "seo",
    title: "SEO und Geschwindigkeit",
    points: ["Technisches SEO inklusive", "Core Web Vitals optimiert", "Gefunden von Kunden in Ihrer Nähe"],
  },
]

export function Leistungen() {
  const nav = cardNav("leistungen")
  return (
    <Card id="leistungen" title={nav.name} index={nav.index} total={nav.total} prev={nav.prev} next={nav.next} labelledBy="leistungen-titel">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 id="leistungen-titel" className="headline max-w-[16ch]">
          Was in jeder Website steckt.
        </h2>
        <Link href="/leistungen" className="link inline-flex items-center gap-2">
          Alle Leistungen im Detail
          <ArrowRight size={14} />
        </Link>
      </div>
      <div className="mt-10 grid gap-x-12 sm:grid-cols-2">
        {services.map((s, i) => (
          <div key={s.id} className={`py-6 ${i > 0 ? "border-t-2 border-ink" : ""} ${i === 1 ? "sm:border-t-0" : ""}`}>
            <h3 className="text-[1.6rem] leading-tight">{s.title}</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 flex-none place-items-center border-2 border-ink text-ink">
                    <Check size={12} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  )
}

/* ---------- Preise ---------- */

const packages = [
  { name: "Starter", price: "199", forWhom: "Für den Einstieg: eine klare Seite, die zeigt, was Sie anbieten." },
  { name: "Pro", price: "399", forWhom: "Für alle, die online wachsen wollen: mehr Seiten, besser bei Google." },
  { name: "Premium", price: "699", forWhom: "Für größere Vorhaben, mit eigenen Funktionen nach Ihren Wünschen." },
]

export function Preise() {
  const nav = cardNav("preise")
  return (
    <Card id="preise" title={nav.name} index={nav.index} total={nav.total} prev={nav.prev} next={nav.next} labelledBy="preise-titel">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 id="preise-titel" className="headline max-w-[16ch]">
          Festpreis. Vorher, nicht nachher.
        </h2>
        <p className="max-w-md">
          Sie kennen den Preis, bevor irgendetwas beginnt, und bezahlen erst, wenn Ihnen das Ergebnis gefällt.
        </p>
      </div>
      <div className="mt-10 grid border-2 border-ink md:grid-cols-3">
        {packages.map((p, i) => (
          <Link
            key={p.name}
            href={`/preise#${p.name.toLowerCase()}`}
            className={`group flex flex-col p-6 no-underline hover:bg-ink hover:text-paper ${i > 0 ? "border-t-2 border-ink md:border-t-0 md:border-l-2" : ""}`}
          >
            <span className="pixel text-[15px] text-ink group-hover:text-paper">{p.name}</span>
            <span className="tnum mt-4 text-[clamp(2.6rem,2rem+2vw,3.6rem)] font-extrabold leading-none tracking-[-0.04em] text-ink group-hover:text-paper">
              <span className="text-lg font-bold tracking-normal">ab </span>
              {p.price} €
            </span>
            <span className="mt-4 flex-1 text-deep group-hover:text-paper">{p.forWhom}</span>
            <span className="mt-6 inline-flex items-center gap-2 font-extrabold text-ink group-hover:text-paper">
              Details
              <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </div>
      <p className="mt-4 text-base">Alle Preise netto zzgl. 19 % MwSt. Pflege und Hosting optional ab 19 € im Monat.</p>
    </Card>
  )
}
