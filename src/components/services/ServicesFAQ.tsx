'use client';

import React, { useState, memo } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PHONE_NUMBER = '+971 58 659 6321';

const servicesFaqs = [
  {
    id: 'services-faq-1',
    question: 'How fast can your technicians arrive for an emergency AC breakdown in Dubai?',
    answer:
      'Our mobile fleet is strategically positioned along Dubai’s major transit corridors (Sheikh Zayed Road, Al Khail Road, and MBZ Road). Our average emergency response time is 30 to 45 minutes across central Dubai communities, including Dubai Marina, Downtown, Palm Jumeirah, Business Bay, JVC, and Dubai Hills.',
  },
  {
    id: 'services-faq-2',
    question: 'How does your diagnostic fee waiver policy work?',
    answer:
      'We believe in complete transparency. Our technician conducts a full digital manifold and electrical diagnostic inspection. When you approve our written, itemized repair quote and proceed with the service, your diagnostic inspection charge is 100% credited and waived.',
  },
  {
    id: 'services-faq-3',
    question: 'Do you only install genuine factory OEM replacement parts?',
    answer:
      'Yes, 100%. We never install counterfeit, generic, or refurbished components. All replacement compressors, condenser fan motors, run capacitors, contactors, expansion valves, and PCB boards are factory-original OEM parts sourced from authorized UAE distributors (Daikin, O General, Carrier, York, Gree, LG, Mitsubishi).',
  },
  {
    id: 'services-faq-4',
    question: 'Do you provide after-service support and manufacturer warranties?',
    answer:
      'Yes. We stand behind our workmanship with dedicated after-service customer support, and new AC installations include the full original manufacturer compressor warranty as specified by the brand.',
  },
  {
    id: 'services-faq-5',
    question: 'Can you service District Cooling Fan Coil Units (Empower, Emicool, Tabreed)?',
    answer:
      'Yes. Our licensed technicians specialize in high-rise Fan Coil Units (FCU). We service and replace modulating 2-way and 3-way actuator valves, digital thermostats, strainers, and condensate drain trays to eliminate water leakage and maintain optimal chilled water delta-T thermal efficiency.',
  },
  {
    id: 'services-faq-6',
    question: 'How does regular HVAC maintenance lower monthly DEWA electricity bills?',
    answer:
      'Desert sand and airborne dust rapidly foul heat exchanger coils, forcing compressors to operate at excessive head pressures and pull up to 40% higher amperage. Our high-pressure chemical coil washing and thermodynamic gas tuning routinely reduce HVAC power consumption by 15% to 25% on monthly DEWA statements.',
  },
  {
    id: 'services-faq-7',
    question: 'How often should AC ducts be cleaned in Dubai villas and apartments?',
    answer:
      'Dubai Municipality and health guidelines recommend deep robotic duct inspection and sanitization every 1 to 2 years. If you suffer from allergies, have pets, or have completed interior renovations, annual cleaning is advised to eliminate fine sand, toxic mold spores, and dust mites.',
  },
  {
    id: 'services-faq-8',
    question: 'What is included in an Airtronics Annual Maintenance Contract (AMC)?',
    answer:
      'Our AMC packages include 3 to 4 scheduled deep preventative maintenance visits per year, unlimited 24/7 emergency breakdown callouts with zero labor fees, priority queue summer dispatch, and exclusive wholesale discounts on replacement OEM parts.',
  },
  {
    id: 'services-faq-9',
    question: 'Are all quotes fixed before any repair work starts?',
    answer:
      'Yes. Our engineers provide written, itemized quotations detailing exact labor tariffs and OEM part pricing before turning a single wrench. You will never face surprise add-on charges or unauthorized replacements on your final invoice.',
  },
  {
    id: 'services-faq-10',
    question: 'Are your HVAC services available on weekends and public holidays in Dubai?',
    answer:
      `Yes, air conditioning failures do not wait for business hours. Our emergency dispatch units operate 24 hours a day, 7 days a week, 365 days a year—including Eid holidays and midsummer weekends. Call ${PHONE_NUMBER} for rapid emergency dispatch.`,
  },
];

const middle = Math.ceil(servicesFaqs.length / 2);
const leftFaqs = servicesFaqs.slice(0, middle);
const rightFaqs = servicesFaqs.slice(middle);

const FaqItem = memo(function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof servicesFaqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: (id: string) => void;
}) {
  const numLabel = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;
  return (
    <div className="border-b border-slate-200/80 transition-colors">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => onToggle(faq.id)}
        className="w-full py-5 px-1 flex items-start justify-between text-left transition-colors duration-200 group cursor-pointer"
      >
        <div className="flex items-start gap-3 sm:gap-4 pr-4">
          <span className="font-[family-name:var(--font-onest)] text-xs sm:text-sm font-bold text-slate-400 group-hover:text-[#0076FF] transition-colors shrink-0 pt-0.5">
            {numLabel}
          </span>
          <span
            className={`font-[family-name:var(--font-onest)] text-base sm:text-[17px] font-bold leading-snug transition-colors ${
              isOpen ? 'text-[#0076FF]' : 'text-slate-900 group-hover:text-[#0076FF]'
            }`}
          >
            {faq.question}
          </span>
        </div>

        <div
          className={`shrink-0 w-8 h-8 rounded-none [transform:skewX(-10deg)] flex items-center justify-center transition-all duration-300 mt-0.5 ${
            isOpen
              ? 'bg-[#0076FF] text-white'
              : 'bg-slate-100 text-slate-700 group-hover:bg-[#0076FF]/10 group-hover:text-[#0076FF]'
          }`}
        >
          <ChevronDown
            className={`w-4 h-4 stroke-[2.25] [transform:skewX(10deg)] transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="pl-7 sm:pl-9 pr-4 pb-5 font-[family-name:var(--font-onest)] text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default function ServicesFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: servicesFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      className="relative bg-white py-14 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden"
      aria-labelledby="services-faq-heading"
    >
      <Script
        id="services-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="relative max-w-[1250px] w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* Faint Giant Background Watermark */}
        <div
          className="absolute -top-6 xs:-top-8 sm:-top-12 md:-top-16 left-4 pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-[family-name:var(--font-onest)] text-7xl xs:text-8xl sm:text-9xl md:text-[140px] lg:text-[170px] font-black text-slate-900/[0.035] leading-none tracking-tight block">
            FAQS
          </span>
        </div>

        {/* Clean Single-Heading Header (No Eyebrow) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative z-10 max-w-3xl mb-10 sm:mb-12"
        >
          <h2
            id="services-faq-heading"
            className="font-[family-name:var(--font-onest)] text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] tracking-tight leading-[1.14] mb-3.5"
          >
            Common Questions About Our HVAC Services
          </h2>
          <p className="font-[family-name:var(--font-onest)] text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Find clear answers about emergency dispatch arrival times, diagnostic fee waivers, genuine OEM parts, and AMC coverage across Dubai.
          </p>
        </motion.div>

        {/* 2-Column Accordion Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-y-0 lg:gap-x-12 items-start">
          <div>
            {leftFaqs.map((faq, idx) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                index={idx}
                isOpen={openId === faq.id}
                onToggle={toggleFaq}
              />
            ))}
          </div>

          <div>
            {rightFaqs.map((faq, idx) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                index={idx + middle}
                isOpen={openId === faq.id}
                onToggle={toggleFaq}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Bottom-Right Equipment Accent */}
      <div
        className="hidden md:block pointer-events-none select-none absolute -bottom-10 -right-8 lg:-bottom-12 lg:right-2 z-0 opacity-35 lg:opacity-55"
        aria-hidden="true"
      >
        <Image
          src="/images/Angled White HVAC Vent Grille.webp"
          alt="Linear HVAC Vent Grille"
          width={320}
          height={220}
          className="w-56 lg:w-72 h-auto object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.1)]"
        />
      </div>
    </section>
  );
}
