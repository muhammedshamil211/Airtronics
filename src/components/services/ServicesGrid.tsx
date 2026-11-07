'use client';

import React from 'react';
import Link from 'next/link';
import { PhoneCall, CalendarCheck } from 'lucide-react';
import { SERVICES_DATA } from '@/data/servicesData';
import ServiceCard from '@/components/services/ServiceCard';

const WHATSAPP_PHONE = '971586596321';

export default function ServicesGrid() {
  return (
    <section
      id="services-catalog"
      className="py-16 sm:py-20 lg:py-24 bg-[#fcfcfc] border-b border-gray-100 relative"
      aria-labelledby="all-services-catalog"
    >
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">

        {/* Section Header Matching Home Services Style */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#005eb8] font-semibold" aria-hidden="true">/</span>
            <span className="text-xs md:text-sm font-semibold tracking-wide uppercase text-gray-800">
              Complete 18-Service Climate Catalog
            </span>
          </div>

          <h2
            id="all-services-catalog"
            className="text-[28px] sm:text-[38px] md:text-[46px] font-medium tracking-tight text-[#111111] leading-[1.12] mb-4"
          >
            Certified HVAC &amp; Climate Solutions in Dubai
          </h2>

          <p className="text-[#666666] text-base md:text-lg leading-relaxed">
            Every service is executed by certified HVAC engineers using digital diagnostics, genuine OEM replacement parts, and fixed itemized quotations across Dubai.
          </p>
        </div>

        {/* 18 Services Showcase Grid with Identical Animation & Interactive Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        {/* Bottom Fast-Action Conversion Bar */}
        <div className="mt-14 sm:mt-16 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)]">
          <div>
            <span className="text-lg sm:text-xl font-bold text-[#111111] block mb-1">
              Need Immediate AC or HVAC Assistance in Dubai?
            </span>
            <p className="text-sm text-gray-600">
              Our mobile technical vans are on standby across Dubai Marina, Downtown, Palm Jumeirah, and Business Bay.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+971586596321"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#005eb8] text-[#005eb8] hover:bg-blue-50 text-sm font-semibold transition-colors"
              aria-label="Call Dispatch Hotline"
            >
              <PhoneCall className="w-4 h-4 text-[#005eb8]" />
              <span>Call: +971 58 659 6321</span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                'Hello Airtronics Fixcare! I need emergency AC repair or HVAC service assistance in Dubai.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#005eb8] hover:bg-[#004a94] text-white text-sm font-semibold shadow-xs transition-colors"
              aria-label="Instant WhatsApp Dispatch"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Instant WhatsApp Dispatch</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
