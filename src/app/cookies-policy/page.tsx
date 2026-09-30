import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { PolicyHeaderTabs, PolicyCrossLinks } from '@/components/legal/PolicyNav';

export const metadata: Metadata = {
  title: 'Cookies Policy | Airtronics Fixcare Technical Services LLC Dubai',
  description: 'Cookies policy for Airtronics Fixcare Technical Services LLC. We do not use tracking or advertising cookies. Clean, private browsing experience.',
  alternates: {
    canonical: 'https://airtronicsfixcare.com/cookies-policy',
  },
};

export default function CookiesPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] py-12 sm:py-16 lg:py-20" aria-label="Cookies Policy">
      <div className="max-w-[1000px] w-full mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#005eb8] transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#005eb8]">Cookies Policy</span>
        </nav>

        {/* Header */}
        <header className="mb-10 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#005eb8] mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>COOKIE TRANSPARENCY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#111111] mb-3">
            Cookies Policy
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm">
            Last Updated: September 2026 • Airtronics Fixcare Technical Services LLC, Dubai, UAE
          </p>
        </header>

        {/* Policy Navigation Switcher Tabs */}
        <PolicyHeaderTabs active="cookies" />

        {/* Main Body */}
        <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
          
          {/* Key Summary Callout */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 sm:p-6 text-slate-800">
            <h2 className="text-base sm:text-lg font-bold text-emerald-800 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Zero Tracking Cookies Policy</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
              We respect your privacy completely. <strong>Airtronics Fixcare does NOT use tracking cookies, behavioral advertising trackers, or cross-site profiling cookies on this website.</strong>
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              You can freely browse our air conditioning services, technical guides, and contact information without being tracked or retargeted with ads across the internet.
            </p>
          </div>

          {/* Section 1 */}
          <section className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#111111] mb-3">
              1. What Are Cookies?
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Cookies are small text files that websites place on your computer or mobile device when you visit them. Many websites use cookies to track user browsing habits, remember login accounts, or serve targeted commercial advertising.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#111111] mb-3">
              2. How We Operate Our Website (No User Tracking)
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3">
              Our website is built using modern, lightweight Next.js architecture designed to deliver fast page loads without invasive cookies:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-600">
              <li><strong>No Advertising Cookies:</strong> We do not deploy third-party advertising cookies or retargeting pixels (such as ad network tracking).</li>
              <li><strong>No User Account Cookies:</strong> We do not require you to create an account, log in, or store personal login credentials.</li>
              <li><strong>No Demographic Profiling:</strong> We do not monitor your personal browsing identity across external websites.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#111111] mb-3">
              3. External Links &amp; WhatsApp Interactions
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3">
              Our website provides direct clickable links allowing you to contact us on WhatsApp for rapid AC diagnostic and repair bookings.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              When you click our WhatsApp links, you will navigate directly to WhatsApp’s external application or website (operated by Meta Platforms, Inc.). Any data or cookies generated within WhatsApp are governed independently by WhatsApp’s own standard Privacy Policy and Terms of Service.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-[#111111] mb-3">
              4. Managing Cookies in Your Web Browser
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3">
              Although Airtronics Fixcare does not place tracking cookies on your device, you have full control over cookie settings in all modern web browsers (Chrome, Safari, Edge, Firefox). You can configure your browser to block all cookies or notify you whenever a cookie is set.
            </p>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Blocking cookies in your browser will have zero negative effect on your ability to browse our services, read our technical guides, or contact us.
            </p>
          </section>

          {/* Contact Details */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7">
            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
              Questions Regarding Our Policy?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              If you have any questions about our cookie policy or privacy commitments, please reach out to our management team in Dubai:
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>Commercial Bank of Dubai Building, M-01, Al Kabeesi, Dubai, UAE</span>
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
          <PolicyCrossLinks current="cookies" />

        </div>

      </div>
    </main>
  );
}
