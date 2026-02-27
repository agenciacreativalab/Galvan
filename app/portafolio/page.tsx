import { DomeGallery } from "@/components/DomeGallery";
import { Navbar } from "@/components/Navbar";
import { projects } from "@/lib/data";

export default function PortafolioPage() {
  return (
    <main className="bg-[#060010] min-h-screen text-white overflow-hidden relative font-sans selection:bg-white/30">
      <Navbar />
      
      {/* Background Gradient / Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="relative z-10 w-full h-full">
        {/* Title overlay */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center mix-blend-difference">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white uppercase drop-shadow-2xl">
            Infinite Gallery
          </h1>
          <p className="text-white/70 mt-2 text-sm max-w-sm mx-auto">
            Explore 60+ interactive projects on an infinite canvas.
          </p>
        </div>
        
        {/* Interactive 3D Canvas */}
        <DomeGallery items={projects} />
      </div>
    </main>
  );
}
