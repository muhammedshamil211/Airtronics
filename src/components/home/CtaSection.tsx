'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { PhoneCall, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 bg-[url('/images/home-cta.png')] bg-cover bg-center bg-fixed"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#005eb8]/90 mix-blend-multiply" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 to-transparent" aria-hidden="true" />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="cta-heading" className="text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-medium tracking-tight text-white mb-6 leading-[1.1]">
            Ready to Restore Your Comfort?
          </h2>
          <p className="text-[15px] sm:text-base leading-relaxed text-white/90 mb-10 max-w-2xl mx-auto">
            Don&apos;t let a faulty AC disrupt your day. Our certified HVAC experts are on standby across Downtown Dubai, Marina, Business Bay, and Jumeirah to provide rapid, reliable service.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto px-8 !py-4 rounded-xl border border-white/20"
              aria-label="Book AC Service Online"
              iconLeft={<Calendar className="w-5 h-5" aria-hidden="true" />}
            >
              <span>Book Online Now</span>
            </Button>

            <Button
              href="tel:+971586596321"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto px-8 !py-4 rounded-xl"
              aria-label="Call +971 58 659 6321 for Emergency AC Repair"
              iconLeft={<PhoneCall className="w-5 h-5" aria-hidden="true" />}
            >
              <span>+971 58 659 6321</span>
            </Button>
          </div>

          <p className="mt-8 text-white/70 text-sm  tracking-wide uppercase">
            Available for Emergency AC Repairs in Dubai
          </p>
        </motion.div>
      </div>
    </section>
  );
}
