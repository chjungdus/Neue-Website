"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ExternalLink, MousePointer2 } from "lucide-react"
import { references, shot } from "@/lib/references"

// Pinned section: as the user scrolls vertically, the reference cards slide
// horizontally across the screen. A scroll-as-storytelling showcase.
export default function HorizontalReferences() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)

  useEffect(() => {
    const calc = () => {
      if (trackRef.current) {
        setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth))
      }
    }
    calc()
    window.addEventListener("resize", calc)
    return () => window.removeEventListener("resize", calc)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0f]"
      style={{ height: `calc(100vh + ${distance}px)` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Heading */}
        <div className="max-w-6xl mx-auto w-full px-6 mb-8 md:mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-[0.2em] mb-3">Referenzen</p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.02]">
              Live gebaut.<span className="text-white/40"> Zum Anklicken.</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden sm:inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors font-semibold text-sm shrink-0 group"
          >
            Alle ansehen
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Horizontal track */}
        <motion.div ref={trackRef} style={{ x }} className="flex gap-6 px-6 md:px-[8vw] w-max">
          {references.map((r, i) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-[80vw] sm:w-[56vw] lg:w-[40vw] shrink-0 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-[#0066FF]/50 transition-colors"
            >
              {/* index */}
              <span className="absolute top-4 right-5 z-10 text-white/15 text-4xl font-black">
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white/[0.04] border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="flex-1 mx-3 h-5 rounded bg-white/[0.06] text-[10px] text-white/30 font-mono flex items-center px-2 truncate">
                  {r.display}
                </div>
              </div>
              {/* Screenshot */}
              <div className="relative h-[42vh] max-h-[440px] overflow-hidden bg-[#0a0a0f]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot(r.url, 1400, 900)}
                  alt={`Website ${r.label}`}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] select-none"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0f]/0 group-hover:bg-[#0a0a0f]/40 transition-colors">
                  <span className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all inline-flex items-center gap-2 bg-white text-[#0a0a0f] text-sm font-bold px-5 py-2.5 rounded-full">
                    Website besuchen <ExternalLink size={15} />
                  </span>
                </div>
              </div>
              {/* Footer */}
              <div className="p-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[#0066FF] text-[11px] font-semibold mb-0.5">{r.tag}</div>
                  <h3 className="text-white font-bold text-lg">{r.label}</h3>
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <div className="max-w-6xl mx-auto w-full px-6 mt-8 flex items-center gap-2 text-white/30 text-xs">
          <MousePointer2 size={13} />
          Scrollen, um durch die Projekte zu blättern
        </div>
      </div>
    </section>
  )
}
