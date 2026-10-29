import dynamic from 'next/dynamic';
import Hero from '@/components/home/Hero';
import QuickBookingBar from '@/components/ui/QuickBookingBar';
import ServicesShowcase from '@/components/home/ServicesShowcase';

// Code-split below-the-fold sections for instant FCP & optimal bundle splitting
const AboutSection = dynamic(() => import('@/components/home/AboutSection'));
const RecentWorkGallery = dynamic(() => import('@/components/home/RecentWorkGallery'));
const GoogleReviewsSection = dynamic(() => import('@/components/home/GoogleReviewsSection'));
const ProcessSection = dynamic(() => import('@/components/home/ProcessSection'));
const FaqSection = dynamic(() => import('@/components/home/FaqSection'));
const CtaSection = dynamic(() => import('@/components/home/CtaSection'));
const ServiceAreasSection = dynamic(() => import('@/components/home/ServiceArea'));
const CoreDifferentiators = dynamic(() => import('@/components/about/CoreDifferentiators'));
const BrandsSection = dynamic(() => import('@/components/about/BrandsSection'));

export const metadata = {
  title: '#1 AC Repair Dubai & 24/7 HVAC Maintenance Services | Airtronics',
  description: 'Certified AC repair and emergency HVAC maintenance across Dubai. 30–45 min arrival in Downtown, Marina, Jumeirah & Business Bay. 100% OEM parts. Call 24/7.',
  keywords: 'AC Repair Dubai, Emergency AC Repair Dubai, HVAC Maintenance Dubai, AC Cleaning Dubai, Chiller Repair Dubai, 24/7 AC Service Dubai, Airtronics Fixcare',
  alternates: {
    canonical: 'https://airtronicsfixcare.com',
  },
  openGraph: {
    title: '#1 AC Repair Dubai & 24/7 HVAC Maintenance Services | Airtronics',
    description: 'Certified AC repair and emergency HVAC maintenance across Dubai. 30–45 min arrival with 100% genuine parts.',
    url: 'https://airtronicsfixcare.com',
    siteName: 'Airtronics Fixcare Technical Services LLC',
    images: [
      {
        url: 'https://airtronicsfixcare.com/images/home.jpeg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Airtronics certified HVAC technician performing AC repair in Dubai',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '#1 AC Repair Dubai & 24/7 HVAC Maintenance Services | Airtronics',
    description: 'Certified AC repair and emergency HVAC maintenance across Dubai. 30–45 min arrival with 100% genuine parts.',
    images: ['https://airtronicsfixcare.com/images/home.jpeg'],
  },
};

const homeWebsiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://airtronicsfixcare.com/#website',
  url: 'https://airtronicsfixcare.com',
  name: 'Airtronics Fixcare Technical Services LLC',
  description: '#1 AC Repair & 24/7 HVAC Maintenance Services in Dubai',
  inLanguage: 'en-AE',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] selection:bg-[#005eb8] selection:text-white" aria-label="Main Content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeWebsiteSchema) }}
      />
      <Hero />
      <QuickBookingBar />
      <ServicesShowcase />
      <ProcessSection />
      <AboutSection />
      <RecentWorkGallery />
      <GoogleReviewsSection />
      <CoreDifferentiators />
      <BrandsSection />
      <ServiceAreasSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
