"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const workSection = document.getElementById("work");
      const aboutSection = document.getElementById("about"); // keep in case it exists elsewhere
      
      let isOverLight = false;
      
      const checkSection = (el: HTMLElement | null) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 60 && rect.bottom >= 60) {
            isOverLight = true;
          }
        }
      };

      checkSection(workSection);
      checkSection(aboutSection);

      setIsLightSection(isOverLight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isPortafolio = pathname === "/portafolio";

  const navLinks = [
    ...(isPortafolio ? [{ name: "Inicio", href: "/" }] : []),
    { name: "Servicio", href: "/#services" },
    { name: "Portafolio", href: "/portafolio" },
    { name: "Noticias", href: "/#news" },
    { name: "Equipo", href: "/#team" },
    { name: "Contacto", href: "/#contact" },
  ];

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className={`fixed top-12 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center justify-center gap-14 transition-colors duration-500`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-xs font-bold transition-all duration-300 relative group tracking-[0.2em] uppercase 
              ${isLightSection 
                ? "text-blue-900 drop-shadow-[0_0_2px_rgba(0,0,0,0.1)]" 
                : "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
              }`}
          >
            {link.name}
            <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1.5px] transition-all duration-300 group-hover:w-full
              ${isLightSection ? "bg-blue-900 shadow-[0_0_5px_rgba(30,58,138,0.5)]" : "bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"}`} 
            />
          </Link>
        ))}
      </nav>

      {/* MOBILE NAVBAR - Toggles icon color too */}
      <div className="md:hidden fixed top-6 right-6 z-[60]">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`p-2 backdrop-blur-lg rounded-full border transition-all duration-500
            ${isLightSection && !isOpen
              ? "text-blue-900 bg-black/5 border-blue-900/20" 
              : "text-white bg-white/10 border-white/20"
            }`}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-50 bg-[#060010]/95 backdrop-blur-2xl transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-white tracking-[0.2em] uppercase"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
