"use client"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const sites = [
  { url: "https://www.milonga-foodtruck.de/", display: "milonga-foodtruck.de", label: "Milonga Food Truck", tag: "Food Truck" },
  { url: "https://www.limpiezas-el-valle.es/", display: "limpiezas-el-valle.es", label: "Limpiezas El Valle", tag: "Reinigungsservice" },
  { url: "https://chjungdus.github.io/Antonioconstruccion/", display: "antonioconstruccion.de", label: "Antonio Construcción", tag: "Bau & Handwerk" },
  { url: "https://chjungdus.github.io/Peluqueria-loli/", display: "peluqueria-loli.es", label: "Peluquería Loli", tag: "Friseursalon" },
  { url: "https://chjungdus.github.io/Essah-Urfa-Lahmacun/", display: "essah-urfa.de", label: "Essah Urfa Lahmacun", tag: "Restaurant" },
  { url: "https://chjungdus.github.io/Lorenz-DJ/", display: "lorenz-dj.de", label: "Lorenz DJ", tag: "DJ & Events" },
  { url: "https://chjungdus.github.io/No-ra/", display: "no-ra.de", label: "No-ra", tag: "Beauty & Nails" },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const [userInteracted, setUserInteracted] = useState(false)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const prev = useCallback(() => {
    setUserInteracted(true)
    setDirection(-1)
    setActive((i) => (i - 1 + sites.length) % sites.length)
  }, [])

  const next = useCallback(() => {
    setDirection(1)
    setActive((i) => (i + 1) % sites.length)
  }, [])

  const goTo = useCallback((i: number) => {
    setUserInteracted(true)
    setDirection(i > active ? 1 : -1)
    setActive(i)
  }, [active])

  useEffect(() => {
    if (userInteracted) return
    const t = setTimeout(next, 6000)
    return () => clearTimeout(t)
  }, [active, next, userInteracted])

  const current = sites[active]

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden pt-28 pb-12 md:pt-32 md:pb-16 bg-[#0a0a0f]">

      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />

      {/* Text */}
      <div className="relative z-10 text-center px-6 mb-8 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-[32px] sm:text-[52px] md:text-[62px] font-black text-white leading-[1.05] tracking-tight mb-6"
        >
          Wir bauen Ihre
          <br />
          Website. Sie entscheiden
          <br />
          <span className="gradient-text">danach, ob Sie zahlen.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/anfrage"
            className="bg-[#0066FF] hover:bg-[#0066FF]/85 text-white font-bold px-7 py-3.5 rounded-full transition-colors flex items-center gap-2 text-[15px]"
          >
            Kostenlos anfragen <ArrowRight size={16} />
          </Link>
          <Link
            href="/portfolio"
            className="border border-white/25 hover:border-white/50 text-white/70 hover:text-white font-semibold px-7 py-3.5 rounded-full transition-all text-[15px] flex items-center gap-2 group"
          >
            Referenzen ansehen
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-6 text-white/40 text-sm"
        >
          Festpreis vor Projektstart&nbsp;&nbsp;·&nbsp;&nbsp;Live in 4 Wochen&nbsp;&nbsp;·&nbsp;&nbsp;Bezahlt wird erst nach Freigabe
        </motion.p>
      </div>

      {/* ── MOBILE: Auto-scrolling Website Card Marquee ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-10 md:hidden w-full"
        onClick={(e) => {
          if (e.target === e.currentTarget) setExpandedCard(null)
        }}
      >
        <div
          className="w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            className="flex gap-4 w-max py-2"
            style={{
              animation: "marquee 34s linear infinite",
              animationPlayState: expandedCard !== null ? "paused" : "running",
            }}
          >
            {[...sites, ...sites].map((site, i) => {
              const isExpanded = expandedCard === i
              return (
                <div
                  key={i}
                  role="button"
                  tabIndex={0}
                  aria-label={`${site.label} – zum Vergrößern klicken`}
                  onClick={() => {
                    if (!isExpanded) setExpandedCard(i)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !isExpanded) setExpandedCard(i)
                  }}
                  className={`relative flex-shrink-0 rounded-2xl border bg-white overflow-hidden cursor-pointer transition-all duration-300 ease-out ${
                    isExpanded
                      ? "w-[250px] h-[160px] border-[#0066FF]/30 shadow-xl"
                      : "w-[170px] h-[110px] border-black/10 shadow-sm"
                  }`}
                >
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0a0a0f]/[0.04] border-b border-black/5">
                    <span className="w-2 h-2 rounded-full bg-[#0a0a0f]/20" />
                    <span className="w-2 h-2 rounded-full bg-[#0a0a0f]/20" />
                    <span className="w-2 h-2 rounded-full bg-[#0a0a0f]/20" />
                  </div>

                  {/* Label */}
                  <div className="flex flex-col items-center justify-center h-[calc(100%-32px)] px-3 text-center gap-1">
                    <p className="text-[13px] font-bold text-[#0a0a0f] truncate max-w-full">
                      {site.label}
                    </p>
                    <p className="text-[11px] text-[#0a0a0f]/40 font-medium">{site.tag}</p>
                  </div>

                  {/* Overlay — appears on first click, real link navigates on second click */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-[#0a0a0f]/95 text-white"
                      >
                        <ExternalLink size={20} />
                        <span className="text-[13px] font-bold">Website besuchen</span>
                        <span className="text-[11px] text-white/60">{site.display}</span>
                      </motion.a>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* ── DESKTOP: Laptop Carousel (unverändert) ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-10 hidden md:block w-full max-w-6xl px-4"
      >
        <div className="relative flex items-center">

          {/* Arrow Left */}
          <button
            onClick={prev}
            aria-label="Vorherige Website"
            className="absolute left-2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>

          {/* Laptop frame */}
          <div className="w-full mx-14">
            <div className="bg-[#0a0a0f] rounded-t-xl p-[6px] shadow-[0_0_60px_rgba(0,102,255,0.2)]">
              {/* Browser chrome */}
              <div className="bg-white/5 rounded-t-lg px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 mx-2 bg-white/10 rounded px-3 py-1 text-[11px] text-white/55 font-mono truncate"
                  >
                    {current.display}
                  </motion.div>
                </AnimatePresence>
                <a
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Im neuen Tab öffnen"
                  className="text-white/45 hover:text-white/75 transition-colors flex-shrink-0"
                >
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* Iframe */}
              <div className="relative bg-white overflow-hidden" style={{ height: "clamp(200px, 42vw, 420px)" }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={active}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -40 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <iframe
                      src={current.url}
                      title={current.label}
                      className="w-full h-full border-0"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-forms"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Hinge + base */}
            <div className="h-[10px] bg-white/5 mx-6 rounded-b-sm" />
            <div className="h-[6px] bg-[#0a0a0f] mx-0 rounded-b-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
          </div>

          {/* Arrow Right */}
          <button
            onClick={() => { setUserInteracted(true); next() }}
            aria-label="Nächste Website"
            className="absolute right-2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>

        {/* Label + Dots — desktop */}
        <div className="flex flex-col items-center gap-3 mt-5">
          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="text-white/60 text-sm font-medium"
            >
              {current.label}
              <span className="ml-2 text-white/30 text-xs">{current.tag}</span>
            </motion.p>
          </AnimatePresence>

          <div className="flex gap-2">
            {sites.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Website ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-[#0066FF]" : "w-1.5 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  )
}
