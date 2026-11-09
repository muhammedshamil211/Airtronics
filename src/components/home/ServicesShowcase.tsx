'use client';

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES_DATA, FEATURED_SERVICES } from '@/data/servicesData';
import ServiceCard from '@/components/services/ServiceCard';

export default function ServicesShowcase() {
  // Highly enriched Schema.org structured data dynamically generated from single-source SERVICES_DATA
  const serviceSchemas = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Services We Provide - Airtronics Fixcare Dubai',
    'description': 'Certified residential and commercial HVAC services in Dubai including AC repair, installation, preventive maintenance, and deep duct cleaning.',
    'url': 'https://airtronicsfixcare.com/#services',
    'numberOfItems': SERVICES_DATA.length,
    'itemListElement': SERVICES_DATA.map((srv, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Service',
        '@id': `https://airtronicsfixcare.com/services/${srv.slug}#service`,
        'name': srv.title,
        'alternateName': srv.shortTitle,
        'serviceType': 'HVAC Repair, AC Maintenance & Installation Services',
        'description': srv.metaDescription || srv.tagline,
        'url': `https://airtronicsfixcare.com/services/${srv.slug}`,
        'image': `https://airtronicsfixcare.com${srv.image}`,
        'termsOfService': '90-Day Written Warranty on Genuine OEM Parts & Labor',
        'provider': {
          '@type': 'HVACBusiness',
          'name': 'Airtronics Fixcare Technical Services LLC',
          'telephone': '+971-58-659-6321',
          'image': 'https://airtronicsfixcare.com/images/airtronics-logo.png',
          'priceRange': 'AED 150 - AED 1500',
          'openingHours': 'Mo-Su 00:00-24:00',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Office M-01, Commercial Bank of Dubai Building, Al Kabeesi',
            'addressLocality': 'Dubai',
            'addressCountry': 'AE',
          },
        },
        'areaServed': srv.dubaiLocations.map((loc) => ({
          '@type': 'AdministrativeArea',
          'name': loc,
        })),
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'AED',
          'price': '150.00',
          'priceValidUntil': '2026-12-31',
          'availability': 'https://schema.org/InStock',
          'url': `https://airtronicsfixcare.com/services/${srv.slug}`,
        },
      },
    })),
  };

  return (
    <section
      id="services"
      aria-labelledby="services-we-provide-heading"
      className="relative bg-white py-14 sm:py-30 lg:py-50 border-b border-slate-100 overflow-hidden "
    >
      <Script
        id="services-we-provide-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================================= */}
        {/* SECTION HEADER: Eyebrow + Heading + Subtitle + Watermark "SERVICES"       */}
        {/* ========================================================================= */}
        <div className="relative max-w-3xl mb-10 sm:mb-12">
          {/* Faint Giant Background Watermark "SERVICES" */}
          <div
            className="absolute -top-6 xs:-top-8 sm:-top-12 md:-top-20 left-0 pointer-events-none select-none z-0 overflow-hidden"
            aria-hidden="true"
          >
            <span className="font-[family-name:var(--font-onest)] text-7xl xs:text-8xl sm:text-9xl md:text-[140px] lg:text-[170px] font-black text-slate-900/[0.035] leading-none tracking-tight block">
              SERVICES
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative z-10"
          >
            {/* Eyebrow with Cyan Accent Line */}
            <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
              <span className="w-7 sm:w-9 h-[2.5px] bg-[#0076FF] rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.16em] text-[#0076FF] uppercase">
                OUR SERVICES
              </span>
            </div>

            {/* Heading */}
            <h2
              id="services-we-provide-heading"
              className="font-[family-name:var(--font-onest)] text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] tracking-tight leading-[1.14] mb-3"
            >
              Comprehensive HVAC &amp; AC Solutions in Dubai
            </h2>

            {/* Subtitle */}
            <p className="font-[family-name:var(--font-onest)] text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl">
              Professional AC repair, certified installations, and preventive maintenance across residential and commercial properties in Dubai.
            </p>
          </motion.div>
        </div>

        {/* ========================================================================= */}
        {/* SERVICES GRID: Content From FEATURED_SERVICES (Card Matching Reference)   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-10" role="list">
          {FEATURED_SERVICES.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              className="h-full flex"
            >
              <ServiceCard service={service} className="w-full" />
            </motion.div>
          ))}
        </div>

        {/* View All Services CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 pb-4 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#0076FF] hover:bg-[#0066de] text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow-md group"
          >
            <span>Explore All 22 HVAC Services in Dubai</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="text-xs sm:text-sm text-gray-500">
            Split, ducted, VRF, chillers, ventilation, ductwork &amp; AMC plans
          </span>
        </motion.div>

      </div>
    </section>
  );
}
