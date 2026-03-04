"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Generador de estrellas para el fondo de galaxia
const Stars = () => {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; opacity: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    // Solo generamos las estrellas en el cliente para evitar errores de hidratación
    const generatedStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite alternate`,
          }}
        />
      ))}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.2); }
        }
      `}} />
    </div>
  );
};

export function UniversePhases() {
  const container = useRef<HTMLDivElement>(null);
  const scrollWrapper = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(() => {
    const panelsContainer = scrollWrapper.current;
    if (!panelsContainer) return;

    // Configuración del scroll horizontal anclado (pinned)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=500%", // Aumentado a 5 pantallas para acomodar el texto inicial, final y todas las fases
        pin: true,
        scrub: 1, // Suavidad de 1 segundo para el "scrub"
      }
    });

    // 1. Desplazamiento horizontal de los paneles
    tl.to(panelsContainer, {
      x: () => -(panelsContainer.scrollWidth - window.innerWidth),
      ease: "none"
    }, 0);

    // 2. Animación de "dibujado" de la carretera (SVG Line)
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      // Configuramos la línea oculta inicialmente
      gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
      
      // La dibujamos sincronizada con el scroll horizontal
      tl.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none"
      }, 0);
    }

  }, { scope: container });

  return (
    // Cambiado el fondo a oscuro para la temática de galaxia
    <section ref={container} className="relative w-full h-screen bg-[#060010] overflow-hidden text-white">
      {/* Fondo Galaxia */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a0b2e] via-[#060010] to-[#060010]">
        <Stars />
        {/* Nebulosas sutiles */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#4FB1A1] rounded-full blur-[150px] opacity-20 mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#E6A800] rounded-full blur-[150px] opacity-10 mix-blend-screen pointer-events-none"></div>
      </div>

      {/* Logo centrado arriba fijo y MÁS GRANDE / VISIBLE */}
      <div className="absolute top-6 md:top-10 left-1/2 -translate-x-1/2 z-30 w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] pointer-events-none flex justify-center">
        {/* Un pequeño resplandor detrás del logo para que destaque sobre el fondo estrellado */}
        <div className="absolute inset-0 bg-black/40 blur-2xl rounded-full"></div>
        <Image
          src="/hero/LOGO_1.webp"
          alt="Logo"
          width={800}
          height={400}
          className="object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] relative z-10"
          priority
        />
      </div>

      {/* Contenedor Flex para Scroll Horizontal */}
      {/* Añadimos un poco más de ancho (500vw) para acomodar los textos de inicio y fin */}
      <div ref={scrollWrapper} className="relative z-10 flex w-[500vw] h-full items-center">
        
        {/* SVG Carretera Conectora */}
        {/* Ajustamos el viewBox al nuevo ancho 500 */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4FB1A1" />
              <stop offset="50%" stopColor="#4FB1A1" />
              <stop offset="100%" stopColor="#E6A800" />
            </linearGradient>
            {/* Glow estilo neón espacial para la línea */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          {/* El camino ahora empieza después del primer panel y termina antes del último */}
          <path 
            ref={pathRef}
            d="M 100 50 L 150 50 C 200 50, 200 65, 250 65 C 300 65, 300 50, 350 50 L 400 50" 
            fill="none" 
            stroke="url(#roadGradient)" 
            strokeWidth="0.5" 
            filter="url(#glow)"
            strokeLinecap="round"
            className="opacity-80"
          />
        </svg>

        {/* INICIO: Texto Introductorio */}
        <div className="panel relative w-screen h-full shrink-0 flex justify-center items-center">
          <div className="z-10 text-center px-4">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-lemon-milk font-bold text-white uppercase tracking-tighter leading-tight drop-shadow-2xl">
              CRITERIO PRIMERO. <br /> 
              <span className="text-white/80">DISEÑO DESPUÉS.</span>
            </h2>
          </div>
        </div>

        {/* FASE 1: DIAGNÓSTICO */}
        <div className="panel relative w-screen h-full shrink-0 flex justify-center">
          <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
            <div className="relative">
              {/* Nodo celeste tipo estrella/planeta */}
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#4FB1A1] shadow-[0_0_30px_rgba(79,177,161,1)] border-2 border-white/50 mx-auto"></div>
              {/* Texto */}
              <h2 className="absolute top-full left-1/2 -translate-x-1/2 mt-6 text-3xl md:text-5xl lg:text-7xl font-lemon-milk font-bold text-white uppercase tracking-tighter whitespace-nowrap drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                DIAGNÓSTICO
              </h2>
            </div>
          </div>
        </div>

        {/* FASE 2: DIRECCIÓN */}
        <div className="panel relative w-screen h-full shrink-0 flex justify-center">
          {/* Nodo posicionado en el 65% de altura para coincidir con la curva del SVG */}
          <div className="absolute left-1/2 top-[65%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
            <div className="relative">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#4FB1A1] shadow-[0_0_30px_rgba(79,177,161,1)] border-2 border-white/50 mx-auto"></div>
              {/* Texto posicionado arriba del nodo para balancear el diseño visualmente */}
              <h2 className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 text-3xl md:text-5xl lg:text-7xl font-lemon-milk font-bold text-white uppercase tracking-tighter whitespace-nowrap drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                DIRECCIÓN
              </h2>
            </div>
          </div>
        </div>

        {/* FASE 3: ECOSISTEMA */}
        <div className="panel relative w-screen h-full shrink-0 flex justify-center">
          <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
            <div className="relative">
              {/* Nodo dorado tipo sol/estrella principal */}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#E6A800] shadow-[0_0_40px_rgba(230,168,0,1)] border-2 border-white mx-auto"></div>
              <h2 className="absolute top-full left-1/2 -translate-x-1/2 mt-8 text-4xl md:text-6xl lg:text-8xl font-lemon-milk font-bold text-[#E6A800] uppercase tracking-tighter whitespace-nowrap drop-shadow-[0_0_15px_rgba(230,168,0,0.6)]">
                ECOSISTEMA
              </h2>
            </div>
          </div>
        </div>

        {/* FIN: Texto Final */}
        <div className="panel relative w-screen h-full shrink-0 flex justify-center items-center">
          <div className="z-10 text-center px-4">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-lemon-milk font-bold text-white/90 uppercase tracking-widest leading-relaxed drop-shadow-lg">
              (IDENTIDAD + <br className="md:hidden" /> EXPERIENCIA + <br /> PUNTOS DE CONTACTO)
            </h2>
          </div>
        </div>

      </div>

    </section>
  );
}
