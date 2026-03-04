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
  const [sphereStyles, setSphereStyles] = useState<{ top: string, left: string, width: string, height: string }[]>([]);

  useEffect(() => {
    const styles = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map(() => ({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
      width: `${Math.random() * 40 + 20}px`,
      height: `${Math.random() * 40 + 20}px`,
    }));
    setSphereStyles(styles);
  }, []);

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

    // Animación de las esferas flotantes
    gsap.to(".floating-sphere", {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 2,
        from: "random",
      }
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

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Bloque Visual Izquierdo (Desktop) */}
          <div ref={visualRef} className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[900px] aspect-square">
              <Image
                src="/bloque3/ESFERA-18.webp"
                alt="One-line art face illustration"
                fill
                className="object-contain drop-shadow-[0_0_30px_rgba(230,168,0,0.2)]"
                priority
              />
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