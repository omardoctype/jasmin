import aboutAtelier from '../assets/about-atelier.svg';
import brandMark from '../assets/logo.png';
import chefHassen from '../assets/chefs/Hassen ALLAGUI.jpg';
import chefKhalil from '../assets/chefs/Khalil ARFI.jpg';
import chefManel from '../assets/chefs/Manel SALLEMI.jpg';
import eventPlaceholder from '../assets/event-placeholder.svg';
import heroVisual from '../assets/hero-visual.svg';
import mapPlaceholder from '../assets/map-placeholder.svg';

export const brand = {
  name: 'École Jasmin',
  subtitle: 'Centre de Formation Professionnelle',
  mark: brandMark,
};

export const contactDetails = {
  phone: '52 694 594',
  email: 'ecole.jasmin2012@gmail.com',
  address: 'Route de Tunis km 6, Sakiet Ezzit, Sfax, Tunisia',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Route+de+Tunis+km+6+Sakiet+Ezzit+Sfax+Tunisia',
};

export const navigation = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Formation de base', href: '#formation-base' },
  { label: 'Formation accélérée', href: '#formation-acceleree' },
  { label: 'L’école', href: '#ecole' },
  { label: 'Étudiant étranger', href: '#etudiant-etranger' },
  { label: 'Évènements', href: '#evenements' },
  { label: 'Actualités', href: '#actualites' },
  { label: 'Chefs', href: '#chefs' },
];

export const heroContent = {
  image: heroVisual,
  eyebrow: 'Cuisine • Pâtisserie • Diplôme d’État',
  title: 'Devenez un Chef Professionnel en Cuisine & Pâtisserie',
  subtitle: "Formation professionnelle certifiée et reconnue par l'État",
  highlights: [
    'Cuisine d’application premium',
    'Encadrement par des chefs formateurs',
    'Immersion orientée métier',
  ],
};

export const aboutContent = {
  image: aboutAtelier,
  text:
    'مركز التكوين المهني الياسمين / JASMIN هو مؤسسة تكوينية تقدم برامج احترافية في الطبخ و المرطبات، مع شهادات معترف بها من طرف الدولة.',
  description:
    'Un environnement exigeant et chaleureux pour apprendre les fondamentaux de la cuisine, de la pâtisserie et du service avec une approche résolument professionnelle.',
  stats: [
    { value: 500, prefix: '+', label: 'étudiants accompagnés' },
    { value: 10, prefix: '+', label: 'formateurs experts' },
    { label: 'Formation reconnue', detail: "Parcours certifié et encadré par l'État" },
  ],
};

export const programHighlights = [
  {
    id: 'formation-base',
    title: 'Formation de base',
    description:
      'Un socle complet pour maîtriser les techniques essentielles, l’organisation en laboratoire et les gestes professionnels.',
  },
  {
    id: 'formation-acceleree',
    title: 'Formation accélérée',
    description:
      'Un format intensif pensé pour progresser vite, consolider la pratique et préparer une insertion rapide sur le marché.',
  },
];

export const formations = [
  {
    title: 'شهادة المؤهل التقني المهني في الطبخ',
    description:
      'Programme structuré pour apprendre la cuisine professionnelle, l’organisation de brigade et les bases de la gastronomie moderne.',
    icon: 'chefHat',
  },
  {
    title: 'شهادة المؤهل التقني المهني في المرطبات',
    description:
      'Parcours premium dédié aux techniques de pâtisserie, au dressage raffiné et à la précision des productions sucrées.',
    icon: 'award',
  },
  {
    title: 'شهادة الكفاءة المهنية في الطبخ و المرطبات',
    description:
      'Une formation polyvalente pour développer une vraie double compétence en cuisine et en pâtisserie.',
    icon: 'badge',
  },
  {
    title: 'شهادة المهارة في الطبخ',
    description:
      'Parcours orienté pratique métier pour gagner en autonomie sur les bases culinaires, la cuisson et le dressage.',
    icon: 'book',
  },
  {
    title: 'شهادة المهارة في المرطبات',
    description:
      'Un format accessible pour perfectionner les préparations sucrées, les textures, les finitions et la régularité.',
    icon: 'sparkles',
  },
];

export const chefs = [
  {
    name: 'Chef Hassen Allagui',
    specialty: 'Pâtisserie fine',
    bio: 'Accompagne les étudiants sur la précision technique, la maîtrise des sauces et le sens du détail en service.',
    image: chefHassen,
    imagePosition: 'center 18%',
  },
  {
    name: 'Chef Khalil Arfi',
    specialty: 'Cuisine gastronomique',
    bio: 'Spécialiste des entremets, viennoiseries et finitions premium avec une pédagogie très axée sur le geste juste.',
    image: chefKhalil,
    imagePosition: 'center 14%',
  },
  {
    name: 'Cheffe Manel Sallemi',
    specialty: 'Cuisine d’application',
    bio: 'Met l’accent sur le rythme réel du laboratoire, l’organisation et les standards attendus en environnement pro.',
    image: chefManel,
    imagePosition: 'center 12%',
  },
];

export const events = [
  {
    title: 'Graduation Day',
    date: 'Juin 2026',
    description:
      'Une célébration élégante des promotions diplômées avec remise des certificats et présentation des meilleures réalisations.',
    image: eventPlaceholder,
  },
  {
    title: 'Dîner gastronomique',
    date: 'Octobre 2026',
    description:
      'Une soirée immersive où les étudiants composent et servent un menu signature devant familles, invités et professionnels.',
    image: eventPlaceholder,
  },
  {
    title: 'Masterclass',
    date: 'Toute l’année',
    description:
      'Des sessions ciblées autour des techniques de pointe, du dressage contemporain et de la pâtisserie de prestige.',
    image: eventPlaceholder,
  },
];

export const newsItems = [
  {
    title: 'Ouverture des inscriptions 2026',
    excerpt: 'Les nouvelles sessions en cuisine et pâtisserie sont désormais ouvertes pour les admissions.',
  },
  {
    title: 'Nouveaux ateliers pratiques',
    excerpt: 'Des formats plus immersifs pour renforcer la cadence, la précision et la confiance en situation réelle.',
  },
  {
    title: 'Accompagnement étudiant étranger',
    excerpt: "Un parcours d’accueil dédié pour préparer l’arrivée, l’intégration et le démarrage de la formation.",
  },
];

export const faqItems = [
  {
    question: 'Diplômes proposés ?',
    answer:
      'L’école propose des parcours en cuisine et en pâtisserie allant des certificats de compétence jusqu’aux formations qualifiantes reconnues.',
  },
  {
    question: 'Conditions d’inscription ?',
    answer:
      'Les inscriptions se font sur dossier avec échange d’orientation. L’équipe vous accompagne pour choisir le parcours le plus adapté.',
  },
  {
    question: 'Localisation ?',
    answer:
      'Le centre est situé Route de Tunis km 6, Sakiet Ezzit, à Sfax, avec un accès direct pour les étudiants locaux et internationaux.',
  },
  {
    question: 'Types de formation ?',
    answer:
      'Vous pouvez rejoindre des formations de base, accélérées, professionnalisantes et des ateliers de perfectionnement tout au long de l’année.',
  },
];

export const studentSupport = [
  'Accompagnement administratif avant l’arrivée',
  'Orientation personnalisée vers le bon rythme de formation',
  'Suivi dédié pour une intégration fluide au centre',
];

export const sponsors = [
  {
    name: 'Maison Gourmet',
    category: 'Partenaire premium',
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
    name: 'Marché Sélect',
    category: 'Distribution',
    icon: 'store',
  },
];

export const footerLinks = [
  { label: 'Formations', href: '#formations' },
  { label: 'Chefs', href: '#chefs' },
  { label: 'Évènements', href: '#evenements' },
  { label: 'Contact', href: '#contact' },
];

export const imagery = {
  map: mapPlaceholder,
};
