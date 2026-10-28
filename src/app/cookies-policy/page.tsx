import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ShieldCheck, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { PolicyHeaderTabs, PolicyCrossLinks } from '@/components/legal/PolicyNav';

export const metadata: Metadata = {
  title: 'Cookies Policy | Airtronics Fixcare Technical Services LLC Dubai',
  description: 'Cookies policy for Airtronics Fixcare Technical Services LLC. We do not use tracking or advertising cookies. Clean, private browsing experience.',
  alternates: {
    canonical: 'https://airtronicsfixcare.com/cookies-policy',
  },
};

const TOC_ITEMS = [
  { id: 'zero-tracking', label: '1. Zero Tracking Commitment' },
  { id: 'definition', label: '2. What Are Cookies?' },
  { id: 'usage', label: '3. Lightweight Architecture' },
  { id: 'external', label: '4. WhatsApp & External Services' },
  { id: 'management', label: '5. Browser Cookie Controls' },
  { id: 'corporate', label: '6. Policy Inquiries & Office' },
];

export default function CookiesPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 py-12 sm:py-16 lg:py-20" aria-label="Cookies Policy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#005eb8] transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#005eb8]">Cookies Policy</span>
        </nav>

        {/* Page Header */}
        <header className="mb-8 pb-8 border-b border-gray-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero Tracking Transparency Commitment</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] mb-3">
            Cookies Policy
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm">
            Last Updated: September 2026 • Airtronics Fixcare Technical Services LLC, Dubai, United Arab Emirates
          </p>
        </header>

        {/* Policy Tab Switcher */}
        <PolicyHeaderTabs active="cookies" />

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
              <span className="font-semibold text-gray-900 block">Questions about our policy?</span>
              <p>We believe in pure privacy. Browse freely with zero tracking.</p>
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
                Airtronics Fixcare Technical Services LLC operates under a strict zero-surveillance philosophy: we do not set advertising cookies, behavioral tracking pixels, or cross-site profiling technologies on your browser.
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                You can freely browse our air conditioning engineering guides, emergency diagnostic rates, and contact channels without being tracked, retargeted, or monitored across external platforms.
              </p>
            </div>

            {/* Section 1 */}
            <section id="zero-tracking" className="py-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                1. Zero Tracking Commitment
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  Our digital platform exists solely to connect homeowners, landlords, facility managers, and businesses with certified HVAC engineering specialists across Dubai.
                </p>
                <p>
                  Unlike platforms that monetize visitor demographics, we do not partner with data broking conglomerates or third-party marketing networks. No tracking IDs or cross-domain identifiers are placed into your browser storage.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="definition" className="py-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                2. What Are Cookies?
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  Cookies are tiny alphanumeric data files placed on your computer, tablet, or smartphone by websites you navigate.
                </p>
                <p>
                  Across the broader internet, cookies are frequently employed to remember session authentication, analyze visitor clicks, or build commercial profiles for targeted programmatic advertising campaigns.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="usage" className="py-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                3. Lightweight Architecture &amp; Pure Experience
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  Our site is engineered using high-performance Next.js server components that render clean static content without invasive third-party telemetry scripts:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong>Zero Advertising Trackers:</strong> No marketing pixels or ad network conversion beacons.</li>
                  <li><strong>Zero Persistent User Sessions:</strong> You do not need to register an account or store session cookies to explore our services or calculate pricing.</li>
                  <li><strong>Zero Commercial Retargeting:</strong> We will never follow you with banner advertisements on social media or search engines after your visit.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="external" className="py-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                4. WhatsApp &amp; External Service Interactions
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  Our website includes direct action links facilitating immediate WhatsApp communication with our mobile engineering dispatch desk.
                </p>
                <p>
                  When selecting a WhatsApp button, your device connects directly to Meta Platforms, Inc.’s official application or website. Any cookies or technical telemetry gathered on WhatsApp’s domain are governed independently under WhatsApp’s corporate Terms of Service and Privacy Policy.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="management" className="py-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                5. Browser Cookie Controls
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  Even though Airtronics Fixcare does not place tracking cookies, you retain complete authority over cookie handling in your personal web browser (Google Chrome, Apple Safari, Microsoft Edge, Mozilla Firefox, or Brave).
                </p>
                <p>
                  You can configure your browser preferences to reject all cookies, purge existing cached site data, or prompt for confirmation before accepting storage requests. Blocking cookies will in no way impair your ability to browse our services, read our maintenance checklists, or contact our dispatch team.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="corporate" className="pt-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                6. Policy Inquiries &amp; Corporate Office
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  If you require clarification regarding our cookie commitments or data handling principles, contact our management team:
                </p>
                <div className="pt-2 space-y-2">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#005eb8] shrink-0" />
                    <span>Commercial Bank of Dubai Building, Office M-01, Al Khabaisi, Dubai, UAE</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#005eb8] shrink-0" />
                    <span>Hotline: +971 58 659 6321 / +971 55 561 9369</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#005eb8] shrink-0" />
                    <span>Email: airtronics6@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-emerald-700 font-medium">Availability: 24/7/365</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Policy Cross Links */}
            <PolicyCrossLinks current="cookies" />

          </div>

        </div>

      </div>
    </main>
  );
}
