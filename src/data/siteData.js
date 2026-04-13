import aboutAtelier from '../assets/about-atelier.svg';
import brandMark from '../assets/logo.png';
import chefHassen from '../assets/chefs/Hassen ALLAGUI.jpg';
import chefKhalil from '../assets/chefs/Khalil ARFI.jpg';
import chefManel from '../assets/chefs/mme manel2.jpg';
import eventPlaceholder from '../assets/event-placeholder.svg';
import heroVisual from '../assets/hero-visual.svg';
import mapPlaceholder from '../assets/map-placeholder.svg';

export const brand = {
  name: 'Ecole Jasmin',
  subtitle: 'Centre de formation professionnelle',
  mark: brandMark,
};

export const contactDetails = {
  phone: '+216 23 061 414',
  email: 'ecole.jasmin2012@gmail.com',
  address: 'Route de Tunis km 6, Sakiet Ezzit, Sfax, Tunisie',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Route+de+Tunis+km+6+Sakiet+Ezzit+Sfax+Tunisie',
};

export const navigation = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Formations', href: '#formations' },
  { label: "L'ecole", href: '#ecole' },
  { label: 'Chefs', href: '#chefs' },
  { label: 'Evenements', href: '#evenements' },
  { label: 'Contact', href: '#contact' },
];

export const heroContent = {
  image: heroVisual,
  eyebrow: 'Cuisine - Patisserie - Formation reconnue',
  title: 'Formez-vous aux metiers de la cuisine et de la patisserie',
  subtitle: "Une formation professionnelle claire, serieuse et reconnue par l'Etat",
  highlights: [
    'Formation pratique',
    'Encadrement par des chefs formateurs',
    'Preparation a la vie professionnelle',
  ],
};

export const aboutContent = {
  image: aboutAtelier,
  text:
    "Ecole Jasmin est un centre de formation professionnelle en cuisine et en patisserie. Nous proposons des parcours structures avec des diplomes reconnus par l'Etat.",
  description:
    "Les etudiants evoluent dans un cadre moderne, accueillant et axe sur la pratique.",
  stats: [
    { value: 500, prefix: '+', label: 'etudiants formes' },
    { value: 10, prefix: '+', label: 'formateurs qualifies' },
    { label: 'Formation reconnue', detail: "Parcours encadre et reconnu par l'Etat" },
  ],
};

export const programHighlights = [
  {
    id: 'formation-base',
    title: 'Formation de base',
    description:
      'Une formation pour maitriser les bases de la cuisine, de la patisserie et du travail en atelier.',
  },
  {
    id: 'formation-acceleree',
    title: 'Formation acceleree',
    description:
      'Un rythme intensif pour progresser plus vite et acceder plus rapidement au monde professionnel.',
  },
];

export const formations = [
  {
    title: 'BTP Cuisine',
    description:
      'Une formation pour apprendre la cuisine professionnelle, les techniques essentielles et lorganisation en cuisine.',
    icon: 'chefHat',
  },
  {
    title: 'BTP Patisserie',
    description:
      'Un parcours pour apprendre les bases de la patisserie, les desserts et les finitions professionnelles.',
    icon: 'award',
  },
  {
    title: 'CAP Cuisine et Patisserie',
    description:
      'Une formation polyvalente pour apprendre la cuisine et la patisserie dans un meme parcours.',
    icon: 'badge',
  },
  {
    title: 'CC Cuisine',
    description:
      'Un programme pratique pour apprendre les gestes essentiels du metier en cuisine.',
    icon: 'book',
  },
  {
    title: 'CC Patisserie',
    description:
      'Une formation pratique pour acquerir de bonnes bases en patisserie.',
    icon: 'sparkles',
  },
];

export const chefs = [
  {
    name: 'Chef Hassen Allagui',
    specialty: 'Patisserie',
    bio: 'Il accompagne les etudiants dans lapprentissage des bases, de la precision technique et de lorganisation du travail.',
    image: chefHassen,
    imagePosition: 'center 18%',
  },
  {
    name: 'Chef Khalil Arfi',
    specialty: 'Cuisine',
    bio: 'Il accompagne les etudiants dans la pratique, la rigueur professionnelle et le travail en cuisine.',
    image: chefKhalil,
    imagePosition: 'center 14%',
  },
  {
    name: 'Cheffe Manel Sallemi',
    specialty: 'Formation pratique',
    bio: 'Elle accompagne les etudiants avec attention afin de soutenir leur progression tout au long de la formation.',
    image: chefManel,
    imagePosition: 'center 12%',
  },
];

export const events = [
  {
    title: 'Journee de remise des diplomes',
    date: 'Juin 2026',
    description:
      'Une journee pour celebrer la fin de formation et remettre les diplomes aux etudiants.',
    image: eventPlaceholder,
  },
  {
    title: 'Diner gastronomique',
    date: 'Octobre 2026',
    description:
      'Un evenement pendant lequel les etudiants prepareront et serviront un menu complet.',
    image: eventPlaceholder,
  },
  {
    title: 'Atelier masterclass',
    date: "Toute l'annee",
    description:
      'Des ateliers speciaux pour approfondir les techniques en cuisine et en patisserie.',
    image: eventPlaceholder,
  },
];

export const newsItems = [
  {
    title: 'Inscriptions 2026 ouvertes',
    excerpt: 'Les inscriptions en cuisine et en patisserie sont maintenant ouvertes.',
  },
  {
    title: 'Nouveaux ateliers pratiques',
    excerpt: 'De nouveaux ateliers ont ete ajoutes pour renforcer la pratique sur le terrain.',
  },
  {
    title: 'Accueil des etudiants etrangers',
    excerpt: "L'ecole accompagne aussi les etudiants etrangers dans la preparation de leur arrivee.",
  },
];

export const faqItems = [
  {
    question: 'Quels diplomes sont proposes ?',
    answer:
      "L'ecole propose plusieurs formations en cuisine et en patisserie, avec differents niveaux de diplome.",
  },
  {
    question: "Quelles sont les conditions d'inscription ?",
    answer:
      "L'inscription se fait sur dossier. L'equipe vous accompagne pour choisir la formation la plus adaptee.",
  },
  {
    question: "Ou se trouve l'ecole ?",
    answer:
      "L'ecole est situee Route de Tunis km 6, Sakiet Ezzit, a Sfax en Tunisie.",
  },
  {
    question: 'Quels types de formation sont disponibles ?',
    answer:
      'Vous pouvez choisir une formation de base, une formation acceleree ou des ateliers pratiques selon votre objectif.',
  },
];

export const studentSupport = [
  "Aide avant l'arrivee",
  'Orientation selon votre niveau',
  "Suivi simple pour bien commencer la formation",
];

export const sponsors = [
  {
    name: 'Maison Gourmet',
    category: 'Partenaire',
    icon: 'award',
  },
  {
    name: 'Atelier Cafe',
    category: 'Fournisseur',
    icon: 'coffee',
  },
  {
    name: 'Croissant Signature',
    category: 'Patisserie',
    icon: 'croissant',
  },
  {
    name: 'Cuisine Prestige',
    category: 'Equipement',
    icon: 'utensils',
  },
  {
    name: 'Saveurs du Chef',
    category: 'Gastronomie',
    icon: 'soup',
  },
  {
    name: 'Marche Select',
    category: 'Distribution',
    icon: 'store',
  },
];

export const footerLinks = [
  { label: 'Formations', href: '#formations' },
  { label: 'Chefs', href: '#chefs' },
  { label: 'Evenements', href: '#evenements' },
  { label: 'Contact', href: '#contact' },
];

export const imagery = {
  map: mapPlaceholder,
};
