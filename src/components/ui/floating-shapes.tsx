"use client"

import { useEffect } from "react"
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion"

type Tone = "dark" | "light" | "blue"

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
  depth: number   // parallax strength (bigger = reacts more to the cursor)
}

const SHAPES: Shape[] = [
  { kind: "blob", top: "-8%", left: "-8%", size: 340, float: 46, drift: 26, duration: 15, delay: 0, depth: 0.6 },
  { kind: "blob", bottom: "-14%", right: "-6%", size: 400, float: 54, drift: -28, duration: 19, delay: 1.2, depth: 0.5 },
  { kind: "blob", top: "40%", left: "44%", size: 240, float: 40, drift: 30, duration: 17, delay: 2.4, depth: 0.35 },
  { kind: "ring", top: "14%", right: "9%", size: 84, float: 34, rotate: 60, duration: 8, delay: 0.2, depth: 1.6 },
  { kind: "ring", bottom: "16%", left: "6%", size: 52, float: 26, rotate: -40, duration: 10, delay: 1, depth: 1.9 },
  { kind: "ring", top: "62%", right: "38%", size: 30, float: 22, rotate: 50, duration: 9, delay: 1.6, depth: 2.4 },
  { kind: "dot", top: "24%", left: "13%", size: 14, float: 40, duration: 6, delay: 0.5, depth: 2.6 },
  { kind: "dot", bottom: "28%", right: "16%", size: 10, float: 30, duration: 7, delay: 1.2, depth: 3 },
  { kind: "dot", top: "52%", left: "26%", size: 8, float: 34, duration: 8, delay: 0.9, depth: 3.4 },
  { kind: "square", top: "58%", right: "22%", size: 34, float: 30, rotate: 120, duration: 12, delay: 0.8, depth: 1.4 },
  { kind: "square", top: "20%", left: "30%", size: 20, float: 26, rotate: -90, duration: 11, delay: 1.9, depth: 2 },
  { kind: "plus", top: "10%", left: "46%", size: 30, float: 24, rotate: 90, duration: 9, delay: 0.3, depth: 2.2 },
  { kind: "plus", bottom: "22%", right: "30%", size: 22, float: 20, rotate: -80, duration: 10, delay: 1.4, depth: 2.5 },
  { kind: "triangle", bottom: "12%", left: "36%", size: 30, float: 30, rotate: -120, duration: 12, delay: 0.9, depth: 1.8 },
  { kind: "triangle", top: "30%", right: "26%", size: 22, float: 24, rotate: 140, duration: 13, delay: 2, depth: 2.1 },
]

const MORPHS = [
  "42% 58% 63% 37% / 55% 38% 62% 45%",
  "62% 38% 40% 60% / 42% 62% 38% 58%",
  "38% 62% 55% 45% / 63% 45% 55% 37%",
  "42% 58% 63% 37% / 55% 38% 62% 45%",
]

function palette(tone: Tone) {
  switch (tone) {
    case "dark":
      return { stroke: "rgba(255,255,255,0.16)", accent: "#3d8bff", soft: "rgba(0,102,255,0.28)", tri: "rgba(0,102,255,0.30)" }
    case "blue":
      return { stroke: "rgba(255,255,255,0.34)", accent: "#ffffff", soft: "rgba(255,255,255,0.20)", tri: "rgba(255,255,255,0.22)" }
    case "light":
    default:
      return { stroke: "rgba(0,102,255,0.24)", accent: "#0066FF", soft: "rgba(0,102,255,0.14)", tri: "rgba(0,102,255,0.14)" }
  }
}

function ShapeVisual({ s, tone }: { s: Shape; tone: Tone }) {
  const c = palette(tone)
  if (s.kind === "ring") return <div style={{ width: s.size, height: s.size, borderRadius: 9999, border: `2px solid ${c.stroke}` }} />
  if (s.kind === "dot") return <div style={{ width: s.size, height: s.size, borderRadius: 9999, background: c.accent, boxShadow: `0 0 12px ${c.soft}` }} />
  if (s.kind === "square") return <div style={{ width: s.size, height: s.size, borderRadius: 8, border: `2px solid ${c.stroke}` }} />
  if (s.kind === "plus")
    return (
      <div style={{ width: s.size, height: s.size, position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: 2, background: c.stroke, transform: "translateY(-50%)" }} />
        <div style={{ position: "absolute", left: "50%", top: 0, height: "100%", width: 2, background: c.stroke, transform: "translateX(-50%)" }} />
      </div>
    )
  return (
    <div style={{ width: 0, height: 0, borderLeft: `${s.size / 2}px solid transparent`, borderRight: `${s.size / 2}px solid transparent`, borderBottom: `${s.size}px solid ${c.tri}` }} />
  )
}

function FloatingShape({
  s,
  tone,
  reduce,
  mx,
  my,
}: {
  s: Shape
  tone: Tone
  reduce: boolean
  mx: MotionValue<number>
  my: MotionValue<number>
}) {
  const c = palette(tone)
  const px = useTransform(mx, (v) => v * s.depth * 26)
  const py = useTransform(my, (v) => v * s.depth * 26)
  const pos = { position: "absolute" as const, top: s.top, left: s.left, right: s.right, bottom: s.bottom }

  // Morphing blob
  if (s.kind === "blob") {
    return (
      <motion.div style={{ ...pos, x: px, y: py }}>
        <motion.div
          animate={reduce ? undefined : { y: [0, -s.float, 0], x: s.drift ? [0, s.drift, 0] : undefined, borderRadius: MORPHS }}
          transition={{ duration: s.duration, repeat: Infinity, ease: "easeInOut", delay: s.delay ?? 0 }}
          style={{ width: s.size, height: s.size, background: c.soft, filter: "blur(22px)", borderRadius: MORPHS[0] }}
        />
      </motion.div>
    )
  }

  if (reduce) {
    return (
      <div style={pos}>
        <ShapeVisual s={s} tone={tone} />
      </div>
    )
  }

  return (
    <motion.div style={{ ...pos, x: px, y: py }}>
      <motion.div
        animate={{ y: [0, -s.float, 0], x: s.drift ? [0, s.drift, 0] : undefined, rotate: s.rotate ? [0, s.rotate, 0] : undefined }}
        transition={{ duration: s.duration, repeat: Infinity, ease: "easeInOut", delay: s.delay ?? 0 }}
      >
        <ShapeVisual s={s} tone={tone} />
      </motion.div>
    </motion.div>
  )
}

export default function FloatingShapes({ tone = "light", interactive = false }: { tone?: Tone; interactive?: boolean }) {
  const reduce = useReducedMotion() ?? false
  const mxRaw = useMotionValue(0)
  const myRaw = useMotionValue(0)
  const mx = useSpring(mxRaw, { stiffness: 50, damping: 18 })
  const my = useSpring(myRaw, { stiffness: 50, damping: 18 })

  useEffect(() => {
    if (!interactive || reduce) return
    const onMove = (e: PointerEvent) => {
      mxRaw.set((e.clientX / window.innerWidth - 0.5) * 2)
      myRaw.set((e.clientY / window.innerHeight - 0.5) * 2)
    }
    window.addEventListener("pointermove", onMove)
    return () => window.removeEventListener("pointermove", onMove)
  }, [interactive, reduce, mxRaw, myRaw])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {SHAPES.map((s, i) => (
        <FloatingShape key={i} s={s} tone={tone} reduce={reduce} mx={mx} my={my} />
      ))}
    </div>
  )
}
