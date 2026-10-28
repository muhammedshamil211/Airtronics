import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileFloatingBar from "@/components/ui/MobileFloatingBar";

export const metadata: Metadata = {
  metadataBase: new URL('https://airtronicsfixcare.com'),
  title: {
    default: "Airtronics Fixcare | #1 AC Repair & 24/7 HVAC Services in Dubai",
    template: "%s | Airtronics Fixcare Dubai",
  },
  description: "Top-rated 24/7 AC repair, emergency HVAC maintenance, chiller servicing, and deep duct cleaning across Dubai. 30–45 min arrival with 100% genuine OEM parts.",
  keywords: "AC Repair Dubai, HVAC Dubai, Emergency AC Repair, AC Maintenance Dubai, Duct Cleaning Dubai, Chiller Repair Dubai, 24/7 AC Service Dubai, Airtronics Fixcare",
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: "Airtronics Fixcare | #1 AC Repair & 24/7 HVAC Services in Dubai",
    description: "24/7 emergency AC repair, HVAC maintenance, and duct cleaning across Dubai. Certified technicians arriving in 30–45 mins.",
    url: "https://airtronicsfixcare.com",
    siteName: "Airtronics Fixcare Technical Services LLC",
    images: [
      {
        url: "/images/home.jpeg",
        width: 1200,
        height: 630,
        alt: "Airtronics Certified HVAC Technician servicing AC in Dubai",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airtronics Fixcare | #1 AC Repair & 24/7 HVAC Services in Dubai",
    description: "24/7 emergency AC repair, HVAC maintenance, and duct cleaning across Dubai. 30–45 min arrival.",
    images: ["/images/home.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'AE-DU',
    'geo.placename': 'Dubai',
    'geo.position': '25.2048;55.2708',
    'ICBM': '25.2048, 55.2708',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const globalSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Airtronics Fixcare Technical Services LLC",
    "url": "https://airtronicsfixcare.com",
    "image": "https://airtronicsfixcare.com/image/logo.png",
    "description": "Professional HVAC and AC Repair services in Dubai. 24/7 emergency response, installation, and maintenance across all major districts.",
    "telephone": "+971-58-659-6321",
    "priceRange": "AED 150 - AED 1500",
    "currenciesAccepted": "AED",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2048,
      "longitude": 55.2708
    },
    "areaServed": [
      { "@type": "City", "name": "Dubai" },
      { "@type": "AdministrativeArea", "name": "Downtown Dubai" },
      { "@type": "AdministrativeArea", "name": "Dubai Marina" },
      { "@type": "AdministrativeArea", "name": "Palm Jumeirah" },
      { "@type": "AdministrativeArea", "name": "Business Bay" },
      { "@type": "AdministrativeArea", "name": "JLT" },
      { "@type": "AdministrativeArea", "name": "Arabian Ranches" },
      { "@type": "AdministrativeArea", "name": "Al Barsha" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "HVAC & AC Repair Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency AC Repair Dubai" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HVAC Maintenance & AMC" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deep AC Duct Cleaning" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chilled Water FCU & Central AC Repair" } }
      ]
    }
  };

  return (
    <html
      lang="en"
      className="font-sans h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap" rel="stylesheet" />
        <Script id="global-hvac-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <MobileFloatingBar />
      </body>
    </html>
  );
}
