'use client';

import React from 'react';
import { Search, FileText, Settings, ShieldCheck, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Script from 'next/script';
import AnimatedShaderBackground from '@/components/ui/AnimatedShaderBackground';
import AboutSection from './AboutSection';

const WHATSAPP_PHONE = '971586596321';

// Custom WhatsApp Icon matching the reference image's clean rounded speech bubble with handset
function WhatsAppIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.5 9.5c.3-.3.7-.3 1 0l1 1c.3.3.3.7 0 1l-.5.5c.3.6.8 1.1 1.4 1.4l.5-.5c.3-.3.7-.3 1 0l1 1c.3.3.3.7 0 1-.4.4-1 .6-1.5.5-1.5-.2-2.9-1-3.9-2s-1.8-2.4-2-3.9c-.1-.5.1-1.1.5-1.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

interface StepItem {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  badge?: string;
  icon: React.ReactNode;
}

const processSteps: StepItem[] = [
  {
    id: '01',
    stepNumber: 1,
    title: 'Book AC Service',
    description: 'Contact us via phone or WhatsApp to schedule a time.',
    badge: 'Instant Dispatch',
    icon: <WhatsAppIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#0076FF]" />,
  },
  {
    id: '02',
    stepNumber: 2,
    title: 'Expert Inspection',
    description: 'Our licensed technicians diagnose the issue accurately.',
    badge: 'Digital Diagnostics',
    icon: <Search className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#0076FF]" strokeWidth={2.2} />,
  },
  {
    id: '03',
    stepNumber: 3,
    title: 'Upfront Pricing',
    description: 'Receive a clear, itemized quote with no hidden charges.',
    badge: 'Fixed Itemized Rate',
    icon: <FileText className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#0076FF]" strokeWidth={2.2} />,
  },
  {
    id: '04',
    stepNumber: 4,
    title: 'Same-Day Repair',
    description: 'We fix the issue using genuine parts and restore cooling.',
    badge: '100% Genuine OEM',
    icon: <Settings className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#0076FF]" strokeWidth={2.2} />,
  },
  {
    id: '05',
    stepNumber: 5,
    title: 'Follow-up & Support',
    description: 'After-service support with warranty for peace of mind.',
    badge: '90-Day Warranty',
    icon: <ShieldCheck className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-[#0076FF]" strokeWidth={2.2} />,
  },
];

export default function ProcessSection() {
  // Rich Schema.org HowTo Structured Data for Rank-#1 Google Rich Snippets
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': 'https://airtronicsfixcare.com/#process',
    'name': 'Our 5-Step AC Repair & HVAC Service Process in Dubai',
    'description': 'Certified step-by-step air conditioning repair and HVAC maintenance workflow in Dubai by Airtronics Fixcare: emergency booking, precision digital diagnostics, upfront written quotes, same-day OEM repairs, and a 90-day warranty.',
    'totalTime': 'PT45M',
    'estimatedCost': {
      '@type': 'MonetaryAmount',
      'currency': 'AED',
      'value': '150',
    },
    'step': processSteps.map((step) => ({
      '@type': 'HowToStep',
      'position': step.stepNumber,
      'name': `Step ${step.stepNumber}: ${step.title}`,
      'text': step.description,
      'url': `https://airtronicsfixcare.com/#step-${step.stepNumber}`,
    })),
  };

  const handleStepClick = (stepId: string) => {
    if (stepId === '01') {
      window.open(
        `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
          'Hello Airtronics Fixcare! I would like to book an AC service in Dubai.'
        )}`,
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-0 bg-[#03132b] text-white"
    >
      {/* JSON-LD HowTo Schema for Google Rich Snippets */}
      <Script
        id="how-it-works-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* ========================================================================= */}
      {/* 1. ANIMATED SHADER BACKGROUND (Framer Animated-Shader-2.0 Abyss Engine)   */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Real-time WebGL Animated Fluid Shader in Brand Electric Blue & Cyan (High Speed) */}
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

        {/* Soft atmospheric depth allowing the smooth flowing liquid waves to shine through */}
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

      <AboutSection />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px] relative z-20 pb-25">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-12 items-start lg:items-center">

          {/* ======================================================================= */}
          {/* 2. LEFT COLUMN: Eyebrow + Tall Bebas Heading + Subtitle + Watermark     */}
          {/* ======================================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-start pt-0 sm:pt-2 lg:pt-4 relative min-h-0 lg:min-h-[460px] pb-0">

            {/* Faint Giant Background Watermark "PROCESS" */}
            <div
              className="absolute -top-6 xs:-top-8 sm:-top-12 md:-top-24 left-16 sm:left-24 md:left-4 pointer-events-none select-none z-0 overflow-hidden"
              aria-hidden="true"
            >
              <span className="font-[family-name:var(--font-bebas)] text-8xl xs:text-9xl sm:text-[160px] md:text-[200px] lg:text-[240px] font-bold text-white/[0.045] leading-none tracking-wider uppercase block">
                PROCESS
              </span>
            </div>

            {/* Text Content (Positioned Up & Crystal Clear) */}
            <div className="relative z-30 max-w-xl">
              {/* Eyebrow with Cyan Accent Bar */}
              <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
                <span className="w-6 sm:w-8 h-[2.5px] bg-[#00AEEF] rounded-full inline-block" />
                <span className="text-xs sm:text-sm font-bold tracking-[0.16em] text-[#00AEEF] uppercase">
                  OUR PROCESS
                </span>
              </div>

              {/* Main Headline in Tall Display Font (Bebas Neue) */}
              <h2
                id="process-heading"
                className="font-[family-name:var(--font-bebas)] text-4xl xs:text-5xl sm:text-6xl lg:text-[68px] xl:text-[76px] font-bold text-white tracking-[0.02em] uppercase leading-[0.95] mb-3 sm:mb-4"
              >
                From Request to <br className="hidden sm:inline" />
                Cool Comfort
              </h2>

              {/* Subtitle */}
              <p className="font-[family-name:var(--font-onest)] text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed max-w-md">
                A simple, fast and hassle-free process for all your AC and HVAC service needs.
              </p>
            </div>

          </div>

          {/* ======================================================================= */}
          {/* 3. RIGHT COLUMN: Connecting Cyan Arc with Glowing Dots + 5 Process Cards*/}
          {/* ======================================================================= */}
          <div className="lg:col-span-6 relative flex items-center">

            {/* Decorative Curved Cyan Connecting Arc with 5 Glowing Dots (Desktop lg:+) */}
            <div className="hidden lg:block absolute -left-8 xl:-left-10 top-0 bottom-0 w-12 pointer-events-none z-10">
              <svg
                viewBox="0 0 50 480"
                fill="none"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Cyan glowing filter */}
                  <filter id="cyanGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00AEEF" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#0076FF" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#00AEEF" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Curved Arc Path */}
                <path
                  d="M 40 40 Q 5 240 40 440"
                  stroke="url(#arcGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                  className="opacity-75"
                />

                {/* 5 Glowing Connection Nodes Aligned with each card */}
                {/* Node 1 */}
                <circle cx="37" cy="48" r="4.5" fill="#00AEEF" filter="url(#cyanGlow)" />
                <circle cx="37" cy="48" r="2" fill="#ffffff" />

                {/* Node 2 */}
                <circle cx="21" cy="144" r="4.5" fill="#00AEEF" filter="url(#cyanGlow)" />
                <circle cx="21" cy="144" r="2" fill="#ffffff" />

                {/* Node 3 */}
                <circle cx="15" cy="240" r="5" fill="#00AEEF" filter="url(#cyanGlow)" />
                <circle cx="15" cy="240" r="2.5" fill="#ffffff" />

                {/* Node 4 */}
                <circle cx="21" cy="336" r="4.5" fill="#00AEEF" filter="url(#cyanGlow)" />
                <circle cx="21" cy="336" r="2" fill="#ffffff" />

                {/* Node 5 */}
                <circle cx="37" cy="432" r="4.5" fill="#00AEEF" filter="url(#cyanGlow)" />
                <circle cx="37" cy="432" r="2" fill="#ffffff" />
              </svg>
            </div>

            {/* 5 Clean Process Step Cards (No Glow / Clean Natural State) */}
            <div className="w-full space-y-3 sm:space-y-3.5 relative z-10" role="list">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
                  onClick={() => handleStepClick(step.id)}
                  className="group relative flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 pr-5 sm:pr-6 rounded-2xl bg-[#091f3d]/85 hover:bg-[#0c274e]/95 border border-blue-400/20 hover:border-blue-300/40 backdrop-blur-md transition-colors duration-200 shadow-md shadow-black/20 cursor-pointer"
                  role="listitem"
                >
                  {/* Clean White Squircle Icon Badge */}
                  <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                    {step.icon}
                  </div>

                  {/* Step Content: Step Number -> Title -> Description */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[11px] sm:text-xs font-bold text-[#00AEEF] tracking-wider uppercase">
                        Step {step.id}
                      </span>
                      {step.badge && (
                        <span className="text-[11px] text-blue-200/70 font-medium hidden sm:inline">
                          • {step.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-[family-name:var(--font-onest)] text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[#00AEEF] transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="font-[family-name:var(--font-onest)] text-xs sm:text-[13px] text-slate-300 leading-snug mt-0.5 line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
      
    </section>
  );
}
