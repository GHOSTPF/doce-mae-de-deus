"use client";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const CARDS = [
  {
    id: 1,
    title: "Seja um Voluntário!",
    bg: "linear-gradient(135deg, #0f2027 0%, #203a43 100%)",
    accent: "#38bdf8",
    delay: 0.1,
  },
  {
    id: 2,
    title: "Rota de Crescimento",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    accent: "#7dd3fc",
    delay: 0.2,
  },
  {
    id: 3,
    title: "F.A.R.O.L.",
    bg: "linear-gradient(135deg, #0d1117 0%, #1f2937 100%)",
    accent: "#bae6fd",
    delay: 0.3,
  },
];

export default function Envolva() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-12 left-10 w-64 h-64 rounded-full bg-sky-50 opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-slate-100 opacity-80 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-0" ref={ref}>

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 text-sky-600 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Vem fazer parte da família!
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-black text-5xl md:text-6xl text-slate-950 tracking-tight leading-[1.0] mb-5">
            Como se envolver
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-slate-400 text-base max-w-sm mx-auto">
            Veja como Deus pode usar seus dons para um impacto eterno!
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: card.delay, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group border border-slate-100"
              style={{ background: card.bg, minHeight: 260 }}>
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: `radial-gradient(circle at 30% 30%, ${card.accent}15, transparent 70%)` }} />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <p className="font-bold text-white text-base leading-tight">{card.title}</p>
                <div className="flex items-center gap-1 bg-white/10 border border-white/15 rounded-full px-3 py-1 group-hover:bg-sky-500/30 group-hover:border-sky-400/30 transition-all duration-300">
                  <span className="text-white/70 text-xs font-semibold group-hover:text-white transition-colors">Faça parte</span>
                  <ArrowRight className="w-3 h-3 text-white/60 group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, transparent, ${card.accent}, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave to dark */}
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14 pointer-events-none mt-16">
        <path d="M0,20 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" fill="#04090F" />
      </svg>
    </section>
  );
}