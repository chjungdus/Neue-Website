"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Card from "@/components/stack/card"
import { ArrowRight, ExternalArrow, Plus, Minus, WhatsApp, Mail, Clock } from "@/components/stack/icons"
import { references, refImage } from "@/lib/references"
import { cardNav, EMAIL, HOURS, PHONE_DISPLAY, isOpenNow, launchDate, waLink } from "@/lib/site"

/* ---------- Referenzen: list field + preview, each site seen before you open it ---------- */

export function Referenzen() {
  const nav = cardNav("referenzen")
  const [sel, setSel] = useState(0)
  const r = references[sel]

  return (
    <Card id="referenzen" title={nav.name} index={nav.index} total={nav.total} prev={nav.prev} next={nav.next} labelledBy="referenzen-titel">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 id="referenzen-titel" className="headline max-w-[14ch]">
          Echte Seiten. Zum Anklicken.
        </h2>
        <Link href="/portfolio" className="link inline-flex items-center gap-2">
          Alle Referenzen
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_20rem]">
        <ul className="order-2 self-start border-2 border-ink" aria-label="Referenzen">
          {references.map((ref, i) => {
            const active = i === sel
            return (
              <li key={ref.url} className={i > 0 ? "border-t-2 border-ink" : ""}>
                <button
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSel(i)}
                  onMouseEnter={() => setSel(i)}
                  onFocus={() => setSel(i)}
                  className={`flex w-full items-center gap-3 p-2.5 text-left ${active ? "bg-ink text-paper" : "hover-dither"}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={refImage(ref, "1bit")}
                    alt=""
                    width={64}
                    height={40}
                    loading="lazy"
                    className="h-10 w-16 flex-none border-2 border-ink bg-paper object-cover object-top [image-rendering:pixelated]"
                  />
                  <span className="min-w-0">
                    <span className="block truncate font-extrabold leading-tight">{ref.label}</span>
                    <span className={`pixel block text-[11px] ${active ? "text-paper" : "text-ink"}`}>
                      {ref.tag} · {ref.demo ? "Demo" : "Live"}
                    </span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        <figure className="field-box order-1">
          <div className="win-bar">
            <span className="win-close" aria-hidden="true" />
            <span className="win-title pixel">{r.demo ? "Demo-Entwurf" : r.display}</span>
            <span className="w-4 flex-none" aria-hidden="true" />
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={r.image}
            src={refImage(r, "full")}
            srcSet={`${refImage(r, "640")} 640w, ${refImage(r, "full")} 1280w`}
            sizes="(min-width: 1024px) 760px, 92vw"
            alt={`Startseite von ${r.label}`}
            width={1280}
            height={800}
            loading="lazy"
            className="block aspect-[16/10] w-full border-b-2 border-ink object-cover object-top"
          />
          <figcaption className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[1.4rem] font-extrabold leading-tight text-ink">{r.label}</p>
              <p className="mt-1">{r.note}</p>
              {r.demo && <p className="mt-1 text-base">Entwurf ohne eigene Domain, zum Ansehen online.</p>}
            </div>
            <a href={r.url} target="_blank" rel="noopener noreferrer" className="btn flex-none">
              Website öffnen
              <ExternalArrow size={16} />
            </a>
          </figcaption>
        </figure>
      </div>

      <blockquote className="mt-12 border-t-2 border-ink pt-10">
        <p className="max-w-[30ch] text-[clamp(1.6rem,1.2rem+1.6vw,2.6rem)] font-extrabold leading-[1.1] tracking-[-0.025em] text-ink">
          „Seit der neuen Website werde ich täglich 2 Mal angerufen. Wir sind bis September ausgebucht.“
        </p>
        <footer className="mt-5 text-base">
          <cite className="not-italic font-extrabold">Limpiezas El Valle</cite>, Reinigungsfirma in Burgos, Spanien
        </footer>
      </blockquote>
    </Card>
  )
}

/* ---------- Ablauf: four weeks, with the date it lands on ---------- */

const steps = [
  { week: "Woche 1", title: "Kennenlernen", body: "Wir lernen Ihren Betrieb kennen. Am Ende steht ein verbindliches Angebot.", result: "Seitenplan und Festpreis" },
  { week: "Woche 2", title: "Design", body: "Ein vollständiger Entwurf. Feedbackrunden kosten nichts extra.", result: "Design zur Freigabe" },
  { week: "Woche 3", title: "Entwicklung", body: "Aus dem Design wird die echte Seite, mit Testlink für Sie.", result: "Testlink" },
  { week: "Woche 4", title: "Launch", body: "Test auf allen Geräten, dann geht die Seite online.", result: "Live und Übergabe" },
]

export function Ablauf() {
  const nav = cardNav("ablauf")
  const [date, setDate] = useState<string | null>(null)
  useEffect(() => setDate(launchDate()), [])

  return (
    <Card id="ablauf" title={nav.name} index={nav.index} total={nav.total} prev={nav.prev} next={nav.next} labelledBy="ablauf-titel">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <h2 id="ablauf-titel" className="headline max-w-[16ch]">
          Vier Wochen bis zur fertigen Seite.
        </h2>
        <p className="field-box max-w-sm p-4 text-base">
          Wenn Sie heute schreiben, ist Ihre Seite etwa{" "}
          <strong className="text-ink">{date ? `am ${date}` : "in vier Wochen"}</strong> online, sobald Texte und Bilder vorliegen.
        </p>
      </div>
      <ol className="mt-10 grid border-2 border-ink sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li
            key={s.week}
            className={`flex flex-col p-5 ${i > 0 ? "border-t-2 border-ink" : ""} ${i === 1 ? "sm:border-t-0 sm:border-l-2" : ""} ${i === 2 ? "lg:border-t-0 lg:border-l-2" : ""} ${i === 3 ? "sm:border-l-2 lg:border-t-0" : ""}`}
          >
            <h3 className="text-[1.5rem] leading-tight">{s.title}</h3>
            <p className="mt-2 flex-1">{s.body}</p>
            <p className="mt-4 flex flex-wrap items-baseline gap-x-2 border-t-2 border-ink pt-3 text-base font-extrabold text-ink">
              <span className="pixel text-[12px] font-normal">{s.week}</span>
              {s.result}
            </p>
          </li>
        ))}
      </ol>
    </Card>
  )
}

/* ---------- Fragen ---------- */

const faqs = [
  { q: "Brauche ich wirklich eine neue Website?", a: "Nicht immer. Manchmal reichen Optimierungen. Wir sagen Ihnen das ehrlich im Erstgespräch." },
  { q: "Was kostet eine Website bei Ihnen?", a: "Ab 199 € netto. Festpreis vor Projektstart, kein Stundensatz." },
  { q: "Vier Wochen. Wirklich?", a: "Ja, wenn Texte und Bilder vorliegen. Wir helfen auch dabei." },
  {
    q: "Ich hatte schlechte Erfahrungen mit anderen Agenturen.",
    a: "Verstehen wir. Deshalb steht der Preis bei uns im Vertrag, dazu wöchentliche Updates mit Testlink und eine feste Ansprechperson.",
  },
  { q: "Was passiert nach dem Launch?", a: "Sie bekommen alle Zugänge: Domain, Hosting, Code. Pflegepakete ab 19 € im Monat sind optional." },
  {
    q: "Kann ich Inhalte selbst bearbeiten?",
    a: "Kleine Änderungen übernehmen wir im Pflegepaket, meist günstiger und schneller als ein eigenes Redaktionssystem.",
  },
]

export function Fragen() {
  const nav = cardNav("fragen")
  const [open, setOpen] = useState<number | null>(0)
  return (
    <Card id="fragen" title={nav.name} index={nav.index} total={nav.total} prev={nav.prev} next={nav.next} labelledBy="fragen-titel">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.4fr] lg:gap-14">
        <div>
          <h2 id="fragen-titel" className="headline">
            Ehrliche Antworten.
          </h2>
          <Link href="/faq" className="link mt-6 inline-flex items-center gap-2">
            Alle Fragen
            <ArrowRight size={14} />
          </Link>
        </div>
        <div className="border-2 border-ink">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className={i > 0 ? "border-t-2 border-ink" : ""}>
                <h3 className="m-0 text-[1.125rem] tracking-normal">
                  <button
                    type="button"
                    id={`frage-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`antwort-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className={`flex w-full items-center justify-between gap-6 p-5 text-left font-extrabold ${isOpen ? "bg-ink text-paper" : "text-deep hover:text-ink"}`}
                  >
                    {f.q}
                    <span className={`grid h-7 w-7 flex-none place-items-center border-2 ${isOpen ? "border-paper" : "border-ink text-ink"}`}>
                      {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                    </span>
                  </button>
                </h3>
                {/* Always in the HTML so search engines see every answer; hidden while closed */}
                <div id={`antwort-${i}`} role="region" aria-labelledby={`frage-${i}`} hidden={!isOpen} className="px-5 pb-5 pt-4">
                  <p className="measure">{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Card>
  )
}

/* ---------- Kontakt ---------- */

export function Kontakt() {
  const nav = cardNav("kontakt")
  const [open, setOpen] = useState<boolean | null>(null)
  useEffect(() => setOpen(isOpenNow()), [])

  return (
    <Card id="kontakt" title={nav.name} index={nav.index} total={nav.total} prev={nav.prev} labelledBy="kontakt-titel">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div>
          <h2 id="kontakt-titel" className="display max-w-[14ch]">
            30 Minuten. Kein Pitch, kein Druck.
          </h2>
          <p className="lede mt-6">Wir hören zu und sagen Ihnen ehrlich, ob wir helfen können.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={waLink("Hallo Nexuzo, ich hätte gern ein kostenloses Erstgespräch.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-default"
            >
              <WhatsApp size={20} />
              Erstgespräch per WhatsApp
            </a>
            <Link href="/anfrage" className="btn">
              Projekt anfragen
            </Link>
          </div>
        </div>
        <ul className="field-box flex flex-col self-start">
          <li className="flex items-center gap-4 p-5">
            <WhatsApp size={20} className="flex-none text-ink" />
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="link">
              {PHONE_DISPLAY}
            </a>
          </li>
          <li className="flex items-center gap-4 border-t-2 border-ink p-5">
            <Mail size={20} className="flex-none text-ink" />
            <a href={`mailto:${EMAIL}`} className="link break-all">
              {EMAIL}
            </a>
          </li>
          <li className="flex items-center gap-4 border-t-2 border-ink p-5">
            <Clock size={20} className="flex-none text-ink" />
            <span>
              {HOURS}
              {open !== null && (
                <span className="block text-base font-extrabold text-ink">{open ? "Gerade erreichbar" : "Gerade geschlossen, Antwort innerhalb von 24 Stunden"}</span>
              )}
            </span>
          </li>
        </ul>
      </div>
    </Card>
  )
}
