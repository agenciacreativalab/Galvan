"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function HeroParallax() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Background parallax (slower than scroll)
    gsap.to(".parallax-bg", {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Text parallax (faster than scroll, fading out)
    gsap.to(".parallax-text", {
      yPercent: 80,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: container });

  return (
    <div ref={container} className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#060010]">
      {/* Abstract Animated/Parallax Background */}
      <div className="parallax-bg absolute inset-0 z-0 scale-[1.2]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(120,0,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,100,255,0.15),transparent_50%)]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>
      
      {/* Vignette effect */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#060010]/50 to-[#060010]" />
      
      {/* Content */}
      <div className="parallax-text relative z-20 flex flex-col items-center text-center px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium text-white/80 tracking-wide uppercase">Available for work</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20 tracking-tighter mb-8 pb-2">
          Creative
          <br />
          Developer.
        </h1>
        
        <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed mb-12">
          Crafting immersive digital experiences, interactive 3D environments, 
          and professional interfaces with modern web technologies.
        </p>

        <Link 
          href="/portafolio"
          className="group relative px-8 py-4 bg-white text-[#060010] font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 via-white to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative flex items-center gap-2">
            Explorar Portafolio
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
