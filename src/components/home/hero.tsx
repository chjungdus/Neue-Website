"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const avatarInitials = ["MS", "EV", "CF", "KO"]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#0a0a0f]">
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full bg-[#2563eb]/20 blur-[140px]" />
        <div className="absolute -bottom-20 -right-10 w-[500px] h-[500px] rounded-full bg-[#0ea5e9]/12 blur-[120px]" />
        <div className="absolute top-1/2 left-[35%] w-[280px] h-[280px] rounded-full bg-[#6366f1]/8 blur-[80px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-16 xl:gap-20 items-center">

          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-slate-400 text-xs font-medium">Düsseldorf · 2 Plätze verfügbar</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-[48px] md:text-[68px] font-black text-white leading-[1.05] tracking-tight mb-6"
            >
              Ihre Konkurrenz
              <br />
              gewinnt Kunden
              <br />
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] bg-clip-text text-transparent">
                im Internet.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-lg text-slate-400 leading-relaxed mb-10 max-w-md"
            >
              Wir bauen Websites, die mehr Anfragen bringen.
              <span className="block text-slate-500 mt-0.5">Festpreis. 4 Wochen. Kein Template.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="flex flex-col sm:flex-row items-start gap-3 mb-12"
            >
              <Link
                href="/anfrage"
                className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-7 py-3.5 rounded-full transition-colors flex items-center gap-2 text-[15px] shrink-0"
              >
                Kostenlos anfragen
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/portfolio"
                className="text-slate-400 hover:text-white font-semibold py-3.5 px-2 transition-colors text-[15px] flex items-center gap-2 group"
              >
                Unsere Arbeit ansehen
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {avatarInitials.map((init) => (
                  <div
                    key={init}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2563eb] to-[#0ea5e9] flex items-center justify-center text-white text-[10px] font-bold border-2 border-[#0a0a0f]"
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-white">4 Unternehmen vertrauen uns</div>
                <div className="text-xs text-slate-600">Ø 4,8 / 5 Bewertung</div>
              </div>
            </motion.div>
          </div>

          {/* Right: MacBook mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="hidden lg:flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[420px]"
            >
              {/* MacBook lid/screen */}
              <div className="bg-gradient-to-b from-[#2d2d3d] to-[#1a1a2a] rounded-2xl p-2.5 shadow-2xl shadow-black/70 border border-white/10">
                <div className="flex justify-center mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2d3748]" />
                </div>
                <div className="bg-[#0f172a] rounded-xl overflow-hidden">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-[#1e293b] border-b border-white/5">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                    <div className="flex-1 mx-2 bg-[#0f172a] rounded px-2 py-0.5 text-[9px] text-slate-500 font-mono">
                      ihr-unternehmen.de
                    </div>
                  </div>
                  {/* Simulated page */}
                  <div className="bg-white">
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100">
                      <div className="h-2 w-14 bg-[#2563eb] rounded-full" />
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-5 bg-gray-200 rounded" />
                        <div className="h-1.5 w-5 bg-gray-200 rounded" />
                        <div className="h-1.5 w-5 bg-gray-200 rounded" />
                        <div className="h-5 w-12 bg-[#2563eb] rounded-full" />
                      </div>
                    </div>
                    <div className="px-4 py-4 space-y-2">
                      <div className="h-1.5 w-1/4 bg-gray-200 rounded-full" />
                      <div className="h-5 w-4/5 bg-[#0f172a] rounded-lg" />
                      <div className="h-4 w-3/5 bg-gray-300 rounded-lg" />
                      <div className="h-2 w-full bg-gray-100 rounded-full mt-2" />
                      <div className="h-2 w-4/5 bg-gray-100 rounded-full" />
                      <div className="flex gap-2 mt-3">
                        <div className="h-7 w-24 bg-[#2563eb] rounded-full" />
                        <div className="h-7 w-20 border border-gray-200 rounded-full" />
                      </div>
                    </div>
                    <div className="px-4 pb-4 grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-12 bg-gray-50 rounded-xl border border-gray-100" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Hinge */}
              <div className="h-1.5 bg-[#1a1a2a] mx-8 border-x border-b border-white/5" />
              {/* Base */}
              <div className="h-3 bg-gradient-to-b from-[#252535] to-[#1a1a25] rounded-b-xl border border-white/[0.06] shadow-lg" />

              {/* Floating: Conversion Rate */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-8 -left-12 bg-[#0f172a]/95 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-2xl"
              >
                <div className="text-[9px] text-slate-500 font-medium uppercase tracking-wide mb-1">Conversion Rate</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-black text-white">3,2%</span>
                  <span className="text-[9px] font-bold text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 rounded-full">↑ +128%</span>
                </div>
                <div className="text-[9px] text-slate-600 mt-0.5">GreenMeal</div>
              </motion.div>

              {/* Floating: Google Ranking */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -top-6 -right-10 bg-[#0f172a]/95 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-2xl"
              >
                <div className="text-[9px] text-slate-500 font-medium uppercase tracking-wide mb-1">Google Ranking</div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-black text-white">#1</span>
                  <span className="text-[9px] text-slate-500">organisch</span>
                </div>
                <div className="text-[9px] text-slate-600 mt-0.5">Limpiezas El Valle</div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
