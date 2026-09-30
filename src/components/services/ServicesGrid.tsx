'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  CalendarCheck, 
  Clock, 
  MapPin, 
  Phone 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '@/data/servicesData';

const WHATSAPP_PHONE = '971586596321';
const CALL_PHONE = '+971586596321';

const getWhatsAppServiceLink = (serviceName: string) => {
  const message = `Hello Airtronics Fixcare! I would like to book the "${serviceName}" service in Dubai. Please provide availability and pricing.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

export default function ServicesGrid() {
  return (
    <section className="py-14 sm:py-18 lg:py-22 bg-[#fcfcfc] border-b border-gray-100" aria-labelledby="all-services-catalog">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
            <span className="text-[#005eb8] font-black text-sm">/</span>
            <span>COMPREHENSIVE CLIMATE CATALOG</span>
          </div>

          <h2 id="all-services-catalog" className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#111111] leading-tight mb-3">
            Our Certified AC &amp; <span className="text-[#005eb8]">HVAC Service Capabilities</span>
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Every service is executed by certified HVAC engineers using digital diagnostics, genuine OEM replacement parts, and fixed itemized quotations.
          </p>
        </div>

        {/* 6 Services Grid (2x3 Layout on Large Screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6" role="list">
          {SERVICES_DATA.map((service, index) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
              role="listitem"
              className="bg-white border border-slate-200/90 hover:border-[#005eb8]/50 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Visual Header with Overlay */}
              <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-900">
                <Image
                  src={service.image}
                  alt={`${service.shortTitle} in Dubai`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-600 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 pointer-events-none" />

                {/* Top Floating Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#005eb8] font-bold text-xs shadow-xs border border-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#005eb8]" />
                    <span>{service.id}</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900/85 backdrop-blur-md text-emerald-400 font-bold text-[11px] border border-slate-700/80 shadow-xs">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span>{service.badge}</span>
                  </span>
                </div>

                {/* Service Title */}
                <div className="absolute bottom-3 left-3.5 right-3.5 z-10">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-100 transition-colors leading-tight drop-shadow-xs">
                    {service.shortTitle}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Tagline / Summary */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.tagline}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-4 bg-slate-50 rounded-xl p-3 border border-slate-100">
                    {service.heroHighlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#005eb8] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Coverage Location */}
                  <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium mb-4">
                    <MapPin className="w-3.5 h-3.5 text-[#005eb8] shrink-0" />
                    <span>Covering {service.dubaiLocations.slice(0, 3).join(', ')} &amp; more</span>
                  </div>
                </div>

                {/* Action Buttons: Read More + Book Now */}
                <div className="pt-3 border-t border-slate-100/90 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  {/* "Read More" button leading to dedicated service page */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-blue-50 text-[#111111] hover:text-[#005eb8] text-xs sm:text-sm font-bold py-2.5 px-3 rounded-xl transition-all whitespace-nowrap group/link"
                    aria-label={`Read more about ${service.shortTitle}`}
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-link:translate-x-1" />
                  </Link>

                  {/* "Book Now" Button */}
                  <a
                    href={getWhatsAppServiceLink(service.shortTitle)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#005eb8] hover:bg-[#004a94] text-white text-xs sm:text-sm font-bold py-2.5 px-3 rounded-xl transition-all shadow-xs hover:shadow-md whitespace-nowrap"
                    aria-label={`Book ${service.shortTitle} on WhatsApp`}
                  >
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>Book Now</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
