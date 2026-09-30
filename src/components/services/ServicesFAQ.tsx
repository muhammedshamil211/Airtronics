'use client';

import React, { useState, memo } from 'react';
import Script from 'next/script';
import { ChevronDown } from 'lucide-react';

const BRAND_NAME = 'Airtronics Fixcare Technical Services LLC';
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
    question: 'What warranty is provided on your AC repair and installation services?',
    answer:
      'Every repair performed by Airtronics Fixcare comes with a comprehensive 90-day written guarantee covering both the replacement parts and our engineering labor. New AC installations carry a 1-year workmanship warranty plus the full original manufacturer compressor warranty.',
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
  isOpen,
  onToggle,
}: {
  faq: (typeof servicesFaqs)[0];
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
      className="py-16 md:py-20 relative bg-slate-50/30"
      aria-labelledby="services-faq-heading"
    >
      <Script
        id="services-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
        
        {/* Header matching Home FaqSection style */}
        <header className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#005eb8] font-semibold">/</span>

            <span className="text-xs md:text-sm font-semibold tracking-wide uppercase text-gray-800">
              Got Questions? We Have Answers
            </span>
          </div>

          <h2
            id="services-faq-heading"
            className="text-[32px] sm:text-[40px] md:text-[48px] font-medium tracking-tight text-[#111111] leading-[1.1] mb-5"
          >
            Frequently Asked Questions
          </h2>

          <p className="text-[#666666] text-[15px] leading-relaxed">
            Find answers to the most common AC repair, maintenance,
            installation, and commercial HVAC service questions in Dubai.
          </p>
        </header>

        {/* 2-Column Border-b Accordion Layout matching Home FaqSection */}
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
