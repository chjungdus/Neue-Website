"use client"

import { useState, useCallback, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const sites = [
  { url: "https://www.milonga-foodtruck.de/", label: "Milonga Food Truck", tag: "Food Truck" },
  { url: "https://www.limpiezas-el-valle.es/", label: "Limpiezas El Valle", tag: "Reinigungsservice" },
  { url: "https://chjungdus.github.io/Antonioconstruccion/", label: "Antonio Construcción", tag: "Bau & Handwerk" },
  { url: "https://chjungdus.github.io/Peluqueria-loli/", label: "Peluquería Loli", tag: "Friseursalon" },
  { url: "https://chjungdus.github.io/Essah-Urfa-Lahmacun/", label: "Essah Urfa Lahmacun", tag: "Restaurant" },
  { url: "https://chjungdus.github.io/Lorenz-DJ/", label: "Lorenz DJ", tag: "DJ & Events" },
  { url: "https://chjungdus.github.io/No-ra/", label: "No-ra", tag: "Beauty & Nails" },
]

function thumbUrl(siteUrl: string) {
  return `https://image.thum.io/get/width/390/crop/844/${siteUrl}`
}

export default function Hero() {
  const [active, setActive] = useState(0)

  const next = useCallback(() => {
    setActive((i) => (i + 1) % sites.length)
  }, [])

  useEffect(() => {
    const t = setTimeout(next, 5000)
    return () => clearTimeout(t)
  }, [active, next])

  const current = sites[active]

  return (
    <section className="relative min-h-screen flex items-center bg-[#1a3570] overflow-hidden pt-20 pb-16">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a3570] via-transparent to-[#0d2050]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2.5 mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
              <p className="text-blue-300 text-sm font-semibold">Aktuell 2 Projektplätze frei</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-[36px] sm:text-[52px] md:text-[58px] font-black text-white leading-[1.05] tracking-tight mb-6"
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
              className="flex flex-col sm:flex-row items-start gap-3"
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

            {/* Site label below buttons on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-col gap-3 lg:hidden"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-white/50 text-sm"
                >
                  {current.label} · <span className="text-white/30 text-xs">{current.tag}</span>
                </motion.p>
              </AnimatePresence>
              <div className="flex gap-2">
                {sites.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Website ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? "w-6 bg-[#2563eb]" : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Phone mockup */}
          <div className="hidden lg:flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
                style={{ width: "260px", height: "540px" }}
              >
                {/* Glow */}
                <div className="absolute -inset-6 rounded-[60px] bg-[#2563eb]/15 blur-3xl" />

                {/* Phone body */}
                <div
                  className="absolute inset-0 rounded-[44px] shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
                  style={{ background: "linear-gradient(145deg, #2a2a2a, #111)" }}
                >
                  {/* Side buttons */}
                  <div className="absolute -right-[3px] top-24 w-[3px] h-10 bg-[#333] rounded-l" />
                  <div className="absolute -left-[3px] top-20 w-[3px] h-7 bg-[#333] rounded-r" />
                  <div className="absolute -left-[3px] top-32 w-[3px] h-7 bg-[#333] rounded-r" />

                  {/* Screen bezel */}
                  <div className="absolute inset-[10px] rounded-[36px] overflow-hidden bg-black">
                    {/* Dynamic island / notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20 flex items-center justify-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] border border-[#333]" />
                      <div className="w-5 h-1.5 rounded-full bg-[#1a1a1a] border border-[#333]" />
                    </div>

                    {/* Screenshot */}
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={active}
                        src={thumbUrl(current.url)}
                        alt={current.label}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full object-cover object-top"
                      />
                    </AnimatePresence>

                    {/* Home indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full z-20" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Label + dots below phone */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col items-center gap-3"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="text-white/50 text-sm"
                >
                  {current.label} · <span className="text-white/30 text-xs">{current.tag}</span>
                </motion.p>
              </AnimatePresence>
              <div className="flex gap-2">
                {sites.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`Website ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? "w-6 bg-[#2563eb]" : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
