"use client";

import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { Quote } from "lucide-react";

const MARQUEE_SPEED = 60;

const testimonials = [
  {
    initials: "RK",
    name: "R. Krishnaswamy",
    role: "CFO, Agro Export House — Chennai",
    content:
      "We evaluated six cold storage contractors before selecting Mekark. What differentiated them was engineering depth, not price. Their thermal simulation report gave our board confidence in predictable operating costs. Two years post-commissioning, our energy costs are 21% below projection — that's the only metric that matters to a CFO.",
  },
  {
    initials: "MR",
    name: "S. Mohammed Rafi",
    role: "MD, Marine Exports Co. — Ramanathapuram",
    content:
      "Mekark handled our 3,500 MT seafood processing cold storage project end-to-end, from design and engineering to construction and MPEDA compliance documentation. The entire facility was delivered in 112 days, with clear communication and strong project control throughout. Exactly as contracted, with no surprises during execution.",
  },
  {
    initials: "PS",
    name: "Dr. P. Subramaniam",
    role: "VP Operations, Specialty Pharma — Coimbatore",
    content:
      "Our pharma cold room required complete WHO-GDP validation documentation ahead of a regulatory audit. Mekark not only built the facility to specification but also prepared the full IQ/OQ/PQ validation pack. Their understanding of compliance requirements helped streamline the audit process, resulting in a first-time audit pass.",
  },
  {
    initials: "AK",
    name: "Arun Krishnamurthy",
    role: "Operations Manager, Tamil Nadu",
    content:
      "We needed a temperature-controlled storage facility for our fresh produce operations, and Mekark delivered exactly what we needed — on time and within budget. The insulation detailing, structural precision, and MEP coordination for our cold room were handled seamlessly. Zero issues since commissioning.",
  },
  {
    initials: "MR",
    name: "Dr Meenakshi Rajan",
    role: "Facility Head, Chennai",
    content:
      "Cold storage for pharma is not just about temperature — it's about compliance, accuracy, and zero failure risk. Mekark's team understood that from day one. Their engineering approach, documentation, and quality checks gave us the confidence we needed. Our facility passed the regulatory audit on first inspection.",
  },
  {
    initials: "VS",
    name: "Venkat Subramanian",
    role: "Plant Head, Coimbatore",
    content:
      "Mekark built our multi-chamber cold storage facility with different temperature zones for dairy and frozen goods. Their ability to manage civil works, steel structure, and MEP under one contract saved us significant coordination time. Solid team, professional execution.",
  },
];

function TestimonialCard({
  item,
  index,
}: {
  item: (typeof testimonials)[number];
  index: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="
        relative
        shrink-0
        w-[340px]
        sm:w-[380px]
        lg:w-[400px]
        bg-white
        rounded-3xl
        border
        border-[#E3E4E7]
        p-8
        flex
        flex-col
        min-h-[420px]
        shadow-sm
      "
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: index * 0.4,
        }}
        className="absolute top-6 left-6"
      >
        <Quote size={44} className="text-[#E60F1A]" strokeWidth={1.5} />
      </motion.div>

      <div className="mt-10 text-[#E60C19] text-[24px]">★★★★★</div>

      <p className="mt-6 flex-1 text-[16px] leading-[26px] text-[#101116]">
        {item.content}
      </p>

      <div className="mt-8 pt-5 border-t border-[#E3E4E7] flex items-center gap-4">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
          }}
          className="
            w-11
            h-11
            rounded-full
            bg-[#E60F1A]
            text-white
            flex
            items-center
            justify-center
            font-extrabold
            text-sm
          "
        >
          {item.initials}
        </motion.div>

        <div>
          <div className="font-bold text-[16px] text-[#101116]">{item.name}</div>
          <div className="text-[12px] text-[#53555B]">{item.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

function TestimonialMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [loopWidth, setLoopWidth] = useState(0);
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  useLayoutEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setLoopWidth(trackRef.current.scrollWidth / 2);
    };

    measure();

    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);

    return () => observer.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (!loopWidth || isPaused) return;

    let nextX = x.get() - (MARQUEE_SPEED * delta) / 1000;
    if (nextX <= -loopWidth) {
      nextX += loopWidth;
    }
    x.set(nextX);
  });

  const loopItems = [...testimonials, ...testimonials];

  return (
    <div className="relative mt-16">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#FCF9FA] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#FCF9FA] to-transparent sm:w-24" />

      <div
        className="overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max gap-6 px-6 will-change-transform"
        >
          {loopItems.map((item, index) => (
            <TestimonialCard
              key={`${item.name}-${index}`}
              item={item}
              index={index % testimonials.length}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function ClientTestimonials() {
  return (
    <section id="testimonials" className="bg-[#FCF9FA] py-[70px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-20">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD8D3] bg-[#FFECE9] px-4 py-2">
            <div className="h-2 w-2 rounded-full bg-[#E40015]" />
            <span className="text-[11px] tracking-[0.53px] uppercase text-[#E60C19] font-medium">
              Client Testimonials
            </span>
          </div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 text-center text-black font-extrabold text-[34px] md:text-[44px] leading-tight tracking-[-2px]"
        >
          What Business Leaders Say About{" "}
          <span className="text-[#E60C19]">Mekark</span>
        </motion.h2>
      </div>

      <TestimonialMarquee />
    </section>
  );
}
