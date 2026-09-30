'use client';

import React from 'react';
import Image from 'next/image';
import {
  CheckCircle2,
  XCircle,
  Cpu
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function CompanyStory() {
  const diagnosticTools = [
    {
      image: '/images/digital-manifold-gauge-set.png',
      title: 'Digital Manifold Gauges',
      desc: 'Precision pressure measurement, superheat & subcooling analysis for exact refrigerant rebalancing.',
    },
    {
      image: '/images/thermal-leak-detection.png',
      title: 'Thermal Leak Detection',
      desc: 'Infrared cameras that pinpoint invisible duct leaks, electrical hotspots, and micro refrigerant leaks.',
    },
    {
      image: '/images/airflow-digital-anemometer.png',
      title: 'Airflow Anemometers',
      desc: 'Digital CFM & static pressure measurement to eliminate hot spots and optimize airflow distribution.',
    },
    {
      image: '/images/meter-load-analysis.png',
      title: 'Amperage Load Analyzers',
      desc: 'Real-time motor running amperage checks to prevent compressor overheating and electrical tripouts.',
    },
  ];

  return (
    <section aria-label="Airtronics Corporate Story" className="py-16 md:py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#005eb8] mb-3">
            <Cpu className="w-4 h-4" />
            <span>Corporate Journey & Vision Since 2022</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#111111] leading-tight">
            Modern Diagnostic Engineering Built for the Demands of Dubai
          </h2>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">

          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-5 text-gray-600 leading-relaxed text-base">
            <p>
              <strong className="text-[#111111] font-semibold">Airtronics Fixcare Technical Services LLC</strong> was founded in Dubai in 2022 to resolve systemic issues across the region&apos;s property maintenance sector, where clients frequently faced delayed service arrivals, inaccurate fault diagnoses, and unpredictable pricing. The company was built around an operational model prioritizing diagnostic precision, technician accountability, and modern engineering standards.
            </p>
            <p>
              Rather than relying on outdated trial-and-error repairs, Airtronics Fixcare equips its field teams with modern digital manifold gauges, thermal imaging cameras, and airflow anemometers. This equipment allows technicians to analyze electrical balance, trace invisible refrigerant micro-leaks, and evaluate motor running amperages with exact precision.
            </p>
            <p>
              The company has expanded its technical footprint to support luxury villas, residential towers, commercial offices, and retail complexes across Dubai. The founding philosophy remains unchanged: solve the mechanical root cause of every breakdown, restore original cooling performance, and treat every customer with professional transparency.
            </p>
          </div>

          {/* Right Image & Highlight Container */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-slate-900 group">
              {/* High-quality HVAC Image */}
              <div className="relative h-[320px] sm:h-[400px] w-full">
                <Image
                  src="/images/hvac_service.png"
                  alt="Modern Digital AC Maintenance Diagnostics by Airtronics Dubai"
                  fill
                  className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                <p className="text-xs uppercase tracking-wider text-brand-accent font-bold mb-1">Dubai HVAC Standard</p>
                <h3 className="text-lg font-bold">100% Root-Cause Resolution</h3>
                <p className="text-xs text-gray-200 mt-1">
                  We eliminate repeat breakdowns by solving underlying thermodynamic and electrical failures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Technical Toolkit Grid */}
        <div className="mt-10 p-6 md:p-10 ">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">Advanced Technical Toolkit</h3>
              <p className="text-sm text-gray-500 mt-1">
                Factory-grade diagnostic equipment carried in every Airtronics mobile dispatch vehicle across Dubai.
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#005eb8]/10 text-[#005eb8] self-start md:self-auto">
              Precision Engineering Standard
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diagnosticTools.map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 bg-gray-100 border border-gray-100">
                    <Image
                      src={tool.image}
                      alt={`${tool.title} - Airtronics Dubai Technical Diagnostics`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <h4 className="text-base font-bold text-[#111111] mb-1.5">{tool.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-normal">{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Comparison Bar */}
          <div className="mt-10 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs uppercase font-bold text-red-700 tracking-wider">Traditional Handyman Approach</h4>
                <p className="text-xs text-red-600 mt-0.5">
                  Trial-and-error part swapping, guessing gas pressure by hand, ignoring coil airflow friction, temporary fixes causing recurring summer breakdowns.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs uppercase font-bold text-emerald-800 tracking-wider">The Airtronics Engineering Standard</h4>
                <p className="text-xs text-emerald-700 mt-0.5">
                  Digital diagnostics, exact pressure & subcooling readouts, infrared thermal audit, upfront binding quotes, and guaranteed OEM replacement parts.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
