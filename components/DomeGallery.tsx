"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSpring, a, to } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Project } from "@/lib/data";

interface DomeGalleryProps {
  items: Project[];
}

export function DomeGallery({ items }: DomeGalleryProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ moved: false });
  
  // Un radio grande para que ocupe todo el ancho y se sienta inmersivo
  const [radius, setRadius] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      // Mantiene el cilindro amplio, ocupando gran parte de la pantalla
      setRadius(Math.max(1000, window.innerWidth * 0.9));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Distribuir las imágenes en un cilindro 3D gigante sin límites
  const gridItems = useMemo(() => {
    const rows = 3; // 3 filas para darle amplitud vertical
    const cols = Math.max(1, Math.ceil(items.length / rows));
    
    // Si hay muy pocos elementos, no cubrimos los 360 grados enteros para que no queden muy separados
    const anglePerCol = items.length <= rows ? 0 : (items.length <= rows * 2 ? 60 : 360 / cols);
    
    return items.map((project, index) => {
      const col = Math.floor(index / rows);
      const row = index % rows;
      
      const rotateY = col * anglePerCol;
      // Stagger sutil para que no parezca una cuadrícula aburrida
      const stagger = (col % 2 === 0) ? 0 : 80;
      // Separación vertical amplia
      const yOffset = (row - (rows - 1) / 2) * 380 + stagger; 

      return {
        project,
        rotateY,
        yOffset,
      };
    });
  }, [items]);

  const [{ rotateX, rotateY }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    config: { mass: 1.5, tension: 200, friction: 50 } // Movimiento fluido
  }));

  // Resetear la cámara si cambian los elementos (ej. cuando se busca)
  useEffect(() => {
    api.start({ rotateX: 0, rotateY: 0 });
  }, [items, api]);

  const bind = useDrag(({ offset: [ox, oy], movement: [mx, my], first }) => {
    if (first) dragState.current.moved = false;
    if (Math.abs(mx) > 5 || Math.abs(my) > 5) dragState.current.moved = true;

    // ox controla la rotación horizontal (sin límites)
    // oy controla la inclinación vertical (limitada sutilmente para no voltear la cámara)
    const sensitivityX = 0.15;
    const sensitivityY = 0.25;

    api.start({
      rotateY: ox * sensitivityY,
      rotateX: Math.max(-12, Math.min(12, -oy * sensitivityX)), // Límite sutil arriba/abajo
    });
  }, {
    target: containerRef,
    from: () => [rotateY.get() / 0.25, -rotateX.get() / 0.15],
    eventOptions: { passive: false }
  });

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#060010] select-none touch-none"
      style={{ perspective: "1200px" }}
    >
      {/* Fondo con brillo ambiental */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[100vw] h-[100vh] bg-indigo-900/10 rounded-full blur-[200px]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <a.div 
          className="relative w-0 h-0 pointer-events-auto" 
          style={{ 
            transformStyle: "preserve-3d",
            transform: to(
              [rotateX, rotateY],
              (rx, ry) => `translateZ(${-radius}px) rotateX(${rx}deg) rotateY(${ry}deg)`
            )
          }}
        >
          {gridItems.map((it) => (
            <div
              key={it.project.id}
              onClick={(e) => {
                if (dragState.current.moved) {
                  e.preventDefault();
                  return;
                }
                router.push(`/blog/${it.project.id}`);
              }}
              className="absolute top-1/2 left-1/2 cursor-pointer group"
              style={{
                width: "360px", // Tarjetas grandes
                height: "480px",
                marginLeft: "-180px",
                marginTop: "-240px",
                transform: `rotateY(${it.rotateY}deg) translateY(${it.yOffset}px) translateZ(${radius}px)`,
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              {/* Contenedor de la Imagen */}
              <div className="absolute inset-4 rounded-3xl overflow-hidden bg-black/50 border border-white/5 group-hover:border-white/30 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] transition-all duration-500 ease-out">
                <Image
                  src={it.project.image}
                  alt={it.project.title}
                  fill
                  sizes="360px"
                  className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-105 pointer-events-none"
                />
                
                {/* Capa de Texto */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-white font-bold text-2xl tracking-tight mb-2">{it.project.title}</h3>
                  <p className="text-white/70 text-sm line-clamp-2 leading-relaxed">{it.project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </a.div>
      </div>
      
      {/* Difuminado superior e inferior para fusionarse con el fondo */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#060010] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#060010] to-transparent z-10 pointer-events-none" />

      {/* Indicador de ayuda */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-[11px] pointer-events-none tracking-[0.3em] uppercase flex flex-col items-center gap-3 z-20">
        <span>Arrastra para girar infinitamente</span>
      </div>
    </div>
  );
}
