'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { ArrowRight, Zap, ShieldCheck, Clock } from 'lucide-react';

export default function MoneySavingCTA() {
  return (
    <section className="bg-white py-4 sm:py-6 md:py-8" aria-labelledby="saving-cta-heading">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8">

        {/* Main Card Container - Exact Desktop Composition across All Screens */}
        <div className="relative overflow-hidden bg-white border border-gray-100 rounded-xl md:rounded-2xl shadow-xs hover:shadow-md transition-shadow duration-300 min-h-[200px] xs:min-h-[220px] sm:min-h-[260px] md:min-h-[300px] flex items-center">

          {/* Subtle Ambient Airflow & Circular Glow in BG */}
          <div className="absolute right-0 top-0 bottom-0 w-[50%] md:w-[50%] bg-gradient-to-l from-blue-50/70 via-sky-50/30 to-transparent pointer-events-none -z-0" />

          {/* Delicate Circular Concentric Rings in BG */}
          <div
            className="absolute right-[-10px] sm:right-4 md:right-8 lg:right-14 top-1/2 -translate-y-1/2 w-[160px] h-[160px] sm:w-[260px] sm:h-[260px] md:w-[380px] md:h-[380px] pointer-events-none -z-0"
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

          {/* Background Image on Right - 100% Opacity on Both Mobile & Desktop */}
          <div className="absolute right-0 bottom-0 top-0 w-[38%] xs:w-[40%] sm:w-[44%] md:w-[46%] lg:w-[43%] h-full pointer-events-none z-0">
            <Image
              src="/images/hvac-bill.png"
              alt="High AC electricity bill and distressed homeowner with split AC"
              fill
              sizes="(max-width: 768px) 45vw, (max-width: 1200px) 50vw, 500px"
              className="object-contain object-right-bottom opacity-100"
            />
          </div>

          {/* Foreground Text Content */}
          <div className="relative z-10 w-[65%] xs:w-[62%] sm:w-[58%] lg:w-[57%] p-4 xs:p-5 sm:p-6 md:p-8 lg:p-9 flex flex-col justify-center">

            {/* Heading */}
            <h2 id="saving-cta-heading" className="text-lg xs:text-xl sm:text-2xl md:text-[32px] lg:text-[38px] font-medium tracking-tight text-[#111111] leading-[1.15] mb-2 sm:mb-2.5">
              High AC Bill?<br />
              <span className="text-[#005eb8]">Your HVAC Might Be The Reason.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-600 text-xs xs:text-sm sm:text-[15px] md:text-base leading-relaxed mb-3 sm:mb-4 max-w-lg">
              Inefficient, aging, or poorly maintained AC units consume significantly more power. Let our experts optimize your system and lower your energy costs in Dubai.
            </p>

            {/* CTA Button */}
            <div>
              <Button
                href="https://wa.me/971586596321"
                target="_blank"
                variant="primary"
                size="pill"
                className="px-4 sm:px-6 md:px-7 !py-2.5 sm:!py-3 text-xs sm:text-xs md:text-sm tracking-wide uppercase whitespace-nowrap group"
                aria-label="Book an AC Inspection on WhatsApp"
                iconRight={
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                }
              >
                <span>BOOK AN INSPECTION</span>
              </Button>
            </div>

            {/* Trust Icons below button */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-100/80">
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100">
                  <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#005eb8]" />
                </div>
                <span className="text-[11px] xs:text-xs sm:text-sm text-gray-700 font-medium whitespace-nowrap">Save 30% Power</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100">
                  <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </div>
                <span className="text-[11px] xs:text-xs sm:text-sm text-gray-700 font-medium whitespace-nowrap">Certified Engineers</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </div>
                <span className="text-[11px] xs:text-xs sm:text-sm text-gray-700 font-medium whitespace-nowrap">30–45 Min Response</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
