import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenWhatsApp: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWhatsApp }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Expertise', href: '#expertise' },
    { label: 'Services', href: '#services' },
    { label: 'Avant / Après', href: '#avant-apres' },
    { label: 'Réalisations', href: '#realisations' },
    { label: 'Avis', href: '#avis' },
    { label: 'Zone & Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121316]/90 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#"
            className="group flex flex-col focus:outline-none"
            aria-label="Atelier Pierre & Joint - Accueil"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-neutral-100 group-hover:text-[#D4AF37] transition-colors">
              Atelier Pierre &amp; Joint
            </span>
            <span className="text-[10px] tracking-widest uppercase text-neutral-400 font-sans">
              Artisan Carreleur d'Exception
            </span>
          </a>

          {/* Zone 2: Navigation links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300"
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/40 rounded-lg transition-colors whitespace-nowrap"
              aria-label="Discuter directement sur WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-neutral-900 bg-[#D4AF37] hover:bg-[#E5C158] rounded-lg transition-all shadow-sm whitespace-nowrap active:scale-[0.98]"
            >
              <span>Devis Gratuit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenWhatsApp}
              className="p-2 text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 rounded-lg"
              aria-label="Contacter sur WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white bg-neutral-800/60 border border-neutral-700/60 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#14161b]/98 backdrop-blur-xl border-b border-neutral-800 px-5 pt-4 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-neutral-200 hover:text-[#D4AF37] hover:bg-neutral-800/50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-neutral-800/80 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold text-neutral-900 bg-[#D4AF37] rounded-lg shadow-sm"
            >
              Demander un Devis Gratuit
            </a>
            <a
              href="tel:+33642891234"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-neutral-300 bg-neutral-800/60 rounded-lg border border-neutral-700/60"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>06 42 89 12 34</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
