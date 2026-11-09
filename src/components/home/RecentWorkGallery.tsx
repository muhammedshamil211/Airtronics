'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GALLERY_IMAGES = [
  {
    id: 'proj-1',
    src: '/images/hero_technician_dubai.jpg',
    alt: 'Certified HVAC technician performing AC diagnostics in Dubai',
    width: 1264,
    height: 848,
  },
  {
    id: 'proj-2',
    src: '/images/ac_cassette_installation.jpg',
    alt: 'Commercial ceiling cassette AC unit installation in Dubai',
    width: 1024,
    height: 1024,
  },
  {
    id: 'proj-3',
    src: '/images/hvac_maintenance_technician.jpg',
    alt: 'HVAC maintenance and refrigerant pressure testing in Dubai',
    width: 1024,
    height: 1024,
  },
  {
    id: 'proj-4',
    src: '/images/duct_cleaning_interior_brush.jpg',
    alt: 'Deep rotary duct cleaning and sanitization in Dubai',
    width: 1024,
    height: 1024,
  },
  {
    id: 'proj-5',
    src: '/images/airtronics_fleet.jpg',
    alt: 'Airtronics emergency mobile technical response fleet in Dubai',
    width: 1376,
    height: 768,
  },
  {
    id: 'proj-6',
    src: '/images/ac_repair_split_glow.jpg',
    alt: 'Precision split AC component inspection and repair in Dubai',
    width: 1200,
    height: 896,
  },
];

export default function RecentWorkGallery() {
  return (
    <section
      id="recent-work"
      aria-labelledby="recent-work-heading"
      className="relative bg-white py-14 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden"
    >
      {/* ========================================================================= */}
      {/* MAIN CONTAINER: Maximum 1400px Width Constraint                            */}
      {/* ========================================================================= */}
      <div className="relative max-w-[1250px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Faint Giant Background Watermark "PORTFOLIO" */}
        <div
          className="absolute -top-6 xs:-top-8 sm:-top-12 md:-top-18 left-4 pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-[family-name:var(--font-onest)] text-7xl xs:text-8xl sm:text-9xl md:text-[140px] lg:text-[170px] font-black text-slate-900/[0.035] leading-none tracking-tight block">
            PORTFOLIO
          </span>
        </div>

        {/* ======================================================================= */}
        {/* SECTION HEADER: Eyebrow + Heading + Subtitle                            */}
        {/* ======================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10 max-w-3xl mb-8 sm:mb-12"
        >
          {/* Main Headline */}
          <h2
            id="recent-work-heading"
            className="font-[family-name:var(--font-onest)] text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] tracking-tight leading-[1.14] mb-3"
          >
            Our Recent AC Projects Across Dubai
          </h2>

          <p className="font-[family-name:var(--font-onest)] text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Authentic on-site captures from our AC repairs, turnkey installations, duct sanitization, and routine maintenance across residential and commercial Dubai properties.
          </p>
        </motion.div>

        {/* ======================================================================= */}
        {/* DYNAMIC IMAGE GALLERY: Compact Gaps & Subtle Rounded Corners            */}
        {/* ======================================================================= */}
        <div className="relative z-10 columns-2 md:columns-3 lg:columns-4 gap-2 sm:gap-3 lg:gap-3.5">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.05, ease: 'easeOut' }}
              className="break-inside-avoid mb-2 sm:mb-3 lg:mb-3.5"
            >
              <div className="relative w-full rounded-none overflow-hidden transition-all duration-300 group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  quality={92}
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
