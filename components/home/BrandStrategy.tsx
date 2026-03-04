"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function BrandStrategy() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animación de los bloques de texto
    gsap.fromTo(".animate-text",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animación de las cards principales (Elemento 4 y 5)
    // Animación de las cards principales (Elemento 4 y 5)
    gsap.fromTo(".animate-card-main",
      { x: 100, opacity: 0 }, // Eliminado el rotate: 10 inicial
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animación de los decorativos (scribbles)
    gsap.fromTo(".animate-deco",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1, // Forzamos opacidad total al terminar la animación
        duration: 2,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animación de decorativos pequeños (Elemento 6)
    gsap.fromTo(".animate-deco-small",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Animación continua circular / flotante para los elementos decorativos
    gsap.utils.toArray<HTMLElement>(".animate-deco").forEach((el) => {
      // Movimiento en X
      gsap.to(el, {
        x: "random(-120, 120)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      // Movimiento en Y
      gsap.to(el, {
        y: "random(-120, 120)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: "random(0, 2)",
      });
      // Rotación suave
      gsap.to(el, {
        rotation: "random(-45, 45)",
        duration: "random(5, 9)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Animación continua reducida para el elemento 6
    gsap.utils.toArray<HTMLElement>(".animate-deco-small").forEach((el) => {
      // Movimiento en X
      gsap.to(el, {
        x: "random(-20, 20)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      // Movimiento en Y
      gsap.to(el, {
        y: "random(-20, 20)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: "random(0, 2)",
      });
      // Rotación suave
      gsap.to(el, {
        rotation: "random(-10, 10)",
        duration: "random(4, 7)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

  }, { scope: container });

  return (
    <section
      ref={container}
      id="about"
      className="relative min-h-screen text-black py-40 md:py-60 flex items-center overflow-hidden"
    >
      {/* Fondo de la sección */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bloque2/FONDO 2.webp"
          alt="Background Strategy"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* ELEMENTOS DECORATIVOS (Opacidad 100% real) */}
      <div className="animate-deco absolute top-14 left-[9%] w-32 md:w-120 opacity-100 pointer-events-none">
        <Image src="/bloque2/ELEMENTO 2.webp" alt="Decoration 1" width={700} height={700} className="object-contain" />
      </div>
      <div className="animate-deco absolute bottom-10 right-[5%] w-40 md:w-120 opacity-100 pointer-events-none">
        <Image src="/bloque2/ELEMENTO 3.webp" alt="Decoration 2" width={400} height={400} className="object-contain" />
      </div>
      <div className="animate-deco absolute bottom-[8%] left-[-3%] w-28 md:w-90 opacity-100 pointer-events-none">
        <Image src="/bloque2/ELEMENTO 8.webp" alt="Decoration 8" width={400} height={400} className="object-contain" />
      </div>
      <div className="animate-deco absolute top-[15%] right-[5%] w-24 md:w-70 opacity-100 pointer-events-none">
        <Image src="/bloque2/ELEMENTO 1.webp" alt="Decoration 7" width={250} height={250} className="object-contain" />
      </div>
      <div className="animate-deco absolute top-[22%] right-[-12%] w-24 md:w-[300px] opacity-100 pointer-events-none">
        <Image src="/bloque2/ELEMENTO 7.webp" alt="Decoration 7" width={900} height={900} className="object-contain" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* ELEMENTO 6 - Superpuesto y sin transparencia */}
        <div className="animate-deco-small absolute bottom-[18%] left-[78%] w-20 md:w-120 opacity-100 pointer-events-none z-50">
          <Image src="/bloque2/ELEMENTO 6.webp" alt="Decoration 6" width={150} height={150} className="object-contain" />
        </div>
        {/* Contenedor Flex - gap-16 para equilibrio visual */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 max-w-5xl mx-auto">

          {/* Bloque de Texto Izquierdo */}
          <div ref={textRef} className="flex flex-col space-y-8 text-center lg:text-left flex-1">
            <h2 className="animate-text text-4xl md:text-5xl lg:text-6xl uppercase leading-[1.0] tracking-tighter font-lemon-milk font-bold">
              <span className="font-normal text-black font-lemon-milk">
                SI BUSCAS <br />
                UN LOGO RÁPIDO,
              </span>
              <br />
              <span className="font-bold text-black font-lemon-milk">NO ES AQUÍ.</span>
            </h2>

            <div className="animate-text space-y-6 max-w-xl mx-auto lg:mx-0">
              <p className="text-xl md:text-3xl font-medium leading-tight text-black/90">
                Trabajamos con marcas con <br className="hidden md:block" /> ambición y capacidad de inversión.
              </p>
              <p className="text-lg md:text-2xl text-black/80">
                Construimos coherencia: lo que <br className="hidden md:block" /> la gente <span className="text-black font-bold border-b-2 border-[#E6A800]/30">ve, vive y recuerda.</span>
              </p>
            </div>

            {/* Botones */}
            <div className="animate-text flex flex-row flex-wrap gap-4 pt-8 justify-center lg:justify-end w-full">
              <button className="flex-1 max-w-[280px] px-6 py-3 bg-transparent border-2 border-[#b39441] text-[#c9ab5b] font-['Poppins'] font-black rounded-2xl transition-all duration-300 hover:bg-[#bda153] hover:text-[#0F172A] hover:scale-120 active:scale-95 text-lg md:text-xl tracking-tight shadow-sm whitespace-nowrap">
                Iniciar diagnóstico
              </button>

              <button className="flex-1 max-w-[280px] px-6 py-3 bg-transparent border-2 border-[#b39441] text-[#c9ab5b] font-['Poppins'] font-black rounded-2xl transition-all duration-300 hover:bg-[#bda153] hover:text-[#0F172A] hover:scale-120 active:scale-95 text-lg md:text-xl tracking-tight shadow-sm whitespace-nowrap">
                Consultoría
              </button>
            </div>
          </div>

          {/* Bloque de Imágenes Derecho (Elemento 4 y 5) */}
          <div ref={cardsRef} className="relative flex flex-col space-y-[-30px] items-center flex-1 py-12 lg:py-20 w-full">

            {/* ELEMENTO 4 (Negro) - Recto y más a la DERECHA */}
            <div className="animate-card-main self-center lg:self-end lg:mr-[-80px] w-full max-w-sm md:max-w-md transform transition-transform duration-500 ease-out hover:scale-125 rotate-0 origin-center z-20 cursor-pointer">
              <Image
                src="/bloque2/ELEMENTO 4.webp"
                alt="No encaja"
                width={500}
                height={250}
                className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)]"
              />
            </div>

            {/* ELEMENTO 5 (Rojo) - Recto y más a la IZQUIERDA */}
            <div className="animate-card-main self-center lg:self-start lg:ml-[-100px] w-full max-w-sm md:max-w-md transform transition-transform duration-500 ease-out hover:scale-125 rotate-0 origin-center z-30 cursor-pointer hover:z-40">
              <Image
                src="/bloque2/ELEMENTO 5.webp"
                alt="Sí encaja"
                width={500}
                height={250}
                className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(128,0,32,0.25)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
