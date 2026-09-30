'use client';

import React from 'react';
import { 
  Eye, 
  Target, 
  ShieldCheck, 
  Award, 
  Truck, 
  Leaf,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function MissionVisionValues() {
  const pillars = [
    {
      id: 'transparency',
      icon: ShieldCheck,
      name: 'Absolute Transparency',
      execution: 'Detailed diagnostic summaries, clear pricing schedules, and photographic evidence provided before work begins.',
      impact: 'Complete protection against unexpected repair costs, hidden line items, and unneeded part replacements.',
      badgeColor: 'bg-blue-50 text-[#005eb8] border-blue-100',
    },
    {
      id: 'mastery',
      icon: Award,
      name: 'Technical Mastery',
      execution: 'Mandatory training for technicians covering advanced inverter systems, VRF networks, and central chilled-water infrastructure.',
      impact: 'Swift and precise fault resolution that preserves system integrity and prevents repetitive breakdowns.',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
    {
      id: 'deployment',
      icon: Truck,
      name: 'Rapid Deployment',
      execution: 'Centrally positioned mobile service vehicles carrying OEM spare components and precision maintenance machinery.',
      impact: 'Fast response times during peak summer heatwaves, protecting property interiors from excessive temperatures.',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-100',
    },
    {
      id: 'responsibility',
      icon: Leaf,
      name: 'Environmental Responsibility',
      execution: 'Strict compliance with UAE environmental protocols, closed-loop refrigerant recovery, and efficiency optimization.',
      impact: 'Lower overall building energy consumption, reduced carbon footprints, and measurable drops in monthly DEWA bills.',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-100',
    },
  ];

  return (
    <section aria-label="Mission, Vision and Core Values" className="py-16 md:py-24 bg-[#fcfcfc] border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        {/* Mission & Vision Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 w-32 h-32 bg-[#005eb8]/5 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="w-12 h-12 rounded-2xl bg-[#005eb8]/10 text-[#005eb8] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-[#005eb8] mb-2">Our Mission</h3>
            <h4 className="text-2xl font-bold text-[#111111] mb-3">Uncompromising Cooling & Technical Excellence</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              To provide Dubai homeowners, commercial operators, and facility managers with transparent, high-precision HVAC and electromechanical services that guarantee indoor thermal comfort, health, and energy conservation year-round.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 translate-x-4 -translate-y-4 w-32 h-32 bg-emerald-500/5 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xs uppercase font-bold tracking-widest text-emerald-600 mb-2">Our Vision</h3>
            <h4 className="text-2xl font-bold text-[#111111] mb-3">Dubai&apos;s Most Trusted Technical Partner</h4>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              To lead the UAE maintenance sector through digital diagnostic innovation, zero-surprise pricing, rapid emergency dispatch corridors, and sustainable building engineering practices.
            </p>
          </div>
        </div>

        {/* Core Values Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#005eb8] block mb-2">
            Institutional Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#111111] leading-tight">
            Core Corporate Values & Guiding Principles
          </h2>
          <p className="text-gray-600 text-base mt-4">
            The operational framework of Airtronics Fixcare Technical Services LLC centers on four institutional pillars designed to ensure technical reliability and long-term client trust.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#111111] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-[#111111]">{pillar.name}</h3>
                    </div>
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${pillar.badgeColor}`}>
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-3 mt-4">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-gray-400 font-bold block mb-1">
                        Operational Execution
                      </span>
                      <p className="text-sm text-gray-700 leading-relaxed font-medium">
                        {pillar.execution}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <span className="text-xs uppercase tracking-wider text-[#005eb8] font-bold block mb-1 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Client Value & Impact
                      </span>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {pillar.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Execution & Impact Data Table (Responsive) */}
        <div className="hidden lg:block bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold">Institutional Operational Framework</h3>
              <p className="text-xs text-gray-300">How Airtronics corporate values translate into measurable client outcomes across Dubai.</p>
            </div>
            <span className="text-xs uppercase font-bold tracking-widest px-3 py-1.5 rounded-full bg-white/10 text-brand-accent">
              Standard Operating Procedure
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase font-bold text-gray-500 tracking-wider">
                  <th className="p-4 pl-6">Corporate Value Pillar</th>
                  <th className="p-4">Operational Definition & Execution</th>
                  <th className="p-4 pr-6">Client Impact & Value Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {pillars.map((pillar) => (
                  <tr key={pillar.id} className="hover:bg-blue-50/30 transition-colors">
                    <td className="p-4 pl-6 font-bold text-[#111111] whitespace-nowrap">
                      {pillar.name}
                    </td>
                    <td className="p-4 text-gray-600 leading-relaxed max-w-md">
                      {pillar.execution}
                    </td>
                    <td className="p-4 pr-6 text-gray-700 font-medium leading-relaxed max-w-md">
                      {pillar.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
