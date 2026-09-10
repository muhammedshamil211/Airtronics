'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { services } from '@/data/services';

export default function ServicesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="w-full bg-slate-50 py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-medium tracking-tight text-[#111111] leading-[1.1] mb-4">
              Certified Excellence
            </h2>
            <p className="text-[15px] leading-relaxed text-[#666666]">
              From expert installations and rapid repairs to comprehensive preventive maintenance programs, Airtronics delivers enterprise-grade HVAC solutions. Choose reliability.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex items-center space-x-6">
            <Link href="/services" className="text-[#005eb8] font-semibold hover:text-[#a00f1a] transition-colors flex items-center group">
              View All Services
              <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link href="/contact" className="text-[#005eb8] font-semibold hover:text-[#a00f1a] transition-colors flex items-center group">
              Call For Booking
              <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Horizontal Scroll / Grid Showcase */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={service.id}
              className="group relative h-[420px] rounded-2xl overflow-hidden bg-slate-900 shadow-xl cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 w-full p-6 flex items-end justify-between">
                <div className="pr-4">
                  <span className="text-[#005eb8] font-bold text-sm mb-2 block">{service.id}.</span>
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-2 group-hover:text-white/90 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#cccccc] text-[15px] opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden line-clamp-3">
                    {service.description}
                  </p>
                </div>
                
                <div className="bg-white group-hover:bg-[#005eb8] rounded-full p-3 transition-colors duration-300 shrink-0">
                  <ArrowUpRight className="w-5 h-5 text-[#005eb8] group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <Link href={service.link} className="absolute inset-0 z-10">
                <span className="sr-only">View {service.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
