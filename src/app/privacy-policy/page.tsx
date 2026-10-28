import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ShieldCheck, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { PolicyHeaderTabs, PolicyCrossLinks } from '@/components/legal/PolicyNav';

export const metadata: Metadata = {
  title: 'Privacy Policy | Airtronics Fixcare Technical Services LLC Dubai',
  description: 'Privacy policy for Airtronics Fixcare Technical Services LLC. Transparent, zero-tracking commitment. We only communicate via direct WhatsApp or phone for AC service bookings.',
  alternates: {
    canonical: 'https://airtronicsfixcare.com/privacy-policy',
  },
};

const TOC_ITEMS = [
  { id: 'collection', label: '1. Information We Collect' },
  { id: 'usage', label: '2. Use of WhatsApp & Contact Data' },
  { id: 'sharing', label: '3. Zero Data Sharing & Telemarketing' },
  { id: 'retention', label: '4. Service Logs & 90-Day Warranty' },
  { id: 'rights', label: '5. UAE Data Protection & Deletion' },
  { id: 'corporate', label: '6. Privacy Office & Contact' },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 py-12 sm:py-16 lg:py-20" aria-label="Privacy Policy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#005eb8] transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#005eb8]">Privacy Policy</span>
        </nav>

        {/* Page Header */}
        <header className="mb-8 pb-8 border-b border-gray-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#005eb8] text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Privacy &amp; Data Transparency Policy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] mb-3">
            Privacy Policy
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm">
            Last Updated: September 2026 • Airtronics Fixcare Technical Services LLC, Dubai, United Arab Emirates
          </p>
        </header>

        {/* Policy Tab Switcher */}
        <PolicyHeaderTabs active="privacy" />

        {/* Two-Column Editorial Layout */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          
          {/* Sticky Table of Contents (Desktop Sidebar) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 pr-4">
            <div className="border-l-2 border-gray-100 pl-4 py-1 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">
                Contents
              </span>
              {TOC_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-xs font-medium text-gray-600 hover:text-[#005eb8] py-1 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Quick Dispatch Box */}
            <div className="mt-8 pt-6 border-t border-gray-100 text-xs text-gray-500 space-y-2">
              <span className="font-semibold text-gray-900 block">Privacy inquiries or data updates?</span>
              <p>Our client desk handles data modification or deletion requests within 24 hours.</p>
              <a
                href="mailto:airtronics6@gmail.com"
                className="inline-flex items-center gap-1.5 font-bold text-[#005eb8] hover:underline pt-1"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>airtronics6@gmail.com</span>
              </a>
            </div>
          </aside>

          {/* Main Legal Document Content */}
          <div className="lg:col-span-8 text-sm sm:text-base leading-relaxed text-gray-700 divide-y divide-gray-100">
            
            {/* Introductory Preamble */}
            <div className="pb-10">
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed font-normal mb-4">
                At Airtronics Fixcare Technical Services LLC, your privacy is simple: we do not mandate user account registrations, we do not deploy invasive tracking pixels, and we communicate exclusively via direct phone or WhatsApp when you request technical HVAC assistance.
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                This document explains our strict data protection protocols, how your contact coordinates are handled during service fulfillment, and your statutory rights under UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection.
              </p>
            </div>

            {/* Section 1 */}
            <section id="collection" className="py-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                1. Information We Collect
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  We collect only the bare minimum technical and dispatch information necessary to diagnose, repair, and maintain your air conditioning systems:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong>Contact Coordinates:</strong> Your mobile or WhatsApp telephone number and name as provided when initiating dispatch.</li>
                  <li><strong>Physical Service Location:</strong> Your villa number, building name, apartment unit, or Dubai district (e.g., Dubai Marina, Downtown, Palm Jumeirah, Arabian Ranches) required to guide our mobile engineering vans.</li>
                  <li><strong>AC Equipment Profile:</strong> Air conditioning brand, unit type (split, VRF, FCU package), and reported symptoms (cooling failure, water leakage, strange noises) to prepare the correct OEM spare parts.</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section id="usage" className="py-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                2. Use of WhatsApp &amp; Direct Hotline Data
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  When you call our hotline or message our dispatch team on WhatsApp, your contact details are utilized strictly for service fulfillment operations:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Scheduling confirmed technician arrival windows and sending real-time ETA updates.</li>
                  <li>Delivering transparent, written quotations and diagnostic findings for client approval.</li>
                  <li>Sharing digital before-and-after inspection images and thermal camera readings.</li>
                  <li>Issuing electronic VAT-compliant tax invoices and activating your official 90-day parts and labor warranty.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="sharing" className="py-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                3. Zero Third-Party Sharing &amp; Anti-Telemarketing Stance
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  We maintain a non-negotiable zero-sharing policy:
                </p>
                <p>
                  We never sell, rent, lease, monetize, or trade your phone numbers, addresses, or chat conversations to external marketing agencies, advertising networks, or third-party telemarketers.
                </p>
                <p>
                  Your information is accessed exclusively by certified Airtronics technicians and internal dispatch personnel directly assigned to resolve your HVAC requirements.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="retention" className="py-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                4. Service Logs, Tax Accounting &amp; 90-Day Warranty Protection
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  We securely archive service records, invoices, and diagnostic sheets for statutory record-keeping periods:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>To honor and enforce your 90-day comprehensive parts and workmanship warranty.</li>
                  <li>To reference past refrigerant levels, motor replacements, and filter maintenance history during follow-up visits.</li>
                  <li>To comply with UAE Federal Tax Authority (FTA) financial and accounting auditing mandates.</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="rights" className="py-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                5. UAE Data Protection Rights &amp; Information Deletion
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  Under UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection, clients possess the right to verify, modify, or request complete removal of their personal contact coordinates from our active operations database.
                </p>
                <p>
                  To request data removal or inquire about stored dispatch logs, message our team directly on WhatsApp at <strong>+971 58 659 6321</strong> or email <strong>airtronics6@gmail.com</strong>. All verified requests are completed within 48 business hours.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="corporate" className="pt-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                6. Privacy Office &amp; Legal Notices
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  For formal data privacy inquiries or corporate compliance communication, contact our head office:
                </p>
                <div className="pt-2 space-y-2">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#005eb8] shrink-0" />
                    <span>Commercial Bank of Dubai Building, Office M-01, Al Khabaisi, Dubai, UAE</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#005eb8] shrink-0" />
                    <span>Operations Hotline: +971 58 659 6321 / +971 55 561 9369</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#005eb8] shrink-0" />
                    <span>Privacy Desk: airtronics6@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-emerald-700 font-medium">Customer Support: 24/7 Available</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Policy Cross Links */}
            <PolicyCrossLinks current="privacy" />

          </div>

        </div>

      </div>
    </main>
  );
}
