import type { Metadata } from 'next';
import React from 'react';
import Script from 'next/script';
import ContactHero from '@/components/contact/ContactHero';
import ContactSection from '@/components/contact/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Airtronics Fixcare | 24/7 AC Repair & HVAC Support Dubai',
  description: 'Contact Airtronics Fixcare in Dubai for emergency AC repair, HVAC maintenance, duct cleaning, and quotes. Call +971 58 659 6321 for 30–45 min on-site arrival.',
  keywords: [
    'Contact Airtronics',
    'AC Repair Dubai contact',
    'HVAC emergency hotline Dubai',
    'AC technician Dubai phone number',
    'AC Maintenance Dubai booking',
    'Airtronics Fixcare Technical Services LLC'
  ].join(', '),
  alternates: {
    canonical: 'https://airtronicsfixcare.com/contact',
  },
  openGraph: {
    title: 'Contact Airtronics Fixcare | 24/7 HVAC & AC Repair Dubai',
    description: 'Direct contact details for Airtronics Fixcare Dubai. Emergency dispatch hotline +971 58 659 6321, WhatsApp booking, and office location.',
    url: 'https://airtronicsfixcare.com/contact',
    siteName: 'Airtronics Fixcare Technical Services LLC',
    images: [
      {
        url: '/images/home.jpeg',
        width: 1200,
        height: 630,
        alt: 'Contact Airtronics Fixcare Technical Services Dubai',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Airtronics Fixcare | AC Repair Dubai',
    description: 'Call +971 58 659 6321 for 24/7 emergency AC repair & HVAC services across Dubai.',
    images: ['/images/home.jpeg'],
  },
};

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://airtronicsfixcare.com/contact#webpage',
      'url': 'https://airtronicsfixcare.com/contact',
      'name': 'Contact Airtronics Fixcare | 24/7 AC Repair & HVAC Support Dubai',
      'description': 'Contact details for Airtronics Fixcare Technical Services LLC in Dubai. Phone hotline, WhatsApp booking, and office address.',
      'breadcrumb': {
        '@id': 'https://airtronicsfixcare.com/contact#breadcrumb'
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://airtronicsfixcare.com/contact#breadcrumb',
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
          'name': 'Contact',
          'item': 'https://airtronicsfixcare.com/contact'
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
        'addressCountry': 'AE'
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '00:00',
        'closes': '23:59'
      }
    }
  ]
};

export default function ContactPage() {
  return (
    <main>
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactHero />
      <ContactSection />
    </main>
  );
}