'use client';

import React, { useState, memo } from 'react';
import Script from 'next/script';
import { ChevronDown } from 'lucide-react';

const BRAND_NAME = 'Airtronics Fixcare Technical Services LLC';
const PHONE_NUMBER = '+971 58 659 6321';

const aboutFaqs = [
  {
    id: 'about-faq-1',
    question: 'How is Airtronics Fixcare different from standard handyman companies in Dubai?',
    answer:
      'Unlike traditional handymen who rely on guesswork and trial-and-error part swapping, Airtronics is built on diagnostic engineering. Every dispatch vehicle is equipped with digital manifold gauges, infrared thermal imaging cameras, and airflow anemometers. We identify the mechanical root cause of thermodynamic, electrical, and airflow failures, providing binding itemized evaluations before any repair begins.',
  },
  {
    id: 'about-faq-2',
    question: 'When was Airtronics Fixcare established and what are your corporate credentials?',
    answer:
      'Founded in Dubai in 2022, Airtronics Fixcare Technical Services LLC was established to elevate technical property maintenance standards across the UAE. We operate under full commercial licensing in Dubai, and all our technicians hold verified HVAC technical certifications and strictly follow Dubai Municipality, Civil Defense, and DEWA safety guidelines.',
  },
  {
    id: 'about-faq-3',
    question: 'Do you guarantee 100% genuine OEM replacement parts?',
    answer:
      'Yes, absolutely. We enforce a strict OEM-only policy for all replacement components, including compressors, condenser fan motors, run capacitors, contactors, expansion valves, and PCB control boards. Every installed part includes a manufacturer warranty, ensuring your cooling equipment operates at its designed thermodynamic efficiency and factory lifespan.',
  },
  {
    id: 'about-faq-4',
    question: 'What is Airtronics’ typical emergency response time across Dubai?',
    answer:
      `Our mobile technical dispatch fleet is strategically positioned along Dubai’s major transit corridors—including Dubai Marina, Downtown, Palm Jumeirah, Arabian Ranches, JVC, and Business Bay. We maintain an average on-site arrival window of 30 to 45 minutes for critical cooling failures during extreme summer months. Contact our 24/7 hotline at ${PHONE_NUMBER} for rapid emergency dispatch.`,
  },
  {
    id: 'about-faq-5',
    question: 'How does your digital diagnostic process help reduce monthly DEWA bills?',
    answer:
      'Inefficient AC units with incorrect refrigerant charge, fouled heat exchanger coils, or worn electrical contactors draw excessive electrical current (high running amperage). Through digital manifold pressure rebalancing, chemical coil flushes, and motor load analysis, we restore original SEER energy efficiency, reducing HVAC electrical consumption by up to 20% to 30% on monthly DEWA utility statements.',
  },
  {
    id: 'about-faq-6',
    question: 'What types of properties and HVAC systems do you service?',
    answer:
      'We service luxury villas, residential high-rise towers, commercial corporate offices, retail spaces, and industrial facilities. Our engineering capabilities encompass all climate systems: split AC units, ducted split systems, District Cooling Fan Coil Units (FCU) connected to Empower, Emicool, or Tabreed, and multi-zone Variable Refrigerant Flow (VRF/VRV) systems.',
  },
  {
    id: 'about-faq-7',
    question: 'How do your Annual Maintenance Contracts (AMC) work for homeowners and landlords?',
    answer:
      'Airtronics AMCs provide complete peace of mind with 3 to 4 scheduled comprehensive preventive service visits per year, 24/7 unlimited emergency breakdown callouts, priority queue dispatch, systematic duct and coil sanitization, and exclusive discounts on spare parts. All service history is logged digitally for transparent property asset tracking.',
  },
  {
    id: 'about-faq-8',
    question: 'Are all quotes provided upfront and binding before work begins?',
    answer:
      'Yes. We operate with zero hidden charges. After completing a comprehensive digital diagnostic inspection, our technician presents a transparent, itemized quotation detailing the diagnosed fault, required OEM parts, and fixed labor costs. Work only commences once you approve the written quote.',
  },
  {
    id: 'about-faq-9',
    question: 'Do you offer certified AC duct cleaning and indoor air quality sanitization?',
    answer:
      'Yes. We utilize specialized rotary brush duct cleaning systems, high-efficiency HEPA vacuum extractors, and hospital-grade biocides approved by Dubai Municipality. Our deep duct sanitization eliminates accumulated desert sand, mold spores, bacteria, and dust mite allergens to ensure clean, odorless indoor air for your family or staff.',
  },
  {
    id: 'about-faq-10',
    question: 'How do you handle District Cooling systems (Empower, Emicool, Tabreed)?',
    answer:
      'Our technicians are specially trained in district cooling fan coil units (FCUs). We service modulating actuator valves, digital thermostats, 2-way and 3-way chilled water valves, strainers, and condensate drain trays to prevent water leakage and ensure optimal delta-T thermal exchange.',
  },
  {
    id: 'about-faq-11',
    question: 'What warranties and guarantees do you provide on repair services?',
    answer:
      'All repair workmanship performed by Airtronics is backed by a 90-day service warranty, and all OEM replacement components come with standard manufacturer warranties. If the same issue recurs within the warranty period, our technicians return and re-inspect at no additional cost.',
  },
  {
    id: 'about-faq-12',
    question: 'Can Airtronics handle HVAC maintenance for large commercial facilities or corporate offices?',
    answer:
      'Yes. We maintain dedicated commercial facility maintenance contracts with commercial building owners, business centers, restaurants, and retail chains throughout Business Bay, DIFC, and Al Quoz, providing customized Service Level Agreements (SLAs) with dedicated account managers and 24/7 technical support.',
  },
];

const middle = Math.ceil(aboutFaqs.length / 2);
const leftFaqs = aboutFaqs.slice(0, middle);
const rightFaqs = aboutFaqs.slice(middle);

const FaqItem = memo(function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof aboutFaqs)[0];
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
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 md:px-6 pb-6 text-[#666666] text-[15px] leading-relaxed">
          {faq.answer}
        </div>
      </div>
    </div>
  );
});

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
      className="py-16 md:py-20 relative bg-slate-50/30"
      aria-labelledby="about-faq-heading"
    >
      <Script
        id="about-faq-schema"
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
            id="about-faq-heading"
            className="text-[32px] sm:text-[40px] md:text-[48px] font-medium tracking-tight text-[#111111] leading-[1.1] mb-5"
          >
            Frequently Asked Questions
          </h2>

          <p className="text-[#666666] text-[15px] leading-relaxed">
            Learn more about {BRAND_NAME}, our diagnostic engineering standards,
            certified technician capabilities, and service commitments across Dubai.
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
