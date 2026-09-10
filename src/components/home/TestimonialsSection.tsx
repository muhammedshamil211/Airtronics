'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Al Mansoori',
    role: 'Villa Owner, Palm Jumeirah',
    content: 'Airtronics completely overhauled the HVAC system in our villa. Their team was professional, clean, and incredibly efficient. The cooling is now perfect in every room, and our energy bills have actually gone down. Highly recommended!',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Restaurant Manager, Downtown Dubai',
    content: 'When our main AC unit failed during the summer rush, Airtronics was there within the hour. Their emergency response is no joke. They diagnosed the issue quickly and had us back up and running before the dinner service. Lifesavers.',
    rating: 5
  },
  {
    id: 3,
    name: 'Mohammed Tariq',
    role: 'Facility Manager, Business Bay',
    content: 'We have been using Airtronics for our annual maintenance contract for two years now. The preventive care they provide means we rarely have unexpected breakdowns anymore. Their technicians are highly knowledgeable.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#005eb8]/10 rounded-full blur-[100px] -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#005eb8] font-semibold">/</span>
              <span className="text-sm md:text-base font-semibold tracking-wide text-gray-400 uppercase">
                Client Testimonials
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-medium tracking-tight text-white leading-[1.1]">
              Trusted By Dubai's Finest
            </h2>
          </div>
          
          <div className="flex gap-2 text-white pb-2">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-[#111111] bg-gray-600 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <div className="flex text-[#005eb8]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-400 mt-1">4.9/5 from 500+ reviews</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 relative group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5 group-hover:text-[#005eb8]/20 transition-colors duration-300" />
              
              <div className="flex gap-1 text-[#005eb8] mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-[#cccccc] text-[15px] leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto">
                <h4 className="text-white font-medium tracking-tight text-lg">{testimonial.name}</h4>
                <p className="text-[#005eb8] text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
