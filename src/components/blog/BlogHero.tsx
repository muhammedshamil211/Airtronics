'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, BookOpen, Clock, ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function BlogHero() {
  return (
    <section
      className="relative bg-white text-slate-900 overflow-hidden pt-6 sm:pt-10 md:pt-12 pb-10 sm:pb-12 border-b border-slate-100"
      aria-label="Dubai AC and HVAC Blog Hero"
    >
      {/* Subtle Top Background Watermark */}
      <div
        className="absolute top-0 inset-x-0 h-[85%] pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 pt-2 sm:pt-4">
          <span className="font-[family-name:var(--font-bebas)] text-[140px] xs:text-[180px] sm:text-[240px] md:text-[310px] lg:text-[360px] font-normal text-slate-900/[0.035] leading-none tracking-tight block">
            JOURNAL
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Clean Inline Breadcrumb */}
          <motion.nav
            variants={itemVariants}
            aria-label="Breadcrumb"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 mb-4"
          >
            <Link href="/" className="hover:text-[#0076FF] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0076FF] font-semibold" aria-current="page">
              Blog &amp; Guides
            </span>
          </motion.nav>

          {/* Monumental Two-Tone H1 */}
          <motion.h1
            variants={itemVariants}
            className="font-[family-name:var(--font-bebas)] text-5xl xs:text-6xl sm:text-7xl md:text-[76px] lg:text-[84px] font-normal tracking-[-0.02em] leading-[0.92] uppercase mb-4 sm:mb-5"
          >
            <span className="block text-[#111827]">DUBAI AC &amp; CLIMATE</span>
            <span className="block text-[#0076FF]">ANSWERS &amp; GUIDES</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-[family-name:var(--font-onest)] text-slate-600 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl mb-6"
          >
            Clear, honest guides written for Dubai homeowners, tenants, and businesses—covering AC not cooling, lowering DEWA electricity bills, Empower/Emicool apartments, water leaks, and indoor air quality.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-700 font-medium"
          >
            <div className="inline-flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#0076FF]" />
              <span>Written in Plain English</span>
            </div>
            <span className="hidden sm:inline text-slate-300">|</span>
            <div className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0076FF]" />
              <span>4–5 Min Practical Reads</span>
            </div>
            <span className="hidden sm:inline text-slate-300">|</span>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-[#0076FF] font-semibold hover:underline"
            >
              <span>Need a Technician Now?</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

