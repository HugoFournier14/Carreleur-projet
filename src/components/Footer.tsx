import React, { useState } from 'react';
import { Shield, MapPin, Phone, Mail, Award } from 'lucide-react';
import { LegalModal } from './LegalModal';

export const Footer: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#0c0d10] border-t border-neutral-800/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-neutral-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand info */}
          <div className="space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-white block">
              Atelier Pierre &amp; Joint
            </span>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Entreprise artisanale de pose de carrelage haut de gamme, faïence et dallage minéral. L'art de la précision et du respect du patrimoine architectural.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
              <Shield className="w-4 h-4" />
              <span>Garantie Décennale AXA n° 48921102</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Prestations
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Carrelage Grand Format (120x120cm)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Salles de Bain &amp; Douches Italiennes</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Zelliges &amp; Crédences émaillées</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Terrasses sur plots &amp; Margelles piscine</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Joints époxy inaltérables</a>
              </li>
            </ul>
          </div>

          {/* Intervention area */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Zone d'intervention
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed mb-3">
              Caen et agglomération, Bayeux, Côte de Nacre, Pays d'Auge (Deauville, Cabourg, Lisieux), Bocage Normand (Villers-Bocage, Vire) dans un rayon de 50 km.
            </p>
            <div className="text-xs text-neutral-300">
              Déplacement pour devis : <strong className="text-white">Gratuit</strong>
            </div>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Contact &amp; Horaires
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href="tel:+33642891234" className="hover:text-white transition-colors">06 42 89 12 34</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <a href="mailto:contact@pierre-et-joint-carrelage.fr" className="hover:text-white transition-colors">
                  contact@pierre-et-joint-carrelage.fr
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>14 Rue des Métiers d'Art, 14000 Caen (Calvados)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with legal notices */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} Atelier Pierre &amp; Joint. Tous droits réservés. SIRET : 849 201 394 00018.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModalOpen(true)}
              className="hover:text-neutral-300 transition-colors"
            >
              Mentions Légales &amp; Décennale
            </button>
            <button
              onClick={() => setLegalModalOpen(true)}
              className="hover:text-neutral-300 transition-colors"
            >
              Politique de Confidentialité
            </button>
          </div>
        </div>
      </footer>

      <LegalModal isOpen={legalModalOpen} onClose={() => setLegalModalOpen(false)} />
    </>
  );
};
