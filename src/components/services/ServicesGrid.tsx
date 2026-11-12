'use client';

import React, { useState, useMemo } from 'react';
import { PhoneCall, CalendarCheck, Search, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '@/data/servicesData';
import ServiceCard from '@/components/services/ServiceCard';

const WHATSAPP_PHONE = '971586596321';

interface CategoryDef {
  id: string;
  label: string;
  slugs?: string[];
}

const CATEGORIES: CategoryDef[] = [
  { id: 'all', label: 'All Services' },
  {
    id: 'repair',
    label: 'Repair & Servicing',
    slugs: [
      'ac-repair',
      'refrigerant-gas',
      'water-leakage-drainage',
      'parts-replacement',
    ],
  },
  {
    id: 'installation',
    label: 'Install, AMC & Controls',
    slugs: [
      'ac-installation',
      'hvac-maintenance',
      'amc',
      'thermostat-bms-controls',
      'energy-efficiency-upgrades',
    ],
  },
  {
    id: 'air-quality',
    label: 'Ducts & Air Quality',
    slugs: [
      'duct-cleaning',
      'duct-fabrication-repair',
      'indoor-air-quality',
      'ventilation-exhaust',
    ],
  },
  {
    id: 'commercial',
    label: 'Commercial & Chillers',
    slugs: [
      'vrf-vrv-systems',
      'ahu-fahu-fcu',
      'chiller-systems',
      'server-room-cooling',
      'commercial-refrigeration',
      'packaged-rooftop-units',
      'testing-balancing-commissioning',
      'hvac-design-consultancy',
    ],
  },
];

export default function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const category = CATEGORIES.find((c) => c.id === activeCategory);

    return SERVICES_DATA.filter((service) => {
      const matchesCategory =
        !category || !category.slugs || category.slugs.includes(service.slug);

      if (!matchesCategory) return false;
      if (!query) return true;

      return (
        service.title.toLowerCase().includes(query) ||
        service.shortTitle.toLowerCase().includes(query) ||
        service.tagline.toLowerCase().includes(query) ||
        service.subcategories.some((sub) => sub.toLowerCase().includes(query))
      );
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="services-catalog"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100 relative overflow-hidden"
      aria-labelledby="all-services-catalog"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header Matching Home Design System (No Eyebrow, Watermark + Clear Single Heading) */}
        <div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div
            className="absolute -top-6 xs:-top-8 sm:-top-12 md:-top-16 left-0 pointer-events-none select-none z-0 overflow-hidden"
            aria-hidden="true"
          >
            <span className="font-[family-name:var(--font-onest)] text-7xl xs:text-8xl sm:text-9xl md:text-[140px] lg:text-[170px] font-black text-slate-900/[0.035] leading-none tracking-tight block">
              CATALOG
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="relative z-10 max-w-2xl"
          >
            <h2
              id="all-services-catalog"
              className="font-[family-name:var(--font-onest)] text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] tracking-tight leading-[1.14] mb-3"
            >
              Our AC &amp; HVAC Services in Dubai
            </h2>
            <p className="font-[family-name:var(--font-onest)] text-sm sm:text-base text-slate-600 leading-relaxed">
              Every job is handled by trained AC technicians using proper tools, original spare parts, and clear upfront prices.
            </p>
          </motion.div>

          {/* Slanted Quick Search Input Matching Home Field Shape */}
          <div className="relative z-10 w-full lg:w-80 shrink-0">
            <div className="relative [transform:skewX(-10deg)] sm:[transform:skewX(-12deg)] bg-slate-50 border border-slate-300 focus-within:border-[#0076FF] focus-within:bg-white transition-colors rounded-none">
              <div className="flex items-center px-4 py-2.5 [transform:skewX(10deg)] sm:[transform:skewX(12deg)]">
                <Search className="w-4 h-4 text-[#0076FF] shrink-0 mr-2.5" aria-hidden="true" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter services (e.g. chiller, duct)..."
                  aria-label="Filter HVAC services"
                  className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear filter"
                    className="ml-2 text-slate-400 hover:text-slate-700 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Slanted Category Tabs */}
        <div
          className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 mb-8 sm:mb-10 scrollbar-none"
          role="tablist"
          aria-label="Service categories"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            const count = category.slugs ? category.slugs.length : SERVICES_DATA.length;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={`shrink-0 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] rounded-none cursor-pointer border ${
                  isActive
                    ? 'bg-[#0076FF] border-[#0076FF] text-white'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-[#0076FF] hover:text-[#0076FF]'
                }`}
              >
                <span className="inline-flex items-center gap-2 [transform:skewX(10deg)] sm:[transform:skewX(14deg)] whitespace-nowrap">
                  <span>{category.label}</span>
                  <span
                    className={`text-[11px] font-mono px-1.5 py-0.5 ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Services Showcase Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.06, ease: 'easeOut' }}
                className="flex w-full"
              >
                <ServiceCard service={service} className="w-full" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="border border-slate-200 bg-slate-50 p-10 text-center rounded-none">
            <p className="font-[family-name:var(--font-onest)] text-base sm:text-lg font-semibold text-slate-900 mb-2">
              No HVAC services matched &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="text-sm text-slate-600 mb-5">
              Try clearing your filter or contacting our 24/7 dispatch desk for custom HVAC requirements.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="inline-flex items-center justify-center bg-[#0076FF] hover:bg-[#0066de] text-white text-sm font-semibold px-6 py-2.5 [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] rounded-none cursor-pointer"
            >
              <span className="[transform:skewX(10deg)] sm:[transform:skewX(14deg)]">
                Show All {SERVICES_DATA.length} Services
              </span>
            </button>
          </div>
        )}

        {/* Sharp Architectural Fast-Action Bar (Zero Rounded Divs, Slanted Buttons) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mt-14 sm:mt-16 bg-slate-50 border border-slate-200 rounded-none p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-[family-name:var(--font-onest)] text-lg sm:text-xl font-bold text-[#0f172a] mb-1">
              Need Immediate AC or HVAC Assistance in Dubai?
            </h3>
            <p className="text-sm text-slate-600">
              Our mobile technical vans are on standby across Dubai Marina, Downtown, Palm Jumeirah, and Business Bay.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0 w-full md:w-auto">
            <a
              href="tel:+971586596321"
              className="inline-flex items-center justify-center bg-white hover:bg-slate-100 border border-slate-300 hover:border-[#0076FF] text-slate-900 px-5 py-3 text-sm font-semibold transition-colors [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] rounded-none flex-1 sm:flex-initial"
              aria-label="Call Dispatch Hotline"
            >
              <span className="inline-flex items-center gap-2 [transform:skewX(10deg)] sm:[transform:skewX(14deg)] whitespace-nowrap">
                <PhoneCall className="w-4 h-4 text-[#0076FF]" />
                <span>+971 58 659 6321</span>
              </span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                'Hello Airtronics Fixcare! I need emergency AC repair or HVAC service assistance in Dubai.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#0076FF] hover:bg-[#0066de] text-white px-6 py-3 text-sm font-semibold transition-colors [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] rounded-none flex-1 sm:flex-initial"
              aria-label="Instant WhatsApp Dispatch"
            >
              <span className="inline-flex items-center gap-2 [transform:skewX(10deg)] sm:[transform:skewX(14deg)] whitespace-nowrap">
                <CalendarCheck className="w-4 h-4" />
                <span>Instant WhatsApp Dispatch</span>
              </span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
