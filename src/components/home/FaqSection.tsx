'use client';

import React, { useState } from 'react';
import Script from 'next/script';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BRAND_NAME = process.env.NEXT_PUBLIC_BRAND_NAME || "Dubai HVAC Experts";
const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+971 4 XXX XXXX";

const faqs = [
  {
    id: "faq-1",
    question: "How much does AC repair and maintenance cost in Dubai?",
    answer: "The cost of AC repair and maintenance in Dubai typically ranges from AED 150 to AED 500 depending on the issue and unit type. Minor fixes for split ACs are generally on the lower end, while complex central AC repairs may cost more. For the best value, we highly recommend our Annual Maintenance Contracts (AMCs), which provide year-round preventive care and priority service at a discounted rate."
  },
  {
    id: "faq-2",
    question: "Why is my AC blowing warm air or running without cooling?",
    answer: "If your AC is blowing warm air, the most common culprits are refrigerant (gas) leaks, heavily clogged or dirty condenser coils, or a faulty thermostat. In Dubai's severe heat, compressors can also overheat and trip. Our certified technicians can quickly diagnose the issue, safely refill refrigerant gas, and restore your cooling."
  },
  {
    id: "faq-3",
    question: "How often should an AC unit be serviced in Dubai's heat?",
    answer: "Due to extreme summer temperatures frequently exceeding 40°C, high humidity, and constant sand and dust build-up, we recommend servicing your AC every 3 to 4 months. Regular preventive maintenance is essential in the UAE to prevent sudden breakdowns and ensure maximum cooling performance."
  },
  {
    id: "faq-4",
    question: "Can regular AC servicing lower my DEWA electricity bill?",
    answer: "Yes, absolutely. An unmaintained AC unit has to work significantly harder to cool your space. Professional servicing—which includes cleaning dirty coils and unblocking air ducts—can improve your unit's cooling efficiency by up to 20%, directly resulting in noticeable savings on your monthly DEWA electricity bills."
  },
  {
    id: "faq-5",
    question: "Why is water leaking from my indoor AC unit?",
    answer: "Water dripping from an indoor unit is usually caused by a clogged condensate drain line blocked by dirt and algae, or by frozen evaporator coils melting due to restricted airflow. Dubai's high indoor humidity levels exacerbate condensation, making regular clearing of drain lines a critical maintenance step."
  },
  {
    id: "faq-6",
    question: "Why is AC duct and coil deep cleaning essential in the UAE?",
    answer: "Constant sand infiltration and high humidity create the perfect breeding ground for mold, bacteria, and allergens inside your AC ducts and coils. Deep cleaning is essential to maintain healthy indoor air quality, prevent respiratory issues, and stop musty odors from circulating throughout your property."
  },
  {
    id: "faq-7",
    question: "Do you provide 24/7 emergency AC repair across all Dubai areas?",
    answer: `Yes, ${BRAND_NAME} provides rapid 24/7 emergency AC repair services. Our mobile technician teams cover all major communities, including Dubai Marina, Downtown Dubai, Jumeirah, Palm Jumeirah, Business Bay, Arabian Ranches, Al Barsha, JLT, and Mirdif. Call us at ${PHONE_NUMBER} for immediate assistance.`
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/50" aria-labelledby="faq-heading">
      {/* Abstract Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] rounded-full bg-[#005eb8]/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vh] rounded-full bg-[#c1121f]/15 blur-[140px]" />
        <div className="absolute top-[30%] right-[10%] w-[40vw] h-[40vh] rounded-full bg-[#005eb8]/15 blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[45vw] h-[45vh] rounded-full bg-blue-300/20 blur-[130px]" />
      </div>

      <Script 
        id="faq-schema" 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
      />
      
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">
        
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-[#005eb8] font-semibold" aria-hidden="true">/</span>
            <span className="text-sm md:text-sm font-semibold tracking-wide text-gray-800 uppercase text-center">
              Got Questions? We Have Answers | Dubai Municipality Approved
            </span>
          </div>
          <h2 id="faq-heading" className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-medium tracking-tight text-[#111111] leading-[1.1] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-[#666666] text-[15px] leading-relaxed">
            Find answers to Dubai&apos;s most common air conditioning and HVAC maintenance questions. 
            Need immediate help? Call our emergency line for rapid support.
          </p>
        </header>

        {/* Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto" role="presentation">
          
          {/* Left Column */}
          <div className="flex flex-col">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="group relative flex flex-col border-b border-gray-200 transition-colors duration-300 bg-transparent hover:bg-[#111111]"
                >
                  <button
                    type="button"
                    id={`accordion-button-${faq.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-content-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 flex items-start justify-between text-left focus:outline-none"
                  >
                    <span className="text-[15px] md:text-base font-medium tracking-tight text-[#111111] group-hover:text-white transition-colors pr-6 mt-1">
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors ${isOpen ? 'text-white bg-[#005eb8]' : 'text-gray-400 bg-slate-50 group-hover:text-white group-hover:bg-white/10'}`}>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                        aria-hidden="true" 
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`accordion-content-${faq.id}`}
                        role="region"
                        aria-labelledby={`accordion-button-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 text-[#666666] group-hover:text-gray-300 transition-colors duration-300 text-[15px] leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="group relative flex flex-col border-b border-gray-200 transition-colors duration-300 bg-transparent hover:bg-[#111111]"
                >
                  <button
                    type="button"
                    id={`accordion-button-${faq.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-content-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 flex items-start justify-between text-left focus:outline-none"
                  >
                    <span className="text-[15px] md:text-base font-medium tracking-tight text-[#111111] group-hover:text-white transition-colors pr-6 mt-1">
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors ${isOpen ? 'text-white bg-[#005eb8]' : 'text-gray-400 bg-slate-50 group-hover:text-white group-hover:bg-white/10'}`}>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                        aria-hidden="true" 
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`accordion-content-${faq.id}`}
                        role="region"
                        aria-labelledby={`accordion-button-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 text-[#666666] group-hover:text-gray-300 transition-colors duration-300 text-[15px] leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
