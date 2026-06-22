"use client"

import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  { value: "80+", label: "Projekte" },
  { value: "98%", label: "Zufriedenheit" },
  { value: "3×", label: "Mehr Anfragen" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#6366f1]/10 blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-[#a855f7]/8 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#6366f1]/6 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#0e0f1c] border border-[#6366f1]/30 text-[#a5a6c0] text-xs font-medium px-4 py-2 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse" />
          Neue Projekte verfügbar – Jetzt Termin sichern
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6"
        >
          Websites, die
          <br />
          <span className="gradient-text">wirklich verkaufen.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#8b8da0] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Wir entwickeln professionelle Websites, Online-Shops und Web-Apps,
          die Ihre Kunden begeistern – und Ihren Umsatz steigern.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Link
            href="/anfrage"
            className="gradient-bg text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2 text-base"
          >
            Projekt anfragen
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/portfolio"
            className="flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/8 transition-all text-base"
          >
            <Play size={16} className="text-[#6366f1]" />
            Unsere Arbeit
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black gradient-text">{stat.value}</div>
              <div className="text-sm text-[#8b8da0] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/40 to-transparent"
      />
    </section>
  )
}
