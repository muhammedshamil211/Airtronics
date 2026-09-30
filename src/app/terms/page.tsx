import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileText, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { INVOICE_QUOTE_TERMS } from '@/data/servicesData';
import { PolicyHeaderTabs, PolicyCrossLinks } from '@/components/legal/PolicyNav';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Airtronics Fixcare Technical Services LLC Dubai',
  description: 'Terms and conditions for air conditioning and HVAC services provided by Airtronics Fixcare Technical Services LLC in Dubai. Upfront quotes, 90-day warranty & UAE VAT compliance.',
  alternates: {
    canonical: 'https://airtronicsfixcare.com/terms',
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] py-12 sm:py-16 lg:py-20" aria-label="Terms and Conditions">
      <div className="max-w-[1000px] w-full mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#005eb8] transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#005eb8]">Terms &amp; Conditions</span>
        </nav>

        {/* Header */}
        <header className="mb-10 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#005eb8] mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>LEGAL &amp; SERVICE AGREEMENT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#111111] mb-3">
            Terms &amp; Conditions
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm">
            {INVOICE_QUOTE_TERMS.lastUpdated} • Airtronics Fixcare Technical Services LLC, Dubai, UAE
          </p>
        </header>

        {/* Policy Navigation Switcher Tabs */}
        <PolicyHeaderTabs active="terms" />

        {/* Main Content */}
        <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
          
          <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-5 sm:p-6 text-slate-800">
            <h2 className="text-base sm:text-lg font-bold text-[#005eb8] mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#005eb8]" />
              <span>Standard Operational Terms Summary</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              These terms govern all air conditioning repair, preventive maintenance, turnkey installations, duct sanitization, and Annual Maintenance Contracts (AMC) performed by Airtronics Fixcare Technical Services LLC across the Emirate of Dubai.
            </p>
          </div>

          {/* Render Sections from Structured Data */}
          {INVOICE_QUOTE_TERMS.sections.map((sec, idx) => (
            <section key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
              <h2 className="text-lg sm:text-xl font-bold text-[#111111] mb-3.5">
                {sec.heading}
              </h2>
              <ul className="space-y-2.5">
                {sec.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#005eb8] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* Section 5: Cancellations & Rescheduling */}
          <section className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#111111] mb-3">
              5. Appointment Cancellation &amp; Rescheduling
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3">
              We respect your schedule and request reasonable notification for appointment adjustments:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600">
              <li>Clients may reschedule or cancel scheduled diagnostic visits without penalty up to two (2) hours prior to the confirmed dispatch window by notifying us on WhatsApp or phone.</li>
              <li>For emergency dispatch requests where technician teams have already arrived on-site, a standard minimum call-out assessment fee applies unless the recommended repair quote is approved.</li>
            </ul>
          </section>

          {/* Section 6: Governing Law */}
          <section className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#111111] mb-3">
              6. Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the applicable laws of the Emirate of Dubai and the Federal Laws of the United Arab Emirates. Any disputes arising in connection with our services shall be subject to the exclusive jurisdiction of the competent courts of Dubai.
            </p>
          </section>

          {/* Contact Details */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7">
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
              Corporate Headquarters
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
          <PolicyCrossLinks current="terms" />

        </div>

      </div>
    </main>
  );
}
