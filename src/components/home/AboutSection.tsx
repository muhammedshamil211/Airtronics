'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  ShieldCheck, 
  Building2, 
  CheckCircle2 
} from 'lucide-react';
import { motion } from 'framer-motion';

// Reusable Company Details Configuration
interface CompanyDetailItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  fill?: boolean;
  content?: string;
  phones?: string[];
  email?: string;
}

const COMPANY_DETAILS: CompanyDetailItem[] = [
  {
    icon: MapPin,
    title: 'Office Address',
    content: 'Commercial Bank of Dubai Building, M-01, Al Kabeesi, Dubai, UAE',
    fill: true,
  },
  {
    icon: Calendar,
    title: 'In The Field',
    content: 'Delivering expert climate control solutions across Dubai since 2022',
  },
  {
    icon: Phone,
    title: 'Contact Numbers',
    phones: ['+971 58 659 6321', '+971 55 561 9369', '+971 50 240 6545'],
    fill: true,
  },
  {
    icon: Mail,
    title: 'Email Support',
    email: 'airtronics6@gmail.com',
  },
];

export default function AboutSection() {
  return (
    <section className="relative bg-white border-b border-gray-100/80 overflow-hidden" aria-labelledby="about-section-heading">
      
      {/* Centered 1200px Container (Holds both the Desktop Background & Content) */}
      <div className="relative max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* ========================================================================= */}
        {/* DESKTOP FULL-SECTION BACKGROUND: Confined to 1200px & Centered (lg:+)    */}
        {/* (Only on lg+ screens; mobile/tablet retains clean white section bg)       */}
        {/* ========================================================================= */}
        <div className="hidden lg:block absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/hvac_maintenance_technician.jpg"
            alt="Airtronics certified HVAC engineer inspecting rooftop AC unit in Dubai"
            fill
            sizes="1200px"
            className="object-cover object-[75%_center] xl:object-[80%_center]"
          />

          {/* Seamless multi-stop gradient mask: 100% clean white readability for left-side text, smoothly revealing the atmospheric background photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white via-[48%] to-white/10 xl:to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-[53%] to-transparent z-10" />

          {/* Top & Bottom Soft Fading into section borders */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Narrative, Address, Contact Info & Read More CTA             */}
          {/* ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-xs sm:text-xs md:text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
              <span className="text-[#005eb8] font-black text-sm">/</span>
              <span>ABOUT AIRTRONICS FIXCARE</span>
            </div>

            {/* Headline */}
            <h2 
              id="about-section-heading" 
              className="text-3xl sm:text-4xl md:text-[42px] font-medium tracking-tight text-[#111111] leading-[1.12] mb-4 sm:mb-5"
            >
              Dubai&apos;s Trusted HVAC &amp; AC Specialists <span className="text-[#005eb8]">Since 2022</span>
            </h2>

            {/* Subtitle / Story */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
              Operating in Dubai since 2022, Airtronics Fixcare Technical Services LLC provides certified air conditioning repair, preventive maintenance, turnkey installations, and professional duct sanitation. Backed by certified engineers, genuine OEM parts, and transparent upfront quotes, we keep homes and commercial facilities cool across the UAE.
            </p>

            {/* Reusable Company Details (Clean Minimalist List, No Card Styling) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
              {COMPANY_DETAILS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group/detail">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100 transition-transform group-hover/detail:scale-110 mt-0.5">
                    <item.icon className={`w-4 h-4 ${item.fill ? 'fill-[#005eb8]' : ''}`} />
                  </div>
                  <div className="leading-tight">
                    <span className="block font-bold text-xs sm:text-sm text-[#111111] mb-1">{item.title}</span>
                    {item.phones ? (
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-gray-600 font-medium">
                        {item.phones.map((phone, pIdx) => (
                          <React.Fragment key={pIdx}>
                            {pIdx > 0 && <span className="text-gray-300">•</span>}
                            <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-[#005eb8] transition-colors">
                              {phone}
                            </a>
                          </React.Fragment>
                        ))}
                      </div>
                    ) : item.email ? (
                      <a 
                        href={`mailto:${item.email}`} 
                        className="block text-xs text-gray-600 font-medium hover:text-[#005eb8] transition-colors"
                      >
                        {item.email}
                      </a>
                    ) : (
                      <span className="block text-xs text-gray-600 font-medium leading-relaxed">
                        {item.content}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Read More & Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link 
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-[#005eb8] hover:bg-[#004a94] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-full transition-all duration-300 shadow-md shadow-[#005eb8]/20 hover:shadow-lg group whitespace-nowrap"
                aria-label="Read More About Airtronics Fixcare"
              >
                <span>Read More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50/50 text-[#111111] border-2 border-slate-200 hover:border-[#005eb8] text-xs sm:text-sm font-bold px-5 py-3 rounded-full transition-colors whitespace-nowrap"
              >
                <span>Visit Our Dubai Office</span>
              </Link>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Mobile Visual Card (< lg) & Desktop Floating Badges (lg:)    */}
          {/* ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* 1. MOBILE ONLY VISUAL CARD (Self-contained, not acting as full section bg on small screens) */}
            <div className="lg:hidden relative w-full aspect-[4/3] sm:aspect-[4/3.5] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/hvac_maintenance_technician.jpg"
                alt="Airtronics certified HVAC engineer inspecting rooftop AC unit in Dubai"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

              {/* Mobile Badges */}
              <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm rounded-xl py-1.5 px-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div className="leading-tight">
                  <span className="block font-bold text-[11px] text-[#111111]">Established</span>
                  <span className="block text-[9px] text-[#005eb8] font-bold">2022 in Dubai</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm rounded-xl py-1.5 px-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-[#008f4c] flex items-center justify-center shrink-0 border border-emerald-100">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="leading-tight">
                  <span className="block font-bold text-[11px] text-[#111111]">Licensed</span>
                  <span className="block text-[9px] text-gray-500 font-medium">Dubai Municipality</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-20 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-3 text-white flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#0070f3] text-white flex items-center justify-center shrink-0">
                    <Building2 className="w-4 h-4 fill-white" />
                  </div>
                  <div className="leading-tight">
                    <span className="block font-bold text-xs text-white">HQ: Commercial Bank Building</span>
                    <span className="block text-[10px] text-gray-300">Al Kabeesi, Deira / Dubai</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-bold text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Verified</span>
                </div>
              </div>
            </div>

            {/* 2. DESKTOP FLOATING SHOWCASE (Floats gracefully in the right space over the section's background image) */}
            <div className="hidden lg:flex flex-col justify-between min-h-[380px] xl:min-h-[420px] p-4 relative pointer-events-none">
              
              {/* Top Row Badges floating in space */}
              <div className="flex items-center justify-between gap-3 pointer-events-auto">
                <motion.div 
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md rounded-xl py-2 px-3.5 flex items-center gap-2.5 cursor-pointer transition-shadow"
                >
                  <div className="w-7 h-7 rounded-full bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <span className="block font-bold text-xs text-[#111111]">Established</span>
                    <span className="block text-[10px] text-[#005eb8] font-bold">2022 in Dubai</span>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md rounded-xl py-2 px-3.5 flex items-center gap-2.5 cursor-pointer transition-shadow"
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-50 text-[#008f4c] flex items-center justify-center shrink-0 border border-emerald-100">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="leading-tight">
                    <span className="block font-bold text-xs text-[#111111]">Licensed</span>
                    <span className="block text-[10px] text-gray-500 font-medium">Dubai Municipality</span>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Pinned HQ Badge over background photo */}
              <motion.div 
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-slate-900/92 backdrop-blur-md border border-slate-700/80 rounded-2xl p-4 text-white flex items-center justify-between shadow-xl pointer-events-auto cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0070f3] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Building2 className="w-4.5 h-4.5 fill-white" />
                  </div>
                  <div className="leading-tight">
                    <span className="block font-bold text-sm text-white">HQ: Commercial Bank of Dubai Building</span>
                    <span className="block text-xs text-gray-300">Office M-01, Al Kabeesi, Dubai, UAE</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Hub</span>
                </div>
              </motion.div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
