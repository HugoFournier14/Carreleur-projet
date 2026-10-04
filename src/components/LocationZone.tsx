import React, { useState, useEffect, useRef } from 'react';
import { COMMUNES_INTERVENTION } from '../data/content';
import { MapPin, Navigation, Clock, Phone, CheckCircle2, Shield, Calendar } from 'lucide-react';

declare const L: any;

export const LocationZone: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const circleInstanceRef = useRef<any>(null);

  const [selectedRadius, setSelectedRadius] = useState<number>(45); // in km
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<typeof COMMUNES_INTERVENTION[0]>(COMMUNES_INTERVENTION[0]);

  // Initialize Leaflet map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (typeof L === 'undefined') return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [49.1828, -0.3707],
        zoom: 10,
        scrollWheelZoom: false,
      });

      // CartoDB dark matter tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      // Workshop marker with custom luxury gold icon
      const customIcon = L.divIcon({
        className: 'custom-pin',
        html: `<div style="background-color: #D4AF37; width: 22px; height: 22px; border-radius: 50%; border: 3px solid #121316; box-shadow: 0 0 16px rgba(212,175,55,0.8); display: flex; align-items: center; justify-content: center;">
          <div style="background-color: #121316; width: 6px; height: 6px; border-radius: 50%;"></div>
        </div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11],
      });

      const marker = L.marker([49.1828, -0.3707], { icon: customIcon }).addTo(map);
      marker.bindPopup(`
        <div style="color: #111; font-family: sans-serif; padding: 4px;">
          <strong style="color: #927012; font-size: 13px;">Atelier Pierre &amp; Joint</strong><br/>
          <span style="font-size: 11px;">14 Rue des Métiers d'Art, 14000 Caen</span><br/>
          <span style="font-size: 11px; color: #555;">Centre technique &amp; départs chantiers (Calvados)</span>
        </div>
      `);

      // Intervention Zone circle
      const circle = L.circle([49.1828, -0.3707], {
        color: '#D4AF37',
        fillColor: '#D4AF37',
        fillOpacity: 0.12,
        radius: selectedRadius * 1000,
        weight: 1.5,
      }).addTo(map);

      mapInstanceRef.current = map;
      circleInstanceRef.current = circle;
    }

    return () => {
      // cleanup on unmount
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update circle radius when user toggles
  useEffect(() => {
    if (circleInstanceRef.current && mapInstanceRef.current) {
      circleInstanceRef.current.setRadius(selectedRadius * 1000);
      mapInstanceRef.current.fitBounds(circleInstanceRef.current.getBounds(), {
        padding: [30, 30],
        maxZoom: selectedRadius <= 30 ? 11 : 9,
      });
    }
  }, [selectedRadius]);

  const filteredCommunes = COMMUNES_INTERVENTION.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.zip.includes(searchQuery)
  );

  return (
    <section id="zone" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#131519] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
              Proximité &amp; Réactivité
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Où intervenons-nous ?
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Basés au cœur du Calvados à Caen, nous intervenons sur toute l'agglomération caennaise, la Côte de Nacre, le Pays d'Auge et le Bocage Normand dans un rayon de 45 à 60 km.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Map & Radius Control */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl overflow-hidden border border-neutral-800 bg-[#16181f] shadow-xl">
            <div className="p-4 sm:p-5 border-b border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 bg-[#15171d]">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs sm:text-sm font-semibold text-white">
                  Rayon d'action actif : {selectedRadius} km
                </span>
              </div>

              {/* Radius selector */}
              <div className="flex items-center gap-1.5">
                {[30, 45, 60].map((radius) => (
                  <button
                    key={radius}
                    onClick={() => setSelectedRadius(radius)}
                    className={`px-3 py-1 text-xs rounded-lg font-medium transition-colors border ${
                      selectedRadius === radius
                        ? 'bg-[#D4AF37] text-neutral-900 border-[#D4AF37] font-semibold'
                        : 'bg-neutral-800/80 text-neutral-300 border-neutral-700/60 hover:bg-neutral-700/80'
                    }`}
                  >
                    {radius} km
                  </button>
                ))}
              </div>
            </div>

            {/* Map container */}
            <div
              ref={mapContainerRef}
              className="w-full h-[360px] sm:h-[440px] z-10"
              style={{ minHeight: '360px' }}
            />

            {/* Sub-bar note */}
            <div className="p-3.5 bg-[#14161c] border-t border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between">
              <span>Déplacement gratuit pour diagnostic technique et prise de cotes.</span>
              <span className="text-emerald-400 font-medium">Intervention prioritaire</span>
            </div>
          </div>

          {/* Right: Commune checker and Contact points */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Interactive City Selector */}
            <div className="p-6 rounded-2xl bg-[#16181f] border border-neutral-800 shadow-xl">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Vérifiez la couverture de votre commune</span>
              </h3>
              <p className="text-xs text-neutral-400 mb-4">
                Tapez votre ville ou code postal pour vérifier nos délais d'intervention :
              </p>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Ex : Caen, Bayeux, Deauville, 14000..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700/80 text-white placeholder-neutral-500 text-sm focus:border-[#D4AF37] focus:outline-none transition-colors mb-3"
              />

              {/* Quick tags of main cities */}
              <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                {filteredCommunes.slice(0, 8).map((city) => (
                  <button
                    key={city.name}
                    onClick={() => setSelectedCity(city)}
                    className={`px-2.5 py-1 text-xs rounded-lg transition-colors border ${
                      selectedCity.name === city.name
                        ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white font-medium'
                        : 'bg-neutral-800/60 border-neutral-700/50 text-neutral-300 hover:text-white hover:bg-neutral-800'
                    }`}
                  >
                    {city.name} ({city.distance})
                  </button>
                ))}
              </div>

              {/* Status display for selected city */}
              <div className="mt-4 p-4 rounded-xl bg-[#1d2028] border border-neutral-700/60 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="text-white font-semibold">
                    {selectedCity.name} ({selectedCity.zip})
                  </div>
                  <div className="text-neutral-400 mt-0.5">
                    Éloignement de l'atelier : <strong className="text-white">{selectedCity.distance}</strong>
                  </div>
                  <div className="text-[#E5C158] font-medium mt-1">
                    ✓ {selectedCity.delay} · Déplacement &amp; devis gratuits à domicile
                  </div>
                </div>
              </div>
            </div>

            {/* Workshop & Schedule Card */}
            <div className="p-6 rounded-2xl bg-[#16181f] border border-neutral-800 shadow-xl space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Horaires d'ouverture &amp; Disponibilité</h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    Lundi au Vendredi : <strong>07h30 – 19h00</strong><br />
                    Samedi matin : <strong>08h30 – 13h00</strong> (visites de chantiers)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-neutral-800/80">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Ligne directe artisan</h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    <a href="tel:+33642891234" className="text-white hover:text-[#D4AF37] font-semibold transition-colors">
                      06 42 89 12 34
                    </a> (Appel ou SMS)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
