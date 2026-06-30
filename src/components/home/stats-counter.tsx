"use client"
import { useEffect, useRef, useState } from "react"
import FadeIn from "@/components/ui/fade-in"

interface StatData { target: number; suffix: string; label: string; note: string; decimal?: boolean }

const stats: StatData[] = [
  { target: 4, suffix: "", label: "Projekte abgeschlossen", note: "jedes pünktlich geliefert" },
  { target: 4.8, suffix: "/5", label: "Ø Kundenbewertung", note: "über alle Projekte", decimal: true },
  { target: 0, suffix: "", label: "Templates verwendet", note: "alles von Grund auf" },
]

function AnimatedNumber({ target, suffix, decimal }: StatData) {
  const [current, setCurrent] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const startedRef = useRef(false)
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !startedRef.current) {
        startedRef.current = true
        const duration = 1500
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
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])
  const display = decimal ? current.toFixed(1) : Math.round(current).toString()
  return (
    <div ref={containerRef} className="text-5xl md:text-6xl font-black text-[#111827] tabular-nums leading-none">
      {display}{suffix}
    </div>
  )
}

export default function StatsCounter() {
  return (
    <section className="py-24 bg-[#f9fafb] border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08} direction="up">
              <div className="text-center">
                <AnimatedNumber {...stat} />
                <div className="text-[#111827] font-semibold text-sm mt-3 mb-1">{stat.label}</div>
                <div className="text-[#9ca3af] text-xs leading-relaxed">{stat.note}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
