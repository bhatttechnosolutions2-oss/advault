import Link from "next/link"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Google Agency Accounts", href: "/services" },
    { name: "Meta Business Managers", href: "/services" },
    { name: "Ad Recharge Services", href: "/services" },
    { name: "Performance Marketing", href: "/services" },
    { name: "SEO Services", href: "/services" },
    { name: "Website Development", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Refund Policy", href: "/refund" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-black">
      {/* Top CTA */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                Ready to scale your <span className="gradient-text-accent">advertising?</span>
              </h2>
              <p className="text-white/50 text-lg max-w-lg">
                Join hundreds of agencies who trust AdVault for their infrastructure needs.
              </p>
            </div>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-full hover:from-orange-500 hover:to-orange-400 transition-all duration-300 shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.02] shrink-0"
            >
              Start Free Today
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
              <Link href="/" className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center font-bold text-sm text-white">
                  AV
                </div>
                <span className="text-lg font-bold tracking-tight">
                  Ad<span className="text-orange-500">Vault</span>
                </span>
              </Link>
              <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
                Reliable advertising infrastructure and growth solutions for modern performance marketers.
              </p>
              <div className="space-y-3">
                <a href="mailto:hello@advault.io" className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors">
                  <Mail className="w-4 h-4 shrink-0" /> hello@advault.io
                </a>
                <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors">
                  <Phone className="w-4 h-4 shrink-0" /> +91 98765 43210
                </a>
                <div className="flex items-start gap-2 text-sm text-white/40">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" /> Mumbai, India
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} AdVault. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Built with precision for performance marketers
          </p>
        </div>
      </div>
    </footer>
  )
}
