import Link from "next/link"
import Card from "@/components/stack/card"
import { ArrowLeft, ArrowRight } from "@/components/stack/icons"

const links = [
  { label: "Startseite", href: "/", desc: "Zurück zum Anfang" },
  { label: "Leistungen", href: "/leistungen", desc: "Was wir anbieten" },
  { label: "Referenzen", href: "/portfolio", desc: "Unsere bisherigen Projekte" },
  { label: "Preise", href: "/preise", desc: "Transparente Festpreise" },
  { label: "Über uns", href: "/ueber-uns", desc: "Wer wir sind" },
  { label: "Kontakt", href: "/kontakt", desc: "Kein Pitch, kein Druck" },
]

export default function NotFound() {
  return (
    <Card title="Karte nicht gefunden" reveal={false} labelledBy="nf-titel" className="!mt-6 md:!mt-10">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <p className="pixel text-[56px] leading-none text-ink sm:text-[88px]" aria-hidden="true">
            404
          </p>
          <h1 id="nf-titel" className="headline mt-6 max-w-[14ch]">
            Diese Seite haben wir abgelehnt.
          </h1>
          <p className="lede mt-5">Wir nehmen nicht jedes Projekt an. Manchmal tun wir das auch mit Seiten.</p>
          <p className="mt-3 measure">
            Entweder wurde der Link verschoben oder gelöscht, oder Sie haben sich vertippt. Das passiert. Hier sind ein paar
            Seiten, die wir bestimmt nicht abgelehnt haben.
          </p>
          <Link href="/" className="btn btn-default mt-8">
            <ArrowLeft size={14} />
            Zurück zur Startseite
          </Link>
        </div>
        <nav aria-label="Seiten" className="self-start border-2 border-ink">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`group flex items-center justify-between gap-4 p-4 no-underline hover:bg-ink hover:text-paper ${i > 0 ? "border-t-2 border-ink" : ""}`}
            >
              <span>
                <span className="block font-extrabold text-ink group-hover:text-paper">{l.label}</span>
                <span className="block text-base">{l.desc}</span>
              </span>
              <ArrowRight size={14} className="flex-none text-ink group-hover:text-paper" />
            </Link>
          ))}
        </nav>
      </div>
    </Card>
  )
}
