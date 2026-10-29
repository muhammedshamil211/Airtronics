'use client';

import React from 'react';
import Image from 'next/image';
import { Gauge, Camera, Wind, Zap, CheckCircle2 } from 'lucide-react';

export default function CompanyStory() {
  const diagnosticTools = [
    {
      icon: Gauge,
      title: 'Digital Manifold Gauges',
      desc: 'Precision pressure measurement, subcooling, and superheat analysis for exact refrigerant charge balancing.',
    },
    {
      icon: Camera,
      title: 'Infrared Thermal Imaging',
      desc: 'Pinpointing invisible duct leaks, insulation gaps, electrical hotspots, and micro refrigerant loss.',
    },
    {
      icon: Wind,
      title: 'Digital CFM Anemometers',
      desc: 'Static pressure and airflow volume measurement to eliminate uneven cooling and hot spots across rooms.',
    },
    {
      icon: Zap,
      title: 'Motor Amperage Analyzers',
      desc: 'Real-time running amperage checks to prevent compressor overheating and repetitive electrical tripouts.',
    },
  ];

  return (
    <section
      aria-label="Airtronics Corporate Story"
      className="py-20 sm:py-20 lg:py-20 bg-white border-b border-gray-100 overflow-hidden"
    >
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#005eb8] font-semibold" aria-hidden="true">/</span>
            <span className="text-sm md:text-base font-semibold tracking-wide text-gray-800 uppercase">
              Our Story &amp; Diagnostic Toolkit
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-medium tracking-tight text-[#111111] leading-[1.1] mb-4">
            Built to Conquer Dubai’s Extreme 45°C+ Summer Heatwaves
          </h2>

          <p className="text-[#666666] text-[15px] sm:text-base leading-relaxed">
            Airtronics Fixcare Technical Services LLC was founded in Dubai in 2022 to eliminate common industry pain points: delayed emergency arrivals, inaccurate trial-and-error diagnoses, and unexpected invoices.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-5 text-[#555555] leading-relaxed text-[15px] sm:text-base">
            <p>
              Air conditioning in the UAE is not an amenity—it is vital infrastructure. When outdoor temperatures climb past 45°C, minor thermodynamic imbalances quickly cascade into total compressor shutdowns, ice buildup, and severe water damage to ceilings and furnishings.
            </p>
            <p>
              Instead of relying on guesswork, our founders engineered a systematic protocol: every service call begins with digital diagnostics measuring running amperage, superheat calculations, and airflow velocity. This targets the root mechanical failure on the initial visit rather than treating surface symptoms.
            </p>
            <p>
              Today, our certified technical fleet services residential villas, commercial towers, retail centers, and residential communities throughout Dubai with binding upfront quotations and guaranteed OEM components.
            </p>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-900 group">
              <div className="relative h-[320px] sm:h-[380px] w-full">
                <Image
                  src="/images/hvac_service.png"
                  alt="Certified Airtronics technician performing precision digital AC diagnostics in Dubai"
                  fill
                  quality={90}
                  loading="lazy"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
              </div>

              {/* Bottom Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/15 text-white">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider mb-1">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  <span>Engineering Standard</span>
                </div>
                <h3 className="text-base font-bold text-white leading-snug">
                  100% Root-Cause Mechanical Resolution
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  We eliminate repetitive breakdowns by solving underlying thermodynamic and electrical failures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Toolkit Grid */}
        <div className="bg-[#fcfcfc] border border-slate-200/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-2">
              Factory-Grade Diagnostic Instrumentation
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Carried in every Airtronics mobile dispatch unit across Dubai to ensure laboratory-grade accuracy on site.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {diagnosticTools.map((tool) => (
              <div
                key={tool.title}
                className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-xs hover:border-[#005eb8]/40 transition-colors"
              >
                <tool.icon className="w-7 h-7 text-[#005eb8] stroke-[1.75] mb-3" aria-hidden="true" />
                <h4 className="text-base font-bold text-[#111111] mb-1.5">
                  {tool.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
