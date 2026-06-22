"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, Globe, ShoppingBag, Smartphone, Lightbulb } from "lucide-react"

const projectTypes = [
  { value: "landing_page", label: "Landing Page", icon: Globe, desc: "Eine Seite, die konvertiert" },
  { value: "website", label: "Unternehmens-Website", icon: Globe, desc: "Professioneller Auftritt" },
  { value: "ecommerce", label: "Online-Shop", icon: ShoppingBag, desc: "Produkte online verkaufen" },
  { value: "webapp", label: "Web-App", icon: Smartphone, desc: "Individuelle Anwendung" },
  { value: "sonstiges", label: "Sonstiges", icon: Lightbulb, desc: "Etwas anderes?" },
]

const budgets = [
  { value: "unter_2000", label: "Unter 2.000 €" },
  { value: "2000_5000", label: "2.000 – 5.000 €" },
  { value: "5000_10000", label: "5.000 – 10.000 €" },
  { value: "ueber_10000", label: "Über 10.000 €" },
]

const timelines = [
  { value: "so_schnell_wie_moeglich", label: "So schnell wie möglich" },
  { value: "1_monat", label: "Innerhalb 1 Monat" },
  { value: "2_3_monate", label: "2 – 3 Monate" },
  { value: "kein_druck", label: "Kein Zeitdruck" },
]

const step3Schema = z.object({
  description: z.string().min(20, "Bitte beschreiben Sie Ihr Projekt (mind. 20 Zeichen)"),
  name: z.string().min(2, "Mindestens 2 Zeichen"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z.string().optional(),
})

type Step3Data = z.infer<typeof step3Schema>

export default function InquiryWizard() {
  const searchParams = useSearchParams()
  const initialPackage = searchParams.get("paket")

  const [step, setStep] = useState(1)
  const [projectType, setProjectType] = useState("")
  const [budget, setBudget] = useState("")
  const [timeline, setTimeline] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step3Data>({ resolver: zodResolver(step3Schema) })

  const onSubmit = async (data: Step3Data) => {
    setStatus("loading")
    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          project_type: projectType,
          budget,
          timeline,
          ...data,
          package: initialPackage,
        }),
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
        <CheckCircle2 size={64} className="text-[#10b981] mx-auto mb-6" />
        <h3 className="text-white font-bold text-2xl mb-3">Anfrage eingegangen!</h3>
        <p className="text-[#8b8da0] text-lg max-w-md mx-auto">
          Vielen Dank! Wir melden uns innerhalb von 24 Stunden mit einem persönlichen Angebot.
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center gap-3 mb-10">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-3">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                s === step
                  ? "gradient-bg text-white"
                  : s < step
                  ? "bg-[#10b981]/20 text-[#10b981] border border-[#10b981]/30"
                  : "bg-white/6 text-[#8b8da0] border border-white/10"
              }`}
            >
              {s < step ? "✓" : s}
            </div>
            {s < 3 && (
              <div
                className={`h-px flex-1 w-16 transition-all ${s < step ? "bg-[#10b981]/30" : "bg-white/10"}`}
              />
            )}
          </div>
        ))}
        <span className="text-[#8b8da0] text-sm ml-2">Schritt {step} von 3</span>
      </div>

      {step === 1 && (
        <div>
          <h2 className="text-white font-bold text-2xl mb-2">Welche Art Projekt planen Sie?</h2>
          <p className="text-[#8b8da0] text-sm mb-8">Wählen Sie eine Kategorie aus – das hilft uns, das richtige Team für Sie zusammenzustellen.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {projectTypes.map((type) => {
              const Icon = type.icon
              return (
                <button
                  key={type.value}
                  onClick={() => setProjectType(type.value)}
                  className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                    projectType === type.value
                      ? "border-[#6366f1]/60 bg-[#6366f1]/10"
                      : "border-white/10 bg-white/4 hover:border-white/20"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    projectType === type.value ? "bg-[#6366f1]/20" : "bg-white/6"
                  }`}>
                    <Icon size={18} className={projectType === type.value ? "text-[#6366f1]" : "text-[#8b8da0]"} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{type.label}</p>
                    <p className="text-[#8b8da0] text-xs">{type.desc}</p>
                  </div>
                </button>
              )
            })}
          </div>
          <button
            onClick={() => setStep(2)}
            disabled={!projectType}
            className="gradient-bg text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-40 flex items-center gap-2"
          >
            Weiter <ArrowRight size={16} />
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-white font-bold text-2xl mb-2">Budget & Zeitrahmen</h2>
          <p className="text-[#8b8da0] text-sm mb-8">Damit wir das passende Angebot erstellen können.</p>

          <div className="mb-8">
            <p className="text-[#c4c5d6] font-medium text-sm mb-4">Geplantes Budget</p>
            <div className="grid grid-cols-2 gap-3">
              {budgets.map((b) => (
                <button
                  key={b.value}
                  onClick={() => setBudget(b.value)}
                  className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                    budget === b.value
                      ? "border-[#6366f1]/60 bg-[#6366f1]/10 text-white"
                      : "border-white/10 bg-white/4 text-[#8b8da0] hover:border-white/20"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-[#c4c5d6] font-medium text-sm mb-4">Gewünschter Zeitrahmen</p>
            <div className="grid grid-cols-2 gap-3">
              {timelines.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setTimeline(t.value)}
                  className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                    timeline === t.value
                      ? "border-[#6366f1]/60 bg-[#6366f1]/10 text-white"
                      : "border-white/10 bg-white/4 text-[#8b8da0] hover:border-white/20"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-2 text-[#8b8da0] hover:text-white transition-colors font-medium px-4 py-3"
            >
              <ArrowLeft size={16} /> Zurück
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!budget || !timeline}
              className="gradient-bg text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-40 flex items-center gap-2"
            >
              Weiter <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-white font-bold text-2xl mb-2">Fast geschafft!</h2>
          <p className="text-[#8b8da0] text-sm mb-8">Beschreiben Sie Ihr Projekt kurz und hinterlassen Sie Ihre Kontaktdaten.</p>

          <div className="flex flex-col gap-5 mb-8">
            <div>
              <label className="text-[#c4c5d6] text-sm font-medium block mb-2">Projektbeschreibung *</label>
              <textarea
                {...register("description")}
                rows={4}
                placeholder="Was soll die Website leisten? Welche Ziele haben Sie? Gibt es besondere Anforderungen?"
                className="w-full bg-[#0e0f1c] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#4a4b60] focus:outline-none focus:border-[#6366f1]/60 transition-colors text-sm resize-none"
              />
              {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description.message}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-[#c4c5d6] text-sm font-medium block mb-2">Ihr Name *</label>
                <input
                  {...register("name")}
                  placeholder="Max Mustermann"
                  className="w-full bg-[#0e0f1c] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#4a4b60] focus:outline-none focus:border-[#6366f1]/60 transition-colors text-sm"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-[#c4c5d6] text-sm font-medium block mb-2">E-Mail *</label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="max@beispiel.de"
                  className="w-full bg-[#0e0f1c] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#4a4b60] focus:outline-none focus:border-[#6366f1]/60 transition-colors text-sm"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label className="text-[#c4c5d6] text-sm font-medium block mb-2">Telefon (optional)</label>
              <input
                {...register("phone")}
                type="tel"
                placeholder="+49 89 ..."
                className="w-full bg-[#0e0f1c] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#4a4b60] focus:outline-none focus:border-[#6366f1]/60 transition-colors text-sm"
              />
            </div>
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3 mb-4">
              <AlertCircle size={16} />
              Fehler beim Senden. Bitte versuchen Sie es erneut.
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex items-center gap-2 text-[#8b8da0] hover:text-white transition-colors font-medium px-4 py-3"
            >
              <ArrowLeft size={16} /> Zurück
            </button>
            <button
              type="submit"
              disabled={status === "loading"}
              className="gradient-bg text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center gap-2"
            >
              {status === "loading" ? (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Anfrage senden <ArrowRight size={16} /></>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
