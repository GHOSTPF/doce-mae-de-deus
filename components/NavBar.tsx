"use client";
import Image from "next/image";
import Logo from "../public/cdmd-rp.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-black/20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-white font-black text-2xl uppercase tracking-tight">
          <Image src={Logo} alt="Doce Mãe de Deus" width={32} height={32} className="inline-block mr-2" />
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-slate-300">
          <a href="#">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Cultos</a>
          <a href="#">Eventos</a>
        </nav>
      </div>
    </header>
  );
}