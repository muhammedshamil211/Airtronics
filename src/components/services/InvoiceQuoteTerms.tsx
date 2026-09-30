'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  Receipt, 
  Clock, 
  ArrowRight 
} from 'lucide-react';
import { INVOICE_QUOTE_TERMS } from '@/data/servicesData';

export default function InvoiceQuoteTerms() {
  const icons = [FileText, ShieldCheck, Receipt, Clock];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-gray-100" aria-labelledby="terms-heading">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
            <span className="text-[#005eb8] font-black text-sm">/</span>
            <span>TRANSPARENCY &amp; LEGAL STANDARDS</span>
          </div>

          <h2 id="terms-heading" className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#111111] leading-tight mb-3">
            {INVOICE_QUOTE_TERMS.title}
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
            {INVOICE_QUOTE_TERMS.subtitle} Our commitment to consumer transparency means you always know exact labor tariffs, warranty limits, and part pricing before any work starts.
          </p>
        </div>

        {/* 4 Standard Editorial Columns (No Card Boxes, No Shadows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-12">
          {INVOICE_QUOTE_TERMS.sections.map((sec, idx) => {
            const Icon = icons[idx] || FileText;
            return (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#111111] leading-snug">
                    {sec.heading}
                  </h3>
                </div>

                <ul className="space-y-2.5">
                  {sec.points.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-gray-600 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#005eb8] shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Summary Guarantee Callout - Horizontal Gradient Blending into White on Both Sides, Zero Border & Shadow */}
        <div className="bg-gradient-to-r from-white via-[#ebf4ff] to-white p-5 sm:p-6 md:p-7 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/90 text-[#005eb8] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#005eb8]" />
            </div>
            <div>
              <span className="block font-bold text-sm sm:text-base text-[#111111]">
                Zero Hidden Charges Guarantee
              </span>
              <span className="block text-xs sm:text-sm text-gray-600 leading-relaxed">
                If our technician uncovers additional issues during repair, you receive an itemized quote revision for written approval before extra work begins.
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-wrap items-center gap-2.5">
            <Link
              href="/terms"
              className="inline-flex items-center gap-2 bg-[#005eb8] hover:bg-[#004a94] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors group whitespace-nowrap"
            >
              <span>View Full Terms Page</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/cookies-policy"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/80 hover:bg-white text-slate-700 hover:text-[#005eb8] transition-colors text-xs font-semibold whitespace-nowrap"
            >
              <span>Cookies Policy</span>
            </Link>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>FTA VAT Compliant</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
