'use client';

import React, { memo } from 'react';
import { Award, ShieldCheck } from 'lucide-react';

interface Brand {
  name: string;
  logo: React.ReactNode;
}

// 18 Major AC Brands Serviced in Dubai
const ALL_BRANDS: Brand[] = [
  {
    name: 'Daikin',
    logo: (
      <div className="flex items-center gap-2">
        <svg className="h-5 w-6 shrink-0" viewBox="0 0 36 28">
          <polygon points="2,26 18,2 34,26" fill="#0097E6" />
          <polygon points="10,26 18,12 26,26" fill="#ffffff" />
        </svg>
        <span className="font-extrabold tracking-wider text-xl text-[#0097E6]">DAIKIN</span>
      </div>
    ),
  },
  {
    name: 'O General',
    logo: (
      <div className="flex items-center gap-2">
        <span className="w-5 h-5 rounded-full border-[3.5px] border-[#E60012] shrink-0" />
        <span className="font-extrabold tracking-wide text-lg text-[#111111]">O&apos;GENERAL</span>
      </div>
    ),
  },
  {
    name: 'Mitsubishi Electric',
    logo: (
      <div className="flex items-center gap-2">
        <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="#E60012">
          <polygon points="16,3 23,15 9,15" />
          <polygon points="9,15 16,27 2,27" />
          <polygon points="23,15 30,27 16,27" />
        </svg>
        <div className="leading-tight text-left">
          <span className="block font-black text-xs text-[#111111] tracking-tight">MITSUBISHI</span>
          <span className="block font-bold text-[8px] tracking-widest text-[#E60012]">ELECTRIC</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Carrier',
    logo: (
      <div className="flex items-center gap-2">
        <span className="w-6 h-4.5 rounded-full bg-[#00529B] text-white italic font-serif font-bold text-xs flex items-center justify-center shrink-0">C</span>
        <span className="font-black text-xl tracking-tight text-[#00529B]">Carrier</span>
      </div>
    ),
  },
  {
    name: 'York',
    logo: (
      <div className="flex items-center gap-1.5">
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="#E31837">
          <polygon points="10,2 20,18 0,18" />
        </svg>
        <span className="font-black text-xl tracking-wider text-[#111111]">YORK</span>
      </div>
    ),
  },
  {
    name: 'Trane',
    logo: (
      <div className="flex items-center gap-2">
        <span className="w-5 h-5 rounded-full bg-[#E53935] text-white font-bold text-xs flex items-center justify-center shrink-0">+</span>
        <span className="font-black text-xl tracking-wider text-[#111111]">TRANE</span>
      </div>
    ),
  },
  {
    name: 'LG',
    logo: (
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 28 28">
          <circle cx="14" cy="14" r="13" fill="#A50034" />
          <circle cx="10" cy="10" r="1.5" fill="#ffffff" />
          <path d="M 10 14 L 17 14 L 17 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 21 9 A 8 8 0 1 0 21 19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
        <span className="font-black text-2xl tracking-wide text-[#111111]">LG</span>
      </div>
    ),
  },
  {
    name: 'Gree',
    logo: <span className="font-black text-2xl tracking-wider text-[#0080C6]">GREE</span>,
  },
  {
    name: 'Rheem',
    logo: (
      <div className="flex items-center gap-1.5">
        <span className="w-5 h-5 rounded-full bg-[#D32F2F] text-white font-serif font-bold text-xs flex items-center justify-center shrink-0">R</span>
        <span className="font-extrabold text-xl tracking-tight text-[#D32F2F]">Rheem</span>
      </div>
    ),
  },
  {
    name: 'Samsung',
    logo: <span className="font-black text-xl tracking-[0.14em] text-[#1428A0]">SAMSUNG</span>,
  },
  {
    name: 'Panasonic',
    logo: <span className="font-bold text-xl tracking-tight text-[#0041C0]">Panasonic</span>,
  },
  {
    name: 'Toshiba',
    logo: <span className="font-black text-xl tracking-wider text-[#E60012]">TOSHIBA</span>,
  },
  {
    name: 'SKM',
    logo: (
      <div className="leading-tight text-left">
        <span className="block font-black text-xl tracking-wider text-[#D32F2F]">SKM</span>
        <span className="block text-[7px] font-bold tracking-widest text-gray-500 uppercase">Air Conditioning</span>
      </div>
    ),
  },
  {
    name: 'Midea',
    logo: (
      <div className="flex items-center gap-1.5">
        <span className="w-5 h-5 rounded-full bg-[#0092D0] text-white font-bold text-xs flex items-center justify-center shrink-0">m</span>
        <span className="font-black text-xl tracking-tight text-[#0092D0]">Midea</span>
      </div>
    ),
  },
  {
    name: 'Voltas',
    logo: <span className="font-black text-xl tracking-wider text-[#005BAA]">VOLTAS</span>,
  },
  {
    name: 'Blue Star',
    logo: (
      <div className="flex items-center gap-1.5">
        <svg className="w-4 h-4 text-[#005EB8] shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <polygon points="12,2 15,8 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,8" />
        </svg>
        <span className="font-extrabold text-lg tracking-wide text-[#005EB8]">BLUE STAR</span>
      </div>
    ),
  },
  {
    name: 'Hitachi',
    logo: <span className="font-black text-xl tracking-wider text-[#E60012]">HITACHI</span>,
  },
  {
    name: 'Lennox',
    logo: <span className="font-black text-xl tracking-tight text-[#D32F2F]">LENNOX</span>,
  },
];

// Reusable Infinite Marquee Row Component
export const MarqueeRow = memo(({ 
  brands, 
  reverse = false, 
  className = '' 
}: { 
  brands: Brand[]; 
  reverse?: boolean; 
  className?: string; 
}) => {
  const triplicated = [...brands, ...brands, ...brands];
  return (
    <div
      className={`flex w-max ${
        reverse ? 'animate-marquee-row-reverse' : 'animate-marquee-row'
      } hover:[animation-play-state:paused] ${className}`}
    >
      {triplicated.map((brand, idx) => (
        <div
          key={`${brand.name}-${idx}`}
          className="flex items-center mx-5 sm:mx-8 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer shrink-0"
          title={`${brand.name} AC Repair & Maintenance Dubai`}
        >
          {brand.logo}
        </div>
      ))}
    </div>
  );
});
MarqueeRow.displayName = 'MarqueeRow';

interface BrandsSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function BrandsSection({
  eyebrow = 'Multi-Brand Engineering Authority',
  title = 'AC Brands We Service Across Dubai',
  subtitle = 'Factory-grade diagnostics, certified technician repairs, and 100% genuine OEM replacement parts for all residential and commercial cooling units.',
  className = '',
}: BrandsSectionProps) {
  const half = Math.ceil(ALL_BRANDS.length / 2);
  const row1 = ALL_BRANDS.slice(0, half);
  const row2 = ALL_BRANDS.slice(half);

  return (
    <section 
      aria-label="AC Brands We Service in Dubai"
      className={`py-10 md:py-14 bg-[#fcfcfc] border-b border-gray-100 overflow-hidden relative ${className}`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 mb-6 sm:mb-8 text-center">
        {eyebrow && (
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase font-bold tracking-widest text-[#005eb8] mb-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{eyebrow}</span>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111111] leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-500 text-xs sm:text-sm mt-1 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* 2-Row Continuous Frameless Marquee */}
      <div className="relative w-full overflow-hidden select-none py-1">
        {/* Subtle Edge Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-14 sm:w-28 bg-gradient-to-r from-[#fcfcfc] via-[#fcfcfc]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-14 sm:w-28 bg-gradient-to-l from-[#fcfcfc] via-[#fcfcfc]/80 to-transparent z-10" />

        {/* Row 1 (Forward) */}
        <MarqueeRow brands={row1} className="mb-3.5 sm:mb-4.5" />

        {/* Row 2 (Reverse) */}
        <MarqueeRow brands={row2} reverse />
      </div>

      {/* Verification Subtext */}
      <div className="mt-6 text-center">
        <p className="text-[11px] text-gray-400 font-medium inline-flex items-center gap-1.5">
          <Award className="w-3.5 h-3.5 text-[#005eb8]" />
          <span>All trademarks, brand logos, and model names belong to their respective manufacturers.</span>
        </p>
      </div>
    </section>
  );
}
