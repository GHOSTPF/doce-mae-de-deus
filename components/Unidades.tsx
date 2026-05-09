"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { useRef } from "react";

const LOCATIONS = [
  {
    name: "Casa Mãe",
    address: "Av. Valdemar Galdino Nazareno, 3150 - João Paulo II",
    phone: "83 3023-5482",
    highlight: true,
  },
  {
    name: "Missão Bessa",
    address: "Av. Valdemar Galdino Nazareno, 3150 - João Paulo II",
    phone: "83 3023-5482",
  },
  {
    name: "Missão Guarabira",
    address: "Av. Valdemar Galdino Nazareno, 3150 - João Paulo II",
    phone: "83 3023-5482",
  },
  {
    name: "Missão França",
    address: "Endereço Internacional",
    phone: "83 3023-5482",
  },
  {
    name: "Missão Duas Estradas",
    address: "Av. Valdemar Galdino Nazareno, 3150 - João Paulo II",
    phone: "83 3023-5449",
  },
  {
    name: "Motiva Maceió",
    address: "Av. Valdemar Galdino Nazareno, 3150 - João Paulo II",
    phone: "83 3023-5482",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Unidades() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative bg-[#080F18] overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-[0.05] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, #38bdf8, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-28" ref={ref}>
        {/* Title */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <p className="text-sky-400/70 italic text-lg font-light mb-2">Uma igreja em</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            muitos lugares
          </h2>
          <div className="mt-6 mx-auto w-12 h-0.5 bg-sky-500/50 rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LOCATIONS.map((loc, i) => (
            <motion.div
              key={loc.name}
              variants={fadeUp}
              custom={i + 1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className={`relative rounded-2xl p-6 border transition-colors duration-300 ${
                loc.highlight
                  ? "bg-sky-500/10 border-sky-500/30 hover:bg-sky-500/15"
                  : "bg-white/[0.03] border-white/[0.07] hover:bg-white/[0.06]"
              }`}
            >
              {loc.highlight && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-sky-400 bg-sky-500/15 px-2 py-0.5 rounded-full">
                  Principal
                </span>
              )}

              <div className="flex items-start gap-3 mb-4">
                <MapPin className={`w-4 h-4 mt-0.5 flex-shrink-0 ${loc.highlight ? "text-sky-400" : "text-sky-500/60"}`} />
                <h3 className={`font-bold text-base leading-tight ${loc.highlight ? "text-white" : "text-slate-200"}`}>
                  {loc.name}
                </h3>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-4 pl-7">{loc.address}</p>

              <div className="flex items-center gap-2 pl-7">
                <Phone className="w-3.5 h-3.5 text-sky-500/60" />
                <span className="text-sky-400/80 text-sm font-medium">{loc.phone}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer transition */}
      <div className="pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,0 C720,60 720,0 1440,30 L1440,60 L0,60 Z" fill="#02060D" />
        </svg>
      </div>
    </section>
  );
}