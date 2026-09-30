'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  PhoneCall, 
  MessageCircle, 
  Clock, 
  CreditCard, 
  ShieldCheck, 
  MapPin, 
  ChevronRight
} from 'lucide-react';
import WhatsAppBookingModal from '@/components/ui/WhatsAppBookingModal';

export default function AboutCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section aria-label="Direct Emergency Booking CTA" className="relative py-16 md:py-24 bg-gradient-to-br from-slate-900 via-[#003366] to-slate-950 text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#005eb8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 text-center">
        
        {/* Urgent Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-accent text-xs font-bold uppercase tracking-widest mb-6">
          <Clock className="w-4 h-4 animate-pulse" />
          <span>24/7 Rapid Emergency Response Desk</span>
        </div>

        {/* Primary Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight max-w-3xl mx-auto mb-6">
          Schedule Professional AC Maintenance or Request Immediate Emergency Service
        </h2>

        {/* Narrative Copy */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
          System breakdowns, poor airflow, and sudden refrigerant leaks compromise indoor comfort and drive up operating costs. The engineering team at Airtronics Fixcare Technical Services LLC is available to carry out thorough preventative servicing, restore indoor air purity, and handle urgent cooling breakdowns across Dubai.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link
            href="tel:+971586596321"
            className="inline-flex items-center gap-2.5 bg-[#005eb8] text-white text-base font-bold px-8 py-4 rounded-full hover:bg-[#004488] hover:shadow-xl hover:shadow-[#005eb8]/40 transition-all group"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Call Hotline: +971 58 659 6321</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2.5 bg-[#25D366] text-white text-base font-bold px-8 py-4 rounded-full hover:bg-[#1ebd5a] hover:shadow-xl hover:shadow-[#25D366]/30 transition-all group"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Instant WhatsApp Dispatch</span>
          </button>
        </div>

        {/* Trust & Dispatch Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          
          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3 font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Guaranteed 30-45 Min Arrival</h3>
            <p className="text-xs text-gray-300">
              Centrally dispatched mobile units across all primary Dubai highway corridors.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 font-bold">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">Flexible Payment Gateway</h3>
            <p className="text-xs text-gray-300">
              Visa, Mastercard, Apple Pay, and Cash on Delivery accepted on site.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3 font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">100% Genuine OEM Parts</h3>
            <p className="text-xs text-gray-300">
              Only original factory capacitors, expansion valves, and motors installed.
            </p>
          </div>

        </div>

        {/* Address Footer Line */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-brand-accent" />
            Corporate Office: Dubai, United Arab Emirates
          </span>
          <span>•</span>
          <span>Reg. License: Technical Services LLC</span>
          <span>•</span>
          <span>24/7 Emergency Standing Standby</span>
        </div>

      </div>

      {/* Reusable WhatsApp Booking Modal */}
      <WhatsAppBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Emergency Breakdown (24/7)"
      />
    </section>
  );
}
