import { getSupabase } from "@/lib/supabase"
import type { ProjectRequest } from "@/lib/supabase"
import { Clock, CheckCircle2, Loader2 } from "lucide-react"

const statusConfig = {
  new: { label: "Neu", color: "#f59e0b", icon: Clock },
  in_progress: { label: "In Bearbeitung", color: "#6366f1", icon: Loader2 },
  done: { label: "Erledigt", color: "#10b981", icon: CheckCircle2 },
}

const projectTypeLabels: Record<string, string> = {
  landing_page: "Landing Page",
  website: "Website",
  ecommerce: "Online-Shop",
  webapp: "Web-App",
  sonstiges: "Sonstiges",
}

const budgetLabels: Record<string, string> = {
  unter_2000: "< 2.000 €",
  "2000_5000": "2k – 5k €",
  "5000_10000": "5k – 10k €",
  ueber_10000: "> 10.000 €",
}

async function getRequests(): Promise<ProjectRequest[]> {
  const supabase = getSupabase()
  if (!supabase) return []
  const { data } = await supabase.from("project_requests").select("*").order("created_at", { ascending: false })
  return (data as ProjectRequest[]) ?? []
}

export default async function AnfragenPage() {
  const requests = await getRequests()

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white">Anfragen</h1>
        <span className="bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20 text-xs font-medium px-3 py-1 rounded-full">
          {requests.filter((r) => r.status === "new").length} neu
        </span>
      </div>

      {requests.length === 0 ? (
        <div className="bg-[#0e0f1c] border border-white/6 rounded-xl p-12 text-center">
          <p className="text-[#8b8da0]">
            {process.env.NEXT_PUBLIC_SUPABASE_URL
              ? "Noch keine Anfragen eingegangen."
              : "Supabase nicht konfiguriert. Anfragen werden nur per E-Mail empfangen."}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {requests.map((req) => {
            const status = statusConfig[req.status] ?? statusConfig.new
            const StatusIcon = status.icon
            return (
              <div key={req.id} className="bg-[#0e0f1c] border border-white/6 rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-white font-bold">{req.name}</h2>
                    <a href={`mailto:${req.email}`} className="text-[#6366f1] text-sm hover:underline">{req.email}</a>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border flex-shrink-0" style={{ color: status.color, backgroundColor: `${status.color}10`, borderColor: `${status.color}20` }}>
                    <StatusIcon size={12} />{status.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 mb-4">
                  {req.project_type && <span className="text-xs px-2.5 py-1 rounded-full bg-[#6366f1]/10 text-[#8b8db8] border border-[#6366f1]/15">{projectTypeLabels[req.project_type] ?? req.project_type}</span>}
                  {req.budget && <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-[#8b8da0] border border-white/10">{budgetLabels[req.budget] ?? req.budget}</span>}
                </div>
                {req.description && <p className="text-[#8b8da0] text-sm leading-relaxed border-t border-white/5 pt-4">{req.description}</p>}
                <p className="text-[#4a4b60] text-xs mt-3">{new Date(req.created_at).toLocaleString("de-DE")}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
