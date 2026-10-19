"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useReducedMotion } from "framer-motion"

// Counts from 0 to `value` once it scrolls into view. The server HTML carries the
// final number, so search engines and visitors without script see the real value.
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1400,
}: {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const reduce = useReducedMotion()
  const [current, setCurrent] = useState(value)

  useEffect(() => {
    if (!inView || reduce || value === 0) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      setCurrent(Math.round((1 - Math.pow(1 - p, 3)) * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduce, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {current}
      {suffix}
    </span>
  )
}
