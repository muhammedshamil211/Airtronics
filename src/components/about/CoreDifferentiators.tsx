'use client';

import React from 'react';
import Image from 'next/image';
import Script from 'next/script';
import {
  ShieldCheck,
  Receipt,
  Clock,
  UserCheck,
  Sparkles,
  PhoneCall,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { motion } from 'framer-motion';

const BRAND_NAME = 'Airtronics Fixcare Technical Services LLC';
const PHONE_NUMBER = '+971 58 659 6321';
const WHATSAPP_URL = `https://wa.me/971586596321?text=${encodeURIComponent(
  'Hello Airtronics! I would like to book an AC visit in Dubai.'
)}`;

const differentiatorsSchema = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: BRAND_NAME,
  telephone: PHONE_NUMBER,
  areaServed: [
    'Dubai Marina',
    'Palm Jumeirah',
    'Downtown Dubai',
    'Business Bay',
    'Arabian Ranches',
    'Jumeirah Village Circle (JVC)',
    'Dubai Hills Estate',
    'Al Barsha',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Airtronics Fixcare Customer Standards',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fast 30–45 Minute Arrival',
          description: '24/7 AC repair and maintenance teams stationed across Dubai.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '100% Genuine Spare Parts',
          description: 'Original brand parts built to handle Dubai summer heat.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Clear Upfront Pricing',
          description: 'Written quotes approved before any repair starts.',
        },
      },
    ],
  },
};

const values = [
  {
    num: '01',
    icon: Receipt,
    title: 'Clear Price Before We Start',
    desc: 'We inspect the issue first and give you an exact written price. We never start paid work without your approval.',
  },
  {
    num: '02',
    icon: Clock,
    title: 'On-Time Arrival (30–45 Mins)',
    desc: 'Our vans are positioned across Dubai so a technician reaches your home or office quickly when you need help.',
  },
  {
    num: '03',
    icon: UserCheck,
    title: 'Friendly, Skilled Technicians',
    desc: 'Our team is trained, polite, and experienced with all major home and office AC brands used in the UAE.',
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Real Original Spare Parts',
    desc: 'We only use genuine parts from trusted brands so your AC runs safely and stays cool through peak summer.',
  },
  {
    num: '05',
    icon: Sparkles,
    title: 'Clean & Respectful Service',
    desc: 'We wear shoe covers, protect your furniture and floors, and clean up neatly before we leave.',
  },
  {
    num: '06',
    icon: PhoneCall,
    title: '24/7 Help — Every Day of the Year',
    desc: 'Late nights, weekends, and public holidays—our team is always ready to take your call or WhatsApp message.',
  },
];

export default function CoreDifferentiators() {
  return (
    <section
      aria-labelledby="why-airtronics-heading"
      className="relative py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100 overflow-hidden"
    >
      <Script
        id="differentiators-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(differentiatorsSchema),
        }}
      />

      <div className="relative max-w-[1250px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Faint Giant Background Watermark */}
        <div
          className="absolute -top-6 xs:-top-8 sm:-top-12 md:-top-16 left-4 pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-[family-name:var(--font-bebas)] text-7xl xs:text-8xl sm:text-9xl md:text-[140px] lg:text-[170px] font-normal text-slate-900/[0.035] leading-none tracking-tight block">
            VALUES
          </span>
        </div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10 max-w-3xl mb-10 sm:mb-12"
        >
          <h2
            id="why-airtronics-heading"
            className="font-[family-name:var(--font-onest)] text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] tracking-tight leading-[1.14] mb-3.5"
          >
            Why Customers Trust Airtronics Fixcare
          </h2>
          <p className="font-[family-name:var(--font-onest)] text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Six simple commitments we keep on every home and office visit in Dubai.
          </p>
        </motion.div>

        {/* Architectural Split Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left 6-Point Ledger */}
          <div className="lg:col-span-7 divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
            {values.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: 'easeOut' }}
                className="py-5 sm:py-6 flex items-start gap-4 sm:gap-5 group"
              >
                <div className="shrink-0 w-10 h-10 bg-slate-100 group-hover:bg-[#0076FF] text-[#0f172a] group-hover:text-white transition-colors flex items-center justify-center [transform:skewX(-10deg)] rounded-none mt-0.5">
                  <span className="font-[family-name:var(--font-bebas)] text-lg tracking-wider [transform:skewX(10deg)]">
                    {item.num}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <item.icon className="w-4 h-4 text-[#0076FF] shrink-0" aria-hidden="true" />
                    <h3 className="font-[family-name:var(--font-onest)] text-base sm:text-lg font-bold text-[#0f172a]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-[family-name:var(--font-onest)] text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Photo + Direct Contact Box */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="relative">
              <div
                className="hidden sm:block absolute -bottom-2.5 -right-2.5 w-full h-full bg-[#0076FF]/10 border border-[#0076FF]/20 rounded-none z-0"
                aria-hidden="true"
              />
              <div className="relative z-10 h-[280px] sm:h-[340px] w-full bg-slate-900 border border-slate-200 rounded-none overflow-hidden">
                <Image
                  src="/images/hvac_maintenance_technician.jpg"
                  alt="Airtronics Fixcare technician servicing an AC in Dubai"
                  fill
                  quality={85}
                  loading="lazy"
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03132b]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-[family-name:var(--font-onest)] text-sm font-bold">
                    Clean, Respectful Home &amp; Office Visits
                  </p>
                  <p className="font-[family-name:var(--font-onest)] text-xs text-slate-200 mt-0.5">
                    Shoe covers, drop cloths, and tidy cleanup after every job.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-none">
              <h3 className="font-[family-name:var(--font-onest)] text-lg font-bold text-[#0f172a] mb-2">
                Need an AC Visit Today?
              </h3>
              <p className="font-[family-name:var(--font-onest)] text-sm text-slate-600 leading-relaxed mb-5">
                Message us on WhatsApp or call our 24/7 team for fast help and a clear quote.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#0076FF] hover:bg-[#0066de] text-white font-semibold px-5 py-3 text-sm transition-colors [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] rounded-none"
                >
                  <span className="inline-flex items-center gap-1.5 [transform:skewX(10deg)] sm:[transform:skewX(14deg)]">
                    <span>WhatsApp Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>

                <a
                  href="tel:+971586596321"
                  className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-[#0f172a] border border-slate-300 font-semibold px-5 py-3 text-sm transition-colors [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] rounded-none"
                >
                  <span className="inline-flex items-center gap-1.5 [transform:skewX(10deg)] sm:[transform:skewX(14deg)]">
                    <Phone className="w-3.5 h-3.5 text-[#0076FF]" />
                    <span>Call Us</span>
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
