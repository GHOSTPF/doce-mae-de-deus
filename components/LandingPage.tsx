"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Heart, ChevronDown } from "lucide-react";
import Navbar from "../components/NavBar";

export default function LandingPage() {
  // Variantes para animação de surgimento gradual (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="bg-white selection:bg-blue-200">
      <section className="py-32 px-6 bg-white overflow-hidden">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Badge de boas-vindas */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-red-600 rounded-full" />
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">
              Bem-vindo à Doce Mãe de Deus!
            </span>
          </motion.div>

          {/* Títulos com animação de subida */}
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Participar de uma comunidade é um dos melhores caminhos para encorajar o crescimento espiritual.
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-600 leading-relaxed">
            Através dos nossos grupos, faixas etárias e ministérios, você terá a oportunidade de se conectar e crescer em seu relacionamento com Cristo.
          </motion.p>

          <motion.div variants={itemVariants} className="pt-6">
            <h3 className="text-3xl font-black text-slate-900 mb-8 uppercase">Vem com a gente!</h3>
            <button className="flex items-center gap-3 text-slate-900 font-bold text-lg hover:gap-5 transition-all group">
              <div className="p-3 bg-slate-100 rounded-full group-hover:bg-red-600 group-hover:text-white transition-colors">
                <ArrowRight className="w-6 h-6" />
              </div>
              Conheça mais
            </button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}