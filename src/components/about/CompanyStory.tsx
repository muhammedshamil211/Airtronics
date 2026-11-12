'use client';

import React from 'react';
import Image from 'next/image';
import { Target, Compass, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedShaderBackground from '@/components/ui/AnimatedShaderBackground';

export default function CompanyStory() {
  return (
    <section
      aria-label="Our Story, Vision and Mission"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#03132b] text-white overflow-hidden"
    >
      {/* Same Animated Shader Background as Home Process Section */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <AnimatedShaderBackground
          patternStyle={3}
          speed={0.75}
          scale={1.0}
          distortion={2.5}
          brightness={1.5}
          refraction={1.0}
          colors={{
            base: '#000614',
            mid: '#004aa6',
            high: '#11444fff',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
        <div
          className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00D4FF 0%, #004aa6 45%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/3 -right-24 w-[500px] h-[500px] rounded-full blur-[130px] opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0076FF 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-20 -left-20 w-[450px] h-[450px] rounded-full blur-[110px] opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00AEEF 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1250px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl mb-12 sm:mb-14"
        >
          <h2 className="font-[family-name:var(--font-onest)] text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.14] mb-3.5">
            Our Story, Vision &amp; Mission
          </h2>
          <p className="font-[family-name:var(--font-onest)] text-slate-300 text-sm sm:text-base leading-relaxed">
            We started Airtronics Fixcare in 2022 to make AC care in Dubai simple, honest, and dependable.
          </p>
        </motion.div>

        {/* Story & Liquid-Glass Photo Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-5 font-[family-name:var(--font-onest)] text-slate-200 leading-relaxed text-sm sm:text-base"
          >
            <p>
              Living or working in Dubai means your air conditioning runs almost every day of the year. When an AC stops cooling in 45°C+ summer heat, you shouldn&apos;t have to wait days for a technician or worry about surprise charges.
            </p>
            <p>
              We built Airtronics Fixcare around a simple promise: arrive within 30 to 45 minutes, check the AC properly to find the real problem, explain it in plain language, and share a clear price before doing any work.
            </p>
            <p>
              Today, our Dubai-licensed team looks after villas, apartments, offices, shops, and commercial buildings across the city—keeping rooms cool, air clean, and electricity bills under control.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="p-2 sm:p-2.5 md:p-3 bg-white/[0.12] backdrop-blur-xl shadow-2xl shadow-black/30 rounded-none">
              <div className="relative h-[300px] sm:h-[360px] w-full overflow-hidden bg-slate-900 rounded-none">
                <Image
                  src="/images/hvac_service.png"
                  alt="Airtronics Fixcare technician inspecting an AC system in Dubai"
                  fill
                  quality={90}
                  loading="lazy"
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03132b]/90 via-[#03132b]/25 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#03132b]/80 backdrop-blur-md border border-white/15 rounded-none">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#00D4FF] uppercase tracking-wider mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#00D4FF]" />
                    <span>Our Promise</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-onest)] text-base font-bold text-white leading-snug">
                    Done Right the First Time
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Proper checks, real spare parts, and tidy work in every home and office.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission Liquid-Glass Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="p-2 sm:p-2.5 bg-white/[0.12] backdrop-blur-xl shadow-2xl shadow-black/30 rounded-none"
          >
            <div className="h-full bg-[#061a38]/85 p-6 sm:p-8 rounded-none">
              <div className="w-10 h-10 bg-[#0076FF] flex items-center justify-center [transform:skewX(-10deg)] rounded-none mb-5">
                <Target className="w-5 h-5 text-white [transform:skewX(10deg)]" aria-hidden="true" />
              </div>
              <h3 className="font-[family-name:var(--font-onest)] text-xl sm:text-2xl font-bold text-white mb-3">
                Our Mission
              </h3>
              <p className="font-[family-name:var(--font-onest)] text-sm sm:text-base text-slate-200 leading-relaxed">
                To keep every home and workplace in Dubai cool, comfortable, and safe by delivering fast AC service, honest advice, and clear upfront pricing—without shortcuts or hidden fees.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="p-2 sm:p-2.5 bg-white/[0.12] backdrop-blur-xl shadow-2xl shadow-black/30 rounded-none"
          >
            <div className="h-full bg-[#061a38]/85 p-6 sm:p-8 rounded-none">
              <div className="w-10 h-10 bg-[#0076FF] flex items-center justify-center [transform:skewX(-10deg)] rounded-none mb-5">
                <Compass className="w-5 h-5 text-white [transform:skewX(10deg)]" aria-hidden="true" />
              </div>
              <h3 className="font-[family-name:var(--font-onest)] text-xl sm:text-2xl font-bold text-white mb-3">
                Our Vision
              </h3>
              <p className="font-[family-name:var(--font-onest)] text-sm sm:text-base text-slate-200 leading-relaxed">
                To be the most trusted AC service company in Dubai—known by families and businesses for showing up on time, respecting your space, and keeping cooling systems reliable year after year.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
