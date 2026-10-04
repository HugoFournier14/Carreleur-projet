import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, CheckCircle, Clock, Maximize, Layers } from 'lucide-react';
import bathroomBeforeImg from '../assets/images/bathroom_before_1791089797551.jpg';
import bathroomAfterImg from '../assets/images/bathroom_after_1791089809790.jpg';

export const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <section id="avant-apres" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#101114] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
            Métamorphose &amp; Rénovation
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Glissez pour révéler la transformation.
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            Découvrez le résultat concret d'une rénovation intégrale : dépose des anciens carreaux ébréchés, réfection complète de l'étanchéité et pose millimétrée de dalles minérales rectifiées.
          </p>
        </div>

        {/* Interactive Comparison Component */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={(e) => {
              if (isDragging) handleMove(e.clientX);
            }}
            onPointerUp={handlePointerUp}
            className="relative h-[360px] sm:h-[480px] md:h-[560px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-neutral-800 shadow-2xl bg-neutral-950 touch-none"
            aria-label="Comparateur avant et après rénovation"
          >
            {/* AFTER Image (Full width background) */}
            <img
              src={bathroomAfterImg}
              alt="Salle de bain après rénovation - Carrelage haut de gamme et douche italienne"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            {/* AFTER Label */}
            <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-neutral-700/60 text-xs font-semibold text-white tracking-wide">
              APRÈS RÉNOVATION
            </div>

            {/* BEFORE Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={bathroomBeforeImg}
                alt="Salle de bain avant rénovation - Vieux carrelage des années 80"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: '100%',
                }}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* BEFORE Label */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-neutral-700/60 text-xs font-semibold text-neutral-300 tracking-wide">
                AVANT TRAVAUX
              </div>
            </div>

            {/* Slider Divider Line */}
            <div
              className="absolute top-0 bottom-0 z-30 w-0.5 bg-gradient-to-b from-[#D4AF37] via-white to-[#D4AF37] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Center Handle Button */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#181a20] border-2 border-[#D4AF37] shadow-xl shadow-black/80 flex items-center justify-center text-[#D4AF37] pointer-events-none">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick preset buttons for touch and accessibility */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-400">Position :</span>
              <button
                onClick={() => setSliderPosition(0)}
                className={`px-3 py-1 text-xs rounded-lg transition-colors border ${
                  sliderPosition === 0
                    ? 'bg-[#D4AF37] text-neutral-900 border-[#D4AF37] font-semibold'
                    : 'bg-neutral-900/60 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                100% Après
              </button>
              <button
                onClick={() => setSliderPosition(50)}
                className={`px-3 py-1 text-xs rounded-lg transition-colors border ${
                  sliderPosition === 50
                    ? 'bg-[#D4AF37] text-neutral-900 border-[#D4AF37] font-semibold'
                    : 'bg-neutral-900/60 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                50 / 50
              </button>
              <button
                onClick={() => setSliderPosition(100)}
                className={`px-3 py-1 text-xs rounded-lg transition-colors border ${
                  sliderPosition === 100
                    ? 'bg-[#D4AF37] text-neutral-900 border-[#D4AF37] font-semibold'
                    : 'bg-neutral-900/60 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                100% Avant
              </button>
            </div>

            <p className="text-xs text-neutral-500 italic">
              Glissez la souris ou votre doigt sur l'image pour comparer
            </p>
          </div>

          {/* Case study technical card */}
          <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-[#14161b] border border-neutral-800/80">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                  Fiche Chantier Référence · Caen (Saint-Julien)
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Rénovation complète d'une salle d'eau 1982 en suite parentale minérale
                </h3>
              </div>
              <div className="flex items-center gap-6 text-xs text-neutral-300 shrink-0">
                <div className="flex items-center gap-1.5">
                  <Maximize className="w-4 h-4 text-[#D4AF37]" />
                  <span>Surface : <strong>14 m²</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span>Délai : <strong>8 jours</strong></span>
                </div>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed">
              Dépose complète des anciens carreaux 15x15 fissurés, purge de l'ancien ragréage, pose d'un système d'étanchéité sous carrelage (SPEC), réalisation d'une douche de plain-pied avec receveur encastré et niche rétroéclairée. Pose de carreaux grès cérame 60x120cm effet calcaire doux et joints époxy ton sur ton inaltérables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
