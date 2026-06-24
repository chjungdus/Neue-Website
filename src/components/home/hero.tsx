"use client"

import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { motion } from "framer-motion"

const checks = [
  "Festpreis — vorab fix, kein Stundensatz, keine Nachträge",
  "In 4 Wochen live, verbindlich statt irgendwann",
  "Erstes Gespräch kostenlos, ehrliche Einschätzung",
]

const stats = [
  { value: "73", label: "Projekte" },
  { value: "Ø 4,8 / 5", label: "Bewertung" },
  { value: "Seit 2019", label: "München" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 bg-white">
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex items-center gap-2 bg-[#eff6ff] text-[#2563eb] text-xs font-semibold px-4 py-2 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
          Aktuell 2 Projektplätze frei
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-4xl md:text-6xl font-black text-[#111827] leading-[1.1] tracking-tight mb-4"
        >
          Schöne Websites
          <br />
          gibt es viele.
          <br />
          <span className="gradient-text">Wirksame selten.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-lg text-[#6b7280] mb-8 leading-relaxed"
        >
          Individuell gestaltet. Messbar wirksamer. In 4 Wochen live.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="flex flex-col gap-3 mb-10 text-left"
        >
          {checks.map((text) => (
            <li key={text} className="flex items-start gap-3 text-[#374151] text-sm">
              <span className="w-5 h-5 rounded-full bg-[#2563eb] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={11} className="text-white" strokeWidth={3} />
              </span>
              {text}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="flex flex-col gap-3 mb-4"
        >
          <Link
            href="/anfrage"
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2 text-base w-full"
          >
            Kostenloses Erstgespräch buchen
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/portfolio"
            className="text-[#6b7280] font-medium px-8 py-4 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 text-base w-full"
          >
            Unsere Arbeit ansehen
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.34 }}
          className="text-xs text-[#9ca3af] mb-16"
        >
          15 Min, unverbindlich, ehrliche Einschätzung.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="flex items-center justify-center gap-10 border-t border-gray-100 pt-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-black text-[#111827]">{stat.value}</div>
              <div className="text-xs text-[#9ca3af] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
