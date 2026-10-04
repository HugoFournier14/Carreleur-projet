import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/content';
import { Maximize2, Droplets, Sparkles, Sun, Hammer, ShieldCheck, ChevronRight, Check } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Maximize2': return Maximize2;
      case 'Droplet': return Droplets;
      case 'Sparkles': return Sparkles;
      case 'Sun': return Sun;
      case 'Hammer': return Hammer;
      default: return ShieldCheck;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#131519] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
              Prestations &amp; Savoir-faire
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Des réalisations pensées pour durer des générations.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-sm">
            Chaque chantier bénéficie d'une étude technique préalable du support et de mortiers adaptés aux contraintes d'hygrométrie et de dilatation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = getIcon(service.iconName);
            const isSelected = activeTab === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveTab(service.id)}
                className={`group relative p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#181a21] border-[#D4AF37]/50 shadow-xl shadow-black/40 ring-1 ring-[#D4AF37]/20'
                    : 'bg-[#15171d] border-neutral-800/80 hover:border-neutral-700 hover:bg-[#171920]'
                } border`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-2xl font-bold text-neutral-500 group-hover:text-[#D4AF37] transition-colors">
                      {service.number}.
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#1d2028] border border-neutral-700/60 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E5C158] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-neutral-800/80 flex items-center justify-between">
                  <div className="text-[11px] text-neutral-500 truncate max-w-[65%]">
                    Matériaux : <span className="text-neutral-400">{service.materials.split(',')[0]}</span>
                  </div>
                  <button
                    onClick={() => {
                      onSelectServiceForQuote(service.title);
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#D4AF37] hover:text-[#E5C158] transition-colors"
                  >
                    <span>Devis</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
