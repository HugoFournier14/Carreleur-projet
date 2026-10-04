// Données artisanales complètes pour Atelier Pierre & Joint
export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  details: string[];
  materials: string;
  iconName: string;
  popular?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'salles-de-bain' | 'sols-grands-formats' | 'cuisines-zelliges' | 'exterieurs';
  categoryLabel: string;
  location: string;
  image: string;
  format: string;
  surface: string;
  duration: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  city: string;
  projectType: string;
  rating: number;
  date: string;
  quote: string;
  verified: boolean;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'sols-grands-formats',
    number: '01',
    title: 'Sols & Carreaux Grands Formats',
    shortDesc: 'Pose millimétrée de dalles XXL jusqu\'à 120x120cm et 120x240cm pour pièces à vivre contemporaines.',
    details: [
      'Double encollage systématique pour adhérence totale',
      'Système de croisillons autonivelants optiques',
      'Planéité irréprochable sans désaffleurement',
      'Raccordement parfait avec parquets et seuils invisibles'
    ],
    materials: 'Grès cérame rectifié, aspect pierre de Bourgogne, béton ciré céramique',
    iconName: 'Maximize2',
    popular: true
  },
  {
    id: 'salles-de-bain',
    number: '02',
    title: 'Salles de Bain & Douches Italiennes',
    shortDesc: 'Création étanche intégrale de douches de plain-pied, niches rétro-éclairées et faïences murales d\'art.',
    details: [
      'Étanchéité sous carrelage (SPEC/SEPI) certifiée CSTB',
      'Pente maçonnée précise pour évacuation instantanée',
      'Coupes d\'angle en onglet 45° sans profilé plastique',
      'Niches de douche maçonnées sur mesure'
    ],
    materials: 'Faïence grand format, mosaïque pâte de verre, marbre adouci',
    iconName: 'Droplet',
    popular: true
  },
  {
    id: 'zelliges-terres-cuites',
    number: '03',
    title: 'Zelliges, Terres Cuites & Travertin',
    shortDesc: 'Matériaux nobles façonnés à la main, apportant une patine intemporelle et un relief lumineux unique.',
    details: [
      'Pose bord à bord traditionnelle des zelliges artisanaux',
      'Traitement hydrofuge et oléofuge respirant',
      'Respect des nuances et de la texture organique',
      'Jointoiement fin à la chaux ou résine ton sur ton'
    ],
    materials: 'Zelliges marocains émaillés, travertin de premier choix, tomettes anciennes',
    iconName: 'Sparkles'
  },
  {
    id: 'terrasses-exterieures',
    number: '04',
    title: 'Terrasses Extérieures & Margelles',
    shortDesc: 'Aménagements durables sur plots réglables ou chape extérieure drainante, insensibles aux intempéries.',
    details: [
      'Dalles extérieures épaisseur 20mm antidérapantes (R11)',
      'Pose sur plots réglables autonivelants',
      'Margelles de piscine ajustées au millimètre',
      'Résistance certifiée au gel et aux UV'
    ],
    materials: 'Grès cérame extérieur 20mm, pierre calcaire massive, dalles effet bois',
    iconName: 'Sun'
  },
  {
    id: 'renovation-depose',
    number: '05',
    title: 'Rénovation Complète & Dépose',
    shortDesc: 'Remise à neuf méthodique avec dépose soignée, reprise de chape et ragréage haute performance fibré.',
    details: [
      'Dépose propre avec évacuation et recyclage des gravats',
      'Aspiration industrielle à filtration HEPA pour un air sain',
      'Ragréage autolissant fibré pour support irréprochable',
      'Natte de désolidarisation anti-fissuration Ditra'
    ],
    materials: 'Primaires d\'adhérence haute résistance, mortiers-colles déformables C2S1',
    iconName: 'Hammer'
  },
  {
    id: 'joints-finitions-art',
    number: '06',
    title: 'Joints Époxy & Finitions Joaillerie',
    shortDesc: 'La garantie d\'un résultat inaltérable qui ne noircit jamais, insensible aux taches et aux détergents.',
    details: [
      'Joints époxy bi-composants imperméables et anti-bactériens',
      'Coupes d\'angle biseautées polies au diamant',
      'Nuancier précis de plus de 40 teintes minérales',
      'Remplacement et reprise de joints endommagés'
    ],
    materials: 'Résine époxy Litokol / Mapei Kerapoxy, chanfreins adoucis',
    iconName: 'ShieldCheck'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'caen-saint-julien',
    title: 'Suite parentale en dalles calcaires rectifiées',
    category: 'salles-de-bain',
    categoryLabel: 'Salle de bain',
    location: 'Caen (Quartier Saint-Julien)',
    image: '/src/assets/images/bathroom_after_1791089809790.jpg',
    format: '60 × 120 cm',
    surface: '16 m²',
    duration: '8 jours',
    description: 'Transformation d\'une ancienne salle d\'eau exiguë en espace bien-être épuré avec douche à l\'italienne sans seuil, niche encastrée rétroéclairée et meuble sur-mesure.'
  },
  {
    id: 'villa-deauville-terrasse',
    title: 'Continuité salon & terrasse panoramique',
    category: 'sols-grands-formats',
    categoryLabel: 'Sol & Terrasse',
    location: 'Deauville (Côte Fleurie)',
    image: '/src/assets/images/project_living_terrace_1791089820829.jpg',
    format: '120 × 120 cm',
    surface: '95 m²',
    duration: '12 jours',
    description: 'Pose en continu sans rupture visuelle entre l\'espace de vie et la terrasse extérieure couverte. Dalles grès cérame effet travertin chaud avec alignement rigoureux des trames.'
  },
  {
    id: 'manoir-pays-auge-zellige',
    title: 'Crédence artisanale en zellige vert sauge',
    category: 'cuisines-zelliges',
    categoryLabel: 'Cuisine d\'art',
    location: 'Pont-l\'Évêque (Pays d\'Auge)',
    image: '/src/assets/images/project_zellige_kitchen_1791089831069.jpg',
    format: '10 × 10 cm',
    surface: '6.5 m²',
    duration: '3 jours',
    description: 'Pose bord à bord de véritables zelliges façonnés à la main, créant des jeux d\'ombres et de réverbérations naturelles avec le plan de travail en marbre blanc Calacatta.'
  },
  {
    id: 'demeure-bayeux-luxe',
    title: 'Salle de bain d\'architecte & receveur monobloc',
    category: 'salles-de-bain',
    categoryLabel: 'Salle de bain',
    location: 'Bayeux (Bessin / Centre historique)',
    image: '/src/assets/images/hero_tiling_luxury_1791089785196.jpg',
    format: '80 × 160 cm',
    surface: '22 m²',
    duration: '10 jours',
    description: 'Chantier haut de gamme avec caniveau de douche invisible en fente d\'acier inoxydable, coupes d\'onglet à 45° sur toutes les arêtes vives et joints résine ultra-fins.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    author: 'Jean-Christophe & Valérie D.',
    city: 'Caen (Hastings)',
    projectType: 'Rénovation intégrale sol (85 m² en 120x120)',
    rating: 5,
    date: 'Janvier 2026',
    quote: 'Un travail d\'orfèvre ! Les carreaux de 120x120cm demandaient une planéité parfaite, et le résultat dépasse toutes nos attentes. Chantier nettoyé chaque soir, politesse exemplaire et calendrier scrupuleusement respecté.',
    verified: true
  },
  {
    id: 'test-2',
    author: 'Sophie M.',
    city: 'Cabourg (Pays d\'Auge)',
    projectType: 'Douche à l\'italienne & zellige artisanal',
    rating: 5,
    date: 'Novembre 2025',
    quote: 'Artisan d\'une rare minutie. La pose des zelliges vert sauge dans notre cuisine et la douche italienne sans joint apparent font l\'admiration de tous nos proches. Devis clair et aucun surcoût imprévu.',
    verified: true
  },
  {
    id: 'test-3',
    author: 'Marc V. (Architecte DPLG)',
    city: 'Deauville & Bocage Normand',
    projectType: 'Collaboration sur 4 villas et demeures',
    rating: 5,
    date: 'Décembre 2025',
    quote: 'En tant qu\'architecte, trouver un carreleur capable d\'exécuter des coupes d\'onglet à 45° parfaites sans profils alu est rarissime. C\'est l\'artisan à qui je confie mes chantiers les plus exigeants les yeux fermés.',
    verified: true
  },
  {
    id: 'test-4',
    author: 'Dr. Antoine B.',
    city: 'Bayeux / Côte de Nacre',
    projectType: 'Terrasse sur plots 65 m² (dalles 20mm)',
    rating: 5,
    date: 'Septembre 2025',
    quote: 'Ponctualité, rigueur technique et conseils avisés sur le choix du carrelage antidérapant. Les finitions des margelles de piscine sont impeccables. Une entreprise que l\'on recommande chaleureusement.',
    verified: true
  }
];

export const COMMUNES_INTERVENTION = [
  { name: 'Caen (Tous quartiers)', zip: '14000', distance: '0 km', delay: 'Visite sous 24h' },
  { name: 'Hérouville-Saint-Clair', zip: '14200', distance: '4 km', delay: 'Visite sous 24h' },
  { name: 'Mondeville & Ifs', zip: '14120', distance: '5 km', delay: 'Visite sous 24h' },
  { name: 'Ouistreham (Côte de Nacre)', zip: '14150', distance: '14 km', delay: 'Visite sous 24h' },
  { name: 'Courseulles-sur-Mer', zip: '14470', distance: '19 km', delay: 'Visite sous 24h' },
  { name: 'Bayeux (Bessin)', zip: '14400', distance: '28 km', delay: 'Visite sous 24h' },
  { name: 'Villers-Bocage (Bocage)', zip: '14310', distance: '26 km', delay: 'Visite sous 24h' },
  { name: 'Cabourg & Dives', zip: '14390', distance: '25 km', delay: 'Visite sous 24h' },
  { name: 'Deauville & Trouville', zip: '14800', distance: '42 km', delay: 'Visite sous 24h' },
  { name: 'Pont-l\'Évêque (Pays d\'Auge)', zip: '14130', distance: '44 km', delay: 'Visite sous 24h' },
  { name: 'Lisieux (Pays d\'Auge)', zip: '14100', distance: '49 km', delay: 'Visite sous 24h' },
  { name: 'Falaise', zip: '14700', distance: '38 km', delay: 'Visite sous 48h' },
  { name: 'Vire Normandie (Bocage Virois)', zip: '14500', distance: '58 km', delay: 'Visite sous 48h' },
  { name: 'Honfleur', zip: '14600', distance: '56 km', delay: 'Visite sous 48h' }
];

export const FAQ_ITEMS = [
  {
    q: 'Comment obtenir un devis pour mon projet ?',
    a: 'C\'est très simple : remplissez le formulaire ci-dessous ou contactez-nous directement sur WhatsApp. Nous étudions votre besoin et convenons d\'une visite technique gratuite sur place sous 24h à 48h pour mesurer les surfaces et vérifier les supports.'
  },
  {
    q: 'Êtes-vous couvert par une garantie décennale ?',
    a: 'Oui, obligatoirement. Tous nos travaux de carrelage, étanchéité et chape sont couverts par une assurance Responsabilité Civile Professionnelle et Garantie Décennale AXA Pro (attestation fournie avec chaque devis).'
  },
  {
    q: 'Fournissez-vous également le carrelage ou uniquement la pose ?',
    a: 'Les deux formules sont possibles ! Vous pouvez choisir vos carreaux chez l\'un de nos showrooms partenaires (qui vous feront bénéficier de nos tarifs professionnels négociés), ou nous confier uniquement la main-d\'œuvre et les fournitures techniques de pose (colles C2S1, nattes d\'étanchéité, résines).'
  },
  {
    q: 'Combien de temps dure un chantier type (ex: salle de bain) ?',
    a: 'Pour une rénovation complète de salle de bain avec dépose, étanchéité, receveur à l\'italienne et faïence, comptez en moyenne entre 5 et 8 jours ouvrés. Nous nous engageons par contrat sur la date de fin de chantier.'
  },
  {
    q: 'Comment garantissez-vous la propreté pendant les travaux ?',
    a: 'Nous protégeons l\'ensemble des zones de passage (bâches feutrées épaisses, protections de chambranles), utilisons des aspirateurs de chantier à filtration très haute efficacité pour les coupes et nettoyons minutieusement les lieux en fin de chaque journée.'
  }
];
