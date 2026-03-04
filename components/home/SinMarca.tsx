"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function SinMarca() {
  const container = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animación de la ilustración izquierda
    tl.from(visualRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });

    // Animación del texto derecho
    tl.from(".animate-sm-text", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    }, "-=1");

    // Animación de las esferas (fade in/scale in al scrollear)
    tl.fromTo(".floating-sphere", 
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 1.5, stagger: 0.2, ease: "back.out(1.7)" },
      "-=1.5"
    );

    // Animación continua para las esferas flotantes
    gsap.to(".floating-sphere", {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      duration: "random(4, 6)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    });

    // Animaciones para las esferas orbitando (15, 16, 19, 21, 22)
    [1, 2, 3, 4, 5].forEach((i) => {
      const duration = 25 + i * 5; // Tiempos diferentes para cada planeta
      const direction = i % 2 === 0 ? -1 : 1; // Unos giran izq, otros der
      
      // Contenedor gira
      gsap.to(`.animate-orbit-${i}`, {
        rotation: 360 * direction,
        duration: duration,
        repeat: -1,
        ease: "linear",
      });
      // Imagen contrarrota para mantenerse derecha
      gsap.to(`.animate-counter-orbit-${i}`, {
        rotation: -360 * direction,
        duration: duration,
        repeat: -1,
        ease: "linear",
      });
    });

    // Efecto 3D de profundidad para los planetas (se acercan y alejan)
    gsap.to(".orbiting-planet", {
      scale: 1.4,
      opacity: 1, // Se ilumina un poco más al "acercarse"
      duration: "random(3, 6)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5
    });

  }, { scope: container });

  const points = [
    "Tu mensaje es inconsistente.",
    "Tienes canales sin conexión.",
    "Baja percepción de valor.",
    "Falta identidad.",
  ];

  return (
    <section
      ref={container}
      id="sin-marca"
      className="relative min-h-screen bg-[#0F172A] text-white py-24 md:py-32 flex items-center overflow-hidden"
    >
      {/* Background with custom image if available */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/bloque3/FONDO.webp"
          alt="Dark Universe Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Decorative Star/Sparkle */}
      <div className="absolute top-8 right-8 md:top-0 md:right-12 z-20 w-[300px] md:w-[300px] h-[300px] md:h-[300px]">
        <Image
          src="/bloque3/ELEMENTO 1.webp"
          alt="Sparkle Decoration"
          fill
          className="object-contain"
        />
      </div>

      {/* Decorative Spheres (12, 13, 14, 17 y 20) */}
      <div className="floating-sphere absolute top-[10%] left-[10%] md:top-[-20%] md:left-[7%] z-20 w-[80px] md:w-[800px] h-[90px] md:h-[900px] opacity-100">
        <Image
          src="/bloque3/ESFERA-17.webp"
          alt="Esfera 17"
          fill
          className="object-contain"
        />
      </div>

      <div className="floating-sphere absolute bottom-[10%] right-[10%] md:bottom-[190] md:right-[76%] z-20 w-[200px] md:w-[280px] h-[200px] md:h-[400px] opacity-100">
        <Image
          src="/bloque3/ESFERA-20.webp"
          alt="Esfera 20"
          fill
          className="object-contain"
        />
      </div>

      <div className="floating-sphere absolute top-[60%] right-[5%] md:top-[48%] md:right-[45%] z-20 w-[120px] md:w-[220px] h-[120px] md:h-[90px] opacity-100">
        <Image
          src="/bloque3/ESFERA-13.webp"
          alt="Esfera 13"
          fill
          className="object-contain"
        />
      </div>

      <div className="floating-sphere absolute top-[20%] right-[20%] md:top-[56%] md:right-[54%] z-20 w-[250px] md:w-[250px] h-[250px] md:h-[250px] opacity-100">
        <Image
          src="/bloque3/ESFERA-12.webp"
          alt="Esfera 12"
          fill
          className="object-contain"
        />
      </div>

      <div className="floating-sphere absolute bottom-[30%] left-[10%] md:bottom-[34%] md:left-[42%] z-20 w-[90px] md:w-[110px] h-[90px] md:h-[110px] opacity-100">
        <Image
          src="/bloque3/ESFERA-14.webp"
          alt="Esfera 14"
          fill
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Bloque Visual Izquierdo (Desktop) */}
          <div ref={visualRef} className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[550px] aspect-square">
              <Image
                src="/bloque3/ESFERA-18.webp"
                alt="One-line art face illustration"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(230,168,0,0.2)] relative z-20"
                priority
              />

              {/* Sistema Solar - Planetas Orbitando (15, 16, 19, 21, 22) */}
              <div className="absolute inset-0 z-30 pointer-events-none">
                <div className="absolute inset-0 animate-orbit-1">
                  <div className="absolute top-[0%] left-[45%] w-[80px] h-[80px] md:w-[120px] md:h-[120px] animate-counter-orbit-1 orbiting-planet">
                    <Image src="/bloque3/ESFERA-15.webp" alt="Esfera 15" fill className="object-contain" />
                  </div>
                </div>
                <div className="absolute inset-0 animate-orbit-2">
                  <div className="absolute top-[40%] right-[-10%] w-[90px] h-[90px] md:w-[140px] md:h-[140px] animate-counter-orbit-2 orbiting-planet">
                    <Image src="/bloque3/ESFERA-16.webp" alt="Esfera 16" fill className="object-contain" />
                  </div>
                </div>
                <div className="absolute inset-0 animate-orbit-3">
                  <div className="absolute bottom-[-5%] left-[30%] w-[70px] h-[70px] md:w-[100px] md:h-[100px] animate-counter-orbit-3 orbiting-planet">
                    <Image src="/bloque3/ESFERA-19.webp" alt="Esfera 19" fill className="object-contain" />
                  </div>
                </div>
                <div className="absolute inset-0 animate-orbit-4">
                  <div className="absolute top-[20%] left-[-5%] w-[75px] h-[75px] md:w-[110px] md:h-[110px] animate-counter-orbit-4 orbiting-planet">
                    <Image src="/bloque3/ESFERA-21.webp" alt="Esfera 21" fill className="object-contain" />
                  </div>
                </div>
                <div className="absolute inset-0 animate-orbit-5">
                  <div className="absolute bottom-[10%] right-[5%] w-[85px] h-[85px] md:w-[130px] md:h-[130px] animate-counter-orbit-5 orbiting-planet">
                    <Image src="/bloque3/ESFERA-22.webp" alt="Esfera 22" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bloque de Texto Derecho */}
          <div ref={textRef} className="order-1 lg:order-2 flex flex-col space-y-8 text-center lg:text-left">
            <h2 className="animate-sm-text font-lemon-milk text-3xl md:text-4xl lg:text-6xl font-bold uppercase tracking-tighter leading-tight">
              SIN MARCA, <br />
              <span className="text-[#FFFFFF]">PIERDES TIEMPO.</span>
            </h2>

            {/* SECCIÓN ACTUALIZADA DE LOS PUNTOS */}
            <div className="animate-sm-text flex flex-col gap-2">
              <h3 className="text-2xl md:text-3xl text-white font-['Poppins'] text-left mb-4">
                ¿Por qué?
              </h3>
              <ul className="flex flex-col">
                {points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-start gap-3 text-xl md:text-2xl font-light text-[#c49d34] leading-[1.1]"
                  >
                    <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                    <span className="pb-1">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-sm-text space-y-8 mt-8">
              <p className="max-w-xl mx-auto lg:mx-0 text-left font-['Poppins'] text-white">
                <span className="block text-3xl md:text-3xl font-normal mb-1">
                  El problema rara vez es tu producto.
                </span>
                <span className="block text-3xl md:text-5xl font-poppins font-bold tracking-tight">
                  Suele ser tu marca.
                </span>
              </p>

              <div className="flex justify-center lg:justify-start">
                <button className="px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-[#b39441] text-[#c9ab5b] font-['Poppins'] font-black rounded-2xl transition-all duration-300 hover:bg-[#bda153] hover:text-[#0F172A] hover:scale-120 active:scale-95 text-3xl md:text-5xl tracking-tighter">
                  Iniciar diagnóstico
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}