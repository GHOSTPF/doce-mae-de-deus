"use client";
import { useState, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Heart, Send, ChevronDown } from "lucide-react";

const INTERCESSORES = [
  "Irmã Ana Paula",
  "Irmão Carlos",
  "Irmã Fernanda",
  "Irmão Marcos",
  "Irmã Patrícia",
  "Irmão Ricardo",
  "Irmã Simone",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function PedidosOracao() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [form, setForm] = useState({
    intercessor: "",
    nome: "",
    data: "",
    bairro: "",
    telefone: "",
    pedido: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = [
      `🙏 *Pedido de Oração — Doce Mãe de Deus*`,
      ``,
      `👤 *Nome:* ${form.nome}`,
      `📅 *Data de nascimento:* ${form.data}`,
      `📍 *Bairro:* ${form.bairro}`,
      `📞 *Telefone:* ${form.telefone}`,
      form.intercessor ? `🕊️ *Intercessor(a):* ${form.intercessor}` : null,
      ``,
      `📝 *Pedido:*`,
      form.pedido,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const encoded = encodeURIComponent(msg);
    // Replace with the actual WhatsApp number of the community
    window.open(`https://wa.me/558300000000?text=${encoded}`, "_blank");
    setSent(true);
  };

  const reset = () => {
    setForm({ intercessor: "", nome: "", data: "", bairro: "", telefone: "", pedido: "" });
    setSent(false);
  };

  return (
    <section className="relative bg-[#04090F] overflow-hidden min-h-screen">
      {/* Ambient glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none opacity-[0.06]"
        style={{ background: "radial-gradient(ellipse at center top, #38bdf8, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)" }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* ── Left: editorial copy ── */}
          <div className="lg:w-72 flex-shrink-0 lg:sticky lg:top-28">
            <motion.p
              variants={fadeUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-sky-400 font-bold uppercase tracking-[0.25em] text-xs mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 inline-block" />
              Pedidos de Oração
            </motion.p>

            <motion.h2
              variants={fadeUp} custom={1} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="font-black text-5xl md:text-6xl text-white leading-[0.9] tracking-tight mb-6">
              Vamos<br />
              orar<br />
              <span className="text-sky-400">por você.</span>
            </motion.h2>

            <motion.div
              variants={fadeUp} custom={2} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="h-px w-full bg-white/10 mb-6"
            />

            <motion.p
              variants={fadeUp} custom={3} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-slate-400 text-sm leading-relaxed mb-6">
              Compartilhe seu pedido de oração conosco. Nossos intercessores irão orar por você com carinho e fé.
            </motion.p>

            <motion.div
              variants={fadeUp} custom={4} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="flex items-start gap-3 bg-sky-500/[0.07] border border-sky-500/20 rounded-2xl p-4">
              <Heart className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5 fill-sky-400/30" />
              <p className="text-sky-200/70 text-xs leading-relaxed">
                "A oração eficaz do justo pode muito."<br />
                <span className="text-sky-400/60 font-semibold">— Tiago 5:16</span>
              </p>
            </motion.div>
          </div>

          {/* ── Right: form card ── */}
          <motion.div
            variants={fadeUp} custom={2} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="flex-1 w-full">

            <div className="relative bg-white/[0.03] border border-white/[0.08] rounded-3xl overflow-hidden">
              {/* Top accent line */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-sky-500/60 to-transparent" />

              {/* Corner bracket deco */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-sky-500/30 rounded-tl-sm pointer-events-none" />
              <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-sky-500/30 rounded-tr-sm pointer-events-none" />

              <div className="p-8 md:p-10">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 gap-5 text-center">
                    <div className="w-16 h-16 rounded-full bg-sky-500/15 border border-sky-500/30 flex items-center justify-center">
                      <Heart className="w-7 h-7 text-sky-400 fill-sky-400/30" />
                    </div>
                    <div>
                      <p className="font-black text-white text-2xl mb-2 tracking-tight">Pedido enviado!</p>
                      <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                        Nossos intercessores irão orar por você. Deus te abençoe grandemente!
                      </p>
                    </div>
                    <button
                      onClick={reset}
                      className="mt-2 text-sky-400 text-sm font-semibold hover:text-sky-300 transition-colors underline underline-offset-4">
                      Enviar outro pedido
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    {/* Intercessor select */}
                    <div className="relative">
                      <label className="block text-slate-500 text-xs font-semibold uppercase tracking-widest mb-2">
                        Selecione um(a) intercessor(a)
                      </label>
                      <div className="relative">
                        <select
                          name="intercessor"
                          value={form.intercessor}
                          onChange={handleChange}
                          className="w-full appearance-none bg-white/[0.05] border border-white/[0.09] rounded-2xl px-5 py-4 text-white text-sm font-medium focus:outline-none focus:border-sky-500/40 focus:bg-white/[0.08] transition-all duration-200 cursor-pointer"
                          style={{ colorScheme: "dark" }}>
                          <option value="" className="bg-[#0d1520]">Selecione um(a) intercessor(a)</option>
                          {INTERCESSORES.map((i) => (
                            <option key={i} value={i} className="bg-[#0d1520]">{i}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                      </div>
                    </div>

                    {/* Two-column row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-500 text-xs font-semibold uppercase tracking-widest mb-2">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          name="nome"
                          required
                          placeholder="Seu nome"
                          value={form.nome}
                          onChange={handleChange}
                          className="w-full bg-white/[0.05] border border-white/[0.09] rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 text-sm font-medium focus:outline-none focus:border-sky-500/40 focus:bg-white/[0.08] transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-500 text-xs font-semibold uppercase tracking-widest mb-2">
                          Data de Nascimento
                        </label>
                        <input
                          type="date"
                          name="data"
                          value={form.data}
                          onChange={handleChange}
                          className="w-full bg-white/[0.05] border border-white/[0.09] rounded-2xl px-5 py-4 text-white text-sm font-medium focus:outline-none focus:border-sky-500/40 focus:bg-white/[0.08] transition-all duration-200"
                          style={{ colorScheme: "dark" }}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-500 text-xs font-semibold uppercase tracking-widest mb-2">
                          Bairro que reside
                        </label>
                        <input
                          type="text"
                          name="bairro"
                          placeholder="Seu bairro"
                          value={form.bairro}
                          onChange={handleChange}
                          className="w-full bg-white/[0.05] border border-white/[0.09] rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 text-sm font-medium focus:outline-none focus:border-sky-500/40 focus:bg-white/[0.08] transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-500 text-xs font-semibold uppercase tracking-widest mb-2">
                          Telefone / WhatsApp
                        </label>
                        <input
                          type="tel"
                          name="telefone"
                          placeholder="(00) 00000-0000"
                          value={form.telefone}
                          onChange={handleChange}
                          className="w-full bg-white/[0.05] border border-white/[0.09] rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 text-sm font-medium focus:outline-none focus:border-sky-500/40 focus:bg-white/[0.08] transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Prayer request textarea */}
                    <div>
                      <label className="block text-slate-500 text-xs font-semibold uppercase tracking-widest mb-2">
                        Pedido de Oração *
                      </label>
                      <textarea
                        name="pedido"
                        required
                        rows={5}
                        placeholder="Escreva seu pedido de oração aqui..."
                        value={form.pedido}
                        onChange={handleChange}
                        className="w-full bg-white/[0.05] border border-white/[0.09] rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 text-sm font-medium focus:outline-none focus:border-sky-500/40 focus:bg-white/[0.08] transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.975 }}
                      className="group w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm uppercase tracking-widest py-4 rounded-2xl transition-all duration-300 mt-2 shadow-[0_8px_24px_rgba(37,211,102,0.2)] hover:shadow-[0_8px_32px_rgba(37,211,102,0.35)]">
                      {/* WhatsApp icon */}
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Enviar pelo WhatsApp
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Wave */}
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14 pointer-events-none">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#02060D" />
      </svg>
    </section>
  );
}