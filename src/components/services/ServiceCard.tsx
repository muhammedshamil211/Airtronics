'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Wrench,
  Snowflake,
  ShieldCheck,
  Gauge,
  Droplets,
  Cpu,
  Fan,
  Flame,
  Wind,
  Layers,
  SlidersHorizontal,
  Scale,
  Server,
  Warehouse,
  Sparkles,
  TrendingUp,
  Building2,
  Compass,
  ArrowRight,
  CalendarCheck,
} from 'lucide-react';
import type { ServiceDetail } from '@/data/servicesData';

const WHATSAPP_PHONE = '971586596321';

const getWhatsAppDirectLink = (serviceName: string) => {
  const message = `Hello Airtronics Fixcare! I would like to order the "${serviceName}" service in Dubai. Please provide immediate technician availability and pricing.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

export const SERVICE_ICONS: Record<string, React.ElementType> = {
  'ac-installation': Snowflake,
  'ac-servicing': ShieldCheck,
  'refrigerant-gas': Gauge,
  'water-leakage-drainage': Droplets,
  'parts-replacement': Wrench,
  'vrf-vrv-systems': Cpu,
  'ahu-fahu-fcu': Fan,
  'chiller-systems': Flame,
  'ventilation-exhaust': Wind,
  'duct-fabrication-repair': Layers,
  'thermostat-bms-controls': SlidersHorizontal,
  'testing-balancing-commissioning': Scale,
  'server-room-cooling': Server,
  'commercial-refrigeration': Warehouse,
  'indoor-air-quality': Sparkles,
  'energy-efficiency-upgrades': TrendingUp,
  'packaged-rooftop-units': Building2,
  'hvac-design-consultancy': Compass,
  'ac-repair': Wrench,
  'hvac-maintenance': ShieldCheck,
  'duct-cleaning': Sparkles,
  'amc': CalendarCheck,
};

const CARD_IMAGE_OVERRIDES: Record<string, string> = {
  'ac-repair': '/images/ac_repair_split_glow.jpg',
  'ac-installation': '/images/ac_cassette_installation.jpg',
  'hvac-maintenance': '/images/services/chiller-systems.jpg',
};

export interface ServiceCardProps {
  service: ServiceDetail;
  className?: string;
}

export default function ServiceCard({ service, className = '' }: ServiceCardProps) {
  const router = useRouter();
  const IconComponent = SERVICE_ICONS[service.slug] || Wrench;
  const serviceName = service.shortTitle || service.title;
  const cardImage = CARD_IMAGE_OVERRIDES[service.slug] || service.image;

  const handleCardClick = () => {
    router.push(`/services/${service.slug}`);
  };

  const handleOrderClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(getWhatsAppDirectLink(serviceName), '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleCardClick}
      className={`group relative bg-white rounded-none border border-slate-200/80 overflow-hidden hover:border-[#0076FF] hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex flex-col cursor-pointer ${className}`}
    >
      {/* 1. Top Image Container with Smooth Bottom White Blend & Compact Aspect Ratio */}
      <div className="relative w-full aspect-[16/8.5] bg-slate-50 overflow-hidden">
        <Image
          src={cardImage}
          alt={`${serviceName} in Dubai - Airtronics`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Smooth white bottom gradient blend into the detail container */}
        <div className="absolute inset-x-0 bottom-0 h-14 sm:h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      {/* 2. Bottom Content: Icon (elevated into image) -> Title -> Order Service */}
      <div className="px-5 sm:px-6 pb-4 sm:pb-5 pt-0 flex flex-col flex-1 justify-between bg-white relative z-10">
        <div>
          {/* Icon Badge: elevated so it reaches up into the image area */}
          <div className="-mt-5 sm:-mt-6 mb-2 relative z-20">
            <div className="w-10 h-10 rounded-none [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] bg-white/95 backdrop-blur-xs text-[#0076FF] flex items-center justify-center border border-blue-100 group-hover:bg-[#0076FF] group-hover:text-white transition-all duration-300">
              <IconComponent className="w-5 h-5 [transform:skewX(10deg)] sm:[transform:skewX(14deg)]" strokeWidth={2} />
            </div>
          </div>

          {/* Title */}
          <h3 className="font-[family-name:var(--font-onest)] text-base sm:text-lg font-bold text-[#0f172a] tracking-tight leading-snug group-hover:text-[#0076FF] transition-colors duration-200 line-clamp-2">
            {serviceName}
          </h3>
        </div>

        {/* Action Link: Order Service -> */}
        <div className="pt-3.5 sm:pt-4 mt-auto">
          <button
            type="button"
            onClick={handleOrderClick}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0076FF] group-hover:gap-2.5 transition-all duration-200 cursor-pointer"
            aria-label={`Order ${serviceName} on WhatsApp`}
          >
            <span>Order Service</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

