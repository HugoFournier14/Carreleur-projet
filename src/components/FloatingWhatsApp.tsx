import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpen: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpen }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 select-none">
      {/* Gentle Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-[#171920]/95 backdrop-blur-md border border-neutral-700/80 rounded-xl shadow-xl text-xs text-neutral-200 animate-fadeIn">
          <span>Une question ? Échangeons sur WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-neutral-400 hover:text-white p-0.5"
            aria-label="Fermer le message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/33642891234?text=Bonjour%20Atelier%20Pierre%20%26%20Joint,%20je%20souhaiterais%20des%20renseignements%20pour%20mon%20projet%20de%20carrelage."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter l'artisan sur WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
        {/* Availability ping */}
        <span className="absolute top-1 right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-emerald-600"></span>
        </span>
      </a>
    </div>
  );
};
