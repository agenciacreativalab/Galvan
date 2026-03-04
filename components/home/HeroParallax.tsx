"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function HeroParallax() {
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax suave para el fondo
    gsap.to(".hero-bg", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Parallax para Jairo
    gsap.to(imageRef.current, {
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Animación continua para las bolitas flotantes (con más movimiento)
    // Busca esta parte en tu código y reemplázala:
    gsap.to(".floating-ball-1", {
      x: "-70%",           // Se mueve solo un 20% de su propio ancho hacia la izquierda
      y: -60,              // Sube y baja 60px
      rotation: 15,        // Un giro más sutil para que no parezca que se cae
      duration: 5,         // Un poco más lento para que sea elegante
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".floating-ball-2", {
      x: 50,             // Se mueve 50px a la derecha
      y: -100,           // Sube 100px desde su posición de abajo
      rotation: -20,     // Rota un poco hacia el otro lado
      duration: 6,       // Movimiento lento y majestuoso
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

    // ... justo debajo de las animaciones de las bolitas

    // Entrada elegante
    const tl = gsap.timeline();
    tl.from(".hero-logo", {
      y: -20,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
      .from(".hero-content h1", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      }, "-=0.5")
      .from(".hero-tagline, .hero-btns", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.8")
      .from(imageRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
      }, "-=1.2")
      .from(".floating-ball-1, .floating-ball-2, .floating-ball-3, .floating-ball-4, .floating-ball-5", {
        scale: 0,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=1.5");

  }, { scope: container });

  return (
    <div ref={container} className="relative w-full h-screen overflow-hidden bg-[#060010] flex items-center justify-center">
      {/* 1. Fondo - Calidad Pura y Ajuste Perfecto */}
      <div className="hero-bg absolute inset-0 z-0">
        <Image
          src="/hero/FONDO_1.webp"
          alt="Hero Background"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
        {/* Un único overlay de viñeta para profundidad sin ensuciar la imagen */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* 
        ======== BOLITAS FLOTANTES ========
        Aquí puedes editar los tamaños y posiciones de cada bolita.
        - TAMAÑO: Cambia las clases w-[X] y h-[X] (ej. md:w-[200px] md:h-[200px] o w-64 h-64).
        - POSICIÓN: Edita top-[X%] o bottom-[X%] junto con right-[X%] o left-[X%] (ej. top-[20%] right-[10%]).
        - El efecto Hover ya está aplicado (- hover:scale-125). 
      */}
      <div className="floating-ball-1 absolute top-[20%] right-[5%] md:top-[15%] md:right-[15%] w-90 h-90 md:w-110 md:h-100 z-[5] pointer-events-auto cursor-pointer">
        <Image src="/hero/RECURSO_1.webp" alt="Floating ball 1" fill className="object-contain hover:scale-150 transition-transform duration-300" quality={100} />
      </div>

      <div className="floating-ball-1 absolute bottom-[-10%] right-[-5%] md:bottom-[-20%] md:right-[5%] w-[400px] h-[400px] md:w-[200px] md:h-[700px] z-[5] pointer-events-auto cursor-pointer">
        <Image
          src="/hero/RECURSO_2.webp"
          alt="Floating ball 1"
          fill
          className="object-contain hover:scale-150 transition-transform duration-300"
          quality={100}
        />
      </div>

      <div className="floating-ball-2 absolute bottom-[-10%] left-[-5%] md:bottom-[-20%] md:left-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] z-[5] pointer-events-auto cursor-pointer">
        <Image
          src="/hero/RECURSO_2.webp"
          alt="Floating ball 2"
          fill
          className="object-contain hover:scale-150 transition-transform duration-300"
          quality={100}
        />
      </div>

      {/* 3. Imagen Jairo (Ajustes específicos para mobile sin tocar Desktop) */}
      <div
        ref={imageRef}
        className="absolute bottom-[-5%] md:bottom-10 md:bottom-30 right-1/2 translate-x-1/2 md:translate-x-0 md:right-[5%] lg:right-[10%] xl:right-[15%] w-[280px] h-[300px] sm:w-[320px] sm:h-[350px] md:w-[550px] md:h-[500px] lg:w-[650px] lg:h-[600px] xl:w-[750px] xl:h-[700px] z-10 pointer-events-auto cursor-pointer group"
      >
        <Image
          src="/hero/JAIRO_1.webp"
          alt="Jairo Profile"
          fill
          className="object-contain object-bottom group-hover:scale-110 transition-transform duration-500"
          priority
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 w-full pointer-events-none">
        {/* 2. Contenido de Texto */}
        <div className="hero-content w-full relative z-20 text-center md:text-left pointer-events-none">
          {/* LOGO */}
          <div className="hero-logo mb-6 flex justify-center md:justify-start md:ml-2 lg:ml-2 cursor-pointer pointer-events-auto">
            <Image
              src="/hero/LOGO_1.webp"
              alt="Logo"
              width={700}
              height={400}
              className="object-contain hover:scale-110 transition-transform duration-300"
            />
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-6xl font-lemon-milk font-bold text-white tracking-tight leading-tight mb-10 md:mb-12 text-center md:text-left">
            MARCAS DE ALTO IMPACTO, <br /> DISEÑADAS COMO ECOSISTEMAS.
          </h1>

          <p className="hero-tagline text-lg md:text-xl text-white/80 font-normal tracking-[0.1em] mb-14 md:mb-16 mx-auto md:mx-0">
            <span className="text-blue-300">Brandfulness</span> · Hecho a mano · Del boceto al vector
          </p>

          <div className="hero-btns flex flex-col gap-5 md:gap-6 w-fit mx-auto md:mx-0 mt-8 md:mt-12 pointer-events-auto">
            <button className="px-6 py-3 bg-transparent text-white font-black rounded-full border border-white/80 hover:scale-150 transition-all duration-300 text-2xl md:text-3xl tracking-tight">
              Iniciar diagnóstico
            </button>
            <button className="px-5 py-1 bg-transparent text-white font-black rounded-full border border-white/80 hover:scale-150 transition-all text-lg md:text-xl tracking-tight normal-case w-fit">
              Ver niveles
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#060010] via-[#060010]/50 to-transparent z-10 pointer-events-none" />
    </div>
  );
}
