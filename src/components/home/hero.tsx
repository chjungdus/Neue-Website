"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ShaderBackground from "@/components/ui/shader-background"
import Magnetic from "@/components/ui/magnetic"
import { references as sites, shot } from "@/lib/references"

export default function Hero() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const [userInteracted, setUserInteracted] = useState(false)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  // Mobile strip: a real horizontally-scrollable track that also auto-advances
  // when idle. This keeps it swipeable by finger at any time (the old CSS marquee
  // could not be scrolled after tapping).
  const scrollerRef = useRef<HTMLDivElement>(null)
  const pausedRef = useRef(false)
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const downXRef = useRef(0)
  const movedRef = useRef(false)
  const posRef = useRef(0) // float scroll accumulator (scrollLeft rounds to int)
  const initedRef = useRef(false)

  // The track holds 3 identical copies of the list. We keep the viewport inside
  // the middle copy and silently jump by one copy-width whenever it drifts out,
  // so both the auto-scroll AND manual swiping loop forever with no seam.
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    let raf = 0
    const tick = () => {
      const copy = el.scrollWidth / 3
      if (copy > 0) {
        if (!initedRef.current) {
          el.scrollLeft = copy
          posRef.current = copy
          initedRef.current = true
        } else if (!pausedRef.current && expandedCard === null) {
          posRef.current += 0.55
          if (posRef.current >= 2 * copy) posRef.current -= copy
          el.scrollLeft = posRef.current
        } else {
          posRef.current = el.scrollLeft
        }
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [expandedCard])

  // Keep manual scrolling inside the middle copy (seamless infinite loop).
  const handleScroll = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    if (expandedCard !== null) setExpandedCard(null)
    const copy = el.scrollWidth / 3
    if (copy <= 0) return
    if (el.scrollLeft >= 2 * copy) { el.scrollLeft -= copy; posRef.current = el.scrollLeft }
    else if (el.scrollLeft < copy * 0.5) { el.scrollLeft += copy; posRef.current = el.scrollLeft }
  }, [expandedCard])

  // Pause auto-scroll while the user is touching/swiping, resume shortly after.
  const pauseAuto = useCallback(() => {
    pausedRef.current = true
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
  }, [])
  const resumeAuto = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => { pausedRef.current = false }, 1600)
  }, [])

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

      {/* Animated WebGL aurora background */}
      <ShaderBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/10 to-[#0a0a0f]" />

      {/* Text */}
      <div className="relative z-10 text-center px-6 mb-8 max-w-2xl">
        <motion.h1
          variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
          initial="hidden"
          animate="show"
          className="text-[34px] sm:text-[54px] md:text-[66px] font-extrabold text-white leading-[1.03] tracking-tight mb-6"
        >
          {[
            ["Wir", "bauen", "Ihre"],
            ["Website.", "Sie", "entscheiden"],
          ].map((line, li) => (
            <span key={li} className="block">
              {line.map((word, wi) => (
                <motion.span
                  key={wi}
                  variants={{ hidden: { opacity: 0, y: 24, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
                  transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          ))}
          {/* Gradient line stays a single element so background-clip:text works */}
          <motion.span
            variants={{ hidden: { opacity: 0, y: 24, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="block gradient-text"
          >
            danach, ob Sie zahlen.
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Magnetic>
            <Link
              href="/anfrage"
              className="bg-[#0066FF] hover:bg-[#0066FF]/85 text-white font-bold px-7 py-3.5 rounded-full transition-colors flex items-center gap-2 text-[15px]"
            >
              Kostenlos anfragen <ArrowRight size={16} />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="/portfolio"
              className="border border-white/25 hover:border-white/50 text-white/70 hover:text-white font-semibold px-7 py-3.5 rounded-full transition-all text-[15px] flex items-center gap-2 group"
            >
              Referenzen ansehen
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Magnetic>
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

      {/* ── MOBILE: swipeable + auto-scrolling website screenshots ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative z-10 md:hidden w-full"
      >
        <div
          ref={scrollerRef}
          className="w-full flex gap-4 px-6 py-2 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
          onPointerDown={(e) => { pauseAuto(); downXRef.current = e.clientX; movedRef.current = false }}
          onPointerMove={(e) => { if (Math.abs(e.clientX - downXRef.current) > 8) movedRef.current = true }}
          onPointerUp={resumeAuto}
          onPointerCancel={resumeAuto}
          onScroll={handleScroll}
        >
          {[...sites, ...sites, ...sites].map((site, i) => {
            const isExpanded = expandedCard === i
            return (
              <div
                key={i}
                role="button"
                tabIndex={0}
                aria-label={`${site.label} – zum Vergrößern tippen`}
                onClick={() => {
                  if (movedRef.current) return       // was a swipe, not a tap
                  if (!isExpanded) setExpandedCard(i)
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !isExpanded) setExpandedCard(i)
                }}
                className={`relative flex-shrink-0 rounded-2xl border bg-white overflow-hidden cursor-pointer transition-all duration-300 ease-out ${
                  isExpanded
                    ? "w-[260px] h-[180px] border-[#0066FF]/40 shadow-xl"
                    : "w-[190px] h-[130px] border-black/10 shadow-sm"
                }`}
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0a0a0f]/[0.04] border-b border-black/5">
                  <span className="w-2 h-2 rounded-full bg-[#0a0a0f]/20" />
                  <span className="w-2 h-2 rounded-full bg-[#0a0a0f]/20" />
                  <span className="w-2 h-2 rounded-full bg-[#0a0a0f]/20" />
                </div>

                {/* Live screenshot */}
                <div className="relative h-[calc(100%-30px)] bg-[#0a0a0f]/[0.04]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={shot(site.url)}
                    alt={`Website ${site.label}`}
                    loading="lazy"
                    draggable={false}
                    className="w-full h-full object-cover object-top pointer-events-none select-none"
                  />
                  {/* Label overlay */}
                  <div className="absolute inset-x-0 bottom-0 px-3 py-1.5 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-[11px] font-bold text-white truncate">{site.label}</p>
                  </div>
                </div>

                {/* Expand overlay — first tap enlarges, this link is the second tap */}
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
                      className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-[#0a0a0f]/85 text-white"
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
        <p className="text-center text-white/30 text-xs mt-3">Wischen zum Blättern · Tippen zum Öffnen</p>
      </motion.div>

      {/* ── DESKTOP: Laptop carousel with live screenshots ── */}
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

              {/* Screenshot */}
              <div className="relative bg-white overflow-hidden" style={{ height: "clamp(220px, 42vw, 440px)" }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.a
                    key={active}
                    href={current.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -40 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="absolute inset-0 block group"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={shot(current.url)}
                      alt={`Website ${current.label}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-[#0a0a0f]/0 group-hover:bg-[#0a0a0f]/30 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-2 bg-white text-[#0a0a0f] text-sm font-bold px-5 py-2.5 rounded-full">
                        Website besuchen <ExternalLink size={14} />
                      </span>
                    </div>
                  </motion.a>
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

      {/* Bouncing scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative z-10 mt-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[11px] uppercase tracking-[0.2em]">Scrollen</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-9 rounded-full border border-white/25 flex items-start justify-center p-1.5"
        >
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-[#0066FF]"
          />
        </motion.div>
      </motion.div>

    </section>
  )
}
