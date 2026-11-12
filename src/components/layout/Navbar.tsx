'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className="w-full sticky top-0 z-50 bg-white transition-all"
      aria-label="Main Header"
    >
      {/* Top Utility Contact Bar: Contact Numbers & Email */}
      <div className="w-full bg-slate-50 text-slate-700 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
          {/* Contact Numbers & Email */}
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-1">
            <a
              href="tel:+971586596321"
              className="inline-flex items-center gap-1.5 text-slate-900 hover:text-[#0076FF] transition-colors font-semibold"
              aria-label="Call Dispatch Hotline +971 58 659 6321"
            >
              <Phone className="w-3.5 h-3.5 text-[#0076FF] fill-[#0076FF]" />
              <span>+971 58 659 6321</span>
            </a>

            <a
              href="tel:+971555619369"
              className="hidden sm:inline-flex items-center gap-1.5 text-slate-600 hover:text-[#0076FF] transition-colors"
              aria-label="Call Office +971 55 561 9369"
            >
              <Phone className="w-3.5 h-3.5 text-[#0076FF]" />
              <span>+971 55 561 9369</span>
            </a>

            <a
              href="mailto:airtronics6@gmail.com"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#0076FF] transition-colors"
              aria-label="Email airtronics6@gmail.com"
            >
              <Mail className="w-3.5 h-3.5 text-[#0076FF]" />
              <span>airtronics6@gmail.com</span>
            </a>
          </div>

          {/* Right Operational Status */}
          <div className="hidden md:flex items-center gap-2 text-slate-500 text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-slate-700">24/7 HVAC Emergency Service Across Dubai</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="Airtronics Fixcare Home" className="flex items-center py-1">
            <Image
              src="/images/airtronics-logo.png"
              alt="Airtronics Fixcare Technical Services Dubai"
              width={200}
              height={52}
              priority
              sizes="(max-width: 640px) 150px, (max-width: 1024px) 180px, 200px"
              style={{ width: 'auto' }}
              className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-all"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Clean Non-Card Typographic Menu with Active Indicator */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Desktop Navigation">
          {navLinks.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'text-[#0076FF] font-semibold'
                    : 'text-gray-700 hover:text-[#0076FF]'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                <span>{item.name}</span>
                {/* Active Indicator Underline */}
                {active && (
                  <span
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#0076FF] [transform:skewX(-14deg)]"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button (Desktop Only) & Mobile Hamburger */}
        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Desktop Only CTA - Slanted Parallelogram Hotline Button matching Hero */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+971586596321"
              className="group relative inline-flex items-center justify-center bg-[#0076FF] hover:bg-[#0066de] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 transition-all duration-200 [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] active:scale-[0.98] shrink-0"
              aria-label="Call +971 58 659 6321"
            >
              <div className="flex items-center gap-2 [transform:skewX(10deg)] sm:[transform:skewX(14deg)] whitespace-nowrap">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current transition-transform group-hover:scale-110" />
                <span className="tracking-tight font-bold">+971 58 659 6321</span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-gray-950 focus:outline-none transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Clean & Borderless / Shadowless */}
      {isMobileMenuOpen && (
        <nav
          className="lg:hidden w-full bg-white px-5 py-4 flex flex-col space-y-1"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center justify-between px-3.5 py-3 text-sm font-medium transition-colors ${
                  active
                    ? 'text-[#0076FF] font-semibold bg-blue-50/60'
                    : 'text-gray-700 hover:text-[#0076FF] hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={active ? 'page' : undefined}
              >
                <span>{item.name}</span>
                {active && (
                  <span className="w-1.5 h-1.5 bg-[#0076FF] [transform:skewX(-14deg)]" aria-hidden="true" />
                )}
              </Link>
            );
          })}

          {/* Mobile Hotline & Email Actions */}
          <div className="pt-2 pb-1 space-y-2">
            <a
              href="tel:+971586596321"
              className="group relative flex items-center justify-center bg-[#0076FF] hover:bg-[#0066de] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 transition-all duration-200 [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] active:scale-[0.98] w-full"
              aria-label="Call +971 58 659 6321"
            >
              <div className="flex items-center gap-2 [transform:skewX(10deg)] sm:[transform:skewX(14deg)] whitespace-nowrap">
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span className="tracking-tight font-bold">+971 58 659 6321 (24/7 Hotline)</span>
              </div>
            </a>

            <div className="flex flex-col gap-1.5 px-3 py-1 text-xs text-slate-600">
              <a href="tel:+971555619369" className="inline-flex items-center gap-2 hover:text-[#0076FF] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#0076FF]" />
                <span>+971 55 561 9369 (Office)</span>
              </a>
              <a href="mailto:airtronics6@gmail.com" className="inline-flex items-center gap-2 hover:text-[#0076FF] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#0076FF]" />
                <span>airtronics6@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Legal / Policy Navigation in Mobile Menu */}
          <div className="pt-3 mt-2 flex flex-col space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-3.5 mb-1">
              Policies &amp; Legal
            </span>
            <Link
              href="/terms"
              className={`px-3.5 py-2 text-xs font-medium transition-colors ${
                pathname === '/terms'
                  ? 'text-[#0076FF] font-semibold'
                  : 'text-gray-600 hover:text-[#0076FF]'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className={`px-3.5 py-2 text-xs font-medium transition-colors ${
                pathname === '/privacy-policy'
                  ? 'text-[#0076FF] font-semibold'
                  : 'text-gray-600 hover:text-[#0076FF]'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies-policy"
              className={`px-3.5 py-2 text-xs font-medium transition-colors ${
                pathname === '/cookies-policy'
                  ? 'text-[#0076FF] font-semibold'
                  : 'text-gray-600 hover:text-[#0076FF]'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cookies Policy
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
