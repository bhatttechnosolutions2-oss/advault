"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Navbar } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Check, Star } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
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

const plans = [
  {
    name: "Starter",
    desc: "For solo media buyers starting out",
    price: "$0",
    period: "/month",
    features: [
      "5% top-up fee",
      "Standard Google Accounts",
      "Basic Meta BMs",
      "Email support (24h SLA)",
      "1 team member",
      "Basic dashboard",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Professional",
    desc: "For growing agencies scaling campaigns",
    price: "$149",
    period: "/month",
    features: [
      "3% top-up fee",
      "Premium Google Agency Accounts",
      "Verified Meta BMs",
      "Priority WhatsApp support (4h SLA)",
      "5 team members",
      "Full dashboard + analytics",
      "Auto invoice generation",
      "Free account replacements",
    ],
    cta: "Start 14-Day Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    desc: "For large agencies with custom needs",
    price: "Custom",
    period: "",
    features: [
      "Lowest top-up fees",
      "Unlimited premium accounts",
      "Dedicated account manager",
      "Phone + WhatsApp support (1h SLA)",
      "Unlimited team members",
      "Custom dashboard",
      "API access",
      "Custom billing & GST invoices",
      "White-label options",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

const comparisonFeatures = [
  { feature: "Top-up Fee", starter: "5%", pro: "3%", enterprise: "Custom" },
  { feature: "Google Accounts", starter: "Standard", pro: "Premium", enterprise: "Unlimited" },
  { feature: "Meta BMs", starter: "Basic", pro: "Verified", enterprise: "Custom" },
  { feature: "Support SLA", starter: "24 hours", pro: "4 hours", enterprise: "1 hour" },
  { feature: "Team Members", starter: "1", pro: "5", enterprise: "Unlimited" },
  { feature: "Account Replacements", starter: "—", pro: "✓", enterprise: "✓" },
  { feature: "API Access", starter: "—", pro: "—", enterprise: "✓" },
  { feature: "Dedicated Manager", starter: "—", pro: "—", enterprise: "✓" },
]

export default function PricingPage() {
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
              Pricing
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Simple, <span className="gradient-text-accent">Transparent</span> Pricing
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-white/50 max-w-xl mx-auto">
              No hidden fees, no surprises. Choose the plan that fits your growth stage.
            </motion.p>
          </div>
        </section>

        {/* Pricing Cards */}
        <Section className="pb-20 sm:pb-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                    plan.popular
                      ? "border-orange-500/40 bg-gradient-to-b from-orange-500/5 to-transparent shadow-xl shadow-orange-500/5"
                      : "border-white/[0.06] bg-white/[0.02] hover:border-white/10"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full text-xs font-bold text-white shadow-lg shadow-orange-500/20">
                        <Star className="w-3 h-3" /> Recommended
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-sm text-white/40 mb-6">{plan.desc}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-white/40 text-sm">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-white/60">
                        <Check className="w-4 h-4 text-orange-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.name === "Enterprise" ? "/contact" : "/signup"}
                    className={`block text-center py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white hover:from-orange-500 hover:to-orange-400 shadow-lg shadow-orange-500/20"
                        : "border border-white/10 text-white/80 hover:bg-white/[0.03]"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Feature Comparison Table */}
        <Section className="py-20 sm:py-28 border-t border-white/[0.06]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">Feature Comparison</h2>
              <p className="text-white/40">See what&apos;s included in each plan.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left py-4 text-white/40 font-medium">Feature</th>
                    <th className="text-center py-4 text-white/60 font-semibold">Starter</th>
                    <th className="text-center py-4 text-orange-400 font-semibold">Professional</th>
                    <th className="text-center py-4 text-white/60 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row) => (
                    <tr key={row.feature} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                      <td className="py-3 text-white/60">{row.feature}</td>
                      <td className="py-3 text-center text-white/40">{row.starter}</td>
                      <td className="py-3 text-center text-white/70 font-medium">{row.pro}</td>
                      <td className="py-3 text-center text-white/40">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </Section>

      </main>
      <Footer />
    </div>
  )
}
