"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Calendar, User } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const STATS = [
  { icon: Calendar, label: "Fundação", value: "1989" },
  { icon: User, label: "Fundador", value: "Inaldo Alexandre" },
];

export default function Historia() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-[#04090F] overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, #38bdf8, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-28" ref={ref}>
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-sky-400 font-bold uppercase tracking-[0.25em] text-xs mb-6"
        >
          Nossa História
        </motion.p>

        {/* Title */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

  {/* TITULO */}
        <div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight"
          >
            Sobre a Comunidade
            <br className="hidden md:block" />
            Doce{" "}
            <span className="text-sky-400">Mãe de Deus</span>
          </motion.h2>
        </div>

        {/* IMAGEM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/santa.png"
            alt="Nossa Senhora"
            className="w-[200px] md:w-[200px] object-contain drop-shadow-[0_0_60px_rgba(56,189,248,0.22)]"
          />
        </motion.div>

      </div>

        <div className="grid md:grid-cols-[1fr_260px] gap-12 items-start">
          {/* Left text */}
          <div className="space-y-8">
            <motion.p
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-slate-300/80 text-lg leading-relaxed"
            >
              Fundada em{" "}
              <span className="text-white font-semibold">1989</span>, a Comunidade Doce Mãe de
              Deus (CDMD) é uma associação pública de fiéis com sede em João Pessoa-PB. Somos um
              movimento de espiritualidade que busca a radicalidade evangélica, inspirada na vida
              dos primeiros cristãos e na simplicidade franciscana.
            </motion.p>

            {/* Quote */}
            <motion.blockquote
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="border-l-[3px] border-sky-500 pl-5 py-1"
            >
              <p className="text-sky-200/90 text-lg italic font-light leading-snug">
                "A Cruz é para nós como o sol!"
              </p>
            </motion.blockquote>

            <motion.div
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-5 text-slate-400 text-base leading-relaxed"
            >
              <p>
                Tudo começou com{" "}
                <span className="text-white font-semibold">Inaldo Alexandre da Silva</span>. Em
                1982, ele viveu uma profunda experiência com o amor de Deus na Renovação
                Carismática. Movido pelo ideal de vida comum (At 2, 42-47), ele sentiu o chamado
                para um novo estilo de vida.
              </p>
              <p>
                Em 29 de agosto de 1989, Inaldo, sua esposa Iara, Marliane de Andrade e Roselir
                Gonzaga deram o primeiro passo dessa missão que hoje alcança muitos lugares.
              </p>
            </motion.div>
          </div>

          {/* Right stats */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-4 md:pt-2"
          >
            {STATS.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-4 h-4 text-sky-400" />
                  <span className="text-slate-500 text-xs uppercase tracking-widest font-semibold">
                    {label}
                  </span>
                </div>
                <p className="text-white text-xl font-bold">{value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom transition to lighter dark */}
      <div className="pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14 md:h-20">
          <path d="M0,60 C360,0 1080,80 1440,20 L1440,80 L0,80 Z" fill="#080F18" />
        </svg>
      </div>
    </section>
  );
}