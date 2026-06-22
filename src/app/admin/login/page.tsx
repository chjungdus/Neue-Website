"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Zap, Lock } from "lucide-react"

export default function AdminLoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push("/admin")
      router.refresh()
    } else {
      setError(true)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#06070f] px-6">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2 font-bold text-white mb-10 justify-center">
          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
            <Zap size={18} className="text-white" />
          </div>
          <span className="text-xl">Admin-Bereich</span>
        </div>

        <div className="bg-[#0e0f1c] border border-white/6 rounded-2xl p-8">
          <div className="flex items-center gap-2 text-[#8b8da0] text-sm mb-6">
            <Lock size={14} />
            Passwort eingeben, um fortzufahren
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin-Passwort"
              className="w-full bg-[#181929] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#4a4b60] focus:outline-none focus:border-[#6366f1]/60 transition-colors"
            />
            {error && (
              <p className="text-red-400 text-sm">Falsches Passwort.</p>
            )}
            <button
              type="submit"
              disabled={loading || !password}
              className="gradient-bg text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Prüfen..." : "Anmelden"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
