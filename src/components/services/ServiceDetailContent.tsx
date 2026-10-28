'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Wrench,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  FileText
} from 'lucide-react';
import { ServiceDetail } from '@/data/servicesData';

export default function ServiceDetailContent({ service }: { service: ServiceDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const middleFaq = Math.ceil(service.faqs.length / 2);
  const leftFaqs = service.faqs.slice(0, middleFaq);
  const rightFaqs = service.faqs.slice(middleFaq);

  return (
    <div className="py-14 sm:py-20 bg-[#fcfcfc]">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8 space-y-16 sm:space-y-24">

        {/* ========================================================================= */}
        {/* 1. OVERVIEW & ENGINEERING SPECIFICATIONS                                  */}
        {/* Grid Background: Bottom-Left (Size: 20px, Dimensions: w-80 h-80)         */}
        {/* ========================================================================= */}
        <div className="relative overflow-hidden pt-2 pb-6">
          {/* Section Grid Background: Bottom-Left */}
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 pointer-events-none -z-10 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-gradient-to-tr from-blue-100/40 via-sky-50/20 to-transparent rounded-full blur-xl pointer-events-none" />
            <div
              className="w-full h-full opacity-65"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0, 94, 184, 0.12) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 94, 184, 0.12) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                maskImage: 'radial-gradient(circle at bottom left, black 35%, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(circle at bottom left, black 35%, transparent 75%)',
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Narrative & Engineering Purpose */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#005eb8] mb-2.5">
                <span className="w-4 h-[1.5px] bg-[#005eb8]" />
                <span>ENGINEERING STANDARDS</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#111111] leading-tight mb-4">
                Why Dubai Relies on Our {service.shortTitle}
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 font-normal">
                {service.overview}
              </p>

              {/* Seamless Inline Guarantees (No Box Containers) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#005eb8] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-sm text-[#111111]">100% Genuine OEM Parts</span>
                    <span className="block text-xs text-gray-500 mt-0.5">Factory-certified compressors, coils &amp; motors</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#005eb8] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-sm text-[#111111]">Fixed Binding Quotes</span>
                    <span className="block text-xs text-gray-500 mt-0.5">Itemized evaluation before work commences</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Technical Specifications Table */}
            <div className="lg:col-span-5">
              <div className="pb-3 border-b-2 border-[#111111] flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                  Technical Protocol &amp; Verification
                </span>
                <span className="text-xs font-mono text-[#005eb8] font-semibold">
                  DUBAI STANDARDS
                </span>
              </div>

              <div className="divide-y divide-gray-200">
                <div className="py-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="block text-xs font-mono font-bold text-[#005eb8] uppercase mb-0.5">
                      01 / DIAGNOSTICS
                    </span>
                    <span className="block text-sm font-semibold text-[#111111]">Digital Manifold Gauges</span>
                  </div>
                  <span className="text-xs text-gray-500 text-right mt-1">Superheat &amp; subcooling</span>
                </div>

                <div className="py-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="block text-xs font-mono font-bold text-[#005eb8] uppercase mb-0.5">
                      02 / THERMAL
                    </span>
                    <span className="block text-sm font-semibold text-[#111111]">Infrared Leak Imaging</span>
                  </div>
                  <span className="text-xs text-gray-500 text-right mt-1">Duct leaks &amp; hot spots</span>
                </div>

                <div className="py-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="block text-xs font-mono font-bold text-[#005eb8] uppercase mb-0.5">
                      03 / ELECTRICAL
                    </span>
                    <span className="block text-sm font-semibold text-[#111111]">Load &amp; Amperage Testing</span>
                  </div>
                  <span className="text-xs text-gray-500 text-right mt-1">Motor running amps</span>
                </div>

                <div className="py-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="block text-xs font-mono font-bold text-[#005eb8] uppercase mb-0.5">
                      04 / WARRANTY
                    </span>
                    <span className="block text-sm font-semibold text-[#111111]">Factory OEM Components</span>
                  </div>
                  <span className="text-xs text-emerald-600 font-medium text-right mt-1">90-Day Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. KEY ADVANTAGES                                                         */}
        {/* Grid Background: Top-Right (Size: 28px, Dimensions: w-96 h-96)            */}
        {/* ========================================================================= */}
        <div className="relative overflow-hidden pt-10 border-t border-gray-200">
          {/* Section Grid Background: Top-Right */}
          <div className="absolute top-0 right-0 w-80 h-80 sm:w-[420px] sm:h-[420px] pointer-events-none -z-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-bl from-blue-100/40 via-sky-50/20 to-transparent rounded-full blur-xl pointer-events-none" />
            <div
              className="w-full h-full opacity-60"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0, 94, 184, 0.12) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 94, 184, 0.12) 1px, transparent 1px)
                `,
                backgroundSize: '28px 28px',
                maskImage: 'radial-gradient(circle at top right, black 40%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(circle at top right, black 40%, transparent 80%)',
              }}
            />
          </div>

          <div className="max-w-2xl mb-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#005eb8] mb-2">
              <span className="w-4 h-[1.5px] bg-[#005eb8]" />
              <span>CLIENT VALUE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111111] leading-tight mb-2">
              Key Advantages &amp; Client Guarantees
            </h3>
            <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
              Engineered specifically to withstand 50°C UAE summer conditions and high humidity.
            </p>
          </div>

          {/* Open 4-Column Layout with Top Hairline Accent */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {service.keyBenefits.map((benefit, idx) => (
              <div key={idx} className="border-t-2 border-[#005eb8] pt-5">
                <span className="text-xs font-mono font-bold text-[#005eb8] tracking-widest block mb-2">
                  0{idx + 1}
                </span>
                <h4 className="font-semibold text-base sm:text-lg text-[#111111] mb-2 leading-snug">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2.5 SPECIALIZED SUBCATEGORIES & DETAILED CAPABILITIES                     */}
        {/* ========================================================================= */}
        {service.subcategories && service.subcategories.length > 0 && (
          <div className="relative overflow-hidden pt-10 border-t border-gray-200">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#005eb8] mb-2">
                <span className="w-4 h-[1.5px] bg-[#005eb8]" />
                <span>SPECIALIZED SERVICES INCLUDED</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111111] leading-tight mb-2">
                Specialized Sub-Services &amp; Scope of Work
              </h3>
              <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
                Our certified technicians deliver complete end-to-end execution across every specialized service area within {service.shortTitle}.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {service.subcategories.map((sub, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl border border-slate-200/90 bg-white hover:border-[#005eb8] transition-colors group"
                >
                  <span className="w-6 h-6 rounded-full bg-blue-50 text-[#005eb8] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 group-hover:bg-[#005eb8] group-hover:text-white transition-colors">
                    {sIdx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="block text-sm font-semibold text-[#111111] group-hover:text-[#005eb8] transition-colors">
                      {sub}
                    </span>
                    <span className="text-[11px] text-gray-500 block mt-0.5">
                      Available across all Dubai communities
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 3. TECHNICAL SPECIFICATIONS & COMMON ISSUES                               */}
        {/* Grid Background: Center-Left (Size: 16px, Dimensions: w-72 h-72)          */}
        {/* ========================================================================= */}
        <div className="relative overflow-hidden pt-10 border-t border-gray-200">
          {/* Section Grid Background: Center-Left */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-60 h-60 sm:w-72 sm:h-72 pointer-events-none -z-10 overflow-hidden">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-40 h-40 bg-gradient-to-r from-blue-100/35 via-sky-50/15 to-transparent rounded-full blur-xl pointer-events-none" />
            <div
              className="w-full h-full opacity-65"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0, 94, 184, 0.12) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 94, 184, 0.12) 1px, transparent 1px)
                `,
                backgroundSize: '16px 16px',
                maskImage: 'radial-gradient(circle at left center, black 35%, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(circle at left center, black 35%, transparent 75%)',
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Technical Specs */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
                <Wrench className="w-4 h-4 text-[#005eb8]" />
                <h3 className="text-lg sm:text-xl font-bold text-[#111111]">
                  Technical Scope &amp; Engineering Procedures
                </h3>
              </div>
              <ul className="divide-y divide-gray-100">
                {service.specifications.map((spec, sIdx) => (
                  <li key={sIdx} className="py-3 flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#005eb8] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Dubai Issues Solved */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-200">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <h3 className="text-lg sm:text-xl font-bold text-[#111111]">
                  Common Problems We Resolve in Dubai
                </h3>
              </div>
              <ul className="divide-y divide-gray-100">
                {service.commonIssuesSolved.map((issue, iIdx) => (
                  <li key={iIdx} className="py-3 flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. FREQUENTLY ASKED QUESTIONS                                             */}
        {/* Grid Background: Bottom-Right (Size: 22px, Dimensions: w-[460px])         */}
        {/* ========================================================================= */}
        <div className="relative overflow-hidden pt-10 border-t border-gray-200">
          {/* Section Grid Background: Bottom-Right */}
          <div className="absolute bottom-0 right-0 w-80 h-80 sm:w-[460px] sm:h-[460px] pointer-events-none -z-10 overflow-hidden">
            <div className="absolute bottom-0 right-0 w-52 h-52 bg-gradient-to-tl from-blue-100/40 via-sky-50/20 to-transparent rounded-full blur-xl pointer-events-none" />
            <div
              className="w-full h-full opacity-65"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0, 94, 184, 0.12) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 94, 184, 0.12) 1px, transparent 1px)
                `,
                backgroundSize: '22px 22px',
                maskImage: 'radial-gradient(circle at bottom right, black 35%, transparent 75%)',
                WebkitMaskImage: 'radial-gradient(circle at bottom right, black 35%, transparent 75%)',
              }}
            />
          </div>

          <header className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[1.5px] bg-[#005eb8]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-gray-700">
                Got Questions? We Have Answers
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#111111] leading-tight mb-3">
              Frequently Asked Questions About {service.shortTitle}
            </h3>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Find answers to the most common questions about our {service.shortTitle.toLowerCase()} services in Dubai.
            </p>
          </header>

          {/* 2-Column Border-b Accordion (Identical to Homepage Style) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10">
            <div>
              {leftFaqs.map((faq, fIdx) => {
                const isOpen = openFaq === fIdx;
                return (
                  <div key={fIdx} className="border-b border-gray-200">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleFaq(fIdx)}
                      className="w-full p-4 sm:p-5 flex items-start justify-between text-left hover:bg-slate-50 transition-colors duration-200"
                    >
                      <span className="text-[15px] md:text-base font-medium text-[#111111] pr-4">
                        {faq.q}
                      </span>
                      <div className="shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-[#005eb8]' : 'text-gray-500'
                          }`}
                        />
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-4 sm:px-5 pb-5 text-[#666666] text-sm sm:text-[15px] leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              {rightFaqs.map((faq, fIdx) => {
                const actualIdx = fIdx + middleFaq;
                const isOpen = openFaq === actualIdx;
                return (
                  <div key={actualIdx} className="border-b border-gray-200">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => toggleFaq(actualIdx)}
                      className="w-full p-4 sm:p-5 flex items-start justify-between text-left hover:bg-slate-50 transition-colors duration-200"
                    >
                      <span className="text-[15px] md:text-base font-medium text-[#111111] pr-4">
                        {faq.q}
                      </span>
                      <div className="shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-[#005eb8]' : 'text-gray-500'
                          }`}
                        />
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-4 sm:px-5 pb-5 text-[#666666] text-sm sm:text-[15px] leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
