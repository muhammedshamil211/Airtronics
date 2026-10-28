import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import Script from 'next/script';

import { SERVICES_DATA, ServiceDetail } from '@/data/servicesData';
import ServiceDetailHero from '@/components/services/ServiceDetailHero';
import ServiceDetailContent from '@/components/services/ServiceDetailContent';
import InvoiceQuoteTerms from '@/components/services/InvoiceQuoteTerms';
import AboutCTA from '@/components/about/AboutCTA';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Static Generation of All 6 Service Pages
export async function generateStaticParams() {
  return SERVICES_DATA.map(s => ({
    slug: s.slug,
  }));
}

// 2. SEO-Optimized Metadata per Service Page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find(s => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | Airtronics Fixcare Dubai',
      description: 'The requested HVAC service could not be found.',
    };
  }

  return {
    title: `${service.metaTitle} | Airtronics Fixcare`,
    description: service.metaDescription,
    keywords: service.keywords.join(', '),
    alternates: {
      canonical: `https://airtronicsfixcare.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Airtronics Fixcare Dubai`,
      description: service.metaDescription,
      url: `https://airtronicsfixcare.com/services/${service.slug}`,
      siteName: 'Airtronics Fixcare Technical Services LLC',
      locale: 'en_AE',
      type: 'article',
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: `${service.title} in Dubai`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Airtronics Fixcare Dubai`,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

// 3. Dynamic Service Detail Page Component
export default async function SingleServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Schema.org Graph Structured Data for this specific service
  const serviceSchemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://airtronicsfixcare.com/services/${service.slug}#service`,
        'name': service.title,
        'alternateName': service.shortTitle,
        'serviceType': 'HVAC and Air Conditioning Service',
        'url': `https://airtronicsfixcare.com/services/${service.slug}`,
        'image': `https://airtronicsfixcare.com${service.image}`,
        'description': service.overview,
        'termsOfService': '90-Day Written Warranty on Genuine OEM Parts & Labor',
        'provider': {
          '@type': 'HVACBusiness',
          '@id': 'https://airtronicsfixcare.com/#business',
          'name': 'Airtronics Fixcare Technical Services LLC',
          'telephone': '+971-58-659-6321',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Commercial Bank of Dubai Building, M-01, Al Khabaisi',
            'addressLocality': 'Dubai',
            'addressCountry': 'AE',
          },
        },
        'areaServed': service.dubaiLocations.map(loc => ({
          '@type': 'AdministrativeArea',
          'name': `${loc}, Dubai`,
        })),
        'offers': {
          '@type': 'Offer',
          'priceCurrency': 'AED',
          'availability': 'https://schema.org/InStock',
          'url': `https://airtronicsfixcare.com/services/${service.slug}`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://airtronicsfixcare.com/services/${service.slug}#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://airtronicsfixcare.com',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Services',
            'item': 'https://airtronicsfixcare.com/services',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': service.shortTitle,
            'item': `https://airtronicsfixcare.com/services/${service.slug}`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `https://airtronicsfixcare.com/services/${service.slug}#faq`,
        'mainEntity': service.faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.a,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#fcfcfc] selection:bg-[#005eb8] selection:text-white" aria-label={service.title}>
      {/* Schema.org Graph Structured Data */}
      <Script
        id={`service-detail-schema-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaGraph) }}
      />

      {/* 1. Dedicated Service Hero Section with Top Image Banner, Main H1, Trust Badges & CTAs */}
      <ServiceDetailHero service={service} />

      {/* 2. Detailed Technical Scope, Benefits, Common Issues, Locations & FAQs */}
      <ServiceDetailContent service={service} />

      {/* 3. Terms and Conditions for Invoices and Quotes */}
      <InvoiceQuoteTerms />

      {/* 4. Emergency Booking Callout Banner */}
      <AboutCTA />
    </main>
  );
}
