import { Phone, Instagram, Mail, MapPin, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full bg-[#060010] text-white overflow-hidden font-sans border-t border-white/5 pt-24 pb-12">
      {/* Galaxy Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(113,201,206,0.08),transparent_60%)] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(230,168,0,0.05),transparent_60%)] pointer-events-none mix-blend-screen" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Título limpio */}
        <div className="text-center mb-20 flex flex-col items-center">
          <Sparkles className="w-8 h-8 text-[#71C9CE] mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter font-lemon-milk uppercase drop-shadow-lg">
            ¿Iniciamos tu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#71C9CE] to-[#E6A800]">
              nuevo universo?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 font-light max-w-lg mt-4 font-['Poppins']">
            El espacio donde tu marca toma el control de las decisiones.
          </p>
        </div>

        {/* Contacto estilo "Orbital" / Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mb-24">
          
          <a href="tel:+573176486274" className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#71C9CE]/30 transition-all duration-500 overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#71C9CE]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 rounded-full bg-[#060010] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#71C9CE] transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(113,201,206,0.4)] relative z-10">
              <Phone className="w-6 h-6 text-[#E6A800] group-hover:text-[#71C9CE] transition-colors" />
            </div>
            <h3 className="text-sm font-bold text-white/50 mb-2 uppercase tracking-[0.2em] relative z-10">Llamada</h3>
            <p className="text-xl font-medium text-white group-hover:text-[#71C9CE] transition-colors relative z-10">317 648 6274</p>
          </a>

          <a href="mailto:jairogalvanvillalba@gmail.com" className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#71C9CE]/30 transition-all duration-500 overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#71C9CE]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 rounded-full bg-[#060010] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#71C9CE] transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(113,201,206,0.4)] relative z-10">
              <Mail className="w-6 h-6 text-[#E6A800] group-hover:text-[#71C9CE] transition-colors" />
            </div>
            <h3 className="text-sm font-bold text-white/50 mb-2 uppercase tracking-[0.2em] relative z-10">Correo</h3>
            <p className="text-base md:text-sm lg:text-base font-medium text-white group-hover:text-[#71C9CE] transition-colors relative z-10 break-all">jairogalvanvillalba<br/>@gmail.com</p>
          </a>

          <a href="https://instagram.com/galvan_co" target="_blank" rel="noopener noreferrer" className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#71C9CE]/30 transition-all duration-500 overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#71C9CE]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 rounded-full bg-[#060010] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#71C9CE] transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(113,201,206,0.4)] relative z-10">
              <Instagram className="w-6 h-6 text-[#E6A800] group-hover:text-[#71C9CE] transition-colors" />
            </div>
            <h3 className="text-sm font-bold text-white/50 mb-2 uppercase tracking-[0.2em] relative z-10">Instagram</h3>
            <p className="text-xl font-medium text-white group-hover:text-[#71C9CE] transition-colors relative z-10">@galvan_co</p>
          </a>

          <a href="https://maps.google.com/?q=Carrera+3w+55-25+Bucaramanga" target="_blank" rel="noopener noreferrer" className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-[#71C9CE]/30 transition-all duration-500 overflow-hidden flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#71C9CE]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-14 h-14 rounded-full bg-[#060010] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#71C9CE] transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(113,201,206,0.4)] relative z-10">
              <MapPin className="w-6 h-6 text-[#E6A800] group-hover:text-[#71C9CE] transition-colors" />
            </div>
            <h3 className="text-sm font-bold text-white/50 mb-2 uppercase tracking-[0.2em] relative z-10">Estudio</h3>
            <p className="text-base font-medium text-white group-hover:text-[#71C9CE] transition-colors relative z-10">Carrera 3w 55-25<br/>Bucaramanga</p>
          </a>

        </div>

        {/* Separador */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl text-xs md:text-sm text-white/40 font-medium tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Galván. <span className="hidden md:inline">Todos los derechos reservados.</span></p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">Privacidad</a>
            <a href="#" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}