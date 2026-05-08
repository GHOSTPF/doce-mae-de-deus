"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";
import { Menu } from "lucide-react";
import { cn } from "../libs/utils"; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full top-6 z-50 flex justify-center px-4">
      <div 
        className={`w-full max-w-6xl h-16 flex items-center justify-between px-6 rounded-2xl transition-all duration-500 ease-in-out border ${
          scrolled 
            ? "bg-white/80 backdrop-blur-xl border-slate-200 shadow-lg py-2" 
            : "bg-white/10 backdrop-blur-md border-white/20 shadow-2xl py-4"
        }`}
      >
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <Image 
                src={Logo} 
                width={80} 
                height={40} 
                alt="Logo" 
              />
            </div>
            <span className={`font-bold text-lg tracking-tight transition-colors duration-500 ${
              scrolled ? "text-slate-900" : "text-white"
            }`}>
              Doce Mãe de Deus
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold uppercase tracking-wider">
            {["Quem somos", "Eventos", "Fotos", "Pedidos de Oração"].map((link) => (
              <Link 
                key={link} 
                href="#" 
                className={`transition-all duration-500 hover:opacity-100 ${
                  scrolled ? "text-slate-600 hover:text-slate-900 opacity-80" : "text-white/70 hover:text-white"
                }`}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* <div className="h-6 w-[1px] bg-white/20 mx-2 hidden sm:block" />
          <Link href="#" className="hidden sm:block text-sm font-medium text-white/60 hover:text-white">
            Sign in
          </Link> */}
          <Link 
            href="#" 
            className={`px-8 py-2.5 text-sm font-bold rounded-full transition-all duration-500 active:scale-95 border ${
              scrolled 
                ? "bg-slate-900 text-white border-slate-900 hover:bg-slate-800" 
                : "bg-white text-slate-900 border-white hover:bg-opacity-90"
            }`}
          > 
            Login
          </Link>

          <button className={`md:hidden p-1 transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}