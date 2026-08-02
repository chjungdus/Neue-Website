"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, CheckCircle2, AlertCircle, Check } from "lucide-react"
import { projectTypeOptions, budgetOptions, timelineOptions, packageOptions } from "@/lib/anfrage-options"

const schema = z
  .object({
    project_type: z.string().min(1, "Bitte auswählen"),
    budget: z.string().min(1, "Bitte auswählen"),
    timeline: z.string().min(1, "Bitte auswählen"),
    description: z.string().optional(),
    business_link: z.string().optional(),
    name: z.string().min(2, "Mindestens 2 Zeichen"),
    email: z.string().email("Ungültige E-Mail-Adresse"),
    phone: z.string().optional(),
  })
  .refine(
    (data) => (data.description?.trim().length ?? 0) > 0 || (data.business_link?.trim().length ?? 0) > 0,
    { message: "Bitte kurz beschreiben oder einen Link angeben", path: ["description"] }
  )

type FormData = z.infer<typeof schema>

const selectClass =
  "w-full bg-white border border-[#0a0a0f]/10 rounded-xl px-4 py-3 text-[#0a0a0f] focus:outline-none focus:border-[#0066FF]/60 focus:ring-1 focus:ring-[#0066FF]/20 transition-colors text-sm"

export default function InquiryWizard() {
  const searchParams = useSearchParams()
  const initialPackage = searchParams.get("paket")
  const [pkg, setPkg] = useState<string | null>(
    packageOptions.some((p) => p.value === initialPackage) ? initialPackage : null
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
      <div className="text-center py-12">
        <CheckCircle2 size={64} className="text-[#0066FF] mx-auto mb-6" />
        <h3 className="text-[#0a0a0f] font-bold text-2xl mb-3">Anfrage eingegangen!</h3>
        <p className="text-[#0a0a0f]/55 text-lg max-w-md mx-auto">
          Vielen Dank! Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5 mb-8">
        <div>
          <label className="text-[#0a0a0f] text-sm font-medium block mb-2">
            Welches Paket interessiert Sie? <span className="text-[#0a0a0f]/40 font-normal">(optional)</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {packageOptions.map((p) => (
              <button
                key={p.value}
                type="button"
                onClick={() => setPkg(pkg === p.value ? null : p.value)}
                className={`relative rounded-xl border px-3 py-3 text-left transition-colors ${
                  pkg === p.value
                    ? "border-[#0066FF] bg-[#0066FF]/5"
                    : "border-[#0a0a0f]/10 hover:border-[#0a0a0f]/25"
                }`}
              >
                {pkg === p.value && (
                  <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#0066FF] flex items-center justify-center">
                    <Check size={10} className="text-white" strokeWidth={3} />
                  </span>
                )}
                <div className="text-[#0a0a0f] font-bold text-sm">{p.label}</div>
                <div className="text-[#0a0a0f]/45 text-xs mt-0.5">{p.price}</div>
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPkg(null)}
              className={`rounded-xl border px-3 py-3 text-left transition-colors ${
                pkg === null ? "border-[#0066FF] bg-[#0066FF]/5" : "border-[#0a0a0f]/10 hover:border-[#0a0a0f]/25"
              }`}
            >
              <div className="text-[#0a0a0f] font-bold text-sm">Weiß ich noch nicht</div>
              <div className="text-[#0a0a0f]/45 text-xs mt-0.5">Beraten Sie mich</div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div>
            <label className="text-[#0a0a0f] text-sm font-medium block mb-2">Art des Projekts *</label>
            <select {...register("project_type")} defaultValue="" className={selectClass}>
              <option value="" disabled>Bitte wählen</option>
              {projectTypeOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            {errors.project_type && <p className="text-[#0066FF] text-xs mt-1">{errors.project_type.message}</p>}
          </div>
          <div>
            <label className="text-[#0a0a0f] text-sm font-medium block mb-2">Budget *</label>
            <select {...register("budget")} defaultValue="" className={selectClass}>
              <option value="" disabled>Bitte wählen</option>
              {budgetOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            {errors.budget && <p className="text-[#0066FF] text-xs mt-1">{errors.budget.message}</p>}
          </div>
          <div>
            <label className="text-[#0a0a0f] text-sm font-medium block mb-2">Zeitrahmen *</label>
            <select {...register("timeline")} defaultValue="" className={selectClass}>
              <option value="" disabled>Bitte wählen</option>
              {timelineOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            {errors.timeline && <p className="text-[#0066FF] text-xs mt-1">{errors.timeline.message}</p>}
          </div>
        </div>

        <div>
          <label className="text-[#0a0a0f] text-sm font-medium block mb-2">
            Google-Maps-Link, Instagram oder Ihre bisherige Website
          </label>
          <input
            {...register("business_link")}
            type="text"
            placeholder="z. B. Link zu Ihrem Google-Maps-Eintrag"
            className="w-full bg-white border border-[#0a0a0f]/10 rounded-xl px-4 py-3 text-[#0a0a0f] placeholder:text-[#0a0a0f]/40 focus:outline-none focus:border-[#0066FF]/60 focus:ring-1 focus:ring-[#0066FF]/20 transition-colors text-sm"
          />
          <p className="text-[#0a0a0f]/40 text-xs mt-1.5">
            Ein Link reicht oft schon, dann finden wir alles Wichtige selbst.
          </p>
        </div>

        <div>
          <label className="text-[#0a0a0f] text-sm font-medium block mb-2">
            Kurz in eigenen Worten <span className="text-[#0a0a0f]/40 font-normal">(optional, wenn Sie oben einen Link angegeben haben)</span>
          </label>
          <textarea
            {...register("description")}
            rows={4}
            placeholder="Was soll die Website leisten? Gibt es ein Vorbild, das Ihnen gefällt?"
            className="w-full bg-white border border-[#0a0a0f]/10 rounded-xl px-4 py-3 text-[#0a0a0f] placeholder:text-[#0a0a0f]/40 focus:outline-none focus:border-[#0066FF]/60 focus:ring-1 focus:ring-[#0066FF]/20 transition-colors text-sm resize-none"
          />
          {errors.description && (
            <p className="text-[#0066FF] text-xs mt-1">{errors.description.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="text-[#0a0a0f] text-sm font-medium block mb-2">Ihr Name *</label>
            <input
              {...register("name")}
              placeholder="Max Mustermann"
              className="w-full bg-white border border-[#0a0a0f]/10 rounded-xl px-4 py-3 text-[#0a0a0f] placeholder:text-[#0a0a0f]/40 focus:outline-none focus:border-[#0066FF]/60 focus:ring-1 focus:ring-[#0066FF]/20 transition-colors text-sm"
            />
            {errors.name && (
              <p className="text-[#0066FF] text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="text-[#0a0a0f] text-sm font-medium block mb-2">E-Mail *</label>
            <input
              {...register("email")}
              type="email"
              placeholder="max@beispiel.de"
              className="w-full bg-white border border-[#0a0a0f]/10 rounded-xl px-4 py-3 text-[#0a0a0f] placeholder:text-[#0a0a0f]/40 focus:outline-none focus:border-[#0066FF]/60 focus:ring-1 focus:ring-[#0066FF]/20 transition-colors text-sm"
            />
            {errors.email && (
              <p className="text-[#0066FF] text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="text-[#0a0a0f] text-sm font-medium block mb-2">
            WhatsApp / Telefon (optional)
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+49 176 ..."
            className="w-full bg-white border border-[#0a0a0f]/10 rounded-xl px-4 py-3 text-[#0a0a0f] placeholder:text-[#0a0a0f]/40 focus:outline-none focus:border-[#0066FF]/60 focus:ring-1 focus:ring-[#0066FF]/20 transition-colors text-sm"
          />
        </div>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-[#0066FF] text-sm bg-[#0066FF]/5 border border-[#0066FF]/20 rounded-xl px-4 py-3 mb-4">
          <AlertCircle size={16} />
          Fehler beim Senden. Bitte versuchen Sie es erneut.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#0066FF] hover:bg-[#0066FF]/85 text-white font-semibold px-6 py-3.5 rounded-full transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>Anfrage senden <ArrowRight size={16} /></>
        )}
      </button>
    </form>
  )
}
