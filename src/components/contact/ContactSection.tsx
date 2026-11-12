'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Clock,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedShaderBackground from '@/components/ui/AnimatedShaderBackground';

const QUICK_TOPICS = [
  'AC Not Cooling',
  'AC Water Leaking',
  'AC Servicing & Cleaning',
  'AC Duct Cleaning',
  'New AC Quote',
];

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = [
      `*NEW AC REQUEST - AIRTRONICS FIXCARE*`,
      `• Name: ${name.trim()}`,
      phone.trim() ? `• Phone: ${phone.trim()}` : null,
      `• Message: ${message.trim() || 'Need AC assistance in Dubai'}`,
    ]
      .filter(Boolean)
      .join('\n');

    const url = `https://wa.me/971586596321?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <section
      id="contact-section"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#03132b] text-white overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Same Animated Shader Background as Home Process Section */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <AnimatedShaderBackground
          patternStyle={3}
          speed={0.75}
          scale={1.0}
          distortion={2.5}
          brightness={1.5}
          refraction={1.0}
          colors={{
            base: '#000614',
            mid: '#004aa6',
            high: '#11444fff',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />
        <div
          className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00D4FF 0%, #004aa6 45%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/3 -right-24 w-[500px] h-[500px] rounded-full blur-[130px] opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #0076FF 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-20 -left-20 w-[450px] h-[450px] rounded-full blur-[110px] opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #00AEEF 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1250px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Direct Contact Details in Liquid-Glass Frame */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-5 p-2 sm:p-2.5 bg-white/[0.12] backdrop-blur-xl shadow-2xl shadow-black/30 rounded-none"
          >
            <div className="h-full bg-[#061a38]/90 p-6 sm:p-8 rounded-none flex flex-col justify-between gap-8">
              <div>
                <h2
                  id="contact-heading"
                  className="font-[family-name:var(--font-onest)] text-2xl sm:text-3xl font-bold text-white mb-2.5"
                >
                  Direct Contact Details
                </h2>
                <p className="font-[family-name:var(--font-onest)] text-sm text-slate-300 leading-relaxed mb-8">
                  Reach us directly by phone, WhatsApp, or email anytime. No call centers or long wait times.
                </p>

                <div className="space-y-6">
                  {/* Phones */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0076FF] flex items-center justify-center shrink-0 [transform:skewX(-10deg)] rounded-none">
                      <Phone className="w-4 h-4 text-white [transform:skewX(10deg)]" />
                    </div>
                    <div>
                      <span className="font-[family-name:var(--font-onest)] text-xs font-bold uppercase tracking-wider text-[#00D4FF] block mb-1">
                        24/7 Phone &amp; WhatsApp
                      </span>
                      <a
                        href="tel:+971586596321"
                        className="font-[family-name:var(--font-onest)] text-base sm:text-lg font-bold text-white hover:text-[#00D4FF] transition-colors block"
                      >
                        +971 58 659 6321
                      </a>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-300 mt-1">
                        <a href="tel:+971555619369" className="hover:text-white transition-colors">
                          +971 55 561 9369
                        </a>
                        <span>&bull;</span>
                        <a href="tel:+971502406545" className="hover:text-white transition-colors">
                          +971 50 240 6545
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0076FF] flex items-center justify-center shrink-0 [transform:skewX(-10deg)] rounded-none">
                      <Mail className="w-4 h-4 text-white [transform:skewX(10deg)]" />
                    </div>
                    <div>
                      <span className="font-[family-name:var(--font-onest)] text-xs font-bold uppercase tracking-wider text-[#00D4FF] block mb-1">
                        Email Address
                      </span>
                      <a
                        href="mailto:airtronics6@gmail.com"
                        className="font-[family-name:var(--font-onest)] text-sm sm:text-base font-semibold text-white hover:text-[#00D4FF] transition-colors break-all"
                      >
                        airtronics6@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Office Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0076FF] flex items-center justify-center shrink-0 [transform:skewX(-10deg)] rounded-none">
                      <MapPin className="w-4 h-4 text-white [transform:skewX(10deg)]" />
                    </div>
                    <div>
                      <span className="font-[family-name:var(--font-onest)] text-xs font-bold uppercase tracking-wider text-[#00D4FF] block mb-1">
                        Dubai Office
                      </span>
                      <p className="font-[family-name:var(--font-onest)] text-sm text-slate-200 leading-relaxed">
                        Commercial Bank of Dubai Building, M-01<br />
                        Al Khabaisi, Deira, Dubai, UAE
                      </p>
                      <a
                        href="https://maps.google.com/?q=Commercial+Bank+of+Dubai+Building+Al+Khabaisi+Dubai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#00D4FF] hover:underline font-semibold mt-1.5"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Verification Strip */}
              <div className="pt-6 border-t border-white/10 space-y-2 text-xs text-slate-300 font-[family-name:var(--font-onest)]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00D4FF] shrink-0" />
                  <span>Dubai Licensed &bull; FTA TRN: 100582947100003</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#00D4FF] shrink-0" />
                  <span>30–45 Minute Emergency Arrival Across Dubai</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Simple 3-Field Quick WhatsApp Request */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-7 p-2 sm:p-2.5 bg-white/[0.12] backdrop-blur-xl shadow-2xl shadow-black/30 rounded-none"
          >
            <div className="h-full bg-white text-slate-900 p-6 sm:p-8 lg:p-10 rounded-none flex flex-col justify-between">
              <div>
                <h3 className="font-[family-name:var(--font-onest)] text-2xl sm:text-3xl font-bold text-[#0f172a] mb-2">
                  Send a Quick Message
                </h3>
                <p className="font-[family-name:var(--font-onest)] text-sm text-slate-600 leading-relaxed mb-6">
                  Just enter your name, phone number, and what you need. Clicking send opens WhatsApp directly so our team can reply right away.
                </p>

                {/* Quick-Tap Topic Chips */}
                <div className="mb-6">
                  <span className="font-[family-name:var(--font-onest)] text-xs font-semibold text-slate-500 block mb-2.5">
                    Tap a common request (optional):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {QUICK_TOPICS.map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setMessage(topic)}
                        className={`px-3.5 py-1.5 text-xs font-semibold transition-colors [transform:skewX(-10deg)] rounded-none cursor-pointer border ${
                          message === topic
                            ? 'bg-[#0076FF] text-white border-[#0076FF]'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-[#0076FF] hover:text-[#0076FF]'
                        }`}
                      >
                        <span className="inline-block [transform:skewX(10deg)]">{topic}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simple 3-Field Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="font-[family-name:var(--font-onest)] block text-xs font-bold text-slate-700 mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ahmed / Sarah"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#0076FF] focus:bg-white focus:outline-none text-sm text-slate-900 rounded-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="font-[family-name:var(--font-onest)] block text-xs font-bold text-slate-700 mb-1.5"
                      >
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 050 123 4567"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#0076FF] focus:bg-white focus:outline-none text-sm text-slate-900 rounded-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="font-[family-name:var(--font-onest)] block text-xs font-bold text-slate-700 mb-1.5"
                    >
                      How Can We Help? *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us your area in Dubai and what is happening with your AC (e.g. AC not cooling in Marina)..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-[#0076FF] focus:bg-white focus:outline-none text-sm text-slate-900 rounded-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center bg-[#0076FF] hover:bg-[#0066de] text-white font-semibold px-7 py-3.5 text-sm sm:text-base transition-all duration-200 [transform:skewX(-10deg)] sm:[transform:skewX(-14deg)] rounded-none cursor-pointer"
                    >
                      <span className="inline-flex items-center gap-2 [transform:skewX(10deg)] sm:[transform:skewX(14deg)]">
                        <span>Send on WhatsApp</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </button>

                    <a
                      href="tel:+971586596321"
                      className="font-[family-name:var(--font-onest)] text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#0076FF] transition-colors"
                    >
                      Or call directly: +971 58 659 6321
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
