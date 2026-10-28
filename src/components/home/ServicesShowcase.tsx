'use client';

import React, { useRef, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import {
  Wrench,
  Snowflake,
  ShieldCheck,
  Gauge,
  Droplets,
  Cpu,
  Fan,
  Flame,
  Wind,
  Layers,
  SlidersHorizontal,
  Scale,
  Server,
  Warehouse,
  Sparkles,
  TrendingUp,
  Building2,
  Compass,
  ArrowRight,
  CalendarCheck
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { SERVICES_DATA, FEATURED_SERVICES, type ServiceDetail } from '@/data/servicesData';

const WHATSAPP_PHONE = '971586596321';

const getWhatsAppDirectLink = (serviceName: string) => {
  const message = `Hello Airtronics Fixcare! I would like to order the "${serviceName}" service in Dubai. Please provide immediate technician availability and pricing.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

const SERVICE_ICONS: Record<string, React.ElementType> = {
  'ac-installation': Snowflake,
  'ac-servicing': ShieldCheck,
  'refrigerant-gas': Gauge,
  'water-leakage-drainage': Droplets,
  'parts-replacement': Wrench,
  'vrf-vrv-systems': Cpu,
  'ahu-fahu-fcu': Fan,
  'chiller-systems': Flame,
  'ventilation-exhaust': Wind,
  'duct-fabrication-repair': Layers,
  'thermostat-bms-controls': SlidersHorizontal,
  'testing-balancing-commissioning': Scale,
  'server-room-cooling': Server,
  'commercial-refrigeration': Warehouse,
  'indoor-air-quality': Sparkles,
  'energy-efficiency-upgrades': TrendingUp,
  'packaged-rooftop-units': Building2,
  'hvac-design-consultancy': Compass,
  'ac-repair': Wrench,
  'hvac-maintenance': ShieldCheck,
  'duct-cleaning': Sparkles,
  'amc': CalendarCheck,
};

// Service Card Component: Background always visible on small screens (no laggy triggers); smooth CSS hover on desktop
function ServiceCard({ service }: { service: ServiceDetail }) {
  const router = useRouter();
  const IconComponent = SERVICE_ICONS[service.slug] || Wrench;
  const serviceName = service.shortTitle || service.title;
  const serviceDesc = service.tagline || service.overview;

  const handleCardClick = () => {
    router.push(`/services/${service.slug}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[360px] sm:min-h-[380px] flex flex-col justify-between p-7 sm:p-8 border border-slate-200/90 bg-slate-900 lg:bg-white group cursor-pointer shadow-xs hover:border-[#005eb8] transition-colors duration-200"
    >
      {/* ======================================================================= */}
      {/* 1. FULL BACKGROUND IMAGE: Always 100% visible on small screens          */}
      {/* ======================================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 ease-out">
        <Image
          src={service.image}
          alt={`${serviceName} in Dubai - Airtronics Fixcare Technical Services`}
          fill
          quality={85}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover object-center"
        />

        {/* Dual contrast overlay */}
        <div className="absolute inset-0 bg-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-slate-900/35" />
      </div>

      {/* ======================================================================= */}
      {/* TOP-CORNER CROSS/GRID GRADIENT PATTERN (Desktop Non-Hover Only)         */}
      {/* ======================================================================= */}
      <div className="hidden lg:block absolute top-0 right-0 w-44 h-44 pointer-events-none z-0 overflow-hidden transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 via-sky-50/20 to-transparent rounded-full blur-md pointer-events-none" />
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 94, 184, 0.16) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 94, 184, 0.16) 1px, transparent 1px)
            `,
            backgroundSize: '16px 16px',
            maskImage: 'radial-gradient(circle at top right, black 35%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(circle at top right, black 35%, transparent 85%)',
          }}
        />
      </div>

      {/* ======================================================================= */}
      {/* 2. CARD CONTENT: Icon -> Title -> Description                          */}
      {/* ======================================================================= */}
      <div className="relative z-10 flex flex-col">
        {/* Service Icon in Brand Colors */}
        <div className="mb-6 flex items-center justify-between">
          <IconComponent
            className="w-11 h-11 text-[#00AEEF] lg:text-[#005eb8] lg:group-hover:text-[#00AEEF] transition-colors duration-300"
            strokeWidth={1.75}
          />
          <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border bg-white/15 text-white border-white/20 lg:bg-slate-100 lg:text-slate-600 lg:border-slate-200 lg:group-hover:bg-white/15 lg:group-hover:text-white lg:group-hover:border-white/20 transition-colors duration-300">
            {service.id}
          </span>
        </div>

        {/* Service Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 leading-snug mb-3 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] lg:text-[#111111] lg:drop-shadow-none lg:group-hover:text-white lg:group-hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {serviceName}
        </h3>

        {/* Short Description */}
        <p className="text-sm sm:text-[15px] leading-relaxed transition-colors duration-300 text-slate-100 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] lg:text-gray-500 lg:drop-shadow-none lg:group-hover:text-slate-100 lg:group-hover:drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
          {serviceDesc}
        </p>
      </div>

      {/* ======================================================================= */}
      {/* 3. CARD BOTTOM: Order Service ▶ (Direct WhatsApp) + Service Page Arrow  */}
      {/* ======================================================================= */}
      <div className="relative z-10 flex items-center justify-between pt-8 sm:pt-10">
        <a
          href={getWhatsAppDirectLink(serviceName)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2.5 text-sm sm:text-base font-semibold transition-colors duration-300 group/btn focus:outline-none text-[#00AEEF] lg:text-[#111111] lg:group-hover:text-[#00AEEF] hover:!text-white"
          aria-label={`Order ${serviceName} service on WhatsApp`}
        >
          <span>Order Service</span>
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 fill-current transition-transform group-hover/btn:translate-x-1"
            aria-hidden="true"
          >
            <path d="M6 4l14 8-14 8V4z" />
          </svg>
        </a>

        {/* Dedicated Arrow Button: Directly navigates to that service page */}
        <Link
          href={`/services/${service.slug}`}
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 shrink-0 bg-white/15 text-white border-white/20 lg:bg-gray-100 lg:text-gray-700 lg:border-gray-200 lg:group-hover:bg-white/15 lg:group-hover:text-white lg:group-hover:border-white/20 hover:scale-105"
          aria-label={`View full ${serviceName} details page`}
          title="Go to service page"
        >
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

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
      className="relative bg-[#f8fbff] pt-20 sm:pt-24 lg:pt-28 overflow-hidden border-b border-gray-100"
    >
      {/* Section Background: Top-Right Corner Gradient Cross-Grid Pattern */}
      <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 pointer-events-none z-0 overflow-hidden opacity-60">
        <div className="absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl from-blue-100/60 via-sky-50/25 to-transparent rounded-full blur-2xl pointer-events-none" />
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 94, 184, 0.14) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 94, 184, 0.14) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(circle at top right, black 35%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(circle at top right, black 35%, transparent 85%)',
          }}
        />
      </div>

      {/* Section Background: Bottom-Left Corner Gradient Cross-Grid Pattern */}
      <div className="absolute bottom-16 sm:bottom-20 left-0 w-80 sm:w-96 h-80 sm:h-96 pointer-events-none z-0 overflow-hidden opacity-60">
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-gradient-to-tr from-blue-100/60 via-sky-50/25 to-transparent rounded-full blur-2xl pointer-events-none" />
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 94, 184, 0.14) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 94, 184, 0.14) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(circle at bottom left, black 35%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(circle at bottom left, black 35%, transparent 85%)',
          }}
        />
      </div>

      <Script
        id="services-we-provide-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8"
      >

        {/* ========================================================================= */}
        {/* SECTION HEADER: Eyebrow + Heading "Services We Provide" + Subtitle       */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#005eb8] font-semibold" aria-hidden="true">/</span>
            <span className="text-sm md:text-base font-semibold tracking-wide text-gray-800 uppercase">
              Services We Provide
            </span>
          </div>

          {/* Heading - "Services We Provide" */}
          <h2
            id="services-we-provide-heading"
            className="text-[28px] sm:text-[36px] md:text-[44px] font-medium tracking-tight text-[#111111] leading-[1.1] mb-4"
          >
            Comprehensive HVAC &amp; AC Solutions in Dubai
          </h2>

          {/* Subtitle with Dubai Local SEO keywords */}
          <p className="text-[#666666] text-[15px] sm:text-base leading-relaxed">
            Professional AC repair, certified installations, and preventive maintenance across residential and commercial properties in Dubai Marina, Downtown, Palm Jumeirah, Business Bay, and all UAE districts.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SERVICES GRID: Content From FEATURED_SERVICES (Most Demanded Services)   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pb-8" role="list">
          {FEATURED_SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        {/* View All Services CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 pb-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#005eb8] hover:bg-[#004c94] text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow-md group"
          >
            <span>Explore All 22 HVAC Services in Dubai</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="text-xs sm:text-sm text-gray-500">
            Split, ducted, VRF, chillers, ventilation, ductwork &amp; AMC plans
          </span>
        </div>

      </motion.div>

      {/* ========================================================================= */}
      {/* EXACT HERO BOTTOM-SIDE DIVIDER: Seamless Paint Drip Wave Transition       */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full leading-none pointer-events-none -mb-[1px] overflow-hidden">
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

          {/* Primary solid transition wave matching next section (#fcfcfc) */}
          <path
            d="M 0,50 C 80,50 120,32 180,32 C 230,32 245,68 265,68 C 285,68 295,34 350,34 C 420,34 460,48 520,48 C 560,48 575,80 600,80 C 625,80 640,40 700,40 C 760,40 800,56 850,56 C 890,56 905,78 925,78 C 945,78 960,36 1020,36 C 1080,36 1120,54 1170,54 C 1210,54 1225,84 1250,84 C 1275,84 1290,44 1350,44 C 1395,44 1420,50 1440,50 L 1440,95 L 0,95 Z"
            fill="#fcfcfc"
          />
        </svg>
      </div>
    </section>
  );
}
