import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Expertise } from './components/Expertise';
import { Services } from './components/Services';
import { BeforeAfter } from './components/BeforeAfter';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { LocationZone } from './components/LocationZone';
import { ContactQuote } from './components/ContactQuote';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('Sols & Grands Formats');

  const handleOpenWhatsApp = () => {
    window.open(
      'https://wa.me/33642891234?text=Bonjour%20Atelier%20Pierre%20%26%20Joint,%20je%20souhaiterais%20des%20informations%20sur%20vos%20prestations%20de%20carrelage.',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-[#111215] text-[#F3F4F6] selection:bg-[#D4AF37] selection:text-neutral-950 font-sans flex flex-col">
      {/* 1. Header sticky moderne */}
      <Header onOpenWhatsApp={handleOpenWhatsApp} />

      <main className="flex-grow">
        {/* 2. Hero section impactante */}
        <Hero onOpenWhatsApp={handleOpenWhatsApp} />

        {/* 3. Section « Notre expertise » / À propos */}
        <Expertise />

        {/* 4. Services */}
        <Services onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* 5. Galerie photos + Avant/Après */}
        <BeforeAfter />
        <Gallery />

        {/* 6. Témoignages clients */}
        <Testimonials />

        {/* 7. Section Localisation qui cartonne */}
        <LocationZone />

        {/* 8. Contact / Devis */}
        <ContactQuote
          preselectedService={selectedServiceForQuote}
          onOpenWhatsApp={handleOpenWhatsApp}
        />
      </main>

      {/* 9. Footer propre */}
      <Footer />

      {/* Floating non-intrusive WhatsApp Button */}
      <FloatingWhatsApp onOpen={handleOpenWhatsApp} />
    </div>
  );
}
