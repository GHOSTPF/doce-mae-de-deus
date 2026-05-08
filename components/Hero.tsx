"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import CasaRosa from "../public/casa-rosa.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <Image
          src={CasaRosa}
          alt="Background"
          className="w-full h-full object-cover opacity-50 contrast-125"
          style={{ filter: "sepia(0.3) saturate(1.5) hue-rotate(190deg) brightness(0.8)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-slate-900/40 to-slate-950" />
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 pt-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
          
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-300/70 text-lg md:text-2xl font-light tracking-[0.2em] uppercase mb-4 block">
                ©2026
              </span>
              <h1 className="text-[12vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-cover bg-center"
                  style={{ 
                    backgroundImage: 'url(https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073)',
                    filter: 'hue-rotate(200deg) brightness(1.2)' 
                  }}>
                FAMÍLIA<span className="text-sky-400">*</span>
              </h1>
            </motion.div>
          </div>

          <div className="max-w-md text-right md:text-left flex flex-col items-end md:items-start gap-8 pb-10">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-blue-50 text-xl md:text-2xl font-medium leading-tight border-l-4 border-sky-500 pl-4"
            >
              Seja bem-vindo a nossa família para pertencer! Uma igreja em muitos lugares.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-4 w-full"
            >
              <button className="group flex items-center justify-between w-full md:w-64 bg-blue-900/30 backdrop-blur-md border border-blue-400/30 p-2 rounded-full hover:bg-sky-600 transition-all duration-500">
                <span className="pl-6 font-bold uppercase text-sm tracking-widest text-white">Doe aqui!</span>
                <div className="bg-sky-500 group-hover:bg-white group-hover:text-sky-600 p-3 rounded-full transition-colors duration-500">
                  <Heart className="w-5 h-5 fill-current text-white group-hover:text-sky-600" />
                </div>
              </button>

              <button className="group flex items-center justify-between w-full md:w-64 bg-white text-slate-900 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-500">
                <span className="pl-6 font-bold uppercase text-sm tracking-widest">Conheça mais</span>
                <div className="bg-slate-900 group-hover:bg-white group-hover:text-blue-600 p-3 rounded-full text-white transition-colors duration-500">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-sky-400/30 rounded-full flex justify-center pt-2 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          <div className="w-1 h-2 bg-sky-400 rounded-full shadow-[0_0_8px_#38bdf8]" />
        </div>
      </motion.div>
    </section>
  );
}