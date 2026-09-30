'use client';

import React from 'react';
import { PhoneCall, Search, FileText, CheckCircle, ArrowRight, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const processSteps = [
  {
    id: '01',
    icon: <PhoneCall className="w-8 h-8 text-[#005eb8]" aria-hidden="true" />,
    title: 'Book AC Service',
    description: 'Contact us via phone or online form. We schedule a convenient time for your AC repair or maintenance anywhere in Dubai.'
  },
  {
    id: '02',
    icon: <Search className="w-8 h-8 text-[#005eb8]" aria-hidden="true" />,
    title: 'Expert AC Inspection',
    description: 'Our licensed technicians arrive on time to accurately diagnose your HVAC issue and assess your cooling needs.'
  },
  {
    id: '03',
    icon: <FileText className="w-8 h-8 text-[#005eb8]" aria-hidden="true" />,
    title: 'Upfront Pricing',
    description: 'We provide a transparent, no-obligation quote before any AC repair or duct cleaning work begins.'
  },
  {
    id: '04',
    icon: <CheckCircle className="w-8 h-8 text-[#005eb8]" aria-hidden="true" />,
    title: 'Same-Day Repair',
    description: 'We fix the problem efficiently, clean up the area, and restore your indoor comfort with a satisfaction guarantee.'
  },
  {
    id: '05',
    icon: <Wrench className="w-8 h-8 text-[#005eb8]" aria-hidden="true" />,
    title: 'Follow-up & Support',
    description: 'We follow up after service to ensure satisfaction and offer maintenance plans.'
  }
];

export default function ProcessSection() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-[#fcfcfc] border-t border-gray-100" aria-labelledby="process-heading">
      
      {/* Abstract Mesh Gradient - Top Right */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] z-0 pointer-events-none opacity-90" aria-hidden="true">
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

      {/* Abstract Mesh Gradient - Bottom Left */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] z-0 pointer-events-none opacity-90" aria-hidden="true">
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

      <div className="container mx-auto px-2 md:px-8 max-w-[1200px] relative z-10">
        
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#005eb8] font-semibold" aria-hidden="true">/</span>
            <span className="text-sm md:text-base font-semibold tracking-wide text-gray-800 uppercase">
              How It Works
            </span>
          </div>
          <h2 id="process-heading" className="text-[28px] sm:text-[36px] md:text-[44px] font-medium tracking-tight text-[#111111] leading-[1.1] mb-4">
            Our 5-Step AC Repair &amp; HVAC Service Process
          </h2>
          <p className="text-[#666666] text-sm md:text-[15px] leading-relaxed">
            We value your time and comfort. Our streamlined 5-step approach ensures your AC repair and maintenance needs are resolved quickly and professionally by our Dubai Municipality approved experts.
          </p>
        </header>

        {/* Process Steps - 5 columns in a single row on lg screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-3 relative" role="list">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[8%] right-[8%] h-[2px] bg-gray-200 -z-10" aria-hidden="true">
            <motion.div 
              className="h-full bg-[#005eb8]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              style={{ originX: 0 }}
            />
          </div>

          {processSteps.map((step, index) => (
            <motion.article 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center group bg-white lg:bg-transparent p-4 lg:p-0 rounded-2xl border lg:border-none border-gray-100 shadow-xs lg:shadow-none"
              role="listitem"
            >
              {/* Scaled-down Icon Container */}
              <div className="w-18 h-18 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded-full bg-white shadow-md lg:shadow-lg flex items-center justify-center mb-5 relative border-4 border-[#fcfcfc] group-hover:border-[#005eb8]/20 transition-all duration-300">
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-xs shadow-xs" aria-hidden="true">
                  {step.id}
                </div>
                <div className="group-hover:scale-110 transition-transform duration-300 text-brand">
                  {React.cloneElement(step.icon, { className: 'w-6 h-6 lg:w-7 lg:h-7 text-[#005eb8]' })}
                </div>
              </div>

              {/* Text */}
              <h3 className="text-base sm:text-lg font-medium tracking-tight text-[#111111] mb-2 group-hover:text-brand transition-colors leading-snug">
                {step.title}
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed max-w-[220px]">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <Link href="/contact#contact-form" className="inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-brand hover:bg-brand-hover rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 group" aria-label="Book Your AC Repair Now">
            Book Your AC Repair Now
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
          <p className="mt-3 text-sm text-[#666666]">
            Available 24/7 for emergency HVAC services across Dubai.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
