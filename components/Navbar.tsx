"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity"
        >
          Mi Sitio
        </Link>
        <div className="flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${pathname === "/" ? "text-white" : "text-white/50 hover:text-white"}`}
          >
            Inicio
          </Link>
          <Link
            href="/portafolio"
            className={`text-sm font-medium transition-colors ${pathname === "/portafolio" ? "text-white" : "text-white/50 hover:text-white"}`}
          >
            Portafolio
          </Link>
        </div>
      </div>
    </nav>
  );
}
