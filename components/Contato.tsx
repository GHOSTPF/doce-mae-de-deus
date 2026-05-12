"use client";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import { useRef, useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Contato() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", whatsapp: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="relative bg-[#04090F] overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, #38bdf8, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 py-28" ref={ref}>
        <div className="flex flex-col md:flex-row items-start gap-16 lg:gap-24">

          {/* Left */}
          <div className="md:w-80 flex-shrink-0">
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Entre em Contato
            </motion.div>

            <motion.h2
              variants={fadeUp} custom={1} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="font-black text-4xl md:text-5xl text-white leading-[1.0] tracking-tight mb-6">
              Fique por<br />dentro de tudo<br />aqui da CDMD!
            </motion.h2>

            <motion.p
              variants={fadeUp} custom={2} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-slate-400 text-sm leading-relaxed mb-8">
              Deixe seu contato e vamos te enviar materiais exclusivos!
            </motion.p>

            <motion.button
              variants={fadeUp} custom={3} initial="hidden" animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.02, x: 3 }} whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 bg-white/[0.06] border border-white/10 rounded-full px-5 py-2.5 hover:bg-sky-500/15 hover:border-sky-500/30 transition-all duration-300">
              <div className="w-7 h-7 rounded-full bg-sky-500 flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white text-sm font-semibold">Conecte-se</span>
            </motion.button>
          </div>

          {/* Right — form */}
          <motion.div
            variants={fadeUp} custom={1} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="flex-1 w-full">
            {/* Corner bracket decoration */}
            <div className="mb-6 flex">
              <div className="w-8 h-8 border-t-2 border-l-2 border-sky-500/40 rounded-tl-sm" />
            </div>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 gap-4">
                <div className="w-14 h-14 rounded-full bg-sky-500/15 border border-sky-500/30 flex items-center justify-center">
                  <Send className="w-6 h-6 text-sky-400" />
                </div>
                <p className="font-bold text-white text-xl">Mensagem enviada!</p>
                <p className="text-slate-400 text-sm">Em breve entraremos em contato com você.</p>
                <button onClick={() => setSent(false)}
                  className="mt-4 text-sky-400 text-sm font-semibold hover:text-sky-300 transition-colors underline underline-offset-4">
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Nome*"
                  required
                  value={form.nome}
                  onChange={e => setForm(p => ({ ...p, nome: e.target.value }))}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 text-sm font-medium focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.07] transition-all duration-200"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp*"
                  required
                  value={form.whatsapp}
                  onChange={e => setForm(p => ({ ...p, whatsapp: e.target.value }))}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 text-sm font-medium focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.07] transition-all duration-200"
                />
                <textarea
                  placeholder="Mensagem*"
                  required
                  rows={5}
                  value={form.mensagem}
                  onChange={e => setForm(p => ({ ...p, mensagem: e.target.value }))}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 text-sm font-medium focus:outline-none focus:border-sky-500/50 focus:bg-white/[0.07] transition-all duration-200 resize-none"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-slate-950 font-black text-sm uppercase tracking-widest py-4 rounded-2xl hover:bg-sky-400 hover:text-white transition-all duration-300 mt-1">
                  Envie aqui
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}