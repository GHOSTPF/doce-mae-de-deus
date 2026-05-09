"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { useRef } from "react";

const SCHEDULE = [
  { name: "Cidade Empreende", day: "Segunda-feira", time: "20h", local: "Aud. Nações", highlight: false },
  { name: "Feminina | Herança Real | Homens de Honra", day: "Segunda-feira", time: "20h", local: "Aud. Principal", highlight: false },
  { name: "Andar de Cima", day: "Terça-feira", time: "20h", local: "Aud. Nações", highlight: false },
  { name: "Campanha da Vitória", day: "Quarta-feira", time: "20h", local: "Aud. Principal", highlight: false },
  { name: "30 Semanas Online", day: "Quinta-Feira", time: "20h", local: "Igreja da Cidade Online || Youtube", highlight: false },
  { name: "30 Semanas Presencial (A partir de 10/04/26)", day: "Sexta-feira", time: "20h", local: "Aud. Principal", highlight: true },
  { name: "Campanha da Vitória", day: "Sábado", time: "07h", local: "Aud. Comunidade", highlight: false },
  { name: "Juventude Eleve", day: "Sábado", time: "19h", local: "Campus Colina", highlight: false },
  { name: "Celebração Internacional", day: "Domingo", time: "10h", local: "Aud. Estações e Colégio Inspire", highlight: false },
  { name: "Celebração Dominical", day: "Domingo", time: "8h | 10h | 17h | 19h", local: "", highlight: false },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Agenda() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative bg-[#04090F] overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, #38bdf8, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 py-28" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left */}
          <div className="lg:w-72 flex-shrink-0">
            <motion.p variants={fadeUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-sky-400 font-bold uppercase tracking-[0.25em] text-xs mb-5">
              Agenda Semanal
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="font-black text-4xl md:text-5xl text-white leading-[1.0] tracking-tight mb-6">
              Nossa<br />Programação
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="h-px w-full bg-white/10 mb-6" />
            <motion.p variants={fadeUp} custom={3} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-slate-400 text-sm leading-relaxed mb-8">
              Fique por dentro de tudo que acontece aqui no Campus Colina em São José dos Campos! Temos diversas programações, qualquer dúvida só nos chamar.
            </motion.p>
            <motion.button variants={fadeUp} custom={4} initial="hidden" animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 bg-white/[0.06] border border-white/10 rounded-full px-5 py-2.5 hover:bg-sky-500/20 hover:border-sky-500/30 transition-all duration-300">
              <div className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white text-sm font-semibold">Saiba mais sobre a gente!</span>
            </motion.button>
          </div>

          {/* Right — list */}
          <div className="flex-1 flex flex-col gap-2">
            {SCHEDULE.map((item, i) => (
              <motion.div key={i} variants={fadeUp} custom={i * 0.5 + 2} initial="hidden" animate={inView ? "visible" : "hidden"}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className={`flex items-center justify-between gap-4 px-5 py-4 rounded-2xl border transition-all duration-200 cursor-default ${
                  item.highlight
                    ? "bg-sky-500/10 border-sky-500/25"
                    : "bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06]"
                }`}>
                <div className="min-w-0">
                  <p className={`font-bold text-sm leading-tight ${item.highlight ? "text-sky-200" : "text-white"}`}>
                    {item.name}
                  </p>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0 text-right">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{item.day} &nbsp;||&nbsp; {item.time}</span>
                  </div>
                  {item.local && (
                    <div className="flex items-center gap-1 text-slate-500 text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{item.local}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Wave to white */}
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14 pointer-events-none">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
      </svg>
    </section>
  );
}