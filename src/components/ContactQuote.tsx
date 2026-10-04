import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, Shield, Clock, FileText, Sparkles, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

interface ContactQuoteProps {
  preselectedService?: string;
  onOpenWhatsApp: () => void;
}

export const ContactQuote: React.FC<ContactQuoteProps> = ({ preselectedService, onOpenWhatsApp }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: preselectedService || 'Sols & Grands Formats',
    surface: 35,
    timeframe: 'Dans les 1 à 3 mois',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || (!formData.phone && !formData.email)) {
      return;
    }
    setSubmitted(true);
  };

  // Pre-filled WhatsApp link with inquiry details
  const whatsappUrl = `https://wa.me/33642891234?text=${encodeURIComponent(
    `Bonjour Atelier Pierre & Joint, je souhaiterais un devis pour un projet de type : ${formData.projectType} (environ ${formData.surface} m²). Pouvons-nous échanger ?`
  )}`;

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#101114] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
            Contact &amp; Estimation
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Parlons de votre projet en toute sérénité.
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            Devis gratuit, clair et sans engagement. Nous vous répondons sous 24h ouvrées et nous déplaçons sans frais pour étudier la faisabilité technique.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Quote Form */}
          <div className="lg:col-span-7 bg-[#16181f] border border-neutral-800 rounded-2xl p-6 sm:p-9 shadow-2xl">
            {submitted ? (
              <div className="py-12 px-4 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-950/70 border border-emerald-600/50 flex items-center justify-center text-emerald-400 mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Merci {formData.fullName} !
                </h3>
                <p className="text-sm text-neutral-300 max-w-md leading-relaxed mb-6">
                  Votre demande de devis a bien été transmise à notre artisan. Nous étudions votre projet ({formData.projectType}, ~{formData.surface} m²) et vous recontacterons au <strong>{formData.phone || formData.email}</strong> sous 24 heures.
                </p>
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 text-left w-full max-w-sm mb-6">
                  <div className="flex items-center gap-2 text-white font-medium mb-1">
                    <Clock className="w-4 h-4 text-[#D4AF37]" />
                    <span>Prochaine étape :</span>
                  </div>
                  <span>Visite technique gratuite sur place pour valider les métrés et vérifier la planéité du support.</span>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#D4AF37] hover:underline"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Demande de devis détaillé
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Remplissez les quelques champs ci-dessous pour une étude personnalisée.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ex : Alexandre Martin"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-700/80 text-white placeholder-neutral-500 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ex : 06 12 34 56 78"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-700/80 text-white placeholder-neutral-500 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Adresse email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alexandre@exemple.fr"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-700/80 text-white placeholder-neutral-500 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Type de prestation
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-700/80 text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors"
                    >
                      <option value="Sols & Grands Formats">Sols &amp; Grands Formats (120x120, etc.)</option>
                      <option value="Salles de bain & Douche italienne">Salle de bain &amp; Douche à l'italienne</option>
                      <option value="Zelliges & Faïence murale">Zelliges, Faïence &amp; Crédence de cuisine</option>
                      <option value="Terrasses & Extérieurs">Terrasse sur plots ou extérieur 20mm</option>
                      <option value="Rénovation intégrale & Dépose">Rénovation intégrale avec dépose</option>
                      <option value="Autre prestation sur mesure">Autre prestation sur mesure</option>
                    </select>
                  </div>
                </div>

                {/* Surface Estimator Slider */}
                <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-medium text-neutral-300">
                      Surface approximative : <strong className="text-[#D4AF37] font-semibold text-sm">{formData.surface} m²</strong>
                    </label>
                    <span className="text-[11px] text-neutral-400">Ajustable au curseur</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="150"
                    step="5"
                    value={formData.surface}
                    onChange={(e) => setFormData({ ...formData, surface: parseInt(e.target.value, 10) })}
                    className="w-full accent-[#D4AF37] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
                    <span>5 m² (salle d'eau)</span>
                    <span>50 m² (pièce à vivre)</span>
                    <span>150 m² (maison complète)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Détails ou remarques particulières
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Précisez l'état du support actuel (chape neuve, ancien carrelage à enlever), la ville du chantier..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-700/80 text-white placeholder-neutral-500 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#D4AF37] hover:bg-[#E5C158] text-neutral-900 font-bold text-sm transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer ma demande de devis gratuit</span>
                </button>

                {/* Discrètes mentions de réassurance */}
                <div className="pt-2 flex flex-wrap items-center justify-between text-[11px] text-neutral-400 gap-2">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Réponse sous 24h</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Devis gratuit &amp; sans engagement</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Données 100% confidentielles</span>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Prominent WhatsApp CTA & Direct Hotline */}
          <div className="lg:col-span-5 space-y-6">
            {/* Prominent WhatsApp Card */}
            <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-[#151a1d] to-[#14161b] border border-emerald-800/40 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
                <MessageSquare className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Vous préférez échanger par WhatsApp ?
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Envoyez-nous directement des photos de votre pièce, de vos plans ou de vos inspirations. Nous vous répondons rapidement avec un premier avis technique.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Ouvrir WhatsApp (+33 6 42 89 12 34)</span>
              </a>

              <div className="mt-4 text-[11px] text-neutral-400 text-center">
                Disponible du lundi au samedi · Réponse en direct
              </div>
            </div>

            {/* Reassurance FAQ Accordion */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#16181f] border border-neutral-800 shadow-xl">
              <div className="flex items-center gap-2 text-white font-semibold text-sm mb-4">
                <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>Questions fréquentes avant devis</span>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="border-b border-neutral-800 pb-3 last:border-0 last:pb-0">
                    <button
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full text-left text-xs font-semibold text-neutral-200 hover:text-[#D4AF37] transition-colors flex items-center justify-between gap-2"
                    >
                      <span>{item.q}</span>
                      <span className="text-[#D4AF37] text-base font-mono">
                        {activeFaq === idx ? '−' : '+'}
                      </span>
                    </button>
                    {activeFaq === idx && (
                      <p className="mt-2 text-xs text-neutral-400 leading-relaxed animate-fadeIn">
                        {item.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
