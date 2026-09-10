'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MessageCircle, AlertTriangle } from 'lucide-react';

const tickerItems = [
  {
    icon: <AlertTriangle className="w-4 h-4 text-yellow-300" />,
    text: '24/7 EMERGENCY AC REPAIRS IN DUBAI',
    link: '/contact'
  },
  {
    icon: <Phone className="w-4 h-4 text-white" />,
    text: 'CALL NOW: +971 58 659 6321',
    link: 'tel:+971586596321'
  },
  {
    icon: <MessageCircle className="w-4 h-4 text-[#25D366]" />,
    text: 'WHATSAPP: +971 58 659 6321',
    link: 'https://wa.me/971586596321'
  },
  {
    icon: <Mail className="w-4 h-4 text-white" />,
    text: 'EMAIL: INFO@AIRTRONICS.AE',
    link: 'mailto:info@airtronics.ae'
  }
];

export default function ContactTicker() {
  // Duplicate the items multiple times to ensure seamless infinite scrolling
  const duplicatedItems = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <section className="w-full bg-[#111111] border-y border-[#333] overflow-hidden relative z-20 group">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: fit-content;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
      
      <div className="animate-marquee">
        {duplicatedItems.map((item, index) => (
          <Link 
            href={item.link}
            key={index} 
            className="flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-wide text-white hover:text-brand transition-colors whitespace-nowrap"
          >
            {item.icon}
            {item.text}
            {/* Add a separator dot */}
            <span className="ml-8 text-gray-600">•</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
