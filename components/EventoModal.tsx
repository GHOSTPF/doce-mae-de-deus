"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export type Evento = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  tag: string;
  tagColor: string;
  shortDesc: string;
  fullDesc: string;
  highlight?: boolean;
  // In production: replace with Next.js Image imports
  imageBg: string; // CSS gradient or placeholder
};

type Props = {
  evento: Evento | null;
  onClose: () => void;
};

export default function EventoModal({ evento, onClose }: Props) {
  // Lock body scroll while open
  useEffect(() => {
    if (evento) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [evento]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {evento && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 bottom-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 w-full md:max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-3xl md:rounded-3xl bg-[#080F18] border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
          >
            {/* Hero image area */}
            <div
              className="relative w-full h-56 md:h-64 rounded-t-3xl overflow-hidden flex-shrink-0"
              style={{ background: evento.imageBg }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080F18]/90" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full border"
                  style={{ color: evento.tagColor, borderColor: `${evento.tagColor}40`, background: `${evento.tagColor}15` }}
                >
                  {evento.tag}
                </span>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur flex items-center justify-center border border-white/20 hover:bg-black/60 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>

              {/* Title on image */}
              <div className="absolute bottom-5 left-5 right-5">
                <h2 className="font-black text-2xl md:text-3xl text-white leading-tight tracking-tight">
                  {evento.title}
                </h2>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Meta row */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sky-400 text-sm font-medium">
                  <Calendar className="w-4 h-4" />
                  <span>{evento.date}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{evento.time}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{evento.location}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.07]" />

              {/* Full description */}
              <p className="text-slate-300 text-base leading-relaxed">
                {evento.fullDesc}
              </p>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="group w-full flex items-center justify-between bg-sky-500/10 border border-sky-500/25 rounded-2xl px-5 py-4 hover:bg-sky-500/20 transition-all duration-300"
              >
                <span className="font-bold text-white text-sm uppercase tracking-widest">Saiba mais / Inscreva-se</span>
                <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}