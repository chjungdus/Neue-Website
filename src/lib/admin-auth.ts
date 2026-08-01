import { cookies } from "next/headers"

// Shared check for every admin API route: the httpOnly cookie set on login
// must match the server-side secret. Never trust this from the client.
export async function isAdminAuthed(): Promise<boolean> {
  const cookieStore = await cookies()
  const value = cookieStore.get("admin_auth")?.value
  return !!process.env.ADMIN_SECRET && value === process.env.ADMIN_SECRET
}
