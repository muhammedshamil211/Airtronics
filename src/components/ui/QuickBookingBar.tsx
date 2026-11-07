'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { User, Phone, Settings, ChevronDown, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '@/data/servicesData';

export interface QuickBookingBarProps {
  className?: string;
  defaultService?: string;
  showSectionWrapper?: boolean;
}

const WHATSAPP_PHONE = '971586596321';

export default function QuickBookingBar({
  className = '',
  defaultService = '',
  showSectionWrapper = true,
}: QuickBookingBarProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMessage('Please enter your name and mobile number.');
      return;
    }

    setErrorMessage('');
    setIsSubmitted(true);

    const selectedService = service || 'General AC Repair & HVAC Service';
    const message = `Hello Airtronics Fixcare! I would like to book an AC service in Dubai:
• Name: ${name.trim()}
• Mobile Number: ${phone.trim()}
• Requested Service: ${selectedService}
Please confirm technician availability and arrival time.`;

    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      const opened = window.open(waUrl, '_blank', 'noopener,noreferrer');
      if (!opened || opened.closed || typeof opened.closed === 'undefined') {
        window.location.href = waUrl;
      }
      setIsSubmitted(false);
    }, 600);
  };

  const content = (
    <div className={`relative w-full overflow-hidden ${className}`}>
      
      {/* 1. Background Watermark "HVAC" - Top Left */}
      <div
        className="absolute -top-2 xs:-top-4 sm:-top-6 md:-top-8 lg:-top-8 left-0 sm:left-1 pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-[family-name:var(--font-onest)] text-[90px] xs:text-[1100px] sm:text-[160px] md:text-[170px] lg:text-[190px] xl:text-[200px] font-black text-slate-900/[0.04] leading-none tracking-tight block">
          Booking
        </span>
      </div>

      {/* 2. Top Row: Heading Block on Left + 3D Diffuser in the Foreground on Right */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-4 lg:gap-6 mb-2 sm:mb-2.5">
        
        {/* Left Side: Eyebrow, Heading & Description */}
        <div className="flex-1 max-w-3xl">
          {/* Eyebrow with Cyan Accent Line */}
          <div className="flex items-center gap-2 mb-1">
            <span className="w-6 sm:w-8 h-[2px] bg-[#0076FF] rounded-full inline-block" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.14em] text-[#0076FF] uppercase">
              SERVICE BOOKING
            </span>
          </div>

          {/* Main Section Headline - Tight Tracking & Same Clean Modern Font */}
          <h2 className="font-[family-name:var(--font-onest)] text-2xl xs:text-3xl sm:text-4xl lg:text-[38px] xl:text-[42px] font-bold text-[#0f172a] tracking-[-0.03em] sm:tracking-[-0.035em] leading-[1.12] mb-1 sm:mb-1.5">
            Fast AC Repair &amp; 24/7 HVAC Service Booking in Dubai
          </h2>

          {/* Subtitle Description */}
          <p className="font-[family-name:var(--font-onest)] text-xs sm:text-sm md:text-[15px] text-slate-600 font-normal leading-relaxed max-w-2xl tracking-normal">
            Book professional AC repair, maintenance and HVAC services for homes, offices and commercial properties across Dubai.
          </p>
        </div>

        {/* Right Side: 3D Circular Ceiling Air Diffuser in Foreground in the Heading Row */}
        <div className="shrink-0 flex flex-col items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative w-36 xs:w-44 sm:w-52 md:w-60 lg:w-68 xl:w-76 aspect-square flex items-center justify-center shrink-0"
          >
            <Image
              src="/images/White Circular Ceiling Air Diffuser.webp"
              alt="Circular Ceiling Air Diffuser HVAC Dubai"
              fill
              sizes="(max-width: 640px) 180px, (max-width: 1024px) 260px, 320px"
              priority
              className="object-contain drop-shadow-md select-none"
            />
          </motion.div>
          {/* Soft Radial Contact Shadow */}
          <div className="w-[80%] h-2.5 sm:h-3.5 mx-auto bg-black/15 rounded-[100%] blur-[5px] sm:blur-[6px] -mt-8 sm:-mt-7 pointer-events-none select-none" />
        </div>

      </div>

      {/* 3. Bottom Row: 4-Column Booking Form (75% Width Aligned Left, Compact Fields & Snug Gaps) */}
      <div className="relative z-10 w-full lg:w-[85%] xl:w-[85%] mr-auto">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-1 md:gap-1.5 w-full">
            
            {/* Field 1: Your Name */}
            <div className="relative flex items-center">
              <User className="absolute left-3 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                required
                className="w-full pl-8.5 pr-2.5 py-3 sm:py-3.5 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0076FF] focus:ring-2 focus:ring-[#0076FF]/15 transition-all shadow-xs"
              />
            </div>

            {/* Field 2: Mobile Number */}
            <div className="relative flex items-center">
              <Phone className="absolute left-3 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                required
                className="w-full pl-8.5 pr-2.5 py-3 sm:py-3.5 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0076FF] focus:ring-2 focus:ring-[#0076FF]/15 transition-all shadow-xs"
              />
            </div>

            {/* Field 3: Select a Service */}
            <div className="relative flex items-center">
              <Settings className="absolute left-3 w-5 h-5 text-slate-400 pointer-events-none" />
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full pl-8.5 pr-7 py-3 sm:py-3.5 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-700 focus:outline-none focus:border-[#0076FF] focus:ring-2 focus:ring-[#0076FF]/15 transition-all appearance-none cursor-pointer shadow-xs"
              >
                <option value="">Select a Service</option>
                {SERVICES_DATA.map((srv) => (
                  <option key={srv.slug} value={srv.shortTitle || srv.title}>
                    {srv.shortTitle || srv.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            </div>

            {/* Field 4: Submit Button */}
            <button
              type="submit"
              disabled={isSubmitted}
              className="w-full flex items-center justify-center gap-1.5 bg-[#0076FF] hover:bg-[#0066de] text-white text-xs sm:text-sm font-semibold py-2 sm:py-2.5 px-4 rounded-lg transition-all shadow-md shadow-blue-500/20 active:scale-[0.98] cursor-pointer disabled:opacity-75 whitespace-nowrap"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 animate-bounce" />
                  <span>Connecting...</span>
                </>
              ) : (
                <>
                  <Calendar className="w-3.5 h-3.5 shrink-0" />
                  <span>Book Service Today</span>
                </>
              )}
            </button>
          </div>

          {errorMessage && (
            <p className="text-xs text-red-500 font-medium mt-1.5 pl-1">
              {errorMessage}
            </p>
          )}
        </form>
      </div>

    </div>
  );

  if (!showSectionWrapper) {
    return content;
  }

  return (
    <section
      aria-label="Service Booking"
      className="relative z-30 w-full bg-white py-6 sm:py-8 md:py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {content}
      </div>
    </section>
  );
}
