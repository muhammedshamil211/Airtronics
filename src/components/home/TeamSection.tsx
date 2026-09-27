'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from 'framer-motion';

const team = [
  {
    id: 1,
    name: 'Muhammed Rafi',
    role: 'Founder, HVAC Engineer & Master Technician',
    description:
      'Leading Airtronics Fixcare with expertise in HVAC design, AC repair, preventive maintenance, diagnostics, and commercial cooling solutions across Dubai.',
    image:
      'https://images.unsplash.com/photo-1537368910025-702804a94666?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Ahmed Siddiq',
    role: 'Senior Technician',
    description:
      'Specialized in AC troubleshooting, emergency repair services, duct inspections, and energy-efficient cooling system maintenance.',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Jamsheer',
    role: 'Senior Technician',
    description:
      'Experienced in residential and commercial HVAC systems, ensuring reliable cooling performance and long-term equipment health.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
  },
];

function TeamSlide({
  member,
  index,
  total,
  progress,
}: {
  member: (typeof team)[0];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    progress,
    [start, start + 0.08, end - 0.08, end],
    [0, 1, 1, 0]
  );

  const imageX = useTransform(
    progress,
    [start, start + 0.12, end - 0.08, end],
    [120, 0, 0, -120]
  );

  const textX = useTransform(
    progress,
    [start, start + 0.12, end - 0.08, end],
    [-80, 0, 0, -80]
  );

  const imageScale = useTransform(
    progress,
    [start, end],
    [1, 1.08]
  );

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center"
    >
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            style={{
              x: imageX,
              scale: imageScale,
            }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5] lg:aspect-[4/4.5]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
                priority={index === 0}
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            style={{ x: textX }}
            className="relative z-10"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="text-brand font-semibold">/</span>
              <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-semibold text-gray-600">
                Airtronics Experts
              </span>
            </div>

            <h3 className="text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] leading-none font-medium tracking-tight text-[#111111]">
              {member.name}
            </h3>

            <p className="mt-4 text-brand text-lg md:text-xl font-medium">
              {member.role}
            </p>

            <div className="w-20 h-[2px] bg-brand my-8" />

            <p className="text-[#666666] text-[16px] md:text-[18px] leading-relaxed max-w-xl">
              {member.description}
            </p>

            <div className="mt-10 flex gap-8">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#111111]">
                  4+
                </p>
                <p className="text-sm text-gray-500">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="text-3xl md:text-4xl font-bold text-[#111111]">
                  1000+
                </p>
                <p className="text-sm text-gray-500">
                  Projects
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#fcfcfc]"
      aria-labelledby="team-heading"
    >
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-10 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <span
            className="text-brand font-semibold"
            aria-hidden="true"
          >
            /
          </span>

          <span className="text-sm md:text-base font-semibold tracking-wide text-gray-800 uppercase">
            Dubai Municipality Certified Experts
          </span>
        </div>

        <h2
          id="team-heading"
          className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-medium tracking-tight text-[#111111] max-w-4xl mx-auto leading-[1.1]"
        >
          Meet Our AC Repair Specialists
        </h2>

        <p className="mt-4 text-[#666666] text-[15px] leading-relaxed max-w-2xl mx-auto">
          Meet the certified professionals behind Airtronics Fixcare. Every
          project is handled by experienced HVAC specialists committed to
          quality workmanship and customer satisfaction.
        </p>
      </div>

      {/* Cinematic Scroll Area */}
      <div
        className="relative"
        style={{
          height: `${team.length * 100}vh`,
        }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {team.map((member, index) => (
            <TeamSlide
              key={member.id}
              member={member}
              index={index}
              total={team.length}
              progress={scrollYProgress}
            />
          ))}

          {/* Progress Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
            {team.map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
