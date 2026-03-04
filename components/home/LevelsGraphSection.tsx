"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function LevelsGraphSection() {
  const container = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [sphereStyles, setSphereStyles] = useState<{ top: string, left: string, right?: string, bottom?: string, width: string, height: string }[]>([]);

  // Generamos esferas para las esquinas inferiores
  useEffect(() => {
    const styles = [
      {
        bottom: "5%",
        left: "-5%", // Cortada por el borde
        width: "150px",
        height: "150px",
        top: "auto",
      },
      {
        bottom: "10%",
        right: "-5%", // Cortada por el borde
        left: "auto",
        width: "120px",
        height: "120px",
        top: "auto",
      }
    ];
    setSphereStyles(styles as any);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    // 1. Icono superior derecho fade in
    tl.from(iconRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    // 2. Gráfica central zoom in y fade in
    tl.from(graphRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out"
    }, "-=0.5");

    // 3. Botón sube y hace fade in
    tl.from(buttonRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=1");

    // 4. Animación flotante de esferas
    gsap.utils.toArray<HTMLElement>(".floating-graph-sphere").forEach((sphere) => {
      gsap.to(sphere, {
        y: "random(-15, 15)",
        duration: "random(4, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Fondo (Reutilizado de Sección 3 con Overlay) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bloque3/FONDO.webp"
          alt="Dark Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay oscuro para contraste */}
        <div className="absolute inset-0 bg-[#0F172A]/80" />
      </div>

      {/* Esferas flotantes en las esquinas inferiores */}
      {[12, 16].map((num, i) => (
        <div
          key={`sphere-${num}-${i}`}
          className={`floating-graph-sphere absolute z-10 opacity-60 pointer-events-none ${!sphereStyles[i] ? 'hidden' : ''}`}
          style={sphereStyles[i] ? {
            top: sphereStyles[i].top,
            bottom: sphereStyles[i].bottom,
            left: sphereStyles[i].left,
            right: sphereStyles[i].right,
            width: sphereStyles[i].width,
            height: sphereStyles[i].height,
          } : {}}
        >
          <Image
            src={`/bloque3/ESFERA-${num}.webp`}
            alt={`Floating Sphere ${num}`}
            fill
            className="object-contain"
          />
        </div>
      ))}

      {/* Icono Superior Derecho */}
      <div ref={iconRef} className="absolute top-8 right-8 md:top-12 md:right-12 z-20 w-[50px] md:w-[80px] h-[50px] md:h-[80px]">
        <Image
          src="/bloque8/ELEMENTO 1.webp"
          alt="Icono Estrella/Sparkle"
          fill
          className="object-contain"
        />
      </div>

      {/* Contenedor Principal (Gráfica y Botón) */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center px-4 md:px-8 mt-10">

        {/* Gráfica Central */}
        <div ref={graphRef} className="relative w-full max-w-4xl lg:max-w-5xl aspect-[16/9] sm:aspect-auto sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
          <Image
            src="/bloque8/ELEMENTO 2.webp"
            alt="Gráfica 3 Niveles de Marca"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Botón de Acción */}
        <button
          ref={buttonRef}
          className="mt-8 md:mt-12 px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-[#b39441] text-[#c9ab5b] font-['Poppins'] font-black rounded-2xl transition-all duration-300 hover:bg-[#bda153] hover:text-[#0F172A] hover:scale-120 active:scale-95 text-3xl md:text-5xl tracking-tighter"
        >
          Iniciar diagnóstico
        </button>

      </div>
    </section>
  );
}
