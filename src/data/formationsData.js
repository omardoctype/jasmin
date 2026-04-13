import cuisineImage from '../assets/cuisine.jpg';
import sweetImage from '../assets/sweet.jpg';
import sweetImageTwo from '../assets/sweet2.jpg';

const sharedTheoreticalModules = [
  'Hygiene et securite alimentaire.',
  'Communication professionnelle.',
  'Francais, anglais et 3eme langue.',
  'Service et relation client.',
  'Gestion de base.',
  'Travail en equipe.',
  'Discipline et rythme de production.',
];

export const formationsCatalog = [
  {
    slug: 'cc-patisserie',
    label: 'CC Patisserie',
    family: 'Patisserie',
    diploma: 'Certificat de Competence',
    duration: '1 an : 10 mois de formation et 2 mois de stage',
    level: 'Niveau requis : 6eme annee primaire',
    image: sweetImage,
    imagePosition: 'center center',
    intro:
      "Cette specialite permet d'acquerir les bases techniques indispensables pour entrer dans le monde de la patisserie professionnelle avec une pratique encadree et progressive.",
    modulesLeft: [
      "Les bases avec l'utilisation des matieres premieres et du materiel.",
      'Realisation des pates et preparations de base.',
      'Realisation des cremes, mousses et garnitures.',
      'Realisation des glaces et sorbets.',
      'Realisation des petits fours.',
      'Decoration, finitions et organisation du poste de travail.',
    ],
    modulesRight: sharedTheoreticalModules,
  },
  {
    slug: 'btp-patisserie',
    label: 'BTP Patisserie',
    family: 'Patisserie',
    diploma: 'Brevet de Technicien Professionnel',
    duration: '2 ans : 11 mois de formation et 4 mois de stage',
    level: 'Niveau requis : 2eme annee secondaire accomplie ou CAP',
    image: sweetImage,
    imagePosition: 'center center',
    intro:
      "Le parcours BTP en patisserie approfondit les techniques de production, la regularite, la presentation et l'organisation professionnelle en laboratoire.",
    modulesLeft: [
      'Realisation avancee des pates, cremes et entremets.',
      'Viennoiseries, desserts de boutique et productions de laboratoire.',
      'Travail du chocolat, sucre et finitions professionnelles.',
      'Organisation de production et gestion du poste.',
      'Dressage, presentation et controle qualite.',
      'Mise en situation professionnelle en atelier.',
    ],
    modulesRight: sharedTheoreticalModules,
  },
  {
    slug: 'cc-cuisine',
    label: 'CC Cuisine',
    family: 'Cuisine',
    diploma: 'Certificat de Competence',
    duration: '1 an : 10 mois de formation et 2 mois de stage',
    level: 'Niveau requis : 6eme annee primaire',
    image: cuisineImage,
    imagePosition: 'center center',
    intro:
      "Cette formation apporte les fondamentaux de la cuisine professionnelle, du poste de travail jusqu'aux techniques de preparation chaude et froide.",
    modulesLeft: [
      'Techniques de base en cuisine professionnelle.',
      'Preparation chaude et froide.',
      'Organisation du poste et gestion des cuissons.',
      'Dressage et presentation des assiettes.',
      'Connaissance des produits et matieres premieres.',
      'Application pratique en laboratoire.',
    ],
    modulesRight: sharedTheoreticalModules,
  },
  {
    slug: 'btp-cuisine',
    label: 'BTP Cuisine',
    family: 'Cuisine',
    diploma: 'Brevet de Technicien Professionnel',
    duration: '2 ans : 11 mois de formation et 4 mois de stage',
    level: 'Niveau requis : 2eme annee secondaire accomplie ou CAP',
    image: cuisineImage,
    imagePosition: 'center center',
    intro:
      "Le BTP Cuisine forme des profils plus autonomes, capables de produire, organiser et executer en respectant les standards d'une cuisine professionnelle.",
    modulesLeft: [
      'Cuisine chaude, froide et techniques avancees.',
      'Organisation de brigade et rythme de production.',
      'Sauces, cuissons et travail des produits.',
      'Presentation, dressage et finition des assiettes.',
      'Hygiene, controle qualite et rigueur professionnelle.',
      'Pratique intensive en atelier et stage.',
    ],
    modulesRight: sharedTheoreticalModules,
  },
  {
    slug: 'cap',
    label: 'CAP',
    family: 'Cuisine & Patisseries',
    diploma: "Certificat d'Aptitude Professionnelle",
    duration: '1 an : 10 mois de formation et 2 mois de stage',
    level: 'Niveau requis : niveau 9eme annee secondaire',
    image: sweetImageTwo,
    imagePosition: 'center center',
    intro:
      "Le CAP propose une base polyvalente en cuisine et en patisserie pour construire un profil complet, pratique et evolutif.",
    modulesLeft: [
      'Bases techniques en cuisine chaude et froide.',
      'Initiation a la patisserie et aux preparations sucrees.',
      'Preparation des sauces, cremes et garnitures.',
      'Organisation du poste de travail et gestion du materiel.',
      'Dressage, presentation et finitions des productions.',
      'Mise en pratique en atelier et en laboratoire.',
    ],
    modulesRight: sharedTheoreticalModules,
  },
];

export function getFormationBySlug(slug) {
  return formationsCatalog.find((formation) => formation.slug === slug) ?? null;
}
