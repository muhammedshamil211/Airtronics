'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  Zap, 
  CheckCircle2, 
  PhoneCall, 
  MessageCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import WhatsAppBookingModal from '@/components/ui/WhatsAppBookingModal';

export default function AboutHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const badges = [
    {
      icon: Clock,
      title: 'Established 2022',
      desc: 'Engineered specifically for Dubai climate & 45°C+ heatwaves.',
      iconColor: 'text-blue-500/20 group-hover:text-[#005eb8]/35',
    },
    {
      icon: ShieldCheck,
      title: 'Certified Engineers',
      desc: '100% Factory OEM spare parts with official warranties.',
      iconColor: 'text-emerald-500/20 group-hover:text-emerald-600/35',
    },
    {
      icon: Zap,
      title: '30-45 Min Arrival',
      desc: '24/7 Rapid mobile fleet dispatch across all Dubai communities.',
      iconColor: 'text-amber-500/20 group-hover:text-amber-600/35',
    },
    {
      icon: Wrench,
      title: 'DEWA Optimization',
      desc: 'Coil deep-cleaning & gas balancing to lower electricity bills.',
      iconColor: 'text-purple-500/20 group-hover:text-purple-600/35',
    },
  ];

  return (
    <section aria-label="About Airtronics Fixcare Hero" className="relative overflow-hidden bg-[#fcfcfc] border-b border-gray-100/80 pt-6 lg:pt-10 pb-16 md:pb-20">
      {/* Background SVG Curve */}
      <div className="absolute inset-x-0 top-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          className="w-full h-[280px] md:h-[360px] lg:h-[420px]"
        >
          <path
            d="M0,0 L1440,0 L1440,220 C1120,480 480,20 0,340 Z"
            fill="var(--color-brand-light)"
            opacity="0.4"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs md:text-sm text-gray-500 font-medium">
            <li>
              <Link href="/" className="hover:text-[#005eb8] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </li>
            <li className="text-[#005eb8] font-semibold" aria-current="page">
              About Us
            </li>
          </ol>
        </nav>

        {/* Header Tagline / Badge */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-brand font-semibold" aria-hidden="true">/</span>
          <span className="text-sm md:text-base font-semibold tracking-wide text-gray-800">
            Airtronics Fixcare Technical Services LLC — Dubai, UAE
          </span>
        </div>
    
        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: SEO Optimized Headline & Proposition */}
          <div className="lg:col-span-7">
            <h1 className="text-[34px] sm:text-[44px] md:text-[54px]  font-medium tracking-tight leading-[1.0] text-[#111111] mb-6">
              Professional AC Maintenance & <span className="text-[#005eb8] italic font-normal">Technical Services</span> in Dubai
            </h1>

            <p className="text-gray-600 text-base md:text-lg  mb-5 font-normal max-w-2xl">
              Airtronics Fixcare Technical Services LLC is a premier engineering partner for advanced air conditioning solutions, electromechanical works, and property care across Dubai. Established in 2022, our service model is engineered specifically for the extreme environmental demands of the UAE.
            </p>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
              Where summer heatwaves consistently pass 45°C, residential villas and corporate towers require continuous cooling reliability. We resolve critical AC breakdowns, fix persistent water leaks, perform deep duct cleaning, and optimize energy efficiency to trim monthly DEWA bills.
            </p>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="tel:+971586596321"
                className="inline-flex items-center gap-2 bg-[#005eb8] text-white text-sm md:text-base font-semibold px-7 py-3.5 rounded-full hover:bg-[#004488] hover:shadow-lg hover:shadow-[#005eb8]/30 transition-all group"
                aria-label="Call Emergency Direct Dispatch Hotline"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call 24/7 Hotline</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm md:text-base font-semibold px-7 py-3.5 rounded-full hover:bg-[#1ebd5a] hover:shadow-lg hover:shadow-[#25D366]/30 transition-all group"
                aria-label="Book via WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Booking</span>
              </button>
            </div>

            {/* Quick Assurance Tags */}
            <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs md:text-sm font-medium text-gray-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#005eb8]" />
                Upfront Fixed Pricing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#005eb8]" />
                Zero Hidden Charges
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#005eb8]" />
                All Dubai Communities
              </span>
            </div>
          </div>

          {/* Right Column: Sleek Credibility Grid */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-gray-200/60 border border-gray-100 relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#005eb8] font-bold">Why Dubai Trusts Airtronics</p>
                  <h3 className="text-xl font-bold text-[#111111]">Engineering Rigor Since 2022</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#005eb8]/10 text-[#005eb8] flex items-center justify-center font-bold text-lg">
                  &apos;22
                </div>
              </div>

              {/* Cards Grid with Large Background Icons in Top Right Corner */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {badges.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3 }}
                      className="relative overflow-hidden p-5 rounded-2xl bg-gray-50/80 border border-gray-100 transition-all hover:bg-white hover:shadow-md group min-h-[115px] flex flex-col justify-between"
                    >
                      {/* Large Watermark Icon in Top Right Corner in Background without BG box */}
                      <Icon className={`absolute -top-2 -right-2 w-20 h-20 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 stroke-[1.25] ${badge.iconColor}`} />

                      <div className="relative z-10">
                        <h4 className="text-base font-bold text-[#111111] pr-6">{badge.title}</h4>
                        <p className="text-xs text-gray-500 mt-1 leading-snug font-normal">{badge.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Climate Callout Banner */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-900 text-white flex items-center gap-4 relative overflow-hidden">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 shrink-0 flex items-center justify-center font-bold text-sm">
                  45°C+
                </div>
                <p className="text-xs text-gray-300 leading-snug">
                  <strong className="text-white font-semibold">Climate-Tested Solutions:</strong> Engineered for high humidity, coastal salt air corrosion, and intense heatwaves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unified WhatsApp Booking Modal */}
      <WhatsAppBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="AC Maintenance & AMC"
      />
    </section>
  );
}
