import type { Metadata } from 'next';
import React from 'react';
import Script from 'next/script';

import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ProcessSection from '@/components/home/ProcessSection';
import InvoiceQuoteTerms from '@/components/services/InvoiceQuoteTerms';
import BrandsSection from '@/components/about/BrandsSection';
import AboutCTA from '@/components/about/AboutCTA';
import ServicesFAQ from '@/components/services/ServicesFAQ';

export const metadata: Metadata = {
  title: 'AC & HVAC Services Dubai | 24/7 Repair, Installation & AMC | Airtronics',
  description: 'Complete air conditioning and HVAC services in Dubai. Emergency AC repair, central AC installation, preventive maintenance, duct cleaning, and AMC contracts across Dubai Marina, Palm Jumeirah, Downtown, and JVC.',
  keywords: [
    'HVAC services Dubai',
    'AC repair Dubai',
    'AC installation Dubai',
    'HVAC maintenance Dubai',
    'AC duct cleaning Dubai',
    'AC AMC Dubai',
    'commercial HVAC Dubai',
    'emergency AC repair Dubai',
    '24/7 AC repair Dubai',
    'Airtronics Fixcare Technical Services LLC'
  ].join(', '),
  openGraph: {
    title: 'AC & HVAC Services Dubai | Airtronics Fixcare Technical Services LLC',
    description: 'Certified HVAC engineers for 24/7 emergency AC repair, turnkey installations, duct sanitization, and corporate AMC contracts in Dubai.',
    url: 'https://www.airtronicsfixcare.ae/services',
    siteName: 'Airtronics Fixcare Technical Services LLC',
    locale: 'en_AE',
    type: 'website',
  },
};

const servicesHubSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'HVAC and Air Conditioning Services Dubai',
  'serviceType': 'HVAC & AC Technical Services',
  'provider': {
    '@type': 'HVACBusiness',
    'name': 'Airtronics Fixcare Technical Services LLC',
    'telephone': '+971 58 659 6321',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Commercial Bank of Dubai Building, M-01, Al Kabeesi',
      'addressLocality': 'Dubai',
      'addressCountry': 'AE'
    }
  },
  'areaServed': {
    '@type': 'City',
    'name': 'Dubai'
  },
  'description': 'Certified emergency AC repair, new HVAC installations, 24-point maintenance, duct cleaning, and AMC packages throughout Dubai.',
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Airtronics HVAC Services Catalog',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'AC Repair & Diagnostics Dubai',
          'url': 'https://www.airtronicsfixcare.ae/services/ac-repair'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'AC Installation & Replacement Dubai',
          'url': 'https://www.airtronicsfixcare.ae/services/ac-installation'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'HVAC Maintenance & Tuning Dubai',
          'url': 'https://www.airtronicsfixcare.ae/services/hvac-maintenance'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'AC Duct Cleaning & Sanitization Dubai',
          'url': 'https://www.airtronicsfixcare.ae/services/duct-cleaning'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Annual Maintenance Contracts (AMC) Dubai',
          'url': 'https://www.airtronicsfixcare.ae/services/amc'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Commercial & Industrial HVAC Solutions Dubai',
          'url': 'https://www.airtronicsfixcare.ae/services/commercial-hvac'
        }
      }
    ]
  }
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] selection:bg-[#005eb8] selection:text-white" aria-label="Airtronics HVAC Services Hub">
      {/* Schema.org Structured Data */}
      <Script
        id="services-hub-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesHubSchema) }}
      />

      {/* 1. Services Hero Section with Breadcrumb, H1, Trust Badges & Booking CTAs */}
      <ServicesHero />

      {/* 2. All 6 Services Showcase Grid with "Read More" and "Book Now" Buttons */}
      <ServicesGrid />

      {/* 3. Reused 5-Step Process Section from Home Page */}
      <ProcessSection />

      {/* 4. Terms and Conditions for Invoices and Quotes */}
      <InvoiceQuoteTerms />

      {/* 5. Multi-Brand Authority Carousel */}
      <BrandsSection />


      {/* 7. Dedicated Services Frequently Asked Questions */}
      <ServicesFAQ />

      {/* 8. Emergency Booking & Direct Dispatch CTA Banner */}
      <AboutCTA />
    </main>
  );
}
