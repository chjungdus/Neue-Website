import { redirect } from "next/navigation"
import Link from "next/link"
import { LayoutDashboard, Image, Inbox, LogOut, Zap } from "lucide-react"
import { cookies } from "next/headers"

async function checkAuth() {
  const cookieStore = await cookies()
  return cookieStore.get("admin_auth")?.value === process.env.ADMIN_SECRET
}

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const isAuth = await checkAuth()
  if (!isAuth) redirect("/admin/login")

  return (
    <div className="min-h-screen flex bg-[#06070f]">
      <aside className="w-60 bg-[#0e0f1c] border-r border-white/5 flex flex-col p-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-white mb-10">
          <div className="w-7 h-7 rounded-md gradient-bg flex items-center justify-center">
            <Zap size={13} className="text-white" />
          </div>
          <span className="text-sm">DigitalForge</span>
        </Link>

        <nav className="flex flex-col gap-1 flex-1">
          {[
            { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
            { href: "/admin/portfolio", icon: Image, label: "Portfolio" },
            { href: "/admin/anfragen", icon: Inbox, label: "Anfragen" },
          ].map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#8b8da0] hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
              >
                <Icon size={16} />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <form action="/api/admin/logout" method="POST">
          <button
            type="submit"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#8b8da0] hover:text-white hover:bg-white/5 transition-all text-sm font-medium w-full"
          >
            <LogOut size={16} />
            Abmelden
          </button>
        </form>
      </aside>

      <main className="flex-1 overflow-auto p-8">{children}</main>
    </div>
  )
}
