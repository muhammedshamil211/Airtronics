'use client';

import React, { useMemo } from 'react';
import Script from 'next/script';
import {
  Star,
  ExternalLink,
  MessageSquarePlus,
  Quote,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import CountUp from '@/components/ui/CountUp';
import { AUTHENTIC_REVIEWS, getRelativeTime } from '@/data/googleReviewsData';

// Official Google 'G' Logo SVG
function GoogleIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

// 5 Gold Stars Renderer
function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? 'fill-[#f59e0b] text-[#f59e0b]'
              : 'fill-gray-200 text-gray-200'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

const REVIEW_URL = 'https://g.page/r/CUM30MF90SldECE/review';
const PROFILE_URL = 'https://share.google/TfwhuvdbJE34DoOM2';

export default function GoogleReviewsSection() {
  const totalReviews = AUTHENTIC_REVIEWS.length;

  // Calculate dynamic relative age day by day on client
  const reviewAges = useMemo(() => {
    const computed: Record<string, string> = {};
    AUTHENTIC_REVIEWS.forEach((rev) => {
      computed[rev.id] = getRelativeTime(rev.publishedDate);
    });
    return computed;
  }, []);

  // Duplicate reviews for seamless infinite cinematic marquee
  const marqueeReviews = useMemo(() => {
    return [...AUTHENTIC_REVIEWS, ...AUTHENTIC_REVIEWS];
  }, []);

  // Schema.org Structured Data with dynamic publication dates
  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': 'https://airtronicsfixcare.com/#testimonials',
    'name': 'Airtronics Fixcare Technical Services L.L.C',
    'url': 'https://airtronicsfixcare.com',
    'telephone': '+971-58-659-6321',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '5.0',
      'bestRating': '5',
      'worstRating': '1',
      'ratingCount': totalReviews,
      'reviewCount': totalReviews,
    },
    'review': AUTHENTIC_REVIEWS.map((rev) => ({
      '@type': 'Review',
      'author': {
        '@type': 'Person',
        'name': rev.authorName,
      },
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': rev.rating,
        'bestRating': '5',
        'worstRating': '1',
      },
      'reviewBody': rev.text,
      'datePublished': rev.publishedDate.split('T')[0],
    })),
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative bg-white py-14 sm:py-20 lg:py-24 border-b border-slate-100 overflow-hidden"
    >
      {/* Schema.org Structured Data */}
      <Script
        id="google-reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      {/* ========================================================================= */}
      {/* MAIN CONTAINER: Maximum 1400px Width Constraint                            */}
      {/* ========================================================================= */}
      <div className="relative max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Faint Giant Background Watermark "REVIEWS" */}
        <div
          className="absolute -top-6 xs:-top-8 sm:-top-12 md:-top-18 left-4 pointer-events-none select-none z-0 overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-[family-name:var(--font-onest)] text-7xl xs:text-8xl sm:text-9xl md:text-[140px] lg:text-[170px] font-black text-slate-900/[0.035] leading-none tracking-tight block">
            REVIEWS
          </span>
        </div>

        {/* ======================================================================= */}
        {/* SECTION HEADER & GOOGLE TRUST BADGE                                     */}
        {/* ======================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12"
        >
          <div className="max-w-2xl">
            {/* Eyebrow with Blue Accent Line */}
            <div className="flex items-center gap-2.5 mb-2.5 sm:mb-3">
              <span className="w-7 sm:w-9 h-[2.5px] bg-[#0076FF] rounded-full inline-block" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.16em] text-[#0076FF] uppercase">
                CLIENT REVIEWS
              </span>
            </div>

            {/* Main Headline Matching Services & Booking Typography */}
            <h2
              id="testimonials-heading"
              className="font-[family-name:var(--font-onest)] text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0f172a] tracking-tight leading-[1.14] mb-3"
            >
              What Our Clients Say About Airtronics
            </h2>

            <p className="font-[family-name:var(--font-onest)] text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Read authentic 5-star feedback from property owners and residents across Dubai who trust Airtronics for certified AC repairs, maintenance, and prompt cooling support.
            </p>
          </div>

          {/* Two-Row Google Rating Score & Actions Block */}
          <div className="flex flex-col gap-3.5 shrink-0">
            {/* ROW 1: Big Google Icon + 5 Stars + Small Review Rating Text */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 shadow-2xs">
                <GoogleIcon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-[family-name:var(--font-onest)] text-xl sm:text-2xl font-black text-[#0f172a] leading-none">
                    5.0
                  </span>
                  <StarRating rating={5} />
                </div>
                <span className="text-xs font-semibold text-slate-500 block mt-1">
                  Based on Verified Google Reviews
                </span>
              </div>
            </div>

            {/* ROW 2: Two Review Action Buttons */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Button
                href={REVIEW_URL}
                target="_blank"
                variant="primary"
                size="sm"
                className="!px-4.5 !py-2.5 font-semibold shadow-md shadow-blue-500/15 text-xs sm:text-sm"
                title="Write a Google Review"
                iconLeft={<MessageSquarePlus className="w-4 h-4" />}
              >
                <span>Review Us</span>
              </Button>

              <Button
                href={PROFILE_URL}
                target="_blank"
                variant="white"
                size="sm"
                className="!px-4 !py-2.5 text-slate-700 font-semibold text-xs sm:text-sm"
                title="View Profile on Google"
                iconRight={<ExternalLink className="w-3.5 h-3.5" />}
              >
                <span>All Reviews</span>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* ======================================================================= */}
        {/* CINEMATIC FLOW TRACK (Contained in Max 1400px Div with Soft Edge Masks) */}
        {/* ======================================================================= */}
        <div className="relative w-full overflow-hidden py-3">
          {/* Left & Right Cinematic Edge Gradient Masks */}
          <div className="absolute left-0 inset-y-0 w-12 sm:w-20 md:w-28 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none z-20" />
          <div className="absolute right-0 inset-y-0 w-12 sm:w-20 md:w-28 bg-gradient-to-l from-white via-white/85 to-transparent pointer-events-none z-20" />

          {/* Continuous Gliding Track (Auto-Pauses on Hover for Seamless Reading) */}
          <div className="cinematic-reviews-track flex gap-5 sm:gap-6 will-change-transform">
            {marqueeReviews.map((rev, index) => (
              <div
                key={`${rev.id}-${index}`}
                className="relative w-[310px] xs:w-[350px] sm:w-[390px] md:w-[430px] shrink-0 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 hover:border-blue-300/80 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between group cursor-default overflow-hidden"
              >
                {/* Top Subtle Cyan-to-Blue Brand Accent Indicator */}
                <div className="absolute top-0 inset-x-7 h-[2.5px] bg-gradient-to-r from-[#0076FF] via-[#00AEEF] to-transparent rounded-full group-hover:h-[3px] transition-all" />

                {/* Subtle Decorative Background Quotation Watermark */}
                <Quote
                  className="absolute -top-1 -right-1 w-20 h-20 text-blue-500/[0.04] pointer-events-none -rotate-12 group-hover:text-blue-500/[0.07] transition-colors"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Top Bar: Slanted Parallelogram Service Pill + Google 'G' Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    {/* Parallelogram Service Tag Matching Hero Button DNA */}
                    <div className="[transform:skewX(-10deg)] bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-sm shadow-2xs">
                      <span className="[transform:skewX(10deg)] block text-[10px] sm:text-[11px] font-bold text-[#0076FF] uppercase tracking-wider">
                        {rev.serviceTag}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-slate-50 border border-slate-100/90 shadow-2xs shrink-0">
                      <GoogleIcon className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-semibold text-slate-500">Google Verified</span>
                    </div>
                  </div>

                  {/* Star Rating Row */}
                  <div className="flex items-center gap-2 mb-3.5">
                    <StarRating rating={rev.rating} />
                    <span className="text-xs font-bold text-amber-700 bg-amber-50/90 border border-amber-200/50 px-2 py-0.5 rounded-md">
                      5.0
                    </span>
                  </div>

                  {/* Customer Feedback Body */}
                  <p className="font-[family-name:var(--font-onest)] text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal line-clamp-4">
                    &ldquo;{rev.text}&rdquo;
                  </p>
                </div>

                {/* Card Bottom: Author Profile & Location Verification */}
                <div className="relative z-10 pt-4 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#0076FF] to-[#00AEEF] text-white font-[family-name:var(--font-onest)] font-bold flex items-center justify-center text-xs sm:text-sm shadow-xs ring-2 ring-blue-100 shrink-0">
                      {rev.authorName.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-[family-name:var(--font-onest)] font-bold text-xs sm:text-sm text-[#0f172a] truncate group-hover:text-[#0076FF] transition-colors">
                        {rev.authorName}
                      </h3>
                      <p className="text-[11px] text-slate-400 truncate">
                        {rev.locationTag || 'Dubai'} • {reviewAges[rev.id] || 'Recent Client'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Verified</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Scoped CSS for Infinite Gliding Animation & Interactive Hover Pause */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @keyframes cinematicMarquee {
                  0% {
                    transform: translate3d(0, 0, 0);
                  }
                  100% {
                    transform: translate3d(-50%, 0, 0);
                  }
                }
                .cinematic-reviews-track {
                  width: max-content;
                  animation: cinematicMarquee 45s linear infinite;
                }
                .cinematic-reviews-track:hover {
                  animation-play-state: paused;
                }
              `,
            }}
          />
        </div>

      </div>
    </section>
  );
}
