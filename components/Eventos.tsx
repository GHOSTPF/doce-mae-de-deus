"use client";
import { useState, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Calendar, MapPin, Search, ChevronDown } from "lucide-react";
import EventoModal, { type Evento } from "./EventoModal";

// ─── DATA ────────────────────────────────────────────────────────────────────
// Replace `imageBg` with actual Next.js <Image> imports in production.
// `imageBg` accepts any CSS background value (gradient, url(), etc.)
const EVENTOS: Evento[] = [
  {
    id: 1,
    title: "Celebração Internacional 2026",
    date: "15 Jun 2026",
    time: "10h — Aud. Estações e Colégio Inspire",
    location: "Aud. Estações",
    tag: "Celebração",
    tagColor: "#38bdf8",
    imageBg: "linear-gradient(135deg, #0c1a2e 0%, #0e3a5c 40%, #0a2d4a 100%)",
    shortDesc: "Nossa grande celebração anual reunindo irmãos de todo o Brasil e do exterior.",
    fullDesc:
      "A Celebração Internacional é um dos momentos mais esperados do ano. Reunimos irmãos de todas as nossas missões — do Brasil à França — para adorar, ouvir a Palavra e se fortalecer na fé. Haverá ministração ao vivo, testemunhos e um momento especial de oração. Venha com sua família e amigos!",
    highlight: true,
  },
  {
    id: 2,
    title: "30 Semanas Presencial",
    date: "10 Abr — 31 Out 2026",
    time: "20h — Sextas-feiras",
    location: "Aud. Principal",
    tag: "Formação",
    tagColor: "#a78bfa",
    imageBg: "linear-gradient(135deg, #1a0d2e 0%, #2d1a52 50%, #1a1038 100%)",
    shortDesc: "Programa de formação espiritual de 30 semanas presencial no Aud. Principal.",
    fullDesc:
      "O programa 30 Semanas é nossa principal jornada de formação espiritual. Ao longo de 30 encontros presenciais às sextas-feiras, mergulhamos na Palavra de Deus, no autoconhecimento e na vida em comunidade. Uma experiência que transforma. Vagas limitadas — inscreva-se com antecedência.",
  },
  {
    id: 3,
    title: "Juventude Eleve — Noite de Adoração",
    date: "20 Jun 2026",
    time: "19h — Campus Colina",
    location: "Campus Colina",
    tag: "Juventude",
    tagColor: "#34d399",
    imageBg: "linear-gradient(135deg, #052e16 0%, #064e3b 50%, #065f46 100%)",
    shortDesc: "Uma noite especial de adoração e comunhão para a juventude da comunidade.",
    fullDesc:
      "A Noite de Adoração da Juventude Eleve é um encontro aberto para jovens de todas as idades. Uma noite de louvor ao vivo, Palavra ungida e comunhão profunda. Se você tem entre 15 e 35 anos, esse encontro é pra você. Leve seus amigos e venha se conectar!",
  },
  {
    id: 4,
    title: "Campanha da Vitória — Manhã de Sábado",
    date: "Toda Semana — Sábados",
    time: "07h — Aud. Comunidade",
    location: "Aud. Comunidade",
    tag: "Oração",
    tagColor: "#fbbf24",
    imageBg: "linear-gradient(135deg, #431407 0%, #7c2d12 50%, #9a3412 100%)",
    shortDesc: "Encontro semanal de oração e guerra espiritual toda manhã de sábado.",
    fullDesc:
      "A Campanha da Vitória é um encontro semanal de intercessão e guerra espiritual. Começamos cedo para buscar a face de Deus antes que o dia comece. Venha orar por sua família, pela comunidade e pelo Brasil. É um encontro poderoso que tem gerado frutos extraordinários.",
  },
  {
    id: 5,
    title: "Missão França — Encontro Online",
    date: "05 Jul 2026",
    time: "15h (horário de Brasília)",
    location: "Zoom / Online",
    tag: "Missão",
    tagColor: "#f472b6",
    imageBg: "linear-gradient(135deg, #2d0a1e 0%, #4c1d36 50%, #3b1028 100%)",
    shortDesc: "Encontro especial ao vivo com nossa missão na França. Testemunhos e oração.",
    fullDesc:
      "Conecte-se ao vivo com nossa comunidade na França! Neste encontro online compartilharemos testemunhos do que Deus está fazendo na Europa, momentos de oração e bate-papo com os missionários. Um momento de fortalecer os laços entre nossa família espalhada pelo mundo.",
  },
  {
    id: 6,
    title: "Cidade Empreende — Encontro Mensal",
    date: "07 Jul 2026",
    time: "20h — Aud. Nações",
    location: "Aud. Nações",
    tag: "Ministério",
    tagColor: "#38bdf8",
    imageBg: "linear-gradient(135deg, #0c1a2e 0%, #1e3a5f 50%, #0f2440 100%)",
    shortDesc: "Encontro do ministério de empreendedorismo cristão para negócios com propósito.",
    fullDesc:
      "O Cidade Empreende existe para despertar vocações empresariais dentro do Reino de Deus. Neste encontro mensal teremos palestras, mentorias e network entre empreendedores cristãos. Se você tem um negócio ou um sonho empreendedor, venha descobrir como o Evangelho transforma o mercado.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

function EventCard({ evento, index, onClick }: { evento: Evento; index: number; onClick: () => void }) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      onClick={onClick}
      className={`relative rounded-2xl overflow-hidden cursor-pointer border transition-colors duration-300 group ${
        evento.highlight
          ? "border-sky-500/30 hover:border-sky-400/50"
          : "border-white/[0.07] hover:border-white/[0.15]"
      }`}
      style={{ background: "#0a1220" }}
    >
      {/* Image area */}
      <div
        className="relative w-full h-48 overflow-hidden"
        style={{ background: evento.imageBg }}
      >
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400" />

        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span
            className="text-[10px] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded-full border backdrop-blur-sm"
            style={{ color: evento.tagColor, borderColor: `${evento.tagColor}40`, background: `${evento.tagColor}18` }}
          >
            {evento.tag}
          </span>
        </div>

        {/* Highlight badge */}
        {evento.highlight && (
          <div className="absolute top-3 right-3">
            <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-sky-500 text-white">
              Destaque
            </span>
          </div>
        )}

        {/* Read more hint on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 flex items-center gap-2">
            <span className="text-white text-xs font-semibold">Ver detalhes</span>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a1220] to-transparent" />
      </div>

      {/* Content */}
      <div className="px-5 pb-5 pt-3">
        {/* Date */}
        <div className="flex items-center gap-1.5 text-sky-400/70 text-xs font-medium mb-2">
          <Calendar className="w-3 h-3" />
          <span>{evento.date}</span>
        </div>

        {/* Title */}
        <h3 className="font-black text-white text-base leading-tight tracking-tight mb-2 group-hover:text-sky-100 transition-colors duration-200">
          {evento.title}
        </h3>

        {/* Short desc */}
        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {evento.shortDesc}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
          <div className="flex items-center gap-1 text-slate-600 text-xs">
            <MapPin className="w-3 h-3" />
            <span className="truncate max-w-[140px]">{evento.location}</span>
          </div>
          <span className="text-sky-400 text-xs font-semibold group-hover:text-sky-300 transition-colors">
            leia mais →
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Eventos() {
  const [selected, setSelected] = useState<Evento | null>(null);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string>("Todos");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const TAGS = ["Todos", ...Array.from(new Set(EVENTOS.map(e => e.tag)))];

  const filtered = EVENTOS.filter(e => {
    const matchSearch =
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.shortDesc.toLowerCase().includes(search.toLowerCase());
    const matchTag = activeTag === "Todos" || e.tag === activeTag;
    return matchSearch && matchTag;
  });

  return (
    <>
      <EventoModal evento={selected} onClose={() => setSelected(null)} />

      <section className="relative bg-[#04090F] overflow-hidden">
        {/* Background radial glow */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-[0.05]"
          style={{ background: "radial-gradient(circle at top right, #38bdf8, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/3 left-0 w-[400px] h-[400px] pointer-events-none opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)" }}
        />

        <div className="max-w-6xl mx-auto px-6 py-28" ref={ref}>

          {/* ── Section header ── */}
          <motion.div
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14"
          >
            <div>
              <p className="text-sky-400 font-bold uppercase tracking-[0.25em] text-xs mb-4">
                Agenda de Eventos
              </p>
              <h2 className="font-black text-5xl md:text-6xl text-white leading-[0.95] tracking-tight">
                Nossa<br />
                <span className="text-sky-400">Programação</span>
              </h2>
            </div>
            <p className="text-slate-500 text-base leading-relaxed max-w-xs md:text-right">
              Fique por dentro de tudo que acontece aqui no Campus Colina e em nossas missões.
            </p>
          </motion.div>

          {/* ── Search + Filters ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
          >
            {/* Search input */}
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
              <input
                type="text"
                placeholder="Buscar evento..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white/[0.05] border border-white/10 rounded-full text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-sky-500/40 focus:bg-white/[0.07] transition-all duration-200"
              />
            </div>

            {/* Tag filters */}
            <div className="flex flex-wrap gap-2">
              {TAGS.map(tag => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-200 ${
                    activeTag === tag
                      ? "bg-sky-500 border-sky-500 text-white"
                      : "bg-transparent border-white/10 text-slate-500 hover:border-white/25 hover:text-slate-300"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>

          {/* ── Grid ── */}
          {filtered.length > 0 ? (
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((evento, i) => (
                <EventCard
                  key={evento.id}
                  evento={evento}
                  index={i}
                  onClick={() => setSelected(evento)}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-24 gap-3"
            >
              <p className="text-slate-600 text-lg font-semibold">Nenhum evento encontrado</p>
              <button
                onClick={() => { setSearch(""); setActiveTag("Todos"); }}
                className="text-sky-400 text-sm hover:text-sky-300 transition-colors underline underline-offset-4"
              >
                Limpar filtros
              </button>
            </motion.div>
          )}

          {/* ── Load more hint ── */}
          {filtered.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex justify-center mt-12"
            >
              <button className="flex items-center gap-2 text-slate-600 hover:text-sky-400 text-sm font-semibold transition-colors">
                <ChevronDown className="w-4 h-4" />
                Ver mais eventos
              </button>
            </motion.div>
          )}
        </div>

        {/* Wave to white */}
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-14 pointer-events-none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </section>
    </>
  );
}