import Hero from '@/components/home/Hero';
import ContactTicker from '@/components/home/ContactTicker';
import MoneySavingCTA from '@/components/home/MoneySavingCTA';
import AboutSection from '@/components/home/AboutSection';
import ServicesShowcase from '@/components/home/ServicesShowcase';
import ProcessSection from '@/components/home/ProcessSection';
import TeamSection from '@/components/home/TeamSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';

export const metadata = {
  title: 'Airtronics Fixcare Technical Services LLC | Premium HVAC Services In Dubai',
  description: 'Premium HVAC Solutions For Dubai Properties. Expert HVAC installation, AC repair, preventive maintenance, duct cleaning, and commercial climate control.',
  keywords: 'HVAC Dubai, HVAC Services Dubai, AC Repair Dubai, AC Installation Dubai, HVAC Maintenance Dubai, Commercial HVAC Dubai, Duct Cleaning Dubai, AMC Services Dubai'
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfcfc] selection:bg-[#c1121f] selection:text-white">
      <Hero />
      <ContactTicker />
      <MoneySavingCTA />
      <AboutSection />
      <ServicesShowcase />
      <ProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
