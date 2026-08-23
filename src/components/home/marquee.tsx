"use client"

import { useRef, useEffect } from "react"

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

// Transform-based marquee. Native scrollLeft rounds to whole pixels on
// mobile browsers, which makes a slow per-frame auto-scroll visibly step
// frame by frame. `transform: translate3d` is GPU-composited and glides
// smoothly at any speed. Manual drag/swipe writes to the same offset via
// pointer events, so both motions share one continuous state.
export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)      // px, kept within [-copyWidth, 0]
  const copyWidthRef = useRef(0)   // width of ONE copy of the items list
  const draggingRef = useRef(false)
  const lastPointerXRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const measure = () => {
      // Track holds two copies of the items list, so one copy is half the total width.
      copyWidthRef.current = track.scrollWidth / 2
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(track)

    let raf = 0
    const tick = () => {
      const cw = copyWidthRef.current
      if (cw > 0) {
        if (!draggingRef.current) {
          offsetRef.current -= 0.8 // ~48 px/s at 60 fps, subtle but visible
        }
        if (offsetRef.current <= -cw) offsetRef.current += cw
        else if (offsetRef.current > 0) offsetRef.current -= cw
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <div
      className="border-y border-[#0a0a0f]/10 bg-[#0a0a0f]/[0.04] overflow-hidden select-none py-3 cursor-grab active:cursor-grabbing"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
      }}
      onPointerDown={(e) => {
        draggingRef.current = true
        lastPointerXRef.current = e.clientX
        ;(e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId)
      }}
      onPointerMove={(e) => {
        if (!draggingRef.current) return
        const dx = e.clientX - lastPointerXRef.current
        lastPointerXRef.current = e.clientX
        offsetRef.current += dx
      }}
      onPointerUp={() => { draggingRef.current = false }}
      onPointerCancel={() => { draggingRef.current = false }}
      aria-label="Leistungen, zum Blättern wischen oder ziehen"
    >
      <div
        ref={trackRef}
        className="flex gap-0 w-max will-change-transform"
        style={{ touchAction: "pan-y" }}
      >
        {[...items, ...items].map((item, i) => (
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
