import React from 'react';
import { Compass, Sparkles, Clock, Layers, Award, Check } from 'lucide-react';

export const Expertise: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: 'Précision millimétrique',
      desc: 'Systèmes de nivellement laser, croisillons autonivelants pour dalles XXL et coupes d\'onglet à 45° nettes, sans baguette plastique apparente.',
    },
    {
      icon: Sparkles,
      title: 'Propreté absolue du chantier',
      desc: 'Protection méthodique de vos intérieurs (bâches feutrées, sas de confinement), aspiration à la source lors des découpes et restitution des lieux irréprochable.',
    },
    {
      icon: Clock,
      title: 'Respect rigoureux des délais',
      desc: 'Planning d\'intervention transparent fixé dès la signature du devis. Un seul interlocuteur sur votre chantier, du premier coup de maillet aux joints de finition.',
    },
    {
      icon: Layers,
      title: 'Maîtrise des matériaux nobles',
      desc: 'Grès cérame italien 120x240cm, zellige traditionnel marocain, pierre de travertin sélectionnée, résines époxy anti-taches et mortiers déformables certifiés CSTB.',
    },
  ];

  return (
    <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111215] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
            Savoir-faire &amp; Exigence
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            L'amour du détail invisible, la garantie d'une tenue éternelle.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Le carrelage n'est pas un simple revêtement : c'est la signature minérale d'un lieu de vie. Depuis 15 ans, nous mettons notre rigueur artisanale au service des particuliers exigeants, des architectes et des amoureux de la belle facture.
          </p>
        </div>

        {/* 4 Pillars Bento-style with hairline borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-2xl bg-[#16181d] border border-neutral-800/80 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1c1f26] border border-neutral-700/60 flex items-center justify-center text-[#D4AF37] group-hover:scale-105 transition-transform mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center gap-1.5 text-xs font-medium text-[#D4AF37]">
                  <Check className="w-3.5 h-3.5" />
                  <span>Conforme normes DTU 52.2</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quantitative Rigor Stats Row */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#171920] to-[#141519] border border-neutral-800/90 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
            <div className="pt-4 lg:pt-0 lg:px-6 first:pl-0">
              <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums">
                15<span className="text-[#D4AF37]"> ans</span>
              </span>
              <span className="mt-2 block text-xs sm:text-sm text-neutral-400">
                D'expérience artisanale dans le Calvados et en Normandie
              </span>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6">
              <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums">
                +380
              </span>
              <span className="mt-2 block text-xs sm:text-sm text-neutral-400">
                Chantiers livrés avec PV de réception sans réserve
              </span>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6">
              <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums">
                99.4<span className="text-[#D4AF37]">%</span>
              </span>
              <span className="mt-2 block text-xs sm:text-sm text-neutral-400">
                Taux de satisfaction client vérifié
              </span>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6">
              <span className="block font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums">
                10<span className="text-[#D4AF37]"> ans</span>
              </span>
              <span className="mt-2 block text-xs sm:text-sm text-neutral-400">
                Garantie décennale &amp; responsabilité civile AXA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
