'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { 
  ShieldCheck, 
  Wrench, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  ChevronDown, 
  Phone, 
  CalendarCheck, 
  FileText 
} from 'lucide-react';
import { ServiceDetail } from '@/data/servicesData';

const WHATSAPP_PHONE = '971586596321';
const CALL_PHONE = '+971586596321';

export default function ServiceDetailContent({ service }: { service: ServiceDetail }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    `Hello Airtronics Fixcare! I would like to book the "${service.title}" service in Dubai. Please provide availability and pricing.`
  )}`;

  // FAQ Schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': service.faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a,
      },
    })),
  };

  return (
    <div className="py-12 sm:py-16 bg-[#fcfcfc]">
      <Script
        id={`faq-schema-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8 space-y-14 sm:space-y-18">
        
        {/* ========================================================================= */}
        {/* 1. OVERVIEW & ENGINEERING CONTEXT (Standard Layout, No Cards)            */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              <span className="text-[#005eb8] font-black text-sm">/</span>
              <span>ENGINEERING STANDARDS</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#111111] leading-tight mb-4">
              Why Dubai Relies on Our {service.shortTitle}
            </h2>
            
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {service.overview}
            </p>

            {/* Seamless Inline Guarantees (No Box Containers) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#005eb8] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-sm text-[#111111]">100% Genuine OEM Parts</span>
                  <span className="block text-xs text-gray-500 mt-0.5">Direct factory parts with warranty</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#005eb8] shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-sm text-[#111111]">Fixed Binding Quotes</span>
                  <span className="block text-xs text-gray-500 mt-0.5">Zero surprise charges on completion</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={service.image}
                alt={`${service.shortTitle} technicians in Dubai`}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="block font-bold text-sm sm:text-base">{service.title}</span>
                <span className="block text-xs text-gray-300">Certified Dubai Municipality Standards</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. KEY BENEFITS (Standard Editorial Columns, No Cards)                   */}
        {/* ========================================================================= */}
        <div>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
              <span className="text-[#005eb8] font-black text-sm">/</span>
              <span>CLIENT VALUE</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#111111] leading-tight mb-2">
              Key Advantages &amp; Client Guarantees
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Engineered specifically to withstand 50°C summer conditions and high humidity levels in the UAE.
            </p>
          </div>

          {/* Contiguous Advantage Blocks with Different Light Backgrounds and No Gaps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 rounded-2xl overflow-hidden border border-gray-100">
            {service.keyBenefits.map((benefit, idx) => {
              const lightBgColors = [
                'bg-[#f0f6ff]', // Soft icy blue tint
                'bg-[#f8fafc]', // Crisp clean slate tint
                'bg-[#f0fdf4]', // Soft mint/freshness tint
                'bg-[#f0f9ff]', // Soft sky tint
              ];
              const bgClass = lightBgColors[idx % lightBgColors.length];

              return (
                <div
                  key={idx}
                  className={`${bgClass} p-6 sm:p-7 md:p-8 flex flex-col justify-between`}
                >
                  <div>
                    <span className="text-[#005eb8] font-black text-sm mb-3 block">
                      0{idx + 1}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-[#111111] mb-2 leading-snug">
                      {benefit.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. TECHNICAL SPECIFICATIONS & COMMON ISSUES (Standard 2-Col Layout)       */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-gray-200/80 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          {/* Technical Specs */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0">
                <Wrench className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#111111]">
                Technical Scope &amp; Specifications
              </h3>
            </div>
            <ul className="space-y-3">
              {service.specifications.map((spec, sIdx) => (
                <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#005eb8] shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Common Dubai Issues Solved */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <AlertCircle className="w-4 h-4" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#111111]">
                Common Problems We Resolve in Dubai
              </h3>
            </div>
            <ul className="space-y-3">
              {service.commonIssuesSolved.map((issue, iIdx) => (
                <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. DUBAI COMMUNITIES SERVED (Clean Open Cluster, No Cards)                */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-gray-200/80">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
            <MapPin className="w-4 h-4 text-[#005eb8]" />
            <span>LOCAL SERVICE HUBS IN DUBAI</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-2 leading-snug">
            30–45 Minute Mobile Fleet Coverage Across Dubai
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 max-w-3xl">
            Our certified mobile vans are stationed strategically near key highways (Sheikh Zayed Road, Al Khail Road, Sheikh Mohammed Bin Zayed Road) for rapid dispatch:
          </p>

          <div className="flex flex-wrap gap-2">
            {service.dubaiLocations.map((loc, lIdx) => (
              <span 
                key={lIdx}
                className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#005eb8] text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#005eb8]" />
                <span>{loc}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. FREQUENTLY ASKED QUESTIONS (Standard Accordion, No Card Containers)    */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-gray-200/80">
          <header className="max-w-3xl mb-8 sm:mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#005eb8] font-black text-sm">/</span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-gray-600">
                Got Questions? We Have Answers
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#111111] leading-tight mb-2">
              Frequently Asked Questions
            </h3>

            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Find answers to the most common questions about our {service.shortTitle.toLowerCase()} in Dubai.
            </p>
          </header>

          <div className="max-w-4xl">
            {service.faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div key={fIdx} className="border-b border-gray-200">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full py-4 sm:py-5 flex items-start justify-between text-left hover:text-[#005eb8] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#111111] pr-4">
                      {faq.q}
                    </span>

                    <div className="shrink-0 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center mt-0.5">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#005eb8]' : 'text-gray-500'
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pb-5 text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. BOTTOM CALLOUT / DIRECT DISPATCH CTA (Gradient Blending into White)     */}
        {/* ========================================================================= */}
        <div className="bg-gradient-to-r from-transparent via-[#ebf4ff] to-transparent p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#005eb8] block mb-1">
              Ready For Immediate On-Site Dispatch?
            </span>
            <h3 className="text-xl sm:text-2xl font-medium text-[#111111] mb-1.5 leading-tight">
              Book {service.shortTitle} with Airtronics Fixcare Today
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Transparent upfront quote, zero hidden fees, and guaranteed 90-day parts &amp; labor warranty across all Dubai locations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#005eb8] hover:bg-[#004a94] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book via WhatsApp</span>
            </a>

            <Link
              href={`tel:${CALL_PHONE.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-gray-800 text-xs sm:text-sm font-semibold px-5 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#005eb8]" />
              <span>Call Hotline</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
