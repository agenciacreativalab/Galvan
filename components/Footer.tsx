import { Phone, Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#060010] text-white/80 py-16 px-6 relative overflow-hidden font-sans border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(120,0,255,0.05),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight text-white font-[family-name:var(--font-lemon-milk)] text-center">
          ¿Hablemos de tu proyecto?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 w-full max-w-5xl">
          {/* Phone */}
          <a href="tel:+573176486274" className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:text-purple-400 group-hover:shadow-[0_0_20px_rgba(120,0,255,0.2)] transition-all duration-300">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 font-[family-name:var(--font-lemon-milk)] uppercase tracking-wider">Llámanos</h3>
            <p className="text-base text-white/60 group-hover:text-white/90 transition-colors">317 648 6274</p>
          </a>

          {/* Email */}
          <a href="mailto:jairogalvanvillalba@gmail.com" className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:text-purple-400 group-hover:shadow-[0_0_20px_rgba(120,0,255,0.2)] transition-all duration-300">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 font-[family-name:var(--font-lemon-milk)] uppercase tracking-wider">Escríbenos</h3>
            <p className="text-base text-white/60 group-hover:text-white/90 transition-colors break-all px-2">jairogalvanvillalba@gmail.com</p>
          </a>

          {/* Instagram */}
          <a href="https://instagram.com/galvan_co" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:text-purple-400 group-hover:shadow-[0_0_20px_rgba(120,0,255,0.2)] transition-all duration-300">
              <Instagram className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 font-[family-name:var(--font-lemon-milk)] uppercase tracking-wider">Síguenos</h3>
            <p className="text-base text-white/60 group-hover:text-white/90 transition-colors">@galvan_co</p>
          </a>

          {/* Address */}
          <a href="https://maps.google.com/?q=Carrera+3w+55-25+Bucaramanga" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:text-purple-400 group-hover:shadow-[0_0_20px_rgba(120,0,255,0.2)] transition-all duration-300">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 font-[family-name:var(--font-lemon-milk)] uppercase tracking-wider">Visítanos</h3>
            <p className="text-base text-white/60 group-hover:text-white/90 transition-colors">Carrera 3w 55-25<br/>Bucaramanga</p>
          </a>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl text-sm text-white/40 font-medium tracking-wide">
          <p>© {new Date().getFullYear()} Galván. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
