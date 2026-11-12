'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Wrench,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  FileText,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedShaderBackground from '@/components/ui/AnimatedShaderBackground';
import { ServiceDetail } from '@/data/servicesData';

export default function ServiceDetailContent({ service }: { service: ServiceDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const middleFaq = Math.ceil(service.faqs.length / 2);
  const leftFaqs = service.faqs.slice(0, middleFaq);
  const rightFaqs = service.faqs.slice(middleFaq);

  return (
    <div className="bg-white">
      {/* ========================================================================= */}
      {/* 1. EDITORIAL OVERVIEW & TECHNICAL PROTOCOL LEDGER (NO CARDS)              */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Faint Background Watermark */}
          <div
            className="absolute -top-6 sm:-top-10 left-4 pointer-events-none select-none z-0 overflow-hidden"
            aria-hidden="true"
          >
            <span className="font-[family-name:var(--font-onest)] text-7xl sm:text-9xl md:text-[140px] lg:text-[165px] font-black text-slate-900/[0.03] leading-none tracking-tight block">
              OVERVIEW
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Narrative & Inline Guarantees */}
            <div className="lg:col-span-7">
              <h2 className="font-[family-name:var(--font-onest)] text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0f172a] leading-[1.14] mb-4">
                Why Dubai Relies on Our {service.shortTitle}
              </h2>

              <p className="font-[family-name:var(--font-onest)] text-slate-600 text-sm sm:text-base md:text-[17px] leading-relaxed mb-8 font-normal">
                {service.overview}
              </p>

              {/* Inline Editorial Commitments (No Boxes) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-none [transform:skewX(-10deg)] bg-blue-50 border border-blue-200/70 text-[#0076FF] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 [transform:skewX(10deg)]" />
                  </div>
                  <div>
                    <span className="font-[family-name:var(--font-onest)] block font-bold text-sm text-[#0f172a]">
                      100% Genuine OEM Parts
                    </span>
                    <span className="block text-xs text-slate-500 mt-0.5">
                      Factory-original compressors, coils &amp; motors
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-none [transform:skewX(-10deg)] bg-blue-50 border border-blue-200/70 text-[#0076FF] flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 [transform:skewX(10deg)]" />
                  </div>
                  <div>
                    <span className="font-[family-name:var(--font-onest)] block font-bold text-sm text-[#0f172a]">
                      Clear Upfront Quotes
                    </span>
                    <span className="block text-xs text-slate-500 mt-0.5">
                      Written price approval before work starts
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sharp Technical Protocol Ledger */}
            <div className="lg:col-span-5">
              <div className="pb-3 border-b-2 border-[#0f172a] flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0f172a]">
                  Technical Protocol &amp; Verification
                </span>
                <span className="text-xs font-mono text-[#0076FF] font-semibold">
                  DUBAI STANDARDS
                </span>
              </div>

              <div className="divide-y divide-slate-200">
                <div className="py-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="block text-xs font-mono font-bold text-[#0076FF] uppercase mb-0.5">
                      01 / DIAGNOSTICS
                    </span>
                    <span className="block text-sm font-bold text-[#0f172a]">Digital Manifold Gauges</span>
                  </div>
                  <span className="text-xs text-slate-500 text-right mt-1">Superheat &amp; subcooling</span>
                </div>

                <div className="py-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="block text-xs font-mono font-bold text-[#0076FF] uppercase mb-0.5">
                      02 / THERMAL
                    </span>
                    <span className="block text-sm font-bold text-[#0f172a]">Infrared Leak Imaging</span>
                  </div>
                  <span className="text-xs text-slate-500 text-right mt-1">Duct leaks &amp; hot spots</span>
                </div>

                <div className="py-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="block text-xs font-mono font-bold text-[#0076FF] uppercase mb-0.5">
                      03 / ELECTRICAL
                    </span>
                    <span className="block text-sm font-bold text-[#0f172a]">Load &amp; Amperage Testing</span>
                  </div>
                  <span className="text-xs text-slate-500 text-right mt-1">Motor running amps</span>
                </div>

                <div className="py-4 flex items-start justify-between gap-4">
                  <div>
                    <span className="block text-xs font-mono font-bold text-[#0076FF] uppercase mb-0.5">
                      04 / QUALITY
                    </span>
                    <span className="block text-sm font-bold text-[#0f172a]">Factory OEM Components</span>
                  </div>
                  <span className="text-xs text-emerald-600 font-semibold text-right mt-1">100% Original Parts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DARK SHADER + LIQUID GLASS ADVANTAGES & SUB-SERVICES LIST              */}
      {/* Replaces generic 4-col and 3-col card grids with editorial split rows     */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-[#03132b] text-white">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <AnimatedShaderBackground
            patternStyle={3}
            speed={0.75}
            scale={1.0}
            distortion={2.5}
            brightness={1.5}
            refraction={1.0}
            colors={{
              base: '#000614',
              mid: '#004aa6',
              high: '#11444fff',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
          <div
            className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #00D4FF 0%, #004aa6 45%, transparent 70%)' }}
          />
          <div
            className="absolute top-1/3 -right-24 w-[500px] h-[500px] rounded-full blur-[130px] opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #0076FF 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-20 -left-20 w-[450px] h-[450px] rounded-full blur-[110px] opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #00AEEF 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-18">

          {/* Part A: Liquid-Glass Framed Advantages Ledger (No Card Grid) */}
          <div className="max-w-[1040px] mx-auto">
            <div className="p-2 sm:p-2.5 md:p-3 bg-white/[0.12] backdrop-blur-xl shadow-2xl shadow-black/30 rounded-none">
              <div className="bg-white text-slate-900 rounded-none p-6 sm:p-8 lg:p-10">
                <div className="max-w-2xl mb-6 sm:mb-8">
                  <h2 className="font-[family-name:var(--font-onest)] text-xl xs:text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0f172a] tracking-tight leading-[1.18] mb-2">
                    Key Advantages of Our {service.shortTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Built specifically to withstand 50°C UAE summer heat and protect your comfort.
                  </p>
                </div>

                <div className="divide-y divide-slate-200 border-t border-slate-200">
                  {service.keyBenefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-start"
                    >
                      <div className="md:col-span-5 flex items-center gap-3">
                        <span className="font-[family-name:var(--font-bebas)] text-2xl sm:text-3xl text-[#0076FF] leading-none shrink-0">
                          0{idx + 1}
                        </span>
                        <h3 className="font-[family-name:var(--font-onest)] font-bold text-base sm:text-lg text-[#0f172a] leading-snug">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="md:col-span-7 text-xs sm:text-sm text-slate-600 leading-relaxed pl-8 md:pl-0">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Part B: Clean 2-Column Typographic Sub-Services Index (Zero Box Cards) */}
          {service.subcategories && service.subcategories.length > 0 && (
            <div className="max-w-[1040px] mx-auto">
              <div className="max-w-2xl mb-7 sm:mb-9">
                <h2 className="font-[family-name:var(--font-onest)] text-2xl xs:text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.15] mb-2.5">
                  What Is Included in {service.shortTitle}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Complete end-to-end work performed across villas, apartments, and commercial spaces in Dubai.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-white/15">
                {service.subcategories.map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="py-4 border-b border-white/15 flex items-center justify-between gap-4 group"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="w-7 h-7 rounded-none [transform:skewX(-10deg)] bg-[#0076FF] text-white text-xs font-bold flex items-center justify-center shrink-0">
                        <span className="[transform:skewX(10deg)]">
                          {sIdx + 1 < 10 ? `0${sIdx + 1}` : sIdx + 1}
                        </span>
                      </span>
                      <span className="font-[family-name:var(--font-onest)] text-sm sm:text-[15px] font-semibold text-white group-hover:text-sky-300 transition-colors">
                        {sub}
                      </span>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 opacity-80" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TECHNICAL SCOPE, COMMON PROBLEMS & DUBAI LOCATIONS LEDGER              */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Technical Scope */}
            <div>
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b-2 border-[#0f172a]">
                <Wrench className="w-4 h-4 text-[#0076FF]" />
                <h2 className="font-[family-name:var(--font-onest)] text-lg sm:text-xl font-bold text-[#0f172a]">
                  Technical Scope &amp; Procedures
                </h2>
              </div>
              <ul className="divide-y divide-slate-200/80">
                {service.specifications.map((spec, sIdx) => (
                  <li key={sIdx} className="py-3.5 flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#0076FF] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Dubai Issues Solved */}
            <div>
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b-2 border-[#0f172a]">
                <AlertCircle className="w-4 h-4 text-[#0076FF]" />
                <h2 className="font-[family-name:var(--font-onest)] text-lg sm:text-xl font-bold text-[#0f172a]">
                  Common Problems We Solve in Dubai
                </h2>
              </div>
              <ul className="divide-y divide-slate-200/80">
                {service.commonIssuesSolved.map((issue, iIdx) => (
                  <li key={iIdx} className="py-3.5 flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-[#0076FF] shrink-0 mt-2 rounded-none" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SERVICE-SPECIFIC FAQS (MATCHING HOME FAQ STYLE)                        */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1250px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Faint Giant Background Watermark */}
          <div
            className="absolute -top-6 sm:-top-12 md:-top-16 left-4 pointer-events-none select-none z-0 overflow-hidden"
            aria-hidden="true"
          >
            <span className="font-[family-name:var(--font-onest)] text-7xl sm:text-9xl md:text-[140px] lg:text-[170px] font-black text-slate-900/[0.035] leading-none tracking-tight block">
              FAQS
            </span>
          </div>

          <header className="relative z-10 max-w-3xl mb-10 sm:mb-12">
            <h2 className="font-[family-name:var(--font-onest)] text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] tracking-tight leading-[1.14] mb-3">
              Frequently Asked Questions About {service.shortTitle}
            </h2>
            <p className="font-[family-name:var(--font-onest)] text-slate-600 text-sm sm:text-base leading-relaxed">
              Clear answers to the most common questions about {service.shortTitle.toLowerCase()} in Dubai.
            </p>
          </header>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-y-0 lg:gap-x-12 items-start">
            {[leftFaqs, rightFaqs].map((column, colIdx) => (
              <div key={colIdx}>
                {column.map((faq, fIdx) => {
                  const actualIdx = colIdx === 0 ? fIdx : fIdx + middleFaq;
                  const isOpen = openFaq === actualIdx;
                  const numLabel = actualIdx + 1 < 10 ? `0${actualIdx + 1}` : `${actualIdx + 1}`;
                  return (
                    <div key={actualIdx} className="border-b border-slate-200/80">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => toggleFaq(actualIdx)}
                        className="w-full py-5 px-1 flex items-start justify-between text-left transition-colors duration-200 group cursor-pointer"
                      >
                        <div className="flex items-start gap-3 sm:gap-4 pr-4">
                          <span className="font-[family-name:var(--font-onest)] text-xs sm:text-sm font-bold text-slate-400 group-hover:text-[#0076FF] transition-colors shrink-0 pt-0.5">
                            {numLabel}
                          </span>
                          <span
                            className={`font-[family-name:var(--font-onest)] text-base sm:text-[17px] font-bold leading-snug transition-colors ${
                              isOpen ? 'text-[#0076FF]' : 'text-slate-900 group-hover:text-[#0076FF]'
                            }`}
                          >
                            {faq.q}
                          </span>
                        </div>
                        <div
                          className={`shrink-0 w-8 h-8 rounded-none [transform:skewX(-10deg)] flex items-center justify-center transition-all duration-300 mt-0.5 ${
                            isOpen
                              ? 'bg-[#0076FF] text-white'
                              : 'bg-slate-100 text-slate-700 group-hover:bg-[#0076FF]/10 group-hover:text-[#0076FF]'
                          }`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 stroke-[2.25] [transform:skewX(10deg)] transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <div className="pl-7 sm:pl-9 pr-4 pb-5 font-[family-name:var(--font-onest)] text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
