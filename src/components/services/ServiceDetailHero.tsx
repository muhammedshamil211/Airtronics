'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Clock,
  Phone,
  ArrowRight,
  ChevronRight,
  Check,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ServiceDetail } from '@/data/servicesData';

const WHATSAPP_PHONE = '971586596321';
const CALL_PHONE = '+971586596321';

export default function ServiceDetailHero({ service }: { service: ServiceDetail }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    `Hello Airtronics Fixcare! I would like to book "${service.shortTitle}" in Dubai. Please share availability and pricing.`
  )}`;

  return (
    <section
      className="relative bg-white text-slate-900 overflow-hidden pt-6 sm:pt-10 md:pt-12 pb-10 sm:pb-14 border-b border-slate-100"
      aria-label={`${service.title} Header`}
    >
      {/* Subtle Top Watermark */}
      <div
        className="absolute top-0 inset-x-0 h-[65%] pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 pt-2 sm:pt-4">
          <span className="font-[family-name:var(--font-bebas)] text-[120px] xs:text-[170px] sm:text-[230px] md:text-[300px] lg:text-[360px] font-normal text-slate-900/[0.03] leading-none tracking-tight block uppercase">
            DUBAI HVAC
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      {/* Main Split Architectural Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-8 sm:pb-12">

          {/* Left Column: Breadcrumb, Slanted Tag, Monumental H1, Subtitle & Slanted CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Clean Inline Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="inline-flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 mb-4"
            >
              <Link href="/" className="hover:text-[#0076FF] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/services" className="hover:text-[#0076FF] transition-colors">
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#0076FF] font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
                {service.shortTitle}
              </span>
            </nav>

            {/* Slanted Service Meta Tag */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="inline-flex items-center bg-[#0076FF] text-white text-[11px] sm:text-xs font-bold px-3 py-1 [transform:skewX(-12deg)] rounded-none">
                <span className="[transform:skewX(12deg)]">SERVICE {service.id}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700">
                <Clock className="w-3.5 h-3.5 text-[#0076FF]" />
                <span>{service.badge}</span>
              </span>
            </div>

            {/* Monumental Bebas Neue H1 */}
            <h1 className="font-[family-name:var(--font-bebas)] text-4xl xs:text-5xl sm:text-6xl md:text-[68px] lg:text-[74px] font-normal tracking-[-0.02em] leading-[0.94] uppercase text-[#111827] mb-4">
              {service.title}
            </h1>

            {/* Clear Onest Tagline */}
            <p className="font-[family-name:var(--font-onest)] text-slate-600 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl mb-7">
              {service.tagline}
            </p>

            {/* Slanted Parallelogram CTAs */}
            <div className="flex flex-row flex-wrap sm:flex-nowrap items-stretch gap-3 sm:gap-4 mb-6 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center bg-[#0076FF] hover:bg-[#0066de] text-white text-xs xs:text-sm sm:text-base font-semibold px-6 sm:px-8 py-3.5 [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] rounded-none transition-all duration-200 active:scale-[0.98] flex-1 sm:flex-initial"
                aria-label={`Book ${service.shortTitle} via WhatsApp`}
              >
                <span className="inline-flex items-center gap-2 [transform:skewX(10deg)] sm:[transform:skewX(14deg)] whitespace-nowrap">
                  <span>Book via WhatsApp</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>

              <Link
                href={`tel:${CALL_PHONE}`}
                className="group inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 hover:border-[#0076FF] px-4 sm:px-6 py-2.5 [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] rounded-none transition-all duration-200 active:scale-[0.98] flex-1 sm:flex-initial"
                aria-label="Call Dispatch Hotline"
              >
                <span className="inline-flex items-center gap-2.5 [transform:skewX(10deg)] sm:[transform:skewX(14deg)] whitespace-nowrap">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] bg-[#0076FF] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white [transform:skewX(10deg)] sm:[transform:skewX(14deg)]" />
                  </span>
                  <span className="leading-tight text-left">
                    <span className="block text-[10px] sm:text-[11px] text-slate-500 font-medium">24/7 Dispatch</span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-900">+971 58 659 6321</span>
                  </span>
                </span>
              </Link>
            </div>

            {/* Clean Inline Trust Guarantees */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <Check className="w-4 h-4 text-[#0076FF] stroke-[2.5]" />
                <span className="font-semibold text-slate-800">Zero Callout Fee with Repair</span>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <Check className="w-4 h-4 text-[#0076FF] stroke-[2.5]" />
                <span className="font-semibold text-slate-800">100% Original Parts</span>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <Check className="w-4 h-4 text-[#0076FF] stroke-[2.5]" />
                <span className="font-semibold text-slate-800">Clear Upfront Prices</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sharp Architectural Service Photo Frame */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px] lg:max-w-none">
              <div
                className="hidden sm:block absolute -bottom-3 -right-3 w-full h-full bg-[#0076FF]/12 border border-[#0076FF]/25 rounded-none z-0"
                aria-hidden="true"
              />
              <div className="relative z-10 aspect-[4/3] w-full overflow-hidden border border-slate-200 bg-slate-100 rounded-none">
                <Image
                  src={service.image}
                  alt={`${service.title} in Dubai - Airtronics Fixcare`}
                  fill
                  priority
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/65 to-transparent pointer-events-none" />
                <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white gap-2">
                  <span className="font-[family-name:var(--font-onest)] text-xs sm:text-sm font-semibold tracking-tight truncate">
                    {service.shortTitle}
                  </span>
                  <span className="font-[family-name:var(--font-bebas)] text-base sm:text-lg tracking-wider bg-[#0076FF] px-2.5 py-0.5 leading-none shrink-0">
                    24/7 DUBAI
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Signature Brand Blue Slanted Highlights Ribbon (Replaces 4-Card Grid) */}
      <div className="relative z-20 max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 mt-2">
        <div className="bg-[#0076FF] text-white border border-blue-400/30 [transform:skewX(-6deg)] sm:[transform:skewX(-12deg)] shadow-lg shadow-blue-500/15 rounded-none">
          <div className="[transform:skewX(6deg)] sm:[transform:skewX(12deg)] px-5 sm:px-8 lg:px-10 py-4 sm:py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
              {service.heroHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2.5 text-xs sm:text-[13px] text-white/95 leading-snug ${
                    idx !== 0 ? 'lg:border-l lg:border-white/20 lg:pl-4' : ''
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
