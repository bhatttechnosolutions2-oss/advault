"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard, ShoppingCart, Wallet, TicketIcon, Settings, LogOut,
  Users, BarChart3, Package, Bell, ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const clientLinks = [
  { name: "Overview", href: "/client", icon: LayoutDashboard },
  { name: "Buy Products", href: "/client/products", icon: ShoppingCart },
  { name: "Wallet & Recharge", href: "/client/wallet", icon: Wallet },
  { name: "My Orders", href: "/client/orders", icon: Package },
  { name: "Support Tickets", href: "/client/tickets", icon: TicketIcon },
  { name: "Notifications", href: "/client/notifications", icon: Bell },
  { name: "Settings", href: "/client/settings", icon: Settings },
]

const adminLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { name: "Recharges", href: "/admin/recharges", icon: Wallet },
  { name: "Tickets", href: "/admin/tickets", icon: TicketIcon },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export function Sidebar({ role }: { role: "client" | "admin" }) {
  const pathname = usePathname()
  const links = role === "client" ? clientLinks : adminLinks

  return (
    <aside className="hidden w-[260px] flex-col border-r border-white/[0.06] bg-black md:flex">
      {/* Logo */}
      <div className="flex h-16 lg:h-20 items-center border-b border-white/[0.06] px-6">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="AdVault Logo" className="h-7 w-auto" />
          {role === "admin" && (
            <span className="ml-1 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-400 rounded">
              Admin
            </span>
          )}
        </Link>
      </div>

      {/* Nav */}
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <nav className="space-y-1">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-orange-500/10 text-orange-400"
                    : "text-white/50 hover:bg-white/[0.03] hover:text-white/80"
                )}
              >
                <link.icon className="h-4 w-4 shrink-0" />
                {link.name}
                {isActive && <ChevronRight className="ml-auto h-3.5 w-3.5 opacity-50" />}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Logout */}
      <div className="border-t border-white/[0.06] p-3">
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/40 hover:text-red-400 hover:bg-red-500/5 transition-all duration-200">
          <LogOut className="h-4 w-4" />
          Log out
        </button>
      </div>
    </aside>
  )
}
