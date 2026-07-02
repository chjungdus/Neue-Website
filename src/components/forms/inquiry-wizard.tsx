"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react"

const schema = z.object({
  description: z.string().min(10, "Bitte beschreiben Sie Ihr Projekt kurz (mind. 10 Zeichen)"),
  name: z.string().min(2, "Mindestens 2 Zeichen"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function InquiryWizard() {
  const searchParams = useSearchParams()
  const initialPackage = searchParams.get("paket")
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
        body: JSON.stringify({ ...data, package: initialPackage }),
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
          Vielen Dank! Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-5 mb-8">
        <div>
          <label className="text-[#374151] text-sm font-medium block mb-2">
            Was brauchen Sie? *
          </label>
          <textarea
            {...register("description")}
            rows={4}
            placeholder="Kurz beschreiben: Was soll die Website leisten? Haben Sie schon eine URL oder ein Vorbild?"
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#2563eb]/60 focus:ring-1 focus:ring-[#2563eb]/20 transition-colors text-sm resize-none"
          />
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="text-[#374151] text-sm font-medium block mb-2">Ihr Name *</label>
            <input
              {...register("name")}
              placeholder="Max Mustermann"
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#2563eb]/60 focus:ring-1 focus:ring-[#2563eb]/20 transition-colors text-sm"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="text-[#374151] text-sm font-medium block mb-2">E-Mail *</label>
            <input
              {...register("email")}
              type="email"
              placeholder="max@beispiel.de"
              className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#111827] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#2563eb]/60 focus:ring-1 focus:ring-[#2563eb]/20 transition-colors text-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="text-[#374151] text-sm font-medium block mb-2">
            WhatsApp / Telefon (optional)
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+49 176 ..."
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

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-6 py-3.5 rounded-full transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
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
