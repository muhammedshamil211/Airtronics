'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  PhoneCall,
  TrendingDown,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import AnimatedShaderBackground from '@/components/ui/AnimatedShaderBackground';

const WHATSAPP_PHONE = '971586596321';

// Landmark SVG Icons for UAE Cities
function BurjKhalifaIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2v20" />
      <path d="M11 5h2" />
      <path d="M10.5 8h3" />
      <path d="M10 11h4" />
      <path d="M9.5 14h5" />
      <path d="M8 17h8" />
      <path d="M6 22h12" />
      <path d="M11 5l-1 6-1.5 3-1.5 3-1 5" />
      <path d="M13 5l1 6 1.5 3 1.5 3 1 5" />
    </svg>
  );
}

function GrandMosqueIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 4v2" />
      <path d="M8 12c0-3.5 1.8-6 4-6s4 2.5 4 6z" />
      <path d="M4 22V7l1-2 1 2v15" />
      <path d="M18 22V7l1-2 1 2v15" />
      <path d="M2 22h20" />
      <path d="M10 22v-3a2 2 0 0 1 4 0v3" />
      <path d="M6 14h12" />
    </svg>
  );
}

function SharjahMonumentIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 5L7 8v10l5-3 5 3V8z" />
      <path d="M12 5v10" />
      <path d="M5 22h14" />
      <path d="M7 18v4" />
      <path d="M17 18v4" />
      <circle cx="12" cy="3" r="1" fill="currentColor" />
    </svg>
  );
}

function AjmanFortIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 22V9l2-2h4l2 2v13" />
      <path d="M12 11h8v11" />
      <path d="M4 7h1v2h2V7h2V5h2v4" />
      <path d="M12 11h2v-2h2v2h2v-2h2v2" />
      <path d="M6 22v-4a2 2 0 0 1 4 0v4" />
      <path d="M3 22h18" />
    </svg>
  );
}

function JebelJaisIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 21l7-13 4 7 2-3 5 9H3z" />
      <path d="M10 8l2 5" />
      <path d="M10 4h2v4h-2z" />
      <path d="M11 2v2" />
    </svg>
  );
}

function DhowIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 16c2 3 7 4 12 4 4 0 6-1 7-4H3z" />
      <path d="M11 4v12" />
      <path d="M6 6l5-2 6 8-6 4z" />
      <path d="M2 22c3 0 4-1 7-1s4 1 7 1 4-1 6-1" />
    </svg>
  );
}

function FujairahFortIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 22V8h4v14" />
      <path d="M16 22V8h4v14" />
      <path d="M3 8h6V5H7v1H5V5H3z" />
      <path d="M15 8h6V5h-2v1h-2V5h-2z" />
      <path d="M8 12h8v10H8z" />
      <path d="M10 22v-3a2 2 0 0 1 4 0v3" />
      <path d="M2 22h20" />
    </svg>
  );
}

function AlAinOasisIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 22V10l1-2h4l1 2v12" />
      <path d="M4 10h8" />
      <path d="M6 7V5h1v1h2V5h1v2" />
      <path d="M18 22v-9" />
      <path d="M18 13c-2-2-4-2-6-1" />
      <path d="M18 13c2-2 4-2 5-1" />
      <path d="M18 13c0-3-1-5-3-6" />
      <path d="M18 13c1-3 3-5 5-5" />
      <path d="M3 22h19" />
    </svg>
  );
}

// Main UAE Cities with Defining Landmark Icons
const CITIES = [
  { name: 'Dubai', Icon: BurjKhalifaIcon },
  { name: 'Abu Dhabi', Icon: GrandMosqueIcon },
  { name: 'Sharjah', Icon: SharjahMonumentIcon },
  { name: 'Ajman', Icon: AjmanFortIcon },
  { name: 'Ras Al Khaimah', Icon: JebelJaisIcon },
  { name: 'Umm Al Quwain', Icon: DhowIcon },
  { name: 'Fujairah', Icon: FujairahFortIcon },
  { name: 'Al Ain', Icon: AlAinOasisIcon },
];

export default function ServiceAreasSection() {
  const whatsappBookingUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    'Hello Airtronics! I would like to book rapid AC service for my location in the UAE.'
  )}`;

  const whatsappEnergyAdUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    'Hello Airtronics! I would like to book an AC Energy Efficiency Audit to reduce my monthly DEWA power consumption.'
  )}`;

  return (
    <section
      id="service-areas"
      aria-labelledby="service-areas-heading"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-[#03132b] text-white border-b border-slate-900"
    >
      {/* ========================================================================= */}
      {/* 1. ANIMATED SHADER BACKGROUND (Same as Process Section)                   */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Real-time WebGL Animated Fluid Shader in Brand Electric Blue & Cyan */}
        <AnimatedShaderBackground
          patternStyle={3}
          speed={0.75}
          scale={1.0}
          distortion={2.5}
          brightness={1.5}
          refraction={1.0}
          colors={{
            base: '#000614',
            mid: '#004aa6',
            high: '#11444fff',
          }}
        />

        {/* Soft atmospheric depth allowing fluid waves to shine through */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

        {/* Top-left cyan radiant glow */}
        <div
          className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00D4FF 0%, #004aa6 45%, transparent 70%)' }}
        />

        {/* Middle-right ambient glow */}
        <div
          className="absolute top-1/3 -right-24 w-[500px] h-[500px] rounded-full blur-[130px] opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0076FF 0%, transparent 70%)' }}
        />

        {/* Bottom-left ambient glow */}
        <div
          className="absolute bottom-20 -left-20 w-[450px] h-[450px] rounded-full blur-[110px] opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00AEEF 0%, transparent 70%)' }}
        />
      </div>

      {/* ========================================================================= */}
      {/* MAIN CONTAINER: Maximum 1400px Width Constraint                            */}
      {/* ========================================================================= */}
      <div className="relative max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Faint Giant Background Watermark "COVERAGE" */}
        <div
          className="absolute -top-6 xs:-top-8 sm:-top-12 md:-top-18 left-4 pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-[family-name:var(--font-onest)] text-7xl xs:text-8xl sm:text-9xl md:text-[140px] lg:text-[170px] font-black text-white/[0.045] leading-none tracking-tight block">
            COVERAGE
          </span>
        </div>

        {/* ======================================================================= */}
        {/* SECTION HEADER & PRIMARY CTAs                                           */}
        {/* ======================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10"
        >
          <div className="max-w-2xl">
            {/* Section Headline */}
            <h2
              id="service-areas-heading"
              className="font-[family-name:var(--font-onest)] text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.14] mb-3"
            >
              Serving All Main Cities Across the UAE
            </h2>

            {/* Subtitle */}
            <p className="font-[family-name:var(--font-onest)] text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Certified HVAC repair, preventive AC maintenance, and emergency cooling technicians dispatched rapidly across residential and commercial properties in all Emirates.
            </p>
          </div>
        </motion.div>

        {/* ======================================================================= */}
        {/* SIMPLE LIST: Pure City Names with Place Icons (No Card Elements)        */}
        {/* ======================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="relative z-10 mb-10 sm:mb-14"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 sm:gap-x-10 gap-y-1">
            {CITIES.map((city) => (
              <a
                key={city.name}
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-3.5 border-b border-white/10 hover:border-[#00D4FF]/60 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <city.Icon className="w-5 h-5 text-[#00D4FF] shrink-0 transition-transform duration-200 group-hover:scale-110" />
                  <span className="font-[family-name:var(--font-onest)] font-bold text-base sm:text-lg text-white group-hover:text-[#00D4FF] transition-colors truncate">
                    {city.name}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#00D4FF] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ======================================================================= */}
        {/* MONEY SAVE CTA (LIGHT COLOR DIV: HIGH-HOOK HEADLINE + CTA BUTTON + IMAGE)*/}
        {/* ======================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="relative z-10 max-w-[1040px] mx-auto p-2 sm:p-2.5 md:p-3 bg-white/[0.12] backdrop-blur-xl shadow-2xl shadow-black/30 rounded-[3px] select-none"
        >
          <div className="relative rounded-none bg-white text-slate-900 border border-slate-200/90 p-5 sm:p-7 lg:p-8 overflow-hidden">
            {/* Subtle Ambient Radial Highlight on Light Div */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/60 blur-3xl pointer-events-none" />

            {/* 2-Column Content Grid: Hook & CTA on Left, Image on Right */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: High-Hook Headline & Direct CTA Button */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* High-Hook Headline */}
              <h3 className="font-[family-name:var(--font-onest)] text-xl xs:text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight leading-[1.15] mb-2.5">
                High AC Electricity Bills? Cut Up to 30% Off Your DEWA Power.
              </h3>

              {/* Punchy 1-Line Hook */}
              <p className="font-[family-name:var(--font-onest)] text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 sm:mb-6 max-w-md">
                Dirty coils and worn components overload your compressor. Restore factory cooling efficiency with a same-day certified inspection.
              </p>

              {/* Direct CTA Action Button */}
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  href={whatsappEnergyAdUrl}
                  target="_blank"
                  variant="primary"
                  size="md"
                  className="!px-6 !py-2.5 sm:!py-3 font-semibold text-xs sm:text-sm"
                  iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
                >
                  <span>Claim Bill Inspection Now</span>
                </Button>

                <Button
                  href="tel:+971586596321"
                  variant="white"
                  size="md"
                  className="!px-5 !py-2.5 sm:!py-3 text-slate-800 font-semibold border border-slate-200 text-xs sm:text-sm"
                  iconLeft={<PhoneCall className="w-3.5 h-3.5 text-[#0076FF]" />}
                >
                  <span>Call 24/7</span>
                </Button>
              </div>
            </div>

            {/* RIGHT COLUMN: The CTA Image Floating Freely */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[290px] sm:max-w-[330px] aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center">
                <Image
                  src="/images/hvac-bill.png"
                  alt="High AC electricity consumption and DEWA bill power optimization"
                  fill
                  sizes="(max-width: 1024px) 100vw, 340px"
                  className="object-contain drop-shadow-md select-none"
                  priority={false}
                />

                {/* Floating Metric Badge over the image */}
                <div className="absolute -bottom-2 sm:bottom-0 inset-x-1 sm:inset-x-2 bg-slate-900/95 backdrop-blur-md border border-slate-800 rounded-none px-3 py-2 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-none bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="leading-tight">
                      <span className="text-[11px] font-bold text-white block">Cut Monthly DEWA Bill</span>
                      <span className="text-[10px] text-slate-300 block">Est. AED 250–600 / mo</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-black text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-none border border-emerald-500/30">
                    -30%
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      </div>
    </section>
  );
}
