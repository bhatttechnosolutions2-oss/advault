"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Navbar } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import {
  ArrowRight, ArrowUpRight, Check, ChevronRight,
  Zap, ShieldCheck, BarChart3, Globe, Megaphone,
  Search, Palette, MessageSquare, Users, TrendingUp,
  Star, Play, Layers, Target, Monitor, Code,
  Smartphone, Headphones, Shield, Clock, Award
} from "lucide-react"

/* ─── Animations ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } },
}
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as any } },
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  )
}

/* ─── Data ─── */
const stats = [
  { value: "500+", label: "Agencies Served" },
  { value: "$10M+", label: "Ad Spend Managed" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Available" },
]

const infraServices = [
  { icon: Globe, title: "Google Agency Accounts", desc: "Pre-approved, high-limit Google Ads agency accounts ready to scale. No restrictions, full control.", color: "from-blue-500/20 to-blue-600/20" },
  { icon: Layers, title: "Meta Business Managers", desc: "Verified Meta BMs with clean history. Ideal for agencies running large-scale campaigns.", color: "from-purple-500/20 to-purple-600/20" },
  { icon: Zap, title: "Instant Recharges", desc: "Top-up any ad account instantly via our automated wallet system. No delays, 24/7.", color: "from-orange-500/20 to-orange-600/20" },
  { icon: Shield, title: "Agency Infrastructure", desc: "Complete setup for your agency — multiple accounts, billing, and support bundled.", color: "from-green-500/20 to-green-600/20" },
]

const agencyServices = [
  { icon: TrendingUp, title: "Performance Marketing", desc: "Data-driven PPC campaigns across Google, Meta, and beyond." },
  { icon: Search, title: "SEO Services", desc: "Organic growth strategies that deliver sustainable rankings." },
  { icon: Monitor, title: "Website Development", desc: "Custom sites built for speed, conversion, and scale." },
  { icon: Palette, title: "Branding & Creative", desc: "Stunning creatives that capture attention and drive action." },
  { icon: Code, title: "Funnel Development", desc: "High-converting sales funnels from landing to checkout." },
  { icon: MessageSquare, title: "WhatsApp Automation", desc: "Automated messaging flows that nurture and convert leads." },
]

const reasons = [
  { icon: ShieldCheck, title: "Enterprise Security", desc: "Bank-grade encryption and role-based access controls." },
  { icon: Clock, title: "Instant Delivery", desc: "Accounts delivered within minutes, not days." },
  { icon: Headphones, title: "Priority Support", desc: "Dedicated account managers with WhatsApp + Telegram." },
  { icon: Award, title: "Trusted by 500+", desc: "Agencies and marketers worldwide rely on AdVault." },
]

const faqs = [
  { q: "What are Google Agency Accounts?", a: "Google Agency Accounts are pre-approved advertiser accounts under a managed agency MCC. They come with higher spending limits and faster approval times." },
  { q: "How does wallet recharge work?", a: "You top up your AdVault wallet via Razorpay (UPI, cards, net banking). Then use the balance to instantly fund any connected ad account." },
  { q: "Do you provide account replacements?", a: "Yes. If an account gets suspended within 72 hours of delivery for reasons not related to your ads, we provide a free replacement." },
  { q: "What digital marketing services do you offer?", a: "We offer Google Ads, Meta Ads, SEO, website development, funnel building, branding, WhatsApp automation, CRM setup, and performance marketing." },
]

/* ─── Page ─── */
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <main className="flex-1">

        {/* ═══ HERO ═══ */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(249,115,22,0.08)_0%,_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(249,115,22,0.05)_0%,_transparent_50%)]" />
            <div className="absolute inset-0 dot-pattern opacity-30" />
            {/* Animated Orbs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl animate-float-slow" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-sm text-white/60 font-medium">Trusted by 500+ Agencies Worldwide</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as any }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Reliable Advertising<br />
              <span className="gradient-text-accent">Infrastructure</span> &<br />
              Growth Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Premium Google Agency accounts, verified Meta BMs, instant recharges, and expert digital marketing — all in one platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-full hover:from-orange-500 hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.02]"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium text-white/70 border border-white/10 rounded-full hover:bg-white/[0.03] hover:text-white transition-all duration-300"
              >
                Explore Services
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-white/30"
            >
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> No Setup Fee</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> Instant Delivery</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> 24/7 Support</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-orange-500" /> Free Replacements</span>
            </motion.div>
          </div>

          {/* Bottom Gradient Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </section>

        {/* ═══ STATS ═══ */}
        <Section className="py-16 sm:py-20 border-y border-white/[0.06] bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/40 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══ AD INFRASTRUCTURE SERVICES ═══ */}
        <Section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Zap className="w-3 h-3" /> Infrastructure
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Ad Infrastructure <span className="gradient-text-accent">Built to Scale</span>
              </h2>
              <p className="text-white/40 text-lg max-w-2xl mx-auto">
                Enterprise-grade advertising accounts and services designed for agencies that demand reliability.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {infraServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-5`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">{service.title}</h3>
                  <p className="text-white/40 leading-relaxed mb-4">{service.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══ AGENCY SERVICES ═══ */}
        <Section className="py-20 sm:py-28 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Megaphone className="w-3 h-3" /> Agency
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Full-Service <span className="gradient-text-accent">Digital Agency</span>
              </h2>
              <p className="text-white/40 text-lg max-w-2xl mx-auto">
                End-to-end growth solutions — from strategy to execution. We handle the marketing so you can focus on your business.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {agencyServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  variants={scaleIn}
                  whileHover={{ y: -3 }}
                  className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-orange-500/20 transition-all duration-300"
                >
                  <div className="inline-flex p-2.5 rounded-lg bg-orange-500/10 text-orange-400 mb-4">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-orange-400 border border-orange-500/20 rounded-full hover:bg-orange-500/5 transition-all"
              >
                View All Services <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </Section>

        {/* ═══ WHY CHOOSE US ═══ */}
        <Section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
                  <Star className="w-3 h-3" /> Why Us
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                  Why <span className="gradient-text-accent">500+ agencies</span> choose AdVault
                </h2>
                <p className="text-white/40 text-lg leading-relaxed mb-10">
                  We combine enterprise-grade advertising infrastructure with expert digital marketing services — delivering everything you need under one roof.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {reasons.map((reason) => (
                    <div key={reason.title} className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                        <reason.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{reason.title}</h4>
                        <p className="text-white/40 text-sm">{reason.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={scaleIn} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl blur-3xl" />
                <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10">
                  <div className="space-y-6">
                    {/* Mock Dashboard Preview */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-xs font-bold">AV</div>
                        <span className="font-semibold text-sm">Dashboard</span>
                      </div>
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <p className="text-xs text-white/40 mb-1">Wallet Balance</p>
                        <p className="text-xl font-bold text-orange-400">$12,450</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <p className="text-xs text-white/40 mb-1">Active Accounts</p>
                        <p className="text-xl font-bold">24</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {["Google Agency — Tier 1 Delivered", "Meta BM — Verified Approved", "Recharge $5,000 — Completed"].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                          <span className="text-xs text-white/60">{item}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 font-medium">✓</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* ═══ TESTIMONIALS ═══ */}
        <Section className="py-20 sm:py-28 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Trusted by <span className="gradient-text-accent">top agencies</span>
              </h2>
              <p className="text-white/40 text-lg">Hear from performance marketers who scaled with AdVault.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Rahul Sharma", role: "CEO, ScaleMedia", text: "AdVault completely transformed how we manage our Google Ads infrastructure. The instant recharges alone save us hours every week." },
                { name: "Priya Nair", role: "Founder, GrowthHub", text: "Best Meta BMs in the market. Clean history, no issues. Their support team is incredibly responsive — feels like having an in-house team." },
                { name: "Alex Chen", role: "Performance Director, AdScale", text: "We moved our entire agency infrastructure to AdVault. The dashboard is beautiful, and the pricing is unbeatable for the quality." },
              ].map((testimonial, i) => (
                <motion.div
                  key={testimonial.name}
                  variants={fadeUp}
                  className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">&quot;{testimonial.text}&quot;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center text-sm font-bold text-orange-400">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-white/40">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ═══ FAQ ═══ */}
        <Section className="py-20 sm:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Frequently Asked <span className="gradient-text-accent">Questions</span>
              </h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.details
                  key={i}
                  variants={fadeUp}
                  className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] cursor-pointer"
                >
                  <summary className="flex items-center justify-between font-semibold text-sm sm:text-base list-none">
                    {faq.q}
                    <ChevronRight className="w-5 h-5 text-white/40 transition-transform duration-300 group-open:rotate-90 shrink-0 ml-4" />
                  </summary>
                  <p className="mt-4 text-white/40 text-sm leading-relaxed">{faq.a}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </Section>

      </main>
      <Footer />
    </div>
  )
}
