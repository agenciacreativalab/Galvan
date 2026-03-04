import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#060010] min-h-screen text-white font-sans selection:bg-white/30">
      <Navbar />
      
      {/* HEADER SECTION */}
      <div className="pt-40 pb-20 max-w-5xl mx-auto px-6 lg:px-12">
        <Link
          href="/portafolio"
          className="text-white/50 hover:text-white transition-colors flex items-center gap-2 mb-12 uppercase text-xs tracking-widest font-bold w-fit"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Volver a la Galería
        </Link>
        
        <div className="flex flex-col gap-6">
          <span className="text-[#E6A800] uppercase tracking-[0.2em] text-sm font-bold">
            {project.category}
          </span>
          <h1 className="text-5xl md:text-7xl font-lemon-milk tracking-tighter uppercase leading-[1.1] text-white">
            {project.title}
          </h1>
          <p className="text-2xl md:text-3xl text-white/70 font-light max-w-3xl leading-snug">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* MAIN IMAGE */}
      <div className="w-full max-w-[90vw] mx-auto mb-20">
        <div className="relative w-full h-[60vh] md:h-[80vh] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* TEXT SUMMARY SECTION (Minimal) */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          <div className="col-span-1">
            <h3 className="text-white/50 uppercase tracking-widest text-xs font-bold mb-2">Cliente</h3>
            <p className="font-medium text-lg">{project.title}</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-white/50 uppercase tracking-widest text-xs font-bold mb-2">Industria</h3>
            <p className="font-medium text-lg">{project.category}</p>
          </div>
          <div className="col-span-2">
            <h3 className="text-white/50 uppercase tracking-widest text-xs font-bold mb-2">El Reto</h3>
            <p className="font-light text-xl text-white/90 leading-relaxed font-['Poppins']">
              {project.content[0]} {project.content[1]}
            </p>
          </div>
        </div>
      </div>

      {/* EXTENSIVE GALLERY SECTION (Massive Grids) */}
      <div className="w-full bg-[#0F172A] py-20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(113,201,206,0.05),transparent_70%)] pointer-events-none" />
        
        <div className="max-w-[95vw] mx-auto px-4 lg:px-8 flex flex-col gap-6">
          
          {/* Fila 1: Dos imágenes grandes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.slice(0, 2).map((img, idx) => (
              <div key={idx} className="relative w-full h-[50vh] md:h-[70vh] rounded-xl overflow-hidden group">
                <Image
                  src={img}
                  alt={`Project detail ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>

          {/* Fila 2: Una imagen panorámica gigante */}
          {project.gallery[2] && (
            <div className="relative w-full h-[60vh] md:h-[90vh] rounded-xl overflow-hidden group">
              <Image
                src={project.gallery[2]}
                alt="Project massive detail"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
              />
            </div>
          )}

          {/* Fila 3: Grilla asimétrica (si hay más imágenes) */}
          {project.gallery.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.gallery.slice(3, 6).map((img, idx) => (
                <div key={idx} className={`relative w-full rounded-xl overflow-hidden group ${idx === 0 ? "md:col-span-2 h-[50vh] md:h-[60vh]" : "h-[50vh] md:h-[60vh]"}`}>
                  <Image
                    src={img}
                    alt={`Project grid detail ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                  />
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* NEXT PROJECT CTA */}
      <div className="py-32 flex flex-col items-center justify-center text-center px-6 relative">
        <p className="text-white/50 uppercase tracking-[0.3em] text-sm font-bold mb-6">Siguiente Paso</p>
        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter">¿Listo para evolucionar?</h2>
        <Link
          href="/#contact"
          className="px-10 py-5 bg-transparent border-2 border-[#E6A800] text-[#E6A800] font-['Poppins'] font-black rounded-full transition-all duration-300 hover:bg-[#71C9CE] hover:text-[#060010] hover:border-[#71C9CE] hover:scale-110 active:scale-95 text-xl tracking-tight shadow-[0_0_20px_rgba(230,168,0,0.2)] hover:shadow-[0_0_30px_rgba(113,201,206,0.5)]"
        >
          Iniciar diagnóstico
        </Link>
      </div>

      <Footer />
    </main>
  );
}
