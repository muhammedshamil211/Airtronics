'use client';

import React from 'react';
import { PhoneCall, Search, FileText, CheckCircle, ArrowRight, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import Script from 'next/script';

const WHATSAPP_PHONE = '971586596321';

const processSteps = [
  {
    id: '01',
    stepNumber: 1,
    icon: <PhoneCall className="w-6 h-6 lg:w-7 lg:h-7 text-[#005eb8]" aria-hidden="true" />,
    title: 'Book AC Service',
    description: 'Contact us via phone or WhatsApp. We schedule a convenient time for rapid AC repair or maintenance anywhere in Dubai.',
  },
  {
    id: '02',
    stepNumber: 2,
    icon: <Search className="w-6 h-6 lg:w-7 lg:h-7 text-[#005eb8]" aria-hidden="true" />,
    title: 'Expert AC Inspection',
    description: 'Our licensed technicians arrive on time equipped with digital manifold gauges to accurately diagnose cooling issues.',
  },
  {
    id: '03',
    stepNumber: 3,
    icon: <FileText className="w-6 h-6 lg:w-7 lg:h-7 text-[#005eb8]" aria-hidden="true" />,
    title: 'Upfront Pricing',
    description: 'We provide a transparent, itemized quote before any AC repair begins. Zero hidden callout or unexpected labor fees.',
  },
  {
    id: '04',
    stepNumber: 4,
    icon: <CheckCircle className="w-6 h-6 lg:w-7 lg:h-7 text-[#005eb8]" aria-hidden="true" />,
    title: 'Same-Day Repair',
    description: 'We restore your cooling using genuine factory OEM parts, clean up the work area, and verify optimal airflow.',
  },
  {
    id: '05',
    stepNumber: 5,
    icon: <Wrench className="w-6 h-6 lg:w-7 lg:h-7 text-[#005eb8]" aria-hidden="true" />,
    title: 'Follow-up & Support',
    description: 'We follow up after service with a written 90-day parts-and-labor warranty to guarantee long-term peace of mind.',
  },
];

export default function ProcessSection() {
  // Rich Schema.org HowTo Structured Data for Rank-#1 Google Rich Snippets
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': 'https://airtronicsfixcare.com/#process',
    'name': 'Our 5-Step AC Repair & HVAC Service Process in Dubai',
    'description': 'Certified step-by-step air conditioning repair and HVAC maintenance workflow in Dubai by Airtronics Fixcare: emergency booking, precision digital diagnostics, upfront written quotes, same-day OEM repairs, and a 90-day warranty.',
    'totalTime': 'PT45M',
    'estimatedCost': {
      '@type': 'MonetaryAmount',
      'currency': 'AED',
      'value': '150',
    },
    'step': processSteps.map((step) => ({
      '@type': 'HowToStep',
      'position': step.stepNumber,
      'name': `Step ${step.stepNumber}: ${step.title}`,
      'text': step.description,
      'url': `https://airtronicsfixcare.com/#step-${step.stepNumber}`,
    })),
  };

  return (
    <section
      id="process"
      className="py-12 md:py-16 relative overflow-hidden bg-[#fcfcfc] border-t border-gray-100"
      aria-labelledby="process-heading"
    >
      {/* Abstract Mesh Gradient - Top Right (Original Style Preserved) */}
      <div
        className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] z-0 pointer-events-none opacity-90"
        aria-hidden="true"
      >
        <div
          className="absolute top-[0%] right-[0%] w-[250px] h-[250px] bg-[#005eb8]/40 blur-[90px]"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 80% 90%, 50% 100%, 20% 80%, 0 40%, 30% 10%)' }}
        />
        <div
          className="absolute top-[20%] right-[15%] w-[200px] h-[200px] bg-[#ff7b00]/30 blur-[100px]"
          style={{ clipPath: 'polygon(80% 10%, 100% 40%, 90% 80%, 50% 100%, 10% 70%, 0 30%, 40% 0)' }}
        />
        <div
          className="absolute top-[40%] right-[5%] w-[180px] h-[180px] bg-[#c1121f]/40 blur-[90px]"
          style={{ clipPath: 'polygon(100% 20%, 80% 100%, 20% 90%, 0 50%, 30% 0, 80% 0)' }}
        />
      </div>

      {/* Abstract Mesh Gradient - Bottom Left (Original Style Preserved) */}
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] z-0 pointer-events-none opacity-90"
        aria-hidden="true"
      >
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] bg-[#005eb8]/40 blur-[100px]"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 90% 60%, 100% 20%, 50% 0, 10% 30%)' }}
        />
        <div
          className="absolute bottom-[20%] left-[10%] w-[180px] h-[180px] bg-[#00d4ff]/30 blur-[90px]"
          style={{ clipPath: 'polygon(50% 100%, 0 80%, 10% 20%, 60% 0, 100% 40%, 90% 90%)' }}
        />
        <div
          className="absolute bottom-[30%] left-[-5%] w-[150px] h-[150px] bg-[#c1121f]/30 blur-[90px]"
          style={{ clipPath: 'polygon(0 0, 100% 20%, 80% 100%, 20% 90%)' }}
        />
      </div>

      {/* JSON-LD HowTo Schema for Google Rich Snippets */}
      <Script
        id="how-it-works-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">

        {/* Header (Original Section Heading Style Preserved) */}
        <header className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#005eb8] font-semibold" aria-hidden="true">/</span>
            <span className="text-sm md:text-base font-semibold tracking-wide text-gray-800 uppercase">
              How It Works
            </span>
          </div>
          <h2
            id="process-heading"
            className="text-[28px] sm:text-[36px] md:text-[44px] font-medium tracking-tight text-[#111111] leading-[1.1] mb-4"
          >
            Our 5-Step AC Repair &amp; HVAC Service Process
          </h2>
          <p className="text-[#666666] text-[15px] sm:text-base leading-relaxed">
            We value your time and comfort. Our streamlined 5-step approach ensures your AC repair and maintenance needs are resolved quickly and professionally by our Dubai Municipality approved experts.
          </p>
        </header>

        {/* ========================================================================= */}
        {/* MOBILE VIEW (< lg): Fluid Step-by-Step Flow (NO CARD BOX DESIGN)          */}
        {/* ========================================================================= */}
        <div className="lg:hidden relative pl-5 sm:pl-7 space-y-7 sm:space-y-8" role="list">
          {/* Vertical Connecting Guide Line */}
          <div
            className="absolute left-[26px] sm:left-[34px] top-6 bottom-6 w-[2px] bg-gray-200"
            aria-hidden="true"
          />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative flex items-start gap-4 sm:gap-5 bg-transparent border-0 shadow-none p-0"
              role="listitem"
            >
              {/* Step Circle with ID (Not a card box) */}
              <div className="relative shrink-0 z-10">
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-white shadow-md flex items-center justify-center border-4 border-[#fcfcfc] text-[#005eb8]">
                  {React.cloneElement(step.icon, { className: 'w-6 h-6 text-[#005eb8]' })}
                </div>
                <div
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-[10px] shadow-xs"
                  aria-hidden="true"
                >
                  {step.id}
                </div>
              </div>

              {/* Step Text Details */}
              <div className="pt-1 min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-medium tracking-tight text-[#111111] mb-1.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[#666666] text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (lg:+): Original 5 Columns with Animated Connecting Line     */}
        {/* ========================================================================= */}
        <div
          className="hidden lg:grid grid-cols-5 gap-3 relative"
          role="list"
        >
          {/* Connecting Line (Desktop Only) */}
          <div
            className="absolute top-[2.5rem] left-[8%] right-[8%] h-[2px] bg-gray-200 -z-10"
            aria-hidden="true"
          >
            <motion.div
              className="h-full bg-[#005eb8]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
              style={{ originX: 0 }}
            />
          </div>

          {processSteps.map((step, index) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center group bg-transparent p-0"
              role="listitem"
            >
              {/* Scaled Icon Container */}
              <div className="w-18 h-18 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded-full bg-white shadow-md lg:shadow-lg flex items-center justify-center mb-5 relative border-4 border-[#fcfcfc] group-hover:border-[#005eb8]/20 transition-all duration-300">
                <div
                  className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-xs shadow-xs"
                  aria-hidden="true"
                >
                  {step.id}
                </div>
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>

              {/* Text */}
              <h3 className="text-base sm:text-lg font-medium tracking-tight text-[#111111] mb-2 group-hover:text-[#005eb8] transition-colors leading-snug">
                {step.title}
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed max-w-[220px]">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* CTA ACTION BUTTON: Hero-Style Shape (Rounded-lg, Bold, Shadow-md)         */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-14 text-center"
        >
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hello Airtronics! I would like to book AC repair & service in Dubai.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white bg-[#008f4c] hover:bg-[#007a3f] rounded-lg shadow-md shadow-[#008f4c]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
            aria-label="Book Your AC Repair on WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Book Your AC Repair Now</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <p className="mt-3 text-sm text-[#666666]">
            Available 24/7 for emergency HVAC services across Dubai.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
