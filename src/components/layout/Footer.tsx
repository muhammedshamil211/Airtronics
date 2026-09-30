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
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA } from '@/data/servicesData';

const WHATSAPP_PHONE = '971586596321';

// Clean Inline Social SVGs
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.53-1.06 1.04-1.48 1.1-.39.06-.88.08-2.54-.6-2.12-.87-3.48-3.02-3.58-3.16-.11-.14-.86-1.14-.86-2.17 0-1.03.54-1.53.73-1.74.19-.21.42-.26.56-.26.14 0 .28 0 .4.01.13.01.3-.05.47.36.18.42.61 1.49.66 1.6.06.11.09.24.02.38-.07.14-.11.23-.21.35-.11.12-.22.26-.32.35-.11.1-.22.21-.1.42.13.21.56.93 1.21 1.51.84.75 1.54.98 1.76 1.09.22.11.35.09.48-.06.13-.15.56-.65.71-.87.15-.22.3-.18.5-.11.21.07 1.31.62 1.54.73.22.11.38.17.43.26.06.09.06.53-.13 1.06" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.4a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

const XTwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-slate-50/90 text-gray-800 border-t border-gray-200" aria-label="Main Footer">
      
      {/* Upper Footer: Main 4-Column Layout */}
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-14 pb-20 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Brand, About & Social Media (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <Link href="/" className="inline-block mb-3" aria-label="Airtronics Fixcare Home">
                <Image
                  src="/images/airtronics-logo.png"
                  alt="Airtronics Fixcare Technical Services LLC"
                  width={150}
                  height={45}
                  style={{ width: 'auto', height: 'auto' }}
                  className="h-9 w-auto object-contain"
                />
              </Link>

              {/* Company Description */}
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                Airtronics Fixcare Technical Services LLC has been delivering certified air conditioning repair, preventive maintenance, turnkey HVAC installations, and duct sanitization across Dubai since 2022.
              </p>

              {/* Established & Certification Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005eb8] text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#005eb8]" />
                  <span>Est. 2022 in Dubai</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>24/7 Rapid Dispatch</span>
                </span>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-2">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hello Airtronics Fixcare! I would like to inquire about AC services in Dubai.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white hover:bg-[#25D366] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200 border border-gray-200 hover:border-[#25D366] hover:scale-105 shadow-2xs"
                  aria-label="Contact Airtronics on WhatsApp"
                  title="WhatsApp"
                >
                  <WhatsAppIcon />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com/airtronicsfixcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white hover:bg-[#1877F2] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200 border border-gray-200 hover:border-[#1877F2] hover:scale-105 shadow-2xs"
                  aria-label="Airtronics Facebook Page"
                  title="Facebook"
                >
                  <FacebookIcon />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/airtronicsfixcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white hover:bg-[#E4405F] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200 border border-gray-200 hover:border-[#E4405F] hover:scale-105 shadow-2xs"
                  aria-label="Airtronics Instagram Profile"
                  title="Instagram"
                >
                  <InstagramIcon />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/airtronicsfixcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white hover:bg-[#0A66C2] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200 border border-gray-200 hover:border-[#0A66C2] hover:scale-105 shadow-2xs"
                  aria-label="Airtronics LinkedIn Page"
                  title="LinkedIn"
                >
                  <LinkedInIcon />
                </a>

                {/* Twitter / X */}
                <a
                  href="https://x.com/airtronicsfix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white hover:bg-[#111111] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200 border border-gray-200 hover:border-[#111111] hover:scale-105 shadow-2xs"
                  aria-label="Airtronics on X"
                  title="X (Twitter)"
                >
                  <XTwitterIcon />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@airtronicsfixcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white hover:bg-[#FF0000] text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200 border border-gray-200 hover:border-[#FF0000] hover:scale-105 shadow-2xs"
                  aria-label="Airtronics YouTube Channel"
                  title="YouTube"
                >
                  <YouTubeIcon />
                </a>
              </div>
              <p className="text-[11px] text-gray-400 mt-3 font-normal">
                © {new Date().getFullYear()} Airtronics Fixcare Technical Services LLC. All rights reserved.
              </p>
            </div>
          </div>

          {/* Column 2: Hot Links / Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] mb-4 pb-1.5 border-b border-gray-200 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#005eb8] transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-[#005eb8] transition-transform group-hover:translate-x-1" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#005eb8] transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-[#005eb8] transition-transform group-hover:translate-x-1" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#005eb8] transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-[#005eb8] transition-transform group-hover:translate-x-1" />
                  <span>All Services</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#005eb8] transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-[#005eb8] transition-transform group-hover:translate-x-1" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-[#005eb8] transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-[#005eb8] transition-transform group-hover:translate-x-1" />
                  <span className="font-semibold text-gray-800 hover:text-[#005eb8]">Terms &amp; Conditions</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-600 hover:text-[#005eb8] transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-[#005eb8] transition-transform group-hover:translate-x-1" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/cookies-policy" className="text-gray-600 hover:text-[#005eb8] transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-[#005eb8] transition-transform group-hover:translate-x-1" />
                  <span>Cookies Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services List (3 Cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] mb-4 pb-1.5 border-b border-gray-200 inline-block">
              HVAC Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="text-gray-600 hover:text-[#005eb8] transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#005eb8] transition-transform group-hover:translate-x-1 shrink-0" />
                    <span className="truncate">{service.shortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Address (3 Cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] mb-4 pb-1.5 border-b border-gray-200 inline-block">
              Office &amp; Contact
            </h3>
            
            <div className="space-y-3.5 text-xs sm:text-sm text-gray-600">
              {/* Office Address */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="leading-relaxed">
                  <span className="block font-bold text-[#111111]">Office Location</span>
                  <span>Commercial Bank of Dubai Building, M-01, Al Kabeesi, Dubai, UAE</span>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100 mt-0.5">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="leading-tight">
                  <span className="block font-bold text-[#111111] mb-1">Direct Hotline Numbers</span>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+971586596321" className="hover:text-[#005eb8] transition-colors font-medium">
                      +971 58 659 6321
                    </a>
                    <a href="tel:+971555619369" className="hover:text-[#005eb8] transition-colors font-medium">
                      +971 55 561 9369
                    </a>
                    <a href="tel:+971502406545" className="hover:text-[#005eb8] transition-colors font-medium">
                      +971 50 240 6545
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#005eb8] flex items-center justify-center shrink-0 border border-blue-100 mt-0.5">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="leading-tight">
                  <span className="block font-bold text-[#111111] mb-0.5">Support Email</span>
                  <a href="mailto:airtronics6@gmail.com" className="hover:text-[#005eb8] transition-colors font-medium">
                    airtronics6@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div className="leading-tight">
                  <span className="block font-bold text-[#111111] mb-0.5">Working Hours</span>
                  <span className="text-emerald-700 font-semibold">24 Hours / 7 Days a Week</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
