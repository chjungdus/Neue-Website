import { getSupabase } from "@/lib/supabase"
import { mockProjects } from "@/lib/mock-data"
import { Inbox, Image, TrendingUp, Clock } from "lucide-react"

async function getStats() {
  const supabase = getSupabase()
  if (!supabase) {
    return { requests: 0, projects: mockProjects.length, newRequests: 0 }
  }

  const [{ count: requestCount }, { count: newCount }, { count: projectCount }] = await Promise.all([
    supabase.from("project_requests").select("id", { count: "exact", head: true }),
    supabase.from("project_requests").select("id", { count: "exact", head: true }).eq("status", "new"),
    supabase.from("portfolio_projects").select("id", { count: "exact", head: true }),
  ])

  return {
    requests: requestCount ?? 0,
    newRequests: newCount ?? 0,
    projects: projectCount ?? 0,
  }
}

export default async function AdminDashboard() {
  const stats = await getStats()

  const cards = [
    { icon: Inbox, label: "Anfragen gesamt", value: stats.requests, color: "#6366f1" },
    { icon: Clock, label: "Neue Anfragen", value: stats.newRequests, color: "#f59e0b" },
    { icon: Image, label: "Portfolio-Einträge", value: stats.projects, color: "#10b981" },
    { icon: TrendingUp, label: "Konversionsrate", value: "–", color: "#a855f7" },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <div key={card.label} className="bg-[#0e0f1c] border border-white/6 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[#8b8da0] text-xs font-medium">{card.label}</p>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${card.color}18` }}>
                  <Icon size={16} style={{ color: card.color }} />
                </div>
              </div>
              <p className="text-2xl font-bold text-white">{card.value}</p>
            </div>
          )
        })}
      </div>
      <div className="bg-[#0e0f1c] border border-white/6 rounded-xl p-6">
        <h2 className="text-white font-bold mb-4">Schnellzugriff</h2>
        <p className="text-[#8b8da0] text-sm">Navigieren Sie über die Seitenleiste zu Portfolio-Verwaltung und Anfragen.</p>
      </div>
    </div>
  )
}
