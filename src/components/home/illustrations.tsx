"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { Check, Search } from "lucide-react"

// Small interface drawings for the problem and service cards. They are drawn in
// code in the site's own colours and play once when they scroll into view.

const ease = [0.22, 1, 0.36, 1] as const

function useOnce<T extends Element>() {
  const ref = useRef<T>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  return [ref, inView] as const
}

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-44 overflow-hidden rounded-xl border border-[#0a0a0f]/[0.07] bg-[#F6F5F1] ${className}`}
    >
      {children}
    </div>
  )
}

// 01: visitors rise, enquiries stay at zero
export function VisitorsChart() {
  const [ref, inView] = useOnce<HTMLDivElement>()
  return (
    <div ref={ref}>
      <Panel className="px-5 pt-4">
        <div className="flex items-center gap-4 text-[11px] font-bold">
          <span className="flex items-center gap-1.5 text-[#0066FF]">
            <span className="h-2 w-2 rounded-full bg-[#0066FF]" /> Besucher
          </span>
          <span className="flex items-center gap-1.5 text-[#0a0a0f]/45">
            <span className="h-2 w-2 rounded-full bg-[#0a0a0f]/30" /> Anfragen
          </span>
        </div>
        <svg viewBox="0 0 300 110" className="mt-2 w-full" preserveAspectRatio="none">
          {[20, 50, 80].map((y) => (
            <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="#0a0a0f" strokeOpacity="0.06" />
          ))}
          <motion.path
            d="M0 95 C 40 90, 60 78, 90 74 S 140 60, 170 52 S 230 30, 300 12"
            fill="none"
            stroke="#0066FF"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 1.6, ease }}
          />
          <motion.path
            d="M0 104 L 300 104"
            fill="none"
            stroke="#0a0a0f"
            strokeOpacity="0.3"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : {}}
            transition={{ duration: 1.6, ease, delay: 0.2 }}
          />
        </svg>
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.4 }}
          className="absolute bottom-5 right-4 rounded-md bg-white px-2 py-1 text-[11px] font-bold text-[#0a0a0f]/60 shadow-sm"
        >
          0 Anfragen
        </motion.span>
      </Panel>
    </div>
  )
}

// 02: a search where "your business" sits on page two
export function BuriedResult() {
  const [ref, inView] = useOnce<HTMLDivElement>()
  return (
    <div ref={ref}>
      <Panel className="px-4 pt-4">
        <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
          <Search size={13} className="text-[#0a0a0f]/40" />
          <TypedText text="Friseur in der Nähe" start={inView} className="text-[12px] font-semibold text-[#0a0a0f]/70" />
        </div>
        <div className="mt-3 space-y-2">
          {[0.9, 0.75, 0.82].map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.9 + i * 0.12, duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <span className="h-5 w-5 flex-none rounded bg-[#0a0a0f]/10" />
              <span className="h-2 rounded-full bg-[#0a0a0f]/15" style={{ width: `${w * 80}%` }} />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute inset-x-4 bottom-3 flex items-center justify-between rounded-lg border border-dashed border-[#0a0a0f]/20 px-3 py-1.5"
        >
          <span className="text-[11px] font-bold text-[#0a0a0f]/40">Ihr Betrieb</span>
          <span className="text-[11px] font-bold text-[#0a0a0f]/40">Seite 2</span>
        </motion.div>
      </Panel>
    </div>
  )
}

// 03: a phone stuck loading
export function SlowPhone() {
  const [ref, inView] = useOnce<HTMLDivElement>()
  return (
    <div ref={ref}>
      <Panel className="flex items-end justify-center">
        <div className="relative h-40 w-24 translate-y-6 rounded-[18px] border-[5px] border-[#0a0a0f] bg-white">
          <span className="absolute left-1/2 top-1.5 h-1 w-8 -translate-x-1/2 rounded-full bg-[#0a0a0f]/80" />
          <div className="mt-6 px-2.5">
            <div className="h-1.5 overflow-hidden rounded-full bg-[#0a0a0f]/10">
              <motion.div
                className="h-full rounded-full bg-[#0066FF]"
                initial={{ width: "0%" }}
                animate={inView ? { width: ["0%", "38%", "41%", "43%"] } : {}}
                transition={{ duration: 3, times: [0, 0.3, 0.7, 1], ease: "easeOut" }}
              />
            </div>
            <motion.div
              className="mx-auto mt-5 h-7 w-7 rounded-full border-[3px] border-[#0a0a0f]/10 border-t-[#0066FF]"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p className="mt-2 text-center text-[9px] font-bold text-[#0a0a0f]/40">Lädt …</p>
          </div>
        </div>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2.2, duration: 0.4, ease }}
          className="absolute right-4 top-4 rounded-md bg-white px-2 py-1 text-[11px] font-bold text-[#0a0a0f]/60 shadow-sm"
        >
          Besucher weg
        </motion.span>
      </Panel>
    </div>
  )
}

function TypedText({ text, start, className }: { text: string; start: boolean; className?: string }) {
  const reduce = useReducedMotion()
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!start) return
    if (reduce) {
      setN(text.length)
      return
    }
    let i = 0
    const t = setInterval(() => {
      i += 1
      setN(i)
      if (i >= text.length) clearInterval(t)
    }, 45)
    return () => clearInterval(t)
  }, [start, text, reduce])
  return (
    <span className={className}>
      {text.slice(0, n)}
      <span className="ml-px inline-block h-3 w-px translate-y-0.5 animate-pulse bg-[#0a0a0f]/60" />
    </span>
  )
}

// Service: a fixed-price quote that ticks itself off
export function QuoteCard() {
  const [ref, inView] = useOnce<HTMLDivElement>()
  const rows = ["Individuelles Design", "Umsetzung & Technik", "Grundlagen für Google"]
  return (
    <div ref={ref} aria-hidden="true" className="h-44 rounded-xl bg-white/[0.06] p-4 ring-1 ring-white/10">
      <div className="flex items-center justify-between text-[11px] font-bold text-white/50">
        <span>Angebot · Festpreis</span>
        <span>Pro</span>
      </div>
      <ul className="mt-3 space-y-2">
        {rows.map((r, i) => (
          <motion.li
            key={r}
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.18, duration: 0.4 }}
            className="flex items-center gap-2 text-[12px] font-semibold text-white/85"
          >
            <span className="grid h-4 w-4 place-items-center rounded-full bg-[#0066FF]">
              <Check size={10} strokeWidth={3.5} />
            </span>
            {r}
          </motion.li>
        ))}
      </ul>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.85, duration: 0.45, ease }}
        className="mt-3 flex items-center justify-between border-t border-white/10 pt-3"
      >
        <span className="rounded-full bg-[#0066FF]/20 px-2 py-0.5 text-[10px] font-bold text-[#7fb0ff]">
          Zahlung nach Freigabe
        </span>
        <span className="text-[20px] font-extrabold text-white">399 €</span>
      </motion.div>
    </div>
  )
}

// Service: your business climbs to the top of the results
export function RankClimb() {
  const [ref, inView] = useOnce<HTMLDivElement>()
  const [order, setOrder] = useState(["a", "b", "you"])
  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => setOrder(["you", "a", "b"]), 1300)
    return () => clearTimeout(t)
  }, [inView])
  return (
    <div ref={ref}>
      <Panel className="px-4 pt-4">
        <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
          <Search size={13} className="text-[#0a0a0f]/40" />
          <TypedText text="Website Düsseldorf" start={inView} className="text-[12px] font-semibold text-[#0a0a0f]/70" />
        </div>
        <ul className="mt-3 space-y-2">
          {order.map((id) => (
            <motion.li
              key={id}
              layout
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${
                id === "you" ? "bg-white shadow-[0_6px_16px_-8px_rgba(0,102,255,0.5)] ring-1 ring-[#0066FF]/30" : ""
              }`}
            >
              <span className={`h-4 w-4 flex-none rounded ${id === "you" ? "bg-[#0066FF]" : "bg-[#0a0a0f]/10"}`} />
              {id === "you" ? (
                <span className="text-[11px] font-bold text-[#0a0a0f]">Ihr Betrieb</span>
              ) : (
                <span className="h-2 rounded-full bg-[#0a0a0f]/15" style={{ width: id === "a" ? "60%" : "48%" }} />
              )}
            </motion.li>
          ))}
        </ul>
      </Panel>
    </div>
  )
}

// Service: pick a slot, booking confirmed
export function BookingSlots() {
  const [ref, inView] = useOnce<HTMLDivElement>()
  const days = ["Mo", "Di", "Mi", "Do", "Fr"]
  const slots = ["09:00", "11:30", "14:00", "16:30"]
  return (
    <div ref={ref}>
      <Panel className="p-4">
        <div className="grid grid-cols-5 gap-1.5 text-center">
          {days.map((d, i) => (
            <span
              key={d}
              className={`rounded-md py-1 text-[11px] font-bold ${
                i === 2 ? "bg-[#0a0a0f] text-white" : "bg-white text-[#0a0a0f]/50"
              }`}
            >
              {d}
            </span>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-2 gap-1.5">
          {slots.map((s, i) => (
            <motion.span
              key={s}
              initial={false}
              animate={
                inView && i === 2
                  ? { backgroundColor: "#0066FF", color: "#ffffff", scale: [1, 1.06, 1] }
                  : { backgroundColor: "#ffffff", color: "rgba(10,10,15,0.6)" }
              }
              transition={{ delay: 0.8, duration: 0.4 }}
              className="rounded-md py-1.5 text-center text-[11px] font-bold"
            >
              {s}
            </motion.span>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.3, duration: 0.45, ease }}
          className="absolute inset-x-4 bottom-3 flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-[0_8px_20px_-10px_rgba(10,10,15,0.4)]"
        >
          <span className="grid h-5 w-5 place-items-center rounded-full bg-[#0066FF] text-white">
            <Check size={11} strokeWidth={3.5} />
          </span>
          <span className="text-[11px] font-bold text-[#0a0a0f]">Termin gebucht · Mi, 14:00</span>
        </motion.div>
      </Panel>
    </div>
  )
}
