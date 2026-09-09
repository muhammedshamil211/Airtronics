'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full px-4 md:px-8 py-4 flex items-center justify-between sticky top-0 z-50 bg-[#fcfcfc]/90 backdrop-blur-md border-b border-gray-100/50">
      <div className="flex items-center">
        <Link href="/">
          <Image 
            src="/image/logo.png" 
            alt="Airtronics Fixcare" 
            width={160} 
            height={50} 
            className="object-contain h-10 w-auto"
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-2">
        {navLinks.map((item) => (
          <Link 
            key={item.name} 
            href={item.href} 
            className="px-5 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Action Buttons & Mobile Toggle */}
      <div className="flex items-center space-x-2 md:space-x-3">
        <Link 
          href="/contact" 
          className="hidden sm:flex px-6 py-3 rounded-full bg-brand text-white text-sm font-semibold shadow-md shadow-brand/30 hover:shadow-lg hover:shadow-brand/40 hover:-translate-y-0.5 hover:bg-brand-hover transition-all"
        >
          BOOK A SERVICE
        </Link>
        <button className="hidden sm:flex w-11 h-11 rounded-full bg-[#111111] items-center justify-center text-white shadow-md hover:bg-black hover:-translate-y-0.5 transition-all">
          <ArrowUpRight className="w-5 h-5" />
        </button>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col space-y-3 lg:hidden">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="px-4 py-3 rounded-lg text-sm font-medium text-gray-800 hover:bg-brand-light hover:text-brand-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="sm:hidden px-4 py-3.5 text-center rounded-lg bg-brand text-white text-sm font-semibold shadow-md hover:bg-brand-hover transition-colors mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            BOOK A SERVICE
          </Link>
        </div>
      )}
    </header>
  );
}
