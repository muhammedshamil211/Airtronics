'use client';

import React, { useState, memo } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BRAND_NAME = 'Airtronics Fixcare';
const PHONE_NUMBER = '+971 58 659 6321';

interface FaqItemData {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItemData[] = [
  {
    id: 'faq-1',
    question: 'How much does AC repair and maintenance cost in Dubai?',
    answer:
      'The cost of AC repair and maintenance in Dubai typically ranges from AED 150 to AED 500 depending on the issue and unit type. Minor fixes for split ACs are generally on the lower end, while complex central AC repairs may cost more. For the best value, we highly recommend our Annual Maintenance Contracts (AMCs), which provide year-round preventive care and priority service at a discounted rate.',
  },
  {
    id: 'faq-2',
    question: 'Why is my AC blowing warm air or running without cooling?',
    answer:
      "If your AC is blowing warm air, the most common culprits are refrigerant (gas) leaks, heavily clogged or dirty condenser coils, or a faulty thermostat. In Dubai's severe heat, compressors can also overheat and trip. Our certified technicians can quickly diagnose the issue, safely refill refrigerant gas, and restore your cooling.",
  },
  {
    id: 'faq-3',
    question: "How often should an AC unit be serviced in Dubai's heat?",
    answer:
      'Due to extreme summer temperatures frequently exceeding 40°C, high humidity, and constant sand and dust build-up, we recommend servicing your AC every 3 to 4 months. Regular preventive maintenance is essential in the UAE to prevent sudden breakdowns and ensure maximum cooling performance.',
  },
  {
    id: 'faq-4',
    question: 'Can regular AC servicing lower my DEWA electricity bill?',
    answer:
      'Yes, absolutely. An unmaintained AC unit has to work significantly harder to cool your space. Professional servicing—including cleaning dirty coils and unblocking air ducts—can improve your unit cooling efficiency and reduce energy consumption by up to 20% to 30%.',
  },
  {
    id: 'faq-5',
    question: 'Why is water leaking from my indoor AC unit?',
    answer:
      'Water dripping from an indoor unit is usually caused by a clogged condensate drain line, frozen evaporator coils, or restricted airflow. Regular maintenance clears blockages with high-pressure nitrogen flushes and prevents ceiling damage.',
  },
  {
    id: 'faq-6',
    question: 'Why is AC duct and coil deep cleaning essential in the UAE?',
    answer:
      'Constant sand infiltration and high humidity create ideal conditions for dust, mold, bacteria, and allergens to breed inside duct networks. Professional rotary mechanical cleaning eliminates allergens and improves indoor air quality noticeably.',
  },
  {
    id: 'faq-7',
    question: 'Do you provide 24/7 emergency AC repair across all Dubai areas?',
    answer: `Yes, ${BRAND_NAME} provides rapid 24/7 emergency AC repair services across Dubai including Dubai Marina, Downtown Dubai, Jumeirah, Palm Jumeirah, Business Bay, Arabian Ranches, Al Barsha, JLT, and Mirdif with an average arrival time of 30 to 45 minutes.`,
  },
];

const middle = Math.ceil(faqs.length / 2); // 4 in left column
const leftFaqs = faqs.slice(0, middle);
const rightFaqs = faqs.slice(middle); // 3 in right column

const FaqItem = memo(function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: FaqItemData;
  index: number;
  isOpen: boolean;
  onToggle: (id: string) => void;
}) {
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
            0{index + 1}
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
              ? 'bg-[#0076FF] text-white rotate-180'
              : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-[#0076FF]'
          }`}
        >
          <ChevronDown className="w-4 h-4 stroke-[2.2] [transform:skewX(10deg)]" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pl-7 sm:pl-8 pr-4 pb-5 pt-1 font-[family-name:var(--font-onest)] text-sm sm:text-base text-slate-600 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});
FaqItem.displayName = 'FaqItem';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
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
      id="faq"
      aria-labelledby="faq-heading"
      className="relative bg-white py-14 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden"
    >
      {/* Schema.org FAQPage Structured Data */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* ========================================================================= */}
      {/* MAIN CONTAINER: Maximum 1250px Width Constraint                            */}
      {/* ========================================================================= */}
      <div className="relative max-w-[1250px] w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* Faint Giant Background Watermark "FAQS" */}
        <div
          className="absolute -top-6 xs:-top-8 sm:-top-12 md:-top-18 left-4 pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-[family-name:var(--font-onest)] text-7xl xs:text-8xl sm:text-9xl md:text-[140px] lg:text-[170px] font-black text-slate-900/[0.035] leading-none tracking-tight block">
            FAQS
          </span>
        </div>

        {/* ======================================================================= */}
        {/* SECTION HEADER                                                          */}
        {/* ======================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10 max-w-3xl mb-10 sm:mb-12"
        >
          {/* Section Headline */}
          <h2
            id="faq-heading"
            className="font-[family-name:var(--font-onest)] text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] tracking-tight leading-[1.14] mb-3.5"
          >
            Frequently Asked Questions About AC Services
          </h2>

          {/* Subtitle */}
          <p className="font-[family-name:var(--font-onest)] text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Find clear, transparent answers regarding pricing, service frequency, emergency arrival windows, and DEWA energy optimization across Dubai.
          </p>
        </motion.div>

        {/* ======================================================================= */}
        {/* 2-COLUMN ACCORDION GRID (Balanced 4 & 4)                                 */}
        {/* ======================================================================= */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-y-0 lg:gap-x-12 items-start">
          
          {/* LEFT COLUMN: FAQs 01 to 04 */}
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

          {/* RIGHT COLUMN: FAQs 05 to 07 */}
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

      {/* HVAC Equipment Showcase Elements */}
      {/* 1. White Inverter Split AC Unit - Top Left Corner */}
      <div
        className="pointer-events-none select-none absolute -top-8 -left-10 sm:-top-10 sm:-left-8 md:-top-12 md:-left-4 lg:-top-14 lg:left-2 z-0 opacity-45 sm:opacity-60 lg:opacity-85 transition-opacity"
        aria-hidden="true"
      >
        <Image
          src="/images/White Inverter Split Air Conditioner.webp"
          alt="White Inverter Split Air Conditioner"
          width={440}
          height={300}
          sizes="(max-width: 640px) 180px, (max-width: 1024px) 280px, 380px"
          className="w-44 xs:w-52 sm:w-64 md:w-80 lg:w-[380px] xl:w-[420px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)]"
        />
      </div>

      {/* 2. Large Industrial HVAC Chiller Unit - Bottom Side (Bottom Left / Bottom Span) */}
      <div
        className="pointer-events-none select-none absolute -bottom-10 -left-12 sm:-bottom-12 sm:-left-8 md:-bottom-16 md:-left-4 lg:-bottom-20 lg:left-2 z-0 opacity-45 sm:opacity-60 lg:opacity-85 transition-opacity"
        aria-hidden="true"
      >
        <Image
          src="/images/Industrial HVAC Chiller Unit (1).webp"
          alt="Industrial HVAC Chiller Unit"
          width={520}
          height={380}
          sizes="(max-width: 640px) 220px, (max-width: 1024px) 360px, 480px"
          className="w-52 xs:w-64 sm:w-80 md:w-96 lg:w-[460px] xl:w-[500px] h-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.14)]"
        />
      </div>
    </section>
  );
}
