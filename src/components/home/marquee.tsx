"use client"

import { useRef, useEffect, useCallback } from "react"

const items = [
  "Webdesign",
  "Von Grund auf entwickelt",
  "SEO & Sichtbarkeit",
  "Mehr Anfragen, messbar",
  "Landing Pages",
  "Fester Preis, fester Termin",
  "Live in 4 Wochen",
  "Keine Templates",
  "Mobil zuerst gedacht",
  "Ladezeiten unter einer Sekunde",
  "Aus Düsseldorf",
]

export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null)
  const pos = useRef(0)
  const inited = useRef(false)
  const paused = useRef(false)
  const drag = useRef({ active: false, startX: 0, startLeft: 0 })
  const resume = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Auto-advance + seamless infinite loop (3 copies, kept inside the middle one).
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const tick = () => {
      const copy = el.scrollWidth / 3
      if (copy > 0) {
        if (!inited.current) {
          el.scrollLeft = copy
          pos.current = copy
          inited.current = true
        } else if (!paused.current) {
          pos.current += 0.4
          if (pos.current >= 2 * copy) pos.current -= copy
          el.scrollLeft = pos.current
        } else {
          pos.current = el.scrollLeft
        }
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const onScroll = useCallback(() => {
    const el = ref.current
    if (!el) return
    const copy = el.scrollWidth / 3
    if (copy <= 0) return
    if (el.scrollLeft >= 2 * copy) { el.scrollLeft -= copy; pos.current = el.scrollLeft }
    else if (el.scrollLeft < copy * 0.5) { el.scrollLeft += copy; pos.current = el.scrollLeft }
  }, [])

  const pause = () => {
    paused.current = true
    if (resume.current) clearTimeout(resume.current)
  }
  const scheduleResume = () => {
    if (resume.current) clearTimeout(resume.current)
    resume.current = setTimeout(() => { paused.current = false }, 1200)
  }

  return (
    <div
      ref={ref}
      onScroll={onScroll}
      onPointerDown={(e) => {
        pause()
        // Mouse needs manual drag-to-scroll; touch uses native scrolling.
        if (e.pointerType === "mouse" && ref.current) {
          drag.current = { active: true, startX: e.clientX, startLeft: ref.current.scrollLeft }
          ref.current.setPointerCapture(e.pointerId)
        }
      }}
      onPointerMove={(e) => {
        if (drag.current.active && ref.current) {
          ref.current.scrollLeft = drag.current.startLeft - (e.clientX - drag.current.startX)
        }
      }}
      onPointerUp={(e) => {
        drag.current.active = false
        try { ref.current?.releasePointerCapture(e.pointerId) } catch {}
        scheduleResume()
      }}
      onPointerCancel={() => { drag.current.active = false; scheduleResume() }}
      className="border-y border-[#0a0a0f]/10 bg-[#0a0a0f]/[0.04] overflow-x-auto overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing select-none py-3"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
      }}
      aria-label="Leistungen — zum Blättern wischen oder ziehen"
    >
      <div className="flex gap-0 w-max">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-[13px] font-semibold text-[#0a0a0f]/40 whitespace-nowrap flex items-center gap-0"
          >
            <span className="px-5">{item}</span>
            <span className="text-[#0a0a0f]/20 text-lg leading-none">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
