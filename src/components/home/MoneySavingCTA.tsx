'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Zap, ShieldCheck, Clock } from 'lucide-react';

export default function MoneySavingCTA() {
  return (
    <section className="bg-white py-4 sm:py-6 md:py-8" aria-labelledby="saving-cta-heading">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Main Card Container - Compact & Sleek */}
        <div className="relative overflow-hidden bg-white border border-gray-100 rounded-xl md:rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-300 min-h-[250px] sm:min-h-[280px] md:min-h-[300px] flex items-center">
          
          {/* Subtle Ambient Airflow & Circular Glow in BG */}
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[55%] md:w-[50%] bg-gradient-to-l from-blue-50/70 via-sky-50/30 to-transparent pointer-events-none -z-0" />

          {/* Delicate Circular Concentric Rings in BG */}
          <div 
            className="absolute right-[-20px] sm:right-4 md:right-8 lg:right-14 top-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] pointer-events-none -z-0"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-blue-100/40 rounded-full blur-2xl" />
            <svg viewBox="0 0 300 300" className="w-full h-full text-[#005eb8]/15" fill="none">
              <circle cx="150" cy="150" r="45" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
              <circle cx="150" cy="150" r="85" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="150" cy="150" r="125" stroke="currentColor" strokeWidth="1.2" strokeDasharray="5 5" opacity="0.6" />
              <circle cx="150" cy="150" r="145" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>

          {/* Background Image acting like BG of the card */}
          <div className="absolute right-0 bottom-0 top-0 w-full sm:w-[55%] md:w-[46%] lg:w-[43%] h-full pointer-events-none z-0">
            <Image
              src="/images/hvac-bill.png"
              alt="High AC electricity bill and distressed homeowner with split AC"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              className="object-contain object-right-bottom opacity-25 sm:opacity-40 md:opacity-100 transition-opacity duration-300"
            />
            {/* Fade mask for mobile screen readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent md:hidden" />
          </div>

          {/* Foreground Text Content */}
          <div className="relative z-10 w-full md:w-[58%] lg:w-[57%] p-5 sm:p-7 md:p-8 lg:p-9 flex flex-col justify-center">
            <h2 id="saving-cta-heading" className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-medium tracking-tight text-[#111111] leading-[1.1] mb-2 sm:mb-3">
              High AC Bill?<br />
              <span className="text-[#005eb8]">Your HVAC Might Be The Reason.</span>
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm md:text-[14px] leading-relaxed mb-4 sm:mb-5 max-w-lg">
              Inefficient, aging, or poorly maintained AC units can consume significantly more power. Let our experts optimize your system and lower your energy costs in Dubai.
            </p>

            {/* CTA Button */}
            <div>
              <Link 
                href="https://wa.me/971586596321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#005eb8] hover:bg-[#004a94] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-wide uppercase rounded-sm shadow-xs hover:shadow-md transition-all duration-300 group whitespace-nowrap"
                aria-label="Book an AC Inspection on WhatsApp"
              >
                <span>BOOK AN INSPECTION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            {/* Trust Icons below button */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 sm:mt-5 pt-3 border-t border-gray-100/80">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100">
                  <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#005eb8]" />
                </div>
                <span className="text-[11px] sm:text-xs text-gray-700 font-medium whitespace-nowrap">Save Up to 30% Power</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100">
                  <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </div>
                <span className="text-[11px] sm:text-xs text-gray-700 font-medium whitespace-nowrap">Certified Engineers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </div>
                <span className="text-[11px] sm:text-xs text-gray-700 font-medium whitespace-nowrap">30–45 Min Response</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
