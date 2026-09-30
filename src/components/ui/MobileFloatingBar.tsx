'use client';

import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const HOTLINE_NUMBER = '+971586596321';
const WHATSAPP_NUMBER = '971586596321';
const WHATSAPP_PREFIX = 'Hello Airtronics Fixcare! I need help with AC repair / service in Dubai.';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.19.53-1.06 1.04-1.48 1.1-.39.06-.88.08-2.54-.6-2.12-.87-3.48-3.02-3.58-3.16-.11-.14-.86-1.14-.86-2.17 0-1.03.54-1.53.73-1.74.19-.21.42-.26.56-.26.14 0 .28 0 .4.01.13.01.3-.05.47.36.18.42.61 1.49.66 1.6.06.11.09.24.02.38-.07.14-.11.23-.21.35-.11.12-.22.26-.32.35-.11.1-.22.21-.1.42.13.21.56.93 1.21 1.51.84.75 1.54.98 1.76 1.09.22.11.35.09.48-.06.13-.15.56-.65.71-.87.15-.22.3-.18.5-.11.21.07 1.31.62 1.54.73.22.11.38.17.43.26.06.09.06.53-.13 1.06" />
  </svg>
);

export default function MobileFloatingBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PREFIX)}`;

  return (
    <>
      {/* Bottom Left: Simple Standard Round "Call Now" Button */}
      <a
        href={`tel:${HOTLINE_NUMBER}`}
        suppressHydrationWarning
        className="fixed bottom-5 left-4 z-50 flex md:hidden items-center justify-center w-12 h-12 rounded-full bg-[#005eb8] text-white shadow-md active:scale-95 transition-transform"
        aria-label="Call Now"
        title="Call Now: +971 58 659 6321"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Bottom Right: Simple Standard Round "Need Help" WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        suppressHydrationWarning
        className="fixed bottom-5 right-4 z-50 flex md:hidden items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-md active:scale-95 transition-transform"
        aria-label="Need Help? Chat on WhatsApp"
        title="Need Help"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}
