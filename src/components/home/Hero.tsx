'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Timer,
  Award,
  ArrowRight,
  Calendar,
  Users,
  Clock,
  Building2,
} from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import CountUp from '@/components/ui/CountUp';

// WhatsApp Configuration
const WHATSAPP_PHONE = '971586596321';

const getWhatsAppDirectLink = (serviceName = 'AC Repair & HVAC Services') => {
  const message = `Hello Airtronics Fixcare! I would like to get a free quote for ${serviceName} in Dubai. Please provide immediate technician availability and pricing.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

interface HvacUnitItem {
  name: string;
  image: string;
  widthClass: string;
  alt: string;
  shadowWidth: string;
}

// 5 HVAC Equipment Units traveling along the single continuous arch trajectory
const HVAC_UNITS: Array<HvacUnitItem> = [
  {
    name: 'Inverter Split AC',
    image: '/images/White Inverter Split Air Conditioner.webp',
    widthClass: 'w-28 xs:w-36 sm:w-46 md:w-56 lg:w-64 xl:w-72',
    alt: 'White Inverter Split AC Wall Unit Dubai',
    shadowWidth: 'w-[85%]',
  },
  {
    name: 'Ceiling Cassette AC',
    image: '/images/Ceiling Cassette Air Conditioner Unit.webp',
    widthClass: 'w-24 xs:w-32 sm:w-40 md:w-50 lg:w-58 xl:w-64',
    alt: 'Ceiling Cassette AC Unit Dubai',
    shadowWidth: 'w-[80%]',
  },
  {
    name: 'Industrial HVAC Chiller',
    image: '/images/Industrial HVAC Chiller Unit (1).webp',
    widthClass: 'w-32 xs:w-42 sm:w-54 md:w-66 lg:w-78 xl:w-86',
    alt: 'Industrial Rooftop HVAC Chiller Unit Dubai',
    shadowWidth: 'w-[90%]',
  },
  {
    name: 'HVAC Vent Grille',
    image: '/images/Angled White HVAC Vent Grille.webp',
    widthClass: 'w-24 xs:w-32 sm:w-40 md:w-50 lg:w-58 xl:w-64',
    alt: 'Angled White HVAC Vent Grille Linear Diffuser Dubai',
    shadowWidth: 'w-[85%]',
  },
  {
    name: 'Circular Ceiling Diffuser',
    image: '/images/White Circular Ceiling Air Diffuser.webp',
    widthClass: 'w-22 xs:w-30 sm:w-38 md:w-48 lg:w-56 xl:w-62',
    alt: 'Circular Ceiling Air Diffuser Vent Dubai',
    shadowWidth: 'w-[80%]',
  },
];

// Reusable Static Configuration Data with Smooth CountUp Animation
const STATS_DATA: Array<{
  icon: React.ElementType;
  value: React.ReactNode;
  label: string;
}> = [
  { icon: Users, value: <CountUp end={1000} suffix="+" />, label: 'AC Units Serviced' },
  { icon: Clock, value: <><CountUp end={30} />–<CountUp end={45} suffix=" Min" /></>, label: 'Average Arrival' },
  { icon: ShieldCheck, value: <CountUp end={100} suffix="%" />, label: 'OEM Genuine Parts' },
  { icon: Building2, value: 'Dubai-Wide', label: '24/7 Coverage Across All Areas' },
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

export default function Hero() {
  return (
    <section
      aria-label="HVAC and AC Repair Services Hero"
      className="relative bg-white text-slate-900 overflow-hidden pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 lg:pb-14"
    >
      {/* ========================================================================= */}
      {/* 1. TOP BACKGROUND WATERMARK (BEHIND HEADING & REACHING BEHIND ELEMENTS)    */}
      {/* ========================================================================= */}
      <div
        className="absolute top-0 inset-x-0 h-[60%] sm:h-[64%] md:h-[68%] lg:h-[72%] pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        {/* Giant Watermark Letters Positioned at Top Behind Heading */}
        <div className="w-full h-full flex items-start justify-between px-2 sm:px-6 md:px-10 lg:px-14 pt-2 sm:pt-4 md:pt-6">
          <span className="font-[family-name:var(--font-bebas)] text-[200px] xs:text-[260px] sm:text-[360px] md:text-[460px] lg:text-[540px] xl:text-[620px] font-normal text-slate-900/[0.04] leading-none">
            H
          </span>
          <span className="font-[family-name:var(--font-bebas)] text-[200px] xs:text-[260px] sm:text-[360px] md:text-[460px] lg:text-[540px] xl:text-[620px] font-normal text-slate-900/[0.04] leading-none">
            V
          </span>
          <span className="font-[family-name:var(--font-bebas)] text-[200px] xs:text-[260px] sm:text-[360px] md:text-[460px] lg:text-[540px] xl:text-[620px] font-normal text-slate-900/[0.04] leading-none">
            A
          </span>
          <span className="font-[family-name:var(--font-bebas)] text-[200px] xs:text-[260px] sm:text-[360px] md:text-[460px] lg:text-[540px] xl:text-[620px] font-normal text-slate-900/[0.04] leading-none">
            C
          </span>
        </div>

        {/* Smooth Bottom Blend Gradient Fading Gracefully Behind Elements */}
        <div className="absolute inset-x-0 bottom-0 h-36 sm:h-52 md:h-64 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-[1]" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* ======================================================================= */}
          {/* MAIN HEADLINE - EXTRA TALL WITH REDUCED LETTER GAP                      */}
          {/* ======================================================================= */}
          <motion.h1
            variants={itemVariants}
            className="font-[family-name:var(--font-bebas)] text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[108px] font-normal tracking-[-0.02em] sm:tracking-[-0.025em] md:tracking-[-0.03em] leading-[0.92] sm:leading-[0.88] uppercase text-center mb-3 sm:mb-4 relative z-10"
          >
            <span className="block text-[#111827]">
              AC REPAIR DUBAI &amp;
            </span>
            <span className="block text-[#0076FF]">
              24/7 HVAC SERVICES IN DUBAI
            </span>
          </motion.h1>

          {/* ======================================================================= */}
          {/* 4. TRUST BADGES ROW (DUBAI MUNICIPALITY • SAME-DAY • GENUINE OEM PARTS)  */}
          {/* ======================================================================= */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-700 font-medium mb-1 sm:mb-2 relative z-10"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#0076FF] shrink-0" />
              <span className="font-semibold text-slate-800">Dubai Municipality Approved</span>
            </div>
            <span className="hidden sm:inline text-slate-300">|</span>
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4 sm:w-5 sm:h-5 text-[#0076FF] shrink-0" />
              <span className="font-semibold text-slate-800">Same-Day Service</span>
            </div>
            <span className="hidden sm:inline text-slate-300">|</span>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#0076FF] shrink-0" />
              <span className="font-semibold text-slate-800">Genuine OEM Parts</span>
            </div>
          </motion.div>

          {/* ======================================================================= */}
          {/* 5. SINGLE CONTINUOUS ARCH-SHAPED TRAJECTORY HORIZONTAL MOVEMENT          */}
          {/* ======================================================================= */}
          <div className="hvac-arch-container relative w-full overflow-hidden -mt-6 xs:-mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 z-20 h-[220px] xs:h-[260px] sm:h-[300px] md:h-[350px] lg:h-[380px] pointer-events-none select-none">
            {/* Subtle Gradient Masks on Far Screen Edges for Seamless Entry & Exit */}
            <div className="absolute left-0 inset-y-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-30" />
            <div className="absolute right-0 inset-y-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-30" />

            {/* 3D Perspective Ground Plane Text: AIRTRONICS Skewed Into Z-Axis */}
            <div
              className="absolute bottom-1 sm:bottom-3 md:bottom-5 inset-x-0 flex items-center justify-center pointer-events-none select-none z-0"
              style={{
                perspective: '750px',
                perspectiveOrigin: '50% 100%',
              }}
              aria-hidden="true"
            >
              <span
                className="font-[family-name:var(--font-bebas)] text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[130px] xl:text-[160px] font-black tracking-[0.18em] sm:tracking-[0.24em] md:tracking-[0.28em] text-slate-900/[0.05] uppercase leading-none whitespace-nowrap"
                style={{
                  transform: 'rotateX(68deg) scaleY(1.35)',
                  transformOrigin: 'center bottom',
                  maskImage: 'linear-gradient(to top, rgba(0,0,0,0.85) 15%, rgba(0,0,0,0) 95%)',
                  WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.85) 15%, rgba(0,0,0,0) 95%)',
                }}
              >
                AIRTRONICS
              </span>
            </div>

            {/* All HVAC Elements Traveling Along the Single Continuous Arch Path */}
            {HVAC_UNITS.map((unit, idx) => (
              <div
                key={idx}
                className="hvac-arch-item absolute top-1/2 left-0 flex flex-col items-center justify-center will-change-transform"
                style={{
                  animation: 'hvacArchFlight 25s linear infinite',
                  animationDelay: `${-idx * 5}s`,
                }}
              >
                <div className={`relative ${unit.widthClass} aspect-square flex items-center justify-center`}>
                  <Image
                    src={unit.image}
                    alt={unit.alt}
                    fill
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 260px, 340px"
                    priority
                    className="object-contain drop-shadow-sm select-none"
                  />
                </div>
                {/* Synchronized Base Shadow Following the Element's Arch Flight */}
                <div
                  className={`${unit.shadowWidth} h-2 sm:h-3.5 mx-auto bg-black/15 rounded-[100%] blur-[5px] sm:blur-[7px] -mt-1 sm:-mt-2`}
                />
              </div>
            ))}

            {/* Seamless Arch Trajectory Keyframes with Natural Depth & Subtle Tilt */}
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  .hvac-arch-container {
                    --arch-base: 36px;
                    --arch-y15: 12px;
                    --arch-y30: -14px;
                    --arch-apex: -38px;
                  }
                  @media (min-width: 640px) {
                    .hvac-arch-container {
                      --arch-base: 52px;
                      --arch-y15: 18px;
                      --arch-y30: -22px;
                      --arch-apex: -56px;
                    }
                  }
                  @keyframes hvacArchFlight {
                    0% {
                      transform: translate3d(calc(-18vw - 50%), calc(var(--arch-base) - 50%), 0) scale(0.76) rotate(-3.5deg);
                      opacity: 0;
                    }
                    4% {
                      opacity: 1;
                    }
                    15% {
                      transform: translate3d(calc(2.5vw - 50%), calc(var(--arch-y15) - 50%), 0) scale(0.90) rotate(-2.6deg);
                    }
                    30% {
                      transform: translate3d(calc(23vw - 50%), calc(var(--arch-y30) - 50%), 0) scale(1.06) rotate(-1.5deg);
                    }
                    50% {
                      transform: translate3d(calc(50vw - 50%), calc(var(--arch-apex) - 50%), 0) scale(1.16) rotate(0deg);
                      opacity: 1;
                    }
                    70% {
                      transform: translate3d(calc(77vw - 50%), calc(var(--arch-y30) - 50%), 0) scale(1.06) rotate(1.5deg);
                    }
                    85% {
                      transform: translate3d(calc(97.5vw - 50%), calc(var(--arch-y15) - 50%), 0) scale(0.90) rotate(2.6deg);
                    }
                    96% {
                      opacity: 1;
                    }
                    100% {
                      transform: translate3d(calc(118vw - 50%), calc(var(--arch-base) - 50%), 0) scale(0.76) rotate(3.5deg);
                      opacity: 0;
                    }
                  }
                `,
              }}
            />
          </div>

          {/* ======================================================================= */}
          {/* 6. DYNAMIC SLANTED CTA BUTTONS (SINGLE ROW & POSITIONED HIGHER UP)       */}
          {/* ======================================================================= */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row flex-nowrap items-center justify-center gap-2.5 xs:gap-4 sm:gap-5 -mt-4 xs:-mt-6 sm:-mt-8 md:-mt-10 mb-8 sm:mb-12 relative z-30 w-full px-2"
          >
            {/* Left Action: Get a Free Quote (Solid Blue Slanted Parallelogram) */}
            <a
              href={getWhatsAppDirectLink('AC Repair & HVAC Services')}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center bg-[#0076FF] hover:bg-[#0066de] text-white text-xs xs:text-sm sm:text-base font-semibold px-4 xs:px-6 sm:px-8 md:px-9 py-2.5 sm:py-3.5 transition-all duration-200 [transform:skewX(-14deg)] hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] shrink-0"
              aria-label="Get a Free Quote on WhatsApp"
            >
              <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 [transform:skewX(14deg)] whitespace-nowrap">
                <svg
                  viewBox="0 0 24 24"
                  className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 fill-current shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Get a Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>

            {/* Right Action: Book a Service (Bordered Slanted Parallelogram) */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 hover:border-[#0076FF] text-xs xs:text-sm sm:text-base font-semibold px-4 xs:px-6 sm:px-8 md:px-9 py-2.5 sm:py-3.5 transition-all duration-200 [transform:skewX(-14deg)] hover:shadow-xs active:scale-[0.98] shrink-0"
              aria-label="Book an AC Service"
            >
              <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 [transform:skewX(14deg)] whitespace-nowrap">
                <Calendar className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-[#0076FF]" />
                <span>Book a Service</span>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* 7. STATS / TRUST PILLARS BAR (Brand Blue Slanted Parallelogram)            */}
      {/* ========================================================================= */}
      <div className="relative z-20 w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 mt-2 sm:mt-4 mb-4 sm:mb-6">
        {/* Slanted Parallelogram Outer Div in Brand Color (#0076FF) */}
        <div className="bg-[#0076FF] hover:bg-[#006ee9] text-white border border-blue-400/30 [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] shadow-lg shadow-blue-500/20 transition-all duration-300">
          {/* Inner Counter-Skewed Grid to Keep Typography & Icons Straight */}
          <div className="[transform:skewX(10deg)] sm:[transform:skewX(14deg)] px-5 xs:px-6 sm:px-8 lg:px-12 py-4 sm:py-5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {STATS_DATA.map((st, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 sm:gap-4 group ${
                    idx !== 0 ? 'lg:border-l lg:border-white/20 lg:pl-6' : ''
                  }`}
                >
                  {/* Slanted Parallelogram Icon Matching Button Motif */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white/15 text-white flex items-center justify-center shrink-0 border border-white/25 [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] group-hover:bg-white group-hover:text-[#0076FF] transition-all duration-300 shadow-xs">
                    <st.icon className="w-4 h-4 sm:w-5 sm:h-5 [transform:skewX(10deg)] sm:[transform:skewX(14deg)]" />
                  </div>

                  {/* Typography Matching Hero Headline (Bebas Neue) & Eyebrow (Onest) */}
                  <div className="leading-tight">
                    <span className="font-[family-name:var(--font-bebas)] text-2xl xs:text-3xl sm:text-4xl text-white leading-none tracking-tight block drop-shadow-sm">
                      {st.value}
                    </span>
                    <span className="font-[family-name:var(--font-onest)] text-[11px] xs:text-xs sm:text-[13px] text-blue-100 font-medium uppercase tracking-[0.06em] sm:tracking-[0.08em] block mt-0.5">
                      {st.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
