import aboutAtelier from '../assets/about-atelier.svg';
import brandMark from '../assets/logo.png';
import chefHassen from '../assets/chefs/optimized/Hassen ALLAGUI.jpg';
import chefKhalil from '../assets/chefs/optimized/Khalil ARFI.jpg';
import chefManel from '../assets/chefs/optimized/mme manel2.jpg';
import eventPlaceholder from '../assets/event-placeholder.svg';
import heroVisual from '../assets/hero-visual.svg';
import mapPlaceholder from '../assets/map-placeholder.svg';

export const brand = {
  name: 'École Jasmin',
  subtitle: 'Centre de formation professionnelle',
  mark: brandMark,
};

export const contactDetails = {
  phone: '+216 52 694 594',
  email: 'ecole.jasmin2012@gmail.com',
  address: 'Route de Tunis km 6, Sakiet Ezzit, Sfax, Tunisie',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Route+de+Tunis+km+6+Sakiet+Ezzit+Sfax+Tunisie',
};

export const socialLinks = {
  instagram: 'https://www.instagram.com/ecole_jasmin_centredeformation',
  facebook: 'https://www.facebook.com/CentreFormationJasmin',
};

export const navigation = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Formations', href: '#formations' },
  { label: "L'école", href: '#ecole' },
  { label: 'Chefs', href: '#chefs' },
  { label: 'Événements', href: '#evenements' },
  { label: 'Contact', href: '#contact' },
];

export const heroContent = {
  image: heroVisual,
  eyebrow: 'Cuisine - Pâtisserie - Formation reconnue',
  title: 'Formez-vous aux métiers de la cuisine et de la pâtisserie',
  subtitle: "Une formation professionnelle claire, sérieuse et reconnue par l'État",
  highlights: [
    'Formation pratique',
    'Encadrement par des chefs formateurs',
    'Préparation à la vie professionnelle',
  ],
};

export const aboutContent = {
  image: aboutAtelier,
  text:
    "École Jasmin est un centre de formation professionnelle en cuisine et en pâtisserie. Nous proposons des parcours structurés avec des diplômes reconnus par l'État.",
  description:
    'Les étudiants évoluent dans un cadre moderne, accueillant et axé sur la pratique.',
  stats: [
    { value: 500, prefix: '+', label: 'étudiants formés' },
    { value: 10, prefix: '+', label: 'formateurs qualifiés' },
    { label: 'Formation reconnue', detail: "Parcours encadré et reconnu par l'État" },
  ],
};

export const programHighlights = [
  {
    id: 'formation-base',
    title: 'Formation de base',
    description:
      'Une formation pour maîtriser les bases de la cuisine, de la pâtisserie et du travail en atelier.',
  },
  {
    id: 'formation-acceleree',
    title: 'Formation accélérée',
    description:
      'Un rythme intensif pour progresser plus vite et accéder plus rapidement au monde professionnel.',
  },
];

export const formations = [
  {
    title: 'BTP Cuisine',
    description:
      "Une formation pour apprendre la cuisine professionnelle, les techniques essentielles et l'organisation en cuisine.",
    icon: 'chefHat',
  },
  {
    title: 'BTP Pâtisserie',
    description:
      'Un parcours pour apprendre les bases de la pâtisserie, les desserts et les finitions professionnelles.',
    icon: 'award',
  },
  {
    title: 'CAP Cuisine et Pâtisserie',
    description:
      'Une formation polyvalente pour apprendre la cuisine et la pâtisserie dans un même parcours.',
    icon: 'badge',
  },
  {
    title: 'CC Cuisine',
    description:
      'Un programme pratique pour apprendre les gestes essentiels du métier en cuisine.',
    icon: 'book',
  },
  {
    title: 'CC Pâtisserie',
    description:
      'Une formation pratique pour acquérir de bonnes bases en pâtisserie.',
    icon: 'sparkles',
  },
];

export const chefs = [
  {
    name: 'Chef Hassen Allagui',
    specialty: 'Pâtisserie',
    bio: "Il accompagne les étudiants dans l'apprentissage des bases, de la précision technique et de l'organisation du travail.",
    image: chefHassen,
    imagePosition: 'center 18%',
  },
  {
    name: 'Chef Khalil Arfi',
    specialty: 'Cuisine',
    bio: 'Il accompagne les étudiants dans la pratique, la rigueur professionnelle et le travail en cuisine.',
    image: chefKhalil,
    imagePosition: 'center 14%',
  },
  {
    name: 'Cheffe Manel Sallemi',
    specialty: 'Formation pratique',
    bio: 'Elle accompagne les étudiants avec attention afin de soutenir leur progression tout au long de la formation.',
    image: chefManel,
    imagePosition: 'center 12%',
  },
];

export const events = [
  {
    title: 'Journée de remise des diplômes',
    date: 'Juin 2026',
    description:
      'Une journée pour célébrer la fin de formation et remettre les diplômes aux étudiants.',
    image: eventPlaceholder,
  },
  {
    title: 'Dîner gastronomique',
    date: 'Octobre 2026',
    description:
      'Un événement pendant lequel les étudiants prépareront et serviront un menu complet.',
    image: eventPlaceholder,
  },
  {
    title: 'Atelier masterclass',
    date: "Toute l'année",
    description:
      'Des ateliers spéciaux pour approfondir les techniques en cuisine et en pâtisserie.',
    image: eventPlaceholder,
  },
];

export const newsItems = [
  {
    title: 'Inscriptions 2026 ouvertes',
    excerpt: 'Les inscriptions en cuisine et en pâtisserie sont maintenant ouvertes.',
  },
  {
    title: 'Nouveaux ateliers pratiques',
    excerpt: 'De nouveaux ateliers ont été ajoutés pour renforcer la pratique sur le terrain.',
  },
  {
    title: 'Accueil des étudiants étrangers',
    excerpt: "L'école accompagne aussi les étudiants étrangers dans la préparation de leur arrivée.",
  },
];

export const faqItems = [
  {
    question: 'Quels diplômes sont proposés ?',
    answer:
      "L'école propose plusieurs formations en cuisine et en pâtisserie, avec différents niveaux de diplôme.",
  },
  {
    question: "Quelles sont les conditions d'inscription ?",
    answer:
      "L'inscription se fait sur dossier. L'équipe vous accompagne pour choisir la formation la plus adaptée.",
  },
  {
    question: "Où se trouve l'école ?",
    answer:
      "L'école est située Route de Tunis km 6, Sakiet Ezzit, à Sfax, en Tunisie.",
  },
  {
    question: 'Quels types de formation sont disponibles ?',
    answer:
      'Vous pouvez choisir une formation de base, une formation accélérée ou des ateliers pratiques selon votre objectif.',
  },
];

export const studentSupport = [
  "Aide avant l'arrivée",
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
    name: 'Atelier Café',
    category: 'Fournisseur',
    icon: 'coffee',
  },
  {
    name: 'Croissant Signature',
    category: 'Pâtisserie',
    icon: 'croissant',
  },
  {
    name: 'Cuisine Prestige',
    category: 'Équipement',
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
  { label: 'Événements', href: '#evenements' },
  { label: 'Contact', href: '#contact' },
];

export const imagery = {
  map: mapPlaceholder,
};
