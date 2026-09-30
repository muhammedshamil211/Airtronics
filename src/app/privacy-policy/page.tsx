import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ShieldCheck, MessageCircle, Lock, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { PolicyHeaderTabs, PolicyCrossLinks } from '@/components/legal/PolicyNav';

export const metadata: Metadata = {
  title: 'Privacy Policy | Airtronics Fixcare Technical Services LLC Dubai',
  description: 'Privacy policy for Airtronics Fixcare Technical Services LLC. Transparent, zero-tracking commitment. We only communicate via direct WhatsApp or phone for AC service bookings.',
  alternates: {
    canonical: 'https://airtronicsfixcare.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] py-12 sm:py-16 lg:py-20" aria-label="Privacy Policy">
      <div className="max-w-[1000px] w-full mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#005eb8] transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#005eb8]">Privacy Policy</span>
        </nav>

        {/* Header */}
        <header className="mb-10 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#005eb8] mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>PRIVACY &amp; DATA TRANSPARENCY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#111111] mb-3">
            Privacy Policy
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm">
            Last Updated: September 2026 • Airtronics Fixcare Technical Services LLC, Dubai, UAE
          </p>
        </header>

        {/* Policy Navigation Switcher Tabs */}
        <PolicyHeaderTabs active="privacy" />

        {/* Content Sections */}
        <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
          
          {/* Key Summary Callout */}
          <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-5 sm:p-6 text-slate-800">
            <h2 className="text-base sm:text-lg font-bold text-[#005eb8] mb-2 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#005eb8]" />
              <span>Our Privacy Commitment in Brief</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
              At Airtronics Fixcare Technical Services LLC, your privacy is straightforward:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#005eb8] shrink-0 mt-0.5" />
                <span><strong>No Account Signups:</strong> We do not ask you to register, log in, or submit personal financial data on our website.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#005eb8] shrink-0 mt-0.5" />
                <span><strong>Direct WhatsApp &amp; Phone Contact Only:</strong> We only receive your contact information when you voluntarily reach out to us via WhatsApp, phone call, or email.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#005eb8] shrink-0 mt-0.5" />
                <span><strong>Zero Data Selling:</strong> We never sell, rent, or trade your phone number or information to third-party telemarketers or advertisers.</span>
              </li>
            </ul>
          </div>

          {/* Section 1 */}
          <section className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#111111] mb-3">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3">
              We collect only the minimum information necessary to schedule, diagnose, and perform air conditioning and HVAC technical services at your requested location:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600">
              <li><strong>Contact Details:</strong> Your mobile or WhatsApp phone number, and your name (as provided by you).</li>
              <li><strong>Service Location:</strong> Your property address, villa number, building name, or general Dubai community (e.g. Dubai Marina, JVC, Palm Jumeirah) provided to coordinate on-site technician dispatch.</li>
              <li><strong>Technical Service Details:</strong> AC issue description, unit type (split, central, FCU), and service history necessary for our technicians to bring the correct genuine OEM replacement parts.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#111111] mb-3">
              2. How We Use Your WhatsApp &amp; Contact Number
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3">
              When you initiate a WhatsApp conversation or call our hotline, we use your number strictly for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600">
              <li>Confirming appointment arrival times and mobile technician dispatch.</li>
              <li>Sending transparent, itemized service quotations before work commences.</li>
              <li>Providing service completion updates and sharing digital inspection reports.</li>
              <li>Delivering your official electronic VAT Tax Invoice and honoring your 90-day parts warranty.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#111111] mb-3">
              3. Information Sharing &amp; Third Parties
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              We maintain a strict zero-disclosure policy. We do not sell, rent, license, or share your personal phone numbers, conversations, or addresses with external marketing agencies, data brokers, or advertising networks. Your details are accessed exclusively by authorized Airtronics service engineers and office dispatch staff for the execution of your requested service.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#111111] mb-3">
              4. Data Retention &amp; Warranty Records
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              We retain service logs, invoice records, and WhatsApp communication history for a limited period solely to honor our 90-day written parts and labor warranty, verify past equipment maintenance history, and comply with UAE Federal Tax Authority (FTA) accounting requirements.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#111111] mb-3">
              5. Your Rights &amp; Data Deletion
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3">
              In accordance with UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection, you have the right to request deletion or modification of your contact information from our active dispatch database.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              To request removal or if you have any questions regarding your information, simply message our team on WhatsApp at <strong>+971 58 659 6321</strong> or email us at <strong>airtronics6@gmail.com</strong>.
            </p>
          </section>

          {/* Contact Box */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7">
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
              Airtronics Fixcare Technical Services LLC
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>Commercial Bank of Dubai Building, Office M-01, Al Kabeesi, Dubai, UAE</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>Hotline: +971 58 659 6321 / +971 55 561 9369 / +971 50 240 6545</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>Email: airtronics6@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Related Policies Navigation */}
          <PolicyCrossLinks current="privacy" />

        </div>

      </div>
    </main>
  );
}
