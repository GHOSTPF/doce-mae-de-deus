"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Welcome() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Top wave already provided by Hero component */}

      <div className="max-w-4xl mx-auto px-6 py-28">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-10"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-red-600" />
            <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-xs">
              Bem-vindo à Doce Mãe de Deus!
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-[3.4rem] font-black text-slate-950 leading-[1.05] tracking-tight"
          >
            Participar de uma comunidade é um dos melhores caminhos para encorajar o{" "}
            <span className="text-sky-600">crescimento espiritual.</span>
          </motion.h2>

          {/* Divider */}
          <motion.div variants={fadeUp} className="h-px w-24 bg-slate-200" />

          {/* Body */}
          <motion.p variants={fadeUp} className="text-slate-500 text-xl leading-relaxed max-w-2xl">
            Através dos nossos grupos, faixas etárias e ministérios, você terá a oportunidade de se
            conectar e crescer em seu relacionamento com Cristo.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="pt-4">
            <p className="text-slate-900 font-black text-2xl uppercase tracking-tight mb-6">
              Vem com a gente!
            </p>
            <motion.button
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-4 text-slate-900 font-semibold text-base"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
              Conheça mais
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom transition to dark section */}
      <div className="pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0,20 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="#04090F" />
        </svg>
      </div>
    </section>
  );
}