import { Navbar } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6 text-white/50 text-sm leading-relaxed">
            <p>Last updated: January 2026</p>
            <h2 className="text-lg font-semibold text-white mt-8 mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including name, email address, phone number, company details, and payment information necessary to provide our services.</p>
            <h2 className="text-lg font-semibold text-white mt-8 mb-3">2. How We Use Your Information</h2>
            <p>We use the information to provide, maintain, and improve our services; process transactions; send notifications; and communicate with you about products and support.</p>
            <h2 className="text-lg font-semibold text-white mt-8 mb-3">3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information. All data is encrypted in transit and at rest using bank-grade encryption.</p>
            <h2 className="text-lg font-semibold text-white mt-8 mb-3">4. Third-Party Services</h2>
            <p>We may share information with trusted third-party services (Razorpay for payments, Supabase for data storage) solely for the purpose of providing our services.</p>
            <h2 className="text-lg font-semibold text-white mt-8 mb-3">5. Contact</h2>
            <p>For any privacy-related concerns, please contact us at privacy@advault.io.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
