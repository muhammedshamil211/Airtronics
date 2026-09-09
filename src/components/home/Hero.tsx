'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '@/data/services';

export default function Hero() {
  const displayServices = services.slice(0, 5);

  return (
    <section className="relative overflow-hidden bg-[#fcfcfc]">
      {/* Background Wave */}
      <div className="absolute inset-x-0 top-0 z-0 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          className="w-full h-[260px] md:h-[320px] lg:h-[380px]"
        >
          <path
            d="M0,0 L1440,0 L1440,200 C1120,450 480,10 0,300 Z"
            fill="var(--color-brand-light)"
            opacity="0.55"
          />
        </svg>
      </div>

      <main className="relative z-10 max-w-[1500px] mx-auto px-5 md:px-8 lg:px-12 xl:px-20 pt-10 lg:pt-14 pb-12">

        {/* Label */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-brand font-semibold">/</span>
          <span className="text-sm md:text-base font-semibold tracking-wide text-gray-800 ">
            Dubai HVAC Specialists
          </span>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12 mb-16">

          {/* Left: Headline */}
          <div className="lg:w-3/5">
            <h1 className="text-[36px] sm:text-[46px] md:text-[54px] lg:text-[64px] xl:text-[72px] font-medium tracking-tight leading-[1.05] text-[#111111]">
              Premium HVAC<br className="hidden sm:block" /> Services In Dubai
            </h1>
          </div>

          {/* Right: Text & Links */}
          <div className="lg:w-2/5 flex flex-col justify-end">
            <p className="text-[#666666] text-sm md:text-[15px] leading-relaxed mb-6 max-w-[400px]">
              Airtronics delivers expert HVAC installation, AC repair,
              preventive maintenance, duct cleaning and commercial climate
              control solutions across Dubai. Trusted by residential,
              commercial, hospitality and industrial clients.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-5 text-sm md:text-[15px]">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-brand text-white font-semibold px-7 py-3.5 rounded-full hover:bg-brand-hover hover:shadow-lg hover:shadow-brand/30 transition-all group"
              >
                Call For Booking
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="flex items-center gap-2 bg-white text-[#111] border border-gray-200 font-semibold px-7 py-3.5 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm group"
              >
                View All Services
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="flex gap-4 lg:gap-5 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 xl:grid xl:grid-cols-5 xl:overflow-visible">
          {displayServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="relative overflow-hidden rounded-[20px] w-[65vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] xl:w-auto h-[220px] sm:h-[240px] lg:h-[260px] shrink-0 snap-center group"
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority={index < 2}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width:640px) 65vw, (max-width:768px) 40vw, (max-width:1024px) 30vw, 20vw"
              />

              {/* Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,.92) 0%, rgba(0,0,0,.35) 35%, rgba(0,0,0,0) 70%)',
                }}
              />

              {/* Content */}
              <div className="absolute bottom-4 left-4 right-14 z-10 pointer-events-none">
                <h3 className="text-white text-sm md:text-base font-medium leading-tight">
                  {service.title.replace(' Dubai', '')}
                </h3>
              </div>

              {/* Arrow */}
              <Link
                href={service.link}
                className="absolute bottom-3 right-3 z-20 flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-brand text-white shadow-lg shadow-brand/40 transition-all duration-300 hover:scale-110 hover:bg-brand-hover"
              >
                <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </Link>

              {/* Full Card Link */}
              <Link
                href={service.link}
                className="absolute inset-0 z-[5]"
              >
                <span className="sr-only">
                  View {service.title}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </section>
  );
}