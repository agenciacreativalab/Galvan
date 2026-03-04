"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function LevelsSection() {
  const container = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Timeline para la entrada de la sección
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%", // Empieza la animación cuando el top de la sección llega al 75% del viewport
        toggleActions: "play none none reverse",
      },
    });

    // 1. Animación del perfil (entra desde la izquierda y abajo)
    tl.from(profileRef.current, {
      x: -150,
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });

    // 2. Animación de los textos en cascada
    tl.from(".animate-lvl-text", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    }, "-=1");

  }, { scope: container });

  return (
    <section ref={container} className="relative w-full min-h-screen bg-[#060010] overflow-hidden flex items-center">

      {/* 1. Fondo a pantalla completa */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bloque7/FONDO.webp"
          alt="Levels Background"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
        {/* Overlay sutil para oscurecer el fondo si el texto lo necesita */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 3. Estructura Principal */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full min-h-[80vh] items-center">

          {/* Columna Izquierda (La Silueta) */}
          <div className="relative h-[50vh] lg:h-[80vh] flex items-end justify-center lg:justify-start w-full">
            <div ref={profileRef} className="relative w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] h-[100%] max-h-[800px] origin-bottom">
              <Image
                src="/bloque7/perfil.webp"
                alt="Silueta Perfil"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Columna Derecha (Textos) */}
          <div className="flex flex-col justify-start pt-20 lg:pt-32 space-y-12 lg:pl-10 pb-20 lg:pb-0 text-center lg:text-left relative z-10 h-full">

            {/* Título Principal */}
            <h2 className="font-lemon-milk font-bold text-5xl md:text-7xl lg:text-5xl leading-[1.1] tracking-tighter uppercase flex flex-col items-center lg:items-start">
              <span className="animate-lvl-text text-white drop-shadow-lg">DISEÑA TU</span>
              <span className="animate-lvl-text text-white drop-shadow-lg">MARCA CON</span>
              <span className="animate-lvl-text text-white drop-shadow-lg">UNO DE</span>
              <span className="animate-lvl-text text-white drop-shadow-lg">NUESTROS</span>
              <span className="animate-lvl-text text-[#E6A800] border-b-4 border-[#E6A800] pb-2 mt-2 drop-shadow-[0_0_20px_rgba(230,168,0,0.3)]">
                TRES NIVELES
              </span>
            </h2>

          </div>

        </div>
      </div>

      {/* Párrafo Inferior Centrado sobre la imagen */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-20 pb-32 md:pb-40 lg:pb-32">
        <p className="animate-lvl-text text-white font-medium text-lg md:text-2xl lg:text-3xl max-w-4xl leading-relaxed text-center font-['Poppins'] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] px-4">
          Cuando la identidad deja de ser solo visual y empieza a vivirse en cada punto de contacto.
        </p>
      </div>
    </section>
  );
}
