"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { ArrowRight, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    if (data.user) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", data.user.id)
        .single()

      if (profile?.role === "admin" || profile?.role === "staff") {
        router.push("/admin")
      } else {
        router.push("/client")
      }
    }
  }

  return (
    <div className="min-h-screen flex bg-black">
      {/* Left — Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.08)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 p-12 max-w-md">
          <Link href="/" className="flex items-center gap-2 mb-12">
            <Image src="/logo.png" alt="AdVault Logo" width={150} height={40} className="h-10 w-auto" />
          </Link>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Reliable Advertising <span className="gradient-text-accent">Infrastructure</span>
          </h2>
          <p className="text-white/40 leading-relaxed mb-8">
            Premium ad accounts, instant recharges, and expert digital marketing — all from one powerful platform.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/30">
            <span className="flex items-center gap-1.5">✓ 500+ Agencies</span>
            <span className="flex items-center gap-1.5">✓ 24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Right — Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image src="/logo.png" alt="AdVault Logo" width={120} height={32} className="h-8 w-auto" />
            </Link>
          </div>

          <h1 className="text-2xl font-bold tracking-tight mb-1">Welcome back</h1>
          <p className="text-white/40 text-sm mb-8">Enter your credentials to access your dashboard</p>

          {error && (
            <div className="mb-6 p-3 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm placeholder:text-white/25 focus:outline-none focus:border-orange-500/40 transition-colors"
                placeholder="john@agency.com"
                required
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Password</label>
                <Link href="/forgot-password" className="text-xs text-orange-400 hover:text-orange-300">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm placeholder:text-white/25 focus:outline-none focus:border-orange-500/40 transition-colors pr-11"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-full hover:from-orange-500 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign in"}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-white/40">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-orange-400 hover:text-orange-300 font-medium">
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
