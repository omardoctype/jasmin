import cuisineImage from '../assets/cuisine.jpg';
import sweetImage from '../assets/sweet.jpg';
import sweetImageTwo from '../assets/sweet2.jpg';
import ccPatisserieImage from '../assets/ccpat.jpg';
import btpPatisserieImage from '../assets/btpp.jpg';
import btpCuisineImage from '../assets/btpp2.jpg';
import ccCuisineImage from '../assets/btpp3.jpg';
import capImage from '../assets/capp5.jpg';

const sharedTheoreticalModules = [
  'Hygiène et sécurité alimentaire.',
  'Communication professionnelle.',
  'Français, anglais et 3e langue.',
  'Service et relation client.',
  'Gestion de base.',
  'Travail en équipe.',
  'Discipline et rythme de production.',
];

const sharedImageSettings = {
  imageFit: 'cover',
  imagePosition: 'center 50%',
};

export const formationsCatalog = [
  {
    slug: 'cc-patisserie',
    label: 'CC Pâtisserie',
    family: 'Pâtisserie',
    diploma: 'Certificat de compétence',
    duration: '8 mois de formation + 1 mois de stage',
    level: 'Niveau requis : 6e année primaire',
    image: ccCuisineImage,
    ...sharedImageSettings,
    imageFit: 'contain',
    imageBackgroundClass: 'bg-transparent',
    imagePosition: 'center center',
    intro:
      "Cette spécialité permet d'acquérir les bases techniques indispensables pour entrer dans le monde de la pâtisserie professionnelle avec une pratique encadrée et progressive.",
    modulesLeft: [
      "Les bases avec l'utilisation des matières premières et du matériel.",
      'Réalisation des pâtes et préparations de base.',
      'Réalisation des crèmes, mousses et garnitures.',
      'Réalisation des glaces et sorbets.',
      'Réalisation des petits fours.',
      'Décoration, finitions et organisation du poste de travail.',
    ],
    modulesRight: sharedTheoreticalModules,
  },
  {
    slug: 'btp-patisserie',
    label: 'BTP Pâtisserie',
    family: 'Pâtisserie',
    diploma: 'Brevet de Technicien Professionnel',
    duration: '20 mois de formation + 2 mois de stage',
    level: 'Niveau requis : 2e année secondaire accomplie ou CAP',
    image: ccPatisserieImage,
    ...sharedImageSettings,
    imageFit: 'contain',
    imageBackgroundClass: 'bg-transparent',
    imagePosition: 'center center',
    intro:
      "Le parcours BTP en pâtisserie approfondit les techniques de production, la régularité, la présentation et l'organisation professionnelle en laboratoire.",
    modulesLeft: [
      'Réalisation avancée des pâtes, crèmes et entremets.',
      'Viennoiseries, desserts de boutique et productions de laboratoire.',
      'Travail du chocolat, sucre et finitions professionnelles.',
      'Organisation de production et gestion du poste.',
      'Dressage, présentation et contrôle qualité.',
      'Mise en situation professionnelle en atelier.',
    ],
    modulesRight: sharedTheoreticalModules,
  },
  {
    slug: 'cc-cuisine',
    label: 'CC Cuisine',
    family: 'Cuisine',
    diploma: 'Certificat de compétence',
    duration: '7 mois de formation + 1 mois de stage',
    level: 'Niveau requis : 6e année primaire',
    image: btpPatisserieImage,
    ...sharedImageSettings,
    imageFit: 'contain',
    imageBackgroundClass: 'bg-transparent',
    imagePosition: 'center center',
    intro:
      "Cette formation apporte les fondamentaux de la cuisine professionnelle, du poste de travail jusqu'aux techniques de préparation chaude et froide.",
    modulesLeft: [
      'Techniques de base en cuisine professionnelle.',
      'Préparation chaude et froide.',
      'Organisation du poste et gestion des cuissons.',
      'Dressage et présentation des assiettes.',
      'Connaissance des produits et matières premières.',
      'Application pratique en laboratoire.',
    ],
    modulesRight: sharedTheoreticalModules,
  },
  {
    slug: 'btp-cuisine',
    label: 'BTP Cuisine',
    family: 'Cuisine',
    diploma: 'Brevet de Technicien Professionnel',
    duration: '20 mois de formation + 2 mois de stage',
    level: 'Niveau requis : 2e année secondaire accomplie ou CAP',
    image: btpCuisineImage,
    ...sharedImageSettings,
    imageFit: 'contain',
    imageBackgroundClass: 'bg-transparent',
    imagePosition: 'center center',
    intro:
      "Le BTP Cuisine forme des profils plus autonomes, capables de produire, d'organiser et d'exécuter en respectant les standards d'une cuisine professionnelle.",
    modulesLeft: [
      'Cuisine chaude, froide et techniques avancées.',
      'Organisation de brigade et rythme de production.',
      'Sauces, cuissons et travail des produits.',
      'Présentation, dressage et finition des assiettes.',
      'Hygiène, contrôle qualité et rigueur professionnelle.',
      'Pratique intensive en atelier et stage.',
    ],
    modulesRight: sharedTheoreticalModules,
  },
  {
    slug: 'cap',
    label: 'CAP',
    family: 'Cuisine & pâtisserie',
    diploma: "Certificat d'Aptitude Professionnelle",
    duration: '1 an : 10 mois de formation et 2 mois de stage',
    level: 'Niveau requis : niveau 9e année secondaire',
    image: capImage,
    ...sharedImageSettings,
    imageFit: 'contain',
    imageBackgroundClass: 'bg-transparent',
    imagePosition: 'center center',
    intro:
      "Le CAP propose une base polyvalente en cuisine et en pâtisserie pour construire un profil complet, pratique et évolutif.",
    modulesLeft: [
      'Bases techniques en cuisine chaude et froide.',
      'Initiation à la pâtisserie et aux préparations sucrées.',
      'Préparation des sauces, crèmes et garnitures.',
      'Organisation du poste de travail et gestion du matériel.',
      'Dressage, présentation et finitions des productions.',
      'Mise en pratique en atelier et en laboratoire.',
    ],
    modulesRight: sharedTheoreticalModules,
  },
];

export function getFormationBySlug(slug) {
  return formationsCatalog.find((formation) => formation.slug === slug) ?? null;
}

