'use client';

import React from 'react';
import Image from 'next/image';

const features = [
  {
    id: '01',
    title: 'Certified Technicians',
    description: 'Our team consists of fully licensed and insured HVAC experts with years of experience in Dubai.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '02',
    title: '24/7 Fast Response',
    description: 'AC emergencies do not wait. We offer round-the-clock rapid response across all Dubai areas.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'Quality Guaranteed',
    description: 'We use premium parts and provide a satisfaction guarantee on all our repair and installation services.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '04',
    title: 'Transparent Pricing',
    description: 'No hidden fees. You get upfront, honest pricing before we start any work on your property.',
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=800&auto=format&fit=crop'
  }
];

export default function AboutSection() {
  return (
    <section className="bg-white pb-12 md:pb-16 pt-2">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        
        {/* Top Banner */}
        <div className="bg-brand py-16 text-center w-full">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-white font-semibold">/</span>
            <span className="text-sm md:text-base font-semibold tracking-wide text-white uppercase">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-medium tracking-tight text-white max-w-3xl mx-auto leading-[1.1]">
            Dubai's Most Trusted<br />HVAC Professionals
          </h2>
        </div>

        {/* Main Content - List */}
        <div className="w-full flex flex-col border-t-0 border-gray-200">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="group relative flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 border-b border-gray-200 transition-colors duration-300 bg-transparent hover:bg-[#111111] active:bg-[#111111] text-[#111111] hover:text-white active:text-white cursor-pointer"
            >
              {/* Number & Title */}
              <div className="flex items-center gap-6 md:gap-12 w-full md:w-5/12 mb-4 md:mb-0 shrink-0">
                <span className="text-sm md:text-base font-medium text-gray-500 group-hover:text-gray-400 group-active:text-gray-400">
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
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Experience Note */}
        <div className="mt-12 text-center">
          <p className="text-[#666666] text-[15px]">
            Proudly serving Dubai with 4 years of dedicated HVAC experience.
          </p>
        </div>
      </div>
    </section>
  );
}
