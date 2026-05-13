"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Navbar } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import {
  Globe, Layers, Zap, Shield, ArrowRight,
  TrendingUp, Search, Monitor, Palette, Code, MessageSquare,
  Megaphone, Target, Smartphone, Users, BarChart3,
  ShoppingCart, Settings
} from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
}
const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.section ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.section>
  )
}

const infraServices = [
  { icon: Globe, title: "Google Agency Accounts", desc: "Pre-approved, high-limit Google Ads agency accounts. No restrictions. Instant delivery with full MCC access.", features: ["High spending limits", "Clean account history", "MCC access included", "Free replacement guarantee"] },
  { icon: Layers, title: "Meta Business Managers", desc: "Verified Meta BMs with clean history, ready for large-scale ad campaigns on Facebook & Instagram.", features: ["Verified & aged BMs", "Clean ad history", "Unlimited ad accounts", "Direct Meta support access"] },
  { icon: Shield, title: "Verified Business Managers", desc: "Fully verified BMs that pass all Meta compliance checks. Ideal for restricted verticals.", features: ["Full verification completed", "Compliance-ready", "Premium aged accounts", "Priority support"] },
  { icon: Zap, title: "Instant Recharge Services", desc: "Top-up any ad account balance instantly through our automated wallet system. 24/7 availability.", features: ["Instant processing", "Multiple payment methods", "Auto wallet deduction", "Real-time notifications"] },
  { icon: Settings, title: "Agency Infrastructure Setup", desc: "Complete agency setup — multiple accounts, unified billing, team access, and dedicated support.", features: ["Multi-account management", "Unified billing dashboard", "Team role management", "Custom onboarding"] },
  { icon: Target, title: "Dedicated Support", desc: "Premium support via WhatsApp, Telegram, and email. Your dedicated account manager is always a message away.", features: ["WhatsApp priority line", "Telegram notifications", "< 1 hour response time", "Dedicated account manager"] },
]

const agencyServices = [
  { icon: TrendingUp, title: "Google Ads Management", desc: "Expert PPC campaign management with data-driven optimization. Search, Display, Shopping, and YouTube ads.", benefits: "Average 3.5x ROAS improvement" },
  { icon: Megaphone, title: "Meta Ads Management", desc: "Full-funnel Facebook & Instagram advertising. From awareness to conversion, we handle it all.", benefits: "Proven creative frameworks" },
  { icon: Search, title: "SEO Services", desc: "Organic growth strategies including technical SEO, content strategy, link building, and local SEO.", benefits: "Sustainable long-term traffic" },
  { icon: Monitor, title: "Website Development", desc: "Custom websites built for speed, conversion, and scale. Next.js, React, WordPress — we do it all.", benefits: "Performance-optimized builds" },
  { icon: Code, title: "Landing Page & Funnel Dev", desc: "High-converting sales funnels and landing pages designed to maximize your ad ROI.", benefits: "A/B tested designs" },
  { icon: ShoppingCart, title: "Shopify & eCommerce", desc: "Complete Shopify store development with custom themes, apps, and conversion optimization.", benefits: "Revenue-focused design" },
  { icon: Palette, title: "Branding & Creative Design", desc: "Logo design, brand identity, ad creatives, and visual storytelling that captures attention.", benefits: "Thumb-stopping creatives" },
  { icon: MessageSquare, title: "WhatsApp & CRM Automation", desc: "Automated WhatsApp marketing flows, CRM setup, and lead nurturing systems.", benefits: "80% open rate average" },
  { icon: BarChart3, title: "Conversion Tracking", desc: "Server-side tracking, pixel setup, CAPI integration, and attribution modeling.", benefits: "Accurate data, better decisions" },
  { icon: Users, title: "Lead Generation Systems", desc: "End-to-end lead gen systems — from ad to CRM to follow-up automation.", benefits: "Qualified leads on autopilot" },
  { icon: Smartphone, title: "WordPress Development", desc: "Custom WordPress sites, plugins, and WooCommerce stores tailored to your business.", benefits: "Easy to manage & update" },
  { icon: Settings, title: "Performance Marketing", desc: "Full-stack performance marketing across all channels. Strategy, execution, and optimization.", benefits: "ROI-first approach" },
]

export default function ServicesPage() {
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
              Our Services
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Infrastructure + Agency. <br /><span className="gradient-text-accent">Everything You Need.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-white/50 max-w-2xl mx-auto">
              Premium ad accounts & expert marketing services — a full-stack growth engine for your business.
            </motion.p>
          </div>
        </section>

        {/* Ad Infrastructure */}
        <Section className="py-20 sm:py-28 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} className="mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Zap className="w-3 h-3" /> Ad Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Enterprise-Grade <span className="gradient-text-accent">Ad Accounts & Services</span>
              </h2>
              <p className="text-white/40 text-lg max-w-2xl">The backbone of your advertising operations. Reliable, scalable, instant.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {infraServices.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-orange-500/20 transition-all duration-300"
                >
                  <div className="inline-flex p-3 rounded-xl bg-orange-500/10 text-orange-400 mb-4">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Agency Services */}
        <Section className="py-20 sm:py-28 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} className="mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Megaphone className="w-3 h-3" /> Digital Agency
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Full-Service <span className="gradient-text-accent">Growth Solutions</span>
              </h2>
              <p className="text-white/40 text-lg max-w-2xl">From strategy to execution. We handle the marketing so you can focus on your business.</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {agencyServices.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  className="group p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-orange-500/20 transition-all duration-300"
                >
                  <div className="inline-flex p-2 rounded-lg bg-orange-500/10 text-orange-400 mb-3">
                    <service.icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold mb-1.5">{service.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed mb-3">{service.desc}</p>
                  <span className="text-[11px] font-medium text-orange-400/70">{service.benefits}</span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-12">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-full hover:from-orange-500 hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/20">
                Get a Custom Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </Section>

      </main>
      <Footer />
    </div>
  )
}
