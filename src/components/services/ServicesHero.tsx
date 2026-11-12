'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Clock,
  Phone,
  ArrowRight,
  Check,
  Users,
  Building2,
  ChevronRight,
} from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import CountUp from '@/components/ui/CountUp';

// WhatsApp Configuration
const WHATSAPP_PHONE = '971586596321';

const getWhatsAppDirectLink = (serviceName = 'AC Repair & HVAC Services') => {
  const message = `Hello Airtronics Fixcare! I would like to book ${serviceName} in Dubai. Please provide immediate technician availability and pricing.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

// Reusable Static Configuration Data with Smooth CountUp Animation
const STATS_DATA: Array<{
  icon: React.ElementType;
  value: React.ReactNode;
  label: string;
}> = [
  { icon: Users, value: <CountUp end={1000} suffix="+" />, label: 'AC Units Fixed' },
  { icon: Clock, value: <><CountUp end={30} />–<CountUp end={45} suffix=" Min" /></>, label: 'Fast Arrival Time' },
  { icon: ShieldCheck, value: <CountUp end={100} suffix="%" />, label: 'Original Spare Parts' },
  { icon: Building2, value: 'Dubai-Wide', label: '24/7 Home & Office Help' },
];

// Staggered Entrance Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function ServicesHero() {
  return (
    <section
      className="relative bg-white text-slate-900 overflow-hidden pt-6 sm:pt-10 md:pt-12 pb-8 sm:pb-12 lg:pb-14 border-b border-slate-100"
      aria-label="Certified AC Repair and HVAC Services Dubai Hero"
    >
      {/* 1. Subtle Top Background Watermark */}
      <div
        className="absolute top-0 inset-x-0 h-[70%] pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 pt-2 sm:pt-4">
          <span className="font-[family-name:var(--font-bebas)] text-[140px] xs:text-[180px] sm:text-[240px] md:text-[310px] lg:text-[380px] font-normal text-slate-900/[0.035] leading-none tracking-tight block">
            SERVICES
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-44 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      {/* 2. Main Split Architectural Hero Grid */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center pb-8 sm:pb-12">

          {/* Left Column: Breadcrumb, Monumental Headline, Subtitle, Slanted Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-start text-left"
          >
            {/* Clean Inline Breadcrumb (No Pill) */}
            <motion.nav
              variants={itemVariants}
              aria-label="Breadcrumb"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 mb-4"
            >
              <Link href="/" className="hover:text-[#0076FF] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#0076FF] font-semibold" aria-current="page">
                AC &amp; HVAC Services
              </span>
            </motion.nav>

            {/* Monumental Bebas Neue H1 Aligned With Page Keyword Target & Simple English */}
            <motion.h1
              variants={itemVariants}
              className="font-[family-name:var(--font-bebas)] text-5xl xs:text-6xl sm:text-7xl md:text-[78px] lg:text-[84px] xl:text-[92px] font-normal tracking-[-0.02em] leading-[0.92] uppercase mb-4 sm:mb-5"
            >
              <span className="block text-[#111827]">
                ALL AC &amp; HVAC
              </span>
              <span className="block text-[#0076FF]">
                SERVICES IN DUBAI
              </span>
            </motion.h1>

            {/* Clear Plain-English Subtitle Optimized for Search & Immediate Readability */}
            <motion.p
              variants={itemVariants}
              className="font-[family-name:var(--font-onest)] text-slate-600 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl mb-7 sm:mb-8"
            >
              Fast, reliable AC repair, new AC installation, duct cleaning, and yearly maintenance for homes, villas, and offices in Dubai. Trained technicians arrive in 30–45 minutes with clear prices 24/7.
            </motion.p>

            {/* Slanted Parallelogram Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-row flex-wrap sm:flex-nowrap items-stretch gap-3 sm:gap-4 mb-6 sm:mb-7 w-full sm:w-auto"
            >
              <a
                href={getWhatsAppDirectLink('AC Repair & HVAC Services')}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center bg-[#0076FF] hover:bg-[#0066de] text-white text-xs xs:text-sm sm:text-base font-semibold px-5 sm:px-8 py-3.5 transition-all duration-200 [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] rounded-none active:scale-[0.98] flex-1 sm:flex-initial"
                aria-label="Book AC Service on WhatsApp directly"
              >
                <div className="flex items-center gap-2 [transform:skewX(10deg)] sm:[transform:skewX(14deg)] whitespace-nowrap">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Book a Service</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>

              <Link
                href="tel:+971586596321"
                className="group relative inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 hover:border-[#0076FF] px-4 sm:px-6 py-2.5 transition-all duration-200 [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] rounded-none active:scale-[0.98] flex-1 sm:flex-initial"
                aria-label="Call Emergency Dispatch Team"
              >
                <div className="flex items-center gap-2.5 [transform:skewX(10deg)] sm:[transform:skewX(14deg)] whitespace-nowrap">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] bg-[#0076FF] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white [transform:skewX(10deg)] sm:[transform:skewX(14deg)]" />
                  </div>
                  <div className="leading-tight text-left">
                    <span className="block text-[10px] sm:text-[11px] text-slate-500 font-medium">24/7 Dispatch</span>
                    <span className="block text-xs sm:text-sm font-bold text-slate-900">+971 58 659 6321</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Clean Trust Guarantees Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-700 font-medium"
            >
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <Check className="w-4 h-4 text-[#0076FF] stroke-[2.5]" />
                <span className="font-semibold text-slate-800">Clear Upfront Prices</span>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <Check className="w-4 h-4 text-[#0076FF] stroke-[2.5]" />
                <span className="font-semibold text-slate-800">100% Original Parts</span>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <Check className="w-4 h-4 text-[#0076FF] stroke-[2.5]" />
                <span className="font-semibold text-slate-800">Dubai Municipality Approved</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Borderless Airtronics Service Visual (First on Mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 order-1 lg:order-2 relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[460px] lg:max-w-none overflow-hidden">
              <Image
                src="/images/service-page-airtronics.webp"
                alt="Airtronics certified AC and HVAC services in Dubai"
                width={640}
                height={520}
                priority
                quality={85}
                sizes="(max-width: 1024px) 100vw, 480px"
                className="w-full h-auto object-contain"
              />
              {/* Subtle Bottom Blending */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-10 sm:h-12 bg-gradient-to-t from-white/95 via-white/40 to-transparent"
                aria-hidden="true"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* 3. Brand Blue Slanted Parallelogram Stats Ribbon (Matches Home Motif) */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
        className="relative z-20 w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 mt-2 sm:mt-4"
      >
        <div className="bg-[#0076FF] hover:bg-[#006ee9] text-white border border-blue-400/30 [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] shadow-lg shadow-blue-500/20 transition-all duration-300 rounded-none">
          <div className="[transform:skewX(10deg)] sm:[transform:skewX(14deg)] px-5 xs:px-6 sm:px-8 lg:px-12 py-4 sm:py-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {STATS_DATA.map((st, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 sm:gap-4 group ${
                    idx !== 0 ? 'lg:border-l lg:border-white/20 lg:pl-6' : ''
                  }`}
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white/15 text-white flex items-center justify-center shrink-0 border border-white/25 [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] group-hover:bg-white group-hover:text-[#0076FF] transition-all duration-300 rounded-none">
                    <st.icon className="w-4 h-4 sm:w-5 sm:h-5 [transform:skewX(10deg)] sm:[transform:skewX(14deg)]" />
                  </div>

                  <div className="leading-tight">
                    <span className="font-[family-name:var(--font-bebas)] text-2xl xs:text-3xl sm:text-4xl text-white leading-none tracking-tight block drop-shadow-sm">
                      {st.value}
                    </span>
                    <span className="font-[family-name:var(--font-onest)] text-[11px] xs:text-xs sm:text-[13px] text-blue-100 font-medium uppercase tracking-[0.06em] block mt-0.5">
                      {st.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
