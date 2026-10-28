'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

interface ProjectPhoto {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
}

const RECENT_PROJECTS: ProjectPhoto[] = [
  {
    id: 'proj-1',
    title: 'Luxury Villa Central AC Diagnostic & Coil Overhaul',
    category: 'Emergency AC Repair',
    location: 'Palm Jumeirah, Dubai',
    image: '/images/hero_technician_dubai.jpg',
  },
  {
    id: 'proj-2',
    title: 'Commercial Ceiling Cassette AC System Commissioning',
    category: 'HVAC Installation',
    location: 'Business Bay, Dubai',
    image: '/images/ac_cassette_installation.jpg',
  },
  {
    id: 'proj-3',
    title: 'Thermodynamic Superheat & Refrigerant Recovery',
    category: 'Maintenance & Diagnostics',
    location: 'Jumeirah Village Circle (JVC)',
    image: '/images/hvac_maintenance_technician.jpg',
  },
  {
    id: 'proj-4',
    title: 'Deep Rotary Mechanical Duct Sanitization',
    category: 'Duct Cleaning',
    location: 'Dubai Hills Estate',
    image: '/images/duct_cleaning_interior_brush.jpg',
  },
  {
    id: 'proj-5',
    title: '24/7 Mobile HVAC Emergency Response Units on Dispatch',
    category: 'Emergency Fleet',
    location: 'Across All Dubai Communities',
    image: '/images/airtronics_fleet.jpg',
  },
  {
    id: 'proj-6',
    title: 'Chiller FCU Actuator & OEM Capacitor Replacement',
    category: 'Precision Diagnostics',
    location: 'Downtown Dubai',
    image: '/images/ac_repair_split_glow.jpg',
  },
];

export default function RecentWorkGallery() {
  const [activePhoto, setActivePhoto] = useState<ProjectPhoto | null>(null);

  const whatsappBookingUrl = `https://wa.me/971586596321?text=${encodeURIComponent(
    'Hello Airtronics! I saw your recent fieldwork photos and would like to book an HVAC service in Dubai.'
  )}`;

  return (
    <section
      id="recent-work"
      aria-labelledby="recent-work-heading"
      className="py-20 sm:py-20 lg:py-20 bg-[#fcfcfc] border-b border-gray-100 overflow-hidden relative"
    >
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            {/* Standardized Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#005eb8] font-semibold" aria-hidden="true">/</span>
              <span className="text-sm md:text-base font-semibold tracking-wide text-gray-800 uppercase">
                Fieldwork &amp; Portfolio
              </span>
            </div>

            {/* Heading */}
            <h2
              id="recent-work-heading"
              className="text-[28px] sm:text-[36px] md:text-[44px] font-medium tracking-tight text-[#111111] leading-[1.1] mb-4"
            >
              Recent Projects &amp; Fieldwork Across Dubai
            </h2>

            <p className="text-[#666666] text-[15px] sm:text-base leading-relaxed">
              Explore authentic photos from our on-site HVAC repairs, duct sanitization, chiller servicing, and turnkey AC replacements completed across Dubai properties.
            </p>
          </div>

        </div>

        {/* ======================================================================= */}
        {/* STANDARD UNIFORM GRID (No rounded borders, pure photos, hover text only) */}
        {/* ======================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {RECENT_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden border border-slate-200/90 bg-slate-900 cursor-pointer rounded-none shadow-xs hover:border-[#005eb8]/60 transition-colors duration-200"
              onClick={() => setActivePhoto(project)}
            >
              {/* Pure Background Image (Full clarity, no text or overlay by default) */}
              <Image
                src={project.image}
                alt={`${project.title} - Airtronics Technical Services Dubai`}
                fill
                quality={90}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Hover-Only Overlay with Text Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-950/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 sm:p-6 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  {/* Category Pill */}
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-sky-400 mb-1.5">
                    {project.category}
                  </span>

                  {/* Project Title */}
                  <h3 className="text-white font-bold text-base sm:text-lg leading-snug mb-2 drop-shadow-sm">
                    {project.title}
                  </h3>

                  {/* Location & View Button */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/15 text-xs text-gray-300">
                    <div className="flex items-center gap-1.5 text-sky-300">
                      <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    <div className="flex items-center gap-1 text-white font-semibold">
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Lightbox Modal (Sharp, modern corners) */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-none overflow-hidden shadow-2xl border border-white/15 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[320px] sm:h-[480px]">
              <Image
                src={activePhoto.image}
                alt={activePhoto.title}
                fill
                quality={95}
                className="object-contain bg-black/70"
              />
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-none bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 sm:p-6 bg-slate-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-sky-400 font-semibold uppercase tracking-wider block mb-1">
                  {activePhoto.category} • {activePhoto.location}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {activePhoto.title}
                </h3>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Button
                  href={whatsappBookingUrl}
                  target="_blank"
                  variant="primary"
                  size="md"
                >
                  <span>Request Similar Service</span>
                </Button>

                <button
                  type="button"
                  onClick={() => setActivePhoto(null)}
                  className="px-4 py-2.5 text-sm font-semibold rounded-none bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
