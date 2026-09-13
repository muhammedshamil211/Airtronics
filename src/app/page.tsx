import Hero from '@/components/home/Hero';
import ContactTicker from '@/components/home/ContactTicker';
import MoneySavingCTA from '@/components/home/MoneySavingCTA';
import AboutSection from '@/components/home/AboutSection';
import ServicesShowcase from '@/components/home/ServicesShowcase';
import ProcessSection from '@/components/home/ProcessSection';
import TeamSection from '@/components/home/TeamSection';
import FaqSection from '@/components/home/FaqSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';

export const metadata = {
  title: 'Airtronics Fixcare Technical Services | Top AC Repair in Dubai',
  description: 'Premium HVAC Solutions For Dubai Properties. Expert HVAC installation, AC repair, preventive maintenance, duct cleaning, and commercial climate control with 24/7 response.',
  keywords: 'HVAC Dubai, HVAC Services Dubai, AC Repair Dubai, AC Installation Dubai, HVAC Maintenance Dubai, Commercial HVAC Dubai, Duct Cleaning Dubai, AMC Services Dubai, Emergency AC Fix'
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] selection:bg-[#c1121f] selection:text-white" aria-label="Main Content">
      <Hero />
      <ContactTicker />
      <MoneySavingCTA />
      <AboutSection />
      <ServicesShowcase />
      <ProcessSection />
      <TeamSection />
      <FaqSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
