'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  Receipt, 
  Clock, 
  ArrowRight,
  AlertCircle,
  HelpCircle 
} from 'lucide-react';
import { INVOICE_QUOTE_TERMS } from '@/data/servicesData';

export default function InvoiceQuoteTerms() {
  return (
    <section className="py-14 sm:py-18 lg:py-22 bg-white border-b border-gray-100" aria-labelledby="terms-heading">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-xs sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5">
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

        {/* 4 Terms & Conditions Structured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-10">
          {INVOICE_QUOTE_TERMS.sections.map((sec, idx) => (
            <div 
              key={idx}
              className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#005eb8]/40 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100">
                    {idx === 0 && <FileText className="w-4 h-4" />}
                    {idx === 1 && <ShieldCheck className="w-4 h-4" />}
                    {idx === 2 && <Receipt className="w-4 h-4" />}
                    {idx === 3 && <Clock className="w-4 h-4" />}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#111111] leading-snug">
                    {sec.heading}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {sec.points.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#005eb8] shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Guarantee Callout Box */}
        <div className="bg-[#081226] text-white rounded-2xl p-5 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-lg">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-[#00AEEF] flex items-center justify-center shrink-0 border border-blue-400/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-bold text-sm sm:text-base text-white">
                Zero Hidden Charges Guarantee
              </span>
              <span className="block text-xs sm:text-sm text-slate-300 leading-relaxed">
                If our technician uncovers additional mechanical issues during repair, you receive an itemized quote revision for written approval before extra work begins.
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-wrap items-center gap-2.5">
            <Link
              href="/terms"
              className="inline-flex items-center gap-2 bg-[#005eb8] hover:bg-[#004a94] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl transition-all shadow-md group whitespace-nowrap"
            >
              <span>View Full Terms Page</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/cookies-policy"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-all text-xs font-semibold border border-slate-700 whitespace-nowrap"
            >
              <span>Cookies Policy</span>
            </Link>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs border border-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>FTA VAT Compliant</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
