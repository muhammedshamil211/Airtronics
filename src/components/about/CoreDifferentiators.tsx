'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { 
  ShieldCheck, 
  Receipt, 
  Check, 
  Clock, 
  Zap, 
  UserCheck, 
  Wrench, 
  ChevronRight, 
  CheckCircle2, 
  Leaf, 
  Siren, 
  Phone 
} from 'lucide-react';

const BRAND_NAME = 'Airtronics Fixcare Technical Services LLC';
const PHONE_NUMBER = '+971 58 659 6321';
const PRIMARY_LOCATION = 'Dubai, UAE';

// Reusable Circular Action Arrow
const ActionArrow = memo(() => (
  <div 
    aria-hidden="true"
    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-xs border border-slate-100 flex items-center justify-center text-[#00AEEF] hover:scale-105 transition-transform shrink-0"
  >
    <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
  </div>
));
ActionArrow.displayName = 'ActionArrow';

// Static JSON-LD Schema
const differentiatorsSchema = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: BRAND_NAME,
  telephone: PHONE_NUMBER,
  areaServed: [
    'Dubai Marina',
    'Palm Jumeirah',
    'Downtown Dubai',
    'Business Bay',
    'Arabian Ranches',
    'Jumeirah Village Circle (JVC)',
    'Dubai Hills Estate',
    'Al Barsha'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HVAC Engineering Standards',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Certified HVAC Diagnostics',
          description: '30 to 45 minute rapid dispatch across Dubai with digital manifold gauges and thermal cameras.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '100% Genuine OEM Replacement Parts',
          description: 'Original manufacturer HVAC components with 90-day warranty.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Upfront Fixed Binding Quotes',
          description: 'Zero hidden fees with transparent written itemized estimates.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'DEWA Energy Optimization',
          description: 'Thermodynamic tuning to lower monthly AC electricity consumption by up to 25%.'
        }
      }
    ]
  }
};

export default function CoreDifferentiators() {
  return (
    <section 
      aria-labelledby="why-airtronics-heading"
      className="py-8 md:py-12 bg-[#fcfcfc] border-b border-gray-100"
    >
      <Script
        id="differentiators-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(differentiatorsSchema),
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase font-bold tracking-widest text-[#005eb8] mb-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Why Airtronics Fixcare</span>
          </div>
          <h2 
            id="why-airtronics-heading"
            className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111111] leading-tight"
          >
            Engineering Standards Built for Dubai
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed">
            Fast response, certified diagnostic precision, and transparent pricing across {PRIMARY_LOCATION}.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 sm:gap-3">
          
          {/* Card 1 (7 Columns) - Certified Engineers & Mobile Fleet */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-gray-200/70 shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden flex flex-col justify-between group">
            {/* Full-Bleed Fleet Image Frame */}
            <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[43%] lg:w-[39%] h-full z-0 overflow-hidden">
              <Image
                src="/images/airtronics_fleet.jpg"
                alt="Airtronics Certified HVAC Mobile Fleet across Dubai"
                fill
                quality={80}
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 35vw"
                priority
              />
              <div className="absolute bottom-2.5 right-2.5 z-20">
                <ActionArrow />
              </div>
            </div>

            {/* Left Content Area with Organic Curved Divider */}
            <div className="relative z-10 p-3.5 sm:p-4 bg-white sm:bg-white/95 max-w-full sm:max-w-[63%] lg:max-w-[65%] flex flex-col justify-between h-full">
              <svg 
                className="absolute -right-[36px] sm:-right-[44px] top-0 bottom-0 h-full w-[36px] sm:w-[44px] text-white fill-current pointer-events-none z-10 hidden sm:block" 
                viewBox="0 0 45 240" 
                preserveAspectRatio="none"
              >
                <path d="M 0,0 L 38,0 C 19,22 4,65 6,115 C 8,165 34,190 40,218 C 44,230 40,238 30,240 L 0,240 Z" />
              </svg>

              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#EBF8FF] text-[#00AEEF] flex items-center justify-center shrink-0 border border-[#00AEEF]/20">
                      <UserCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block leading-tight">
                        Continuous Training
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-[#111111] leading-tight">
                        Certified Engineers &amp; Fleet
                      </h3>
                    </div>
                  </div>

                  <div className="hidden lg:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EBF8FF] text-[#008CCB] text-[11px] font-semibold shrink-0 border border-[#00AEEF]/20">
                    <Clock className="w-3 h-3 text-[#00AEEF]" />
                    <span>30–45 Min</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal mt-1.5">
                  Certified technicians dispatched across Dubai Marina, Palm Jumeirah, Downtown, Arabian Ranches &amp; JVC with digital diagnostic tools.
                </p>
              </div>

              {/* Badges Row */}
              <div className="mt-2.5 pt-2 border-t border-slate-100 grid grid-cols-3 gap-1.5">
                <div className="px-2 py-1 rounded-xl bg-[#F8FAFC] border border-slate-100 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                  <div className="leading-none">
                    <span className="text-[11px] font-bold text-[#00AEEF] block">30–45m</span>
                    <span className="text-[9px] text-gray-400">Arrival</span>
                  </div>
                </div>

                <div className="px-2 py-1 rounded-xl bg-[#F8FAFC] border border-slate-100 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                  <div className="leading-none">
                    <span className="text-[11px] font-bold text-[#00AEEF] block">100%</span>
                    <span className="text-[9px] text-gray-400">Root-Fix</span>
                  </div>
                </div>

                <div className="px-2 py-1 rounded-xl bg-[#F8FAFC] border border-slate-100 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3] shrink-0" />
                  <div className="leading-none">
                    <span className="text-[11px] font-bold text-emerald-600 block">Licensed</span>
                    <span className="text-[9px] text-gray-400">Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 (5 Columns) - 100% Genuine OEM Parts */}
          <div className="md:col-span-5 bg-white p-3.5 sm:p-4 rounded-2xl border border-gray-200/70 shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden flex flex-col justify-between group">
            {/* Right OEM Parts Image */}
            <div className="absolute right-0 bottom-1 top-4 w-[43%] h-[80%] z-0 pointer-events-none flex items-end justify-end">
              <div className="relative w-full h-full">
                <Image
                  src="/images/hvac_oem_parts1.png"
                  alt="Genuine OEM Spare Parts"
                  fill
                  quality={80}
                  className="object-contain object-bottom-right drop-shadow-xs transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
            </div>

            {/* Content Left */}
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-1 mb-1.5">
                <div className="w-8 h-8 rounded-xl bg-[#E8FBF1] text-[#059669] flex items-center justify-center shrink-0 border border-[#059669]/15">
                  <ShieldCheck className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8FBF1] text-[#059669] text-[11px] font-bold shrink-0 border border-[#059669]/20">
                  <Check className="w-3 h-3 stroke-[3]" />
                  <span>100% Factory OEM</span>
                </div>
              </div>

              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5 mt-1">
                Component Integrity
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#111111] leading-tight mb-1">
                Genuine OEM Spare Parts
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal max-w-[210px] sm:max-w-[240px]">
                We only install original compressors, motors, capacitors, and PCB boards with 90-day warranty.
              </p>
            </div>

            {/* Bottom Meta */}
            <div className="relative z-10 mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1 text-[11px] font-bold text-[#059669]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#059669] stroke-[2.5]" />
                <span>Zero Counterfeits</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-500 font-medium">90-Day Warranty</span>
                <ActionArrow />
              </div>
            </div>
          </div>

          {/* Card 3 (4 Columns) - Upfront Fixed Quotes */}
          <div className="md:col-span-4 bg-white p-3 sm:p-3.5 rounded-2xl border border-gray-200/70 shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden flex flex-col justify-between group">
            {/* Tilted Quote Document */}
            <div className="absolute -right-3 -bottom-5 top-4 w-[48%] h-full z-0 pointer-events-none flex items-center justify-end">
              <div className="relative w-full h-full rotate-6 scale-105 opacity-95 group-hover:scale-110 transition-transform duration-500">
                <Image
                  src="/images/service_quote_doc.jpg"
                  alt="Transparent Service Quote"
                  fill
                  quality={80}
                  className="object-contain object-right-bottom drop-shadow-xs"
                  sizes="(max-width: 768px) 40vw, 15vw"
                />
              </div>
            </div>

            <div className="relative z-10">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#FFF8EB] text-[#F59E0B] flex items-center justify-center mb-1.5 border border-[#F59E0B]/15">
                <Receipt className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                Zero Hidden Charges
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-[#111111] mb-1 leading-tight">
                Upfront Fixed Quotes
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal max-w-[175px] sm:max-w-[195px]">
                Itemized quotes provided before work starts with fixed labor and OEM part pricing.
              </p>
            </div>

            <div className="relative z-10 mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1 text-[11px] font-bold text-[#00AEEF]">
                <CheckCircle2 className="w-3.5 h-3.5 fill-[#00AEEF] text-white" />
                <span>Verified Standard</span>
              </div>
              <ActionArrow />
            </div>
          </div>

          {/* Card 4 (4 Columns) - DEWA Energy Savings */}
          <div className="md:col-span-4 bg-white p-3 sm:p-3.5 rounded-2xl border border-gray-200/70 shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden flex flex-col justify-between group">
            {/* Chart & Leaf Illustration */}
            <div className="absolute right-0 bottom-1 top-4 w-[42%] h-full z-0 pointer-events-none flex items-end justify-end pr-1 pb-7">
              <div className="relative w-full h-24 flex items-end justify-end">
                <svg className="absolute right-0 top-0 w-18 h-18 text-sky-100/70" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M 10 90 C 10 90 20 40 60 20 C 80 10 90 10 90 10 C 90 10 90 20 80 40 C 60 80 10 90 10 90 Z" />
                  <path d="M 10 90 Q 50 50 85 15" stroke="#BAE6FD" strokeWidth="3" fill="none" />
                </svg>
                <div className="relative z-10 flex items-end gap-1 pb-1 pr-0.5">
                  <div className="w-2 h-7 rounded-t-xs bg-sky-100" />
                  <div className="w-2 h-10 rounded-t-xs bg-sky-200" />
                  <div className="w-2 h-13 rounded-t-xs bg-sky-300" />
                  <div className="w-2 h-16 rounded-t-xs bg-sky-400" />
                  <div className="w-2 h-20 rounded-t-xs bg-[#00AEEF]" />
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#EBF8FF] text-[#00AEEF] flex items-center justify-center mb-1.5 border border-[#00AEEF]/15">
                <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                Lower Monthly Power Costs
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-[#111111] mb-1 leading-tight">
                DEWA Energy Savings
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal max-w-[175px] sm:max-w-[195px]">
                Coil chemical flushes and digital gas tuning lower compressor draw, cutting bills up to 25%.
              </p>
            </div>

            <div className="relative z-10 mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1 text-[11px] font-bold text-[#00AEEF]">
                <Zap className="w-3.5 h-3.5 text-[#00AEEF] stroke-[2.5]" />
                <span>Up to 25% Savings</span>
              </div>
              <ActionArrow />
            </div>
          </div>

          {/* Card 5 (4 Columns) - 24/7 Emergency Dispatch Callout */}
          <div className="md:col-span-4 bg-[#081226] text-white p-3 sm:p-3.5 rounded-2xl shadow-xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden flex flex-col justify-between group">
            {/* Technician Backdrop */}
            <div className="absolute right-0 top-0 bottom-0 w-[50%] h-full z-0 overflow-hidden pointer-events-none">
              <Image
                src="/images/technician_dark_hvac.jpg"
                alt="Airtronics Emergency AC Repair Technician"
                fill
                quality={75}
                className="object-cover object-center opacity-30 group-hover:opacity-45 transition-opacity duration-300"
                sizes="(max-width: 768px) 45vw, 15vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#081226] via-[#081226]/85 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-500/20 text-[#00AEEF] flex items-center justify-center mb-1.5 border border-blue-400/30">
                <Siren className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
              </div>

              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-0.5">
                24/7 Dubai Hotline
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-white mb-1 leading-tight">
                Urgent AC Breakdown?
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed font-normal max-w-[175px] sm:max-w-[195px]">
                Mobile units on standby across Dubai for immediate on-site diagnostic repair.
              </p>
            </div>

            <div className="relative z-10 mt-2.5">
              <Link
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`}
                className="w-full inline-flex items-center justify-between bg-[#0080FF] hover:bg-[#0070E0] text-white font-bold py-2 px-3 rounded-xl transition-colors text-xs shadow-xs group/btn"
              >
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {PHONE_NUMBER}</span>
                </div>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white group-hover/btn:scale-105 transition-transform">
                  <ChevronRight className="w-3 h-3 stroke-[2.5]" />
                </div>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
