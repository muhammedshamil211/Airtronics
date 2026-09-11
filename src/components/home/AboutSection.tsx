'use client';

import React from 'react';
import Image from 'next/image';

// Enhanced features with stronger SEO keywords for the Dubai market
const features = [
  {
    id: '01',
    title: 'Certified HVAC Technicians',
    description: 'Our team consists of fully licensed, insured, and Dubai Municipality-approved AC experts with years of local experience.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '02',
    title: '24/7 Emergency AC Repair',
    description: 'AC breakdowns don’t wait. We offer round-the-clock rapid response across all Dubai neighborhoods for emergency cooling solutions.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'Quality Parts & Guarantee',
    description: 'We use premium, original manufacturer parts and provide a 100% satisfaction guarantee on all AC repair and installation services.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '04',
    title: 'Transparent, Upfront Pricing',
    description: 'No hidden fees. You get honest, upfront quotes before we start any AC maintenance or duct cleaning work on your property.',
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=800&auto=format&fit=crop'
  }
];

// Trust Stats for higher conversion
const stats = [
  { value: '4+', label: 'Years in Dubai' },
  { value: '1,000+', label: 'AC Units Serviced' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: '45min', label: 'Average Response Time' },
];

export default function AboutSection() {
  return (
    <section className="bg-white pb-12 md:pb-20 pt-2" aria-labelledby="about-heading">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        
        {/* Top Banner */}
        <header className="bg-brand py-16 text-center w-full rounded-sm">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-white font-semibold" aria-hidden="true">/</span>
            <span className="text-sm md:text-base font-semibold tracking-wide text-white uppercase">
              Why Choose Our AC Services
            </span>
          </div>
          <h2 id="about-heading" className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-medium tracking-tight text-white max-w-3xl mx-auto leading-[1.1]">
            Dubai's Most Trusted<br />HVAC Professionals
          </h2>
        </header>

        {/* Trust Stats Row (Great for user trust and SEO dwell time) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-b border-gray-200" aria-label="Company Statistics">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#111111] mb-1">{stat.value}</p>
              <p className="text-sm text-[#666666] uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content - List */}
        <div className="w-full flex flex-col mt-4" role="list">
          {features.map((feature) => (
            <article 
              key={feature.id}
              role="listitem"
              className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 border-b border-gray-200 transition-colors duration-300 bg-transparent hover:bg-[#111111] active:bg-[#111111] text-[#111111] hover:text-white active:text-white cursor-pointer"
            >
              {/* Number & Title */}
              <div className="flex items-center gap-6 md:gap-12 w-full md:w-5/12 mb-4 md:mb-0 shrink-0">
                <span className="text-sm md:text-base font-medium text-gray-500 group-hover:text-gray-400 group-active:text-gray-400" aria-hidden="true">
                  {feature.id}
                </span>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <div className="w-full md:w-5/12 mb-6 md:mb-0 px-0 md:px-4 shrink-0">
                <p className="text-[15px] leading-relaxed text-[#666666] group-hover:text-gray-300 group-active:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Image */}
              <div className="w-full md:w-2/12 flex justify-start md:justify-end shrink-0">
                <div className="relative w-24 h-24 md:w-28 md:h-28 overflow-hidden shadow-sm bg-gray-100">
                  <Image
                    src={feature.image}
                    alt={`${feature.title} - Best HVAC Service in Dubai`}
                    fill
                    sizes="(max-width: 768px) 96px, 112px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Service Areas (Massive Local SEO Boost) */}
        <footer className="mt-16 bg-gray-50 p-8 rounded-sm text-center">
          <h3 className="text-xl font-medium text-[#111111] mb-3">Serving All Major Dubai Locations</h3>
          <p className="text-[#666666] text-sm leading-relaxed max-w-4xl mx-auto">
            We provide rapid HVAC repair and maintenance across Downtown Dubai, Dubai Marina, Jumeirah, Palm Jumeirah, Business Bay, Arabian Ranches, Al Barsha, and surrounding emirates. 
          </p>
        </footer>

      </div>
    </section>
  );
}