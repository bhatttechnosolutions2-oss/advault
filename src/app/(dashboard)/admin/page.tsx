"use client"

import { motion } from "framer-motion"
import {
  DollarSign, Users, Wallet,
  ArrowUpRight, Package, AlertTriangle
} from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
}

const stats = [
  { label: "Total Revenue", value: "$145,231", change: "+20.1%", icon: DollarSign, trend: "up" },
  { label: "Active Users", value: "2,350", change: "+180", icon: Users, trend: "up" },
  { label: "Orders This Month", value: "342", change: "+12.5%", icon: Package, trend: "up" },
  { label: "Pending Recharges", value: "8", change: "Needs attention", icon: Wallet, trend: "warning" },
]

const recentUsers = [
  { name: "Vikram Patel", email: "vikram@scaleagency.com", role: "Client", joined: "Today", status: "Active" },
  { name: "Sara Lin", email: "sara@growthfunnel.io", role: "Reseller", joined: "Yesterday", status: "Active" },
  { name: "Mike Ross", email: "mike@adopslab.com", role: "Client", joined: "2 days ago", status: "Active" },
  { name: "Anita Sharma", email: "anita@mediabuyerz.in", role: "Client", joined: "3 days ago", status: "Suspended" },
]

const pendingRecharges = [
  { user: "Vikram Patel", amount: "$5,000", method: "Razorpay", time: "10 min ago" },
  { user: "Sara Lin", amount: "$2,500", method: "Bank Transfer", time: "1 hour ago" },
  { user: "Mike Ross", amount: "$1,000", method: "Razorpay", time: "3 hours ago" },
]

export default function AdminOverviewPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-white/40 text-sm mt-1">Platform overview and key metrics.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial="hidden"
            animate="visible"
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: i * 0.1 } } }}
            className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-white/40 font-medium">{stat.label}</span>
              <div className={`p-2 rounded-lg ${
                stat.trend === "warning" ? "bg-amber-500/10 text-amber-400" : "bg-orange-500/10 text-orange-400"
              }`}>
                <stat.icon className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-bold mb-1">{stat.value}</p>
            <div className="flex items-center gap-1">
              {stat.trend === "up" ? (
                <ArrowUpRight className="w-3.5 h-3.5 text-green-400" />
              ) : (
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              )}
              <span className={`text-xs font-medium ${
                stat.trend === "up" ? "text-green-400" : "text-amber-400"
              }`}>
                {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tables */}
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Recent Users */}
        <div className="lg:col-span-3 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold">Recent Users</h3>
            <span className="text-xs text-orange-400 font-medium cursor-pointer hover:text-orange-300">Manage All</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-white/[0.06]">
                  <th className="pb-3 text-xs font-medium text-white/40">User</th>
                  <th className="pb-3 text-xs font-medium text-white/40">Role</th>
                  <th className="pb-3 text-xs font-medium text-white/40">Joined</th>
                  <th className="pb-3 text-xs font-medium text-white/40 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {recentUsers.map((user) => (
                  <tr key={user.email} className="hover:bg-white/[0.02]">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center text-[10px] font-bold text-orange-400">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-[11px] text-white/30">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 text-white/60">{user.role}</td>
                    <td className="py-3 text-white/40">{user.joined}</td>
                    <td className="py-3 text-right">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                        user.status === "Active"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-red-500/10 text-red-400"
                      }`}>
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pending Recharges */}
        <div className="lg:col-span-2 p-6 rounded-2xl border border-amber-500/10 bg-amber-500/[0.02]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <h3 className="font-semibold">Pending Recharges</h3>
            </div>
            <span className="text-xs text-orange-400 font-medium cursor-pointer hover:text-orange-300">View All</span>
          </div>
          <div className="space-y-3">
            {pendingRecharges.map((req, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div>
                  <p className="text-sm font-medium">{req.user}</p>
                  <p className="text-[11px] text-white/30">{req.method} · {req.time}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-amber-400">{req.amount}</span>
                  <button className="px-3 py-1 text-[10px] font-semibold text-white bg-green-500/20 text-green-400 rounded-full hover:bg-green-500/30 transition-colors">
                    Approve
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
