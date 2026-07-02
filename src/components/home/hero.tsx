"use client"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const sites = [
  {
    url: "https://www.milonga-arg.de/",
    display: "www.milonga-arg.de",
    label: "Milonga ARG",
    tag: "Restaurant & Food Truck",
  },
  {
    // URL hier eintragen — z.B. "https://www.limpiezas-el-valle.es/"
    url: "",
    display: "www.limpiezas-el-valle.es",
    label: "Limpiezas El Valle",
    tag: "Reinigungsservice",
  },
  {
    // URL hier eintragen — z.B. "https://www.cafethiopia.de/"
    url: "",
    display: "www.cafethiopia.de",
    label: "Caféthiopia",
    tag: "Café & Rösterei",
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  const prev = useCallback(() => {
    setDirection(-1)
    setActive((i) => (i - 1 + sites.length) % sites.length)
  }, [])

  const next = useCallback(() => {
    setDirection(1)
    setActive((i) => (i + 1) % sites.length)
  }, [])

  // Auto-advance alle 6s
  useEffect(() => {
    const t = setTimeout(next, 6000)
    return () => clearTimeout(t)
  }, [active, next])

  const current = sites[active]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#1a3570] overflow-hidden pt-20 pb-10">

      {/* Hintergrund-Raster */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a3570] via-transparent to-[#0d2050]" />

      {/* ── TEXT ── */}
      <div className="relative z-10 text-center px-6 mb-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-2.5 mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
          <p className="text-blue-300 text-sm font-semibold">
            Kostenlose Vorschau Ihrer neuen Website
          </p>
        </motion.div>

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
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-7 py-3.5 rounded-full transition-colors flex items-center gap-2 text-[15px]"
          >
            Kostenlos anfragen <ArrowRight size={16} />
          </Link>
          <Link
            href="/portfolio"
            className="border border-white/25 hover:border-white/50 text-white/70 hover:text-white font-semibold px-7 py-3.5 rounded-full transition-all text-[15px] flex items-center gap-2 group backdrop-blur-sm"
          >
            Unsere Arbeit ansehen
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* ── LAPTOP CAROUSEL ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-10 w-full max-w-5xl px-4"
      >
        <div className="relative flex items-center">

          {/* Pfeil Links */}
          <button
            onClick={prev}
            aria-label="Vorherige Website"
            className="absolute -left-2 sm:left-2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>

          {/* Laptop Rahmen */}
          <div className="w-full mx-8 sm:mx-14">
            {/* Bildschirm */}
            <div className="bg-[#1a2540] rounded-t-xl p-[6px] shadow-[0_0_60px_rgba(37,99,235,0.2)]">
              {/* Browser-Chrome */}
              <div className="bg-[#232e45] rounded-t-lg px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-1 mx-2 bg-[#151f33] rounded px-3 py-1 text-[11px] text-slate-400 font-mono truncate"
                  >
                    {current.display}
                  </motion.div>
                </AnimatePresence>
                {current.url && (
                  <a
                    href={current.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Im neuen Tab öffnen"
                    className="text-slate-500 hover:text-slate-300 transition-colors flex-shrink-0"
                  >
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>

              {/* Iframe / Screen */}
              <div className="relative bg-white overflow-hidden" style={{ height: "420px" }}>
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
                    {current.url ? (
                      <iframe
                        src={current.url}
                        title={current.label}
                        className="w-full h-full border-0"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-forms"
                      />
                    ) : (
                      /* Platzhalter wenn URL noch nicht eingetragen */
                      <div className="w-full h-full bg-gradient-to-br from-[#f0f4ff] to-[#dbeafe] flex flex-col items-center justify-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-[#2563eb]/10 flex items-center justify-center">
                          <ExternalLink size={22} className="text-[#2563eb]" />
                        </div>
                        <p className="text-[#374151] font-bold text-sm">{current.label}</p>
                        <p className="text-[#9ca3af] text-xs">{current.display}</p>
                        <p className="text-[#9ca3af] text-[10px] mt-2">URL wird noch eingetragen</p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Laptop-Scharnier */}
            <div className="h-[10px] bg-gradient-to-b from-[#1a2540] to-[#141d30] mx-6 rounded-b-sm" />
            {/* Laptop-Basis */}
            <div className="h-[6px] bg-[#0f1726] mx-0 rounded-b-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]" />
          </div>

          {/* Pfeil Rechts */}
          <button
            onClick={next}
            aria-label="Nächste Website"
            className="absolute -right-2 sm:right-2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm flex items-center justify-center transition-all"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>

        {/* Label + Dots */}
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
                onClick={() => { setDirection(i > active ? 1 : -1); setActive(i) }}
                aria-label={`Website ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-[#2563eb]" : "w-1.5 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  )
}
