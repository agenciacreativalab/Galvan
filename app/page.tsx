import { Navbar } from "@/components/Navbar";
import { HeroParallax } from "@/components/home/HeroParallax";
import { ScrollStack } from "@/components/home/ScrollStack";

export default function Home() {
  return (
    <main className="bg-[#060010] min-h-screen text-white font-sans selection:bg-white/30">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section id="hero">
        <HeroParallax />
      </section>

      {/* 2. About Me Section */}
      <section id="about" className="min-h-screen flex items-center justify-center border-t border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_center,rgba(120,0,255,0.05),transparent_50%)] pointer-events-none" />
        <h2 className="text-4xl md:text-6xl font-bold text-white/50">2. Sobre Mí</h2>
      </section>

      {/* 3. Services / Expertise Section */}
      <section id="services" className="min-h-screen flex items-center justify-center border-t border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_center,rgba(0,255,120,0.05),transparent_50%)] pointer-events-none" />
        <h2 className="text-4xl md:text-6xl font-bold text-white/50">3. Servicios / Especialidades</h2>
      </section>
      
      {/* 4. Projects / Work Section */}
      <section id="work">
        <ScrollStack />
      </section>

      {/* 5. Experience / Skills Section */}
      <section id="experience" className="min-h-[70vh] flex items-center justify-center border-t border-white/5 relative">
        <h2 className="text-4xl md:text-6xl font-bold text-white/50">5. Experiencia / Skills</h2>
      </section>
      
      {/* 6. Contact / CTA Section */}
      <section id="contact" className="relative w-full py-40 flex flex-col items-center justify-center bg-[#060010] border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,0,255,0.1),transparent_70%)] pointer-events-none" />
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter text-center max-w-2xl px-6 relative z-10">
          Ready to see my work in action?
        </h2>
        <a 
          href="/portafolio" 
          className="relative z-10 px-10 py-5 bg-white text-black font-bold rounded-full text-lg hover:scale-105 active:scale-95 transition-transform"
        >
          Ir al Portafolio 3D
        </a>
      </section>
    </main>
  );
}
