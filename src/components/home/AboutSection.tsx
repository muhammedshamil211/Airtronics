'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import Script from 'next/script';
import {
  ShieldCheck,
  Wrench,
  Clock,
  CheckCircle2,
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { motion } from 'framer-motion';

// Trust Pillars (Clean & Flat, Short Titles Only, No Long Descriptions)
const TRUST_PILLARS = [
  {
    icon: ShieldCheck,
    title: 'Dubai Municipality Approved',
  },
  {
    icon: Wrench,
    title: '100% Genuine OEM Parts',
  },
  {
    icon: Clock,
    title: 'Fast 30–45 Min Arrival',
  },
  {
    icon: CheckCircle2,
    title: '90-Day Written Warranty',
  },
];

export default function AboutSection() {
  // Rich Schema.org Structured Data for SEO Authority & E-E-A-T Signals
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': 'https://airtronicsfixcare.com/#about-business',
    'name': 'Airtronics Fixcare Technical Services LLC',
    'alternateName': 'Airtronics Fixcare Dubai',
    'description': 'Certified HVAC and air conditioning repair company operating in Dubai since 2022. Delivering emergency AC maintenance, precision diagnostics, duct cleaning, and turnkey installations across Dubai.',
    'url': 'https://airtronicsfixcare.com/about',
    'foundingDate': '2022',
    'priceRange': 'AED 150 - AED 1500',
    'knowsAbout': [
      'Emergency AC Repair Dubai',
      'HVAC Preventive Maintenance',
      'AC Gas Leak Detection and Top-Up',
      'Air Duct Sanitation and Cleaning',
      'Central AC and Chiller Maintenance',
      'Thermostat Calibration and Smart AC Controls'
    ],
    'areaServed': [
      { '@type': 'City', 'name': 'Dubai' },
      { '@type': 'AdministrativeArea', 'name': 'Dubai Marina' },
      { '@type': 'AdministrativeArea', 'name': 'Downtown Dubai' },
      { '@type': 'AdministrativeArea', 'name': 'Palm Jumeirah' },
      { '@type': 'AdministrativeArea', 'name': 'Business Bay' }
    ],
  };

  return (
    <div className="relative z-20 w-full pt-10 sm:pt-14 lg:pt-16 pb-14 sm:pb-20 lg:pb-24">
      {/* Schema.org Structured Data */}
      <Script
        id="about-section-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* ========================================================================= */}
      {/* CENTERED ABOUT DIV (Placed in Process Section, Centered, Not Full Width)   */}
      {/* ========================================================================= */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
        <div
          id="about"
          aria-labelledby="about-section-heading"
          className="relative bg-white text-slate-900 rounded-3xl sm:rounded-[32px] p-6 sm:p-10 lg:p-14 border border-slate-200/80 shadow-2xl shadow-black/25 overflow-hidden"
        >
          {/* Background Watermark "ABOUT" (Matches ServicesShowcase & Booking style) */}
          <div
            className="absolute -top-6 xs:-top-8 sm:-top-12 md:-top-16 left-0 sm:left-4 pointer-events-none select-none z-0 overflow-hidden"
            aria-hidden="true"
          >
            <span className="font-[family-name:var(--font-onest)] text-7xl xs:text-8xl sm:text-9xl md:text-[140px] lg:text-[170px] font-black text-slate-900/[0.035] leading-none tracking-tight block">
              ABOUT
            </span>
          </div>

          {/* Section Header: Eyebrow + Heading + Simple English Story */}
          <div className="relative z-10 max-w-3xl mb-8 sm:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {/* Eyebrow with Blue Accent Line */}
              <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                <span className="w-7 sm:w-9 h-[2.5px] bg-[#0076FF] rounded-full inline-block" />
                <span className="text-xs sm:text-sm font-bold tracking-[0.16em] text-[#0076FF] uppercase">
                  ABOUT AIRTRONICS
                </span>
              </div>

              {/* Section Heading */}
              <h2
                id="about-section-heading"
                className="font-[family-name:var(--font-onest)] text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] tracking-tight leading-[1.14] mb-4"
              >
                Dubai&apos;s Friendly &amp; Trusted AC Repair Team Since 2022
              </h2>

              {/* Plain English, Simple & Honest Story */}
              <div className="space-y-3.5 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                <p>
                  We are <strong>Airtronics Fixcare</strong> — a licensed air conditioning service team based right here in Dubai. Since 2022, our goal has been simple: help families, homeowners, and local businesses stay cool, comfortable, and worry-free in the Dubai heat.
                </p>
                <p>
                  When your AC suddenly stops cooling, leaks water onto your floor, or starts making strange noises, you don&apos;t need complicated technical talk — you just need it fixed quickly and honestly. Our technicians arrive at your doorstep in 30 to 45 minutes, check the unit, explain what is wrong in plain English, and provide a clear upfront price before touching a tool.
                </p>
                <p>
                  No hidden fees, no unnecessary sales pressure, and no cheap fixes. We only install 100% genuine factory parts and back every repair with our 90-day written warranty. We are always just a call or WhatsApp away.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Flattened Trust Pillars (No Cards, Short Titles Only, No Long Details) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="relative z-10 pt-6 sm:pt-8 border-t border-slate-100"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {TRUST_PILLARS.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 text-[#0076FF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                      <IconComponent className="w-5 h-5 sm:w-5.5 sm:h-5.5" strokeWidth={2} />
                    </div>
                    <h3 className="font-[family-name:var(--font-onest)] text-xs sm:text-sm font-bold text-[#0f172a] leading-snug">
                      {pillar.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Actions / Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="relative z-10 flex flex-wrap items-center gap-3.5 pt-8 sm:pt-10"
          >
            <Button
              href="tel:+971586596321"
              variant="primary"
              size="md"
              className="px-6 sm:px-7 !py-2.5 sm:!py-3 text-xs sm:text-sm font-semibold group shadow-md shadow-blue-500/15"
              aria-label="Call Airtronics Fixcare"
              iconLeft={<PhoneCall className="w-4 h-4" />}
            >
              <span>Call 24/7: +971 58 659 6321</span>
            </Button>

            <Button
              href="/services"
              variant="white"
              size="md"
              className="px-6 sm:px-7 !py-2.5 sm:!py-3 text-xs sm:text-sm font-semibold group"
              aria-label="View All Services"
              iconRight={
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              }
            >
              <span>Explore All Services</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
