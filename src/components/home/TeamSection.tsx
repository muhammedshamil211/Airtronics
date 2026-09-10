'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const team = [
  {
    id: 1,
    name: 'Ahmed',
    role: 'Senior Technician',
    image: 'https://images.unsplash.com/photo-1537368910025-702804a94666?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Sarah',
    role: 'HVAC Engineer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'John',
    role: 'Installation Expert',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Mike',
    role: 'Maintenance Lead',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'David',
    role: 'Duct Specialist',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop'
  }
];

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#fcfcfc] py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        
        {/* Top Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-brand font-semibold">/</span>
            <span className="text-sm md:text-base font-semibold tracking-wide text-gray-800 uppercase">
              Our Experts
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-medium tracking-tight text-[#111111] max-w-3xl mx-auto leading-[1.1]">
            Meet Our Team Members
          </h2>
        </div>

        {/* Grid Section */}
        <div className="flex flex-col md:flex-row gap-4 lg:gap-6 justify-center">
          {team.map((member, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <div 
                key={member.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex flex-col items-center flex-1 cursor-pointer group"
              >
                {/* Names & Roles */}
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#111111] transition-colors duration-300 group-hover:text-brand">
                    {member.name}
                  </h3>
                  <p className="text-[15px] text-[#666666] mt-1">
                    {member.role}
                  </p>
                </div>

                {/* Image */}
                <div 
                  className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 transition-all duration-500 ${isHovered ? 'opacity-100 mix-blend-normal' : 'opacity-80 grayscale mix-blend-luminosity group-hover:opacity-100'}`}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
