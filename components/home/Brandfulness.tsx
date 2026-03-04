"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Brandfulness() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".animate-bf-points", {
      x: -20,
      opacity: 0,
      duration: 0.8,
    })
      .from(".animate-bf-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }, "-=0.4")
      .from(".animate-bf-banner", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.2,
        ease: "expo.out",
      }, "-=0.6");
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-between overflow-hidden bg-black"
    >
      {/* 1. Fondo con Video Autoplay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-[0.8] contrast-[1.1] saturate-[0.9]"
        >
          <source src="/hero/city_prob4.mp4" type="video/mp4" />
        </video>

        {/* Capa de textura de ruido para ocultar pixelado y banding */}
        <div className="absolute inset-0 opacity-[0.2] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Patrón de puntos (Dotted Overlay) para look cinematográfico y ocultar artefactos */}
        <div className="absolute inset-0 opacity-[0.3] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:4px_4px]" />

        {/* Overlays para legibilidad */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* 2. Contenido Principal */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center">
        <div className="max-w-7xl w-full py-20">

          {/* Indicador Superior */}
          {/* Indicador Superior - Paleta Completa */}
          {/* Indicador Superior - Paleta Completa */}
          <div className="animate-bf-points flex mb-10"> {/* ¡Adiós gap-3! */}
            {/* 1. Turquesa / Cian */}
            <span className="w-3 h-3 rounded-full bg-[#4FB1A1] shadow-[0_0_8px_rgba(79,177,161,0.4)]" />
            {/* 2. Blanco Hueso */}
            <span className="w-3 h-3 rounded-full bg-[#FFFFFF] shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            {/* 3. Beige / Arena */}
            <span className="w-3 h-3 rounded-full bg-[#C6A36C] shadow-[0_0_8px_rgba(198,163,108,0.4)]" />
            {/* 4. Amarillo Mostaza */}
            <span className="w-3 h-3 rounded-full bg-[#E6A800] shadow-[0_0_8px_rgba(230,168,0,0.4)]" />
            {/* 5. Salmón / Coral */}
            <span className="w-3 h-3 rounded-full bg-[#E57A7A] shadow-[0_0_8px_rgba(229,122,122,0.4)]" />
            {/* 6. Rosa Intenso */}
            <span className="w-3 h-3 rounded-full bg-[#D14D72] shadow-[0_0_8px_rgba(209,77,114,0.4)]" />
            {/* 7. Granate */}
            <span className="w-3 h-3 rounded-full bg-[#801A33] shadow-[0_0_8px_rgba(128,26,51,0.4)]" />
            {/* 8. Vino Tinto Oscuro */}
            <span className="w-3 h-3 rounded-full bg-[#41111C] shadow-[0_0_8px_rgba(65,17,28,0.4)]" />
          </div>

          <div className="flex flex-col space-y-8">
            <h2 className="animate-bf-text text-4xl md:text-2xl lg:text-6xl font-lemon-milk font-bold text-white leading-[1.1] tracking-tighter uppercase drop-shadow-2xl">
              BRANDFULNESS: <br />
              <span className="text-white/90">MARCA CONSCIENTE DEL MOMENTO.</span>
            </h2>

            <p className="animate-bf-text text-xl md:text-3xl text-[#c5a13d] font-semibold max-w-4xl leading-snug drop-shadow-lg">
              Diseñamos para el instante en que tu público te <br />
              <span className="font-bold text-[#ebb82f]">necesita, aprende, se entretiene o se conecta.</span>
            </p>

            <div className="animate-bf-text pt-12 md:pt-15 flex justify-center">
              <button className="px-4 md:px-8 py-1 md:py-2 bg-transparent border-2 border-[#b39441] text-[#c9ab5b] font-['Poppins'] font-black rounded-2xl transition-all duration-300 hover:bg-[#bda153] hover:text-[#0F172A] hover:scale-120 active:scale-95 text-2xl md:text-5xl tracking-tighter">
                Consultoría
              </button>
            </div>

            <p className="animate-bf-text w-full text-center text-sm md:text-lg text-white/80 font-medium tracking-[0.2em] uppercase pt-12">
              La venta llega como consecuencia de valor, impacto y calidad.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Frase de Cierre (Banner Inferior) */}
      <div className="animate-bf-banner relative z-10 w-full bg-[#caa336] py-20 md:py-18 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <p className="text-white text-lg md:text-3xl lg:text-4xl font-black uppercase tracking-[0.15em] text-center px-6">
          VENDER SIN VENDER. GRITAR SIN HACER RUIDO.
        </p>
      </div>
    </section>
  );
}
