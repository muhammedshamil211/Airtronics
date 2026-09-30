import type { Metadata } from 'next';
import React from 'react';

import AboutSchema from '@/components/about/AboutSchema';
import AboutHero from '@/components/about/AboutHero';
import CompanyStory from '@/components/about/CompanyStory';
import MissionVisionValues from '@/components/about/MissionVisionValues';
import ServicesMatrix from '@/components/about/ServicesMatrix';
import CoreDifferentiators from '@/components/about/CoreDifferentiators';
import BrandsSection from '@/components/about/BrandsSection';
import AirQualityEnergy from '@/components/about/AirQualityEnergy';
import ServiceAreasSection from '@/components/home/ServiceArea';
import AboutCTA from '@/components/about/AboutCTA';
import FAQSection from '@/components/about/FAQSection';

export const metadata: Metadata = {
  title: 'About Us | Airtronics Fixcare Technical Services LLC Dubai',
  description: 'Learn about Airtronics Fixcare Technical Services LLC, established in Dubai in 2022. Expert AC repair, HVAC maintenance, digital diagnostics, and duct cleaning across Dubai Marina, Palm Jumeirah, Arabian Ranches, JVC, Downtown, and Business Bay.',
  keywords: [
    'AC repair Dubai',
    'AC maintenance Dubai',
    'Emergency AC repair Dubai',
    'AC not cooling Dubai',
    'AC duct cleaning Dubai',
    'Technical services company Dubai',
    'Airtronics Fixcare Technical Services LLC',
    'HVAC company Dubai 2022'
  ].join(', '),
  openGraph: {
    title: 'About Airtronics Fixcare Technical Services LLC Dubai',
    description: 'Premier AC repair, HVAC maintenance, and electromechanical technical services in Dubai operating since 2022. Digital diagnostics, upfront quotes & 24/7 mobile fleet.',
    url: 'https://www.airtronicsfixcare.ae/about',
    siteName: 'Airtronics Fixcare Technical Services LLC',
    locale: 'en_AE',
    type: 'website',
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] selection:bg-[#005eb8] selection:text-white" aria-label="About Airtronics Fixcare Technical Services LLC">
      {/* Local SEO HVACBusiness JSON-LD Schema */}
      <AboutSchema />

      {/* 1. Hero Section & Value Proposition */}
      <AboutHero />

      {/* 2. Corporate Journey & Operational Vision Since 2022 */}
      <CompanyStory />

      {/* 3. Core Corporate Values & Guiding Principles */}
      <MissionVisionValues />

      {/* 4. Dual-Market Technical Service Capabilities Matrix */}
      <ServicesMatrix />

      {/* 5. Engineering Differentiators & Operational Standards */}
      <CoreDifferentiators />

      {/* 6. Multi-Brand Technical Authority Carousel */}
      <BrandsSection />

      {/* 7. Indoor Air Purity, Energy Conservation & DEWA Optimization */}
      <AirQualityEnergy />

      {/* 7. Geographic Service Areas */}
      <ServiceAreasSection />

      {/* 8. Frequently Asked Questions */}
      <FAQSection />

      {/* 9. Emergency Booking & Direct Dispatch CTA */}
      <AboutCTA />

      {/* Local SEO Anchor Footer Summary */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
          <h4 className="text-base font-bold text-[#111111] mb-3 uppercase tracking-wider">
            Airtronics Fixcare Technical Services LLC — Dubai Local HVAC Leadership
          </h4>
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-4xl mx-auto">
            Looking for a trusted <strong className="font-semibold text-gray-700">technical services company in Dubai</strong>? Airtronics Fixcare Technical Services LLC delivers 24/7 <strong className="font-semibold text-gray-700">emergency AC repair in Dubai</strong>, professional <strong className="font-semibold text-gray-700">AC maintenance in Dubai Marina</strong>, deep <strong className="font-semibold text-gray-700">AC duct cleaning in Arabian Ranches</strong>, and district cooling FCU servicing across <strong className="font-semibold text-gray-700">Downtown Dubai, Palm Jumeirah, JVC, and Business Bay</strong>. Contact our engineering dispatch team today for upfront fixed quotes and zero hidden charges.
          </p>
        </div>
      </section>
    </main>
  );
}
