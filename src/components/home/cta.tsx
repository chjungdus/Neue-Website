"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Clock, Mail } from "lucide-react"
import { WhatsAppIcon } from "@/components/home/hero"

const options = [
  { id: "neu", label: "Neue Website", hint: "Festpreis ab 199 €" },
  { id: "relaunch", label: "Bestehende Seite erneuern", hint: "Relaunch" },
  { id: "shop", label: "Online-Shop oder Buchung", hint: "Bezahlen, Termine" },
  { id: "unsicher", label: "Noch unsicher", hint: "Wir beraten Sie" },
]

const promises = ["Kostenloses Erstgespräch", "Antwort innerhalb von 24 Stunden", "100 % unverbindlich", "Festpreis vor Projektstart"]

export default function CTA() {
  const [choice, setChoice] = useState<string | null>(null)
  const picked = options.find((o) => o.id === choice)
  const text = picked
    ? `Hallo Nexuzo, ich interessiere mich für: ${picked.label}. Können wir kurz sprechen?`
    : "Hallo Nexuzo, ich interessiere mich für eine Website."
  const href = `https://wa.me/4917680257270?text=${encodeURIComponent(text)}`

  return (
    <section id="kontakt" className="scroll-mt-16 bg-[#F6F5F1] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <div>
          <h2 className="text-[34px] font-extrabold leading-[1.06] tracking-[-0.025em] text-[#0a0a0f] sm:text-[44px] md:text-[52px]">
            Lassen Sie uns über Ihre Website sprechen.
          </h2>
          <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-[#0a0a0f]/65 md:text-[18px]">
            Schreiben Sie uns kurz, worum es geht. Sie bekommen innerhalb von 24 Stunden eine Antwort und ein
            schriftliches Festpreis-Angebot.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {promises.map((p) => (
              <li key={p} className="flex items-center gap-3 text-[15.5px] font-semibold text-[#0a0a0f]">
                <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-[#0066FF] text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 border-t border-[#0a0a0f]/10 pt-7 text-[15.5px] text-[#0a0a0f]/75">
            <a href="https://wa.me/4917680257270" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#0a0a0f]">
              <WhatsAppIcon size={18} className="text-[#0066FF]" /> +49 176 8025 7270
            </a>
            <a href="mailto:nexuzo.kontakt@gmail.com" className="flex items-center gap-3 hover:text-[#0a0a0f]">
              <Mail size={18} className="text-[#0066FF]" /> nexuzo.kontakt@gmail.com
            </a>
            <span className="flex items-center gap-3">
              <Clock size={18} className="text-[#0066FF]" /> Mo–Fr, 9–18 Uhr
            </span>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-7 shadow-[0_30px_70px_-30px_rgba(10,10,15,0.3)] sm:p-9">
          <p className="text-[22px] font-extrabold tracking-[-0.015em] text-[#0a0a0f]">Wobei können wir helfen?</p>
          <p className="mt-1 text-[15px] text-[#0a0a0f]/55">Wählen Sie aus, was am besten passt.</p>
          <fieldset className="mt-6">
            <legend className="sr-only">Ihr Vorhaben</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {options.map((o) => {
                const active = o.id === choice
                return (
                  <label
                    key={o.id}
                    className={`flex cursor-pointer items-start justify-between gap-3 rounded-xl border-2 p-4 transition ${
                      active ? "border-[#0066FF] bg-[#0066FF]/[0.05]" : "border-[#0a0a0f]/10 hover:border-[#0a0a0f]/25"
                    }`}
                  >
                    <span>
                      <span className="block text-[15.5px] font-bold text-[#0a0a0f]">{o.label}</span>
                      <span className="block text-[13.5px] text-[#0a0a0f]/55">{o.hint}</span>
                    </span>
                    <input
                      type="radio"
                      name="vorhaben"
                      value={o.id}
                      checked={active}
                      onChange={() => setChoice(o.id)}
                      className="mt-1 h-4 w-4 flex-none accent-[#0066FF]"
                    />
                  </label>
                )
              })}
            </div>
          </fieldset>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2.5 rounded-xl bg-[#0066FF] px-6 py-4 text-[16px] font-bold text-white shadow-[0_8px_24px_-8px_rgba(0,102,255,0.6)] transition hover:bg-[#0057d9] active:translate-y-px"
          >
            <WhatsAppIcon size={20} />
            Weiter per WhatsApp
          </a>
          <p className="mt-4 text-center text-[14px] text-[#0a0a0f]/55">
            Lieber per Formular?{" "}
            <Link href="/anfrage" className="font-bold text-[#0a0a0f] underline decoration-[#0066FF] decoration-2 underline-offset-4">
              Projekt anfragen
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
