import type { Metadata } from 'next';
import React from 'react';

import AboutSchema from '@/components/about/AboutSchema';
import AboutHero from '@/components/about/AboutHero';
import CompanyStory from '@/components/about/CompanyStory';
import CoreDifferentiators from '@/components/about/CoreDifferentiators';
import BrandsSection from '@/components/about/BrandsSection';
import FAQSection from '@/components/about/FAQSection';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata: Metadata = {
  title: 'About Us | Airtronics Fixcare HVAC & AC Repair Dubai',
  description: 'Learn about Airtronics Fixcare Technical Services LLC. Dubai-certified HVAC engineers providing 24/7 AC repair, diagnostic maintenance, and OEM parts since 2022.',
  keywords: [
    'About Airtronics Fixcare',
    'AC repair company Dubai',
    'HVAC maintenance contractor Dubai',
    'Certified AC technician Dubai',
    'Emergency AC repair Dubai',
    'Airtronics Fixcare Technical Services LLC',
    'HVAC company Dubai 2022',
  ].join(', '),
  alternates: {
    canonical: 'https://airtronicsfixcare.com/about',
  },
  openGraph: {
    title: 'About Us | Airtronics Fixcare HVAC & AC Repair Dubai',
    description: 'Premier AC repair, HVAC maintenance, and electromechanical technical services in Dubai operating since 2022. Digital diagnostics, upfront quotes & 24/7 mobile fleet.',
    url: 'https://airtronicsfixcare.com/about',
    siteName: 'Airtronics Fixcare Technical Services LLC',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: '/images/home.jpeg',
        width: 1200,
        height: 630,
        alt: 'Airtronics Fixcare Technical Services LLC Dubai Team & Field Operations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Airtronics Fixcare HVAC & AC Repair Dubai',
    description: 'Dubai-certified HVAC engineers providing 24/7 AC repair, diagnostic maintenance, and OEM parts since 2022.',
    images: ['/images/home.jpeg'],
  },
};

export default function AboutPage() {
  return (
    <main
      className="min-h-screen bg-[#fcfcfc] selection:bg-[#005eb8] selection:text-white"
      aria-label="About Airtronics Fixcare Technical Services LLC"
    >
      {/* 1. Local SEO & AboutPage JSON-LD Structured Data */}
      <AboutSchema />

      {/* 2. Hero Section: Value Proposition & Key Metrics */}
      <AboutHero />

      {/* 3. Company Story & Advanced Diagnostic Toolkit */}
      <CompanyStory />

      {/* 4. Engineering Differentiators & Standards */}
      <CoreDifferentiators />

      {/* 5. Multi-Brand Technical Authority Carousel */}
      <BrandsSection />

      {/* 6. Frequently Asked Questions with FAQPage Schema */}
      <FAQSection />

      {/* 7. Emergency Booking & Direct Dispatch CTA */}
      <AboutCTA />
    </main>
  );
}
