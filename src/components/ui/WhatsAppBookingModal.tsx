'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, MessageCircle, Calendar, MapPin, Wrench, User, Phone } from 'lucide-react';
import { SERVICES_DATA } from '@/data/servicesData';

export interface WhatsAppBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultLocation?: string;
  title?: string;
  subtitle?: string;
}

export default function WhatsAppBookingModal({
  isOpen,
  onClose,
  defaultService = 'AC Repair Dubai',
  defaultLocation = '',
  title = 'Book AC Service on WhatsApp',
  subtitle = 'Instant Dispatch & Direct Response from Senior HVAC Engineer',
}: WhatsAppBookingModalProps) {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultService,
    subCategory: '',
    location: defaultLocation,
    date: '',
    details: '',
  });

  const selectedService = SERVICES_DATA.find(
    (s) => s.shortTitle === formData.service || s.title === formData.service || s.slug === formData.service
  );

  const [prevProps, setPrevProps] = useState({ defaultService, defaultLocation });

  if (defaultService !== prevProps.defaultService || defaultLocation !== prevProps.defaultLocation) {
    setPrevProps({ defaultService, defaultLocation });
    setFormData((prev) => ({
      ...prev,
      service: defaultService || prev.service,
      location: defaultLocation || prev.location,
    }));
  }

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hello Airtronics Fixcare! I would like to book an AC service in Dubai.\n`;
    text += `\n👤 Name: ${formData.name}`;
    if (formData.phone) text += `\n📞 Phone: ${formData.phone}`;
    const serviceName = formData.subCategory
      ? `${formData.service} (${formData.subCategory})`
      : formData.service;
    text += `\n🔧 Service: ${serviceName}`;
    if (formData.location) text += `\n📍 Location: ${formData.location}`;
    if (showMoreDetails) {
      if (formData.date) text += `\n📅 Preferred Date: ${formData.date}`;
      if (formData.details) text += `\n📝 Notes: ${formData.details}`;
    }

    const whatsappNumber = '971586596321';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-[460px] bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#fcfcfc] border-b border-gray-100 px-6 py-5 flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#111111]">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  {subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close booking modal"
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleWhatsAppSubmit} className="p-5 sm:p-6 space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#005eb8]" />
                  Your Good Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g., Mohammed / Sarah"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 text-[#111111] text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#005eb8]/30 focus:border-[#005eb8] transition-all"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#005eb8]" />
                  Mobile Number / WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+971 50 XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 text-[#111111] text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#005eb8]/30 focus:border-[#005eb8] transition-all"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-[#005eb8]" />
                  Service Required
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value, subCategory: '' })}
                  className="w-full bg-gray-50 border border-gray-200 text-[#111111] text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#005eb8]/30 focus:border-[#005eb8] transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select HVAC Service *</option>
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.slug} value={srv.shortTitle}>
                      {srv.shortTitle}
                    </option>
                  ))}
                </select>
              </div>

              {/* Optional Sub-Category Field: Appears only when selected service has subcategories */}
              {selectedService?.subcategories && selectedService.subcategories.length > 0 && (
                <div className="animate-in fade-in duration-200">
                  <label className="block text-xs font-semibold text-gray-600 mb-1 flex items-center justify-between">
                    <span>Choose Sub-Category (Optional)</span>
                    <span className="text-[11px] font-normal text-[#005eb8]">Optional</span>
                  </label>
                  <select
                    value={formData.subCategory}
                    onChange={(e) => setFormData({ ...formData, subCategory: e.target.value })}
                    className="w-full bg-blue-50/40 border border-blue-200 text-[#111111] text-sm rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#005eb8]/30 focus:border-[#005eb8] transition-all appearance-none cursor-pointer"
                  >
                    <option value="">General Scope (All Included)</option>
                    {selectedService.subcategories.map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Optional Fields Toggle */}
              <div>
                <button
                  type="button"
                  onClick={() => setShowMoreDetails(!showMoreDetails)}
                  className="text-sm text-[#005eb8] font-semibold hover:underline focus:outline-none inline-flex items-center gap-1"
                >
                  {showMoreDetails ? '- Hide optional details' : '+ Add location, date or notes (optional)'}
                </button>
              </div>

              {/* Expandable Optional Fields */}
              <AnimatePresence>
                {showMoreDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden space-y-3 pt-1"
                  >
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1">
                        <label className="block text-xs font-semibold text-gray-600 mb-1 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-gray-500" />
                          Community / Area
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Dubai Marina, JVC"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#005eb8]/30 focus:border-[#005eb8]"
                        />
                      </div>

                      <div className="sm:w-[45%]">
                        <label className="block text-xs font-semibold text-gray-600 mb-1 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-gray-500" />
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-gray-50 border border-gray-200 text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#005eb8]/30 focus:border-[#005eb8]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        Issue Description / Special Instructions
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. AC leaking water, no cold air in master bedroom..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 text-sm rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#005eb8]/30 focus:border-[#005eb8]"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="flex items-center justify-center w-full bg-[#25D366] text-white font-bold text-sm sm:text-base py-3.5 rounded-2xl hover:bg-[#1ebd5a] transition-all shadow-lg shadow-[#25D366]/25 group"
                >
                  <MessageCircle className="w-5 h-5 mr-2 shrink-0" />
                  <span>Continue to WhatsApp Dispatch</span>
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-center text-xs text-gray-400 mt-2.5">
                  Direct redirection to Airtronics 24/7 WhatsApp dispatch desk.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
