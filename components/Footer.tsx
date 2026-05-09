"use client";

export default function Footer() {
  return (
    <footer className="bg-[#02060D] border-t border-white/[0.05] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm">
          © 2026 Comunidade Doce Mãe de Deus. Radicalidade e Fraternidade.
        </p>
        <div className="flex items-center gap-6">
          {["Privacidade", "Contato", "Instagram"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-slate-600 hover:text-sky-400 text-sm transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}