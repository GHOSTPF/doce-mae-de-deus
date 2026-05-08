"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Heart, MousePointerClick } from "lucide-react";
import CasaRosa from "../public/casa-rosa.png"

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image 
          src={CasaRosa} 
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-black/20 to-black/80" />
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 pt-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
          
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-white/70 text-lg md:text-2xl font-light tracking-[0.2em] uppercase mb-4 block">
                ©2026
              </span>
              <h1 className="text-[12vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073)' }}>
                FAMÍLIA<span className="text-red-500">*</span>
              </h1>
            </motion.div>
          </div>

          <div className="max-w-md text-right md:text-left flex flex-col items-end md:items-start gap-8 pb-10">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white text-xl md:text-2xl font-medium leading-tight border-l-4 border-red-500 pl-4"
            >
              Seja bem-vindo a nossa família para pertencer! Uma igreja em muitos lugares.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-4 w-full"
            >
              <button className="group flex items-center justify-between w-full md:w-64 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full hover:bg-red-500 transition-all duration-500">
                <span className="pl-6 font-bold uppercase text-sm tracking-widest">Doe aqui!</span>
                <div className="bg-red-500 group-hover:bg-white group-hover:text-red-500 p-3 rounded-full transition-colors duration-500">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
              </button>

              <button className="group flex items-center justify-between w-full md:w-64 bg-white text-black p-2 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-500">
                <span className="pl-6 font-bold uppercase text-sm tracking-widest">Conheça mais</span>
                <div className="bg-black group-hover:bg-white group-hover:text-blue-600 p-3 rounded-full text-white transition-colors duration-500">
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
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}