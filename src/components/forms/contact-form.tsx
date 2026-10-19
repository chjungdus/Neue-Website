"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, Mail } from "@/components/stack/icons"
import { EMAIL } from "@/lib/site"

const schema = z.object({
  name: z.string().min(2, "Bitte mindestens 2 Zeichen."),
  email: z.string().email("Diese E-Mail-Adresse sieht nicht vollständig aus."),
  subject: z.string().min(3, "Bitte mindestens 3 Zeichen."),
  message: z.string().min(20, "Bitte schreiben Sie mindestens 20 Zeichen."),
})

type FormData = z.infer<typeof schema>

function Err({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null
  return (
    <p id={id} className="mt-2 w-fit bg-ink px-2 py-0.5 text-base font-bold text-paper">
      {msg}
    </p>
  )
}

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
      <div role="status" className="field-box p-8 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center border-2 border-ink bg-ink text-paper">
          <Check size={28} />
        </span>
        <h3 className="mt-5 text-[1.6rem]">Nachricht gesendet.</h3>
        <p className="mt-2">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn mt-6">
          Weitere Nachricht senden
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="kf-name" className="label">
            Name
          </label>
          <input
            id="kf-name"
            {...register("name")}
            autoComplete="name"
            placeholder="Max Mustermann"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "kf-name-err" : undefined}
            className="input"
          />
          <Err id="kf-name-err" msg={errors.name?.message} />
        </div>
        <div>
          <label htmlFor="kf-email" className="label">
            E-Mail
          </label>
          <input
            id="kf-email"
            {...register("email")}
            type="email"
            autoComplete="email"
            placeholder="max@beispiel.de"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "kf-email-err" : undefined}
            className="input"
          />
          <Err id="kf-email-err" msg={errors.email?.message} />
        </div>
      </div>
      <div>
        <label htmlFor="kf-subject" className="label">
          Betreff
        </label>
        <input
          id="kf-subject"
          {...register("subject")}
          placeholder="Worum geht es?"
          aria-invalid={errors.subject ? true : undefined}
          aria-describedby={errors.subject ? "kf-subject-err" : undefined}
          className="input"
        />
        <Err id="kf-subject-err" msg={errors.subject?.message} />
      </div>
      <div>
        <label htmlFor="kf-message" className="label">
          Nachricht
        </label>
        <textarea
          id="kf-message"
          {...register("message")}
          rows={5}
          placeholder="Beschreiben Sie Ihr Anliegen …"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "kf-message-err" : undefined}
          className="textarea"
        />
        <Err id="kf-message-err" msg={errors.message?.message} />
      </div>
      <p className="text-base">Alle Felder sind Pflichtfelder.</p>

      {status === "error" && (
        <div role="alert" className="dither-12 border-2 border-ink p-4">
          <p className="w-fit bg-paper px-1 font-extrabold text-ink">Die Nachricht ist nicht angekommen.</p>
          <p className="mt-1 w-fit bg-paper px-1">
            Bitte versuchen Sie es noch einmal oder schreiben Sie direkt an{" "}
            <a href={`mailto:${EMAIL}`} className="link">
              {EMAIL}
            </a>
            .
          </p>
        </div>
      )}

      <button type="submit" disabled={status === "loading"} aria-busy={status === "loading"} className="btn btn-default self-start">
        <Mail size={16} />
        {status === "loading" ? "Wird gesendet …" : "Nachricht senden"}
      </button>
    </form>
  )
}
