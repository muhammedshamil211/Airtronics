'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Wrench,
  Phone,
  List,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost, BLOG_POSTS } from '@/data/blogData';

interface BlogPostContentProps {
  post: BlogPost;
}

const WHATSAPP_URL = `https://wa.me/971586596321?text=${encodeURIComponent(
  'Hello Airtronics Fixcare! I just read your AC guide and need assistance in Dubai.'
)}`;

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="bg-white">
      {/* Article Header */}
      <header className="pt-8 sm:pt-12 pb-8 sm:pb-10 border-b border-slate-100">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <nav
              aria-label="Breadcrumb"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 mb-5"
            >
              <Link href="/" className="hover:text-[#0076FF] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/blog" className="hover:text-[#0076FF] transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span
                className="text-[#0076FF] font-semibold truncate max-w-[200px] sm:max-w-none"
                aria-current="page"
              >
                {post.category}
              </span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 mb-4">
              <span className="bg-[#0076FF]/10 text-[#0076FF] px-3 py-1 uppercase tracking-wider [transform:skewX(-10deg)] rounded-none">
                <span className="inline-block [transform:skewX(10deg)]">{post.category}</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.publishedAt}
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-onest)] text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0f172a] tracking-tight leading-[1.15] mb-4">
              {post.title}
            </h1>

            <p className="font-[family-name:var(--font-onest)] text-base sm:text-lg text-slate-600 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </header>

      {/* Two-Column Body: Main Content (8 cols) + Sticky Sidebar (4 cols) */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT: Main Article Column */}
          <div className="lg:col-span-8">
            <div className="relative aspect-[16/9] w-full bg-slate-900 border border-slate-200 rounded-none overflow-hidden mb-8 sm:mb-10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover object-center"
              />
            </div>

            {/* Key Takeaways Box */}
            <div className="bg-slate-50 border-l-4 border-[#0076FF] p-6 sm:p-7 mb-10 rounded-none">
              <h2 className="font-[family-name:var(--font-onest)] text-base sm:text-lg font-bold text-[#0f172a] mb-3">
                Quick Takeaways
              </h2>
              <ul className="space-y-2.5">
                {post.keyTakeaways.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0076FF] shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Sections */}
            <div className="space-y-10">
              {post.sections.map((section, idx) => (
                <section
                  key={idx}
                  id={`section-${idx + 1}`}
                  className="scroll-mt-28 space-y-4"
                >
                  <h2 className="font-[family-name:var(--font-onest)] text-xl sm:text-2xl font-bold text-[#0f172a] leading-snug">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="font-[family-name:var(--font-onest)] text-base text-slate-700 leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-2 pt-1 pl-1">
                      {section.bullets.map((b, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-base text-slate-700 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 bg-[#0076FF] mt-2.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Related Service Banner */}
            <div className="mt-12 p-6 sm:p-8 bg-[#03132b] text-white rounded-none flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00D4FF]">
                  <Wrench className="w-3.5 h-3.5" />
                  <span>Need Expert Help in Dubai?</span>
                </div>
                <h3 className="font-[family-name:var(--font-onest)] text-xl font-bold text-white">
                  {post.relatedServiceTitle}
                </h3>
                <p className="text-sm text-slate-300">
                  30–45 minute arrival across Dubai with clear upfront quotes.
                </p>
              </div>

              <Link
                href={`/services/${post.relatedServiceSlug}`}
                className="shrink-0 inline-flex items-center justify-center bg-[#0076FF] hover:bg-[#0066de] text-white font-semibold px-6 py-3 text-sm transition-colors [transform:skewX(-10deg)] rounded-none"
              >
                <span className="inline-flex items-center gap-2 [transform:skewX(10deg)]">
                  <span>View Service</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

            {/* Article FAQs */}
            {post.faqs.length > 0 && (
              <section
                className="mt-12 pt-10 border-t border-slate-200"
                aria-label="Article FAQs"
              >
                <h2 className="font-[family-name:var(--font-onest)] text-2xl font-bold text-[#0f172a] mb-6">
                  Common Questions
                </h2>
                <div className="border-t border-slate-200">
                  {post.faqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="border-b border-slate-200">
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full py-4 flex items-start justify-between text-left gap-4 cursor-pointer group"
                        >
                          <span
                            className={`font-[family-name:var(--font-onest)] text-base font-bold transition-colors ${
                              isOpen
                                ? 'text-[#0076FF]'
                                : 'text-[#0f172a] group-hover:text-[#0076FF]'
                            }`}
                          >
                            {faq.q}
                          </span>
                          <div
                            className={`shrink-0 w-7 h-7 [transform:skewX(-10deg)] flex items-center justify-center transition-all ${
                              isOpen
                                ? 'bg-[#0076FF] text-white rotate-180'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            <ChevronDown className="w-4 h-4 [transform:skewX(10deg)]" />
                          </div>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22 }}
                              className="overflow-hidden"
                            >
                              <p className="pb-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                                {faq.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>

          {/* RIGHT: Sticky Compact Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24" aria-label="Article Sidebar">
            {/* 1. In This Guide (Table of Contents) */}
            <div className="border border-slate-200 bg-slate-50 p-5 sm:p-6 rounded-none">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-4">
                <List className="w-4 h-4 text-[#0076FF]" />
                <span>In This Guide</span>
              </div>
              <ul className="space-y-2.5 text-sm font-[family-name:var(--font-onest)]">
                {post.sections.map((section, idx) => (
                  <li key={idx}>
                    <a
                      href={`#section-${idx + 1}`}
                      className="text-slate-600 hover:text-[#0076FF] transition-colors flex items-start gap-2 leading-snug"
                    >
                      <span className="text-xs font-bold text-[#0076FF] pt-0.5">
                        0{idx + 1}
                      </span>
                      <span>{section.heading}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Quick Book / Dispatch Box */}
            <div className="bg-[#03132b] text-white p-6 rounded-none border-t-4 border-[#0076FF]">
              <h3 className="font-[family-name:var(--font-onest)] text-lg font-bold text-white mb-2">
                Need an AC Technician?
              </h3>
              <p className="font-[family-name:var(--font-onest)] text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                30–45 minute arrival anywhere in Dubai with upfront written quotes.
              </p>

              <div className="space-y-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-[#0076FF] hover:bg-[#0066de] text-white font-semibold px-5 py-3 text-sm transition-colors [transform:skewX(-10deg)] rounded-none"
                >
                  <span className="inline-flex items-center gap-2 [transform:skewX(10deg)]">
                    <span>Book on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>

                <a
                  href="tel:+971586596321"
                  className="w-full inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white border border-white/15 font-semibold px-5 py-3 text-sm transition-colors [transform:skewX(-10deg)] rounded-none"
                >
                  <span className="inline-flex items-center gap-2 [transform:skewX(10deg)]">
                    <Phone className="w-3.5 h-3.5 text-[#00D4FF]" />
                    <span>+971 58 659 6321</span>
                  </span>
                </a>
              </div>
            </div>

            {/* 3. More Dubai AC Guides */}
            <div className="border border-slate-200 bg-white p-5 sm:p-6 rounded-none">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-[family-name:var(--font-bebas)] text-lg tracking-wider text-[#0f172a]">
                  MORE GUIDES
                </h3>
                <Link
                  href="/blog"
                  className="text-xs font-bold text-[#0076FF] hover:underline"
                >
                  View All
                </Link>
              </div>

              <div className="divide-y divide-slate-100">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="py-3.5 first:pt-0 last:pb-0 block group"
                  >
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0076FF] block mb-1">
                      {rp.category}
                    </span>
                    <h4 className="font-[family-name:var(--font-onest)] text-sm font-bold text-[#0f172a] group-hover:text-[#0076FF] transition-colors leading-snug">
                      {rp.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
