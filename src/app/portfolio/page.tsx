import type { Metadata } from "next"
import Link from "next/link"
import Card from "@/components/stack/card"
import { ArrowRight, ExternalArrow, WhatsApp } from "@/components/stack/icons"
import { references, refImage } from "@/lib/references"
import { waLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Websites, die Nexuzo gebaut hat: drei live bei echten Kunden, vier Entwürfe zum Ansehen. Alle handgebaut, kein Template.",
}

export default function PortfolioPage() {
  const live = references.filter((r) => !r.demo)
  const demos = references.filter((r) => r.demo)

  return (
    <>
      <Card title="Referenzen" reveal={false} labelledBy="referenzen-titel" className="!mt-6 md:!mt-10">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <h1 id="referenzen-titel" className="display max-w-[13ch]">
            Echte Websites. Zum Anklicken.
          </h1>
          <p className="lede">
            {live.length} Seiten sind live bei echten Kunden, {demos.length} weitere sind Entwürfe ohne eigene Domain. Alle
            handgebaut, kein Template.
          </p>
        </div>

        <h2 className="mt-14 text-[1.6rem]">Live bei Kunden</h2>
        <ul className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {live.map((r) => (
            <RefItem key={r.url} r={r} />
          ))}
        </ul>

        <h2 className="mt-14 text-[1.6rem]">Entwürfe</h2>
        <p className="mt-2 measure">Konzeptseiten für Betriebe aus unserem Umfeld, online zum Ansehen, ohne eigene Domain.</p>
        <ul className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {demos.map((r) => (
            <RefItem key={r.url} r={r} small />
          ))}
        </ul>
      </Card>

      <Card title="Anfragen" labelledBy="cta-titel">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 id="cta-titel" className="headline">
              Ihr Projekt könnte hier stehen.
            </h2>
            <p className="lede mt-4">
              Schreiben Sie uns kurz, was Sie brauchen. Antwort mit einem konkreten Angebot innerhalb von 24 Stunden.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <a
              href={waLink("Hallo Nexuzo, ich habe eure Referenzen gesehen und hätte gern ein Angebot.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-default"
            >
              <WhatsApp size={20} />
              Per WhatsApp schreiben
            </a>
            <Link href="/anfrage" className="btn">
              Projekt anfragen
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </Card>
    </>
  )
}

function RefItem({ r, small = false }: { r: (typeof references)[number]; small?: boolean }) {
  return (
    <li className="h-full">
      <a href={r.url} target="_blank" rel="noopener noreferrer" className="group field-box flex h-full flex-col no-underline">
        <span className="win-bar !h-7">
          <span className="win-close !h-3 !w-3" aria-hidden="true" />
          <span className="win-title pixel !text-[11px] !leading-[18px]">{r.demo ? "Demo-Entwurf" : r.display}</span>
          <span className="w-3 flex-none" aria-hidden="true" />
        </span>
        <span className="relative block aspect-[16/10] overflow-hidden border-b-2 border-ink">
          {/* Live client sites show in colour; demos rest in one-bit and turn to colour when you point at them */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={refImage(r, "640")}
            srcSet={`${refImage(r, "640")} 640w, ${refImage(r, "full")} 1280w`}
            sizes={small ? "(min-width: 1024px) 280px, (min-width: 768px) 45vw, 92vw" : "(min-width: 1024px) 380px, (min-width: 768px) 45vw, 92vw"}
            alt={`Startseite von ${r.label}`}
            width={640}
            height={400}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          {r.demo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={refImage(r, "1bit")}
            alt=""
            width={640}
            height={400}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-top [image-rendering:pixelated] group-hover:opacity-0 group-focus-visible:opacity-0"
          />
          )}
        </span>
        <span className="block flex-1 p-4">
          <span className="flex items-start justify-between gap-3">
            <span className="text-[1.25rem] font-extrabold leading-tight text-ink">{r.label}</span>
            <ExternalArrow size={16} className="mt-1 flex-none text-ink" />
          </span>
          <span className="pixel mt-1 block text-[11px] text-ink">{r.tag}</span>
          {r.note && <span className="mt-2 block text-base text-deep">{r.note}</span>}
        </span>
      </a>
    </li>
  )
}
