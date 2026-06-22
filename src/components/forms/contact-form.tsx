"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

const schema = z.object({
  name: z.string().min(2, "Mindestens 2 Zeichen"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  subject: z.string().min(3, "Mindestens 3 Zeichen"),
  message: z.string().min(20, "Bitte schreiben Sie mindestens 20 Zeichen"),
})

type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus("loading")
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
      reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#0e0f1c] border border-[#10b981]/30 rounded-2xl p-10 text-center">
        <CheckCircle2 size={48} className="text-[#10b981] mx-auto mb-4" />
        <h3 className="text-white font-bold text-xl mb-2">Nachricht gesendet!</h3>
        <p className="text-[#8b8da0] text-sm">
          Wir melden uns innerhalb von 24 Stunden bei Ihnen.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[#6366f1] text-sm hover:text-[#a855f7] transition-colors"
        >
          Weitere Nachricht senden
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="text-[#c4c5d6] text-sm font-medium block mb-2">Name *</label>
          <input
            {...register("name")}
            placeholder="Max Mustermann"
            className="w-full bg-[#0e0f1c] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#4a4b60] focus:outline-none focus:border-[#6366f1]/60 transition-colors text-sm"
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="text-[#c4c5d6] text-sm font-medium block mb-2">E-Mail *</label>
          <input
            {...register("email")}
            type="email"
            placeholder="max@beispiel.de"
            className="w-full bg-[#0e0f1c] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#4a4b60] focus:outline-none focus:border-[#6366f1]/60 transition-colors text-sm"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="text-[#c4c5d6] text-sm font-medium block mb-2">Betreff *</label>
        <input
          {...register("subject")}
          placeholder="Worum geht es?"
          className="w-full bg-[#0e0f1c] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#4a4b60] focus:outline-none focus:border-[#6366f1]/60 transition-colors text-sm"
        />
        {errors.subject && (
          <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label className="text-[#c4c5d6] text-sm font-medium block mb-2">Nachricht *</label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Beschreiben Sie Ihr Anliegen..."
          className="w-full bg-[#0e0f1c] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#4a4b60] focus:outline-none focus:border-[#6366f1]/60 transition-colors text-sm resize-none"
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
          <AlertCircle size={16} />
          Fehler beim Senden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per E-Mail.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="gradient-bg text-white font-semibold px-6 py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <Send size={16} />
            Nachricht senden
          </>
        )}
      </button>
    </form>
  )
}
