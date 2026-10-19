import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"
import SectionHead from "@/components/home/section-head"
import { references, type Reference } from "@/lib/references"

function RefCard({ r, small = false }: { r: Reference; small?: boolean }) {
  return (
    <a
      href={r.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
      aria-label={`${r.label} öffnen (neuer Tab)`}
    >
      <div className="overflow-hidden rounded-xl border border-[#0a0a0f]/10 bg-white shadow-[0_18px_40px_-24px_rgba(10,10,15,0.35)] transition-transform duration-300 group-hover:-translate-y-1">
        <div className="flex items-center gap-1.5 border-b border-black/5 bg-[#f2f2f0] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-black/15" />
          <span className="h-2 w-2 rounded-full bg-black/15" />
          <span className="h-2 w-2 rounded-full bg-black/15" />
          <span className="ml-2 truncate text-[11px] font-medium text-black/45">{r.display}</span>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/referenzen/${r.image}-640.webp`}
          srcSet={`/referenzen/${r.image}-640.webp 640w, /referenzen/${r.image}.webp 1280w`}
          sizes={small ? "(min-width: 1024px) 270px, (min-width: 640px) 45vw, 90vw" : "(min-width: 1024px) 370px, (min-width: 640px) 45vw, 90vw"}
          alt={`Startseite von ${r.label}`}
          width={640}
          height={400}
          loading="lazy"
          className="block aspect-[16/10] w-full object-cover object-top"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className={`${small ? "text-[16px]" : "text-[18px]"} font-extrabold text-[#0a0a0f]`}>{r.label}</p>
          <p className="text-[14px] text-[#0a0a0f]/55">{r.tag}</p>
        </div>
        <ArrowUpRight
          size={18}
          className="mt-1 flex-none text-[#0a0a0f]/40 transition-colors group-hover:text-[#0066FF]"
        />
      </div>
      {!small && r.note && <p className="mt-2 text-[15px] leading-relaxed text-[#0a0a0f]/65">{r.note}</p>}
    </a>
  )
}

export default function HorizontalReferences() {
  const live = references.filter((r) => !r.demo)
  const demos = references.filter((r) => r.demo)

  return (
    <section id="referenzen" className="scroll-mt-16 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHead
            title="Echte Websites, die wir gebaut haben."
            lead="Jede davon handgebaut, kein Template. Klicken Sie rein und probieren Sie sie selbst aus."
          />
          <FadeIn>
            <Link
              href="/portfolio"
              className="group inline-flex flex-none items-center gap-2 text-[15px] font-bold text-[#0a0a0f]"
            >
              <span className="border-b-2 border-[#0066FF] pb-0.5">Alle Referenzen</span>
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </FadeIn>
        </div>

        <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {live.map((r, i) => (
            <li key={r.url} className="h-full">
              <FadeIn delay={i * 0.08} className="h-full">
                <RefCard r={r} />
              </FadeIn>
            </li>
          ))}
        </ul>

        <div className="mt-16 border-t border-[#0a0a0f]/10 pt-10">
          <h3 className="text-[19px] font-extrabold text-[#0a0a0f]">Entwürfe zum Ansehen</h3>
          <p className="mt-1 text-[15px] text-[#0a0a0f]/60">
            Konzeptseiten für Betriebe aus unserem Umfeld, online ohne eigene Domain.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4">
            {demos.map((r, i) => (
              <li key={r.url} className="h-full">
                <FadeIn delay={i * 0.06} className="h-full">
                  <RefCard r={r} small />
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
