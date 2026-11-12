import type { Metadata } from 'next';
import React from 'react';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';
import { BLOG_POSTS } from '@/data/blogData';

const AboutCTA = dynamic(() => import('@/components/about/AboutCTA'));

export const metadata: Metadata = {
  title: 'AC & HVAC Blog Dubai | Airtronics Fixcare',
  description:
    'Helpful AC tips & guides for Dubai homes and offices. Learn how to fix warm AC air, lower DEWA bills, prevent water leaks & care for Empower FCUs.',
  keywords: [
    'Dubai AC blog',
    'AC tips Dubai',
    'lower DEWA AC bill Dubai',
    'AC not cooling Dubai',
    'Empower FCU guide Dubai',
    'Airtronics Fixcare blog',
  ].join(', '),
  alternates: {
    canonical: 'https://airtronicsfixcare.com/blog',
  },
  openGraph: {
    title: 'AC & HVAC Blog Dubai | Airtronics Fixcare',
    description:
      'Practical Dubai AC guides: warm air troubleshooting, DEWA electricity savings, water leaks, duct cleaning, and Empower FCU tips.',
    url: 'https://airtronicsfixcare.com/blog',
    siteName: 'Airtronics Fixcare Technical Services LLC',
    locale: 'en_AE',
    type: 'website',
  },
};

export default function BlogPage() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': 'https://airtronicsfixcare.com/blog#blog',
        url: 'https://airtronicsfixcare.com/blog',
        name: 'Airtronics Fixcare Dubai AC & Climate Blog',
        description:
          'Plain-English guides on AC troubleshooting, DEWA energy savings, indoor air quality, and Dubai climate cooling.',
        blogPost: BLOG_POSTS.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          url: `https://airtronicsfixcare.com/blog/${post.slug}`,
          datePublished: post.publishedAt,
          image: `https://airtronicsfixcare.com${post.image}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://airtronicsfixcare.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://airtronicsfixcare.com/blog',
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white selection:bg-[#0076FF] selection:text-white">
      <Script
        id="blog-index-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogHero />
      <BlogGrid />
      <AboutCTA />
    </main>
  );
}

