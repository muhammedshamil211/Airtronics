'use client';

import React from 'react';
import { ArrowRight, Zap, ShieldCheck, TrendingDown, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const WHATSAPP_PHONE = '971586596321';

// Landmark SVG Icons for UAE Cities
function BurjKhalifaIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2v20" />
      <path d="M11 5h2" />
      <path d="M10.5 8h3" />
      <path d="M10 11h4" />
      <path d="M9.5 14h5" />
      <path d="M8 17h8" />
      <path d="M6 22h12" />
      <path d="M11 5l-1 6-1.5 3-1.5 3-1 5" />
      <path d="M13 5l1 6 1.5 3 1.5 3 1 5" />
    </svg>
  );
}

function GrandMosqueIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 4v2" />
      <path d="M8 12c0-3.5 1.8-6 4-6s4 2.5 4 6z" />
      <path d="M4 22V7l1-2 1 2v15" />
      <path d="M18 22V7l1-2 1 2v15" />
      <path d="M2 22h20" />
      <path d="M10 22v-3a2 2 0 0 1 4 0v3" />
      <path d="M6 14h12" />
    </svg>
  );
}

function SharjahMonumentIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 5L7 8v10l5-3 5 3V8z" />
      <path d="M12 5v10" />
      <path d="M5 22h14" />
      <path d="M7 18v4" />
      <path d="M17 18v4" />
      <circle cx="12" cy="3" r="1" fill="currentColor" />
    </svg>
  );
}

function AjmanFortIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 22V9l2-2h4l2 2v13" />
      <path d="M12 11h8v11" />
      <path d="M4 7h1v2h2V7h2V5h2v4" />
      <path d="M12 11h2v-2h2v2h2v-2h2v2" />
      <path d="M6 22v-4a2 2 0 0 1 4 0v4" />
      <path d="M3 22h18" />
    </svg>
  );
}

function JebelJaisIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 21l7-13 4 7 2-3 5 9H3z" />
      <path d="M10 8l2 5" />
      <path d="M10 4h2v4h-2z" />
      <path d="M11 2v2" />
    </svg>
  );
}

function DhowIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 16c2 3 7 4 12 4 4 0 6-1 7-4H3z" />
      <path d="M11 4v12" />
      <path d="M6 6l5-2 6 8-6 4z" />
      <path d="M2 22c3 0 4-1 7-1s4 1 7 1 4-1 6-1" />
    </svg>
  );
}

function FujairahFortIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 22V8h4v14" />
      <path d="M16 22V8h4v14" />
      <path d="M3 8h6V5H7v1H5V5H3z" />
      <path d="M15 8h6V5h-2v1h-2V5h-2z" />
      <path d="M8 12h8v10H8z" />
      <path d="M10 22v-3a2 2 0 0 1 4 0v3" />
      <path d="M2 22h20" />
    </svg>
  );
}

function AlAinOasisIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 22V10l1-2h4l1 2v12" />
      <path d="M4 10h8" />
      <path d="M6 7V5h1v1h2V5h1v2" />
      <path d="M18 22v-9" />
      <path d="M18 13c-2-2-4-2-6-1" />
      <path d="M18 13c2-2 4-2 5-1" />
      <path d="M18 13c0-3-1-5-3-6" />
      <path d="M18 13c1-3 3-5 5-5" />
      <path d="M3 22h19" />
    </svg>
  );
}

// All main UAE cities with defining landmarks
const uaeCities = [
  {
    name: 'Dubai',
    landmark: 'Burj Khalifa',
    Icon: BurjKhalifaIcon,
  },
  {
    name: 'Abu Dhabi',
    landmark: 'Grand Mosque',
    Icon: GrandMosqueIcon,
  },
  {
    name: 'Sharjah',
    landmark: 'Cultural Monument',
    Icon: SharjahMonumentIcon,
  },
  {
    name: 'Ajman',
    landmark: 'Historic Fort',
    Icon: AjmanFortIcon,
  },
  {
    name: 'Ras Al Khaimah',
    landmark: 'Jebel Jais',
    Icon: JebelJaisIcon,
  },
  {
    name: 'Umm Al Quwain',
    landmark: 'Dhow Coast',
    Icon: DhowIcon,
  },
  {
    name: 'Fujairah',
    landmark: 'Fujairah Fort',
    Icon: FujairahFortIcon,
  },
  {
    name: 'Al Ain',
    landmark: 'Al Jahili Oasis',
    Icon: AlAinOasisIcon,
  },
];

export default function ServiceAreasSection() {
  const whatsappBookingUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    'Hello Airtronics! I would like to book your HVAC service now.'
  )}`;

  const whatsappEnergyAdUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    'Hello Airtronics! I would like to book an AC Energy Efficiency Inspection to reduce my electricity bills.'
  )}`;

  return (
    <section
      id="service-areas"
      aria-labelledby="service-areas-heading"
      className="py-20 sm:py-24 lg:py-28 bg-[#fcfcfc] border-b border-gray-100 overflow-hidden relative"
    >
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
        >
          {/* LEFT COLUMN: Service Areas Across All Main UAE Cities */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Standardized Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#005eb8] font-semibold" aria-hidden="true">/</span>
                <span className="text-sm md:text-base font-semibold tracking-wide text-gray-800 uppercase">
                  UAE-Wide Coverage
                </span>
              </div>

              {/* Section Heading */}
              <h2
                id="service-areas-heading"
                className="text-[28px] sm:text-[34px] md:text-[40px] font-medium tracking-tight text-[#111111] leading-[1.12] mb-3"
              >
                Serving All Main Cities Across the UAE
              </h2>

              {/* Subtitle */}
              <p className="text-[#666666] text-[15px] sm:text-base leading-relaxed mb-6 max-w-2xl">
                Certified HVAC repair, preventive AC maintenance, duct sanitization, and emergency cooling services dispatched rapidly to villas, apartments, and commercial facilities across all Emirates.
              </p>

              {/* UAE Cities Grid: Landmark Icon on Top, Name Below */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
                {uaeCities.map((city) => (
                  <div
                    key={city.name}
                    className="group bg-white border border-slate-200/90 hover:border-[#005eb8]/50 rounded-2xl p-3 sm:p-3.5 flex flex-col items-center text-center transition-all duration-200 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)] hover:shadow-md cursor-default"
                  >
                    {/* Top Row: Place Landmark Icon */}
                    <div className="w-11 h-11  group-hover:bg-[#005eb8]/10 text-[#005eb8] flex items-center justify-center mb-2 transition-colors">
                      <city.Icon className="w-7 h-7 text-[#005eb8]" />
                    </div>

                    {/* Name Below */}
                    <span className="font-semibold text-sm sm:text-base text-[#111111] leading-tight block">
                      {city.name}
                    </span>

                    {/* Landmark Tag */}
                    <span className="text-[11px] text-gray-400 mt-0.5 block truncate max-w-full">
                      {city.landmark}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct CTA: Book Your Service Now */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                href={whatsappBookingUrl}
                target="_blank"
                variant="primary"
                size="lg"
                aria-label="Book your service now on WhatsApp"
                iconRight={<ArrowRight className="w-4 h-4 ml-1 motion-reduce:hidden" aria-hidden="true" />}
              >
                <span>Book a Service</span>
              </Button>

              <Button
                href="tel:+971586596321"
                variant="secondary"
                size="lg"
                aria-label="Call Airtronics Dispatch Line"
                iconLeft={<PhoneCall className="w-4 h-4 mr-1 text-[#005eb8]" aria-hidden="true" />}
              >
                <span>+971 58 659 6321</span>
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN: Money CTA Styled Like An Advertisement (Compact Height) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative overflow-hidden rounded-[1px] bg-gradient-to-br from-[#0c1a30] via-[#091527] to-[#050b14] border border-blue-500/25 p-5 sm:p-6 text-white shadow-xl flex flex-col justify-between">
              
              {/* Subtle ambient lighting */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Standardized Eyebrow (No rounded corners, same amber color) */}
                <div className="flex items-center justify-between gap-2 mb-2.5 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-semibold" aria-hidden="true">/</span>
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-amber-300 uppercase">
                      Special Advisory • DEWA Savings
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold border border-white/10 px-1.5 py-0.5 rounded">
                    AD
                  </span>
                </div>

                {/* Ad Headline */}
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1.5 leading-snug relative z-10">
                  High AC Electricity Bills?
                </h3>
                
                <p className="text-xs text-gray-300 leading-relaxed mb-3 relative z-10">
                  Dirty cooling coils, failing capacitors, and refrigerant leaks cause your AC to consume up to <span className="text-amber-300 font-semibold">30% more power</span> during hot weather.
                </p>

                {/* Compact Visual Ad Banner with Floating Metric */}
                <div className="relative w-full h-32 sm:h-36 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-2">
                  <Image
                    src="/images/hvac-bill.png"
                    alt="High AC electricity bill and homeowner cooling savings"
                    fill
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-contain"
                  />

                  {/* Floating Metric Badge */}
                  <div className="absolute bottom-2 left-2 right-2 bg-[#0c1a30]/90 backdrop-blur-md border border-white/15 rounded-xl px-2.5 py-1.5 flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="leading-tight">
                        <span className="text-[11px] font-bold text-white block">Cut Monthly DEWA</span>
                        <span className="text-[10px] text-gray-300 block">Save AED 250–600 / mo</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-extrabold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">
                      -30%
                    </span>
                  </div>
                </div>

                {/* Key Ad Benefits */}
                <div className="space-y-1.5 mt-3 mb-4 relative z-10 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Complete thermodynamic amp-draw &amp; coil inspection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Municipality-approved certified HVAC technicians</span>
                  </div>
                </div>
              </div>

              {/* Ad Action Button */}
              <div className="relative z-10">
                <Button
                  href={whatsappEnergyAdUrl}
                  target="_blank"
                  variant="primary"
                  size="md"
                  fullWidth
                  className="shadow-md"
                  aria-label="Claim AC Bill Inspection on WhatsApp"
                  iconRight={<ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />}
                >
                  <span>Claim Bill Inspection Now</span>
                </Button>
                <p className="text-[11px] text-gray-400 text-center mt-2">
                  Available in all UAE cities • Zero hidden diagnostic charges
                </p>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
