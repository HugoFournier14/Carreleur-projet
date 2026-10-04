import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="avis" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#101216] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
              Témoignages &amp; Avis Clients
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              La satisfaction de nos clients, notre plus belle carte de visite.
            </h2>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#171920] border border-neutral-800">
            <div className="flex items-center text-[#D4AF37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="text-xs text-neutral-300">
              <strong className="text-white font-semibold">5.0 / 5</strong> basé sur 78 avis vérifiés
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-7 sm:p-8 rounded-2xl bg-[#15171d] border border-neutral-800/80 hover:border-neutral-700/80 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Rating stars & verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-[#D4AF37]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Avis client vérifié</span>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-neutral-700 absolute -top-1 -left-1 -z-0 opacity-40" />
                  <p className="relative z-10 text-sm sm:text-base text-neutral-300 leading-relaxed italic">
                    « {t.quote} »
                  </p>
                </div>
              </div>

              {/* Author & Project context */}
              <div className="pt-4 border-t border-neutral-800/70 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-semibold text-white">{t.author}</h4>
                  <p className="text-neutral-400">{t.city}</p>
                </div>
                <div className="text-right">
                  <span className="text-[#D4AF37] font-medium block">{t.projectType}</span>
                  <span className="text-neutral-400">{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
