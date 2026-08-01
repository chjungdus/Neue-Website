import { createClient, type SupabaseClient } from "@supabase/supabase-js"

let _client: SupabaseClient | null = null

// Public client, uses the anon key. Row Level Security restricts it to what
// visitors are allowed to do: read published portfolio projects, and insert
// new project requests. It can never read back project_requests — that data
// is only reachable through getSupabaseAdmin(), server-side, after an admin
// auth check.
export function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  if (!_client) _client = createClient(url, key)
  return _client
}

let _adminClient: SupabaseClient | null = null

// Server-only client using the service role key, which bypasses Row Level
// Security entirely. SUPABASE_SERVICE_ROLE_KEY has no NEXT_PUBLIC_ prefix,
// so it is never bundled into client-side JavaScript. Only call this from
// Server Components or API routes, and only after verifying isAdminAuthed().
export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return null
  if (!_adminClient) _adminClient = createClient(url, key, { auth: { persistSession: false } })
  return _adminClient
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
