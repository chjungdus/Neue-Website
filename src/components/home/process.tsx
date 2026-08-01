"use client"

import { useRef, type ComponentType } from "react"
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion"
import FadeIn from "@/components/ui/fade-in"
import { Search, Palette, Code2, Rocket } from "lucide-react"

const ACCENT = "#0066FF"
const ACCENT_BG = "rgba(0, 102, 255,0.12)"

const steps = [
  {
    week: "Woche 1",
    icon: Search,
    title: "Discovery",
    body: "Wir lernen Ihr Unternehmen kennen. Am Ende steht ein verbindliches Angebot.",
    deliverable: "Sitemap · Fixes Angebot",
  },
  {
    week: "Woche 2",
    icon: Palette,
    title: "Design",
    body: "Vollständiger Entwurf. Feedbackrunden kostenlos.",
    deliverable: "Design zur Freigabe",
  },
  {
    week: "Woche 3",
    icon: Code2,
    title: "Entwicklung",
    body: "Design wird zu Code. Staging-Link zum Testen.",
    deliverable: "Staging-Link",
  },
  {
    week: "Woche 4",
    icon: Rocket,
    title: "Launch",
    body: "Testing auf allen Geräten, dann Go-Live. Datum eingehalten.",
    deliverable: "Launch · Übergabe",
  },
]

// A step's icon circle lights up as the scroll-drawn line reaches it.
function StepIcon({
  Icon,
  progress,
  threshold,
  size,
  dim,
  className = "",
}: {
  Icon: ComponentType<{ size?: number }>
  progress: MotionValue<number>
  threshold: number
  size: number
  dim: number
  className?: string
}) {
  const activation = useTransform(progress, [Math.max(0, threshold - 0.1), threshold + 0.02], [0, 1])
  const backgroundColor = useTransform(activation, [0, 1], ["rgba(10,10,15,0.04)", ACCENT_BG])
  const scale = useTransform(activation, [0, 1], [0.88, 1])
  const color = useTransform(activation, [0, 1], ["rgba(10,10,15,0.3)", ACCENT])

  return (
    <motion.div
      style={{ backgroundColor, scale, width: dim, height: dim }}
      className={`rounded-full flex items-center justify-center z-10 relative ring-4 ring-white ${className}`}
    >
      <motion.div style={{ color }} className="flex items-center justify-center">
        <Icon size={size} />
      </motion.div>
    </motion.div>
  )
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 0.75", "end 0.4"] })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 })
  const markerPos = useTransform(progress, [0, 1], ["0%", "100%"])

  return (
    <section ref={sectionRef} id="ablauf" className="py-14 md:py-16 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-black text-[#0a0a0f] mb-5 leading-tight">
              In 4 Wochen live.
              <br />
              <span className="text-[#0a0a0f]/45 font-normal text-3xl md:text-4xl">Wirklich.</span>
            </h2>
          </div>
        </FadeIn>

        {/* Desktop: horizontal timeline, drawn in as you scroll */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute top-[20px] left-[52px] right-[52px] h-3">
              <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 h-px bg-[#0a0a0f]/10" />
              <motion.div
                style={{ scaleX: progress, background: ACCENT }}
                className="absolute top-1/2 -translate-y-1/2 inset-x-0 h-px origin-left"
              />
              <motion.div
                style={{ left: markerPos, backgroundColor: ACCENT, boxShadow: `0 0 10px ${ACCENT}` }}
                className="absolute top-1/2 w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {steps.map((step, i) => {
                const Icon = step.icon
                const threshold = i / (steps.length - 1)
                return (
                  <FadeIn key={step.week} delay={i * 0.1}>
                    <div className="flex flex-col items-center">
                      <StepIcon Icon={Icon} progress={progress} threshold={threshold} size={22} dim={52} className="mb-6" />
                      <div className="bg-[#0a0a0f]/[0.03] border border-[#0a0a0f]/5 rounded-2xl p-6 w-full text-left">
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider mb-1 block"
                          style={{ color: ACCENT }}
                        >
                          {step.week}
                        </span>
                        <h3 className="text-[#0a0a0f] font-black text-lg mb-2">{step.title}</h3>
                        <p className="text-[#0a0a0f] text-sm leading-relaxed mb-4">{step.body}</p>
                        <span className="text-xs font-medium text-[#0a0a0f] bg-white border border-[#0a0a0f]/10 px-3 py-1.5 rounded-full inline-block">
                          {step.deliverable}
                        </span>
                      </div>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline, same scroll-drawn line */}
        <div className="md:hidden relative">
          <div className="absolute left-[18px] top-4 bottom-4 w-3">
            <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-px bg-[#0a0a0f]/10" />
            <motion.div
              style={{ scaleY: progress, background: ACCENT }}
              className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-px origin-top"
            />
            <motion.div
              style={{ top: markerPos, backgroundColor: ACCENT, boxShadow: `0 0 10px ${ACCENT}` }}
              className="absolute left-1/2 w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              const threshold = i / (steps.length - 1)
              return (
                <FadeIn key={step.week} delay={i * 0.1}>
                  <div className="grid grid-cols-[50px_1fr] gap-4 items-start">
                    <StepIcon Icon={Icon} progress={progress} threshold={threshold} size={20} dim={50} />
                    <div className="bg-[#0a0a0f]/[0.03] border border-[#0a0a0f]/5 rounded-2xl p-6">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider mb-0.5 block"
                        style={{ color: ACCENT }}
                      >
                        {step.week}
                      </span>
                      <h3 className="text-[#0a0a0f] font-black text-lg mb-2">{step.title}</h3>
                      <p className="text-[#0a0a0f] text-sm leading-relaxed mb-3">{step.body}</p>
                      <span className="text-xs font-medium text-[#0a0a0f] bg-white border border-[#0a0a0f]/10 px-3 py-1.5 rounded-full inline-block">
                        {step.deliverable}
                      </span>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
