"use client"

import { useState, useEffect } from "react"
import { Plus, Trash2, ExternalLink, Edit2 } from "lucide-react"
import type { PortfolioProject } from "@/lib/supabase"
import { mockProjects } from "@/lib/mock-data"

export default function AdminPortfolioPage() {
  const [projects, setProjects] = useState<PortfolioProject[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: "", description: "", client: "", url: "", tags: "", slug: "" })
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    async function load() {
      const { getSupabase } = await import("@/lib/supabase")
      const supabase = getSupabase()
      if (!supabase) {
        setProjects(mockProjects)
        setLoading(false)
        return
      }
      const { data } = await supabase
        .from("portfolio_projects")
        .select("*")
        .order("created_at", { ascending: false })
      setProjects((data as PortfolioProject[]) ?? mockProjects)
      setLoading(false)
    }
    load()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    const newProject: Partial<PortfolioProject> = {
      title: form.title,
      slug: form.slug || form.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
      description: form.description,
      long_description: form.description,
      client: form.client,
      url: form.url,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
      featured: false,
    }

    const { getSupabase } = await import("@/lib/supabase")
    const supabase = getSupabase()
    if (supabase) {
      const { data } = await supabase.from("portfolio_projects").insert(newProject).select().single()
      if (data) setProjects((prev) => [data as PortfolioProject, ...prev])
    } else {
      const mockNew = { ...newProject, id: Date.now().toString(), image_url: "", featured: false, created_at: new Date().toISOString() } as PortfolioProject
      setProjects((prev) => [mockNew, ...prev])
    }

    setForm({ title: "", description: "", client: "", url: "", tags: "", slug: "" })
    setShowForm(false)
    setSaving(false)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Projekt wirklich löschen?")) return

    const { getSupabase } = await import("@/lib/supabase")
    const supabase = getSupabase()
    if (supabase) {
      await supabase.from("portfolio_projects").delete().eq("id", id)
    }
    setProjects((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white">Portfolio</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="gradient-bg text-white text-sm font-semibold px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Plus size={16} />
          Projekt hinzufügen
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-[#0e0f1c] border border-[#6366f1]/30 rounded-xl p-6 mb-6 flex flex-col gap-4">
          <h2 className="text-white font-bold">Neues Projekt</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "title", label: "Titel *", placeholder: "Projektname" },
              { name: "client", label: "Kunde", placeholder: "Kundenname" },
              { name: "url", label: "URL", placeholder: "https://..." },
              { name: "tags", label: "Tags (kommagetrennt)", placeholder: "Next.js, Tailwind, Supabase" },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-[#c4c5d6] text-xs font-medium block mb-1.5">{field.label}</label>
                <input
                  value={form[field.name as keyof typeof form]}
                  onChange={(e) => setForm((f) => ({ ...f, [field.name]: e.target.value }))}
                  placeholder={field.placeholder}
                  className="w-full bg-[#181929] border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-[#4a4b60] focus:outline-none focus:border-[#6366f1]/60 transition-colors text-sm"
                />
              </div>
            ))}
          </div>
          <div>
            <label className="text-[#c4c5d6] text-xs font-medium block mb-1.5">Beschreibung *</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              rows={3}
              placeholder="Kurze Projektbeschreibung..."
              className="w-full bg-[#181929] border border-white/10 rounded-lg px-3 py-2 text-white placeholder:text-[#4a4b60] focus:outline-none focus:border-[#6366f1]/60 transition-colors text-sm resize-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={saving || !form.title || !form.description}
              className="gradient-bg text-white text-sm font-semibold px-4 py-2 rounded-lg disabled:opacity-50"
            >
              {saving ? "Speichern..." : "Speichern"}
            </button>
            <button type="button" onClick={() => setShowForm(false)} className="text-[#8b8da0] text-sm hover:text-white transition-colors">
              Abbrechen
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <p className="text-[#8b8da0]">Lädt...</p>
      ) : (
        <div className="flex flex-col gap-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#0e0f1c] border border-white/6 rounded-xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {project.client?.slice(0, 2).toUpperCase() ?? "??"}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium text-sm truncate">{project.title}</h3>
                <p className="text-[#8b8da0] text-xs truncate">{project.client}</p>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {project.tags?.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-1.5 py-0.5 rounded bg-white/5 text-[#8b8da0]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-[#8b8da0] hover:text-white transition-colors p-1.5">
                    <ExternalLink size={15} />
                  </a>
                )}
                <button className="text-[#8b8da0] hover:text-white transition-colors p-1.5">
                  <Edit2 size={15} />
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="text-[#8b8da0] hover:text-red-400 transition-colors p-1.5"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
