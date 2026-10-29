'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ShieldCheck, PhoneCall, MessageCircle } from 'lucide-react';
import { SERVICES_DATA } from '@/data/servicesData';

const PRIMARY_PHONE = '+971 58 659 6321';
const WHATSAPP_PHONE = '971586596321';

const CORE_SERVICES = SERVICES_DATA.map((s) => ({
  name: s.shortTitle,
  href: `/services/${s.slug}`,
}));

const SOCIAL_LINKS = [
  {
    name: 'WhatsApp',
    href: `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hello Airtronics Fixcare! I need AC assistance in Dubai.')}`,
    hoverClass: 'hover:text-[#25D366] hover:border-[#25D366]',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.53-1.06 1.04-1.48 1.1-.39.06-.88.08-2.54-.6-2.12-.87-3.48-3.02-3.58-3.16-.11-.14-.86-1.14-.86-2.17 0-1.03.54-1.53.73-1.74.19-.21.42-.26.56-.26.14 0 .28 0 .4.01.13.01.3-.05.47.36.18.42.61 1.49.66 1.6.06.11.09.24.02.38-.07.14-.11.23-.21.35-.11.12-.22.26-.32.35-.11.1-.22.21-.1.42.13.21.56.93 1.21 1.51.84.75 1.54.98 1.76 1.09.22.11.35.09.48-.06.13-.15.56-.65.71-.87.15-.22.3-.18.5-.11.21.07 1.31.62 1.54.73.22.11.38.17.43.26.06.09.06.53-.13 1.06" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/airtronicsfixcare',
    hoverClass: 'hover:text-[#1877F2] hover:border-[#1877F2]',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/airtronicsfixcare',
    hoverClass: 'hover:text-[#E4405F] hover:border-[#E4405F]',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/airtronicsfixcare',
    hoverClass: 'hover:text-[#0A66C2] hover:border-[#0A66C2]',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.4a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-700 border-t border-gray-200" aria-label="Main Footer">

      {/* 2. MAIN 3-COLUMN FOOTER BODY WITH 2-COLUMN SERVICES GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Credibility (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block" aria-label="Airtronics Fixcare Home">
              <Image
                src="/images/airtronics-logo.png"
                alt="Airtronics Fixcare Technical Services LLC Dubai"
                width={220}
                height={60}
                loading="lazy"
                style={{ width: 'auto' }}
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Airtronics Fixcare Technical Services LLC is Dubai’s premier air conditioning and HVAC maintenance engineering contractor. We deliver precision diagnostics, OEM parts replacements, preventative servicing, and deep duct sanitization across residential, commercial, and industrial properties.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#005eb8] border border-blue-200/60 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Dubai Municipality Approved</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold">
                <span>Est. 2022 in Dubai</span>
              </span>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2.5">
                Official Channels
              </span>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    title={item.name}
                    className={`w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 text-gray-600 flex items-center justify-center transition-all ${item.hoverClass}`}
                  >
                    {item.svg}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Core HVAC Services (5 cols on lg) - Clean Neat 2-Column Grid */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-4">
              HVAC Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {CORE_SERVICES.slice(0, 10).map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="text-gray-600 hover:text-[#005eb8] transition-colors block py-0.5 truncate"
                >
                  {s.name}
                </Link>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-100 mt-4">
              <Link
                href="/services"
                className="text-xs font-semibold text-[#005eb8] hover:underline inline-flex items-center gap-1.5"
              >
                <span>View All 22 Services</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>


          {/* Column 4: Contact & Headquarters (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-4">
              Headquarters &amp; Dispatch
            </h3>
            <div className="space-y-3.5 text-sm text-gray-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#005eb8] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Commercial Bank of Dubai Building, Office M-01, Al Khabaisi, Dubai, UAE
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#005eb8] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${PRIMARY_PHONE.replace(/\s+/g, '')}`} className="font-semibold text-gray-900 hover:text-[#005eb8] transition-colors">
                    {PRIMARY_PHONE}
                  </a>
                  <a href="tel:+971555619369" className="text-xs text-gray-500 hover:text-[#005eb8] transition-colors">
                    +971 55 561 9369 (Office)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#005eb8] shrink-0 mt-0.5" />
                <a href="mailto:airtronics6@gmail.com" className="hover:text-[#005eb8] transition-colors">
                  airtronics6@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-emerald-700 font-medium">
                  24 Hours / 7 Days a Week
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. STANDARD BOTTOM LEGAL STRIP */}
      <div className="w-full bg-[#f8fafc] border-t border-gray-200/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Airtronics Fixcare Technical Services LLC. All rights reserved.
          </p>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Footer Legal Links">
            <Link href="/terms" className="hover:text-[#005eb8] transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:text-[#005eb8] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies-policy" className="hover:text-[#005eb8] transition-colors">
              Cookies Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-[#005eb8] transition-colors">
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
