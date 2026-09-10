'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/data/services';

export default function Hero() {
  const displayServices = services.slice(0, 5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    service: 'AC Repair',
    address: '',
    date: '',
    details: ''
  });

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hello, my name is ${formData.name}. I would like to book a service for: ${formData.service}.`;
    if (showMoreDetails) {
      if (formData.address) text += `\nAddress: ${formData.address}`;
      if (formData.date) text += `\nPreferred Date: ${formData.date}`;
      if (formData.details) text += `\nNotes: ${formData.details}`;
    }
    text += `\nMy client number is +971 58 659 6321`;
    
    const url = `https://wa.me/971586596321?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsModalOpen(false);
  };

  return (
    <section className="relative overflow-hidden bg-[#fcfcfc]">
      {/* Background Wave */}
      <div className="absolute inset-x-0 top-0 z-0 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          className="w-full h-[260px] md:h-[320px] lg:h-[380px]"
        >
          <path
            d="M0,0 L1440,0 L1440,200 C1120,450 480,10 0,300 Z"
            fill="var(--color-brand-light)"
            opacity="0.55"
          />
        </svg>
      </div>

      <main className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 pt-10 lg:pt-14  pb-2">

        {/* Label */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-brand font-semibold">/</span>
          <span className="text-sm md:text-base font-semibold tracking-wide text-gray-800 ">
            Dubai HVAC Specialists
          </span>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12 mb-16">

          {/* Left: Headline */}
          <div className="lg:w-3/5">
            <h1 className="text-[36px] sm:text-[46px] md:text-[54px] lg:text-[64px]  font-medium tracking-tight leading-[1.05] text-[#111111]">
              Premium HVAC<br className="hidden sm:block" /> Services In Dubai
            </h1>
          </div>

          {/* Right: Text & Links */}
          <div className="lg:w-2/5 flex flex-col justify-end">
            <p className="text-[#666666] text-sm md:text-[15px] leading-relaxed mb-6 max-w-[400px]">
              Airtronics delivers expert HVAC installation, AC repair,
              preventive maintenance, duct cleaning and commercial climate
              control solutions across Dubai. Trusted by residential,
              commercial, hospitality and industrial clients.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-5 text-sm md:text-[15px]">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-brand text-white font-semibold px-7 py-3.5 rounded-full hover:bg-brand-hover hover:shadow-lg hover:shadow-brand/30 transition-all group"
              >
                Call For Booking
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="flex items-center gap-2 bg-white text-[#111] border border-gray-200 font-semibold px-7 py-3.5 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm group"
              >
                View All Services
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="flex gap-4 lg:gap-5 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 xl:grid xl:grid-cols-5 xl:overflow-visible">
          {displayServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="relative overflow-hidden rounded-[20px] w-[65vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] xl:w-auto h-[220px] sm:h-[240px] lg:h-[260px] shrink-0 snap-center group"
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority={index < 2}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width:640px) 65vw, (max-width:768px) 40vw, (max-width:1024px) 30vw, 20vw"
              />

              {/* Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,.92) 0%, rgba(0,0,0,.35) 35%, rgba(0,0,0,0) 70%)',
                }}
              />

              {/* Content */}
              <div className="absolute bottom-4 left-4 right-14 z-10 pointer-events-none">
                <h3 className="text-white text-sm md:text-base font-medium leading-tight">
                  {service.title.replace(' Dubai', '')}
                </h3>
              </div>

              {/* Arrow */}
              <Link
                href={service.link}
                className="absolute bottom-3 right-3 z-20 flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white text-brand shadow-lg shadow-brand/40 transition-all duration-300 hover:scale-110 group-hover:bg-brand group-hover:text-white"
              >
                <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </Link>

              {/* Full Card Link */}
              <Link
                href={service.link}
                className="absolute inset-0 z-[5]"
              >
                <span className="sr-only">
                  View {service.title}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Long Book Now Button */}
        <div className="mt-2 w-full">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center w-full bg-[#25D366] text-white font-medium text-[15px] md:text-base py-4 rounded-xl hover:bg-[#1ebd5a] transition-colors shadow-lg shadow-[#25D366]/20"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Book Now on WhatsApp
          </button>
        </div>
      </main>

      {/* WhatsApp Booking Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-[440px] bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
            >
              {/* Header */}
              <div className="bg-[#fcfcfc] border-b border-gray-100 px-6 py-5 flex items-center justify-between">
                <h3 className="text-xl font-medium tracking-tight text-[#111111]">
                  Book Service
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleWhatsAppSubmit} className="p-5 sm:p-6">
                <div className="space-y-3">
                  
                  <div>
                    <label className="block text-[13px] font-medium text-gray-600 mb-1">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 text-[#111111] text-[15px] rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-medium text-gray-600 mb-1">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 text-[#111111] text-[15px] rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all appearance-none"
                    >
                      <option>AC Repair</option>
                      <option>AC Installation</option>
                      <option>AC Maintenance</option>
                      <option>Duct Cleaning</option>
                      <option>Commercial HVAC</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => setShowMoreDetails(!showMoreDetails)}
                      className="text-[14px] text-brand font-medium hover:underline focus:outline-none"
                    >
                      {showMoreDetails ? '- Hide details' : '+ Add more details (optional)'}
                    </button>
                  </div>

                  <AnimatePresence>
                    {showMoreDetails && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3 mt-1">
                          <div className="flex gap-3">
                            <div className="flex-1">
                              <label className="block text-[13px] font-medium text-gray-600 mb-1">
                                Address
                              </label>
                              <input
                                type="text"
                                placeholder="Area, Building..."
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-200 text-[#111111] text-[15px] rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                              />
                            </div>
                            <div className="w-[45%]">
                              <label className="block text-[13px] font-medium text-gray-600 mb-1">
                                Date
                              </label>
                              <input
                                type="date"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-200 text-[#111111] text-[15px] rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-[13px] font-medium text-gray-600 mb-1">
                              Additional Notes
                            </label>
                            <input
                              type="text"
                              placeholder="Any specific instructions..."
                              value={formData.details}
                              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                              className="w-full bg-gray-50 border border-gray-200 text-[#111111] text-[15px] rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full bg-[#25D366] text-white font-medium text-[15px] py-3.5 rounded-xl hover:bg-[#1ebd5a] transition-all shadow-md shadow-[#25D366]/20"
                  >
                    Continue to WhatsApp
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                  <p className="text-center text-[12px] text-gray-400 mt-3">
                    You&apos;ll be redirected to WhatsApp to send this message.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}