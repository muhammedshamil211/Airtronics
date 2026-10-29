'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  PhoneCall,
  CalendarCheck
} from 'lucide-react';
import { SERVICES_DATA, type ServiceDetail } from '@/data/servicesData';

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
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[360px] sm:min-h-[380px] flex flex-col justify-between p-6 sm:p-7 border border-slate-200/90 bg-slate-900 lg:bg-white group cursor-pointer shadow-xs hover:border-[#005eb8] transition-colors duration-200"
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
          loading="lazy"
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
        {/* Service Icon and ID Badge */}
        <div className="mb-5 flex items-center justify-between">
          <IconComponent
            className="w-10 h-10 text-[#00AEEF] lg:text-[#005eb8] lg:group-hover:text-[#00AEEF] transition-colors duration-300"
            strokeWidth={1.75}
          />
          <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border bg-white/15 text-white border-white/20 lg:bg-slate-100 lg:text-slate-600 lg:border-slate-200 lg:group-hover:bg-white/15 lg:group-hover:text-white lg:group-hover:border-white/20 transition-colors duration-300">
            {service.id}
          </span>
        </div>

        {/* Service Title */}
        <h3 className="text-lg sm:text-xl font-bold tracking-tight transition-colors duration-300 leading-snug mb-2.5 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] lg:text-[#111111] lg:drop-shadow-none lg:group-hover:text-white lg:group-hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          {serviceName}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-[13px] leading-relaxed transition-colors duration-300 line-clamp-3 mb-2 text-slate-100 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] lg:text-gray-500 lg:drop-shadow-none lg:group-hover:text-slate-100 lg:group-hover:drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
          {serviceDesc}
        </p>
      </div>

      {/* ======================================================================= */}
      {/* 3. CARD BOTTOM: Order Service ▶ (Direct WhatsApp) + Subpage Arrow       */}
      {/* ======================================================================= */}
      <div className="relative z-10 flex items-center justify-between pt-6 sm:pt-7">
        <a
          href={getWhatsAppDirectLink(serviceName)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold transition-colors duration-300 group/btn focus:outline-none text-[#00AEEF] lg:text-[#111111] lg:group-hover:text-[#00AEEF] hover:!text-white"
          aria-label={`Order ${serviceName} service on WhatsApp`}
        >
          <span>Order Service</span>
          <svg
            viewBox="0 0 24 24"
            className="w-3 h-3 fill-current transition-transform group-hover/btn:translate-x-1"
            aria-hidden="true"
          >
            <path d="M6 4l14 8-14 8V4z" />
          </svg>
        </a>

        <Link
          href={`/services/${service.slug}`}
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 shrink-0 bg-white/15 text-white border-white/20 lg:bg-gray-100 lg:text-gray-700 lg:border-gray-200 lg:group-hover:bg-white/15 lg:group-hover:text-white lg:group-hover:border-white/20 hover:scale-105"
          aria-label={`View full ${serviceName} details page`}
          title="Go to service page"
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section
      id="services-catalog"
      className="py-16 sm:py-20 lg:py-24 bg-[#fcfcfc] border-b border-gray-100 relative"
      aria-labelledby="all-services-catalog"
    >
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">

        {/* Section Header Matching Home Services Style */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#005eb8] font-semibold" aria-hidden="true">/</span>
            <span className="text-xs md:text-sm font-semibold tracking-wide uppercase text-gray-800">
              Complete 18-Service Climate Catalog
            </span>
          </div>

          <h2
            id="all-services-catalog"
            className="text-[28px] sm:text-[38px] md:text-[46px] font-medium tracking-tight text-[#111111] leading-[1.12] mb-4"
          >
            Certified HVAC &amp; Climate Solutions in Dubai
          </h2>

          <p className="text-[#666666] text-base md:text-lg leading-relaxed">
            Every service is executed by certified HVAC engineers using digital diagnostics, genuine OEM replacement parts, and fixed itemized quotations across Dubai.
          </p>
        </div>

        {/* 18 Services Showcase Grid with Identical Animation & Interactive Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        {/* Bottom Fast-Action Conversion Bar */}
        <div className="mt-14 sm:mt-16 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)]">
          <div>
            <span className="text-lg sm:text-xl font-bold text-[#111111] block mb-1">
              Need Immediate AC or HVAC Assistance in Dubai?
            </span>
            <p className="text-sm text-gray-600">
              Our mobile technical vans are on standby across Dubai Marina, Downtown, Palm Jumeirah, and Business Bay.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+971586596321"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#005eb8] text-[#005eb8] hover:bg-blue-50 text-sm font-semibold transition-colors"
              aria-label="Call Dispatch Hotline"
            >
              <PhoneCall className="w-4 h-4 text-[#005eb8]" />
              <span>Call: +971 58 659 6321</span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                'Hello Airtronics Fixcare! I need emergency AC repair or HVAC service assistance in Dubai.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#005eb8] hover:bg-[#004a94] text-white text-sm font-semibold shadow-xs transition-colors"
              aria-label="Instant WhatsApp Dispatch"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Instant WhatsApp Dispatch</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
