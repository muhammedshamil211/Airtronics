'use client';

import React from 'react';
import Link from 'next/link';
import { PhoneCall, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed"
      />
      <div className="absolute inset-0 bg-[#005eb8]/90 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-medium tracking-tight text-white mb-6 leading-[1.1]">
            Ready to Restore Your Comfort?
          </h2>
          <p className="text-[15px] leading-relaxed text-white/90 mb-10 max-w-2xl mx-auto">
            Don't let a faulty AC disrupt your day or business. Our certified experts are on standby across Dubai to provide rapid, reliable service.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#005eb8] font-bold px-8 py-4 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Calendar className="w-5 h-5" />
              Book Online Now
            </Link>
            
            <Link 
              href="tel:+971586596321" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#005eb8] hover:scale-105 transition-all duration-300"
            >
              <PhoneCall className="w-5 h-5" />
              +971 58 659 6321
            </Link>
          </div>

          <p className="mt-8 text-white/70 text-sm">
            Available 24/7 for Emergency Repairs in Dubai
          </p>
        </motion.div>
      </div>
    </section>
  );
}
