"use client";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { CircularGallery, GalleryItem } from "./CircularGallery"; // Ajuste o caminho do import

const DATA_GRUPOS: GalleryItem[] = [
  {
    common: "Retiro Vocacional",
    binomial: "Vinde a Mim",
    photo: { url: "retiro.png", text: "15 à 15 de Maio", by: "Casa Mãe" }
  },
  {
    common: "Florescer na Menopausa",
    binomial: "Café para mulheres",
    photo: { url: "florescer.png", text: "Mulheres conversando", by: "Fascínios Recepções" }
  },
  {
    common: "Ser Diferente",
    binomial: "Grupo de Jovens",
    photo: { url: "serdiferente.png", text: "Jovens reunidos", by: "Grupo jovem" }
  },
  {
    common: "Grupo Estudo",
    binomial: "Profundidade na Palavra",
    photo: { url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000", text: "Bíblias abertas", by: "Igreja Local" }
  },
  {
    common: "Grupo Homens",
    binomial: "Legado e Força",
    photo: { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000", text: "Homens conversando", by: "Igreja Local" }
  },
  {
    common: "Grupo Mulheres",
    binomial: "Mulheres de Fé",
    photo: { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000", text: "Mulheres unidas", by: "Igreja Local" }
  },
];

export default function Grupos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-0" ref={ref}>
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sky-500 font-bold uppercase tracking-[0.25em] text-xs mb-4">
            Grupos da Cidade
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-black text-5xl md:text-6xl text-slate-950 tracking-tight leading-[1.0] mb-5">
            Faça parte de um<br />Grupo da Cidade!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 text-base max-w-md mx-auto leading-relaxed mb-8">
            Nossos pequenos grupos são um ambiente perfeito para você conhecer mais a igreja e estar próximo de nós!
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 bg-slate-100 border border-slate-200 rounded-full px-5 py-2.5 hover:bg-sky-50 hover:border-sky-200 transition-all duration-300 z-50 relative">
            <div className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-slate-800 text-sm font-semibold">Ache um grupo para você</span>
          </motion.button>
        </div>

        {/* Circular 3D Gallery - Substituindo a fan row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[500px] w-full mt-10 overflow-visible"
        >
          <CircularGallery 
            items={DATA_GRUPOS} 
            radius={370} // Aumentado para dar mais espaço no centro
            autoRotateSpeed={0.3} 
          />
        </motion.div>
      </div>

      {/* Wave to dark */}
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14 pointer-events-none mt-12">
        <path d="M0,10 C480,60 960,0 1440,40 L1440,60 L0,60 Z" fill="#04090F" />
      </svg>
    </section>
  );
}