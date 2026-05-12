"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Navbar } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Check, ArrowRight, Globe, Layers, Zap, Shield, Star } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } },
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.section ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.section>
  )
}

const products = [
  {
    icon: Globe,
    title: "Google Agency Accounts",
    tagline: "High-limit, pre-approved",
    tiers: [
      { name: "Starter", price: "$99", period: "/account", features: ["$500/day spending limit", "Search & Display", "Standard support", "3-day delivery"], popular: false },
      { name: "Professional", price: "$199", period: "/account", features: ["$5,000/day spending limit", "All campaign types", "Priority support", "Same-day delivery", "Free replacement"], popular: true },
      { name: "Enterprise", price: "$499", period: "/account", features: ["Unlimited spending", "Full MCC access", "Dedicated manager", "Instant delivery", "Free replacements", "Custom billing"], popular: false },
    ]
  },
  {
    icon: Layers,
    title: "Meta Business Managers",
    tagline: "Verified & ready to scale",
    tiers: [
      { name: "Standard BM", price: "$149", period: "/BM", features: ["5 ad accounts", "Clean history", "Basic verification", "48-hour delivery"], popular: false },
      { name: "Verified BM", price: "$299", period: "/BM", features: ["25 ad accounts", "Full verification", "Aged 6+ months", "Same-day delivery", "Priority support"], popular: true },
      { name: "Premium BM", price: "$599", period: "/BM", features: ["Unlimited ad accounts", "Full verification", "Aged 12+ months", "Instant delivery", "Dedicated manager", "Custom setup"], popular: false },
    ]
  },
]

const addons = [
  { icon: Zap, title: "Instant Recharges", desc: "Top-up any ad account 24/7. Automated processing. Minimum $100.", price: "From $100" },
  { icon: Shield, title: "Agency Setup Package", desc: "Complete agency infrastructure — accounts, billing, and team onboarding.", price: "Custom" },
]

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(249,115,22,0.06)_0%,_transparent_60%)]" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6">
              Products & Pricing
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Choose Your <span className="gradient-text-accent">Infrastructure</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-white/50 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Scale as you grow.
            </motion.p>
          </div>
        </section>

        {/* Products */}
        {products.map((product) => (
          <Section key={product.title} className="py-16 sm:py-24 border-t border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-12">
                <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400">
                  <product.icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">{product.title}</h2>
                  <p className="text-white/40 text-sm">{product.tagline}</p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {product.tiers.map((tier) => (
                  <motion.div
                    key={tier.name}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                      tier.popular
                        ? "border-orange-500/40 bg-gradient-to-b from-orange-500/5 to-transparent shadow-lg shadow-orange-500/5"
                        : "border-white/[0.06] bg-white/[0.02] hover:border-white/10"
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full text-xs font-bold text-white shadow-lg shadow-orange-500/20">
                          <Star className="w-3 h-3" /> Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-lg font-semibold mb-2">{tier.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-white/40 text-sm">{tier.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-white/60">
                          <Check className="w-4 h-4 text-orange-500 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/signup"
                      className={`block text-center py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                        tier.popular
                          ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-500 hover:to-orange-400 shadow-lg shadow-orange-500/20"
                          : "border border-white/10 text-white/80 hover:bg-white/[0.03]"
                      }`}
                    >
                      Get Started
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>
        ))}

        {/* Add-ons */}
        <Section className="py-16 sm:py-24 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 variants={fadeUp} className="text-2xl sm:text-3xl font-bold mb-8">Additional Services</motion.h2>
            <div className="grid md:grid-cols-2 gap-6">
              {addons.map((addon) => (
                <motion.div key={addon.title} variants={fadeUp} className="flex items-start gap-5 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  <div className="shrink-0 p-3 rounded-xl bg-orange-500/10 text-orange-400">
                    <addon.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{addon.title}</h3>
                    <p className="text-white/40 text-sm mb-2">{addon.desc}</p>
                    <span className="text-sm font-bold text-orange-400">{addon.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

      </main>
      <Footer />
    </div>
  )
}
