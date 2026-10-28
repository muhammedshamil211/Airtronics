'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Wrench,
  Snowflake,
  Gauge,
  Wind,
  ShieldCheck,
  Building2,
  ArrowRight,
  PhoneCall,
  CalendarCheck
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { SERVICES_DATA, type ServiceDetail } from '@/data/servicesData';

const WHATSAPP_PHONE = '971586596321';

const getWhatsAppDirectLink = (serviceName: string) => {
  const message = `Hello Airtronics Fixcare! I would like to order the "${serviceName}" service in Dubai. Please provide immediate technician availability and pricing.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

const SERVICE_ICONS: Record<string, React.ElementType> = {
  'ac-repair': Wrench,
  'ac-installation': Snowflake,
  'hvac-maintenance': Gauge,
  'duct-cleaning': Wind,
  'amc': ShieldCheck,
  'commercial-hvac': Building2,
};

// Service Card Component Matching Exact Home Page Card Layout, Animation & Styling
function ServiceCard({ service, index }: { service: ServiceDetail; index: number }) {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const IconComponent = SERVICE_ICONS[service.slug] || Wrench;
  const serviceName = service.shortTitle || service.title;
  const serviceDesc = service.tagline || service.overview;

  // Viewport detection on touch devices
  const isCompletelyInView = useInView(cardRef, { amount: 0.8, once: false });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const touchQuery = window.matchMedia('(hover: none) and (pointer: coarse)');
    setIsTouchDevice(touchQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(e.matches);
    };

    touchQuery.addEventListener('change', handleChange);
    return () => touchQuery.removeEventListener('change', handleChange);
  }, []);

  const isImageActive = isTouchDevice ? isCompletelyInView : isHovered;

  const handleCardClick = () => {
    router.push(`/services/${service.slug}`);
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
      onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
      onClick={handleCardClick}
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[360px] sm:min-h-[380px] flex flex-col justify-between p-7 sm:p-8 border border-slate-200 bg-white group cursor-pointer shadow-xs hover:border-[#005eb8] transition-colors duration-200"
      style={{
        borderColor: isImageActive ? '#005eb8' : undefined,
      }}
    >
      {/* ======================================================================= */}
      {/* 1. FULL BACKGROUND IMAGE: Comes from bottom with 0 to 100% visibility   */}
      {/* ======================================================================= */}
      <motion.div
        initial={false}
        animate={{
          opacity: isImageActive ? 1 : 0,
          y: isImageActive ? 0 : 200,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ willChange: 'transform, opacity' }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      >
        <Image
          src={service.image}
          alt={`${serviceName} in Dubai - Airtronics Fixcare Technical Services`}
          fill
          quality={95}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover object-center"
        />

        {/* Dual contrast overlay */}
        <div className="absolute inset-0 bg-slate-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/55 to-slate-900/30" />
      </motion.div>

      {/* ======================================================================= */}
      {/* TOP-CORNER BLUEPRINT GRID PATTERN                                       */}
      {/* ======================================================================= */}
      <div
        className={`absolute top-0 right-0 w-44 h-44 pointer-events-none z-0 overflow-hidden transition-opacity duration-300 ${
          isImageActive ? 'opacity-0' : 'opacity-100'
        }`}
      >
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
        <div className="mb-6">
          <IconComponent
            className={`w-11 h-11 transition-colors duration-300 ${
              isImageActive ? 'text-[#00AEEF]' : 'text-[#005eb8]'
            }`}
            strokeWidth={1.75}
          />
        </div>

        {/* Service Title */}
        <h3
          className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 leading-snug mb-3 ${
            isImageActive
              ? 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]'
              : 'text-[#111111] group-hover:text-[#005eb8]'
          }`}
        >
          {serviceName}
        </h3>

        {/* Short Description */}
        <p
          className={`text-sm sm:text-[15px] leading-relaxed transition-colors duration-300 ${
            isImageActive
              ? 'text-slate-100 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]'
              : 'text-gray-500'
          }`}
        >
          {serviceDesc}
        </p>
      </div>

      {/* ======================================================================= */}
      {/* 3. CARD BOTTOM: Order Service ▶ (Direct WhatsApp) + Subpage Arrow       */}
      {/* ======================================================================= */}
      <div className="relative z-10 flex items-center justify-between pt-8 sm:pt-10">
        <a
          href={getWhatsAppDirectLink(serviceName)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={`inline-flex items-center gap-2.5 text-sm sm:text-base font-semibold transition-colors duration-300 group/btn focus:outline-none ${
            isImageActive
              ? 'text-[#00AEEF] hover:text-white'
              : 'text-[#111111] hover:text-[#005eb8]'
          }`}
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

        <Link
          href={`/services/${service.slug}`}
          onClick={(e) => e.stopPropagation()}
          className={`inline-flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 shrink-0 ${
            isImageActive
              ? 'bg-white/15 text-white border-white/20 hover:bg-[#005eb8] hover:border-[#005eb8]'
              : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-[#005eb8] hover:text-white hover:border-[#005eb8]'
          }`}
          aria-label={`View full ${serviceName} details page`}
          title="Go to service page"
        >
          <ArrowRight className="w-4 h-4" />
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
              Comprehensive Climate Catalog
            </span>
          </div>

          <h2
            id="all-services-catalog"
            className="text-[28px] sm:text-[38px] md:text-[46px] font-medium tracking-tight text-[#111111] leading-[1.12] mb-4"
          >
            Our Certified AC &amp; HVAC Service Capabilities
          </h2>

          <p className="text-[#666666] text-base md:text-lg leading-relaxed">
            Every service is executed by certified HVAC engineers using digital diagnostics, genuine OEM replacement parts, and fixed itemized quotations across Dubai.
          </p>
        </div>

        {/* 6 Services Showcase Grid with Identical Animation & Interactive Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
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
