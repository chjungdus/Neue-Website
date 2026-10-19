"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, Check } from "@/components/stack/icons"
import { projectTypeOptions, budgetOptions, timelineOptions, packageOptions } from "@/lib/anfrage-options"

const schema = z
  .object({
    project_type: z.string().min(1, "Bitte eine Art auswählen."),
    budget: z.string().min(1, "Bitte ein Budget auswählen."),
    timeline: z.string().min(1, "Bitte einen Zeitrahmen auswählen."),
    description: z.string().optional(),
    business_link: z.string().optional(),
    name: z.string().min(2, "Bitte mindestens 2 Zeichen."),
    email: z.string().email("Diese E-Mail-Adresse sieht nicht vollständig aus."),
    phone: z.string().optional(),
  })
  .refine(
    (data) => (data.description?.trim().length ?? 0) > 0 || (data.business_link?.trim().length ?? 0) > 0,
    { message: "Bitte kurz beschreiben oder oben einen Link angeben.", path: ["description"] },
  )

type FormData = z.infer<typeof schema>

function Err({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null
  return (
    <p id={id} className="mt-2 w-fit bg-ink px-2 py-0.5 text-base font-bold text-paper">
      {msg}
    </p>
  )
}

export default function InquiryWizard() {
  const searchParams = useSearchParams()
  const initialPackage = searchParams.get("paket")
  const [pkg, setPkg] = useState<string | null>(
    packageOptions.some((p) => p.value === initialPackage) ? initialPackage : null,
  )
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus("loading")
    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, package: pkg }),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="field-box p-10 text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center border-2 border-ink bg-ink text-paper">
          <Check size={32} />
        </span>
        <h2 className="mt-6 text-[1.9rem]">Anfrage eingegangen.</h2>
        <p className="mx-auto mt-2 max-w-md">Vielen Dank! Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.</p>
      </div>
    )
  }

  const pkgChoices = [...packageOptions.map((p) => ({ value: p.value as string | null, label: p.label, sub: p.price })), { value: null, label: "Weiß ich noch nicht", sub: "Beraten Sie mich" }]

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-7">
      <fieldset>
        <legend className="label">
          Welches Paket interessiert Sie? <span className="font-normal">(optional)</span>
        </legend>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {pkgChoices.map((p) => {
            const active = pkg === p.value
            return (
              <button
                key={p.label}
                type="button"
                aria-pressed={active}
                onClick={() => setPkg(active && p.value ? null : p.value)}
                className="btn !h-auto !min-h-[64px] flex-col !items-start !gap-0 !px-3 !py-2.5 text-left"
              >
                <span className="font-extrabold">{p.label}</span>
                <span className="text-base font-normal">{p.sub}</span>
              </button>
            )
          })}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="af-type" className="label">
            Art des Projekts
          </label>
          <select id="af-type" {...register("project_type")} defaultValue="" className="select" aria-invalid={errors.project_type ? true : undefined} aria-describedby={errors.project_type ? "af-type-err" : undefined}>
            <option value="" disabled>
              Bitte wählen
            </option>
            {projectTypeOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <Err id="af-type-err" msg={errors.project_type?.message} />
        </div>
        <div>
          <label htmlFor="af-budget" className="label">
            Budget
          </label>
          <select id="af-budget" {...register("budget")} defaultValue="" className="select" aria-invalid={errors.budget ? true : undefined} aria-describedby={errors.budget ? "af-budget-err" : undefined}>
            <option value="" disabled>
              Bitte wählen
            </option>
            {budgetOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <Err id="af-budget-err" msg={errors.budget?.message} />
        </div>
        <div>
          <label htmlFor="af-time" className="label">
            Zeitrahmen
          </label>
          <select id="af-time" {...register("timeline")} defaultValue="" className="select" aria-invalid={errors.timeline ? true : undefined} aria-describedby={errors.timeline ? "af-time-err" : undefined}>
            <option value="" disabled>
              Bitte wählen
            </option>
            {timelineOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <Err id="af-time-err" msg={errors.timeline?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="af-link" className="label">
          Google-Maps-Link, Instagram oder Ihre bisherige Website
        </label>
        <input id="af-link" {...register("business_link")} type="text" placeholder="z. B. Link zu Ihrem Google-Maps-Eintrag" className="input" aria-describedby="af-link-hint" />
        <p id="af-link-hint" className="mt-2 text-base">
          Ein Link reicht oft schon, dann finden wir alles Wichtige selbst.
        </p>
      </div>

      <div>
        <label htmlFor="af-desc" className="label">
          Kurz in eigenen Worten <span className="font-normal">(optional, wenn Sie oben einen Link angegeben haben)</span>
        </label>
        <textarea
          id="af-desc"
          {...register("description")}
          rows={4}
          placeholder="Was soll die Website leisten? Gibt es ein Vorbild, das Ihnen gefällt?"
          className="textarea"
          aria-invalid={errors.description ? true : undefined}
          aria-describedby={errors.description ? "af-desc-err" : undefined}
        />
        <Err id="af-desc-err" msg={errors.description?.message} />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="af-name" className="label">
            Ihr Name
          </label>
          <input id="af-name" {...register("name")} autoComplete="name" placeholder="Max Mustermann" className="input" aria-invalid={errors.name ? true : undefined} aria-describedby={errors.name ? "af-name-err" : undefined} />
          <Err id="af-name-err" msg={errors.name?.message} />
        </div>
        <div>
          <label htmlFor="af-email" className="label">
            E-Mail
          </label>
          <input id="af-email" {...register("email")} type="email" autoComplete="email" placeholder="max@beispiel.de" className="input" aria-invalid={errors.email ? true : undefined} aria-describedby={errors.email ? "af-email-err" : undefined} />
          <Err id="af-email-err" msg={errors.email?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="af-phone" className="label">
          WhatsApp oder Telefon <span className="font-normal">(optional)</span>
        </label>
        <input id="af-phone" {...register("phone")} type="tel" autoComplete="tel" placeholder="+49 176 …" className="input" />
      </div>

      {status === "error" && (
        <div role="alert" className="dither-12 border-2 border-ink p-4">
          <p className="w-fit bg-paper px-1 font-extrabold text-ink">Die Anfrage ist nicht angekommen.</p>
          <p className="mt-1 w-fit bg-paper px-1">Bitte versuchen Sie es noch einmal oder schreiben Sie uns per WhatsApp.</p>
        </div>
      )}

      <button type="submit" disabled={status === "loading"} aria-busy={status === "loading"} className="btn btn-default self-start">
        {status === "loading" ? "Wird gesendet …" : "Anfrage senden"}
        <ArrowRight size={14} />
      </button>
    </form>
  )
}
