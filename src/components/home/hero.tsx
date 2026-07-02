"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── VIDEO HINTERGRUND ── */}
      <div className="absolute inset-0">
        {/*
          VIDEO PLATZHALTER — hier eigene Video-Datei einbinden:
          <video src="/videos/hero.mp4" ... />
          oder per externem Link (Vimeo/Cloudflare Stream etc.)
        */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Hintergrund-Gradient als Fallback (solange kein Video geladen) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07102b] via-[#0d1b40] to-[#060f25]" />

        {/* Subtiles Raster-Pattern über dem Gradient */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Dunkles Overlay für Lesbarkeit des Textes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-36 pb-24">
        <div className="max-w-2xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2.5 mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
            <p className="text-blue-300 text-sm font-semibold">
              Kostenlose Vorschau Ihrer neuen Website
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-[38px] sm:text-[58px] md:text-[72px] font-black text-white leading-[1.05] tracking-tight mb-8"
          >
            Wir bauen Ihre
            <br />
            Website. Sie entscheiden
            <br />
            <span className="gradient-text">danach, ob Sie zahlen.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-base sm:text-xl text-white/70 leading-relaxed mb-10 max-w-lg"
          >
            Sie bekommen eine unverbindliche Vorschau Ihrer neuen Website — bevor ein Vertrag
            unterschrieben oder etwas bezahlt wird. Gefällt sie Ihnen nicht, kostet es Sie nichts.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4"
          >
            <Link
              href="/anfrage"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2 text-[15px] shrink-0"
            >
              Kostenlos anfragen <ArrowRight size={17} />
            </Link>
            <Link
              href="/portfolio"
              className="border border-white/25 hover:border-white/50 text-white/70 hover:text-white font-semibold px-8 py-4 rounded-full transition-all text-[15px] flex items-center justify-center gap-2 group backdrop-blur-sm"
            >
              Unsere Arbeit ansehen
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* ── GLASSMORPHISM BADGES (rechts unten) ── */}
        <div className="hidden lg:flex flex-col gap-3 absolute right-6 bottom-0 pb-14">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 px-5 py-3.5 min-w-[160px]"
          >
            <div className="text-[10px] text-white/50 mb-1.5 font-medium uppercase tracking-wide">
              Google Ranking
            </div>
            <div className="flex items-baseline gap-1.5 mb-0.5">
              <span className="text-2xl font-black text-white">#1</span>
              <span className="text-xs text-white/55">organisch</span>
            </div>
            <div className="text-[10px] text-white/40">Hauptkeyword · Limpiezas El Valle</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 px-5 py-3.5 min-w-[165px]"
          >
            <div className="text-[10px] text-white/50 mb-1.5 font-medium uppercase tracking-wide">
              Online-Anfragen
            </div>
            <div className="flex items-baseline gap-2 mb-0.5">
              <span className="text-2xl font-black text-white">3 → 11</span>
            </div>
            <div className="text-[10px] text-white/40">pro Monat · Milonga ARG</div>
          </motion.div>
        </div>
      </div>

      {/* ── SCROLL-INDIKATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>

    </section>
  )
}
