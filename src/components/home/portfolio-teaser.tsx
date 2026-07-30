import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { references, shot } from "@/lib/references"
import FadeIn from "@/components/ui/fade-in"
import TiltCard from "@/components/ui/tilt-card"

export default function PortfolioTeaser() {
  const preview = references.slice(0, 4)

  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0a0f] leading-tight">
              Ausgewählte
              <br />
              Referenzen.
            </h2>
            <Link
              href="/portfolio"
              className="hidden sm:flex items-center gap-2 text-[#0a0a0f]/50 hover:text-[#0066FF] transition-colors font-semibold text-sm group shrink-0"
            >
              Alle Referenzen ansehen
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {preview.map((r, i) => (
            <FadeIn key={r.url} delay={i * 0.08}>
              <TiltCard className="group h-full rounded-2xl overflow-hidden border border-[#0a0a0f]/10 bg-white hover:border-[#0066FF]/30 hover:shadow-xl hover:shadow-[#0a0a0f]/10 transition-shadow">
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="block">
                  {/* Browser chrome */}
                  <div className="h-8 bg-[#0a0a0f]/[0.04] flex items-center gap-1.5 px-3 border-b border-[#0a0a0f]/5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0a0a0f]/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0a0a0f]/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0a0a0f]/15" />
                    <div className="flex-1 mx-3 h-4 bg-white rounded-sm text-[9px] text-[#0a0a0f]/30 flex items-center px-2 font-mono truncate border border-[#0a0a0f]/5">
                      {r.display}
                    </div>
                  </div>

                  {/* Live screenshot */}
                  <div className="relative h-52 overflow-hidden bg-[#0a0a0f]/[0.03]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={shot(r.url, 1000, 620)}
                      alt={`Website ${r.label}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/35 transition-colors">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-2 bg-white text-[#0a0a0f] text-xs font-bold px-4 py-2 rounded-full">
                        Website besuchen <ExternalLink size={13} />
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-[11px] text-[#0066FF] mb-1 font-semibold">{r.tag}</div>
                      <h3 className="text-[#0a0a0f] font-bold text-base leading-snug">{r.label}</h3>
                      {r.note && <p className="text-[#0a0a0f]/55 text-xs mt-1 leading-relaxed line-clamp-2">{r.note}</p>}
                    </div>
                  </div>
                </a>
              </TiltCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-8 sm:hidden">
            <Link href="/portfolio" className="flex items-center gap-2 text-[#0a0a0f]/60 hover:text-[#0a0a0f] transition-colors font-semibold text-sm">
              Alle Referenzen ansehen <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
