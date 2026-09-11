import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airtronics Fixcare | Premium AC Repair & HVAC Services In Dubai",
  description: "24/7 expert AC repair, HVAC maintenance, and duct cleaning across Dubai. Certified technicians serving Downtown, Marina, Jumeirah, and more.",
  keywords: "HVAC Dubai, AC Repair Dubai, HVAC Maintenance, Duct Cleaning Dubai, Emergency AC Fix, Chiller Maintenance, Airtronics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const globalSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Airtronics Fixcare Technical Services LLC",
    "image": "https://airtronicsfixcare.com/image/logo.png",
    "description": "Professional HVAC and AC Repair services in Dubai. 24/7 emergency response, installation, and maintenance across all major districts.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "areaServed": [
      "Downtown Dubai", "Dubai Marina", "Jumeirah", "Palm Jumeirah", 
      "Business Bay", "Al Barsha", "Arabian Ranches", "JLT", "Mirdif"
    ],
    "telephone": "+971-58-659-6321",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} font-sans h-full antialiased`}
    >
      <head>
        <Script id="global-hvac-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
