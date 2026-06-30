"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 xl:gap-24 items-center">

          {/* Left: Copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[#2563eb] text-sm font-semibold mb-6 flex items-center gap-2"
            >
              Kostenlose Vorschau Ihrer neuen Website
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-[32px] sm:text-[52px] md:text-[68px] font-black text-[#111827] leading-[1.05] tracking-tight mb-8"
            >
              Wir bauen Ihre
              <br />
              Website. Sie entscheiden
              <br />
              <span className="gradient-text">danach, ob Sie zahlen.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-base sm:text-xl text-[#374151] leading-relaxed mb-10 max-w-lg"
            >
              Sie bekommen eine unverbindliche Vorschau Ihrer neuen Website — bevor ein Vertrag
              unterschrieben oder etwas bezahlt wird. Gefällt sie Ihnen nicht, kostet es Sie nichts.
            </motion.p>
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
                className="text-[#6b7280] hover:text-[#111827] font-semibold py-4 transition-colors text-[15px] flex items-center justify-center sm:justify-start gap-2 group"
              >
                Unsere Arbeit ansehen
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Laptop + phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="hidden lg:block"
          >
            <div className="relative pb-10 pr-8">
              {/* Laptop / browser window */}
              <div className="bg-[#0f172a] rounded-2xl p-1.5 shadow-2xl shadow-slate-900/20">
                <div className="bg-[#1e293b] rounded-xl overflow-hidden">
                  {/* Chrome bar */}
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-[#334155]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    <div className="flex-1 mx-3 bg-[#475569] rounded-md px-3 py-1 text-[10px] text-slate-300 font-mono">
                      www.ihr-unternehmen.de
                    </div>
                  </div>
                  {/* Simulated page content */}
                  <div className="bg-white">
                    <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
                      <div className="h-2.5 w-20 bg-[#2563eb] rounded-full" />
                      <div className="flex items-center gap-3">
                        <div className="h-1.5 w-8 bg-gray-200 rounded-full" />
                        <div className="h-1.5 w-8 bg-gray-200 rounded-full" />
                        <div className="h-1.5 w-8 bg-gray-200 rounded-full" />
                        <div className="h-5 w-16 bg-[#2563eb] rounded-full" />
                      </div>
                    </div>
                    <div className="px-5 py-6 space-y-2.5">
                      <div className="h-2 w-1/3 bg-gray-200 rounded-full" />
                      <div className="h-6 w-3/4 bg-[#0f172a] rounded-lg" />
                      <div className="h-5 w-2/3 bg-[#0f172a] rounded-lg opacity-60" />
                      <div className="h-3 w-full bg-gray-100 rounded-full mt-3" />
                      <div className="h-3 w-5/6 bg-gray-100 rounded-full" />
                      <div className="flex gap-2 mt-5">
                        <div className="h-9 w-32 bg-[#2563eb] rounded-full" />
                        <div className="h-9 w-28 border border-gray-200 rounded-full" />
                      </div>
                    </div>
                    <div className="px-5 pb-5">
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-20 bg-[#f9fafb] rounded-xl" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone mockup — overlapping bottom-left, subtle float */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { delay: 0.5, duration: 0.5 },
                  y: { delay: 1, duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -bottom-2 -left-10 w-[120px]"
              >
                <div className="bg-[#0f172a] rounded-[1.4rem] p-1.5 shadow-2xl shadow-slate-900/30 border border-slate-700/50">
                  <div className="bg-white rounded-[1.1rem] overflow-hidden">
                    <div className="flex justify-center pt-2 pb-1">
                      <div className="w-8 h-1 bg-gray-200 rounded-full" />
                    </div>
                    <div className="px-3 pb-3 space-y-2">
                      <div className="h-1.5 w-8 bg-[#2563eb] rounded-full" />
                      <div className="h-10 w-full bg-[#0f172a] rounded-md mt-1" />
                      <div className="h-1.5 w-full bg-gray-100 rounded-full" />
                      <div className="h-1.5 w-2/3 bg-gray-100 rounded-full" />
                      <div className="h-5 w-full bg-[#2563eb] rounded-full mt-2" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating: Google ranking */}
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.5 }}
                className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-3.5 min-w-[155px]"
              >
                <div className="text-[10px] text-[#9ca3af] mb-1.5 font-medium uppercase tracking-wide">
                  Google Ranking
                </div>
                <div className="flex items-baseline gap-1.5 mb-0.5">
                  <span className="text-2xl font-black text-[#111827]">#1</span>
                  <span className="text-xs text-[#6b7280]">organisch</span>
                </div>
                <div className="text-[10px] text-[#9ca3af]">Hauptkeyword · Limpiezas El Valle</div>
              </motion.div>

              {/* Floating: Conversion */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute bottom-6 -right-2 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-3.5 min-w-[165px]"
              >
                <div className="text-[10px] text-[#9ca3af] mb-1.5 font-medium uppercase tracking-wide">
                  Online-Anfragen
                </div>
                <div className="flex items-baseline gap-2 mb-0.5">
                  <span className="text-2xl font-black text-[#111827]">3 → 11</span>
                </div>
                <div className="text-[10px] text-[#9ca3af]">pro Monat · Milonga ARG</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
