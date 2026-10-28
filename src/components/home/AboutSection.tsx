'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Script from 'next/script';
import {
  ShieldCheck,
  Wrench,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

// Trust Pillars (Large standalone icons, no card wrapping, no descriptions)
const ABOUT_PILLARS = [
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
    title: 'Rapid 30–45 Min Dispatch',
  },
  {
    icon: CheckCircle2,
    title: '90-Day Written Warranty',
  },
];

export default function AboutSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <section
      id="about"
      aria-labelledby="about-section-heading"
      className="relative bg-slate-900 border-b border-gray-100 overflow-hidden min-h-[580px] lg:min-h-[640px] xl:min-h-[680px] flex flex-col justify-between items-center pt-0 pb-0"
    >
      {/* Schema.org Structured Data */}
      <Script
        id="about-section-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* ========================================================================= */}
      {/* 1. FULL-WIDTH BACKGROUND IMAGE WITH ATMOSPHERIC OVERLAY                   */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Image
          src="/images/hvac_maintenance_technician.jpg"
          alt="Airtronics certified HVAC technician performing AC maintenance and repair in Dubai"
          fill
          sizes="100vw"
          priority={false}
          className="object-cover object-center"
        />

        {/* Dark atmospheric overlay so the white shutter pops with high contrast */}
        <div className="absolute inset-0 bg-slate-950/75 sm:bg-slate-950/65" />
      </div>

      {/* ========================================================================= */}
      {/* 2. CENTERED SHUTTER DIV: Flush at Top (No Gap), Both Sides Slanted        */}
      {/* Slow-speed shutter down entrance animation on view                        */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 flex justify-center pt-0">
        <motion.div
          initial={{ y: '-100%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{
            duration: 1.5, // Slow, graceful shutter down motion
            ease: [0.16, 1, 0.3, 1], // Smooth luxury ease-out
            delay: 0.15,
          }}
          style={{
            clipPath: isDesktop
              ? 'polygon(0 0, 100% 0, calc(100% - 55px) 100%, 55px 100%)'
              : 'none',
          }}
          className="w-full bg-white text-[#111111] pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-10 md:pb-12 px-6 sm:px-12 md:px-16 lg:px-20 shadow-2xl rounded-b-xl lg:rounded-none relative overflow-hidden"
        >
          {/* ======================================================================= */}
          {/* BOTTOM-CENTER WAVE-SHAPED GRID PATTERN (Covers Up to Center)            */}
          {/* ======================================================================= */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[960px] h-[55%] pointer-events-none z-0 overflow-hidden">
            {/* Soft cooling blur aura rising to center */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[650px] h-[80%] bg-gradient-to-t from-blue-100/60 via-sky-50/25 to-transparent rounded-full blur-2xl pointer-events-none" />

            {/* Same Cross-Grid Pattern masked into a smooth wave curve covering up to center */}
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(0, 94, 184, 0.16) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 94, 184, 0.16) 1px, transparent 1px)
                `,
                backgroundSize: '16px 16px',
                maskImage: 'radial-gradient(ellipse 75% 85% at 50% 100%, black 40%, transparent 95%)',
                WebkitMaskImage: 'radial-gradient(ellipse 75% 85% at 50% 100%, black 40%, transparent 95%)',
              }}
            />
          </div>

          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-2 mb-3 text-center">
              <span className="text-[#005eb8] font-semibold" aria-hidden="true">/</span>
              <span className="text-sm md:text-base font-semibold tracking-wide text-gray-800 uppercase">
                About Airtronics Fixcare
              </span>
            </div>

            {/* Headline - Primary & Secondary SEO Keywords */}
            <h2
              id="about-section-heading"
              className="text-[28px] sm:text-[36px] md:text-[44px] font-medium tracking-tight text-[#111111] leading-[1.1] mb-4 text-center max-w-3xl mx-auto"
            >
              Dubai&apos;s Trusted HVAC &amp; AC Specialists <span className="text-[#005eb8]">Since 2022</span>
            </h2>

            {/* Narrative / Story */}
            <p className="text-[#666666] text-[15px] sm:text-base leading-relaxed mb-2.5 max-w-2xl mx-auto text-center">
              Established in Dubai in 2022, <strong>Airtronics Fixcare Technical Services LLC</strong> is a premier climate control and air conditioning maintenance specialist. When summer temperatures surpass 45°C, reliable cooling is non-negotiable.
            </p>

            <p className="text-[#666666] text-[15px] sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto text-center">
              Our certified engineers deploy precision digital manifold gauges, laser thermometers, and direct manufacturer OEM parts for Daikin, O General, Carrier, Gree, and York to guarantee optimal indoor comfort.
            </p>

          {/* Big Standalone Icons (4-Across Row, No Card Style, No Descriptions) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 max-w-4xl mx-auto">
            {ABOUT_PILLARS.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center gap-2 p-1.5 group"
                >
                  <IconComponent
                    className="w-8 h-8 sm:w-9 sm:h-9 text-[#005eb8] shrink-0 transition-transform group-hover:scale-110"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                  <h3 className="font-bold text-xs sm:text-sm text-[#111111] leading-snug">
                    {pillar.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Action Buttons Matching Reference Style (Order Service + All Services) */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-1">
            {/* Primary Action Button (Brand 3D Button) */}
            <Button
              href="/about"
              variant="primary"
              size="md"
              className="px-6 sm:px-7 !py-2.5 sm:!py-3.5 text-xs sm:text-sm md:text-base group"
              aria-label="Read More About Airtronics"
              iconRight={
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 fill-current transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M6 4l14 8-14 8V4z" />
                </svg>
              }
            >
              <span>Read More</span>
            </Button>

            {/* Secondary Action Button (White with Border) */}
            <Button
              href="/services"
              variant="white"
              size="md"
              className="px-6 sm:px-7 !py-2.5 sm:!py-3.5 text-xs sm:text-sm md:text-base group"
              aria-label="View All HVAC Services"
              iconRight={
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 fill-current transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M6 4l14 8-14 8V4z" />
                </svg>
              }
            >
              <span>All Services</span>
            </Button>
          </div>
        </div>
      </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* EXACT HERO BOTTOM-SIDE DIVIDER: Liquid Wave Transition into next section */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full leading-none pointer-events-none -mb-[1px] overflow-hidden mt-6 sm:mt-10">
        <svg
          viewBox="0 0 1440 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block scale-[1.01]"
          preserveAspectRatio="none"
        >
          {/* Soft cyan liquid aura glow layer */}
          <path
            d="M 0,35 C 90,35 140,20 200,20 C 250,20 260,55 280,55 C 300,55 310,24 370,24 C 440,24 480,38 540,38 C 580,38 590,65 615,65 C 640,65 655,30 715,30 C 775,30 815,44 865,44 C 905,44 915,64 935,64 C 955,64 970,26 1020,26 C 1080,26 1120,44 1170,44 C 1220,44 1235,70 1260,70 C 1285,70 1300,34 1360,34 C 1405,34 1425,36 1440,36 L 1440,95 L 0,95 Z"
            fill="rgba(0, 174, 239, 0.3)"
          />

          {/* Primary solid transition wave matching next section (CoreDifferentiators #fcfcfc) */}
          <path
            d="M 0,50 C 80,50 120,32 180,32 C 230,32 245,68 265,68 C 285,68 295,34 350,34 C 420,34 460,48 520,48 C 560,48 575,80 600,80 C 625,80 640,40 700,40 C 760,40 800,56 850,56 C 890,56 905,78 925,78 C 945,78 960,36 1020,36 C 1080,36 1120,54 1170,54 C 1210,54 1225,84 1250,84 C 1275,84 1290,44 1350,44 C 1395,44 1420,50 1440,50 L 1440,95 L 0,95 Z"
            fill="#fcfcfc"
          />
        </svg>
      </div>
    </section>
  );
}
