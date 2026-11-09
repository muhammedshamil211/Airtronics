'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import {
  ShieldCheck,
  Clock,
  Phone,
  ArrowRight,
  Check,
  Users,
  Building2,
  ChevronRight
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
  { icon: Users, value: <CountUp end={1000} suffix="+" />, label: 'AC Units Serviced in Dubai' },
  { icon: Clock, value: <><CountUp end={30} />–<CountUp end={45} suffix=" Min" /></>, label: 'Rapid Emergency Arrival' },
  { icon: ShieldCheck, value: <CountUp end={100} suffix="%" />, label: 'Genuine Factory OEM Parts' },
  { icon: Building2, value: 'Dubai-Wide', label: '24/7 Coverage Across All Communities' },
];

// Staggered Entrance Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
};

export default function ServicesHero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#08152c]"
      aria-label="Certified AC Repair and HVAC Services Dubai Hero"
    >
      {/* ========================================================================= */}
      {/* 1. FULL COVERED BACKGROUND & ATMOSPHERIC DEPTH (No Parallax Lag)          */}
      {/* ========================================================================= */}
      <div className="relative min-h-[78vh] sm:min-h-[84vh] lg:min-h-[88vh] flex flex-col justify-between overflow-hidden">

        {/* Static Background Image Container */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Image
            src="/images/hvac_maintenance_technician.jpg"
            alt="Airtronics certified HVAC technician performing AC repair and maintenance service in Dubai"
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover object-[center_35%] brightness-[0.88] contrast-[1.04]"
          />

          {/* Natural Atmospheric Scrim for Clean Legibility */}
          <div className="absolute inset-0 bg-[#08152c]/65 sm:bg-[#08152c]/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08152c]/90 via-[#08152c]/40 to-[#08152c]/95" />
        </div>

        {/* ======================================================================= */}
        {/* 2. CENTERED FOREGROUND HERO CONTENT                                     */}
        {/* ======================================================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 lg:pt-28 pb-14 sm:pb-20 flex-1 flex flex-col justify-center items-center text-center"
        >
          {/* Breadcrumb Navigation: Home > Services */}
          <motion.nav
            variants={itemVariants}
            aria-label="Breadcrumb"
            className="inline-flex items-center space-x-2 text-xs sm:text-sm text-gray-200 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-5 sm:mb-6"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/70" />
            <span className="text-white font-semibold" aria-current="page">
              Services
            </span>
          </motion.nav>

          {/* Main Headline (H1) - Unique high-intent HVAC Solutions target */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-medium tracking-tight text-white leading-[1.12] mb-5 sm:mb-6 max-w-4xl"
          >
            Complete Air Conditioning &amp;{' '}
            <span className="text-sky-400">
              HVAC Solutions in Dubai
            </span>
          </motion.h1>

          {/* Small, Punchy Subtitle - High-impact, concise overview */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal"
          >
            Precision climate engineering for villas, apartments, and commercial facilities. From fast diagnostics and clean installations to sanitization and AMC contracts.
          </motion.p>

          {/* Direct WhatsApp Action & Emergency Hotline */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row items-stretch justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10 w-full max-w-xl mx-auto px-1 sm:px-0"
          >
            {/* Primary Action: Direct WhatsApp (50% Width) */}
            <Button
              href={getWhatsAppDirectLink('AC Repair & HVAC Services')}
              target="_blank"
              variant="primary"
              size="lg"
              className="w-1/2 !py-3 sm:!py-3.5 md:!py-4 text-xs xs:text-sm sm:text-base md:text-lg shrink-0 group"
              aria-label="Book AC Service on WhatsApp directly"
              iconLeft={
                <svg viewBox="0 0 24 24" className="w-4 h-4 xs:w-5 xs:h-5 fill-current shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              }
              iconRight={
                <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 shrink-0 hidden xs:inline-block" />
              }
            >
              <span className="truncate">Book a service</span>
            </Button>

            {/* Secondary Action: Direct Phone Call (50% Width) */}
            <div className="w-1/2 flex shrink-0">
              <Link
                href="tel:+971586596321"
                className="w-full flex items-center justify-center [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] rounded-none bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-2 xs:px-3 sm:px-5 py-2.5 sm:py-3 active:scale-[0.99] transition-all group"
                aria-label="Call Emergency Dispatch Team"
              >
                <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 [transform:skewX(10deg)] sm:[transform:skewX(14deg)]">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] bg-[#0076FF] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white [transform:skewX(10deg)] sm:[transform:skewX(14deg)]" />
                  </div>
                  <div className="leading-tight text-left min-w-0">
                    <span className="block text-[10px] xs:text-[11px] text-slate-500 font-medium truncate">24/7 Dispatch</span>
                    <span className="block text-xs xs:text-sm sm:text-base font-bold text-slate-900 truncate">+971 58 659 6321</span>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Centered Trust Guarantees */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300 font-medium"
          >
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <Check className="w-4 h-4 text-[#008f4c] stroke-[2.5]" />
              <span>Fixed Itemized Pricing</span>
            </div>
            <span className="hidden sm:inline text-white/30">•</span>
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <Check className="w-4 h-4 text-[#008f4c] stroke-[2.5]" />
              <span>100% Genuine OEM Parts</span>
            </div>
            <span className="hidden sm:inline text-white/30">•</span>
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <Check className="w-4 h-4 text-[#008f4c] stroke-[2.5]" />
              <span>Dubai Municipality Approved</span>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* 3. TRUST PILLARS BAR (Clean Architectural Transition)                    */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full bg-white border-t border-slate-200/80 shadow-xs border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 py-5 sm:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {STATS_DATA.map((st, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 sm:gap-3.5 ${
                  idx !== 0 ? 'border-l-0 sm:border-l sm:border-slate-200/80 sm:pl-5' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100">
                  <st.icon className="w-5 h-5" />
                </div>
                <div className="leading-tight">
                  <span className="block text-xl sm:text-2xl font-bold tracking-tight text-[#111111]">
                    {st.value}
                  </span>
                  <span className="block text-xs sm:text-sm text-gray-500 font-medium">
                    {st.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
