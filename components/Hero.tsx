"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, ArrowRight, ChevronDown } from "lucide-react";
import CasaRosa from "../public/casa-rosa.png";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#04090F]">
      {/* Parallax BG */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src={CasaRosa}
          alt="Background"
          fill
          priority
          className="object-cover opacity-40"
        />
        
        
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-screen-xl mx-auto px-6 pt-24 pb-20"
      >
        <div className="flex flex-col lg:flex-row items-end justify-between gap-16 min-h-[80vh]">

          {/* Left — Big title */}
          <div className="flex-1 flex flex-col justify-end">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-sky-300/60 text-sm md:text-base font-light tracking-[0.3em] uppercase mb-6 block"
            >
              © 2026 — Doce Mãe de Deus
            </motion.span>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="font-black leading-[0.82] tracking-[-0.04em] text-white"
                style={{ fontSize: "clamp(4.5rem, 13vw, 11rem)" }}
              >
                FAMÍLIA
                <span className="text-sky-400" style={{ fontFamily: "serif" }}>*</span>
              </motion.h1>
            </div>

            {/* Thin horizontal rule */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
              className="mt-8 h-px w-full max-w-[360px] bg-gradient-to-r from-sky-500/70 to-transparent"
            />
          </div>

          {/* Right — CTA block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xs w-full flex flex-col gap-7 pb-4"
          >
            {/* Quote */}
            <p className="text-sky-50/80 text-lg leading-snug font-light border-l-[3px] border-sky-500 pl-4">
              Seja bem-vindo à nossa família para pertencer!{" "}
              <span className="text-white font-medium">Uma igreja em muitos lugares.</span>
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center justify-between w-full bg-sky-500/10 backdrop-blur-sm border border-sky-500/30 p-1.5 rounded-full hover:bg-sky-500 hover:border-sky-500 transition-all duration-500"
              >
                <span className="pl-5 font-bold uppercase text-xs tracking-[0.18em] text-white">Doe aqui</span>
                <div className="bg-sky-500 group-hover:bg-white p-3 rounded-full transition-colors duration-500 flex items-center justify-center">
                  <Heart className="w-4 h-4 fill-current text-white group-hover:text-sky-500 transition-colors duration-500" />
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center justify-between w-full bg-white p-1.5 rounded-full hover:bg-sky-600 transition-all duration-500"
              >
                <span className="pl-5 font-bold uppercase text-xs tracking-[0.18em] text-slate-900 group-hover:text-white transition-colors duration-500">
                  Conheça mais
                </span>
                <div className="bg-slate-900 group-hover:bg-white p-3 rounded-full transition-colors duration-500 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white group-hover:text-sky-600 transition-colors duration-500" />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-sky-300/40 text-xs tracking-[0.2em] uppercase">Role</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-sky-400/50" />
        </motion.div>
      </motion.div>

      {/* Bottom wave transition to white section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}