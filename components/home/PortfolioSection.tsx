"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function PortfolioSection() {
  const containerRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!marqueeRef.current) return;

    // Clonamos el contenido para el efecto infinito
    const marqueeContent = marqueeRef.current.children[0] as HTMLElement;

    // Obtenemos el ancho total del contenido
    const totalWidth = marqueeContent.offsetWidth;

    // Animación infinita con GSAP
    gsap.to(marqueeRef.current, {
      x: -totalWidth, // Se mueve hacia la izquierda la longitud exacta de un bloque
      duration: 20, // Ajusta la velocidad aquí
      ease: "none",
      repeat: -1,
    });

    if (textBlockRef.current) {
      gsap.fromTo(textBlockRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: textBlockRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-[#f8f9fa] overflow-hidden pt-10">
      {/* 1. Parte Superior (Pasarela de Imágenes / Marquee) */}
      <div className="w-full overflow-hidden flex whitespace-nowrap bg-[#f8f9fa]">
        <div ref={marqueeRef} className="flex flex-nowrap w-max">
                    {/* Bloque original */}
                    <div className="flex shrink-0">
                      <div className="relative h-[200px] md:h-[450px] w-[800px] md:w-[1200px] shrink-0 mx-4">
                        <Image src="/bloque6/carrusel 1.webp" alt="Work 1" fill className="object-contain" />
                      </div>
                      <div className="relative h-[200px] md:h-[450px] w-[800px] md:w-[1200px] shrink-0 mx-4">
                        <Image src="/bloque6/carrusel 2.webp" alt="Work 2" fill className="object-contain" />
                      </div>
                      <div className="relative h-[200px] md:h-[450px] w-[800px] md:w-[1200px] shrink-0 mx-4">
                        <Image src="/bloque6/carrusel 3.webp" alt="Work 3" fill className="object-contain" />
                      </div>
                      <div className="relative h-[200px] md:h-[450px] w-[800px] md:w-[1200px] shrink-0 mx-4">
                        <Image src="/bloque6/carrusel 4.webp" alt="Work 4" fill className="object-contain" />
                      </div>
                    </div>
                    {/* Bloque duplicado para hacer el loop infinito sin saltos */}
                    <div className="flex shrink-0">
                      <div className="relative h-[200px] md:h-[450px] w-[800px] md:w-[1200px] shrink-0 mx-4">
                        <Image src="/bloque6/carrusel 1.webp" alt="Work 1" fill className="object-contain" />
                      </div>
                      <div className="relative h-[200px] md:h-[450px] w-[800px] md:w-[1200px] shrink-0 mx-4">
                        <Image src="/bloque6/carrusel 2.webp" alt="Work 2" fill className="object-contain" />
                      </div>
                      <div className="relative h-[200px] md:h-[450px] w-[800px] md:w-[1200px] shrink-0 mx-4">
                        <Image src="/bloque6/carrusel 3.webp" alt="Work 3" fill className="object-contain" />
                      </div>
                      <div className="relative h-[200px] md:h-[450px] w-[800px] md:w-[1200px] shrink-0 mx-4">
                        <Image src="/bloque6/carrusel 4.webp" alt="Work 4" fill className="object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
          
                {/* 2. Parte Inferior (Grid de Contenido) */}
                <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-end">
                    
                    {/* Columna Izquierda */}
                    <div className="flex flex-col items-start space-y-6 relative z-10">
                      {/* Badge */}
                      <div className="inline-block px-6 py-2 border-2 border-[#FBBF24] rounded-full">
                        <span className="text-[#FBBF24] font-bold text-sm md:text-base uppercase tracking-widest">
                          Portafolio
                        </span>
                      </div>
          
                      {/* Título Principal */}
                      <h2 className="font-lemon-milk leading-[1.05] tracking-tight">
                        <span className="block text-black font-black text-5xl md:text-7xl lg:text-7xl">
                          16 AÑOS.
                        </span>
                        <span className="block text-[#71C9CE] font-black text-4xl md:text-5xl lg:text-7xl mt-2">
                          +2000 MARCAS DESARROLLADAS.
                        </span>
                      </h2>
          
                      {/* Párrafo */}
                      <p className="text-gray-800 text-lg md:text-2xl font-normal max-w-lg mt-4 font-['Poppins']">
                        Experiencia en comunicación y branding con enfoque en comportamiento humano.
                      </p>
                    </div>
          
                    {/* Columna Derecha */}
                    <div className="flex justify-end w-full relative z-0">
                      {/* Caja Oscura (Contrapeso Visual) - Rompe MUCHO hacia la derecha */}
                      {/* Envolvemos en un div normal y usamos un seudoelemento absoluto para el fondo, 
                          así el texto no se deforma ni se sale de pantalla, pero el fondo sí rompe. */}
                      <div ref={textBlockRef} className="relative p-10 md:p-16 lg:py-24 lg:px-16 w-full max-w-2xl">
                        <div className="absolute inset-0 bg-[#1A1D20] w-[100vw] right-[-50vw] rounded-l-sm shadow-2xl"></div>
          
                        <div className="relative z-10 border-l-4 border-white pl-6 md:pl-10">
                          <p className="text-white text-3xl md:text-5xl lg:text-6xl flex flex-col font-lemon-milk">
                            <span className="font-medium mb-3 text-white/90">NO VENDEMOS PLANTILLAS:</span>
                            <span className="font-black text-white">DIRIGIMOS DECISIONES.</span>
                          </p>
                        </div>
                      </div>
                    </div>
        </div>
      </div>
    </section>
  );
}
