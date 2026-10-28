import type { Metadata } from 'next';
import React from 'react';
import Script from 'next/script';

import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ProcessSection from '@/components/home/ProcessSection';
import InvoiceQuoteTerms from '@/components/services/InvoiceQuoteTerms';
import AboutCTA from '@/components/about/AboutCTA';
import ServicesFAQ from '@/components/services/ServicesFAQ';

export const metadata: Metadata = {
  title: 'HVAC Services Dubai | AC Repair, Installation & AMC | Airtronics',
  description: 'Professional air conditioning and HVAC solutions in Dubai. Precision diagnostics, turnkey installations, duct cleaning, and AMC contracts with OEM parts.',
  keywords: [
    'HVAC services Dubai',
    'AC solutions Dubai',
    'AC repair Dubai',
    'AC installation Dubai',
    'HVAC maintenance Dubai',
    'AC duct cleaning Dubai',
    'AC AMC Dubai',
    'commercial HVAC Dubai',
    'emergency AC repair Dubai',
    'Airtronics Fixcare Technical Services LLC'
  ].join(', '),
  alternates: {
    canonical: 'https://airtronicsfixcare.com/services',
  },
  openGraph: {
    title: 'HVAC Solutions Dubai | AC Repair & Installation | Airtronics Fixcare',
    description: 'Professional air conditioning and HVAC engineering solutions in Dubai. Certified technicians, OEM genuine parts, and transparent itemized pricing.',
    url: 'https://airtronicsfixcare.com/services',
    siteName: 'Airtronics Fixcare Technical Services LLC',
    images: [
      {
        url: '/images/hvac_maintenance_technician.jpg',
        width: 1200,
        height: 630,
        alt: 'Airtronics Certified HVAC Technician servicing AC in Dubai',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AC & HVAC Services Dubai | Airtronics Fixcare',
    description: 'Certified HVAC engineers for 24/7 emergency AC repair, turnkey installations, and AMC contracts in Dubai.',
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
        'name': 'Airtronics HVAC Services Catalog',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'AC Repair & Diagnostics Dubai',
              'description': 'Rapid 30-45 minute emergency AC troubleshooting, compressor diagnosis, refrigerant leak detection, and electrical repair.',
              'url': 'https://airtronicsfixcare.com/services/ac-repair'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'AC Installation & Replacement Dubai',
              'description': 'Turnkey installation for split, ducted, package, and VRF/VRV air conditioning units with factory warranty.',
              'url': 'https://airtronicsfixcare.com/services/ac-installation'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'HVAC Maintenance & Tuning Dubai',
              'description': '24-point preventive maintenance, chemical coil flushing, motor lubrication, and DEWA energy optimization.',
              'url': 'https://airtronicsfixcare.com/services/hvac-maintenance'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'AC Duct Cleaning & Sanitization Dubai',
              'description': 'Rotary brush duct cleaning, indoor air quality filtration, microbial mold removal, and HEPA vacuum sanitization.',
              'url': 'https://airtronicsfixcare.com/services/duct-cleaning'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Annual Maintenance Contracts (AMC) Dubai',
              'description': 'Quarterly scheduled visits, unlimited emergency breakdown visits, 24/7 priority dispatch, and zero labor fees.',
              'url': 'https://airtronicsfixcare.com/services/amc'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Commercial & Industrial HVAC Solutions Dubai',
              'description': 'Large-scale chillers, AHU/FAHU systems, warehouse ventilation, and commercial HVAC maintenance across Dubai.',
              'url': 'https://airtronicsfixcare.com/services/commercial-hvac'
            }
          }
        ]
      }
    }
  ]
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

      {/* 1. Services Hero Section with Home-Matching Parallax, Atmospheric Lighting & 3D Buttons */}
      <ServicesHero />

      {/* 2. All 6 Services Showcase Grid with Interactive Hover Image Reveal Cards */}
      <ServicesGrid />

      {/* 3. Reused 5-Step Process Section from Home Page */}
      <ProcessSection />

      {/* 4. Terms and Conditions for Invoices and Quotes */}
      <InvoiceQuoteTerms />

      {/* 5. Multi-Brand Authority Carousel */}
      {/* <BrandsSection /> */}

      {/* 6. Dedicated Services Frequently Asked Questions */}
      <ServicesFAQ />

      {/* 7. Emergency Booking & Direct Dispatch CTA Banner */}
      <AboutCTA />
    </main>
  );
}
