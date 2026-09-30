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
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop',
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
  {
    id: 4,
    name: 'Muhammed Rafi',
    role: 'Founder, HVAC Engineer & Master Technician',
    description:
      'Leading Airtronics Fixcare with expertise in HVAC design, AC repair, preventive maintenance, diagnostics, and commercial cooling solutions across Dubai.',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop',
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
  const transitionOffset = (1 / total) * 0.25; // 25% of the slide duration

  let input: number[] = [];
  let opacityOutput: number[] = [];
  let imageXOutput: number[] = [];
  let textXOutput: number[] = [];

  if (total === 1) {
    // Single item: stays fully visible
    input = [0, 1];
    opacityOutput = [1, 1];
    imageXOutput = [0, 0];
    textXOutput = [0, 0];
  } else if (index === 0) {
    // First item: starts fully visible
    input = [0, end - transitionOffset, end];
    opacityOutput = [1, 1, 0];
    imageXOutput = [0, 0, -120];
    textXOutput = [0, 0, -80];
  } else if (index === total - 1) {
    // Last item: fades in, stays visible
    input = [start, start + transitionOffset, 1];
    opacityOutput = [0, 1, 1];
    imageXOutput = [120, 0, 0];
    textXOutput = [-80, 0, 0];
  } else {
    // Middle items
    input = [start, start + transitionOffset, end - transitionOffset, end];
    opacityOutput = [0, 1, 1, 0];
    imageXOutput = [120, 0, 0, -120];
    textXOutput = [-80, 0, 0, -80];
  }

  const opacity = useTransform(progress, input, opacityOutput);
  const visibility = useTransform(opacity, (val) => (val > 0 ? "visible" : "hidden"));
  const imageX = useTransform(progress, input, imageXOutput);
  const textX = useTransform(progress, input, textXOutput);

  const imageScale = useTransform(
    progress,
    [start, end],
    [1, 1.08]
  );

  return (
    <motion.div
      style={{ opacity, visibility }}
      className="absolute inset-0 flex items-center bg-[#fcfcfc]"
    >
      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 md:px-10 pt-10 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            style={{
              x: imageX,
              scale: imageScale,
            }}
            className="relative w-full max-w-xs sm:max-w-sm mx-auto lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl h-[30vh] min-h-[240px] max-h-[350px] md:h-auto md:max-h-none md:aspect-[4/5] lg:aspect-[4/4.5]">
              <Image
                src={member.image}
                alt={`${member.name} - ${member.role} in Dubai`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            style={{ x: textX }}
            className="relative z-10 text-center lg:text-left"
          >
            <div className="mb-2 md:mb-4 flex items-center justify-center lg:justify-start gap-2">
              <span className="text-brand font-semibold">/</span>
              <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-semibold text-gray-600">
                Airtronics Experts
              </span>
            </div>

            <h3 className="text-[28px] sm:text-[36px] md:text-[52px] lg:text-[72px] leading-tight font-medium tracking-tight text-[#111111]">
              {member.name}
            </h3>

            <p className="mt-2 md:mt-4 text-brand text-base md:text-xl font-medium">
              {member.role}
            </p>

            <div className="w-12 md:w-20 h-[2px] bg-brand my-4 md:my-8 mx-auto lg:mx-0" />

            <p className="text-[#666666] text-base md:text-[18px] leading-relaxed max-w-xl mx-auto lg:mx-0">
              {member.description}
            </p>

            <div className="mt-6 md:mt-10 flex gap-6 md:gap-8 justify-center lg:justify-start">
              <div>
                <p className="text-2xl md:text-4xl font-bold text-[#111111]">
                  4+
                </p>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="text-2xl md:text-4xl font-bold text-[#111111]">
                  1000+
                </p>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">
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
          height: `${team.length * 90}vh`,
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
