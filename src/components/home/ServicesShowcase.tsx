'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_PHONE = '971586596321';

const getWhatsAppServiceLink = (serviceName: string) => {
  const message = `Hello Airtronics Fixcare! I would like to book the "${serviceName}" service in Dubai. Please provide availability and pricing.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  link: string;
}

const ALL_SERVICES: ServiceItem[] = [
  {
    id: '01',
    title: 'AC Repair & Diagnostics',
    desc: 'Rapid 30–45 min emergency troubleshooting, leak detection, and genuine OEM compressor fixes.',
    image: '/images/ac_repair_split_glow.jpg',
    link: '/services',
  },
  {
    id: '02',
    title: 'AC Installation & Replacement',
    desc: 'Turnkey split, ducted, and VRF installations with accurate heat-load calculations and warranty.',
    image: '/images/ac_cassette_installation.jpg',
    link: '/services',
  },
  {
    id: '03',
    title: 'HVAC Maintenance & Tuning',
    desc: '24-point thermodynamic tuning, chemical coil cleaning, and gas top-up to lower DEWA bills.',
    image: '/images/hvac_maintenance_technician.jpg',
    link: '/services',
  },
  {
    id: '04',
    title: 'AC Duct Cleaning & Sanitization',
    desc: 'Hospital-grade robotic rotary brushing and antimicrobial misting for purified indoor air quality.',
    image: '/images/duct_cleaning_interior_brush.jpg',
    link: '/services',
  },
  {
    id: '05',
    title: 'Annual Maintenance Contracts (AMC)',
    desc: 'Cost-effective residential and corporate AMC packages with unlimited emergency breakdown callouts.',
    image: '/images/amc_plan_checklist.jpg',
    link: '/services',
  },
  {
    id: '06',
    title: 'Commercial HVAC Solutions',
    desc: 'Heavy-duty chiller plants, FCUs, AHUs, and precision climate systems for offices and warehouses.',
    image: '/images/technician_dark_hvac.jpg',
    link: '/services',
  },
];

export default function ServicesShowcase() {
  // Lightweight JSON-LD Schema for SEO
  const serviceSchemas = ALL_SERVICES.map(service => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.title,
    'provider': {
      '@type': 'HVACBusiness',
      'name': 'Airtronics Fixcare Technical Services LLC',
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Dubai',
    },
    'description': service.desc,
    'url': `https://airtronicsfixcare.com${service.link}`,
  }));

  return (
    <section 
      className="relative bg-[#fcfcfc] py-14 sm:py-18 lg:py-20 border-b border-gray-100 overflow-hidden" 
      aria-labelledby="services-showcase-heading"
    >
      <Script 
        id="service-schemas" 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }} 
      />

      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8">
        
        {/* ========================================================================= */}
        {/* HEADER: Clean, concise & with prominent "View Full Services" navigation   */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-xs sm:text-xs md:text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">
              <span className="text-[#005eb8] font-black text-sm">/</span>
              <span>OUR SERVICES</span>
            </div>

            {/* Headline */}
            <h2 
              id="services-showcase-heading" 
              className="text-2xl sm:text-3xl md:text-[36px] font-medium tracking-tight text-[#111111] leading-tight mb-2.5"
            >
              Certified AC Repair &amp; <span className="text-[#005eb8]">HVAC Services in Dubai</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Fast diagnostics, certified installations, and preventive maintenance across residential and commercial properties in Dubai.
            </p>
          </div>

          {/* Navigate to Full Service Page Button */}
          <div className="shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-[#005eb8] hover:bg-[#004a94] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-full transition-all shadow-md shadow-[#005eb8]/20 hover:shadow-lg whitespace-nowrap group"
              aria-label="View Full Services Page"
            >
              <span>Explore Full Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SERVICES GRID (All 6 Services matching Hero secondary service card style) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5" role="list">
          {ALL_SERVICES.map((s, idx) => (
            <motion.article 
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
              role="listitem"
              className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 relative overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-[#005eb8]/40 transition-all group min-h-[175px] sm:min-h-[185px]"
            >
              {/* Background Image with Gradient Overlay matching Hero Cards */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <Image
                  src={s.image}
                  alt={`${s.title} Dubai`}
                  fill
                  className="object-cover object-right opacity-70 group-hover:opacity-85 transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 sm:via-white/85 to-transparent pointer-events-none" />
              </div>

              {/* Content Header */}
              <div className="relative z-10">
                <span className="text-gray-400 font-bold text-xs sm:text-sm block mb-1">
                  {s.id}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#111111] group-hover:text-[#005eb8] transition-colors mb-1.5 leading-snug">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-[240px] sm:max-w-[260px]">
                  {s.desc}
                </p>
              </div>

              {/* Action Buttons: Book Now + Navigate to Service Details */}
              <div className="relative z-10 pt-4 flex items-center justify-between gap-2 border-t border-slate-100/80 mt-3">
                {/* Book Now Button */}
                <a
                  href={getWhatsAppServiceLink(s.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#005eb8] hover:bg-[#004a94] text-white text-xs sm:text-sm font-bold py-2 px-3.5 rounded-full transition-all shadow-xs hover:shadow-sm whitespace-nowrap group/btn"
                  aria-label={`Book ${s.title} on WhatsApp`}
                >
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  <span>Book Now</span>
                </a>

                {/* Service Page Link Icon */}
                <Link
                  href={s.link}
                  className="w-8 h-8 rounded-full bg-white shadow-xs border border-slate-200 text-gray-500 hover:text-[#005eb8] hover:border-[#005eb8] flex items-center justify-center transition-all group-hover:scale-105 shrink-0"
                  aria-label={`View ${s.title} details on services page`}
                  title="View service details"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM ACTION: Clear button leading to the dedicated services page        */}
        {/* ========================================================================= */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-700 hover:text-[#005eb8] transition-colors group"
          >
            <span>Need full specifications &amp; AMC contract breakdown?</span>
            <span className="text-[#005eb8] inline-flex items-center underline underline-offset-4 group-hover:translate-x-0.5 transition-transform">
              Visit Services Page
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
