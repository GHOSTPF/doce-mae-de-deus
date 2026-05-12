"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Vigília", href: "https://vigilia.pablotavaresdev.com.br" },
  { name: "Eventos", href: "/eventos" },
  { name: "Pedidos de Oração", href: "/pedidos-de-oracao" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="fixed w-full top-5 z-50 flex justify-center px-4"
      >
        <div
          className={`w-full max-w-6xl flex items-center justify-between px-5 transition-all duration-500 ease-in-out ${
            scrolled
              ? "h-14 bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] border border-slate-100"
              : "h-16 bg-white/8 backdrop-blur-md rounded-2xl border border-white/15"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group flex-shrink-0"
          >
            <div className="transition-transform duration-300 group-hover:scale-[1.04]">
              <Image
                src={Logo}
                width={72}
                height={36}
                alt="Logo Doce Mãe de Deus"
              />
            </div>

            <span
              className={`font-bold text-base tracking-tight transition-colors duration-500 hidden sm:block ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              Doce Mãe de Deus
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
  const isExternal = link.href.startsWith("http");

  return isExternal ? (
    <a
      key={link.name}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-3 py-1.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-500 ${
        scrolled
          ? "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
          : "text-white/60 hover:text-white hover:bg-white/10"
      }`}
    >
      {link.name}
    </a>
  ) : (
    <Link
      key={link.name}
      href={link.href}
      className={`px-3 py-1.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-500 ${
        scrolled
          ? "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
          : "text-white/60 hover:text-white hover:bg-white/10"
      }`}
    >
      {link.name}
    </Link>
  );
})}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className={`px-5 py-2 text-sm font-bold rounded-full transition-all duration-500 active:scale-95 hidden sm:block ${
                scrolled
                  ? "bg-slate-900 text-white hover:bg-sky-600"
                  : "bg-white text-slate-900 hover:bg-sky-100"
              }`}
            >
              Login
            </Link>

            {/* Mobile button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-1.5 rounded-lg transition-colors ${
                scrolled
                  ? "text-slate-700 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[5.5rem] left-4 right-4 z-40 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-100 p-4 flex flex-col gap-1 md:hidden"
          >
            {NAV_LINKS.map((link) => {
  const isExternal = link.href.startsWith("http");

  return isExternal ? (
    <a
      key={link.name}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-3 py-1.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-500 ${
        scrolled
          ? "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
          : "text-white/60 hover:text-white hover:bg-white/10"
      }`}
    >
      {link.name}
    </a>
  ) : (
    <Link
      key={link.name}
      href={link.href}
      className={`px-3 py-1.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-500 ${
        scrolled
          ? "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
          : "text-white/60 hover:text-white hover:bg-white/10"
      }`}
    >
      {link.name}
    </Link>
  );
})}

            <div className="border-t border-slate-100 mt-2 pt-3">
              <Link
                href="/login"
                className="block px-4 py-2.5 bg-slate-900 text-white text-center font-bold rounded-xl hover:bg-sky-600 transition-colors"
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}