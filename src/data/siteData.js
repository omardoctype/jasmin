import aboutAtelier from '../assets/about-atelier.svg';
import brandMark from '../assets/logo.png';
import chefHassen from '../assets/chefs/Hassen ALLAGUI.jpg';
import chefKhalil from '../assets/chefs/Khalil ARFI.jpg';
import chefManel from '../assets/chefs/mme manel2.jpg';
import eventPlaceholder from '../assets/event-placeholder.svg';
import heroVisual from '../assets/hero-visual.svg';
import mapPlaceholder from '../assets/map-placeholder.svg';

export const brand = {
  name: 'Ã‰cole Jasmin',
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
  { label: "L'Ã©cole", href: '#ecole' },
  { label: 'Chefs', href: '#chefs' },
  { label: 'Ã‰vÃ©nements', href: '#evenements' },
  { label: 'Contact', href: '#contact' },
];

export const heroContent = {
  image: heroVisual,
  eyebrow: 'Cuisine - PÃ¢tisserie - Formation reconnue',
  title: 'Formez-vous aux mÃ©tiers de la cuisine et de la pÃ¢tisserie',
  subtitle: "Une formation professionnelle claire, sÃ©rieuse et reconnue par l'Ã‰tat",
  highlights: [
    'Formation pratique',
    'Encadrement par des chefs formateurs',
    'PrÃ©paration Ã  la vie professionnelle',
  ],
};

export const aboutContent = {
  image: aboutAtelier,
  text:
    "Ã‰cole Jasmin est un centre de formation professionnelle en cuisine et en pÃ¢tisserie. Nous proposons des parcours structurÃ©s avec des diplÃ´mes reconnus par l'Ã‰tat.",
  description:
    'Les Ã©tudiants Ã©voluent dans un cadre moderne, accueillant et axÃ© sur la pratique.',
  stats: [
    { value: 500, prefix: '+', label: 'Ã©tudiants formÃ©s' },
    { value: 10, prefix: '+', label: 'formateurs qualifiÃ©s' },
    { label: 'Formation reconnue', detail: "Parcours encadrÃ© et reconnu par l'Ã‰tat" },
  ],
};

export const programHighlights = [
  {
    id: 'formation-base',
    title: 'Formation de base',
    description:
      'Une formation pour maÃ®triser les bases de la cuisine, de la pÃ¢tisserie et du travail en atelier.',
  },
  {
    id: 'formation-acceleree',
    title: 'Formation accÃ©lÃ©rÃ©e',
    description:
      'Un rythme intensif pour progresser plus vite et accÃ©der plus rapidement au monde professionnel.',
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
    title: 'BTP PÃ¢tisserie',
    description:
      'Un parcours pour apprendre les bases de la pÃ¢tisserie, les desserts et les finitions professionnelles.',
    icon: 'award',
  },
  {
    title: 'CAP Cuisine et PÃ¢tisserie',
    description:
      'Une formation polyvalente pour apprendre la cuisine et la pÃ¢tisserie dans un mÃªme parcours.',
    icon: 'badge',
  },
  {
    title: 'CC Cuisine',
    description:
      'Un programme pratique pour apprendre les gestes essentiels du mÃ©tier en cuisine.',
    icon: 'book',
  },
  {
    title: 'CC PÃ¢tisserie',
    description:
      'Une formation pratique pour acquÃ©rir de bonnes bases en pÃ¢tisserie.',
    icon: 'sparkles',
  },
];

export const chefs = [
  {
    name: 'Chef Hassen Allagui',
    specialty: 'PÃ¢tisserie',
    bio: "Il accompagne les Ã©tudiants dans l'apprentissage des bases, de la prÃ©cision technique et de l'organisation du travail.",
    image: chefHassen,
    imagePosition: 'center 18%',
  },
  {
    name: 'Chef Khalil Arfi',
    specialty: 'Cuisine',
    bio: 'Il accompagne les Ã©tudiants dans la pratique, la rigueur professionnelle et le travail en cuisine.',
    image: chefKhalil,
    imagePosition: 'center 14%',
  },
  {
    name: 'Cheffe Manel Sallemi',
    specialty: 'Formation pratique',
    bio: 'Elle accompagne les Ã©tudiants avec attention afin de soutenir leur progression tout au long de la formation.',
    image: chefManel,
    imagePosition: 'center 12%',
  },
];

export const events = [
  {
    title: 'JournÃ©e de remise des diplÃ´mes',
    date: 'Juin 2026',
    description:
      'Une journÃ©e pour cÃ©lÃ©brer la fin de formation et remettre les diplÃ´mes aux Ã©tudiants.',
    image: eventPlaceholder,
  },
  {
    title: 'DÃ®ner gastronomique',
    date: 'Octobre 2026',
    description:
      'Un Ã©vÃ©nement pendant lequel les Ã©tudiants prÃ©pareront et serviront un menu complet.',
    image: eventPlaceholder,
  },
  {
    title: 'Atelier masterclass',
    date: "Toute l'annÃ©e",
    description:
      'Des ateliers spÃ©ciaux pour approfondir les techniques en cuisine et en pÃ¢tisserie.',
    image: eventPlaceholder,
  },
];

export const newsItems = [
  {
    title: 'Inscriptions 2026 ouvertes',
    excerpt: 'Les inscriptions en cuisine et en pÃ¢tisserie sont maintenant ouvertes.',
  },
  {
    title: 'Nouveaux ateliers pratiques',
    excerpt: 'De nouveaux ateliers ont Ã©tÃ© ajoutÃ©s pour renforcer la pratique sur le terrain.',
  },
  {
    title: 'Accueil des Ã©tudiants Ã©trangers',
    excerpt: "L'Ã©cole accompagne aussi les Ã©tudiants Ã©trangers dans la prÃ©paration de leur arrivÃ©e.",
  },
];

export const faqItems = [
  {
    question: 'Quels diplÃ´mes sont proposÃ©s ?',
    answer:
      "L'Ã©cole propose plusieurs formations en cuisine et en pÃ¢tisserie, avec diffÃ©rents niveaux de diplÃ´me.",
  },
  {
    question: "Quelles sont les conditions d'inscription ?",
    answer:
      "L'inscription se fait sur dossier. L'Ã©quipe vous accompagne pour choisir la formation la plus adaptÃ©e.",
  },
  {
    question: "OÃ¹ se trouve l'Ã©cole ?",
    answer:
      "L'Ã©cole est situÃ©e Route de Tunis km 6, Sakiet Ezzit, Ã  Sfax, en Tunisie.",
  },
  {
    question: 'Quels types de formation sont disponibles ?',
    answer:
      'Vous pouvez choisir une formation de base, une formation accÃ©lÃ©rÃ©e ou des ateliers pratiques selon votre objectif.',
  },
];

export const studentSupport = [
  "Aide avant l'arrivÃ©e",
  'Orientation selon votre niveau',
  "Suivi simple pour bien commencer la formation",
];

export const sponsors = [
  {
    name: 'Raddison',
    category: 'Partenaire',
    icon: 'award',
  },
  {
    name: 'Gourmandise',
    category: 'Fournisseur',
    icon: 'coffee',
  },
  {
    name: 'Wayba',
    category: 'Partenaire',
    icon: 'croissant',
  },
];

export const footerLinks = [
  { label: 'Formations', href: '#formations' },
  { label: 'Chefs', href: '#chefs' },
  { label: 'Ã‰vÃ©nements', href: '#evenements' },
  { label: 'Contact', href: '#contact' },
];

export const imagery = {
  map: mapPlaceholder,
};

