'use client';

import React, { useState } from 'react';
import {
  Building2,
  Home,
  Layers,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesMatrix() {
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'commercial'>('all');

  const matrixData = [
    {
      id: 'split-ac',
      category: 'Split and Multi-Split Air Conditioning Systems',
      residential: 'Luxury villas, townhouses, and residential apartments',
      commercial: 'Retail boutiques, private executive offices, and clinics',
      scope: 'Microcomputer control board diagnostics, fan motor balancing, and refrigerant pressure adjustments.',
      badge: 'Most Common',
    },
    {
      id: 'ducted-ac',
      category: 'Central Ducted & Packaged Systems',
      residential: 'High-end private villas and full residential compounds',
      commercial: 'Corporate office spaces, educational institutions, and warehouses',
      scope: 'Duct static pressure audits, industrial belt calibrations, and thermal heat-exchanger chemical flushes.',
      badge: 'High Performance',
    },
    {
      id: 'chilled-fcu',
      category: 'Chilled Water Fan Coil Units (FCU)',
      residential: 'High-rise freehold apartment residences',
      commercial: 'Commercial business towers and mixed-use commercial developments',
      scope: 'Motorized two-way modulating valve repairs, strainer cleaning, and thermostat sensor recalibration.',
      badge: 'District Cooling',
    },
    {
      id: 'fahu-systems',
      category: 'Fresh Air Handling Units (FAHU)',
      residential: 'Large residential villa estates with dedicated fresh-air feeds',
      commercial: 'Commercial dining kitchens, hospitality venues, and medical facilities',
      scope: 'Differential pressure monitoring, primary and secondary filter renewals, and deep coil sanitization.',
      badge: 'Air Quality',
    },
    {
      id: 'amc-contracts',
      category: 'Preventative Maintenance Contracts (AMC)',
      residential: 'Biannual and quarterly home maintenance care packages',
      commercial: 'Bespoke annual maintenance service agreements with strict SLA terms',
      scope: 'Comprehensive preventative inspections, priority emergency response, and preventative parts renewals.',
      badge: 'Best Value',
    },
  ];

  return (
    <section aria-label="Dual Market Capabilities Matrix" className="py-16 md:py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#005eb8] block mb-2">
              Engineering Scope & Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#111111] leading-tight">
              Dual-Market Technical Service Capabilities
            </h2>
            <p className="text-gray-600 text-base mt-3">
              Airtronics Fixcare Technical Services LLC delivers specialized engineering services tailored to the distinct operational requirements of both private residences and commercial facilities across Dubai.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-full self-start lg:self-auto border border-gray-200">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${activeTab === 'all'
                  ? 'bg-[#005eb8] text-white shadow-md'
                  : 'text-gray-600 hover:text-[#111111]'
                }`}
            >
              All Systems
            </button>
            <button
              onClick={() => setActiveTab('residential')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${activeTab === 'residential'
                  ? 'bg-[#005eb8] text-white shadow-md'
                  : 'text-gray-600 hover:text-[#111111]'
                }`}
            >
              <Home className="w-3.5 h-3.5" />
              Residential
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${activeTab === 'commercial'
                  ? 'bg-[#005eb8] text-white shadow-md'
                  : 'text-gray-600 hover:text-[#111111]'
                }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              Commercial
            </button>
          </div>
        </div>

        {/* Desktop Data Table Matrix */}
        <div className="hidden lg:block bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm mb-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white text-xs uppercase font-bold tracking-wider">
                <th className="p-5 pl-6">HVAC System Category</th>
                <th className="p-5">
                  <div className="flex items-center gap-1.5">
                    <Home className="w-4 h-4 text-brand-accent" />
                    <span>Residential Applications</span>
                  </div>
                </th>
                <th className="p-5">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-brand-accent" />
                    <span>Commercial Applications</span>
                  </div>
                </th>
                <th className="p-5 pr-6">Primary Engineering Scope of Work</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {matrixData.map((item) => (
                <tr key={item.id} className="hover:bg-blue-50/20 transition-colors">
                  <td className="p-5 pl-6 font-bold text-[#111111] max-w-[240px]">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-blue-50 text-[#005eb8] text-xs font-semibold mb-1">
                      {item.badge}
                    </span>
                    <div>{item.category}</div>
                  </td>
                  <td className="p-5 text-gray-700 max-w-[220px]">
                    {item.residential}
                  </td>
                  <td className="p-5 text-gray-700 max-w-[220px]">
                    {item.commercial}
                  </td>
                  <td className="p-5 pr-6 text-gray-600 leading-relaxed max-w-[320px]">
                    {item.scope}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / Responsive Cards view */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden mb-12">
          {matrixData.map((item) => (
              <div
                key={item.id}
                className="bg-[#fcfcfc] rounded-3xl p-6 border border-gray-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#005eb8]/10 text-[#005eb8] text-xs font-bold">
                      {item.badge}
                    </span>
                    <Layers className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] mb-4">{item.category}</h3>

                  {(activeTab === 'all' || activeTab === 'residential') && (
                    <div className="mb-3 p-3.5 rounded-2xl bg-white border border-gray-100">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900 mb-1">
                        <Home className="w-3.5 h-3.5 text-[#005eb8]" />
                        <span>Residential Scope:</span>
                      </div>
                      <p className="text-xs text-gray-600">{item.residential}</p>
                    </div>
                  )}

                  {(activeTab === 'all' || activeTab === 'commercial') && (
                    <div className="mb-3 p-3.5 rounded-2xl bg-white border border-gray-100">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-gray-900 mb-1">
                        <Building2 className="w-3.5 h-3.5 text-[#005eb8]" />
                        <span>Commercial Scope:</span>
                      </div>
                      <p className="text-xs text-gray-600">{item.commercial}</p>
                    </div>
                  )}

                  <div className="mt-4 pt-4 border-t border-gray-200/60">
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block mb-1">
                      Engineering Deliverables
                    </span>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {item.scope}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Bottom Capabilities Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-[#003366] rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-6 h-6 text-brand-accent" />
            </div>
            <div>
              <h4 className="text-lg font-bold">Custom Commercial & Villa Maintenance Contracts</h4>
              <p className="text-xs sm:text-sm text-gray-300">
                Need customized SLAs for property management companies, freehold towers, or villa clusters?
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-full bg-white text-[#111111] hover:bg-gray-100 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg"
          >
            <span>Request Corporate AMC Quote</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
