"use client"

import { useMemo, useState } from "react"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import { references, shot } from "@/lib/references"
import TiltCard from "@/components/ui/tilt-card"
import FadeIn from "@/components/ui/fade-in"

const ALL = "Alle"

export default function ReferencesGallery() {
  const [active, setActive] = useState(ALL)

  const tags = useMemo(() => {
    const set = new Set<string>()
    references.forEach((r) => set.add(r.tag))
    return [ALL, ...Array.from(set).sort()]
  }, [])

  const list = useMemo(
    () => (active === ALL ? references : references.filter((r) => r.tag === active)),
    [active],
  )

  return (
    <div>
      {/* Filter */}
      <FadeIn>
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`text-sm px-4 py-2 rounded-full border transition-all ${
                active === t
                  ? "bg-[#0066FF] text-white border-transparent shadow-[0_6px_20px_rgba(0,102,255,0.25)]"
                  : "bg-white text-[#0a0a0f]/55 border-[#0a0a0f]/10 hover:border-[#0066FF]/40 hover:text-[#0a0a0f]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Bento-ish grid of live screenshots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {list.map((r, i) => {
          const wide = active === ALL && i === 0
          return (
            <FadeIn key={r.url} delay={(i % 4) * 0.06} className={wide ? "md:col-span-2" : ""}>
              <TiltCard className="group h-full rounded-2xl overflow-hidden border border-[#0a0a0f]/10 bg-white shadow-sm hover:shadow-xl hover:shadow-[#0a0a0f]/10 hover:border-[#0066FF]/30 transition-shadow">
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="block">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0a0a0f]/[0.04] border-b border-[#0a0a0f]/5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0a0a0f]/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0a0a0f]/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0a0a0f]/15" />
                    <div className="flex-1 mx-3 h-5 rounded-md bg-white border border-[#0a0a0f]/5 text-[10px] text-[#0a0a0f]/40 font-mono flex items-center px-2 truncate">
                      {r.display}
                    </div>
                  </div>

                  {/* Live screenshot */}
                  <div className={`relative overflow-hidden bg-[#0a0a0f]/[0.03] ${wide ? "h-[340px]" : "h-[260px]"}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={shot(r.url, wide ? 1400 : 1000, wide ? 820 : 760)}
                      alt={`Website ${r.label}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0f]/0 group-hover:bg-[#0a0a0f]/40 transition-colors duration-300">
                      <span className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 inline-flex items-center gap-2 bg-white text-[#0a0a0f] text-sm font-bold px-5 py-2.5 rounded-full shadow-lg">
                        Website besuchen <ExternalLink size={15} />
                      </span>
                    </div>
                    {/* Tag badge */}
                    <span className="absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/90 text-[#0066FF] backdrop-blur-sm">
                      {r.tag}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-[#0a0a0f] font-bold text-lg leading-snug flex items-center gap-1.5">
                        {r.label}
                        <ArrowUpRight size={16} className="text-[#0066FF] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </h3>
                      {r.note && <p className="text-[#0a0a0f]/55 text-sm mt-1 leading-relaxed">{r.note}</p>}
                    </div>
                  </div>
                </a>
              </TiltCard>
            </FadeIn>
          )
        })}
      </div>

      <p className="text-center text-[#0a0a0f]/40 text-sm mt-12">
        {list.length} {list.length === 1 ? "Referenz" : "Referenzen"}
        {active !== ALL && (
          <>
            {" · "}
            <button onClick={() => setActive(ALL)} className="text-[#0066FF] hover:underline">
              Filter zurücksetzen
            </button>
          </>
        )}
      </p>
    </div>
  )
}
