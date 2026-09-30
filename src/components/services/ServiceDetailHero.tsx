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
  CheckCircle2 
} from 'lucide-react';
import { ServiceDetail } from '@/data/servicesData';

const WHATSAPP_PHONE = '971586596321';
const CALL_PHONE = '+971586596321';

export default function ServiceDetailHero({ service }: { service: ServiceDetail }) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    `Hello Airtronics Fixcare! I would like to book the "${service.title}" service in Dubai. Please provide availability and pricing.`
  )}`;

  return (
    <section className="relative bg-white border-b border-gray-100/90 overflow-hidden" aria-label={`${service.title} Hero`}>
      <div className="relative max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 lg:py-16">
        
        {/* Desktop Ambient Background Image (Right Bleed with Left Fade Mask) */}
        <div className="hidden lg:block absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <Image
            src={service.image}
            alt={`${service.title} in Dubai`}
            fill
            priority
            sizes="1200px"
            className="object-cover object-[75%_center] xl:object-[80%_center]"
          />
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
            <Link href="/services" className="hover:text-[#005eb8] transition-colors">Services</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#005eb8] truncate max-w-[200px] sm:max-w-none">{service.shortTitle}</span>
          </nav>

          {/* Micro-Badges Row */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#005eb8] font-bold text-xs border border-blue-100">
              <span className="w-1.5 h-1.5 rounded-full bg-[#005eb8]" />
              <span>Service {service.id}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-100">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>{service.badge}</span>
            </span>
          </div>

          {/* Main H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-medium tracking-tight text-[#111111] leading-[1.14] mb-3.5">
            {service.title}
          </h1>

          {/* Subtitle / Tagline */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {service.tagline}
          </p>

          {/* Highlights Checklist (Standard Inline List, No Cards) */}
          <ul className="space-y-2 mb-7">
            {service.heroHighlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#005eb8] shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#005eb8] hover:bg-[#004a94] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap group"
              aria-label={`Book ${service.shortTitle} on WhatsApp`}
            >
              <CalendarCheck className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Book via WhatsApp Now</span>
            </a>

            <Link
              href={`tel:${CALL_PHONE.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#111111] border border-gray-300 hover:border-[#005eb8] text-xs sm:text-sm font-semibold px-5 py-3 rounded-full transition-colors whitespace-nowrap"
              aria-label="Call Dispatch Hotline"
            >
              <Phone className="w-4 h-4 text-[#005eb8]" />
              <span>Call: +971 58 659 6321</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
