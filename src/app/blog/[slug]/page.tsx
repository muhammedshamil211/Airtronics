import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { BLOG_POSTS } from '@/data/blogData';
import BlogPostContent from '@/components/blog/BlogPostContent';

const AboutCTA = dynamic(() => import('@/components/about/AboutCTA'));

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found | Airtronics Fixcare',
      description: 'The requested AC guide could not be found.',
    };
  }

  const fullTitle = post.metaTitle.includes('Airtronics')
    ? post.metaTitle
    : `${post.metaTitle} | Airtronics Fixcare`;
  const imageUrl = post.image.startsWith('http')
    ? post.image
    : `https://airtronicsfixcare.com${post.image}`;

  return {
    title: fullTitle,
    description: post.metaDescription,
    keywords: post.keywords.join(', '),
    alternates: {
      canonical: `https://airtronicsfixcare.com/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Airtronics Fixcare`,
      description: post.metaDescription,
      url: `https://airtronicsfixcare.com/blog/${post.slug}`,
      siteName: 'Airtronics Fixcare Technical Services LLC',
      locale: 'en_AE',
      type: 'article',
      publishedTime: post.publishedAt,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: post.metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function SingleBlogPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `https://airtronicsfixcare.com/blog/${post.slug}#article`,
        headline: post.title,
        description: post.metaDescription,
        image: `https://airtronicsfixcare.com${post.image}`,
        datePublished: post.publishedAt,
        author: {
          '@type': 'Organization',
          name: 'Airtronics Fixcare Technical Services LLC',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Airtronics Fixcare Technical Services LLC',
          logo: {
            '@type': 'ImageObject',
            url: 'https://airtronicsfixcare.com/images/airtronics-logo.png',
          },
        },
        mainEntityOfPage: `https://airtronicsfixcare.com/blog/${post.slug}`,
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
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `https://airtronicsfixcare.com/blog/${post.slug}`,
          },
        ],
      },
      ...(post.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: post.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <main className="min-h-screen bg-white selection:bg-[#0076FF] selection:text-white">
      <Script
        id={`blog-post-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaGraph) }}
      />
      <BlogPostContent post={post} />
      <AboutCTA />
    </main>
  );
}

