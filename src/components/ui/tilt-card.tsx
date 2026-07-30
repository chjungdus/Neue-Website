"use client"

import { useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"

// 3D tilt-toward-cursor for a card. Wrap any block; give it a `perspective`
// parent (this component sets its own perspective wrapper).
export default function TiltCard({
  children,
  className,
  max = 7,
  scale = 1.02,
}: {
  children: ReactNode
  className?: string
  max?: number
  scale?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const s = useMotionValue(1)
  const srx = useSpring(rx, { stiffness: 200, damping: 18 })
  const sry = useSpring(ry, { stiffness: 200, damping: 18 })
  const ss = useSpring(s, { stiffness: 200, damping: 18 })

  if (reduce) return <div className={className}>{children}</div>

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        style={{ rotateX: srx, rotateY: sry, scale: ss, transformStyle: "preserve-3d" }}
        className={className}
        onPointerMove={(e) => {
          if (e.pointerType !== "mouse") return
          const r = ref.current?.getBoundingClientRect()
          if (!r) return
          const px = (e.clientX - r.left) / r.width - 0.5
          const py = (e.clientY - r.top) / r.height - 0.5
          ry.set(px * max * 2)
          rx.set(-py * max * 2)
          s.set(scale)
        }}
        onPointerLeave={() => { rx.set(0); ry.set(0); s.set(1) }}
      >
        {children}
      </motion.div>
    </div>
  )
}
