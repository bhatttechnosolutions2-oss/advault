import { Navbar } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function RefundPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">Refund Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-white/50 text-sm leading-relaxed">
            <p>Last updated: January 2026</p>
            <h2 className="text-lg font-semibold text-white mt-8 mb-3">1. Wallet Balance Refunds</h2>
            <p>Unused wallet balance can be refunded within 30 days of the last deposit. A 5% processing fee may apply. Refunds are processed within 5-7 business days.</p>
            <h2 className="text-lg font-semibold text-white mt-8 mb-3">2. Product Refunds</h2>
            <p>Ad accounts and Business Managers are non-refundable once delivered. However, if an account is suspended within 72 hours of delivery due to no fault of the user, a free replacement will be provided.</p>
            <h2 className="text-lg font-semibold text-white mt-8 mb-3">3. Recharge Services</h2>
            <p>Recharge amounts credited to ad accounts are non-refundable. If a recharge fails, the full amount will be credited back to your AdVault wallet.</p>
            <h2 className="text-lg font-semibold text-white mt-8 mb-3">4. Agency Services</h2>
            <p>Digital marketing service subscriptions can be cancelled with 30 days notice. No refunds for the current billing period.</p>
            <h2 className="text-lg font-semibold text-white mt-8 mb-3">5. How to Request a Refund</h2>
            <p>Contact our support team via WhatsApp, email at support@advault.io, or through the support ticket system in your dashboard.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
