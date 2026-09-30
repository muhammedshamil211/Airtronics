'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { 
  ShieldCheck, 
  Wrench, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  CalendarCheck, 
  FileText, 
  Zap 
} from 'lucide-react';
import { ServiceDetail } from '@/data/servicesData';

const WHATSAPP_PHONE = '971586596321';
const CALL_PHONE = '+971586596321';

export default function ServiceDetailContent({ service }: { service: ServiceDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    `Hello Airtronics Fixcare! I would like to book the "${service.title}" service in Dubai. Please provide availability and pricing.`
  )}`;

  // FAQ Schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': service.faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a,
      },
    })),
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-[#fcfcfc]">
      <Script
        id={`faq-schema-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. OVERVIEW & ENGINEERING CONTEXT                                         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              <span className="text-[#005eb8] font-black text-sm">/</span>
              <span>ENGINEERING STANDARDS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111111] leading-tight mb-4">
              Why Dubai Relies on Our {service.shortTitle}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              {service.overview}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#005eb8] shrink-0 mt-0.5" />
                <div className="leading-tight">
                  <span className="block font-bold text-xs sm:text-sm text-[#111111]">100% Genuine OEM Parts</span>
                  <span className="block text-[11px] text-gray-500">Direct factory components with warranty</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <FileText className="w-5 h-5 text-[#005eb8] shrink-0 mt-0.5" />
                <div className="leading-tight">
                  <span className="block font-bold text-xs sm:text-sm text-[#111111]">Fixed Binding Quotes</span>
                  <span className="block text-[11px] text-gray-500">Zero surprise charges on completion</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-200/80">
              <Image
                src={service.image}
                alt={`${service.shortTitle} technicians in Dubai`}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="block font-bold text-sm sm:text-base">{service.title}</span>
                <span className="block text-xs text-gray-300">Certified Dubai Municipality Standards</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. KEY BENEFITS GRID                                                      */}
        {/* ========================================================================= */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#111111] leading-tight mb-2">
              Key Advantages &amp; Client Guarantees
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Engineered specifically to withstand 50°C summer conditions and high humidity levels in the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {service.keyBenefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs hover:border-[#005eb8]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#005eb8] flex items-center justify-center mb-3 border border-blue-100 font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#111111] mb-2 leading-snug">
                    {benefit.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. TECHNICAL SPECIFICATIONS & COMMON ISSUES SOLVED                        */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Technical Specs */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100">
                <Wrench className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#111111]">
                Technical Scope &amp; Specifications
              </h3>
            </div>
            <ul className="space-y-3">
              {service.specifications.map((spec, sIdx) => (
                <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#005eb8] shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Common Dubai Issues Solved */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                <AlertCircle className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#111111]">
                Common Problems We Resolve in Dubai
              </h3>
            </div>
            <ul className="space-y-3">
              {service.commonIssuesSolved.map((issue, iIdx) => (
                <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. DUBAI COMMUNITIES SERVED CLUSTER                                       */}
        {/* ========================================================================= */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
            <MapPin className="w-4 h-4 text-[#005eb8]" />
            <span>LOCAL SERVICE HUBS IN DUBAI</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-2 leading-snug">
            30–45 Minute Mobile Fleet Coverage Across Dubai
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
            Our certified mobile vans are stationed strategically near key highways (Sheikh Zayed Road, Al Khail Road, Sheikh Mohammed Bin Zayed Road) for rapid dispatch:
          </p>

          <div className="flex flex-wrap gap-2">
            {service.dubaiLocations.map((loc, lIdx) => (
              <span 
                key={lIdx}
                className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-[#005eb8] border border-slate-200/80 text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#005eb8]" />
                <span>{loc}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. FREQUENTLY ASKED QUESTIONS (Matching Home Page FAQ Style)             */}
        {/* ========================================================================= */}
        <div>
          <header className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-[#005eb8] font-semibold">/</span>
              <span className="text-xs md:text-sm font-semibold tracking-wide uppercase text-gray-800">
                Got Questions? We Have Answers
              </span>
            </div>

            <h3 className="text-[28px] sm:text-[36px] md:text-[40px] font-medium tracking-tight text-[#111111] leading-[1.1] mb-3">
              Frequently Asked Questions
            </h3>

            <p className="text-[#666666] text-[15px] leading-relaxed">
              Find answers to the most common questions about our {service.shortTitle.toLowerCase()} in Dubai.
            </p>
          </header>

          <div className="max-w-4xl mx-auto">
            {service.faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div key={fIdx} className="border-b border-gray-200">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full p-4 sm:p-5 md:p-6 flex items-start justify-between text-left hover:bg-slate-50 transition-colors duration-200"
                  >
                    <span className="text-[15px] md:text-base font-medium text-[#111111] pr-5">
                      {faq.q}
                    </span>

                    <div className="shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 sm:px-5 md:px-6 pb-6 text-[#666666] text-[15px] leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. BOTTOM CALLOUT / DIRECT DISPATCH BANNER                                 */}
        {/* ========================================================================= */}
        <div className="bg-[#081226] text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF] block mb-2">
              Ready For Immediate On-Site Dispatch?
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-2 leading-tight">
              Book {service.shortTitle} with Airtronics Fixcare Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Transparent upfront quote, zero hidden fees, and guaranteed 90-day parts &amp; labor warranty across all Dubai locations.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0080FF] hover:bg-[#0070E0] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full transition-all shadow-md whitespace-nowrap"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book via WhatsApp</span>
            </a>

            <Link
              href={`tel:${CALL_PHONE.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold px-5 py-3.5 rounded-full transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span>Call Hotline</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
