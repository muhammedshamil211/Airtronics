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

        {/* 6 Services Grid (Standard Editorial 3-Column Layout, No Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10" role="list">
          {SERVICES_DATA.map((service, index) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
              role="listitem"
              className="flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image Header */}
                <Link
                  href={`/services/${service.slug}`}
                  className="block relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-100"
                  aria-label={service.title}
                >
                  <Image
                    src={service.image}
                    alt={`${service.shortTitle} in Dubai`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#005eb8] font-bold text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#005eb8]" />
                      <span>{service.id}</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-emerald-400 font-medium text-[11px]">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      <span>{service.badge}</span>
                    </span>
                  </div>
                </Link>

                {/* Service Title */}
                <Link href={`/services/${service.slug}`}>
                  <h3 className="text-lg sm:text-xl font-medium tracking-tight text-[#111111] group-hover:text-[#005eb8] transition-colors leading-snug mb-2">
                    {service.title}
                  </h3>
                </Link>

                {/* Tagline / Summary */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3.5">
                  {service.tagline}
                </p>

                {/* Key Highlights (Clean List, No Box Container) */}
                <ul className="space-y-1.5 mb-3.5">
                  {service.heroHighlights.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#005eb8] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Coverage Location */}
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[#005eb8] shrink-0" />
                  <span>Covering {service.dubaiLocations.slice(0, 3).join(', ')} &amp; more</span>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#005eb8] hover:text-[#004a94] group/link transition-colors"
                  aria-label={`Read more about ${service.shortTitle}`}
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>

                <a
                  href={getWhatsAppServiceLink(service.shortTitle)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-700 hover:text-[#005eb8] transition-colors"
                  aria-label={`Book ${service.shortTitle} on WhatsApp`}
                >
                  <CalendarCheck className="w-3.5 h-3.5 text-[#005eb8]" />
                  <span>Book Service</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
