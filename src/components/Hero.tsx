import React from 'react';
import { ArrowDown, MessageSquare, Shield, CheckCircle2, Ruler } from 'lucide-react';

interface HeroProps {
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWhatsApp }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#101114]">
      {/* Background Image with refined architectural contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_tiling_luxury_1791089785196.jpg"
          alt="Carrelage grand format et faïence de luxe dans une salle de bain épurée"
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Measured scrims for optimal contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-[#111215]/80 to-[#111215]/50" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Subtle locality kicker */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#E5C158] tracking-wider uppercase mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span>Artisan Carreleur de Précision · Caen, Calvados &amp; Pays d'Auge</span>
        </div>

        {/* Main Title with balanced typography */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] text-balance max-w-3xl">
          La précision du geste, la noblesse de la matière.
        </h1>

        {/* Reassuring Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl text-balance">
          Spécialiste de la pose de carrelage grand format, de la faïence d'art et de la rénovation complète de salles de bain. Un travail soigné, sans compromis sur la finition.
        </p>

        {/* Single gentle primary CTA block */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-neutral-900 bg-[#D4AF37] hover:bg-[#E5C158] rounded-xl transition-all shadow-lg shadow-[#D4AF37]/15 hover:shadow-[#D4AF37]/25 text-center active:scale-[0.98]"
          >
            Demander un devis gratuit
          </a>
          <button
            onClick={onOpenWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-neutral-200 hover:text-white bg-neutral-900/70 hover:bg-neutral-800/80 border border-neutral-700/60 rounded-xl transition-colors backdrop-blur-sm"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Échanger sur WhatsApp</span>
          </button>
        </div>

        {/* Clean unboxed metadata discipline */}
        <div className="mt-12 pt-8 border-t border-neutral-800/70 w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-left sm:text-center text-xs text-neutral-300">
          <div className="flex items-center sm:justify-center gap-2">
            <Shield className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Garantie Décennale AXA Pro</span>
          </div>
          <div className="flex items-center sm:justify-center gap-2">
            <Ruler className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Tolérance millimétrique</span>
          </div>
          <div className="flex items-center sm:justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Devis sous 24h &amp; sans frais</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 hidden md:block">
          <a
            href="#expertise"
            aria-label="Faire défiler vers notre expertise"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors animate-bounce"
          >
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
