import React, { useState, useEffect } from 'react';
import { PROJECTS, ProjectItem } from '../data/content';
import { X, ChevronLeft, ChevronRight, MapPin, Maximize, Clock, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'Toutes les réalisations' },
    { id: 'salles-de-bain', label: 'Salles de bain' },
    { id: 'sols-grands-formats', label: 'Sols & Séjours' },
    { id: 'cuisines-zelliges', label: 'Cuisines & Zelliges' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeProjectIndex === null) return;
      if (e.key === 'Escape') setActiveProjectIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveProjectIndex((prev) => (prev! + 1) % filteredProjects.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveProjectIndex((prev) => (prev! - 1 + filteredProjects.length) % filteredProjects.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProjectIndex, filteredProjects.length]);

  return (
    <section id="realisations" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#121418] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
              Portfolio &amp; Galerie
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Nos chantiers en images.
            </h2>
          </div>

          {/* Interactive filter tabs (functional buttons with click handlers) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#181a21] border border-neutral-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#D4AF37] text-neutral-900 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setActiveProjectIndex(index)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-[#16181e] border border-neutral-800 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col shadow-lg"
            >
              {/* Image Container with smooth hover zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover overlay hint */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-[#D4AF37]" />
                </div>

                {/* Category tag */}
                <div className="absolute top-4 left-4 text-xs font-medium text-[#E5C158] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-neutral-800">
                  {project.categoryLabel}
                </div>

                {/* Bottom title in media frame */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-300 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#E5C158] transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Unboxed Metadata discipline */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium">{project.format}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.surface}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.duration}</span>
                  </div>
                  <span className="text-[#D4AF37] font-semibold group-hover:underline">
                    Détails →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeProjectIndex !== null && filteredProjects[activeProjectIndex] && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveProjectIndex(null)}
          >
            <div
              className="relative max-w-5xl w-full bg-[#16181e] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveProjectIndex(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-neutral-700 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-colors"
                aria-label="Fermer la vue plein écran"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next buttons */}
              {filteredProjects.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setActiveProjectIndex(
                        (activeProjectIndex - 1 + filteredProjects.length) % filteredProjects.length
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/70 border border-neutral-700 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-colors"
                    aria-label="Projet précédent"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      setActiveProjectIndex((activeProjectIndex + 1) % filteredProjects.length)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/70 border border-neutral-700 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-colors"
                    aria-label="Projet suivant"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image Container */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={filteredProjects[activeProjectIndex].image}
                  alt={filteredProjects[activeProjectIndex].title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Lightbox Information Bar */}
              <div className="p-6 bg-[#16181e] border-t border-neutral-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-semibold uppercase tracking-wider mb-1">
                      <span>{filteredProjects[activeProjectIndex].categoryLabel}</span>
                      <span>·</span>
                      <span>{filteredProjects[activeProjectIndex].location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {filteredProjects[activeProjectIndex].title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-neutral-300">
                    <div className="flex items-center gap-1.5">
                      <Maximize className="w-4 h-4 text-[#D4AF37]" />
                      <span>Format : {filteredProjects[activeProjectIndex].format}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#D4AF37]" />
                      <span>{filteredProjects[activeProjectIndex].duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {filteredProjects[activeProjectIndex].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
