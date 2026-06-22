import { createClient, type SupabaseClient } from "@supabase/supabase-js"

let _client: SupabaseClient | null = null

export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  if (!_client) _client = createClient(url, key)
  return _client
}

export type PortfolioProject = {
  id: string
  title: string
  slug: string
  description: string
  long_description: string
  tags: string[]
  client: string
  url: string
  image_url: string
  featured: boolean
  created_at: string
}

export type ProjectRequest = {
  id: string
  project_type: string
  budget: string
  timeline: string
  description: string
  name: string
  email: string
  phone: string
  status: "new" | "in_progress" | "done"
  created_at: string
}
