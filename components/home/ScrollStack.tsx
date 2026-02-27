"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const STACK_ITEMS = [
  { id: 1, title: "Frontend Innovation", desc: "Building scalable and performant web applications using Next.js and React.", color: "bg-[#110022]" },
  { id: 2, title: "Immersive Interactions", desc: "Bringing interfaces to life with GSAP, Three.js, and complex animations.", color: "bg-[#1a0033]" },
  { id: 3, title: "Pixel Perfect", desc: "Obsessive attention to detail, typography, and visual harmony.", color: "bg-[#220044]" },
];

export function ScrollStack() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
    const tl = gsap.timeline();

    cards.forEach((card, index) => {
      if (index === 0) return; // Skip first card
      
      // Move current card up
      tl.to(card, {
        yPercent: -100,
        ease: "none",
      }, index * 0.5);

      // Scale down and dim the previous card
      tl.to(cards[index - 1], {
        scale: 0.92,
        opacity: 0.3,
        ease: "none",
      }, index * 0.5);
    });

    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: `+=${cards.length * 100}vh`,
      pin: true,
      scrub: true,
      animation: tl
    });
  }, { scope: container });

  return (
    <div ref={container} className="h-screen w-full bg-[#060010] overflow-hidden flex items-center justify-center">
      <div className="relative w-full max-w-5xl h-[70vh] px-6">
        {STACK_ITEMS.map((item, i) => (
          <div 
            key={item.id}
            className="stack-card absolute top-0 left-0 w-full h-full rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-end border border-white/10 shadow-2xl origin-top"
            style={{ 
              backgroundColor: "transparent",
              top: i === 0 ? 0 : "100%",
              zIndex: i
            }}
          >
            {/* Background color layer */}
            <div className={`absolute inset-0 ${item.color} rounded-[2.5rem] -z-10`} />
            
            {/* Content */}
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
              {item.title}
            </h3>
            <p className="text-xl md:text-3xl text-white/70 max-w-3xl font-light leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
