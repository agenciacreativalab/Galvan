import { Navbar } from "@/components/Navbar";
import { HeroParallax } from "@/components/home/HeroParallax";
import { BrandStrategy } from "@/components/home/BrandStrategy";
import { SinMarca } from "@/components/home/SinMarca";
import { Brandfulness } from "@/components/home/Brandfulness";
import { UniversePhases } from "@/components/home/UniversePhases";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { LevelsSection } from "@/components/home/LevelsSection";
import { LevelsGraphSection } from "@/components/home/LevelsGraphSection";

export default function Home() {
  return (
    <main className="bg-[#060010] min-h-screen text-white font-sans selection:bg-white/30">
      <Navbar />

      {/* 1. Hero Section */}
      <section id="hero">
        <HeroParallax />
      </section>

      {/* 2. Brand Strategy Section */}
      <BrandStrategy />

      {/* 3. Sin Marca Section */}
      <SinMarca />

      {/* 4. Brandfulness Section */}
      <Brandfulness />

      {/* 5. Universe Phases Section */}
      <UniversePhases />

      {/* 6. Projects / Work Section */}
      <section id="work">
        <PortfolioSection />
      </section>

      {/* 7. Levels Section */}
      <section id="levels">
        <LevelsSection />
      </section>

      {/* 8. Levels Graph Section */}
      <section id="levels-graph">
        <LevelsGraphSection />
      </section>

      {/* 9. Contact / CTA Section */}
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
