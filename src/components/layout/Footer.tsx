'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { SERVICES_DATA } from '@/data/servicesData';

const QUICK_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'All Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Cookies Policy', href: '/cookies-policy' },
];

const HVAC_LINKS = SERVICES_DATA.map((s) => ({
  name: s.shortTitle,
  href: `/services/${s.slug}`,
}));

const SOCIAL_LINKS = [
  {
    name: 'WhatsApp',
    href: 'https://wa.me/971586596321?text=Hello%20Airtronics%20Fixcare!%20I%20would%20like%20to%20inquire%20about%20AC%20services%20in%20Dubai.',
    hover: 'hover:bg-[#25D366] hover:border-[#25D366]',
    svg: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.53-1.06 1.04-1.48 1.1-.39.06-.88.08-2.54-.6-2.12-.87-3.48-3.02-3.58-3.16-.11-.14-.86-1.14-.86-2.17 0-1.03.54-1.53.73-1.74.19-.21.42-.26.56-.26.14 0 .28 0 .4.01.13.01.3-.05.47.36.18.42.61 1.49.66 1.6.06.11.09.24.02.38-.07.14-.11.23-.21.35-.11.12-.22.26-.32.35-.11.1-.22.21-.1.42.13.21.56.93 1.21 1.51.84.75 1.54.98 1.76 1.09.22.11.35.09.48-.06.13-.15.56-.65.71-.87.15-.22.3-.18.5-.11.21.07 1.31.62 1.54.73.22.11.38.17.43.26.06.09.06.53-.13 1.06" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/airtronicsfixcare',
    hover: 'hover:bg-[#1877F2] hover:border-[#1877F2]',
    svg: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/airtronicsfixcare',
    hover: 'hover:bg-[#E4405F] hover:border-[#E4405F]',
    svg: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/airtronicsfixcare',
    hover: 'hover:bg-[#0A66C2] hover:border-[#0A66C2]',
    svg: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.4a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/airtronicsfix',
    hover: 'hover:bg-[#111111] hover:border-[#111111]',
    svg: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@airtronicsfixcare',
    hover: 'hover:bg-[#FF0000] hover:border-[#FF0000]',
    svg: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const CONTACT_ROWS = [
  {
    icon: MapPin,
    title: 'Office Location',
    text: 'Commercial Bank of Dubai Building, M-01, Al Kabeesi, Dubai, UAE',
  },
  {
    icon: Phone,
    title: 'Direct Hotline Numbers',
    links: [
      { label: '+971 58 659 6321', href: 'tel:+971586596321' },
      { label: '+971 55 561 9369', href: 'tel:+971555619369' },
      { label: '+971 50 240 6545', href: 'tel:+971502406545' },
    ],
  },
  {
    icon: Mail,
    title: 'Support Email',
    links: [{ label: 'airtronics6@gmail.com', href: 'mailto:airtronics6@gmail.com' }],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    text: '24 Hours / 7 Days a Week',
    emerald: true,
  },
];

function FooterCol({ title, className = '', children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] mb-4 pb-1.5 border-b border-gray-200 inline-block">
        {title}
      </h3>
      {children}
    </div>
  );
}

function NavList({ links }: { links: { name: string; href: string }[] }) {
  return (
    <ul className="space-y-2 text-xs sm:text-sm">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="text-gray-600 hover:text-[#005eb8] transition-colors block py-0.5 truncate">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-50/90 text-gray-800 border-t border-gray-200" aria-label="Main Footer">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-14 pb-20 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Column 1: Brand & Social */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
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
              <p className="text-gray-600 text-sm leading-relaxed mb-4 font-normal">
                Airtronics Fixcare Technical Services LLC has been delivering certified air conditioning repair, preventive maintenance, turnkey HVAC installations, and duct sanitization across Dubai since 2022.
              </p>
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

            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5">
                Connect With Us
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
                    className={`w-9 h-9 rounded-xl bg-white text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200 border border-gray-200 hover:scale-105 shadow-2xs ${item.hover}`}
                  >
                    {item.svg}
                  </a>
                ))}
              </div>
              <p className="text-[11px] text-gray-400 mt-3 font-normal">
                © {new Date().getFullYear()} Airtronics Fixcare Technical Services LLC. All rights reserved.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <FooterCol title="Quick Links" className="lg:col-span-2">
            <NavList links={QUICK_LINKS} />
          </FooterCol>

          {/* Column 3: HVAC Services */}
          <FooterCol title="HVAC Services" className="lg:col-span-3">
            <NavList links={HVAC_LINKS} />
          </FooterCol>

          {/* Column 4: Office & Contact */}
          <FooterCol title="Office &amp; Contact" className="lg:col-span-3">
            <div className="space-y-3.5 text-xs sm:text-sm text-gray-600">
              {CONTACT_ROWS.map(({ icon: Icon, title, text, links, emerald }) => (
                <div key={title} className="flex items-start gap-2.5">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border ${emerald ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-blue-50 text-[#005eb8] border-blue-100'
                      }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="leading-tight">
                    <span className="block font-bold text-[#111111] mb-0.5">{title}</span>
                    {text && (
                      <span className={emerald ? 'text-emerald-700 font-semibold' : 'leading-relaxed'}>
                        {text}
                      </span>
                    )}
                    {links && (
                      <div className="flex flex-col gap-1 font-medium mt-0.5">
                        {links.map((link) => (
                          <a key={link.href} href={link.href} className="hover:text-[#005eb8] transition-colors">
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FooterCol>

        </div>
      </div>
    </footer>
  );
}
