import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#15171e] border border-neutral-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl relative text-neutral-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="font-serif text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#D4AF37]" />
          <span>Mentions Légales &amp; Assurances</span>
        </h3>

        <div className="space-y-6 text-xs sm:text-sm text-neutral-400 leading-relaxed">
          <div>
            <h4 className="font-semibold text-white mb-1">1. Éditeur du site</h4>
            <p>
              <strong>Atelier Pierre &amp; Joint</strong> — Entreprise artisanale individuelle de carrelage et revêtements.<br />
              Siège social : 14 Rue des Métiers d'Art, 14000 Caen (Calvados).<br />
              Numéro SIRET : 849 201 394 00018 · Code NAF/APE : 4333Z (Travaux de revêtement des sols et des murs).<br />
              Directeur de publication : Hugo Fournier.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-1">2. Assurance Garantie Décennale &amp; RC Pro</h4>
            <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong>Compagnie d'assurance :</strong> AXA France IARD.<br />
                Police n° : <strong>AXA-DEC-48921102</strong> couvrant l'ensemble des travaux de carrelage, dallage, étanchéité (SPEC/SEPI) et chapes.<br />
                Zone de couverture géographique : France métropolitaine.
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-1">3. Protection des Données Personnelles (RGPD)</h4>
            <p>
              Les données recueillies par le biais du formulaire de contact (nom, téléphone, adresse email, informations relatives au projet) sont strictement destinées à l'établissement de propositions commerciales et devis par Atelier Pierre &amp; Joint. Elles ne sont en aucun cas vendues, cédées ou transmises à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression en écrivant à contact@pierre-et-joint-carrelage.fr.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-1">4. Hébergement</h4>
            <p>
              Application hébergée sur infrastructure Cloud Run sécurisée avec certificat SSL/TLS valide.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-800 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#D4AF37] text-neutral-900 font-semibold text-xs hover:bg-[#E5C158] transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
