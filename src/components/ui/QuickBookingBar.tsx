'use client';

import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import Button from '@/components/ui/Button';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: defaultService,
    subCategory: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isRedirecting, setIsRedirecting] = useState(false);

  const selectedService = SERVICES_DATA.find(
    (s) => s.shortTitle === formData.service || s.title === formData.service || s.slug === formData.service
  );

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    // 1. Name is required
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Minimum 2 characters required';
    }

    // 2. Email is optional; only validate format if provided
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    // 3. Service is required
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsRedirecting(true);

    const name = formData.name.trim();
    const email = formData.email.trim();
    const serviceName = formData.subCategory
      ? `${formData.service} - ${formData.subCategory}`
      : formData.service;

    // Compose concise, professional WhatsApp message
    let message = `Hello Airtronics Fixcare! I would like to book an AC service in Dubai.\n\n`;
    message += `👤 Name: ${name}\n`;
    if (email) {
      message += `✉️ Email: ${email}\n`;
    }
    message += `🔧 Service: ${serviceName}\n\n`;
    message += `Please confirm technician availability and arrival time.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

    // Directly open WhatsApp
    const opened = window.open(whatsappUrl, '_blank');
    if (!opened || opened.closed || typeof opened.closed === 'undefined') {
      window.location.href = whatsappUrl;
    }

    setTimeout(() => {
      setIsRedirecting(false);
    }, 2500);
  };

  const formContent = (
    <div className={`w-full max-w-[1200px] mx-auto ${className}`}>
      {/* SEO-Friendly Semantic Heading & Context */}
      <div className="text-center sm:text-left mb-4 sm:mb-5">
        <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold tracking-tight text-[#111111] leading-snug">
          Fast AC Repair &amp; 24/7 HVAC Service Booking in Dubai
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-2xl font-normal">
          Instant WhatsApp dispatch with certified technicians serving Downtown, Dubai Marina, Jumeirah, Business Bay, and all UAE districts.
        </p>
      </div>

      {/* Minimal, Increased-Height Single-Row Form (No Icons, No Labels, Placeholders Only) */}
      <form
        onSubmit={handleSubmit}
        noValidate
        aria-label="Direct WhatsApp HVAC Service Booking"
        className="bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:border-slate-300 transition-colors duration-200 p-3 sm:p-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row items-center gap-2.5 sm:gap-3">

          {/* 1. Client Name (Required) */}
          <div className="flex-1 min-w-0 w-full relative">
            <input
              id="qb-name"
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: '' });
              }}
              placeholder="Your Name *"
              aria-label="Your Name"
              className={`w-full h-12 sm:h-14 px-4 bg-gray-50/70 border ${errors.name ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-[#005eb8]'
                } rounded-md text-sm sm:text-base text-[#111111] placeholder:text-gray-400 focus:outline-none focus:bg-white transition-colors`}
              required
            />
            {errors.name && (
              <span className="text-[11px] text-red-500 font-medium px-1 mt-1 block truncate">
                {errors.name}
              </span>
            )}
          </div>

          {/* 2. Email Address (Optional, validated only if provided) */}
          <div className="flex-1 min-w-0 w-full relative">
            <input
              id="qb-email"
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
              placeholder="Email Address (Optional)"
              aria-label="Email Address (Optional)"
              className={`w-full h-12 sm:h-14 px-4 bg-gray-50/70 border ${errors.email ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-[#005eb8]'
                } rounded-md text-sm sm:text-base text-[#111111] placeholder:text-gray-400 focus:outline-none focus:bg-white transition-colors`}
            />
            {errors.email && (
              <span className="text-[11px] text-red-500 font-medium px-1 mt-1 block truncate">
                {errors.email}
              </span>
            )}
          </div>

          {/* 3. Select HVAC Service (Required) */}
          <div className="flex-[1.2] min-w-0 w-full relative">
            <div className="relative">
              <select
                id="qb-service"
                value={formData.service}
                onChange={(e) => {
                  setFormData({ ...formData, service: e.target.value, subCategory: '' });
                  if (errors.service) setErrors({ ...errors, service: '' });
                }}
                aria-label="Select HVAC Service"
                className={`w-full h-12 sm:h-14 pl-4 pr-10 bg-gray-50/70 border ${errors.service ? 'border-red-400 bg-red-50/20' : 'border-gray-200 focus:border-[#005eb8]'
                  } rounded-md text-sm sm:text-base focus:outline-none focus:bg-white transition-colors appearance-none cursor-pointer truncate ${!formData.service ? 'text-gray-400' : 'text-[#111111]'
                  }`}
                required
              >
                <option value="" disabled>Select HVAC Service *</option>
                {SERVICES_DATA.map((srv) => (
                  <option key={srv.slug} value={srv.shortTitle}>
                    {srv.shortTitle}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            {errors.service && (
              <span className="text-[11px] text-red-500 font-medium px-1 mt-1 block truncate">
                {errors.service}
              </span>
            )}

            {/* Optional Sub-Category Field: Appears only when a main service with subcategories is selected */}
            {selectedService?.subcategories && selectedService.subcategories.length > 0 && (
              <div className="relative mt-2 animate-in fade-in duration-200">
                <select
                  id="qb-subcategory"
                  value={formData.subCategory}
                  onChange={(e) => setFormData({ ...formData, subCategory: e.target.value })}
                  aria-label="Select Specific Sub-Category (Optional)"
                  className="w-full h-10 sm:h-11 pl-3.5 pr-8 bg-blue-50/50 border border-blue-200 focus:border-[#005eb8] rounded-md text-xs sm:text-sm focus:outline-none focus:bg-white transition-colors appearance-none cursor-pointer text-[#111111] truncate"
                >
                  <option value="">Specific Sub-Scope (Optional - General Inspection Included)</option>
                  {selectedService.subcategories.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#005eb8]/70 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            )}
          </div>

          {/* 4. Direct WhatsApp Submit Button */}
          <div className="sm:col-span-2 lg:col-span-1 lg:flex-shrink-0 w-full lg:w-auto">
            <Button
              type="submit"
              disabled={isRedirecting}
              variant="primary"
              size="lg"
              className="w-full lg:w-auto min-w-[190px] !h-12 sm:!h-14"
              iconLeft={
                !isRedirecting && (
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                )
              }
            >
              {isRedirecting ? (
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Opening WhatsApp...</span>
                </span>
              ) : (
                <span>Book on WhatsApp</span>
              )}
            </Button>
          </div>

        </div>
      </form>
    </div>
  );

  if (!showSectionWrapper) {
    return formContent;
  }

  return (
    <section
      aria-label="Direct WhatsApp HVAC Service Booking"
      className="relative z-30 px-4 sm:px-6 md:px-8 py-5 sm:py-8"
    >
      {formContent}
    </section>
  );
}
