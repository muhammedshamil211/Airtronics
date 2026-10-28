'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  ShieldCheck,
  Clock,
  Zap,
  Star,
  PhoneCall,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import CountUp from '@/components/ui/CountUp';

const WHATSAPP_PHONE = '971586596321';

export default function AboutHero() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    'Hello Airtronics! I would like to learn more about your services and book an HVAC inspection in Dubai.'
  )}`;

  const trustMetrics: Array<{
    icon: React.ElementType;
    stat: React.ReactNode;
    title: string;
    desc: string;
  }> = [
    {
      icon: Clock,
      stat: <CountUp start={2000} end={2022} duration={1.2} />,
      title: 'Established in Dubai',
      desc: 'Engineered specifically for UAE climate & 45°C+ summer heatwaves.',
    },
    {
      icon: Zap,
      stat: <><CountUp end={30} />–<CountUp end={45} suffix="m" /></>,
      title: 'Average Arrival',
      desc: '24/7 mobile fleet dispatch across all major Dubai communities.',
    },
    {
      icon: ShieldCheck,
      stat: <CountUp end={100} suffix="%" />,
      title: 'Genuine OEM Parts',
      desc: 'Factory-certified replacement compressors, capacitors, and motors.',
    },
    {
      icon: Star,
      stat: <><CountUp end={5} decimals={1} /> ★</>,
      title: 'Google Rating',
      desc: 'Top-rated authentic feedback from residential & commercial clients.',
    },
  ];

  return (
    <section
      aria-label="About Airtronics Fixcare Hero"
      className="relative overflow-hidden bg-[#fcfcfc] border-b border-gray-100 pb-16 sm:pb-20"
    >
      {/* ========================================================================= */}
      {/* 1. TOP TEAM MEMBERS GROUP PHOTO BANNER (With "Home > About" Breadcrumb)   */}
      {/* ========================================================================= */}
      <div className="relative w-full h-[240px] sm:h-[300px] md:h-[360px] bg-[#08152c] overflow-hidden flex items-center justify-center">
        {/* TEAM MEMBERS GROUP PHOTO: Replace the src with your team photo (e.g. /images/team.jpg) */}
        <Image
          src="/images/hero_technician_dubai.jpg"
          alt="Airtronics Fixcare Technical Team Dubai"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%] brightness-[0.82] contrast-[1.05]"
        />

        {/* Ambient Dark & Brand Navy Overlays for maximum text contrast */}
        <div className="absolute inset-0 bg-[#08152c]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08152c]/95 via-transparent to-[#08152c]/40" />

        {/* Banner Content inside Image */}
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight mb-3.5">
            About Us
          </h2>

          {/* Breadcrumb Navigation: Home > About */}
          <nav aria-label="Breadcrumb" className="inline-flex items-center space-x-2 text-xs sm:text-sm text-gray-200 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/70" />
            <span className="text-white font-medium" aria-current="page">
              About
            </span>
          </nav>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. HERO SECTION FOREGROUND CONTENT                                        */}
      {/* ========================================================================= */}
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8 pt-10 sm:pt-14 relative z-10">
        {/* Standardized Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#005eb8] font-semibold" aria-hidden="true">/</span>
          <span className="text-sm md:text-base font-semibold tracking-wide text-gray-800 uppercase">
            About Airtronics Fixcare
          </span>
        </div>

        {/* Hero Heading & Narrative */}
        <div className="max-w-3xl mb-8">
          <h1 className="text-[32px] sm:text-[44px] md:text-[54px] font-medium tracking-tight leading-[1.08] text-[#111111] mb-5">
            Dubai’s Trusted HVAC &amp; AC Maintenance Engineering Partner
          </h1>

          <p className="text-[#666666] text-base md:text-lg leading-relaxed mb-4">
            Established in 2022, Airtronics Fixcare Technical Services LLC delivers rapid-response air conditioning repairs, precision thermodynamic diagnostics, and preventative maintenance across residential and commercial properties in Dubai.
          </p>

          <p className="text-[#777777] text-sm md:text-base leading-relaxed">
            Where summer temperatures consistently exceed 45°C, cooling reliability is essential. Our certified technicians resolve persistent cooling failures, eliminate water leaks, sanitize ductwork, and optimize compressor efficiency to lower monthly DEWA power consumption.
          </p>
        </div>

        {/* Direct Action Buttons */}
        <div className="flex flex-wrap items-center gap-3.5 mb-14">
          <Button
            href={whatsappUrl}
            target="_blank"
            variant="primary"
            size="lg"
            aria-label="Book Field Inspection on WhatsApp"
            iconRight={<ArrowRight className="w-4 h-4 ml-1" />}
          >
            <span>Book Field Inspection</span>
          </Button>

          <Button
            href="tel:+971586596321"
            variant="secondary"
            size="lg"
            aria-label="Call Airtronics Dispatch Hotline"
            iconLeft={<PhoneCall className="w-4 h-4 mr-1 text-[#005eb8]" />}
          >
            <span>+971 58 659 6321</span>
          </Button>
        </div>

        {/* Trust Metrics Cards Grid (Big standalone icons, clean borders) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {trustMetrics.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)] hover:border-[#005eb8]/40 transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Big Standalone Icon */}
                <item.icon className="w-7 h-7 text-[#005eb8] stroke-[1.75] mb-4" aria-hidden="true" />

                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] block mb-1">
                  {item.stat}
                </span>

                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
