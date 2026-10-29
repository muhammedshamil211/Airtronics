'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  ShieldCheck,
  Receipt,
  Building2,
  CheckCircle2,
  ArrowRight,
  Clock,
  Printer,
  Wrench,
  BadgeCheck,
  Award,
  Sparkles,
  MapPin,
  Check
} from 'lucide-react';
import { INVOICE_QUOTE_TERMS } from '@/data/termsData';

const WHATSAPP_PHONE = '971586596321';

export default function InvoiceQuoteTerms() {
  // Invoice & Quotation Toggle ('quotation' | 'invoice')
  const [activeDocType, setActiveDocType] = useState<'quotation' | 'invoice'>('quotation');

  const quotationTab = INVOICE_QUOTE_TERMS.tabs.find((t) => t.id === 'quotation')!;
  const invoiceTab = INVOICE_QUOTE_TERMS.tabs.find((t) => t.id === 'invoice')!;
  const warrantyTab = INVOICE_QUOTE_TERMS.tabs.find((t) => t.id === 'warranty')!;
  const accessTab = INVOICE_QUOTE_TERMS.tabs.find((t) => t.id === 'access')!;

  const currentDoc = activeDocType === 'quotation' ? quotationTab : invoiceTab;

  const whatsappMessage = encodeURIComponent(
    `Hello Airtronics Fixcare! I would like to inquire about your quotation terms, UAE FTA invoice standards, and 90-day warranty.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${whatsappMessage}`;

  return (
    <section
      id="transparency-and-terms"
      className="py-12 sm:py-16 lg:py-22 bg-white border-b border-gray-100 overflow-x-clip"
      aria-labelledby="terms-heading"
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8">

        {/* ========================================================================= */}
        {/* PART 1: TERMS & CONDITIONS FOR INVOICES AND QUOTATIONS                    */}
        {/* ========================================================================= */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          
          {/* Section Header - Airtronics Editorial Brand Style */}
          <div className="max-w-3xl mb-7 sm:mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#005eb8] font-bold text-sm" aria-hidden="true">/</span>
              <span className="text-xs md:text-sm font-semibold tracking-wider text-gray-800 uppercase">
                TRANSPARENCY &amp; LEGAL STANDARDS
              </span>
            </div>

            <h2
              id="terms-heading"
              className="text-[24px] xs:text-[26px] sm:text-[34px] md:text-[40px] font-medium tracking-tight text-[#111111] leading-[1.18] sm:leading-[1.15] mb-3"
            >
              {INVOICE_QUOTE_TERMS.title}
            </h2>

            <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
              {INVOICE_QUOTE_TERMS.subtitle} Our commitment to consumer transparency means you always know exact labor tariffs, warranty limits, and part pricing before any work starts.
            </p>
          </div>

          {/* Minimal 2-Way Document Switcher (Quotation vs Invoice) - Responsive Horizontal Scroll */}
          <div className="border-b border-gray-200 mb-8 sm:mb-10 overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center gap-5 sm:gap-10 pb-px min-w-max">
              <button
                type="button"
                onClick={() => setActiveDocType('quotation')}
                className={`group pb-3 text-left transition-colors whitespace-nowrap relative flex items-center gap-2 text-xs sm:text-base cursor-pointer focus:outline-hidden ${
                  activeDocType === 'quotation'
                    ? 'text-[#005eb8] font-semibold'
                    : 'text-gray-500 hover:text-[#111111] font-medium'
                }`}
              >
                <span
                  className={`text-[11px] sm:text-xs font-mono font-bold px-1.5 py-0.5 rounded transition-colors ${
                    activeDocType === 'quotation'
                      ? 'bg-blue-50 text-[#005eb8]'
                      : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200/80 group-hover:text-gray-800'
                  }`}
                >
                  01
                </span>
                <span>Quotation Validity &amp; 30-Day Price Lock</span>

                {activeDocType === 'quotation' && (
                  <motion.div
                    layoutId="docUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#005eb8]"
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveDocType('invoice')}
                className={`group pb-3 text-left transition-colors whitespace-nowrap relative flex items-center gap-2 text-xs sm:text-base cursor-pointer focus:outline-hidden ${
                  activeDocType === 'invoice'
                    ? 'text-[#005eb8] font-semibold'
                    : 'text-gray-500 hover:text-[#111111] font-medium'
                }`}
              >
                <span
                  className={`text-[11px] sm:text-xs font-mono font-bold px-1.5 py-0.5 rounded transition-colors ${
                    activeDocType === 'invoice'
                      ? 'bg-blue-50 text-[#005eb8]'
                      : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200/80 group-hover:text-gray-800'
                  }`}
                >
                  02
                </span>
                <span>Tax Invoice &amp; UAE FTA 5% VAT</span>

                {activeDocType === 'invoice' && (
                  <motion.div
                    layoutId="docUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#005eb8]"
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Two-Column Editorial Grid: Left Clauses / Right Realistic Folded Slip */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Editorial Clauses (No Card Boxes) */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDoc.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <div className="mb-5 sm:mb-6">
                    <span className="text-[11px] sm:text-xs font-bold text-[#005eb8] uppercase tracking-wider block mb-1">
                      {currentDoc.badge} • OFFICIAL OPERATIONAL STANDARD
                    </span>
                    <h3 className="text-lg sm:text-2xl font-medium tracking-tight text-[#111111] mb-2 leading-snug">
                      {currentDoc.heading}
                    </h3>
                    <p className="text-[#666666] text-xs sm:text-[15px] leading-relaxed">
                      {currentDoc.summary}
                    </p>
                  </div>

                  {/* Editorial Clauses List with Hairline Dividers */}
                  <div className="divide-y divide-gray-200/80 mb-6 sm:mb-7">
                    {currentDoc.items.map((item, idx) => (
                      <div key={idx} className="py-3.5 sm:py-4.5 first:pt-0 last:pb-0">
                        <div className="flex flex-col xs:flex-row xs:items-start justify-between gap-1.5 xs:gap-3 mb-1">
                          <div className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#005eb8] shrink-0 mt-1.5 sm:mt-2" />
                            <h4 className="text-xs sm:text-base font-semibold text-[#111111] leading-snug">
                              {item.title}
                            </h4>
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-semibold text-[#005eb8] bg-blue-50 border border-blue-100/60 px-2 sm:px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0 self-start xs:self-auto ml-3.5 xs:ml-0">
                            {item.highlight}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#666666] leading-relaxed pl-3.5 sm:pl-4">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Client Assurance Line Accent */}
                  <div className="border-l-2 border-[#005eb8] pl-3.5 sm:pl-4 py-1.5 bg-gradient-to-r from-blue-50/50 to-transparent">
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      <strong className="text-[#111111] font-semibold">Client Assurance: </strong>
                      {currentDoc.proTip}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Ultra-Realistic Paper Printed Slip with Responsive 3D Skew & Bottom-Left Fold */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full pt-4 lg:pt-0">
              <div
                className="w-full max-w-[330px] xs:max-w-[350px] sm:max-w-[380px] mx-auto lg:mr-0 relative select-none transition-all duration-500 ease-out hover:rotate-0 hover:scale-[1.01] [transform:rotate(-0.5deg)] lg:[transform:perspective(1200px)_rotate(-1.5deg)_rotateY(-4deg)_rotateX(3.5deg)_skew(-0.8deg,0.5deg)]"
                style={{
                  transformOrigin: 'top center',
                  filter: 'drop-shadow(0 16px 24px rgba(0,0,0,0.08)) drop-shadow(0 4px 8px rgba(0,0,0,0.04))',
                }}
              >
                
                {/* Paper Body */}
                <div
                  className="border border-[#e5e3dc] border-b-0 p-4 sm:p-6 text-[#222222] font-mono text-xs relative"
                  style={{
                    background: 'linear-gradient(150deg, #ffffff 0%, #fefdfa 45%, #f9f7f0 100%)',
                  }}
                >
                  {/* Paper Top Slot / Punch Hole */}
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ece9e0] mx-auto mb-3 sm:mb-4 border border-[#ddd9cc] shadow-inner" />

                  {/* Receipt Header */}
                  <div className="text-center pb-2.5 sm:pb-3 border-b border-dashed border-gray-300">
                    <div className="flex items-center justify-center gap-1.5 text-gray-500 mb-1">
                      <Printer className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-widest">
                        {activeDocType === 'quotation' ? 'OFFICIAL QUOTE SPECIMEN' : 'ELECTRONIC TAX INVOICE'}
                      </span>
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm tracking-tight text-[#111111] uppercase">
                      AIRTRONICS FIXCARE TECH SERVICES
                    </h4>
                    <p className="text-[9px] sm:text-[10px] text-gray-500 leading-tight mt-0.5">
                      DUBAI, UAE • FTA TRN: 100582947100003
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-gray-500 leading-tight">
                      TEL: +971 58 659 6321
                    </p>
                  </div>

                  {/* Receipt Metadata */}
                  <div className="py-2.5 sm:py-3 border-b border-dashed border-gray-300 text-[10px] sm:text-[11px] space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-500">DOCUMENT:</span>
                      <span className="font-bold text-[#111111] uppercase">
                        {activeDocType === 'quotation' ? 'BINDING ESTIMATE' : 'SIMPLIFIED TAX INVOICE'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">REF NO:</span>
                      <span className="font-bold text-[#005eb8]">{currentDoc.specimen.refNumber}</span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-gray-500 truncate">{currentDoc.specimen.metaLabel.toUpperCase()}:</span>
                      <span className="text-gray-800 shrink-0">{currentDoc.specimen.metaValue}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">STATUS:</span>
                      <span className="font-bold text-emerald-700">{currentDoc.specimen.statusText}</span>
                    </div>
                  </div>

                  {/* Line Items Table */}
                  <div className="py-2.5 sm:py-3 border-b border-dashed border-gray-300">
                    <div className="flex justify-between text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-2">
                      <span>DESCRIPTION / ITEM</span>
                      <span>AMOUNT</span>
                    </div>

                    <div className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-[11px]">
                      {currentDoc.specimen.lines.map((line, idx) => (
                        <div
                          key={idx}
                          className={`flex justify-between items-start gap-2 ${
                            line.isAccent
                              ? 'pt-1.5 sm:pt-2 mt-1.5 sm:mt-2 border-t border-dashed border-gray-400 font-bold text-[11px] sm:text-xs text-[#111111]'
                              : line.isDiscount
                              ? 'text-emerald-700'
                              : 'text-gray-700'
                          }`}
                        >
                          <span className="leading-snug">{line.label}</span>
                          <span className="font-mono whitespace-nowrap shrink-0">{line.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Official Ink Stamp */}
                  <div className="pt-3 sm:pt-4 pb-1.5 sm:pb-2 flex flex-col items-center justify-center">
                    <div
                      className={`border-2 border-dashed font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 sm:py-1.5 rounded rotate-[-2.5deg] text-center ${
                        currentDoc.specimen.statusVariant === 'emerald'
                          ? 'border-emerald-700 text-emerald-800 bg-emerald-50/60'
                          : 'border-[#005eb8] text-[#005eb8] bg-blue-50/60'
                      }`}
                    >
                      [ {currentDoc.specimen.stampText} ]
                    </div>

                    <p className="text-[9px] sm:text-[10px] text-gray-500 text-center italic mt-2 leading-snug">
                      &quot;{currentDoc.specimen.footerNote}&quot;
                    </p>
                  </div>

                  {/* Barcode Graphic */}
                  <div className="pt-2.5 sm:pt-3 border-t border-dashed border-gray-300">
                    <div
                      className="flex justify-center items-center gap-[2px] h-6 sm:h-7 my-1 text-gray-800"
                      aria-hidden="true"
                    >
                      <div className="w-[2px] h-full bg-current" />
                      <div className="w-[1px] h-full bg-current" />
                      <div className="w-[3px] h-full bg-current" />
                      <div className="w-[1.5px] h-full bg-current" />
                      <div className="w-[1px] h-full bg-current" />
                      <div className="w-[3.5px] h-full bg-current" />
                      <div className="w-[1px] h-full bg-current" />
                      <div className="w-[2px] h-full bg-current" />
                      <div className="w-[2.5px] h-full bg-current" />
                      <div className="w-[1px] h-full bg-current" />
                      <div className="w-[3px] h-full bg-current" />
                      <div className="w-[1.5px] h-full bg-current" />
                      <div className="w-[2px] h-full bg-current" />
                      <div className="w-[1px] h-full bg-current" />
                      <div className="w-[3.5px] h-full bg-current" />
                      <div className="w-[1.5px] h-full bg-current" />
                      <div className="w-[2px] h-full bg-current" />
                      <div className="w-[1px] h-full bg-current" />
                      <div className="w-[3px] h-full bg-current" />
                      <div className="w-[1px] h-full bg-current" />
                      <div className="w-[2.5px] h-full bg-current" />
                    </div>
                    <span className="block text-center font-mono text-[8px] sm:text-[9px] tracking-[0.25em] text-gray-500">
                      * 971-586-596-321 *
                    </span>
                    <span className="block text-center text-[8px] sm:text-[9px] text-gray-400 mt-0.5">
                      DUBAI MUNICIPALITY VERIFIED • SECURE ERP
                    </span>
                  </div>

                </div>

                {/* Seamless Bottom Edge: Diagonal Fold Cut (Left) + Sawtooth Perforation (Right) - Built Inside Same SVG */}
                <div className="relative -mt-[1px] leading-none overflow-visible">
                  <svg
                    className="w-full h-5 sm:h-6 block overflow-visible"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="paperFoldFlapGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ded9cb" />
                        <stop offset="45%" stopColor="#ebe6d8" />
                        <stop offset="85%" stopColor="#f7f5ed" />
                        <stop offset="100%" stopColor="#ffffff" />
                      </linearGradient>
                    </defs>

                    {/* Seamless Paper Silhouette with Diagonal Cut at Bottom-Left */}
                    <path
                      d="M0,0 L8,10 L10,6 L12,10 L14,6 L16,10 L18,6 L20,10 L22,6 L24,10 L26,6 L28,10 L30,6 L32,10 L34,6 L36,10 L38,6 L40,10 L42,6 L44,10 L46,6 L48,10 L50,6 L52,10 L54,6 L56,10 L58,6 L60,10 L62,6 L64,10 L66,6 L68,10 L70,6 L72,10 L74,6 L76,10 L78,6 L80,10 L82,6 L84,10 L86,6 L88,10 L90,6 L92,10 L94,6 L96,10 L98,6 L100,10 L100,0 Z"
                      fill="#f9f7f0"
                      stroke="#e5e3dc"
                      strokeWidth="0.6"
                    />

                    {/* Crease shadow line */}
                    <line x1="0" y1="0" x2="8" y2="10" stroke="rgba(0,0,0,0.18)" strokeWidth="0.5" />

                    {/* Folded paper triangle flap - perfectly synchronized within same SVG */}
                    <polygon
                      points="0,0 8,10 8,0"
                      fill="url(#paperFoldFlapGrad)"
                      stroke="#d5d0c2"
                      strokeWidth="0.4"
                    />

                    {/* Crease inner specular highlight */}
                    <line x1="0" y1="0" x2="8" y2="0" stroke="rgba(255,255,255,0.7)" strokeWidth="0.4" />
                  </svg>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Hairline Separator */}
        <hr className="border-t border-gray-200/80 mb-12 sm:mb-16 lg:mb-20" />

        {/* ========================================================================= */}
        {/* PART 2: DEDICATED WARRANTY PROTECTION & GENUINE OEM DESIGN                */}
        {/* ========================================================================= */}
        <div className="mb-12 sm:mb-16 lg:mb-20" id="warranty-protection">
          <div className="max-w-3xl mb-7 sm:mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#005eb8] font-bold text-sm" aria-hidden="true">/</span>
              <span className="text-xs md:text-sm font-semibold tracking-wider text-gray-800 uppercase">
                POST-SERVICE PROTECTION &amp; AUTHENTICITY
              </span>
            </div>

            <h3 className="text-[22px] xs:text-[24px] sm:text-3xl md:text-[36px] font-medium tracking-tight text-[#111111] leading-[1.18] sm:leading-[1.15] mb-2.5">
              90-Day Parts &amp; Workmanship Warranty
            </h3>

            <p className="text-[#666666] text-xs sm:text-[15px] leading-relaxed">
              Every repair and replacement component supplied by Airtronics Fixcare is protected by our ninety (90) calendar day warranty, automatically registered to your unique tax invoice number.
            </p>
          </div>

          {/* 3-Pillar Editorial Architecture (No Box Containers) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 pt-5 sm:pt-6 border-t border-gray-200 mb-6 sm:mb-8">
            {/* Pillar 1 */}
            <div>
              <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#005eb8] shrink-0" />
                <h4 className="font-semibold text-sm sm:text-base text-[#111111]">
                  100% Genuine OEM Parts
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed pl-6 md:pl-0">
                Direct factory-sourced compressors, fan motors, capacitors, and PCB control boards from certified regional distributors (Daikin, Carrier, LG, York, O General). Zero counterfeit or refurbished components.
              </p>
            </div>

            {/* Pillar 2 */}
            <div>
              <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#005eb8] shrink-0" />
                <h4 className="font-semibold text-sm sm:text-base text-[#111111]">
                  90 Days Complete Coverage
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed pl-6 md:pl-0">
                Both installed parts and technician labor are protected for ninety (90) full days from the invoice date. Covers defective parts, gas leaks at serviced joints, and mechanical failure under regular use.
              </p>
            </div>

            {/* Pillar 3 */}
            <div>
              <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-[#005eb8] shrink-0" />
                <h4 className="font-semibold text-sm sm:text-base text-[#111111]">
                  0 AED Warranty Callout Fee
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed pl-6 md:pl-0">
                If any serviced AC component malfunctions within your 90-day coverage window, our certified technician returns immediately at zero callout fee and resolves the verified issue promptly.
              </p>
            </div>
          </div>

          {/* Official ERP Warranty Verification Strip - Responsive Wrap */}
          <div className="py-3 px-3.5 sm:px-6 bg-slate-50 border-y border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-gray-700 text-[11px] sm:text-xs">
              <span className="font-bold text-[#005eb8]">WARRANTY TRACKING:</span>
              <span>WR-2026-DXB-90D</span>
              <span className="hidden xs:inline text-gray-300">•</span>
              <span className="text-emerald-700 font-semibold">100% FACTORY OEM BACKED</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 text-gray-500 font-medium text-[11px] sm:text-xs">
              <BadgeCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#005eb8] shrink-0" />
              <span>Digital Record Tied to Your Tax Invoice Number</span>
            </div>
          </div>
        </div>

        {/* Hairline Separator */}
        <hr className="border-t border-gray-200/80 mb-12 sm:mb-16 lg:mb-20" />

        {/* ========================================================================= */}
        {/* PART 3: DEDICATED COMMUNITY ACCESS & DUBAI SAFETY DESIGN                  */}
        {/* ========================================================================= */}
        <div className="mb-12 sm:mb-16 lg:mb-20" id="community-access-and-safety">
          <div className="max-w-3xl mb-7 sm:mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#005eb8] font-bold text-sm" aria-hidden="true">/</span>
              <span className="text-xs md:text-sm font-semibold tracking-wider text-gray-800 uppercase">
                DUBAI ACCESS &amp; HSE PROTOCOLS
              </span>
            </div>

            <h3 className="text-[22px] xs:text-[24px] sm:text-3xl md:text-[36px] font-medium tracking-tight text-[#111111] leading-[1.18] sm:leading-[1.15] mb-2.5">
              Community Gate Pass (NOC) &amp; Civil Safety
            </h3>

            <p className="text-[#666666] text-xs sm:text-[15px] leading-relaxed">
              From gated residential communities across Dubai to luxury high-rise towers, our teams operate with full gate pass compliance and adhere strictly to Dubai Municipality and Civil Defence environmental standards.
            </p>
          </div>

          {/* Two-Column Editorial: Standards on Left / Communities Directory on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start pt-5 sm:pt-6 border-t border-gray-200">
            
            {/* Left Column: 3 Core Protocols */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-3.5">
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-50 text-[#005eb8] font-bold text-[11px] sm:text-xs flex items-center justify-center shrink-0 mt-0.5">
                  01
                </span>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-[#111111] mb-1">
                    Gate Pass (NOC) Assistance &amp; Paperwork
                  </h4>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    We readily supply verified company trade licenses, public liability insurance policies, and technician Emirates IDs to property managers and security desks for smooth entry approvals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-3.5">
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-50 text-[#005eb8] font-bold text-[11px] sm:text-xs flex items-center justify-center shrink-0 mt-0.5">
                  02
                </span>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-[#111111] mb-1">
                    Floor &amp; Furniture Cleanliness Protection
                  </h4>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    Our technicians use protective clean drop cloths beneath ceiling hatches and wear shoe coverings inside living quarters, leaving your premises spotless after maintenance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-3.5">
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-50 text-[#005eb8] font-bold text-[11px] sm:text-xs flex items-center justify-center shrink-0 mt-0.5">
                  03
                </span>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-[#111111] mb-1">
                    Dubai Municipality Refrigerant HSE Compliance
                  </h4>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    We strictly utilize certified closed-loop refrigerant recovery stations and insulated tooling, preventing atmospheric refrigerant discharge in accordance with UAE environmental directives.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Pre-Cleared Communities Directory */}
            <div className="lg:col-span-5 border-l-0 lg:border-l lg:border-gray-200 lg:pl-10 pt-6 lg:pt-0 border-t lg:border-t-0 border-gray-200">
              <div className="pb-3 border-b border-gray-200 mb-3.5 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                  Pre-Cleared Communities &amp; Developers
                </span>
                <span className="text-xs font-mono text-[#005eb8] font-semibold">
                  DUBAI WIDE
                </span>
              </div>

              <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2 text-gray-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Emaar Communities:</strong> Downtown, Dubai Hills, Arabian Ranches</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Nakheel Developments:</strong> Palm Jumeirah, Jumeirah Islands, JLT</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Damac Master Communities:</strong> Damac Hills 1 &amp; 2, Akoya</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Dubai Holding &amp; Meraas:</strong> City Walk, BlueWaters, JBR</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>High-Rise Towers:</strong> Business Bay, DIFC &amp; Dubai Marina</span>
                </div>
              </div>

              <div className="mt-4 pt-3.5 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
                <MapPin className="w-3.5 h-3.5 text-[#005eb8] shrink-0" />
                <span>Rapid dispatch across all major Dubai zones within 30–45 mins.</span>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 4: SUMMARY GUARANTEE CALLOUT & DIRECT WHATSAPP INQUIRY               */}
        {/* ========================================================================= */}
        <div className="bg-gradient-to-r from-white via-[#ebf4ff] to-white p-4 sm:p-6 md:p-7 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-5">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/90 text-[#005eb8] flex items-center justify-center shrink-0 shadow-xs mt-0.5 sm:mt-0">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#005eb8]" />
            </div>
            <div>
              <span className="block font-bold text-xs sm:text-base text-[#111111]">
                Zero Hidden Charges Guarantee
              </span>
              <span className="block text-[11px] sm:text-sm text-gray-600 leading-relaxed mt-0.5">
                If our technician uncovers additional issues during repair, you receive an itemized quote revision for written approval before extra work begins.
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 w-full md:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#005eb8] hover:bg-[#004a94] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors group whitespace-nowrap w-full sm:w-auto text-center shadow-xs"
            >
              <span>Ask About Tariffs (WhatsApp)</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>

            <Link
              href="/terms"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/90 hover:bg-white text-slate-700 hover:text-[#005eb8] transition-colors text-xs font-semibold whitespace-nowrap w-full sm:w-auto text-center border border-slate-200/70"
            >
              <span>View Full Terms Page</span>
            </Link>

            <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-xs whitespace-nowrap self-center sm:self-auto">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>FTA VAT Compliant</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
