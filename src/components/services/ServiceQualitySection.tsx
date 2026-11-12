'use client';

import React from 'react';
import {
  Clock,
  Receipt,
  SearchCheck,
  Sparkles,
  Award,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface QualityExpectation {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const QUALITY_EXPECTATIONS: QualityExpectation[] = [
  {
    number: '01',
    icon: Clock,
    title: 'Fast Arrival, Day or Night',
    description:
      'When your AC stops cooling in Dubai heat, you should not have to wait all day. Our nearby team reaches your home or office in 30 to 45 minutes, 24/7.',
  },
  {
    number: '02',
    icon: Receipt,
    title: 'Clear Price Before We Start',
    description:
      'No hidden charges or surprise bills. Our technician checks your AC, explains the exact cost in simple words, and waits for your approval before starting.',
  },
  {
    number: '03',
    icon: SearchCheck,
    title: 'Honest Advice, No Extra Selling',
    description:
      'We find the real cause of the problem instead of guessing. If a simple cleaning or small part fixes your AC, we tell you honestly—never pushing work you do not need.',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Clean & Tidy Work in Your Home',
    description:
      'We wear shoe covers, protect your floor and furniture while working, and clean up all dust and water before we leave your room.',
  },
  {
    number: '05',
    icon: Award,
    title: 'Original Parts Built for Dubai Heat',
    description:
      'We only use genuine brand spare parts and quality refrigerant gas—never cheap copies—so your AC cools stronger and helps lower your monthly DEWA bill.',
  },
];

export default function ServiceQualitySection() {
  return (
    <section
      id="service-quality"
      aria-labelledby="service-quality-heading"
      className="relative bg-white py-14 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden"
    >
      <div className="relative max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* Faint Giant Background Watermark */}
        <div
          className="absolute -top-6 xs:-top-8 sm:-top-12 md:-top-16 left-4 pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-[family-name:var(--font-onest)] text-7xl xs:text-8xl sm:text-9xl md:text-[140px] lg:text-[170px] font-black text-slate-900/[0.035] leading-none tracking-tight block">
            QUALITY
          </span>
        </div>

        {/* Clean Single-Heading Header (No Eyebrow) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative z-10 max-w-3xl mb-10 sm:mb-12"
        >
          <h2
            id="service-quality-heading"
            className="font-[family-name:var(--font-onest)] text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] tracking-tight leading-[1.14] mb-3.5"
          >
            What You Can Expect From Our AC Service
          </h2>
          <p className="font-[family-name:var(--font-onest)] text-sm sm:text-base text-slate-600 leading-relaxed">
            When you search for an AC technician in Dubai, you want someone who arrives on time, tells the truth, quotes a fair price, and fixes the problem properly the first time. Here is our promise on every visit.
          </p>
        </motion.div>

        {/* 5-Card Balanced Sharp Architectural Grid (3 on top, 2 wide on bottom) */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-7">
          {QUALITY_EXPECTATIONS.map((item, idx) => {
            const Icon = item.icon;
            const spanClass =
              idx < 3
                ? 'lg:col-span-2'
                : idx === 3
                ? 'lg:col-span-3'
                : 'md:col-span-2 lg:col-span-3';
            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: 'easeOut' }}
                className={`group bg-white border border-slate-200/90 hover:border-[#0076FF] rounded-none p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200 ${spanClass}`}
              >
                <div>
                  {/* Top Row: Slanted Icon Badge + Step Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-none [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] bg-blue-50 border border-blue-200/70 text-[#0076FF] group-hover:bg-[#0076FF] group-hover:border-[#0076FF] group-hover:text-white flex items-center justify-center transition-colors duration-200">
                      <Icon className="w-5 h-5 [transform:skewX(10deg)] sm:[transform:skewX(14deg)]" strokeWidth={2} />
                    </div>
                    <span className="font-[family-name:var(--font-bebas)] text-2xl sm:text-3xl text-slate-300 group-hover:text-[#0076FF]/40 transition-colors leading-none">
                      {item.number}
                    </span>
                  </div>

                  {/* Plain-English Title */}
                  <h3 className="font-[family-name:var(--font-onest)] text-lg sm:text-xl font-bold text-[#0f172a] tracking-tight leading-snug mb-2.5 group-hover:text-[#0076FF] transition-colors">
                    {item.title}
                  </h3>

                  {/* Simple, Helpful Description */}
                  <p className="font-[family-name:var(--font-onest)] text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

