import React from 'react';
import Script from 'next/script';

export default function AboutSchema() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://airtronicsfixcare.com/about#webpage',
        'url': 'https://airtronicsfixcare.com/about',
        'name': 'About Us | Airtronics Fixcare Technical Services LLC Dubai',
        'description': 'Learn about Airtronics Fixcare Technical Services LLC, established in Dubai in 2022. Expert AC repair, HVAC maintenance, digital diagnostics, and duct cleaning across Dubai.',
        'isPartOf': {
          '@type': 'WebSite',
          '@id': 'https://airtronicsfixcare.com/#website',
          'url': 'https://airtronicsfixcare.com',
          'name': 'Airtronics Fixcare Technical Services LLC',
        },
        'about': {
          '@id': 'https://airtronicsfixcare.com/#organization',
        },
      },
      {
        '@type': 'HVACBusiness',
        '@id': 'https://airtronicsfixcare.com/#organization',
        'name': 'Airtronics Fixcare Technical Services LLC',
        'legalName': 'Airtronics Fixcare Technical Services L.L.C',
        'image': 'https://airtronicsfixcare.com/images/airtronics-logo.png',
        'url': 'https://airtronicsfixcare.com',
        'telephone': '+971-58-659-6321',
        'priceRange': 'AED 150 - AED 2500',
        'foundingDate': '2022',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Al Qusais Industrial Area',
          'addressLocality': 'Dubai',
          'addressRegion': 'Dubai',
          'postalCode': '00000',
          'addressCountry': 'AE',
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 25.1972,
          'longitude': 55.2744,
        },
        'openingHoursSpecification': [
          {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            'opens': '00:00',
            'closes': '23:59',
          },
        ],
        'areaServed': [
          { '@type': 'AdministrativeArea', 'name': 'Dubai' },
          { '@type': 'AdministrativeArea', 'name': 'Sharjah' },
          { '@type': 'AdministrativeArea', 'name': 'Ajman' },
          { '@type': 'AdministrativeArea', 'name': 'Abu Dhabi' },
          { '@type': 'AdministrativeArea', 'name': 'Ras Al Khaimah' },
          { '@type': 'AdministrativeArea', 'name': 'Downtown Dubai' },
          { '@type': 'AdministrativeArea', 'name': 'Dubai Marina' },
          { '@type': 'AdministrativeArea', 'name': 'Palm Jumeirah' },
          { '@type': 'AdministrativeArea', 'name': 'Business Bay' },
          { '@type': 'AdministrativeArea', 'name': 'JVC' },
        ],
        'knowsAbout': [
          'Air Conditioning Repair',
          'HVAC Preventative Maintenance',
          'AC Duct Cleaning and Sanitization',
          'Thermostat Replacement and Calibration',
          'Refrigerant Gas Top-Up',
          'Chilled Water Fan Coil System Servicing',
          'District Cooling FCU Repair',
        ],
      },
    ],
  };

  return (
    <Script
      id="airtronics-about-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
