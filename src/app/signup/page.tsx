"use client"

import { useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { ArrowRight, Eye, EyeOff, CheckCircle } from "lucide-react"

export default function SignupPage() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName, role: "client" } },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="w-full max-w-md text-center">
          <div className="inline-flex p-4 rounded-2xl bg-green-500/10 text-green-400 mb-6">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h1 className="text-2xl font-bold mb-3">Check your email</h1>
          <p className="text-white/40 mb-8">
            We&apos;ve sent a verification link to <span className="text-white font-medium">{email}</span>
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-white/10 rounded-full hover:bg-white/[0.03] transition-all"
          >
            Back to login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex bg-black">
      {/* Left — Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.08)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative z-10 p-12 max-w-md">
          <Link href="/" className="flex items-center gap-2 mb-12">
            <img src="/logo.png" alt="AdVault Logo" className="h-10 w-auto" />
          </Link>
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Start Scaling <span className="gradient-text-accent">Today</span>
          </h2>
          <p className="text-white/40 leading-relaxed mb-8">
            Join 500+ agencies and media buyers who trust AdVault for reliable advertising infrastructure.
          </p>
          <ul className="space-y-3 text-sm text-white/40">
            <li className="flex items-center gap-2">✓ Free to create an account</li>
            <li className="flex items-center gap-2">✓ Instant access to products</li>
            <li className="flex items-center gap-2">✓ Priority support from day one</li>
          </ul>
        </div>
      </div>

      {/* Right — Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="AdVault Logo" className="h-8 w-auto" />
            </Link>
          </div>

          <h1 className="text-2xl font-bold tracking-tight mb-1">Create your account</h1>
          <p className="text-white/40 text-sm mb-8">Start building your advertising infrastructure in minutes</p>

          {error && (
            <div className="mb-6 p-3 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl">
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm placeholder:text-white/25 focus:outline-none focus:border-orange-500/40 transition-colors"
                placeholder="John Doe"
                required
              />
            </div>
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
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm placeholder:text-white/25 focus:outline-none focus:border-orange-500/40 transition-colors pr-11"
                  placeholder="Minimum 8 characters"
                  required
                  minLength={8}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-full hover:from-orange-500 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account..." : "Create Account"}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          <p className="mt-6 text-xs text-center text-white/30">
            By creating an account, you agree to our{" "}
            <Link href="/terms" className="text-white/50 hover:text-white/70">Terms</Link> and{" "}
            <Link href="/privacy" className="text-white/50 hover:text-white/70">Privacy Policy</Link>.
          </p>

          <p className="mt-6 text-center text-sm text-white/40">
            Already have an account?{" "}
            <Link href="/login" className="text-orange-400 hover:text-orange-300 font-medium">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
