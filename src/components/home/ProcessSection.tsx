'use client';

import React from 'react';
import { PhoneCall, Search, FileText, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    id: '01',
    icon: <PhoneCall className="w-8 h-8 text-[#005eb8]" />,
    title: 'Book Service',
    description: 'Contact us via phone or online form. We schedule a convenient time for you.'
  },
  {
    id: '02',
    icon: <Search className="w-8 h-8 text-[#005eb8]" />,
    title: 'Expert Inspection',
    description: 'Our certified technicians arrive on time to accurately diagnose the HVAC issue.'
  },
  {
    id: '03',
    icon: <FileText className="w-8 h-8 text-[#005eb8]" />,
    title: 'Upfront Quote',
    description: 'We provide a transparent, no-obligation quote before any work begins.'
  },
  {
    id: '04',
    icon: <CheckCircle className="w-8 h-8 text-[#005eb8]" />,
    title: 'Resolve & Enjoy',
    description: 'We fix the problem efficiently, clean up the area, and restore your comfort.'
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[#fcfcfc] border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-[#005eb8] font-semibold">/</span>
            <span className="text-sm md:text-base font-semibold tracking-wide text-gray-800 uppercase">
              How It Works
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-medium tracking-tight text-[#111111] leading-[1.1] mb-6">
            Our Simple 4-Step Process
          </h2>
          <p className="text-[#666666] text-[15px] leading-relaxed">
            We value your time and comfort. Our streamlined process ensures your HVAC problems are resolved quickly and professionally.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[4rem] left-[12%] right-[12%] h-[2px] bg-gray-200 -z-10" />

          {processSteps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 relative border-4 border-[#fcfcfc] group-hover:border-[#005eb8]/10 transition-colors duration-300">
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-sm shadow-md">
                  {step.id}
                </div>
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>

              {/* Text */}
              <h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#111111] mb-3 group-hover:text-brand transition-colors">
                {step.title}
              </h3>
              <p className="text-[#666666] text-[15px] leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
