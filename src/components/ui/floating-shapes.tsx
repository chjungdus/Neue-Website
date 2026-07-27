"use client"

import { motion, useReducedMotion } from "framer-motion"

type Tone = "dark" | "light" | "blue"

// A single decorative shape spec (positions are % so it scales with the section)
type Shape = {
  kind: "ring" | "dot" | "square" | "plus" | "triangle" | "blob"
  top?: string
  left?: string
  right?: string
  bottom?: string
  size: number
  float: number   // vertical travel in px
  drift?: number  // horizontal travel in px
  rotate?: number // degrees of slow rotation
  duration: number
  delay?: number
  className?: string
}

const SHAPES: Shape[] = [
  { kind: "blob", top: "-6%", left: "-8%", size: 320, float: 40, drift: 20, duration: 16, delay: 0 },
  { kind: "blob", bottom: "-12%", right: "-6%", size: 380, float: 50, drift: -24, duration: 20, delay: 1.5 },
  { kind: "ring", top: "16%", right: "10%", size: 70, float: 26, rotate: 40, duration: 9, delay: 0.2 },
  { kind: "ring", bottom: "18%", left: "7%", size: 44, float: 20, rotate: -30, duration: 11, delay: 1 },
  { kind: "dot", top: "26%", left: "14%", size: 12, float: 30, duration: 7, delay: 0.5 },
  { kind: "dot", bottom: "30%", right: "18%", size: 8, float: 22, duration: 8, delay: 1.2 },
  { kind: "square", top: "60%", right: "24%", size: 30, float: 24, rotate: 90, duration: 12, delay: 0.8 },
  { kind: "plus", top: "12%", left: "40%", size: 26, float: 18, rotate: 45, duration: 10, delay: 0.3 },
  { kind: "triangle", bottom: "14%", left: "34%", size: 26, float: 24, rotate: -60, duration: 13, delay: 0.9 },
]

function palette(tone: Tone) {
  switch (tone) {
    case "dark":
      return { stroke: "rgba(255,255,255,0.14)", accent: "#0066FF", soft: "rgba(0,102,255,0.30)", fill: "rgba(255,255,255,0.10)" }
    case "blue":
      return { stroke: "rgba(255,255,255,0.30)", accent: "#ffffff", soft: "rgba(255,255,255,0.18)", fill: "rgba(255,255,255,0.22)" }
    case "light":
    default:
      return { stroke: "rgba(0,102,255,0.22)", accent: "#0066FF", soft: "rgba(0,102,255,0.12)", fill: "rgba(0,102,255,0.12)" }
  }
}

function ShapeNode({ s, tone }: { s: Shape; tone: Tone }) {
  const c = palette(tone)
  const base = { position: "absolute" as const, top: s.top, left: s.left, right: s.right, bottom: s.bottom }

  if (s.kind === "blob") {
    return (
      <div
        style={{ ...base, width: s.size, height: s.size, background: `radial-gradient(circle at 50% 50%, ${c.soft}, transparent 70%)`, filter: "blur(8px)" }}
      />
    )
  }
  if (s.kind === "ring") {
    return <div style={{ ...base, width: s.size, height: s.size, borderRadius: "9999px", border: `2px solid ${c.stroke}` }} />
  }
  if (s.kind === "dot") {
    return <div style={{ ...base, width: s.size, height: s.size, borderRadius: "9999px", background: c.accent }} />
  }
  if (s.kind === "square") {
    return <div style={{ ...base, width: s.size, height: s.size, borderRadius: 8, border: `2px solid ${c.stroke}` }} />
  }
  if (s.kind === "plus") {
    return (
      <div style={{ ...base, width: s.size, height: s.size }}>
        <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: 2, background: c.stroke, transform: "translateY(-50%)" }} />
        <div style={{ position: "absolute", left: "50%", top: 0, height: "100%", width: 2, background: c.stroke, transform: "translateX(-50%)" }} />
      </div>
    )
  }
  // triangle
  return (
    <div
      style={{ ...base, width: 0, height: 0, borderLeft: `${s.size / 2}px solid transparent`, borderRight: `${s.size / 2}px solid transparent`, borderBottom: `${s.size}px solid ${c.soft}` }}
    />
  )
}

export default function FloatingShapes({ tone = "light" }: { tone?: Tone }) {
  const reduce = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {SHAPES.map((s, i) => {
        if (reduce) {
          // Respect reduced-motion: render shapes static, no animation.
          return (
            <div key={i} style={{ position: "absolute", inset: 0 }}>
              <ShapeNode s={s} tone={tone} />
            </div>
          )
        }
        return (
          <motion.div
            key={i}
            className="absolute inset-0"
            animate={{
              y: [0, -s.float, 0],
              x: s.drift ? [0, s.drift, 0] : undefined,
              rotate: s.rotate ? [0, s.rotate, 0] : undefined,
            }}
            transition={{ duration: s.duration, repeat: Infinity, ease: "easeInOut", delay: s.delay ?? 0 }}
          >
            <ShapeNode s={s} tone={tone} />
          </motion.div>
        )
      })}
    </div>
  )
}
