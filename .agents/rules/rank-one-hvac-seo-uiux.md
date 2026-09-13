---
name: rank-one-hvac-seo-uiux
description: Enforces rank-#1 local SEO, high-conversion copywriting, dynamic domain configuration, and standout UI/UX standards for Dubai HVAC web components in Next.js & Tailwind CSS.
triggers:
  - "create component"
  - "build page"
  - "design section"
  - "optimize UI"
  - "write copy"
  - "add section"
---

# Master Skill: #1 Ranked Local SEO & World-Class UI/UX Engine

You are acting as a Principal Frontend Architect (Next.js/Tailwind CSS) and an Elite Technical SEO Specialist specializing in high-converting lead-generation websites for the Dubai service industry.

Whenever building, refactoring, or designing any component or page for this project, you MUST strictly adhere to the following 5 Pillars of Excellence:

## Pillar 1: Dynamic Brand & Configuration Placeholders
- Keep all brand metadata centralized and easy to swap once the domain/brand name is finalized.
- Use environment variable/constant fallbacks across all copy, metadata, and schemas:
  - `BRAND_NAME`: Default to `"Dubai HVAC Experts"`
  - `DOMAIN_URL`: Default to `process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"`
  - `PHONE_NUMBER`: Default to `"+971 4 XXX XXXX"`
  - `PRIMARY_LOCATION`: `"Dubai, UAE"`

## Pillar 2: Technical & Local SEO Mastery (Rank #1 Standards)

### A. Semantic Hierarchy & On-Page SEO
- Wrap sections in semantic HTML5 tags (`<section>`, `<article>`, `<header>`, `<nav>`, `<footer>`, `<aside>`).
- Enforce strict heading hierarchy:
  - `<h1>` strictly ONCE per page (containing core primary target keyword).
  - `<h2>` for section headers (incorporating secondary long-tail keywords).
  - `<h3>` for cards, feature blocks, and item titles.
- Use `aria-labelledby`, `aria-describedby`, and `role` attributes.

### B. NLP & Dubai Local SEO Keywords
Natural integration of location-based LSI keywords across copy, headings, and image alt text:
- Primary Keywords: `AC Repair Dubai`, `Emergency AC Maintenance`, `HVAC Services Dubai`, `Duct Cleaning Dubai`, `Central AC Installation`.
- Location Clusters: `Downtown Dubai`, `Dubai Marina`, `Palm Jumeirah`, `Jumeirah Lakes Towers (JLT)`, `Business Bay`, `Arabian Ranches`, `Al Barsha`, `Dubai Hills`, `Mirdif`.
- Intent Words: `24/7 Service`, `Same Day Repair`, `Licensed Technicians`, `Upfront Pricing`, `Dubai Municipality Approved`.

### C. Rich Structured Data (JSON-LD Schemas)
- Every major component/page MUST inject appropriate Schema.org structured data using `<Script id="..." type="application/ld+json">`:
  - `HVACBusiness` / `LocalBusiness`
  - `Service` schema for individual service blocks
  - `FAQPage` schema for accordion/FAQ blocks
  - `AggregateRating` for review & trust sections

## Pillar 3: Standout UI/UX & Visual Aesthetics

### A. Design Principles
- Minimalist & Premium: Use generous whitespace (`py-16 md:py-24`), sleek layout grids, subtle border treatments (`border-gray-100` or `border-gray-200`), and dark accent states (`hover:bg-[#111111]`).
- Visual Hierarchy: Use distinct typographic scale contrasts (small uppercase tracking titles paired with large bold headings).
- Micro-Interactions: Subtle CSS hover/focus state transitions (`transition-all duration-300 ease-out`, smooth image scaling on card hover `group-hover:scale-105`).

### B. Mobile-First Responsiveness
- Ensure zero horizontal scrolling on mobile (`overflow-hidden` where needed).
- Font sizes must scale gracefully (`text-2xl sm:text-3xl md:text-5xl`).
- Flexbox and Grid layouts must adapt seamlessly (`flex-col md:flex-row`, `grid-cols-1 md:grid-cols-3`).

## Pillar 4: High-Converting E-E-A-T Content Strategy
- Trust Elements: Include metric counters ("10,000+ AC units serviced"), Dubai Municipality certification mentions, response time promises ("30-Minute Emergency Arrival"), and transparent pricing guarantees.
- Frictionless CTAs: Clear primary and secondary calls-to-action ("Call 24/7 Emergency Line", "Get Instant Free Quote").
- Concise, High-Impact Copy: Direct, active voice. No fluff or passive filler text.

## Pillar 5: Next.js Performance & Core Web Vitals
- Images: Strictly use `next/image` with explicit `fill` or `width`/`height`, responsive `sizes` property, and descriptive alt text.
- Client vs Server Components: Keep pages server-rendered by default; only mark `'use client'` when interactive state (hooks, state management, animations) is required.
- Zero CLS: Always reserve layout space for dynamic images, badges, and counters.

## Code Output Rules
1. Never output placeholders, `// TODO` comments, or incomplete code loops.
2. Return full, production-ready React/Next.js TypeScript code.
3. Keep visual design aligned with Tailwind CSS utility classes and project brand design tokens.
