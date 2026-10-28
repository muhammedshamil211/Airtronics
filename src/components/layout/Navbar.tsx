'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
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
      className="w-full sticky top-0 z-50 bg-[#fcfcfc]/95 backdrop-blur-md border-b border-gray-200/70 transition-all"
      aria-label="Main Header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between">
        {/* Brand Logo - Enlarged & Crisp */}
        <div className="flex items-center">
          <Link href="/" aria-label="Airtronics Fixcare Home" className="flex items-center py-1">
            <Image
              src="/images/airtronics-logo.png"
              alt="Airtronics Fixcare Technical Services Dubai"
              width={260}
              height={70}
              priority
              sizes="(max-width: 640px) 190px, (max-width: 1024px) 230px, 260px"
              style={{ width: 'auto' }}
              className="h-11 sm:h-13 md:h-14 lg:h-15 w-auto object-contain transition-all"
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
                    ? 'text-[#005eb8] font-semibold'
                    : 'text-gray-700 hover:text-[#005eb8]'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                <span>{item.name}</span>
                {/* Active Underline Pill Indicator */}
                {active && (
                  <span
                    className="absolute bottom-0 left-4 right-4 h-[2.5px] bg-[#005eb8] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Button (Desktop Only) & Mobile Hamburger */}
        <div className="flex items-center space-x-2 md:space-x-3">
          {/* Desktop Only "Book a Service" CTA */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button
              href="/contact"
              variant="primary"
              size="pill"
              className="text-xs sm:text-sm font-semibold tracking-wider"
              aria-label="Book a Service"
            >
              <span>BOOK A SERVICE</span>
            </Button>
            <Button
              href="/contact"
              variant="primary"
              size="icon"
              aria-label="Contact Us"
            >
              <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </Button>
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

      {/* Mobile Menu Dropdown - Clean & Non-Card Style */}
      {isMobileMenuOpen && (
        <nav
          className="lg:hidden w-full bg-white border-t border-gray-100 px-5 py-4 flex flex-col space-y-1 shadow-lg"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((item) => {
            const active = isLinkActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? 'text-[#005eb8] font-semibold bg-blue-50/70 border-l-4 border-[#005eb8]'
                    : 'text-gray-700 hover:text-[#005eb8] hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={active ? 'page' : undefined}
              >
                <span>{item.name}</span>
                {active && (
                  <span className="w-2 h-2 rounded-full bg-[#005eb8]" aria-hidden="true" />
                )}
              </Link>
            );
          })}

          {/* Legal / Policy Navigation in Mobile Menu */}
          <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-3.5 mb-1">
              Policies &amp; Legal
            </span>
            <Link
              href="/terms"
              className={`px-3.5 py-2 text-xs font-medium transition-colors ${
                pathname === '/terms'
                  ? 'text-[#005eb8] font-semibold'
                  : 'text-gray-600 hover:text-[#005eb8]'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className={`px-3.5 py-2 text-xs font-medium transition-colors ${
                pathname === '/privacy-policy'
                  ? 'text-[#005eb8] font-semibold'
                  : 'text-gray-600 hover:text-[#005eb8]'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies-policy"
              className={`px-3.5 py-2 text-xs font-medium transition-colors ${
                pathname === '/cookies-policy'
                  ? 'text-[#005eb8] font-semibold'
                  : 'text-gray-600 hover:text-[#005eb8]'
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
