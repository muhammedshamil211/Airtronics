'use client';

import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const serviceAreas = [
  'Al Qusais',
  'Deira',
  'Bur Dubai',
  'Al Nahda',
  'Dubai Marina',
  'Business Bay',
  'Jumeirah',
  'Al Barsha',
  'Downtown Dubai',
  'Mirdif',
  'Dubai Silicon Oasis',
  'International City',
];

export default function ServiceAreasSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleAreas = showAll
    ? serviceAreas
    : serviceAreas.slice(0, 4);

  return (
    <section
      className="relative overflow-hidden py-10 md:py-14 border-t border-gray-100"
      aria-labelledby="service-areas-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/service-area-bg.png"
          alt="Dubai HVAC Service Areas"
          fill
          sizes="100vw"
          className="object-cover object-left md:object-center"
        />

        {/* Optional overlay */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-[1200px] relative z-10">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#005eb8] font-semibold">/</span>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-gray-700">
              Service Areas
            </span>
          </div>

          <h2
            id="service-areas-heading"
            className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] font-medium tracking-tight text-[#111111] leading-[1.1] mb-4"
          >
            Proudly Serving Across Dubai
          </h2>

          <p className="text-[#666666] text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Fast, reliable AC repair, maintenance, installation and HVAC
            services for homes, apartments, offices and commercial properties
            throughout Dubai.
          </p>
        </header>

        {/* Service Area Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={showAll ? 'all' : 'limited'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {visibleAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.04,
                }}
                className="group"
              >
                <div className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-[18px] px-4 py-4 hover:border-[#005eb8]/20 hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#005eb8]/10 flex items-center justify-center shrink-0 group-hover:bg-[#005eb8]/15 transition-colors">
                      <MapPin
                        className="w-4 h-4 text-[#005eb8]"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-base font-medium text-[#111111] leading-snug">
                      {area}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        {serviceAreas.length > 4 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#005eb8]/20 text-[#005eb8] text-sm sm:text-base font-medium hover:bg-[#005eb8] hover:text-white transition-all duration-300"
            >
              {showAll ? 'Show Less' : 'View All Service Areas'}

              <ArrowRight
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-90' : ''
                  }`}
              />
            </button>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <div className="relative overflow-hidden rounded-[30px] bg-[#111111] p-8 md:p-10 text-center">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-[#005eb8]/30 blur-[100px]" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-3">
                Need HVAC Service In Your Area?
              </h3>

              <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                Our technicians provide fast response times throughout Dubai for
                AC repair, maintenance, installation, duct cleaning and
                emergency HVAC services.
              </p>

              <Link
                href="/contact#contact-form"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#005eb8] hover:bg-[#004892] text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
              >
                Check Availability

                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

