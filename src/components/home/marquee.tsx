"use client"

import { useRef, useEffect } from "react"

const items = [
  "Webdesign aus Düsseldorf",
  "Festpreis ab 199 €",
  "Individuelles Design",
  "Live in zwei Wochen",
  "Zahlung nach Freigabe",
  "SEO & Sichtbarkeit",
  "Mobil zuerst gedacht",
  "Online-Shops",
  "Buchungssysteme",
  "Direkt mit den Gründern",
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
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

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
        if (!draggingRef.current && !reduce) {
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
      className="cursor-grab select-none overflow-hidden border-b border-[#0a0a0f]/10 bg-[#0a0a0f] py-5 active:cursor-grabbing"
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
            className="flex items-center whitespace-nowrap text-[18px] font-extrabold tracking-[-0.01em] text-white md:text-[22px]"
          >
            <span className="px-6">{item}</span>
            <span className="h-2 w-2 rounded-full bg-[#0066FF]" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  )
}
