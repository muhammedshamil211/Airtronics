import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ShieldCheck, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { INVOICE_QUOTE_TERMS } from '@/data/servicesData';
import { PolicyHeaderTabs, PolicyCrossLinks } from '@/components/legal/PolicyNav';

export const metadata: Metadata = {
  title: 'Terms of Service | Airtronics Fixcare Technical Services LLC Dubai',
  description: 'Terms and conditions for air conditioning and HVAC services provided by Airtronics Fixcare Technical Services LLC in Dubai. Upfront quotes, 90-day warranty & UAE VAT compliance.',
  alternates: {
    canonical: 'https://airtronicsfixcare.com/terms',
  },
};

const TOC_ITEMS = [
  { id: 'scope', label: '1. Scope of Services' },
  { id: 'quotations', label: '2. Upfront Quotes & Fee Waiver' },
  { id: 'warranty', label: '3. 90-Day Parts & Labor Warranty' },
  { id: 'payment', label: '4. Payment & UAE VAT Compliance' },
  { id: 'rescheduling', label: '5. Access & Cancellation Policy' },
  { id: 'governing-law', label: '6. Governing Law & Jurisdiction' },
  { id: 'corporate', label: '7. Corporate Legal Notices' },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 py-12 sm:py-16 lg:py-20" aria-label="Terms of Service">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#005eb8] transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#005eb8]">Terms of Service</span>
        </nav>

        {/* Page Header */}
        <header className="mb-8 pb-8 border-b border-gray-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#005eb8] text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Operating Terms &amp; Conditions</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] mb-3">
            Terms of Service
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm">
            {INVOICE_QUOTE_TERMS.lastUpdated} • Airtronics Fixcare Technical Services LLC, Dubai, United Arab Emirates
          </p>
        </header>

        {/* Policy Tab Switcher */}
        <PolicyHeaderTabs active="terms" />

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
              <span className="font-semibold text-gray-900 block">Questions about our terms?</span>
              <p>Our client operations desk is available 24/7 for clarifications.</p>
              <a
                href="tel:+971586596321"
                className="inline-flex items-center gap-1.5 font-bold text-[#005eb8] hover:underline pt-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+971 58 659 6321</span>
              </a>
            </div>
          </aside>

          {/* Main Legal Document Content */}
          <div className="lg:col-span-8 text-sm sm:text-base leading-relaxed text-gray-700 divide-y divide-gray-100">
            
            {/* Introductory Preamble */}
            <div className="pb-10">
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed font-normal mb-4">
                These terms govern all air conditioning repair, preventive maintenance, turnkey equipment installations, duct sanitization, and Annual Maintenance Contracts (AMC) executed by Airtronics Fixcare Technical Services LLC within the Emirate of Dubai.
              </p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                By booking an inspection, confirming a service appointment, or approving a repair estimate via phone, WhatsApp, email, or digital portal, you acknowledge that you have reviewed, understood, and agreed to be legally bound by these operational terms.
              </p>
            </div>

            {/* Section 1 */}
            <section id="scope" className="py-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                1. Scope of Services &amp; Operational Protocols
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  Airtronics Fixcare Technical Services LLC provides certified HVAC engineering solutions for residential villas, apartments, office towers, hotels, and retail facilities across Dubai.
                </p>
                <p>
                  Our scope encompasses split systems, ducted package units, variable refrigerant flow (VRF/VRV) systems, and chilled water Fan Coil Units (FCU). All work is executed by certified HVAC technicians in strict compliance with Dubai Municipality standards and OEM manufacturer guidelines.
                </p>
                <p>
                  Work is initiated only upon client permission and verbal or written authorization following on-site equipment diagnostic assessment.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="quotations" className="py-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                2. Upfront Quotations &amp; Diagnostic Inspection Fee Waiver
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  Transparency is a core commitment of Airtronics Fixcare. Before any replacement, disassembly, or repair is conducted, our technician will provide an itemized, written quotation detailing exact labor charges and OEM part tariffs.
                </p>
                <p className="font-semibold text-gray-900">
                  Diagnostic Fee Waiver Policy:
                </p>
                <p>
                  A standard diagnostic assessment fee applies for technical inspection using digital manifold gauges and thermal detection tools. When you approve the repair quotation and proceed with the service, this diagnostic assessment charge is 100% credited and waived on your final bill.
                </p>
                <p>
                  Clients will never face surprise surcharges, unannounced labor tariffs, or unauthorized part replacements.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="warranty" className="py-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                3. 90-Day Comprehensive Workmanship &amp; OEM Parts Warranty
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  All completed repairs and replaced spare parts are backed by a minimum 90-day comprehensive warranty from the date of service completion, as documented on your official tax invoice.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600">
                  <li>Only factory-sealed, 100% genuine OEM components (compressors, fan motors, capacitors, thermostats, sensors, expansion valves) are utilized.</li>
                  <li>Should the identical failure or component malfunction re-occur within the 90-day warranty window, Airtronics will dispatch a senior engineering team to inspect and correct the issue with zero additional labor or part charges.</li>
                  <li>Warranty does not cover pre-existing unrelated component failures, unauthorized third-party tampering, power voltage fluctuations, or intentional misuse.</li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="payment" className="py-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                4. Invoicing, Payment Terms &amp; UAE Federal VAT Compliance
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  Airtronics Fixcare Technical Services LLC operates in full compliance with United Arab Emirates Federal Tax Authority (FTA) laws.
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600">
                  <li>All prices and quotes are subject to the statutory 5% UAE Value Added Tax (VAT), which is clearly itemized on every official tax invoice.</li>
                  <li>Payment is due upon satisfactory completion and digital handover of the service, unless a corporate credit arrangement (LPO) has been established in writing.</li>
                  <li>We accept credit/debit cards, bank transfers, corporate checks, and cash. A digital receipt and tax invoice are issued immediately upon payment.</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="rescheduling" className="py-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                5. Appointment Access, Rescheduling &amp; Cancellations
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  We value prompt scheduling and ask clients to provide reasonable notice for modifications:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-600">
                  <li>Clients may reschedule or cancel scheduled service appointments without penalty up to two (2) hours prior to the confirmed arrival window via WhatsApp or telephone.</li>
                  <li>Clients are responsible for arranging necessary building entry permits, security passes, or developer access approvals (e.g., Emaar, Nakheel, DAMAC, Dubai Holding) prior to the technician team’s arrival.</li>
                  <li>If technicians arrive on-site but are denied access due to missing client permits or client absence, a nominal mobilization callout fee may apply.</li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section id="governing-law" className="py-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                6. Governing Law &amp; Jurisdiction
              </h2>
              <div className="space-y-3.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  These Terms of Service and all related client agreements are governed by and construed in accordance with the laws of the Emirate of Dubai and the applicable Federal Laws of the United Arab Emirates.
                </p>
                <p>
                  Any dispute, claim, or controversy arising out of or in connection with our services shall be settled amicably through our client satisfaction desk. If unresolved, disputes shall be submitted to the exclusive jurisdiction of the competent courts of Dubai.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="corporate" className="pt-10 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                7. Corporate Entity &amp; Legal Notices
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <p>
                  Formal legal notices, warranty documentation claims, or contract inquiries must be directed to our corporate registered office:
                </p>
                <div className="pt-2 space-y-2">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#005eb8] shrink-0" />
                    <span>Commercial Bank of Dubai Building, Office M-01, Al Khabaisi, Dubai, UAE</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#005eb8] shrink-0" />
                    <span>Dispatch Hotline: +971 58 659 6321 / +971 55 561 9369</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#005eb8] shrink-0" />
                    <span>Official Email: airtronics6@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-emerald-700 font-medium">Operations: 24/7/365 Continuous Service</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Policy Cross Links */}
            <PolicyCrossLinks current="terms" />

          </div>

        </div>

      </div>
    </main>
  );
}
