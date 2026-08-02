import { ExternalLink } from "lucide-react"
import { getSupabaseAdmin } from "@/lib/supabase"
import type { ProjectRequest } from "@/lib/supabase"
import RequestStatusControl from "@/components/admin/request-status-control"
import { projectTypeLabels, budgetLabels, packageLabels } from "@/lib/anfrage-options"

async function getRequests(): Promise<ProjectRequest[]> {
  const supabase = getSupabaseAdmin()
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
        <span className="bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20 text-xs font-medium px-3 py-1 rounded-full">
          {requests.filter((r) => r.status === "new").length} neu
        </span>
      </div>

      {requests.length === 0 ? (
        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-12 text-center">
          <p className="text-[#ffffff]/50">
            {process.env.NEXT_PUBLIC_SUPABASE_URL
              ? "Noch keine Anfragen eingegangen."
              : "Supabase nicht konfiguriert. Anfragen werden nur per E-Mail empfangen."}
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {requests.map((req) => {
            return (
              <div key={req.id} className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-white font-bold">{req.name}</h2>
                    <a href={`mailto:${req.email}`} className="text-[#0066FF] text-sm hover:underline">{req.email}</a>
                    {req.phone && <span className="text-[#ffffff]/40 text-sm ml-2">· {req.phone}</span>}
                  </div>
                  <RequestStatusControl id={req.id} status={req.status} />
                </div>
                <div className="flex flex-wrap gap-3 mb-4">
                  {req.package && (
                    <span className="text-xs px-2.5 py-1 rounded-full bg-[#0066FF]/15 text-[#0066FF] border border-[#0066FF]/25 font-medium">
                      Paket: {packageLabels[req.package] ?? req.package}
                    </span>
                  )}
                  {req.project_type && <span className="text-xs px-2.5 py-1 rounded-full bg-[#0066FF]/10 text-[#ffffff]/55 border border-[#0066FF]/15">{projectTypeLabels[req.project_type] ?? req.project_type}</span>}
                  {req.budget && <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-[#ffffff]/50 border border-white/10">{budgetLabels[req.budget] ?? req.budget}</span>}
                </div>
                {req.business_link && (
                  <a
                    href={req.business_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#0066FF] text-sm hover:underline mb-3"
                  >
                    <ExternalLink size={13} />
                    {req.business_link}
                  </a>
                )}
                {req.description && <p className="text-[#ffffff]/50 text-sm leading-relaxed border-t border-white/5 pt-4">{req.description}</p>}
                <p className="text-[#ffffff]/30 text-xs mt-3">{new Date(req.created_at).toLocaleString("de-DE")}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
