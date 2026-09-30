import React from 'react';
import Script from 'next/script';

export default function AboutSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Airtronics Fixcare Technical Services LLC",
    "image": "https://www.airtronicsfixcare.ae/images/logo.png",
    "@id": "https://www.airtronicsfixcare.ae/#organization",
    "url": "https://www.airtronicsfixcare.ae",
    "telephone": "+971-58-659-6321",
    "priceRange": "AED 150 - AED 2500",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Prime Business Corridor",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.1972,
      "longitude": 55.2744
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Dubai Marina" },
      { "@type": "AdministrativeArea", "name": "Palm Jumeirah" },
      { "@type": "AdministrativeArea", "name": "Arabian Ranches" },
      { "@type": "AdministrativeArea", "name": "Jumeirah Village Circle" },
      { "@type": "AdministrativeArea", "name": "Downtown Dubai" },
      { "@type": "AdministrativeArea", "name": "Business Bay" },
      { "@type": "AdministrativeArea", "name": "Dubai Hills Estate" }
    ],
    "knowsAbout": [
      "Air Conditioning Repair",
      "HVAC Preventative Maintenance",
      "AC Duct Cleaning and Sanitization",
      "Thermostat Replacement and Calibration",
      "Refrigerant Gas Top-Up",
      "Chilled Water Fan Coil System Servicing",
      "Electromechanical Technical Services"
    ],
    "foundingDate": "2022"
  };

  return (
    <Script
      id="airtronics-about-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
