import type { Metadata } from 'next';
import React from 'react';
import Script from 'next/script';
import dynamic from 'next/dynamic';

import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import { SERVICES_DATA } from '@/data/servicesData';

// Code-split below-the-fold sections for optimized initial bundle & performance
const ProcessSection = dynamic(() => import('@/components/home/ProcessSection'));
const ServiceQualitySection = dynamic(() => import('@/components/services/ServiceQualitySection'));
const ServicesFAQ = dynamic(() => import('@/components/services/ServicesFAQ'));
const AboutCTA = dynamic(() => import('@/components/about/AboutCTA'));

export const metadata: Metadata = {
  title: {
    absolute: 'All AC & HVAC Services in Dubai | Airtronics Fixcare',
  },
  description: 'Fast 24/7 AC repair, installation, duct cleaning, and yearly maintenance in Dubai. 30–45 min arrival for homes, villas, and offices. Clear upfront prices.',
  keywords: [
    'AC services Dubai',
    'HVAC services Dubai',
    'AC repair Dubai',
    'AC installation Dubai',
    'AC cleaning Dubai',
    'AC duct cleaning Dubai',
    'AC AMC Dubai',
    'HVAC maintenance Dubai',
    'emergency AC repair Dubai',
    'Airtronics Fixcare Technical Services LLC'
  ].join(', '),
  alternates: {
    canonical: 'https://airtronicsfixcare.com/services',
  },
  openGraph: {
    title: 'All AC & HVAC Services in Dubai | Airtronics Fixcare',
    description: 'Fast 24/7 AC repair, new unit installation, duct cleaning, and yearly maintenance across Dubai. Clear prices and original parts.',
    url: 'https://airtronicsfixcare.com/services',
    siteName: 'Airtronics Fixcare Technical Services LLC',
    images: [
      {
        url: '/images/hvac_maintenance_technician.jpg',
        width: 1200,
        height: 630,
        alt: 'Airtronics trained AC technician servicing an air conditioner in Dubai',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All AC & HVAC Services in Dubai | Airtronics Fixcare',
    description: 'Fast 24/7 AC repair, installation, duct cleaning, and yearly maintenance in Dubai with clear prices.',
    images: ['/images/hvac_maintenance_technician.jpg'],
  },
};

const servicesHubSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://airtronicsfixcare.com/services#webpage',
      'url': 'https://airtronicsfixcare.com/services',
      'name': 'AC & HVAC Services Dubai | 24/7 Repair, Installation & AMC | Airtronics',
      'description': 'Comprehensive air conditioning and HVAC engineering services in Dubai including emergency repair, installation, duct cleaning, and annual maintenance contracts.',
      'isPartOf': {
        '@type': 'WebSite',
        '@id': 'https://airtronicsfixcare.com/#website',
        'url': 'https://airtronicsfixcare.com',
        'name': 'Airtronics Fixcare Technical Services LLC'
      },
      'breadcrumb': {
        '@id': 'https://airtronicsfixcare.com/services#breadcrumb'
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://airtronicsfixcare.com/services#breadcrumb',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://airtronicsfixcare.com'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Services',
          'item': 'https://airtronicsfixcare.com/services'
        }
      ]
    },
    {
      '@type': 'HVACBusiness',
      '@id': 'https://airtronicsfixcare.com/#business',
      'name': 'Airtronics Fixcare Technical Services LLC',
      'telephone': '+971-58-659-6321',
      'url': 'https://airtronicsfixcare.com',
      'image': 'https://airtronicsfixcare.com/images/airtronics-logo.png',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Commercial Bank of Dubai Building, M-01, Al Khabaisi',
        'addressLocality': 'Dubai',
        'addressRegion': 'Dubai',
        'addressCountry': 'AE'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 25.2697,
        'longitude': 55.334
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '00:00',
        'closes': '23:59'
      },
      'priceRange': 'AED 150 - AED 1500',
      'areaServed': [
        { '@type': 'AdministrativeArea', 'name': 'Dubai' },
        { '@type': 'AdministrativeArea', 'name': 'Dubai Marina' },
        { '@type': 'AdministrativeArea', 'name': 'Downtown Dubai' },
        { '@type': 'AdministrativeArea', 'name': 'Palm Jumeirah' },
        { '@type': 'AdministrativeArea', 'name': 'Business Bay' },
        { '@type': 'AdministrativeArea', 'name': 'Arabian Ranches' },
        { '@type': 'AdministrativeArea', 'name': 'Jumeirah Village Circle (JVC)' },
        { '@type': 'AdministrativeArea', 'name': 'Dubai Hills Estate' }
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Airtronics AC & HVAC Services Catalog Dubai',
        'itemListElement': SERVICES_DATA.map((service) => ({
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': service.title,
            'description': service.tagline,
            'url': `https://airtronicsfixcare.com/services/${service.slug}`,
          },
        })),
      },
    }
  ]
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#0076FF] selection:text-white" aria-label="Airtronics HVAC Services Hub">
      {/* Schema.org Structured Data */}
      <Script
        id="services-hub-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesHubSchema) }}
      />

      {/* 1. Services Split Architectural Hero with Home-Matching Palette, Watermark & Slanted Controls */}
      <ServicesHero />

      {/* 2. Interactive 22-Service HVAC Catalog Grid with Category Tabs & Filter Search */}
      <ServicesGrid />

      {/* 3. Reused 5-Step Process & Liquid-Glass About Section */}
      <ProcessSection />

      {/* 4. Plain-English Service Quality & Customer Expectations Section */}
      <ServiceQualitySection />

      {/* 5. Dedicated Services Frequently Asked Questions */}
      <ServicesFAQ />

      {/* 6. Emergency Booking & Direct Dispatch CTA Banner */}
      <AboutCTA />
    </main>
  );
}
