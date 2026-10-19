"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

// Horizontal rail: native swipe with snap on touch screens, drag with the mouse on
// desktop, arrow buttons and a progress bar. The items stay a plain <ul>, so the
// content is readable (and scrollable) without script.
export default function SwipeRail({
  children,
  label,
  trackClassName = "",
  controlsClassName = "",
  hint = "Wischen oder ziehen",
}: {
  children: ReactNode
  label: string
  trackClassName?: string
  controlsClassName?: string
  hint?: string
}) {
  const ref = useRef<HTMLUListElement>(null)
  const [state, setState] = useState({ progress: 0, visible: 1, atStart: true, atEnd: false })
  const drag = useRef({ active: false, x: 0, left: 0, moved: false })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      const max = el.scrollWidth - el.clientWidth
      setState({
        progress: max > 0 ? el.scrollLeft / max : 0,
        visible: el.scrollWidth > 0 ? el.clientWidth / el.scrollWidth : 1,
        atStart: el.scrollLeft < 4,
        atEnd: el.scrollLeft > max - 4,
      })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    el.addEventListener("scroll", onScroll, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => {
      el.removeEventListener("scroll", onScroll)
      ro.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [])

  const step = (dir: 1 | -1) => {
    const el = ref.current
    if (!el) return
    const item = el.querySelector("li")
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0
    el.scrollBy({ left: dir * ((item?.offsetWidth ?? el.clientWidth * 0.8) + gap), behavior: "smooth" })
  }

  const scrollable = state.visible < 0.99

  return (
    <div>
      <ul
        ref={ref}
        aria-label={label}
        className={`no-scrollbar flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain ${
          scrollable ? "md:cursor-grab" : ""
        } ${trackClassName}`}
        onDragStart={(e) => e.preventDefault()}
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse" || !ref.current) return
          drag.current = { active: true, x: e.clientX, left: ref.current.scrollLeft, moved: false }
        }}
        onPointerMove={(e) => {
          const d = drag.current
          const el = ref.current
          if (!d.active || !el) return
          const dx = e.clientX - d.x
          if (!d.moved && Math.abs(dx) > 6) {
            d.moved = true
            // Capture only once it is a real drag, so a plain click still reaches the link.
            el.setPointerCapture(e.pointerId)
            el.style.scrollSnapType = "none"
            el.style.cursor = "grabbing"
          }
          if (d.moved) el.scrollLeft = d.left - dx
        }}
        onPointerUp={() => {
          const el = ref.current
          drag.current.active = false
          if (el) {
            el.style.scrollSnapType = ""
            el.style.cursor = ""
          }
        }}
        onPointerCancel={() => {
          drag.current.active = false
        }}
        onClickCapture={(e) => {
          if (drag.current.moved) {
            e.preventDefault()
            e.stopPropagation()
            drag.current.moved = false
          }
        }}
      >
        {children}
      </ul>

      {scrollable && (
        <div className={`mt-8 flex items-center gap-5 ${controlsClassName}`}>
          <div className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-[#0a0a0f]/10" aria-hidden="true">
            <div
              className="absolute inset-y-0 rounded-full bg-[#0066FF]"
              style={{ width: `${state.visible * 100}%`, left: `${state.progress * (1 - state.visible) * 100}%` }}
            />
          </div>
          <span className="hidden text-[13px] font-semibold text-[#0a0a0f]/45 sm:inline">{hint}</span>
          <div className="flex gap-2">
            {([-1, 1] as const).map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => step(dir)}
                disabled={dir === -1 ? state.atStart : state.atEnd}
                aria-label={dir === -1 ? "Zurück" : "Weiter"}
                className="grid h-11 w-11 place-items-center rounded-full border border-[#0a0a0f]/15 bg-white text-[#0a0a0f] transition hover:border-[#0a0a0f]/40 active:scale-95 disabled:opacity-35"
              >
                {dir === -1 ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
