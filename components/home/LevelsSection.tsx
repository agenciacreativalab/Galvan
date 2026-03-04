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

    // Animación continua para las bolitas flotantes
    gsap.to(".floating-ball-1", {
      x: "-70%",
      y: -60,
      rotation: 15,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".floating-ball-2", {
      x: 50,
      y: -100,
      rotation: -20,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".floating-ball-3", {
      y: -60,
      x: 40,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1
    });

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

      {/* ======== BOLITAS FLOTANTES ======== */}
      <div className="floating-ball-1 absolute top-[20%] right-[20%] md:top-[20%] md:right-[50%] w-60 h-60 md:w-110 md:h-80 z-[5] pointer-events-auto cursor-pointer">
        <Image src="/hero/RECURSO_1.webp" alt="Floating ball 1" fill className="object-contain hover:scale-150 transition-transform duration-300" quality={100} />
      </div>

      <div className="floating-ball-1 absolute bottom-[-10%] right-[-5%] md:bottom-[-4%] md:right-[5%] w-[400px] h-[400px] md:w-[200px] md:h-[700px] z-[5] pointer-events-auto cursor-pointer">
        <Image
          src="/hero/RECURSO_1.webp"
          alt="Floating ball 1"
          fill
          className="object-contain hover:scale-150 transition-transform duration-300"
          quality={100}
        />
      </div>

      <div className="floating-ball-2 absolute bottom-[-10%] left-[-20%] md:bottom-[9%] md:left-[15%] w-[400px] h-[400px] md:w-[200px] md:h-[200px] z-[5] pointer-events-auto cursor-pointer">
        <Image
          src="/hero/RECURSO_2.webp"
          alt="Floating ball 2"
          fill
          className="object-contain hover:scale-150 transition-transform duration-300"
          quality={100}
        />
      </div>

      <div className="floating-ball-3 absolute top-[30%] left-[350%] md:top-[42%] md:left-[68%] w-[150px] h-[150px] md:w-[100px] md:h-[100px] z-[5] pointer-events-auto cursor-pointer">
        <Image
          src="/hero/RECURSO_2.webp"
          alt="Floating ball 3"
          fill
          className="object-contain hover:scale-150 transition-transform duration-300"
          quality={100}
        />
      </div>

      {/* 3. Estructura Principal */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full min-h-[80vh] items-center">

          {/* Columna Izquierda (La Silueta) */}
          <div className="relative h-[50vh] lg:h-[80vh] flex items-end justify-center lg:justify-start w-full pointer-events-auto">
            <div ref={profileRef} className="relative w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] h-[100%] max-h-[800px] origin-bottom cursor-pointer group">
              <Image
                src="/bloque7/perfil.webp"
                alt="Silueta Perfil"
                fill
                className="object-contain object-bottom drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
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
          Cuando la identidad deja de ser solo visual y <br /> empieza a vivirse en cada punto de contacto.
        </p>
      </div>
    </section>
  );
}
