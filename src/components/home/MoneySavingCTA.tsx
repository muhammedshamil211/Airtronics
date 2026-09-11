'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MoneySavingCTA() {
  return (
    <section className="bg-white" aria-labelledby="saving-cta-heading">
      <div className="max-w-[1200px] w-full mx-auto px-5 md:px-8">
        <div className="flex flex-row items-stretch justify-between border-gray-200 bg-white hover:shadow-md transition-shadow duration-300">
          
          {/* Content */}
          <div className="w-3/5 md:w-3/5 p-4 sm:p-8 md:p-12 flex flex-col justify-center">
            <h2 id="saving-cta-heading" className="text-[20px] sm:text-[32px] md:text-[48px] font-medium tracking-tight text-[#111111] leading-[1.1] mb-2 sm:mb-4">
              High AC Bill?<br />
              <span className="text-brand">Your HVAC Might Be The Reason.</span>
            </h2>
            <p className="text-[12px] sm:text-[16px] md:text-[18px] text-[#666666] mb-4 sm:mb-8 max-w-lg hidden sm:block">
              Inefficient, aging, or poorly maintained AC units can consume significantly more power. Let our experts optimize your system and lower your energy costs in Dubai.
            </p>
            <p className="text-[12px] text-[#666666] mb-4 max-w-lg block sm:hidden">
              Poorly maintained AC units consume more power. Let us optimize your system in Dubai.
            </p>
            <div>
              <Link 
                href="https://wa.me/971586596321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-brand text-white px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold tracking-wide uppercase hover:bg-brand-hover transition-colors duration-300 gap-2"
                aria-label="Book an AC Inspection on WhatsApp"
              >
                <span>Book an Inspection</span>
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hidden sm:block">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="w-2/5 md:w-2/5 relative border-l border-gray-200">
            <Image
              src="/hvac_unit.jpg"
              alt="Technician maintaining premium HVAC Unit in Dubai"
              fill
              sizes="(max-width: 768px) 40vw, 480px"
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
