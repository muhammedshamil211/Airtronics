'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Clock,
  Phone,
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Check
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { ServiceDetail } from '@/data/servicesData';

const WHATSAPP_PHONE = '971586596321';
const CALL_PHONE = '+971586596321';

export default function ServiceDetailHero({ service }: { service: ServiceDetail }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    `Hello Airtronics Fixcare! I would like to book the "${service.title}" service in Dubai. Please provide technician availability and pricing.`
  )}`;

  return (
    <section className="relative bg-[#fcfcfc] border-b border-gray-100" aria-label={`${service.title} Header`}>
      {/* ========================================================================= */}
      {/* 1. TOP IMAGE HERO SECTION (Main Heading H1 + Breadcrumbs)                 */}
      {/* ========================================================================= */}
      <div className="relative w-full min-h-[300px] sm:min-h-[360px] md:min-h-[420px] bg-[#08152c] overflow-hidden flex items-center justify-center">
        {/* Service Featured Image */}
        <Image
          src={service.image}
          alt={`${service.title} in Dubai - Airtronics Fixcare`}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center brightness-[0.76] contrast-[1.05]"
        />

        {/* Atmospheric Dark & Brand Navy Overlays for 100% Readability */}
        <div className="absolute inset-0 bg-[#08152c]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08152c]/95 via-[#08152c]/40 to-[#08152c]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,94,184,0.3)_0%,_transparent_75%)]" />

        {/* Ambient Cooling Glow Orbs */}
        <div className="absolute -left-20 top-10 w-72 h-72 rounded-full bg-[#005eb8]/20 blur-[100px] pointer-events-none" />
        <div className="absolute -right-20 bottom-10 w-72 h-72 rounded-full bg-[#00AEEF]/15 blur-[100px] pointer-events-none" />

        {/* Foreground Content inside Image: Breadcrumb, Badges, and MAIN H1 */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center py-12 sm:py-16 md:py-20">
          {/* Breadcrumb Navigation: Home > Services > Service Title */}
          <nav aria-label="Breadcrumb" className="inline-flex items-center space-x-2 text-xs sm:text-sm text-gray-200 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-4 sm:mb-5">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/60" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/60" />
            <span className="text-white font-medium truncate max-w-[180px] sm:max-w-none" aria-current="page">
              {service.shortTitle}
            </span>
          </nav>

          {/* Service Micro-Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#005eb8]/80 backdrop-blur-md text-white font-semibold text-xs border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] animate-pulse" />
              <span>Service {service.id}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/25 backdrop-blur-md text-emerald-300 font-semibold text-xs border border-emerald-400/30">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{service.badge}</span>
            </span>
          </div>

          {/* MAIN HEADING H1: Prominent, high-contrast, rank-#1 SEO weight */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium tracking-tight text-white leading-[1.12] max-w-4xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] mb-4">
            {service.title}
          </h1>

          {/* Tagline / Subtitle */}
          <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            {service.tagline}
          </p>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. OPEN EDITORIAL ACTION & VALUE STRIP (NO BOXED CARDS)                   */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 overflow-hidden">
        {/* Technical Grid Background Pattern (Top-Right, Size 24px) */}
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-blue-100/40 via-sky-50/20 to-transparent rounded-full blur-xl pointer-events-none" />
          <div
            className="w-full h-full opacity-65"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 94, 184, 0.12) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 94, 184, 0.12) 1px, transparent 1px)
              `,
              backgroundSize: '24px 24px',
              maskImage: 'radial-gradient(circle at top right, black 35%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(circle at top right, black 35%, transparent 75%)',
            }}
          />
        </div>

        {/* Open Editorial Action Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-gray-200">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#005eb8] mb-2">
              <span className="w-4 h-[1.5px] bg-[#005eb8]" />
              <span>RAPID ON-SITE DISPATCH ACROSS ALL DUBAI ZONES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111111] leading-tight">
              Certified {service.shortTitle} with Binding Itemized Pricing
            </h2>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Button
              href={whatsappUrl}
              target="_blank"
              variant="primary"
              size="lg"
              aria-label={`Book ${service.shortTitle} via WhatsApp`}
              iconLeft={<CalendarCheck className="w-4 h-4 mr-1" />}
              iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              <span>Book via WhatsApp Now</span>
            </Button>

            <Button
              href={`tel:${CALL_PHONE.replace(/\s+/g, '')}`}
              variant="secondary"
              size="lg"
              aria-label="Call Dispatch Hotline"
              iconLeft={<Phone className="w-4 h-4 mr-1 text-[#005eb8]" />}
            >
              <span>Call: +971 58 659 6321</span>
            </Button>
          </div>
        </div>

        {/* Highlights Checklist Strip (Clean Open Grid, No Box Container) */}
        <div className="py-6 border-b border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {service.heroHighlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-[#005eb8] shrink-0 mt-0.5" />
              <span className="leading-snug">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Trust Badges Strip (Clean Inline Text with Bullets) */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-gray-600 font-medium">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
            <span>Zero Callout Fee with Repair</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
            <span>100% Genuine OEM Parts</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
            <span>90-Day Written Warranty</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
            <span>Dubai Municipality Approved</span>
          </div>
        </div>
      </div>
    </section>
  );
}
