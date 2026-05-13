"use client"

import { motion } from "framer-motion"
import {
  Wallet, CreditCard, ArrowUpRight, ArrowDownRight,
  TrendingUp, Package, Clock, Plus
} from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
}

const stats = [
  { label: "Wallet Balance", value: "$12,450.00", change: "+$2,100 this month", icon: Wallet, trend: "up" },
  { label: "Active Accounts", value: "24", change: "+3 this week", icon: CreditCard, trend: "up" },
  { label: "Total Ad Spend", value: "$87,234", change: "+19% vs last month", icon: TrendingUp, trend: "up" },
  { label: "Pending Orders", value: "2", change: "Processing", icon: Package, trend: "neutral" },
]

const recentOrders = [
  { id: "ORD-1024", product: "Google Agency — Professional", amount: "$199.00", status: "Delivered", date: "Today" },
  { id: "ORD-1023", product: "Meta Verified BM", amount: "$299.00", status: "Delivered", date: "Yesterday" },
  { id: "ORD-1022", product: "Ad Recharge — $5,000", amount: "$5,000.00", status: "Processing", date: "2 days ago" },
  { id: "ORD-1021", product: "Google Agency — Starter", amount: "$99.00", status: "Delivered", date: "3 days ago" },
]

const recentTransactions = [
  { type: "Deposit", method: "Razorpay", amount: "+$5,000.00", time: "Today, 10:42 AM" },
  { type: "Purchase", method: "Google Agency", amount: "-$199.00", time: "Today, 10:38 AM" },
  { type: "Deposit", method: "Razorpay", amount: "+$2,000.00", time: "Yesterday, 3:15 PM" },
  { type: "Purchase", method: "Meta BM", amount: "-$299.00", time: "Yesterday, 11:20 AM" },
  { type: "Refund", method: "Order #1018", amount: "+$99.00", time: "3 days ago" },
]

export default function ClientOverviewPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Overview</h1>
          <p className="text-white/40 text-sm mt-1">Welcome back, John. Here&apos;s your infrastructure at a glance.</p>
        </div>
        <button className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-full hover:from-orange-500 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20">
          <Plus className="w-4 h-4" /> Top Up
        </button>
      </div>

      {/* Stats Grid */}
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
              <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
                <stat.icon className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-bold mb-1">{stat.value}</p>
            <div className="flex items-center gap-1">
              {stat.trend === "up" ? (
                <ArrowUpRight className="w-3.5 h-3.5 text-green-400" />
              ) : (
                <Clock className="w-3.5 h-3.5 text-yellow-400" />
              )}
              <span className={`text-xs font-medium ${stat.trend === "up" ? "text-green-400" : "text-yellow-400"}`}>
                {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Orders & Transactions */}
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Recent Orders */}
        <div className="lg:col-span-3 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold">Recent Orders</h3>
            <span className="text-xs text-orange-400 font-medium cursor-pointer hover:text-orange-300">View All</span>
          </div>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                    <Package className="w-4 h-4 text-white/40" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{order.product}</p>
                    <p className="text-[11px] text-white/30">{order.id} · {order.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold">{order.amount}</p>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    order.status === "Delivered"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="lg:col-span-2 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold">Transactions</h3>
            <span className="text-xs text-orange-400 font-medium cursor-pointer hover:text-orange-300">View All</span>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((tx, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    tx.amount.startsWith("+") ? "bg-green-500/10" : "bg-red-500/10"
                  }`}>
                    {tx.amount.startsWith("+") ? (
                      <ArrowUpRight className="w-4 h-4 text-green-400" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 text-red-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{tx.type}</p>
                    <p className="text-[11px] text-white/30">{tx.time}</p>
                  </div>
                </div>
                <span className={`text-sm font-bold ${
                  tx.amount.startsWith("+") ? "text-green-400" : "text-red-400"
                }`}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
