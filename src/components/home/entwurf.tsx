"use client"

import { useEffect, useId, useState } from "react"
import Link from "next/link"
import Card from "@/components/stack/card"
import { WhatsApp, ArrowRight } from "@/components/stack/icons"
import { cardNav, HOURS, isOpenNow, waLink } from "@/lib/site"

const branches = [
  { id: "imbiss", label: "Imbiss & Gastro", nav: ["Speisekarte", "Zeiten", "Anfahrt"], line: "Speisekarte, Öffnungszeiten und Anfahrt auf einen Blick.", cta: "Jetzt bestellen", photo: "Foto: Ihr bestes Gericht" },
  { id: "cafe", label: "Café & Bäckerei", nav: ["Karte", "Frühstück", "Kontakt"], line: "Frühstück, Kuchen und der Weg zu Ihnen.", cta: "Tisch reservieren", photo: "Foto: Ihre Theke" },
  { id: "friseur", label: "Friseur & Beauty", nav: ["Leistungen", "Preise", "Team"], line: "Leistungen, Preise und freie Termine.", cta: "Termin buchen", photo: "Foto: Ihr Salon" },
  { id: "handwerk", label: "Handwerk & Bau", nav: ["Leistungen", "Projekte", "Kontakt"], line: "Was Sie machen, wo Sie arbeiten, wie man Sie erreicht.", cta: "Angebot anfragen", photo: "Foto: Ihre Baustelle" },
  { id: "reinigung", label: "Reinigung & Service", nav: ["Leistungen", "Gebiet", "Preise"], line: "Leistungen, Einsatzgebiet und ein schneller Draht.", cta: "Angebot anfragen", photo: "Foto: Ihr Team" },
  { id: "praxis", label: "Praxis & Kanzlei", nav: ["Schwerpunkte", "Team", "Termine"], line: "Schwerpunkte, Team und der Weg zum Termin.", cta: "Termin vereinbaren", photo: "Foto: Ihre Räume" },
  { id: "events", label: "Events & DJ", nav: ["Pakete", "Hörproben", "Anfrage"], line: "Pakete, Hörproben und freie Termine.", cta: "Datum anfragen", photo: "Foto: Ihr letzter Abend" },
  { id: "anderes", label: "Etwas anderes", nav: ["Angebot", "Über uns", "Kontakt"], line: "Was Sie anbieten und wie man Sie erreicht.", cta: "Kontakt aufnehmen", photo: "Foto: Ihr Betrieb" },
] as const

function Status() {
  const [open, setOpen] = useState<boolean | null>(null)
  useEffect(() => {
    const tick = () => setOpen(isOpenNow())
    tick()
    const t = setInterval(tick, 60_000)
    return () => clearInterval(t)
  }, [])
  const text =
    open === null
      ? `Antwort innerhalb von 24 Stunden · ${HOURS}`
      : open
        ? `Gerade erreichbar · ${HOURS}`
        : `Gerade geschlossen · Antwort innerhalb von 24 Stunden`
  return (
    <p className="mt-3 flex items-center gap-2 text-base" aria-live="polite">
      <span
        aria-hidden="true"
        className={`inline-block h-3 w-3 border-2 border-ink ${open ? "bg-ink" : "dither-50"}`}
      />
      {text}
    </p>
  )
}

function Preview({ name, branch }: { name: string; branch: (typeof branches)[number] }) {
  const shown = name.trim() || "Ihr Betrieb"
  const size = shown.length > 26 ? "text-[1.35rem]" : shown.length > 16 ? "text-[1.7rem]" : "text-[2.1rem]"
  return (
    <figure className="field-box" aria-label={`Skizze der Startseite für ${shown}`}>
      <div className="win-bar !h-7">
        <span className="win-close !h-3 !w-3" aria-hidden="true" />
        <span className="win-title pixel !text-[11px] !leading-[18px]">Entwurf</span>
        <span className="w-3 flex-none" aria-hidden="true" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3 border-b-2 border-ink pb-2">
          <span className="truncate font-extrabold text-ink">{shown}</span>
          <span className="pixel hidden gap-3 text-[11px] text-ink sm:flex">
            {branch.nav.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </span>
        </div>
        <div className="mt-4 grid grid-cols-[1.2fr_1fr] gap-4">
          <div className="min-w-0">
            <p className={`${size} break-words font-extrabold leading-[1.02] tracking-[-0.03em] text-ink`}>{shown}</p>
            <p className="mt-2 text-[0.95rem] leading-snug">{branch.line}</p>
            <span className="mt-3 inline-flex whitespace-nowrap rounded-[9px] bg-ink px-2.5 py-1.5 text-[0.85rem] font-extrabold text-paper">
              {branch.cta}
            </span>
          </div>
          <div className="dither-25 grid min-h-[120px] place-items-center border-2 border-ink">
            <span className="pixel bg-paper px-1.5 text-center text-[11px] text-ink">{branch.photo}</span>
          </div>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-3" aria-hidden="true">
          {branch.nav.map((n) => (
            <div key={n} className="flex items-center gap-3 border-2 border-ink p-2 sm:block">
              <span className="pixel block flex-none text-[11px] text-ink">{n}</span>
              <span className="flex flex-1 flex-col gap-1 sm:mt-1.5">
                <span className="block h-1 w-4/5 bg-ink" />
                <span className="block h-1 w-3/5 bg-ink" />
              </span>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="border-t-2 border-ink px-4 py-2 text-sm">
        Skizze. Das echte Design entsteht mit Ihnen.
      </figcaption>
    </figure>
  )
}

export default function Entwurf() {
  const nav = cardNav("entwurf")
  const [branchId, setBranchId] = useState<(typeof branches)[number]["id"]>("imbiss")
  const [touched, setTouched] = useState(false)
  const [name, setName] = useState("")
  const branch = branches.find((b) => b.id === branchId) ?? branches[0]
  const fieldId = useId()

  const trimmed = name.trim()
  const message = trimmed
    ? `Hallo Nexuzo, ich habe auf eurer Seite einen Entwurf gebaut: „${trimmed}“ (${branch.label}). Können wir darüber sprechen?`
    : touched
      ? `Hallo Nexuzo, ich interessiere mich für eine Website (${branch.label}).`
      : "Hallo Nexuzo, ich interessiere mich für eine Website."
  const href = waLink(message)
  const label = trimmed ? "Diesen Entwurf per WhatsApp besprechen" : "Per WhatsApp schreiben"

  return (
    <Card
      id="entwurf"
      title="Nexuzo"
      index={nav.index}
      total={nav.total}
      next={nav.next}
      reveal={false}
      labelledBy="entwurf-titel"
      className="!mt-6 md:!mt-10"
    >
      <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="flex flex-col justify-center">
          <h1 id="entwurf-titel" className="display max-w-[14ch]">
            Wir bauen Ihre Website. Sie entscheiden danach, ob Sie zahlen.
          </h1>
          <p className="lede mt-6">
            Festpreis vor Projektstart. Live in vier Wochen. Bezahlt wird erst, wenn Ihnen das Ergebnis gefällt.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-default text-[1.0625rem]">
              <WhatsApp size={20} />
              {label}
            </a>
            <Link href="/anfrage" className="link inline-flex items-center gap-2">
              Lieber das Anfrageformular
              <ArrowRight size={14} />
            </Link>
          </div>
          <Status />
        </div>

        <div className="dither-12 self-center border-2 border-ink p-4 sm:p-6">
          <p className="mb-4 bg-paper px-2 py-1 text-base font-extrabold text-deep">
            Probieren Sie es: So könnte Ihre Startseite anfangen.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={`${fieldId}-branche`} className="label bg-paper px-1 w-fit">
                Ihre Branche
              </label>
              <select
                id={`${fieldId}-branche`}
                className="select"
                value={branchId}
                onChange={(e) => {
                  setBranchId(e.target.value as typeof branchId)
                  setTouched(true)
                }}
              >
                {branches.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={`${fieldId}-name`} className="label bg-paper px-1 w-fit">
                Name Ihres Betriebs
              </label>
              <input
                id={`${fieldId}-name`}
                className="input"
                type="text"
                inputMode="text"
                autoComplete="organization"
                maxLength={40}
                placeholder="z. B. Imbiss am Markt"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-5">
            <Preview name={name} branch={branch} />
          </div>
          <div className="mt-4 lg:hidden">
            <a href={href} target="_blank" rel="noopener noreferrer" className="btn w-full bg-paper px-3 text-base">
              <WhatsApp size={18} className="flex-none" />
              {trimmed ? "Entwurf per WhatsApp senden" : "Per WhatsApp schreiben"}
            </a>
          </div>
        </div>
      </div>
    </Card>
  )
}
