'use client';

import React, { useState, memo } from 'react';
import Script from 'next/script';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const aboutFaqs = [
  {
    id: 'about-faq-1',
    question: 'Who is Airtronics Fixcare Technical Services LLC?',
    answer:
      'Airtronics Fixcare is a licensed AC and HVAC company in Dubai, started in 2022. We help homeowners, tenants, and businesses with AC repairs, seasonal servicing, duct cleaning, and new installations 24/7.',
  },
  {
    id: 'about-faq-2',
    question: 'How is Airtronics Fixcare different from regular handymen?',
    answer:
      'Instead of guessing what is wrong, our trained AC technicians check your unit properly, find the real cause of the problem, and give you a clear written quote before starting any repair.',
  },
  {
    id: 'about-faq-3',
    question: 'Do you use original spare parts?',
    answer:
      'Yes. We use 100% genuine spare parts from trusted AC brands so your cooling system works safely and reliably through Dubai summer.',
  },
  {
    id: 'about-faq-4',
    question: 'How fast can your team reach my home or office in Dubai?',
    answer:
      'Our mobile vans are stationed across Dubai, so we normally arrive within 30 to 45 minutes for urgent AC problems.',
  },
  {
    id: 'about-faq-5',
    question: 'Will I know the exact price before you start working?',
    answer:
      'Yes. After checking your AC, our technician shares an upfront written quote showing the issue and total cost. We only begin work once you approve.',
  },
  {
    id: 'about-faq-6',
    question: 'Do you service both homes and commercial buildings?',
    answer:
      'Yes. We look after apartments, townhouses, villas, offices, shops, restaurants, and commercial buildings all across Dubai.',
  },
];

const middle = Math.ceil(aboutFaqs.length / 2);
const leftFaqs = aboutFaqs.slice(0, middle);
const rightFaqs = aboutFaqs.slice(middle);

const FaqItem = memo(function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof aboutFaqs)[0];
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

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: aboutFaqs.map((faq) => ({
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
      id="about-faq"
      className="relative bg-white py-14 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden"
      aria-labelledby="about-faq-heading"
    >
      <Script
        id="about-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

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

        {/* Left-Aligned Header With Smooth Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10 max-w-3xl mb-10 sm:mb-12"
        >
          <h2
            id="about-faq-heading"
            className="font-[family-name:var(--font-onest)] text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] tracking-tight leading-[1.14] mb-3.5"
          >
            Frequently Asked Questions
          </h2>
          <p className="font-[family-name:var(--font-onest)] text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Simple answers about who we are, how fast we arrive, and how our pricing works.
          </p>
        </motion.div>

        {/* 2-Column Numbered Accordion Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
          className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-y-0 lg:gap-x-12 items-start"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
