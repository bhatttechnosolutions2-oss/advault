"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Navbar } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Target, Heart, Users, Award, Lightbulb, TrendingUp, Globe, Shield } from "lucide-react"

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

const values = [
  { icon: Target, title: "Precision", desc: "Every account, every campaign, every detail is handled with surgical precision." },
  { icon: Shield, title: "Reliability", desc: "99.9% uptime with enterprise-grade infrastructure you can depend on." },
  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of platform changes so your campaigns never miss a beat." },
  { icon: Heart, title: "Partnership", desc: "Your growth is our growth. We succeed when you succeed." },
]

const team = [
  { name: "Arjun Mehta", role: "Founder & CEO", initials: "AM" },
  { name: "Sneha Kapoor", role: "Head of Operations", initials: "SK" },
  { name: "Dev Patel", role: "CTO", initials: "DP" },
  { name: "Riya Shah", role: "Head of Marketing", initials: "RS" },
]

export default function AboutPage() {
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
              About Us
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Building the Future of <span className="gradient-text-accent">Ad Infrastructure</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              AdVault was born from a simple frustration — performance marketers deserved better infrastructure. So we built it.
            </motion.p>
          </div>
        </section>

        {/* Mission */}
        <Section className="py-20 sm:py-28 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div variants={fadeUp}>
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-3 block">Our Mission</span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                  Making advertising infrastructure <span className="gradient-text-accent">accessible to everyone</span>
                </h2>
                <p className="text-white/40 text-lg leading-relaxed mb-6">
                  We believe every agency and media buyer, regardless of size, should have access to premium ad accounts, instant top-ups, and world-class support.
                </p>
                <p className="text-white/40 leading-relaxed">
                  Our team combines deep ad-tech expertise with modern SaaS engineering to deliver infrastructure that just works — so you can focus on what matters: growing your clients&apos; businesses.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center">
                  <p className="text-3xl font-bold gradient-text-accent mb-1">500+</p>
                  <p className="text-xs text-white/40">Agencies Served</p>
                </div>
                <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center">
                  <p className="text-3xl font-bold gradient-text-accent mb-1">$10M+</p>
                  <p className="text-xs text-white/40">Ad Spend Managed</p>
                </div>
                <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center">
                  <p className="text-3xl font-bold gradient-text-accent mb-1">15+</p>
                  <p className="text-xs text-white/40">Countries</p>
                </div>
                <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center">
                  <p className="text-3xl font-bold gradient-text-accent mb-1">24/7</p>
                  <p className="text-xs text-white/40">Live Support</p>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Values */}
        <Section className="py-20 sm:py-28 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our <span className="gradient-text-accent">Core Values</span></h2>
              <p className="text-white/40 text-lg max-w-xl mx-auto">The principles that guide everything we build and deliver.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val) => (
                <motion.div key={val.title} variants={fadeUp} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center hover:border-orange-500/20 transition-colors duration-300">
                  <div className="inline-flex p-3 rounded-xl bg-orange-500/10 text-orange-400 mb-4">
                    <val.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{val.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Team */}
        <Section className="py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Meet the <span className="gradient-text-accent">Team</span></h2>
              <p className="text-white/40 text-lg max-w-xl mx-auto">Passionate experts building the future of ad infrastructure.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <motion.div key={member.name} variants={fadeUp} whileHover={{ y: -4 }} className="group p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center hover:border-orange-500/20 transition-all duration-300">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center text-2xl font-bold text-orange-400 mx-auto mb-5">
                    {member.initials}
                  </div>
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-white/40 text-sm">{member.role}</p>
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
