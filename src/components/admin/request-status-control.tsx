"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const options: { value: "new" | "in_progress" | "done"; label: string }[] = [
  { value: "new", label: "Neu" },
  { value: "in_progress", label: "In Bearbeitung" },
  { value: "done", label: "Erledigt" },
]

export default function RequestStatusControl({ id, status }: { id: string; status: string }) {
  const [current, setCurrent] = useState(status)
  const [saving, setSaving] = useState(false)
  const router = useRouter()

  const update = async (value: string) => {
    setCurrent(value)
    setSaving(true)
    await fetch(`/api/admin/anfragen/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: value }),
    })
    setSaving(false)
    router.refresh()
  }

  return (
    <select
      value={current}
      disabled={saving}
      onChange={(e) => update(e.target.value)}
      className="text-xs font-medium px-3 py-1.5 rounded-full border bg-transparent disabled:opacity-50 focus:outline-none"
      style={{ color: "#0066FF", backgroundColor: "#0066FF10", borderColor: "#0066FF20" }}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value} className="bg-[#0a0a0f] text-white">
          {o.label}
        </option>
      ))}
    </select>
  )
}
