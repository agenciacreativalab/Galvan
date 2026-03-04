"use client";

import { useState, useMemo, useDeferredValue } from "react";
import { DomeGallery } from "@/components/DomeGallery";
import { Navbar } from "@/components/Navbar";
import { projects } from "@/lib/data";
import { Search } from "lucide-react";

export default function PortafolioPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);

  const filteredProjects = useMemo(() => {
    if (!deferredSearchQuery) return projects;
    
    const query = deferredSearchQuery.toLowerCase();
    return projects.filter((project) =>
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query)
    );
  }, [deferredSearchQuery]);

  return (
    <main className="bg-[#060010] min-h-screen text-white overflow-hidden relative font-sans selection:bg-white/30">
      <Navbar />
      
      {/* Background Gradient / Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="relative z-10 w-full h-screen flex flex-col">
        {/* Title overlay with Search */}
        <div className="absolute top-28 left-1/2 -translate-x-1/2 z-20 pointer-events-auto text-center flex flex-col items-center w-full max-w-md px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase drop-shadow-2xl mix-blend-difference pointer-events-none mb-6">
            Nuestros Proyectos
          </h1>
          
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-white/40 group-focus-within:text-[#71C9CE] transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Buscar proyecto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-12 pr-4 py-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-[#71C9CE]/50 focus:bg-white/10 focus:ring-1 focus:ring-[#71C9CE]/50 transition-all duration-300 shadow-xl"
            />
          </div>
        </div>
        
        {/* Interactive 3D Canvas */}
        {filteredProjects.length > 0 ? (
          <DomeGallery items={filteredProjects} />
        ) : (
          <div className="flex-1 flex items-center justify-center text-white/50 text-xl font-light">
            No se encontraron proyectos para "{searchQuery}"
          </div>
        )}
      </div>
    </main>
  );
}
