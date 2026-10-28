'use client';

import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MessageSquarePlus,
  Quote,
  Pause,
  Play,
  Languages,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AUTHENTIC_REVIEWS, getRelativeTime } from '@/app/api/google-reviews/route';

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
const ROTATION_INTERVAL = 5500; // 5.5 seconds per review

export default function GoogleReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showOriginal, setShowOriginal] = useState<Record<string, boolean>>({});
  const [direction, setDirection] = useState<1 | -1>(1);
  const [reviewAges, setReviewAges] = useState<Record<string, string>>({});

  const totalReviews = AUTHENTIC_REVIEWS.length;

  // Calculate dynamic relative age day by day on client
  useEffect(() => {
    const computed: Record<string, string> = {};
    AUTHENTIC_REVIEWS.forEach((rev) => {
      computed[rev.id] = getRelativeTime(rev.publishedDate);
    });
    setReviewAges(computed);
  }, []);

  // Auto-rotation timer with hover pause
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % totalReviews);
    }, ROTATION_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, totalReviews]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? totalReviews - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % totalReviews);
  };

  const handleSelect = (idx: number) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  const toggleLanguage = (id: string) => {
    setShowOriginal((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const activeReview = AUTHENTIC_REVIEWS[activeIndex];
  const isOriginalActive = showOriginal[activeReview.id] && activeReview.originalText;
  const currentText = isOriginalActive ? activeReview.originalText : activeReview.text;

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
      className="relative bg-[#fcfcfc] py-16 sm:py-20 lg:py-24 border-b border-gray-100 overflow-hidden"
    >
      {/* Schema.org Structured Data */}
      <Script
        id="google-reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />

      {/* ======================================================================= */}
      {/* BOTTOM-RIGHT CORNER GRID PATTERN (Covers 65% of Main Section)           */}
      {/* ======================================================================= */}
      <div
        className="absolute bottom-0 right-0 w-[65%] h-[65%] pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Soft atmospheric radial glow in bottom right corner */}
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-100/50 via-sky-50/20 to-transparent rounded-tl-[120px] blur-2xl" />

        {/* Precision HVAC grid pattern covering 65% from bottom right */}
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 94, 184, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 94, 184, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(ellipse 100% 100% at 100% 100%, black 55%, rgba(0,0,0,0.4) 80%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 100% 100%, black 55%, rgba(0,0,0,0.4) 80%, transparent 100%)',
          }}
        />
      </div>

      {/* Subtle top-left cooling accent glow */}
      <div className="absolute top-1/4 left-6 w-80 h-80 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] w-full mx-auto px-4 sm:px-6 md:px-8">

        {/* 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ========================================================================= */}
          {/* COLUMN 1: Testimonials Narrative & Official Google Profile Overview       */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold uppercase tracking-wider text-[#005eb8] mb-4">
                <GoogleIcon className="w-3.5 h-3.5 shrink-0" />
                <span>Testimonials</span>
              </div>

              {/* Main Headline */}
              <h2
                id="testimonials-heading"
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#111111] leading-[1.18] mb-4"
              >
                What Our Clients Say
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                Read authentic feedback from property owners and residents across Dubai who trust Airtronics for professional AC repair, routine servicing, and prompt technical support.
              </p>

              {/* Google Rating Overview Card */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-13 h-13 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    <GoogleIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl font-black text-[#111111]">5.0</span>
                      <StarRating rating={5} />
                    </div>
                    <span className="text-xs font-semibold text-gray-500 block">
                      Overall Rating on Google Reviews
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                  <a
                    href={REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#005eb8] hover:bg-[#004a94] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all"
                    title="Write a Google Review"
                  >
                    <MessageSquarePlus className="w-4 h-4" />
                    <span>Review Us on Google</span>
                  </a>

                  <a
                    href={PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 text-gray-700 hover:text-[#005eb8] text-xs sm:text-sm font-semibold transition-colors bg-slate-50/60"
                    title="View Profile on Google"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Slider Navigation & Review Counter */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                {AUTHENTIC_REVIEWS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeIndex
                        ? 'w-7 bg-[#005eb8]'
                        : 'w-2 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Jump to review ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-400 mr-2">
                  0{activeIndex + 1} <span className="font-normal text-gray-300">/ 0{totalReviews}</span>
                </span>

                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-gray-700 hover:text-[#005eb8] hover:border-[#005eb8] transition-colors cursor-pointer shadow-2xs"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-gray-700 hover:text-[#005eb8] hover:border-[#005eb8] transition-colors cursor-pointer shadow-2xs"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsPaused((prev) => !prev)}
                  className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-gray-500 hover:text-[#005eb8] transition-colors cursor-pointer shadow-2xs ml-1"
                  aria-label={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
                  title={isPaused ? 'Resume rotation' : 'Pause rotation'}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* COLUMN 2: Automatic One-by-One Review Card with Smooth Animation          */}
          {/* ========================================================================= */}
          <div
            className="lg:col-span-7 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Auto-Rotation Progress Bar */}
            <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden mb-3">
              <motion.div
                key={`${activeIndex}-${isPaused}`}
                initial={{ width: '0%' }}
                animate={{ width: isPaused ? '0%' : '100%' }}
                transition={{
                  duration: isPaused ? 0 : ROTATION_INTERVAL / 1000,
                  ease: 'linear',
                }}
                className="h-full bg-gradient-to-r from-[#005eb8] to-[#00AEEF]"
              />
            </div>

            {/* Interactive Card Container */}
            <div className="relative min-h-[380px] sm:min-h-[340px] flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.article
                  key={activeReview.id}
                  custom={direction}
                  initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 shadow-sm flex flex-col justify-between relative overflow-hidden"
                  role="region"
                  aria-label={`Review by ${activeReview.authorName}`}
                >
                  {/* Decorative background quotation mark */}
                  <Quote
                    className="absolute -top-3 -right-3 w-28 h-28 text-slate-100 pointer-events-none -rotate-12"
                    aria-hidden="true"
                  />

                  <div>
                    {/* Top Row: Reviewer Info + Service Tag + Google Badge */}
                    <div className="flex items-start justify-between gap-4 mb-5 relative z-10">
                      <div className="flex items-center gap-3.5">
                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#005eb8] to-[#00AEEF] text-white font-bold flex items-center justify-center text-base shadow-xs shrink-0">
                          {activeReview.authorName.charAt(0)}
                        </div>

                        <div>
                          <h3 className="font-bold text-base sm:text-lg text-[#111111] leading-tight">
                            {activeReview.authorName}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-gray-400">
                              {reviewAges[activeReview.id] || '1 day ago'}
                            </span>
                            <span className="text-gray-300">•</span>
                            <span className="text-xs font-medium text-[#005eb8] bg-blue-50/80 px-2 py-0.5 rounded-md">
                              {activeReview.serviceTag}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-2xs">
                        <GoogleIcon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Stars Row */}
                    <div className="flex items-center gap-2 mb-5 relative z-10">
                      <StarRating rating={activeReview.rating} />
                      <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                        5.0 Star Rating
                      </span>
                    </div>

                    {/* Review Body */}
                    <blockquote
                      className={`text-slate-700 text-sm sm:text-base md:text-[17px] leading-relaxed mb-5 relative z-10 font-normal ${
                        isOriginalActive ? 'font-arabic text-right dir-rtl leading-[1.8]' : ''
                      }`}
                      dir={isOriginalActive ? 'rtl' : 'ltr'}
                    >
                      &ldquo;{currentText}&rdquo;
                    </blockquote>
                  </div>

                  {/* Card Footer: Language Switcher & Location */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 relative z-10">
                    {/* Bilingual toggle if original Arabic is present */}
                    {activeReview.originalText ? (
                      <button
                        type="button"
                        onClick={() => toggleLanguage(activeReview.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#005eb8] hover:text-[#004a94] bg-blue-50/60 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                      >
                        <Languages className="w-3.5 h-3.5" />
                        <span>
                          {isOriginalActive ? 'View English Translation' : 'عرض النص الأصلي (Arabic)'}
                        </span>
                      </button>
                    ) : (
                      <span className="text-xs text-gray-400">Verified Google Customer Review</span>
                    )}

                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>{activeReview.locationTag || 'Dubai'}</span>
                      <span>•</span>
                      <a
                        href={PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#005eb8] hover:underline transition-colors"
                      >
                        Google Maps
                      </a>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            {/* Hover guidance caption */}
            <p className="text-[11px] text-gray-400 text-center mt-3">
              {isPaused ? 'Auto-rotation paused' : 'Hover over review to pause'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
