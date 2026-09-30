'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Clock, 
  Settings, 
  Phone, 
  ArrowRight, 
  MapPin, 
  CalendarCheck,
  CheckCircle2 
} from 'lucide-react';
import { motion } from 'framer-motion';

const WHATSAPP_PHONE = '971586596321';
const CALL_PHONE = '+971586596321';

export default function ServicesHero() {
  return (
    <section className="relative bg-white border-b border-gray-100/90 overflow-hidden" aria-label="Services Overview Hero">
      
      {/* Centered 1200px Container hosting background visual and foreground content */}
      <div className="relative max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 lg:py-16">
        
        {/* Desktop Ambient Background Image (Right Bleed with Left Gradient Mask) */}
        <div className="hidden lg:block absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/hvac_maintenance_technician.jpg"
            alt="Airtronics HVAC engineer servicing AC system in Dubai"
            fill
            priority
            sizes="1200px"
            className="object-cover object-[80%_center]"
          />
          {/* Multi-stop smooth fade for 100% text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white via-[48%] to-white/10 xl:to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-[53%] to-transparent z-10" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-2xl lg:max-w-[620px]">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#005eb8] transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#005eb8]">Services</span>
          </nav>

          {/* Eyebrow */}
          <div className="flex items-center gap-2 text-xs sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
            <span className="text-[#005eb8] font-black text-sm">/</span>
            <span>DUBAI CLIMATE CONTROL &amp; HVAC SOLUTIONS</span>
          </div>

          {/* Main H1 Headline for SEO */}
          <h1 className="text-3xl sm:text-4xl md:text-[44px] font-medium tracking-tight text-[#111111] leading-[1.12] mb-4">
            Certified AC Repair &amp; <span className="text-[#005eb8]">Complete HVAC Services in Dubai</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            From 30-minute emergency AC troubleshooting and turnkey installations to hospital-grade duct sanitization and corporate AMC plans. Airtronics Fixcare keeps residential villas and commercial towers cool across Dubai with genuine OEM parts and transparent upfront pricing.
          </p>

          {/* Trust Value Strip (Standard Inline, No Cards) */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-7 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#005eb8] shrink-0" />
              <span><strong className="font-semibold text-[#111111]">30–45 Min</strong> Emergency Arrival</span>
            </div>
            <div className="flex items-center gap-2">
              <Settings className="w-4 h-4 text-[#005eb8] shrink-0" />
              <span><strong className="font-semibold text-[#111111]">100% OEM</strong> Genuine Parts</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong className="font-semibold text-[#111111]">Approved</strong> Dubai Municipality</span>
            </div>
          </div>

          {/* Dual Primary Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hello Airtronics Fixcare! I would like to book an AC / HVAC service in Dubai. Please provide your availability.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#005eb8] hover:bg-[#004a94] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap group"
              aria-label="Book AC Service via WhatsApp"
            >
              <CalendarCheck className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Book AC Service via WhatsApp</span>
            </a>

            <Link
              href={`tel:${CALL_PHONE.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#111111] border border-gray-300 hover:border-[#005eb8] text-xs sm:text-sm font-semibold px-5 py-3 rounded-full transition-colors whitespace-nowrap"
              aria-label="Call 24/7 Dubai Dispatch Hotline"
            >
              <Phone className="w-4 h-4 text-[#005eb8]" />
              <span>24/7 Hotline: +971 58 659 6321</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
