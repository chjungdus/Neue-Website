import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import FadeIn from "@/components/ui/fade-in"
import SwipeRail from "@/components/ui/swipe-rail"
import SectionHead from "@/components/home/section-head"
import { references } from "@/lib/references"

// Live client sites first, then the concept drafts. One rail the visitor swipes or drags through.
const ordered = [...references.filter((r) => !r.demo), ...references.filter((r) => r.demo)]

export default function HorizontalReferences() {
  return (
    <section id="referenzen" className="scroll-mt-16 overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHead
            title="Echte Websites, die wir gebaut haben."
            lead="Jede davon handgebaut, kein Template. Wischen Sie durch und klicken Sie rein."
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

        <FadeIn className="mt-12">
          <SwipeRail
            label="Referenzen"
            hint="Ziehen oder wischen"
            trackClassName="-mx-6 gap-5 px-6 scroll-px-6 md:gap-6 lg:-mr-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]"
          >
            {ordered.map((r, i) => (
              <li key={r.url} className="w-[84%] flex-none snap-start sm:w-[58%] lg:w-[44%]">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  draggable={false}
                  className="group block"
                  aria-label={`${r.label} öffnen (neuer Tab)`}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-[#0a0a0f]/10 bg-white shadow-[0_24px_50px_-28px_rgba(10,10,15,0.4)] transition duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_34px_60px_-28px_rgba(0,102,255,0.45)]">
                    <div className="flex items-center gap-1.5 border-b border-black/5 bg-[#f2f2f0] px-3 py-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                      <span className="ml-2 truncate rounded bg-white px-2 py-0.5 text-[11px] font-medium text-black/45">
                        {r.display}
                      </span>
                    </div>
                    <div className="relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/referenzen/${r.image}-640.webp`}
                        srcSet={`/referenzen/${r.image}-640.webp 640w, /referenzen/${r.image}.webp 1280w`}
                        sizes="(min-width: 1024px) 500px, (min-width: 640px) 58vw, 84vw"
                        alt={`Startseite von ${r.label}`}
                        width={640}
                        height={400}
                        loading="lazy"
                        draggable={false}
                        className="block aspect-[16/10] w-full select-none object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                      />
                      <span className="absolute inset-0 grid place-items-center bg-[#0a0a0f]/0 transition-colors duration-300 group-hover:bg-[#0a0a0f]/35">
                        <span className="inline-flex translate-y-2 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-bold text-[#0a0a0f] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          Website ansehen <ArrowUpRight size={15} />
                        </span>
                      </span>
                    </div>
                    <span
                      className={`absolute right-3 top-2 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                        r.demo ? "bg-white/90 text-[#0a0a0f]/70" : "bg-[#0066FF] text-white"
                      }`}
                    >
                      {r.demo ? "Entwurf" : "Live"}
                    </span>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[13px] font-bold text-[#0a0a0f]/40">{String(i + 1).padStart(2, "0")}</p>
                      <p className="mt-1 text-[19px] font-extrabold text-[#0a0a0f]">{r.label}</p>
                      <p className="text-[14px] text-[#0a0a0f]/55">{r.tag}</p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="mt-6 flex-none text-[#0a0a0f]/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0066FF]"
                    />
                  </div>
                  {r.note && <p className="mt-2 text-[15px] leading-relaxed text-[#0a0a0f]/65">{r.note}</p>}
                </a>
              </li>
            ))}
          </SwipeRail>
        </FadeIn>
      </div>
    </section>
  )
}
