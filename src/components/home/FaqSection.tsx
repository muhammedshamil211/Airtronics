'use client';

import React, { useState, memo } from 'react';
import Script from 'next/script';
import { ChevronDown } from 'lucide-react';

const BRAND_NAME = 'Airtronics Fixcare';

const PHONE_NUMBER = '+971 58 659 6321';

const faqs = [
  {
    id: 'faq-1',
    question: 'How much does AC repair and maintenance cost in Dubai?',
    answer:
      'The cost of AC repair and maintenance in Dubai typically ranges from AED 150 to AED 500 depending on the issue and unit type. Minor fixes for split ACs are generally on the lower end, while complex central AC repairs may cost more. For the best value, we highly recommend our Annual Maintenance Contracts (AMCs), which provide year-round preventive care and priority service at a discounted rate.',
  },
  {
    id: 'faq-2',
    question:
      'Why is my AC blowing warm air or running without cooling?',
    answer:
      "If your AC is blowing warm air, the most common culprits are refrigerant (gas) leaks, heavily clogged or dirty condenser coils, or a faulty thermostat. In Dubai's severe heat, compressors can also overheat and trip. Our certified technicians can quickly diagnose the issue, safely refill refrigerant gas, and restore your cooling.",
  },
  {
    id: 'faq-3',
    question:
      "How often should an AC unit be serviced in Dubai's heat?",
    answer:
      'Due to extreme summer temperatures frequently exceeding 40°C, high humidity, and constant sand and dust build-up, we recommend servicing your AC every 3 to 4 months. Regular preventive maintenance is essential in the UAE to prevent sudden breakdowns and ensure maximum cooling performance.',
  },
  {
    id: 'faq-4',
    question:
      'Can regular AC servicing lower my DEWA electricity bill?',
    answer:
      'Yes, absolutely. An unmaintained AC unit has to work significantly harder to cool your space. Professional servicing—including cleaning dirty coils and unblocking air ducts—can improve your unit cooling efficiency and reduce energy consumption.',
  },
  {
    id: 'faq-5',
    question:
      'Why is water leaking from my indoor AC unit?',
    answer:
      'Water dripping from an indoor unit is usually caused by a clogged condensate drain line, frozen evaporator coils, or restricted airflow. Regular maintenance prevents these common issues.',
  },
  {
    id: 'faq-6',
    question:
      'Why is AC duct and coil deep cleaning essential in the UAE?',
    answer:
      'Constant sand infiltration and high humidity create ideal conditions for dust, mold, bacteria, and allergens. Deep cleaning improves air quality and system efficiency.',
  },
  {
    id: 'faq-7',
    question:
      'Do you provide 24/7 emergency AC repair across all Dubai areas?',
    answer: `Yes, ${BRAND_NAME} provides rapid 24/7 emergency AC repair services across Dubai including Dubai Marina, Downtown Dubai, Jumeirah, Palm Jumeirah, Business Bay, Arabian Ranches, Al Barsha, JLT, and Mirdif. Call ${PHONE_NUMBER} for immediate assistance.`,
  },
];

const middle = Math.ceil(faqs.length / 2);
const leftFaqs = faqs.slice(0, middle);
const rightFaqs = faqs.slice(middle);

const FaqItem = memo(function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => onToggle(faq.id)}
        className="w-full p-5 md:p-6 flex items-start justify-between text-left hover:bg-slate-50 transition-colors duration-200"
      >
        <span className="text-[15px] md:text-base font-medium text-[#111111] pr-5">
          {faq.question}
        </span>

        <div className="shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen
            ? 'max-h-[500px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 md:px-6 pb-6 text-[#666666] text-[15px] leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
});

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
      className="py-16 md:py-20 relative bg-slate-50/30"
      aria-labelledby="faq-heading"
    >
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#005eb8] font-semibold">/</span>

            <span className="text-xs md:text-sm font-semibold tracking-wide uppercase text-gray-800">
              Got Questions? We Have Answers
            </span>
          </div>

          <h2
            id="faq-heading"
            className="text-[32px] sm:text-[40px] md:text-[48px] font-medium tracking-tight text-[#111111] leading-[1.1] mb-5"
          >
            Frequently Asked Questions
          </h2>

          <p className="text-[#666666] text-[15px] leading-relaxed">
            Find answers to the most common AC repair, maintenance,
            installation, and HVAC service questions in Dubai.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10 max-w-6xl mx-auto">
          <div>
            {leftFaqs.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={toggleFaq}
              />
            ))}
          </div>

          <div>
            {rightFaqs.map((faq) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={toggleFaq}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}