"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react"

export default function ContactPage() {
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
              Contact
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s Build <span className="gradient-text-accent">Something Great</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-white/50 max-w-xl mx-auto">
              Have a question or ready to get started? Reach out and we&apos;ll respond within 1 hour.
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

              {/* Contact Info */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Get in touch</h3>
                  <div className="space-y-5">
                    <a href="mailto:hello@advault.io" className="flex items-start gap-4 group">
                      <div className="shrink-0 p-2.5 rounded-lg bg-orange-500/10 text-orange-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-0.5">Email</p>
                        <p className="text-sm text-white/40 group-hover:text-white/70 transition-colors">hello@advault.io</p>
                      </div>
                    </a>
                    <a href="tel:+919876543210" className="flex items-start gap-4 group">
                      <div className="shrink-0 p-2.5 rounded-lg bg-orange-500/10 text-orange-400">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-0.5">Phone</p>
                        <p className="text-sm text-white/40 group-hover:text-white/70 transition-colors">+91 98765 43210</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 p-2.5 rounded-lg bg-orange-500/10 text-orange-400">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-0.5">Office</p>
                        <p className="text-sm text-white/40">Mumbai, Maharashtra, India</p>
                      </div>
                    </div>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener" className="flex items-start gap-4 group">
                      <div className="shrink-0 p-2.5 rounded-lg bg-green-500/10 text-green-400">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-0.5">WhatsApp</p>
                        <p className="text-sm text-white/40 group-hover:text-white/70 transition-colors">Chat with us instantly</p>
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-3">
                <form className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm placeholder:text-white/30 focus:outline-none focus:border-orange-500/40 transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm placeholder:text-white/30 focus:outline-none focus:border-orange-500/40 transition-colors" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm text-white/60 focus:outline-none focus:border-orange-500/40 transition-colors">
                      <option value="">Select a topic</option>
                      <option value="infrastructure">Ad Infrastructure</option>
                      <option value="agency">Agency Services</option>
                      <option value="pricing">Custom Pricing</option>
                      <option value="support">Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm placeholder:text-white/30 focus:outline-none focus:border-orange-500/40 transition-colors resize-none" placeholder="Tell us about your needs..." />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-full hover:from-orange-500 hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/20">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
