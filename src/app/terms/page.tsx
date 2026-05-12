import { Navbar } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-white/50 text-sm leading-relaxed">
            <p>Last updated: January 2026</p>
            <h2 className="text-lg font-semibold text-white mt-8 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using AdVault (&quot;the Platform&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            <h2 className="text-lg font-semibold text-white mt-8 mb-3">2. Services</h2>
            <p>AdVault provides advertising infrastructure services including but not limited to: Google Agency Accounts, Meta Business Managers, ad account recharge services, and digital marketing agency services.</p>
            <h2 className="text-lg font-semibold text-white mt-8 mb-3">3. Account Responsibility</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify AdVault of any unauthorized use.</p>
            <h2 className="text-lg font-semibold text-white mt-8 mb-3">4. Payment Terms</h2>
            <p>All payments are processed through Razorpay. Wallet top-ups are non-refundable once used for purchases. Unused wallet balance may be refunded as per our Refund Policy.</p>
            <h2 className="text-lg font-semibold text-white mt-8 mb-3">5. Prohibited Use</h2>
            <p>You agree not to use our services for any illegal activities, spam, fraud, or violation of any advertising platform&apos;s terms of service.</p>
            <h2 className="text-lg font-semibold text-white mt-8 mb-3">6. Limitation of Liability</h2>
            <p>AdVault shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by you in the last 12 months.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
