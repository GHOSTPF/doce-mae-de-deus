"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, History, Heart, Users } from "lucide-react";

const missions = [
  { name: "Casa Mãe", city: "João Pessoa/PB", address: "Av. Valdemar Galdino Naziazeno, 3150 - João Paulo II" },
  { name: "Missão Bessa", city: "João Pessoa/PB", address: "Av. Valdemar Galdino Naziazeno, 3150 - João Paulo II" },
  { name: "Missão Guarabira", city: "Guarabira/PB", address: "Av. Valdemar Galdino Naziazeno, 3150 - João Paulo II" },
  { name: "Missão França", city: "França", address: "Endereço Internacional" },
  { name: "Missão Duas Estradas", city: "Duas Estradas/PB", address: "Av. Valdemar Galdino Naziazeno, 3150 - João Paulo II" },
  { name: "Motiva Maceió", city: "Maceió/AL", address: "Av. Valdemar Galdino Naziazeno, 3150 - João Paulo II" },
];

export default function Sobre() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-blue-50 selection:bg-sky-500/30">
      
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-sky-600/10 blur-[120px] rounded-full" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.span 
            {...fadeIn}
            className="text-sky-400 font-semibold tracking-widest uppercase text-sm block mb-4"
          >
            Nossa História
          </motion.span>
          <motion.h1 
            {...fadeIn}
            className="text-4xl md:text-6xl font-bold leading-tight mb-8"
          >
            Sobre a Comunidade <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">
              Doce Mãe de Deus
            </span>
          </motion.h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 space-y-6 text-lg text-blue-100/80 leading-relaxed text-justify"
          >
            <p>
              Fundada em <strong>1989</strong>, a Comunidade Doce Mãe de Deus (CDMD) é uma associação pública de fiéis com sede em João Pessoa-PB. Somos um movimento de espiritualidade que busca a radicalidade evangélica, inspirada na vida dos primeiros cristãos e na simplicidade franciscana.
            </p>
            
            <div className="bg-blue-900/20 border-l-4 border-sky-500 p-6 my-8 rounded-r-xl italic shadow-xl">
              "A Cruz é para nós como o sol!"
            </div>

            <p>
              Tudo começou com <strong>Inaldo Alexandre da Silva</strong>. Em 1982, ele viveu uma profunda experiência com o amor de Deus na Renovação Carismática. Movido pelo ideal de vida comum (At 2, 42-47), ele sentiu o chamado para um novo estilo de vida.
            </p>
            <p>
              Em 29 de agosto de 1989, Inaldo, sua esposa Iara, Marliane de Andrade e Roselir Gonzaga deram o primeiro passo dessa missão que hoje alcança muitos lugares.
            </p>
          </motion.div>

          <div className="md:col-span-4 space-y-4">
            {[
              { icon: <History className="w-5 h-5"/>, label: "Fundada em", val: "1989" },
              { icon: <Users className="w-5 h-5"/>, label: "Fundador", val: "Inaldo Alexandre" },
              { icon: <Heart className="w-5 h-5"/>, label: "Inspiração", val: "São Francisco" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm"
              >
                <div className="text-sky-400 mb-2">{item.icon}</div>
                <div className="text-xs uppercase tracking-tighter text-blue-300/50">{item.label}</div>
                <div className="font-semibold">{item.val}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/5 py-24 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 italic text-sky-200">Uma igreja em muitos lugares</h2>
            <div className="h-1 w-20 bg-sky-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-slate-900 border border-white/10 hover:border-sky-500/50 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-sky-500/10 p-2 rounded-lg text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <MapPin size={20} />
                  </div>
                  <h3 className="font-bold text-lg">{mission.name}</h3>
                </div>
                <p className="text-sm text-blue-100/60 mb-4">{mission.address}</p>
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400/80">
                  <Phone size={14} /> 83 3023-5482
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-blue-300/30 text-sm">
        <p>&copy; 2026 Comunidade Doce Mãe de Deus. Radicalidade e Fraternidade.</p>
      </footer>
    </div>
  );
}