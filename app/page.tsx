import { Navbar } from "@/components/Navbar";
import { HeroParallax } from "@/components/home/HeroParallax";
import { BrandStrategy } from "@/components/home/BrandStrategy";
import { SinMarca } from "@/components/home/SinMarca";
import { Brandfulness } from "@/components/home/Brandfulness";
import { UniversePhases } from "@/components/home/UniversePhases";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { LevelsSection } from "@/components/home/LevelsSection";
import { LevelsGraphSection } from "@/components/home/LevelsGraphSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#060010] min-h-screen text-white font-sans selection:bg-white/30 overflow-x-hidden">
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

      <Footer />
    </main>
  );
}
