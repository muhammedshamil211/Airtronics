'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Clock, ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/data/blogData';

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.keywords.some((k) => k.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost =
    selectedCategory === 'All' && !searchQuery.trim() ? filteredPosts[0] : null;
  const gridPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-100"
      aria-label="Blog Articles"
    >
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Bar: Slanted Category Tabs + Search Input */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 mb-10 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-2.5">
            {BLOG_CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 [transform:skewX(-10deg)] rounded-none cursor-pointer border ${
                    active
                      ? 'bg-[#0076FF] text-white border-[#0076FF]'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-[#0076FF] hover:text-[#0076FF]'
                  }`}
                >
                  <span className="inline-block [transform:skewX(10deg)]">{category}</span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g. DEWA, FCU, leak)..."
              aria-label="Search blog articles"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-[#0076FF] focus:bg-white focus:outline-none text-sm text-slate-900 rounded-none transition-colors"
            />
          </div>
        </div>

        {/* Featured Lead Article */}
        {featuredPost && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-12 border border-slate-200 bg-white rounded-none overflow-hidden group hover:border-[#0076FF] transition-colors"
          >
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >
              <div className="lg:col-span-6 relative min-h-[250px] sm:min-h-[320px] bg-slate-900 overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#0076FF] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider [transform:skewX(-10deg)] rounded-none">
                  <span className="inline-block [transform:skewX(10deg)]">Featured Guide</span>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 mb-3">
                    <span className="text-[#0076FF] uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                    <span>&bull;</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                    <span>&bull;</span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredPost.publishedAt}
                    </span>
                  </div>

                  <h2 className="font-[family-name:var(--font-onest)] text-2xl sm:text-3xl font-bold text-[#0f172a] group-hover:text-[#0076FF] transition-colors leading-tight mb-4">
                    {featuredPost.title}
                  </h2>

                  <p className="font-[family-name:var(--font-onest)] text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 font-[family-name:var(--font-onest)] text-sm font-bold text-[#0076FF]">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.article>
        )}

        {/* Standard 3-Column Editorial Grid */}
        {gridPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {gridPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: 'easeOut' }}
                className="border border-slate-200 bg-white rounded-none overflow-hidden flex flex-col group hover:border-[#0076FF] transition-colors"
              >
                <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                  <div className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs font-semibold text-slate-500 mb-3">
                        <span className="text-[#0076FF] uppercase tracking-wider">
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="font-[family-name:var(--font-onest)] text-lg sm:text-xl font-bold text-[#0f172a] group-hover:text-[#0076FF] transition-colors leading-snug mb-3">
                        {post.title}
                      </h2>

                      <p className="font-[family-name:var(--font-onest)] text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0076FF]">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="border border-slate-200 bg-slate-50 p-10 text-center rounded-none">
            <p className="font-[family-name:var(--font-onest)] text-base font-semibold text-[#0f172a] mb-2">
              No matching articles found
            </p>
            <p className="text-sm text-slate-600 mb-5">
              Try clearing your search or choosing another category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="bg-[#0076FF] text-white text-sm font-semibold px-5 py-2.5 [transform:skewX(-10deg)] rounded-none cursor-pointer"
            >
              <span className="inline-block [transform:skewX(10deg)]">Show All Guides</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

