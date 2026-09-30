import React from 'react';
import { 
  Wind, 
  Sparkles, 
  Zap, 
  ShieldAlert, 
  CheckCircle2,
  Droplets,
  Fan
} from 'lucide-react';
import Image from 'next/image';

export default function AirQualityEnergy() {
  const steps = [
    {
      icon: Fan,
      title: 'Rotary Brush Vacuuming',
      description: 'High-powered rotary brush vacuums dislodge packed desert dust & sand from supply & return ducting without dispersing dust into living areas.',
    },
    {
      icon: Sparkles,
      title: 'Hospital-Grade Sanitization',
      description: 'System components are treated with hospital-grade, chemical-free sanitizing agents that eliminate mold, microbial colonies, and stale odors.',
    },
    {
      icon: Droplets,
      title: 'Non-Acidic Chemical Coil Flush',
      description: 'Outdoor condenser and indoor evaporator coils are treated with non-acidic flushes that dissolve baked-on grime without eroding aluminum fins.',
    },
    {
      icon: Zap,
      title: 'DEWA Electrical Current Tuning',
      description: 'Restores original thermodynamic heat exchange rates, reducing compressor running amperage and trimming monthly DEWA utility bills.',
    },
  ];

  return (
    <section aria-label="Indoor Air Quality and Energy Efficiency" className="py-16 md:py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#005eb8] mb-3">
            <Wind className="w-4 h-4" />
            <span>Health & Efficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#111111] leading-tight">
            Environmental Sustainability, Indoor Air Purity, and Utility Conservation
          </h2>
          <p className="text-gray-600 text-base mt-3">
            In Dubai&apos;s demanding climate, air conditioning performance directly impacts both human respiratory wellness and household operating costs.
          </p>
        </div>

        {/* Narrative & Image Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5 text-gray-600 leading-relaxed text-base">
            <p>
              The region&apos;s persistent desert dust storms carry fine particulates that infiltrate air handling systems. These particulates settle inside ductwork, creating conditions for the growth of mould, bacteria, and allergens within closed interior environments.
            </p>
            <p>
              At the same time, when dust layers build up on condenser and evaporator coils, heat transfer rates drop significantly. This forces HVAC compressors to run longer and draw higher electrical currents to meet target room temperatures, driving up monthly DEWA utility bills.
            </p>
            <p>
              <strong className="text-[#111111] font-semibold">Airtronics Fixcare Technical Services LLC</strong> counters these problems with specialized sanitization and system tuning services. Technicians utilize high-powered rotary brush vacuums to dislodge packed debris from supply and return air ducting without dispersing dust into living areas. System components are treated using hospital-grade, chemical-free sanitizing agents that eliminate microbial colonies and clear stale, musty odors.
            </p>

            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-sm text-gray-700 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#005eb8] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#005eb8] font-semibold">Measurable Energy Savings:</strong> Field testing demonstrates up to 15%–25% reductions in AC power consumption following complete coil chemical flushing and refrigerant pressure rebalancing.
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-slate-900 group">
              <div className="relative h-[360px] sm:h-[420px] w-full">
                <Image
                  src="/images/duct_cleaning.png"
                  alt="Deep Air Duct Cleaning and Sanitization Service in Dubai"
                  fill
                  className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-white">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-accent mb-1">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Indoor Air Hygiene</span>
                </div>
                <h3 className="text-base font-bold">Breathe Clean, Allergy-Free Air</h3>
                <p className="text-xs text-gray-200 mt-1">
                  Eliminating mold spores, dust mites, and airborne pathogens across Dubai residences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#fcfcfc] p-6 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between hover:bg-white hover:shadow-md transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#005eb8]/10 text-[#005eb8] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/60 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  Step 0{idx + 1} Protocol
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
