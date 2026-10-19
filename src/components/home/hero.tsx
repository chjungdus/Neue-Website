"use client"

import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { motion } from "framer-motion"

const WA_TEXT = encodeURIComponent("Hallo Nexuzo, ich interessiere mich für eine Website.")
const WA_LINK = `https://wa.me/4917680257270?text=${WA_TEXT}`

const points = [
  "Festpreis, bevor es losgeht",
  "Live in vier Wochen",
  "Individuelles Design",
  "Bezahlt wird erst nach Freigabe",
]

// Real client sites, front to back. Screenshots live in /public/referenzen.
const shots = [
  { src: "/referenzen/milonga-640.webp", label: "milonga-foodtruck.de" },
  { src: "/referenzen/essah-640.webp", label: "essah-urfa.de" },
  { src: "/referenzen/limpiezas-640.webp", label: "limpiezas-el-valle.es" },
]

const facts = [
  { value: "ab 199 €", label: "Festpreis, netto" },
  { value: "4 Wochen", label: "bis Ihre Seite live ist" },
  { value: "24 h", label: "bis Sie ein Angebot haben" },
  { value: "2", label: "Gründer, keine Weitergabe" },
]

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export function WhatsAppIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43zm8.03-17.46A11.27 11.27 0 0 0 12.04.72C5.79.72.7 5.8.7 12.06c0 2 .52 3.95 1.52 5.67L.6 23.28l5.69-1.49a11.3 11.3 0 0 0 5.75 1.47h.01c6.25 0 11.34-5.09 11.34-11.34 0-3.03-1.18-5.88-3.32-8.02z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F6F5F1] pt-28 md:pt-36">
      {/* One soft blue light behind the screenshots, nothing else */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[640px] w-[640px] rounded-full bg-[#0066FF]/[0.07] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="flex flex-col justify-center"
        >
          <motion.p variants={rise} className="text-[15px] font-semibold text-[#0a0a0f]/60">
            Webdesign aus Düsseldorf · 3 Kundenseiten live
          </motion.p>

          <motion.h1
            variants={rise}
            className="mt-5 text-[38px] font-extrabold leading-[1.06] tracking-[-0.025em] text-[#0a0a0f] sm:text-[52px] lg:text-[58px]"
          >
            Ihre neue Website. Bezahlt wird erst, wenn sie Ihnen gefällt.
          </motion.h1>

          <motion.p variants={rise} className="mt-6 max-w-[34rem] text-[18px] leading-relaxed text-[#0a0a0f]/70">
            Wir sind Mateo und Zhuo Jun. Wir bauen Ihre Website zum Festpreis ab{" "}
            <strong className="font-bold text-[#0a0a0f]">199 €</strong>, zeigen Ihnen das fertige Ergebnis, und erst
            dann stellen wir eine Rechnung.
          </motion.p>

          <motion.ul variants={rise} className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15.5px] font-semibold text-[#0a0a0f]">
                <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-[#0066FF] text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={rise} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0066FF] px-6 py-4 text-[16px] font-bold text-white shadow-[0_8px_24px_-8px_rgba(0,102,255,0.6)] transition hover:bg-[#0057d9] active:translate-y-px"
            >
              <WhatsAppIcon size={20} />
              Per WhatsApp anfragen
            </a>
            <Link
              href="/preise"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#0a0a0f]/15 bg-white px-6 py-4 text-[16px] font-bold text-[#0a0a0f] transition hover:border-[#0a0a0f]/35"
            >
              Preise ansehen
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.p variants={rise} className="mt-4 text-[14px] text-[#0a0a0f]/55">
            Kostenlos und unverbindlich · Festpreis-Angebot in 24 Stunden
          </motion.p>
        </motion.div>

        {/* Real client sites, fanned like printed proofs on a desk */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[330px] w-full max-w-[520px] sm:h-[420px] lg:h-[500px]"
        >
          {shots
            .slice()
            .reverse()
            .map((s, i) => {
              const pos = [
                "left-[14%] top-0 w-[78%] rotate-[5deg]",
                "left-0 top-[9%] w-[80%] -rotate-[4deg]",
                "left-[8%] top-[20%] w-[86%] rotate-0",
              ][i]
              return (
                <figure
                  key={s.src}
                  className={`absolute ${pos} overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_30px_60px_-20px_rgba(10,10,15,0.35)]`}
                >
                  <div className="flex items-center gap-1.5 border-b border-black/5 bg-[#f2f2f0] px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-black/15" />
                    <span className="h-2 w-2 rounded-full bg-black/15" />
                    <span className="h-2 w-2 rounded-full bg-black/15" />
                    <span className="ml-2 truncate text-[11px] font-medium text-black/45">{s.label}</span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.src}
                    alt={i === 2 ? `Startseite von ${s.label}, von Nexuzo gebaut` : ""}
                    width={640}
                    height={400}
                    className="block aspect-[16/10] w-full object-cover object-top"
                  />
                </figure>
              )
            })}

          <div className="absolute -left-2 bottom-6 rounded-xl bg-white px-4 py-3 shadow-[0_16px_40px_-12px_rgba(10,10,15,0.3)] sm:-left-6 sm:bottom-10">
            <p className="text-[15px] font-extrabold text-[#0a0a0f]">Zahlung nach Freigabe</p>
            <p className="text-[13px] text-[#0a0a0f]/55">Erst sehen, dann bezahlen</p>
          </div>
          <div className="absolute -right-1 top-[46%] hidden rounded-xl bg-white px-4 py-3 shadow-[0_16px_40px_-12px_rgba(10,10,15,0.3)] sm:block">
            <p className="text-[15px] font-extrabold text-[#0066FF]">Echte Kundenseiten</p>
            <p className="text-[13px] text-[#0a0a0f]/55">Gebaut in Düsseldorf</p>
          </div>
        </motion.div>
      </div>

      {/* Facts strip */}
      <div className="relative mt-16 border-t border-[#0a0a0f]/10 bg-white md:mt-24">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-6 py-8 md:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="border-l-2 border-[#0066FF] pl-4">
              <dt className="sr-only">{f.label}</dt>
              <dd className="text-[26px] font-extrabold tracking-[-0.03em] text-[#0a0a0f] md:text-[30px]">{f.value}</dd>
              <dd className="text-[14px] text-[#0a0a0f]/60">{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
