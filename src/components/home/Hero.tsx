'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Zap, 
  ShieldCheck, 
  Settings, 
  Headphones, 
  Phone, 
  ArrowRight, 
  Check, 
  Clock, 
  MapPin, 
  Users, 
  Building2 
} from 'lucide-react';
import { motion } from 'framer-motion';
import WhatsAppBookingModal from '@/components/ui/WhatsAppBookingModal';

// Reusable Static Configuration Data
const FEATURE_BADGES = [
  { icon: Zap, title: '30–45 Min', subtitle: 'Emergency Response', fill: true },
  { icon: ShieldCheck, title: 'Certified', subtitle: 'Engineers' },
  { icon: Settings, title: '100% OEM', subtitle: 'Parts' },
  { icon: Headphones, title: '24/7', subtitle: 'Support' },
];

const FLOATING_SKY_BADGES = [
  { icon: Clock, title: '30–45 Min', subtitle: 'Response Time', pos: 'top-5 xl:top-6 right-[31%] xl:right-[34%]' },
  { icon: Settings, title: '100%', subtitle: 'OEM Parts', pos: 'top-[33%] xl:top-[35%] right-[33%] xl:right-[36%]' },
  { icon: Headphones, title: '24/7', subtitle: 'Emergency Support', pos: 'top-[57%] xl:top-[59%] right-[31%] xl:right-[34%]' },
];

const STATS_DATA = [
  { icon: Users, value: '1,000+', label: 'AC Units Serviced' },
  { icon: Clock, value: '30–45 Min', label: 'Average Response', border: true },
  { icon: ShieldCheck, value: '100%', label: 'Customer Satisfaction', mdBorder: true },
  { icon: Building2, value: 'Residential & Commercial', label: 'Across Dubai', border: true, isText: true },
];

const WHATSAPP_PHONE = '971586596321';

const getWhatsAppServiceLink = (serviceName: string) => {
  const message = `Hello Airtronics Fixcare! I would like to book the ${serviceName} service in Dubai. Please provide availability and pricing.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

const SECONDARY_SERVICES = [
  {
    id: '02',
    title: 'AC Installation',
    desc: 'Professional AC installation for villas, apartments and commercial spaces.',
    image: '/images/ac_cassette_installation.jpg',
    service: 'AC Installation',
  },
  {
    id: '03',
    title: 'HVAC Maintenance',
    desc: 'Keep your system running efficiently with preventive maintenance plans.',
    image: '/images/hvac_maintenance_technician.jpg',
    service: 'HVAC Maintenance',
  },
  {
    id: '04',
    title: 'Duct Cleaning',
    desc: 'Improve air quality with professional duct cleaning services.',
    image: '/images/duct_cleaning_interior_brush.jpg',
    service: 'AC Duct Cleaning',
  },
  {
    id: '05',
    title: 'Annual Maintenance Contracts (AMC)',
    desc: 'Customized AMC plans for homes, businesses and large facilities.',
    image: '/images/amc_plan_checklist.jpg',
    service: 'Annual Maintenance Contract (AMC)',
  },
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('AC Repair Dubai');

  const openBooking = (serviceName = 'AC Repair Dubai') => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <section aria-label="HVAC and AC Repair Services Hero" className="relative bg-white overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. TOP HERO BANNER (Full-Bleed Right Background with Angled Blend)       */}
      {/* ========================================================================= */}
      <div className="relative w-full max-w-[1200px] mx-auto border-b border-gray-100/80 bg-white min-h-[calc(100svh-68px)] sm:min-h-[calc(100dvh-72px)] lg:min-h-[calc(100vh-76px)] flex flex-col justify-start sm:justify-center">
        
        {/* Right Background Layer */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] xl:w-[56%] h-full z-0 overflow-hidden pointer-events-none">
          <Image
            src="/images/hero_technician_dubai.jpg"
            alt="Airtronics HVAC Technician with Dubai skyline and Burj Khalifa"
            fill
            priority
            quality={92}
            className="object-cover object-[75%_center] lg:object-center"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />

          {/* Mobile Screen White Overlay for crystal-clear readability on small screens */}
          <div className="absolute inset-0 bg-white/85 sm:bg-white/80 md:bg-white/70 lg:hidden z-10" />

          {/* Left Gradient Fade Mask (Desktop) */}
          <div className="absolute inset-y-0 left-0 w-36 sm:w-56 lg:w-72 bg-gradient-to-r from-white via-white/85 to-transparent z-10 hidden lg:block" />

          {/* Angled Chevron Transition Layer */}
          <svg 
            className="absolute -left-1 top-0 bottom-0 h-full w-28 sm:w-36 text-white fill-current pointer-events-none hidden lg:block z-10"
            viewBox="0 0 100 500" 
            preserveAspectRatio="none"
          >
            <path d="M 0,0 L 35,0 L 80,250 L 35,500 L 0,500 Z" fill="#ffffff" />
            <path d="M 35,0 L 45,0 L 90,250 L 45,500 L 35,500 L 80,250 Z" fill="#eaf4ff" opacity="0.65" />
          </svg>
        </div>

        {/* Floating Badges Over Sky (Smooth Staggered Entry & Soft Hover) */}
        {FLOATING_SKY_BADGES.map((b, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 + idx * 0.1, ease: 'easeOut' }}
            whileHover={{ scale: 1.04, y: -2 }}
            className={`hidden lg:flex absolute ${b.pos} z-20 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm hover:shadow-md rounded-xl py-1.5 px-3 items-center gap-2 cursor-pointer transition-shadow`}
          >
            <div className="w-6 h-6 rounded-full bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100">
              <b.icon className="w-3.5 h-3.5" />
            </div>
            <div className="leading-tight">
              <span className="block font-bold text-[11px] text-[#111111]">{b.title}</span>
              <span className="block text-[9px] text-gray-500 font-medium">{b.subtitle}</span>
            </div>
          </motion.div>
        ))}

        {/* Floating Badge: Dubai-Wide Coverage (Hidden on Mobile Screens, Visible on sm+) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
          whileHover={{ scale: 1.03, y: -2 }}
          className="hidden sm:flex absolute sm:bottom-6 sm:right-6 lg:right-10 z-20 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-md hover:shadow-xl rounded-xl py-2 px-3.5 sm:px-4 text-white items-center gap-2.5 cursor-pointer transition-shadow"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0070f3] text-white flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4 fill-white" />
          </div>
          <div className="leading-tight">
            <span className="block font-bold text-xs sm:text-sm text-white">Dubai-Wide Coverage</span>
            <span className="block text-xs text-gray-300">Homes • Offices • Villas • Commercial</span>
          </div>
        </motion.div>

        {/* Foreground Content (Left Column) */}
        <div className="relative z-20 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 pt-4 pb-8 sm:py-10 lg:py-14 w-full flex-1 flex items-start sm:items-center">
          <div className="w-full lg:w-[48%] xl:w-[46%]">
            
            {/* Eyebrow */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex items-center gap-2 text-xs sm:text-xs md:text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 sm:mb-4"
            >
              <span className="text-[#005eb8] font-black text-sm">/</span>
              <span>TOP-RATED AC &amp; HVAC COMPANY IN DUBAI</span>
            </motion.div>

            {/* Main Headline (H1) - Preserved original font-medium style with increased responsive size */}
            <motion.h1 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
              className="text-4xl xs:text-[40px] sm:text-[44px] md:text-5xl lg:text-[52px] font-medium tracking-tight text-[#111111] leading-[1.08] mb-4 sm:mb-5 lg:mb-6"
            >
              Fast AC Repair &amp;<br className="hidden sm:inline" /> HVAC Services <span className="text-[#005eb8]">in Dubai</span>
            </motion.h1>

            {/* Subtitle - Preserved original font style with increased responsive size */}
            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16, ease: 'easeOut' }}
              className="text-gray-600 text-sm sm:text-[15px] md:text-base leading-relaxed max-w-xl mb-6 sm:mb-7 lg:mb-8"
            >
              Professional installation, reliable repair, preventive maintenance and deep duct cleaning for residential and commercial properties. Trusted by homes, businesses and facility managers across Dubai.
            </motion.p>

            {/* 4 Feature Items (Smooth Staggered Entrance, No Card Styling) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 mb-6 sm:mb-8 lg:mb-9 max-w-xl">
              {FEATURE_BADGES.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.22 + idx * 0.05, ease: 'easeOut' }}
                  className="flex items-center gap-2.5 group/feat"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100 transition-transform group-hover/feat:scale-110">
                    <item.icon className={`w-4 h-4 ${item.fill ? 'fill-[#005eb8]' : ''}`} />
                  </div>
                  <div className="leading-tight">
                    <span className="block font-bold text-[13px] sm:text-sm text-[#111111]">{item.title}</span>
                    <span className="block text-[11px] sm:text-xs text-gray-500 font-medium">{item.subtitle}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Action Buttons (Single line, no line break, smooth hover/tap) */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.38, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-6 sm:mb-7 lg:mb-8"
            >
              <motion.button
                onClick={() => openBooking('AC Repair Dubai')}
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 xs:gap-2.5 bg-[#008f4c] hover:bg-[#007a3f] text-white text-[13px] xs:text-sm sm:text-base font-bold px-4 xs:px-5 sm:px-6 py-3 sm:py-3.5 rounded-full transition-colors shadow-md shadow-[#008f4c]/20 group whitespace-nowrap shrink-0"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 xs:w-5 xs:h-5 fill-current shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="whitespace-nowrap">Book AC Service on WhatsApp</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
              </motion.button>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="shrink-0">
                <Link
                  href="tel:+971586596321"
                  className="flex items-center justify-center gap-2.5 bg-white hover:bg-blue-50/50 text-[#111111] border-2 border-[#005eb8] rounded-full px-4 xs:px-5 py-2.5 sm:py-3 transition-colors shadow-sm whitespace-nowrap"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#005eb8] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-white" />
                  </div>
                  <div className="leading-tight text-left">
                    <span className="block text-[10px] sm:text-xs text-gray-500 font-medium whitespace-nowrap">Call Emergency Team</span>
                    <span className="block text-sm sm:text-base font-bold text-[#111111] whitespace-nowrap">+971 58 659 6321</span>
                  </div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Checklist */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.48 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2.5 sm:gap-x-5 text-xs sm:text-sm text-gray-600 font-medium"
            >
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <Check className="w-4 h-4 text-[#008f4c] stroke-[2.5]" />
                <span>Residential &amp; Commercial</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <Check className="w-4 h-4 text-[#008f4c] stroke-[2.5]" />
                <span>All Major AC Brands</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1.5 whitespace-nowrap">
                <Check className="w-4 h-4 text-[#008f4c] stroke-[2.5]" />
                <span>Transparent Pricing</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. STATS BAR (4 Pillars, Scroll Reveal)                                  */}
      {/* ========================================================================= */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 pt-2 sm:pt-3 pb-2">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3  p-3.5 sm:p-4 shadow-2xs"
        >
          {STATS_DATA.map((st, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-2.5 px-2 ${st.border ? 'border-l-0 sm:border-l border-slate-200/80' : ''} ${st.mdBorder ? 'border-l-0 md:border-l border-slate-200/80' : ''}`}
            >
              <div className="w-9 h-9 rounded-full bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100">
                <st.icon className="w-4.5 h-4.5" />
              </div>
              <div className="leading-tight">
                <span className={`block ${st.isText ? 'text-sm sm:text-base' : 'text-xl sm:text-2xl'} font-bold tracking-tight text-[#111111]`}>
                  {st.value}
                </span>
                <span className="block text-xs sm:text-sm text-gray-500">{st.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* 3. BENTO SERVICES (Card 01 + Compact Reusable 2x2 Grid with Smooth Lift)  */}
      {/* ========================================================================= */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 pb-10 pt-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-3.5">

          {/* CARD 01: AC Repair */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -3 }}
            className="lg:col-span-5 bg-[#08152c] rounded-2xl p-4 sm:p-6 text-white relative overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[320px] shadow-sm hover:shadow-lg transition-all group"
          >
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/ac_repair_split_glow.jpg"
                alt="Airtronics AC Repair"
                fill
                priority
                className="object-cover object-right opacity-85 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#08152c] via-[#08152c]/90 to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-400 font-bold text-xs sm:text-sm">01</span>
                <span className="bg-[#0070f3] text-white text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-2">
                AC Repair
              </h2>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-[280px]">
                Quick and reliable AC repair for all major brands. Get your cooling system back to peak performance.
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <a
                href={getWhatsAppServiceLink('AC Repair')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm sm:text-base font-bold text-white hover:text-blue-300 transition-colors group/btn"
              >
                <div className="w-8 h-8 rounded-full bg-white text-[#005eb8] flex items-center justify-center transition-transform group-hover/btn:scale-110">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <span>Book Now</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT 2x2 GRID */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {SECONDARY_SERVICES.map((s, idx) => (
              <motion.div 
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.45, delay: idx * 0.07, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-4.5 relative overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all group min-h-[155px] sm:min-h-[160px]"
              >
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover object-right opacity-80 group-hover:opacity-95 transition-all duration-500 group-hover:scale-105"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 sm:via-white/75 to-transparent pointer-events-none" />
                </div>

                <div className="relative z-10">
                  <span className="text-gray-400 font-bold text-xs sm:text-sm block mb-1">{s.id}</span>
                  <h3 className="text-base sm:text-lg font-bold text-[#111111] mb-1">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-normal max-w-[220px] sm:max-w-[260px]">
                    {s.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-3">
                  <a
                    href={getWhatsAppServiceLink(s.service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#111111] hover:text-[#005eb8] transition-colors group/btn whitespace-nowrap"
                  >
                    <div className="w-7 h-7 rounded-full bg-white shadow-xs border border-slate-200 text-[#005eb8] flex items-center justify-center transition-transform group-hover/btn:scale-110">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <span>Book Now</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* WhatsApp Booking Modal */}
      <WhatsAppBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={selectedService}
      />
    </section>
  );
}