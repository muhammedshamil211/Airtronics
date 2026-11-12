'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { SERVICES_DATA } from '@/data/servicesData';

const PRIMARY_PHONE = '+971 58 659 6321';
const WHATSAPP_PHONE = '971586596321';

const CORE_SERVICES = SERVICES_DATA.slice(0, 10).map((s) => ({
  name: s.shortTitle,
  href: `/services/${s.slug}`,
}));

const QUICK_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'All Services', href: '/services' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

const LEGAL_LINKS = [
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Cookies Policy', href: '/cookies-policy' },
  { name: 'Sitemap', href: '/sitemap.xml' },
];

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    'Hello Airtronics Fixcare! I need AC assistance in Dubai.'
  )}`;

  return (
    <footer
      className="w-full bg-white text-slate-700 border-t-4 border-[#0076FF]"
      aria-label="Main Footer"
    >
      {/* Main Footer Grid */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand, Simple Description & Direct Actions (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
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

            <p className="font-[family-name:var(--font-onest)] text-slate-600 text-sm leading-relaxed max-w-sm">
              Licensed AC &amp; HVAC service company in Dubai since 2022. Fast 30–45 minute arrival for AC repair, deep cleaning, duct sanitization, and maintenance across homes and offices.
            </p>

            {/* Sharp Slanted Trust Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0076FF]/10 text-[#0076FF] border border-[#0076FF]/20 text-xs font-semibold [transform:skewX(-10deg)] rounded-none">
                <span className="inline-flex items-center gap-1.5 [transform:skewX(10deg)]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Dubai Licensed</span>
                </span>
              </span>
              <span className="inline-flex items-center px-3 py-1.5 bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold [transform:skewX(-10deg)] rounded-none">
                <span className="inline-block [transform:skewX(10deg)]">Est. 2022</span>
              </span>
            </div>

            {/* Verified Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#0076FF] hover:bg-[#0066de] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 transition-colors [transform:skewX(-10deg)] rounded-none"
              >
                <span className="inline-flex items-center gap-1.5 [transform:skewX(10deg)]">
                  <span>WhatsApp 24/7</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>

              <a
                href={`tel:${PRIMARY_PHONE.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 transition-colors [transform:skewX(-10deg)] rounded-none"
              >
                <span className="inline-flex items-center gap-1.5 [transform:skewX(10deg)]">
                  <Phone className="w-3.5 h-3.5 text-[#00D4FF]" />
                  <span>Call Now</span>
                </span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-[family-name:var(--font-bebas)] text-lg tracking-wider text-[#0f172a] mb-4">
              COMPANY
            </h3>
            <ul className="space-y-2.5 text-sm font-[family-name:var(--font-onest)]">
              {QUICK_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-[#0076FF] font-medium transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular AC & HVAC Services (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-[family-name:var(--font-bebas)] text-lg tracking-wider text-[#0f172a] mb-4">
              POPULAR SERVICES
            </h3>
            <ul className="space-y-2 text-sm font-[family-name:var(--font-onest)]">
              {CORE_SERVICES.slice(0, 7).map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-slate-600 hover:text-[#0076FF] transition-colors block truncate"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-3.5 mt-3.5 border-t border-slate-100">
              <Link
                href="/services"
                className="font-[family-name:var(--font-onest)] text-xs font-bold text-[#0076FF] hover:underline inline-flex items-center gap-1.5"
              >
                <span>View All {SERVICES_DATA.length} Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 4: Contact & Dubai Office (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-[family-name:var(--font-bebas)] text-lg tracking-wider text-[#0f172a] mb-4">
              CONTACT &amp; OFFICE
            </h3>
            <div className="space-y-3.5 text-sm text-slate-600 font-[family-name:var(--font-onest)]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0076FF] shrink-0 mt-0.5" />
                <div>
                  <span className="leading-snug block">
                    Commercial Bank of Dubai Building, M-01, Al Khabaisi, Deira, Dubai, UAE
                  </span>
                  <a
                    href="https://maps.google.com/?q=Commercial+Bank+of+Dubai+Building+Al+Khabaisi+Dubai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#0076FF] hover:underline font-semibold mt-1"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#0076FF] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a
                    href={`tel:${PRIMARY_PHONE.replace(/\s+/g, '')}`}
                    className="font-bold text-[#0f172a] hover:text-[#0076FF] transition-colors"
                  >
                    {PRIMARY_PHONE}
                  </a>
                  <a
                    href="tel:+971555619369"
                    className="text-xs text-slate-500 hover:text-[#0076FF] transition-colors"
                  >
                    +971 55 561 9369 (Office)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#0076FF] shrink-0 mt-0.5" />
                <a
                  href="mailto:airtronics6@gmail.com"
                  className="hover:text-[#0076FF] transition-colors break-all"
                >
                  airtronics6@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#0076FF] shrink-0 mt-0.5" />
                <span className="font-semibold text-[#0f172a]">
                  Open 24 Hours / 7 Days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Strip */}
      <div className="w-full bg-slate-50 border-t border-slate-200 py-5">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-[family-name:var(--font-onest)]">
          <p>
            © {new Date().getFullYear()} Airtronics Fixcare Technical Services LLC. All rights reserved.
          </p>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Footer Legal Links">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#0076FF] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
