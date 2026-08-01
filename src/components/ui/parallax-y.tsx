"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

// Wraps content so it drifts vertically, slightly out of sync with the page,
// as it moves through the viewport — a subtle depth cue, distinct from the
// pinned horizontal scroll and the scroll-drawn timeline elsewhere on the page.
export default function ParallaxY({
  children,
  range = 18,
  className,
}: {
  children: ReactNode
  range?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [range, -range])

  if (reduce) return <div className={className}>{children}</div>

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
