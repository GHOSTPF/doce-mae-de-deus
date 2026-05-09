"use client";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useRef } from "react";

export default function Youtube() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative bg-[#04090F] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 30% 50%, #38bdf8, transparent 60%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 py-28" ref={ref}>
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Video thumbnail */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full md:w-[480px] flex-shrink-0 group cursor-pointer"
          >
            {/* Aspect ratio box */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10"
              style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #0d1b2a 100%)" }}>
              {/* Fake video thumbnail bg */}
              <div className="absolute inset-0 opacity-60"
                style={{ background: "linear-gradient(160deg, #3b0a0a 0%, #0d1117 60%)" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Play button */}
                <motion.div
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 rounded-full bg-sky-500/90 backdrop-blur flex items-center justify-center shadow-[0_0_40px_rgba(56,189,248,0.35)] group-hover:bg-sky-400 transition-colors duration-300">
                  <Play className="w-7 h-7 text-white fill-white translate-x-0.5" />
                </motion.div>
              </div>
              {/* Fake stage image overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-2/3"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }} />
              <div className="absolute bottom-4 left-4">
                <span className="text-white/50 text-xs font-medium uppercase tracking-widest">Ao vivo · Youtube</span>
              </div>
            </div>
            {/* Glow under */}
            <div className="absolute -bottom-4 left-8 right-8 h-10 rounded-full blur-xl bg-sky-500/10 pointer-events-none" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <p className="text-sky-400 font-bold uppercase tracking-[0.25em] text-xs mb-5">Youtube</p>

            <h2 className="font-black text-3xl md:text-4xl text-white leading-tight tracking-tight mb-6">
              Escute nossa última mensagem<br className="hidden md:block" /> no Youtube!
            </h2>

            <div className="mb-5 pb-5 border-b border-white/10">
              <p className="font-black text-base md:text-lg text-sky-200 leading-snug uppercase tracking-tight">
                #03 AGIR COMO JESUS ||<br />MEUS PASSOS COMO<br />JESUS || Pr. Carlito Paes
              </p>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              Aproveite para participar ativamente, interagindo e enviando seu pedido de oração! Que Deus te abençoe grandemente nesse tempo!
            </p>

            <motion.button
              whileHover={{ scale: 1.02, x: 3 }} whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 bg-white/[0.06] border border-white/10 rounded-full px-5 py-2.5 hover:bg-sky-500/15 hover:border-sky-500/30 transition-all duration-300">
              <div className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white text-sm font-semibold">Veja nosso canal</span>
            </motion.button>
          </motion.div>

        </div>
      </div>

      {/* Wave to white */}
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14 pointer-events-none">
        <path d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" fill="#ffffff" />
      </svg>
    </section>
  );
}