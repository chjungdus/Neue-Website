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
        <h3 className="text-[#111827] font-bold text-2xl mb-3">Anfrage eingegangen!</h3>
        <p className="text-[#6b7280] text-lg max-w-md mx-auto">
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
                  ? "bg-[#2563eb] text-white"
                  : s < step
                  ? "bg-[#dcfce7] text-[#10b981] border border-[#10b981]/30"
                  : "bg-gray-100 text-[#9ca3af] border border-gray-200"
              }`}
            >
              {s < step ? "✓" : s}
            </div>
            {s < 3 && (
              <div
                className={`h-px flex-1 w-16 transition-all ${s < step ? "bg-[#10b981]/30" : "bg-gray-200"}`}
              />
            )}
          </div>
        ))}
        <span className="text-[#9ca3af] text-sm ml-2">Schritt {step} von 3</span>
      </div>

      {step === 1 && (
        <div>
          <h2 className="text-[#111827] font-bold text-2xl mb-2">Welche Art Projekt planen Sie?</h2>
          <p className="text-[#6b7280] text-sm mb-8">Wählen Sie eine Kategorie aus – das hilft uns, das richtige Team für Sie zusammenzustellen.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {projectTypes.map((type) => {
              const Icon = type.icon
              return (
                <button
                  key={type.value}
                  onClick={() => setProjectType(type.value)}
                  className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                    projectType === type.value
                      ? "border-[#2563eb]/60 bg-[#eff6ff]"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    projectType === type.value ? "bg-[#2563eb]/15" : "bg-gray-100"
                  }`}>
                    <Icon size={18} className={projectType === type.value ? "text-[#2563eb]" : "text-[#6b7280]"} />
                  </div>
                  <div>
                    <p className="text-[#111827] font-medium text-sm">{type.label}</p>
                    <p className="text-[#6b7280] text-xs">{type.desc}</p>
                  </div>
                </button>
              )
            })}
          </div>
          <button
            onClick={() => setStep(2)}
            disabled={!projectType}
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-full transition-colors disabled:opacity-40 flex items-center gap-2"
          >
            Weiter <ArrowRight size={16} />
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-[#111827] font-bold text-2xl mb-2">Budget & Zeitrahmen</h2>
          <p className="text-[#6b7280] text-sm mb-8">Damit wir das passende Angebot erstellen können.</p>

          <div className="mb-8">
            <p className="text-[#374151] font-medium text-sm mb-4">Geplantes Budget</p>
            <div className="grid grid-cols-2 gap-3">
              {budgets.map((b) => (
                <button
                  key={b.value}
                  onClick={() => setBudget(b.value)}
                  className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                    budget === b.value
                      ? "border-[#2563eb]/60 bg-[#eff6ff] text-[#2563eb]"
                      : "border-gray-200 bg-white text-[#374151] hover:border-gray-300"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-[#374151] font-medium text-sm mb-4">Gewünschter Zeitrahmen</p>
            <div className="grid grid-cols-2 gap-3">
              {timelines.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setTimeline(t.value)}
                  className={`p-3 rounded-xl border text-sm font-medium transition-all ${
                    timeline === t.value
                      ? "border-[#2563eb]/60 bg-[#eff6ff] text-[#2563eb]"
                      : "border-gray-200 bg-white text-[#374151] hover:border-gray-300"
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
              className="flex items-center gap-2 text-[#6b7280] hover:text-[#111827] transition-colors font-medium px-4 py-3"
            >
              <ArrowLeft size={16} /> Zurück
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!budget || !timeline}
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-full transition-colors disabled:opacity-40 flex items-center gap-2"
            >
              Weiter <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-[#111827] font-bold text-2xl mb-2">Fast geschafft!</h2>
          <p className="text-[#6b7280] text-sm mb-8">Beschreiben Sie Ihr Projekt kurz und hinterlassen Sie Ihre Kontaktdaten.</p>

          <div className="flex flex-col gap-5 mb-8">
            <div>
              <label className="text-[#374151] text-sm font-medium block mb-2">Projektbeschreibung *</label>
              <textarea
                {...register("description")}
                rows={4}
                placeholder="Was soll die Website leisten? Welche Ziele haben Sie? Gibt es besondere Anforderungen?"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#2563eb]/60 focus:ring-1 focus:ring-[#2563eb]/20 transition-colors text-sm resize-none"
              />
              {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-[#374151] text-sm font-medium block mb-2">Ihr Name *</label>
                <input
                  {...register("name")}
                  placeholder="Max Mustermann"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#2563eb]/60 focus:ring-1 focus:ring-[#2563eb]/20 transition-colors text-sm"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-[#374151] text-sm font-medium block mb-2">E-Mail *</label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="max@beispiel.de"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#2563eb]/60 focus:ring-1 focus:ring-[#2563eb]/20 transition-colors text-sm"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label className="text-[#374151] text-sm font-medium block mb-2">Telefon (optional)</label>
              <input
                {...register("phone")}
                type="tel"
                placeholder="+49 89 ..."
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#2563eb]/60 focus:ring-1 focus:ring-[#2563eb]/20 transition-colors text-sm"
              />
            </div>
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-4">
              <AlertCircle size={16} />
              Fehler beim Senden. Bitte versuchen Sie es erneut.
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex items-center gap-2 text-[#6b7280] hover:text-[#111827] transition-colors font-medium px-4 py-3"
            >
              <ArrowLeft size={16} /> Zurück
            </button>
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-full transition-colors disabled:opacity-60 flex items-center gap-2"
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
