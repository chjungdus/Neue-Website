"use client"
import { useEffect, useRef, useState } from "react"
import FadeIn from "@/components/ui/fade-in"
import { liveReferences } from "@/lib/references"

interface StatData { target: number; suffix: string; label: string; note: string; decimal?: boolean; prefix?: string }

// Nur belegbare Zahlen: Live-Projekte werden aus references.ts gezählt.
const stats: StatData[] = [
  { target: liveReferences.length, suffix: "", label: "Kunden-Websites live", note: "alle zum Anklicken" },
  { target: 2, prefix: "1–", suffix: " Wo.", label: "bis zum Launch", note: "fester Preis, Zahlung erst nach Freigabe" },
  { target: 24, suffix: "h", label: "Antwortzeit", note: "auf jede Anfrage" },
  { target: 0, suffix: "", label: "Templates", note: "alles von Grund auf" },
]

function AnimatedNumber({ target, suffix, decimal, prefix = "", delay = 0 }: StatData & { delay?: number }) {
  // Server HTML carries the final value (for Google and link previews); the client resets to 0 and counts up.
  const [current, setCurrent] = useState(target)
  const containerRef = useRef<HTMLDivElement>(null)
  const startedRef = useRef(false)
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return
    setCurrent(0)
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !startedRef.current) {
        startedRef.current = true
        const duration = 2800
        const start = () => {
          const startTime = performance.now()
          const animate = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const ease = 1 - Math.pow(1 - progress, 3)
            setCurrent(ease * target)
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
        if (delay > 0) setTimeout(start, delay)
        else start()
      }
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, delay])
  // Ranges like "1–2" are shown as-is (counting "1–0 … 1–2" would look broken).
  const display = prefix ? String(target) : decimal ? current.toFixed(1) : Math.round(current).toString()
  return (
    <div ref={containerRef} className="text-5xl md:text-6xl font-extrabold text-[#0066FF] tabular-nums leading-none">
      {prefix}{display}{suffix}
    </div>
  )
}

export default function StatsCounter() {
  return (
    <section className="py-16 md:py-20 bg-[#0a0a0f]/[0.03] border-y border-[#0a0a0f]/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08} direction="up">
              <div className="text-center">
                <AnimatedNumber {...stat} delay={i * 180} />
                <div className="text-[#0a0a0f] font-semibold text-sm mt-3 mb-1">{stat.label}</div>
                <div className="text-[#0a0a0f]/40 text-xs leading-relaxed">{stat.note}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
