'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '@/data/services';

export default function Hero() {
  // We'll show first 5 services to match the reference layout's 5 cards
  const displayServices = services.slice(0, 5);

  return (
    <div className="relative w-full min-h-screen bg-[#fcfcfc] flex flex-col font-sans overflow-hidden">
      
      {/* Decorative Wave Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none z-0">
        <svg viewBox="0 0 1440 600" className="w-full h-auto min-w-[1440px] opacity-60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,200 C1120,450 480,10 0,300 Z" fill="var(--color-brand-light)" />
        </svg>
      </div>

      {/* Hero / Showcase Section */}
      <main className="relative z-10 flex-1 px-8 lg:px-16 xl:px-24 pt-12 pb-24 flex flex-col max-w-[1600px] mx-auto w-full">
        
        {/* Top Label */}
        <div className="mb-6 flex items-center text-sm font-semibold tracking-wide">
          <span className="text-brand mr-2">/</span>
          <span className="text-gray-800">Dubai HVAC Specialists</span>
        </div>

        {/* Headline & Description Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl leading-tight font-semibold text-[#221f1f] tracking-tight">
              Premium HVAC<br/>Services In Dubai
            </h1>
          </div>
          
          <div className="md:w-1/3 flex flex-col justify-end">
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Airtronics delivers expert HVAC installation, AC repair, preventive maintenance, duct cleaning, and commercial climate control solutions across Dubai. Trusted by residential, commercial, hospitality, and industrial clients.
            </p>
            <div className="flex items-center space-x-6 text-sm font-semibold">
              <Link href="#" className="text-brand flex items-center hover:text-brand-hover transition group">
                View All Services
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#" className="text-brand flex items-center hover:text-brand-hover transition group">
                Call For Booking
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Cards Row */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-5 h-[280px] lg:h-[340px] hide-scrollbar pb-4">
          {displayServices.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={service.id}
              className="relative rounded-[24px] overflow-hidden group cursor-pointer shrink-0 w-[45vw] sm:w-[35vw] lg:w-auto snap-center"
            >
              {/* Background Image with Grayscale */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                sizes="(max-width: 768px) 45vw, (max-width: 1024px) 35vw, 20vw"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 pointer-events-none" />

              {/* Card Content */}
              <div className="absolute inset-0 p-4 lg:p-5 flex flex-col justify-end pointer-events-none">
                <div className="flex items-end justify-between pr-12">
                  {/* Title */}
                  <h3 className="text-white font-medium text-xs lg:text-sm leading-tight">
                    {service.title.replace(' Dubai', '')}
                  </h3>
                </div>
              </div>
              
              {/* Arrow Button (Transparent background overlay) */}
              <div className="absolute bottom-3 right-3 z-20 pointer-events-auto">
                <Link href={service.link} className={`w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 bg-black/50 backdrop-blur-sm text-white group-hover:bg-brand group-hover:text-white`}>
                  <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
                </Link>
              </div>

              <Link href={service.link} className="absolute inset-0 z-10">
                <span className="sr-only">View {service.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>

      </main>
    </div>
  );
}
