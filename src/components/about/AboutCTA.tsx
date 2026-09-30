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

const TRUST_FEATURES = [
  { icon: Clock, title: '30–45 Min Arrival', color: 'text-amber-500' },
  { icon: CreditCard, title: 'Flexible Payment Options', color: 'text-emerald-500' },
  { icon: ShieldCheck, title: '100% Genuine OEM Parts', color: 'text-[#005eb8]' },
];

interface AboutCTAProps {
  badge?: string;
  title?: string;
  description?: string;
  phone?: string;
  defaultService?: string;
}

export default function AboutCTA({
  badge = '24/7 Rapid Emergency Response Desk',
  title = 'Schedule Professional AC Maintenance or Request Immediate Emergency Service',
  description = 'System breakdowns, poor airflow, and sudden refrigerant leaks compromise indoor comfort. The engineering team at Airtronics Fixcare Technical Services LLC is on standby 24/7 to carry out preventative maintenance, restore air purity, and fix cooling breakdowns across Dubai.',
  phone = '+971 58 659 6321',
  defaultService = 'Emergency Breakdown (24/7)',
}: AboutCTAProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cleanPhone = phone.replace(/[^0-9]/g, '');

  return (
    <section aria-label="Direct Emergency Booking CTA" className="bg-[#fcfcfc] py-4 sm:py-6 md:py-8">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Light Highlighted CTA Container - Horizontal Gradient Blending into White on Both Sides, Zero Border & Zero Shadow */}
        <div className="relative overflow-hidden bg-gradient-to-r from-transparent via-[#ebf4ff] to-transparent p-6 sm:p-8 md:p-10 text-center rounded-2xl md:rounded-3xl">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-200/15 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10">
            {/* Urgent Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/70 text-[#005eb8] text-xs font-bold uppercase tracking-wider mb-3">
              <Clock className="w-3.5 h-3.5 text-[#005eb8] animate-pulse" />
              <span>{badge}</span>
            </div>

            {/* Title & Copy */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#111111] leading-tight max-w-3xl mx-auto mb-3">
              {title}
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-6 font-normal">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">
              <Link
                href={`tel:+${cleanPhone}`}
                className="inline-flex items-center gap-2 bg-[#005eb8] hover:bg-[#004a94] text-white text-xs sm:text-sm font-semibold px-6 sm:px-7 py-3 rounded-full transition-colors group"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Hotline: {phone}</span>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white text-xs sm:text-sm font-semibold px-6 sm:px-7 py-3 rounded-full transition-colors group"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Dispatch</span>
              </button>
            </div>

            {/* Trust Features - Clean Inline Row (Zero Cards) */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-5 border-t border-slate-200/80 text-xs sm:text-sm text-gray-700 font-medium">
              {TRUST_FEATURES.map(({ icon: Icon, title: itemTitle, color }, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${color}`} />
                  <span>{itemTitle}</span>
                </div>
              ))}
            </div>

            {/* Address Footer Line */}
            <div className="mt-6 pt-5 border-t border-slate-200/60 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#005eb8]" />
                Commercial Bank of Dubai Bldg, Dubai
              </span>
              <span>•</span>
              <span>Technical Services LLC</span>
              <span>•</span>
              <span className="text-emerald-600 font-semibold">24/7 Rapid Dispatch</span>
            </div>

          </div>
        </div>

      </div>

      <WhatsAppBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={defaultService}
      />
    </section>
  );
}
