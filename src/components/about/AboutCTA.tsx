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
    <section aria-label="Direct Emergency Booking CTA" className="bg-[#fcfcfc] py-8 sm:py-10 md:py-12">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Light Card Container - Sleek & Compact */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50/70 via-white to-slate-50/90 border border-slate-200/90 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xs text-center">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10">
            {/* Urgent Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-[#005eb8] text-xs font-bold uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5 text-[#005eb8] animate-pulse" />
              <span>24/7 Rapid Emergency Response Desk</span>
            </div>

            {/* Primary Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#111111] leading-tight max-w-3xl mx-auto mb-3">
              Schedule Professional AC Maintenance or Request Immediate Emergency Service
            </h2>

            {/* Narrative Copy */}
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
              System breakdowns, poor airflow, and sudden refrigerant leaks compromise indoor comfort. The engineering team at Airtronics Fixcare Technical Services LLC is on standby 24/7 to carry out preventative maintenance, restore air purity, and fix cooling breakdowns across Dubai.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
              <Link
                href="tel:+971586596321"
                className="inline-flex items-center gap-2 bg-[#005eb8] hover:bg-[#004a94] text-white text-xs sm:text-sm font-bold px-6 sm:px-7 py-3 rounded-full transition-all shadow-md shadow-[#005eb8]/20 group"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Hotline: +971 58 659 6321</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white text-xs sm:text-sm font-bold px-6 sm:px-7 py-3 rounded-full transition-all shadow-md shadow-[#25D366]/20 group"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Dispatch</span>
              </button>
            </div>

            {/* Trust & Dispatch Cards Grid - Compact Horizontal Micro-Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto text-left">
              
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#111111]">30-45 Min Arrival</h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-snug">
                    Centrally dispatched mobile units across all Dubai corridors.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#111111]">Flexible Payment</h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-snug">
                    Card, Apple Pay, and Cash on Delivery accepted on site.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#111111]">100% Genuine OEM</h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-snug">
                    Only factory OEM capacitors, valves & motors installed.
                  </p>
                </div>
              </div>

            </div>

            {/* Address Footer Line */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#005eb8]" />
                Office: Commercial Bank of Dubai Bldg, Dubai
              </span>
              <span>•</span>
              <span>Reg. License: Technical Services LLC</span>
              <span>•</span>
              <span className="text-emerald-600 font-semibold">24/7 Emergency Dispatch</span>
            </div>

          </div>

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
