import chefHassen from '../assets/chefs/Hassen ALLAGUI.jpg';
import chefKhalil from '../assets/chefs/Khalil ARFI.jpg';
import chefManel from '../assets/chefs/Manel SALLEMI.jpg';
import cuisineImage from '../assets/cuisine.jpg';
import sweetImage from '../assets/sweet.jpg';
import sweetImageTwo from '../assets/sweet2.jpg';
import schoolLogo from '../assets/logo.png';
import Reveal from '../components/Reveal';

const sharedTheoreticalModules = [
  'Hygiene et securite alimentaire.',
  'Communication professionnelle.',
  'Francais, anglais, 3eme langue.',
  'Service et relation client.',
  'Gestion de base.',
  'Travail en equipe.',
  'Discipline et rythme de production.',
];

const formationProgramsData = [
  {
    id: 'formation-base',
    title: 'Diplome de Patisserie',
    image: sweetImage,
    imagePosition: 'center center',
    intro:
      "Cette formation vise a fournir aux etudiants les connaissances necessaires pour devenir patissiers. Au cours de cette formation, les etudiants apprennent a confectionner des produits varies tels que desserts, patisseries et chocolats.",
    outro:
      "Cette formation est destinee aux adultes passionnes de patisserie et aux professionnels cherchant a elargir leur champ de competences. En cycle de patisserie, vous pouvez etudier des cours tres differents en fonction du diplome qui vous convient.",
    cards: [
      {
        id: 'formation-cc-patisserie',
        label: 'CC Patisserie',
        subtitle: 'Certificat de Competence',
        duration: 'Duree 1 ans : 10 mois de formation et 2 mois de stage',
        level: 'Niveau requis : 6 eme année primaires',
      },
      {
        id: 'formation-btp-patisserie',
        label: 'BTP Patisserie',
        subtitle: 'Brevet de technicien professionnel',
        duration: 'Duree 2 ans : 11 mois de formation et 4 mois de stage',
        level: 'Niveau requis : 2eme annee secondaire accomplie ou CAP',
      },
    ],
    modulesLeft: [
      'Les bases avec l\'utilisation des matieres premieres, du materiel et la fabrication des entets.',
      'Realisation des pates.',
      'Realisation des cremes, des mousses et des garnitures.',
      'Realisation des glaces et sorbets.',
      'Realisation des petits fours.',
      'Realisation des decorations en patisserie et dressage du poste de travail.',
    ],
    modulesRight: sharedTheoreticalModules,
  },
  {
    id: 'formation-cuisine',
    title: 'Diplome de Cuisine',
    image: cuisineImage,
    imagePosition: 'center center',
    intro:
      "Cette formation vise a fournir aux etudiants les connaissances necessaires pour devenir cuisinier. Au cours de cette formation, les etudiants apprennent a cuisiner et apprennent la gastronomie.",
    outro:
      "En cycle de cuisine, vous pouvez etudier des cours tres differents en fonction du diplome qui vous convient.",
    cards: [
      {
        id: 'formation-cc-cuisine',
        label: 'CC Cuisine',
        subtitle: 'Certificat de Competence',
        duration: 'Duree 1 ans : 10 mois de formation et 2 mois de stage',
        level: 'Niveau requis : 6 eme année primaires',
      },
      {
        id: 'formation-btp-cuisine',
        label: 'BTP Cuisine',
        subtitle: 'Brevet de technicien professionnel',
        duration: 'Duree 2 ans : 11 mois de formation et 4 mois de stage',
        level: 'Niveau requis : 2eme annee secondaire accomplie ou CAP',
      },
    ],
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
    id: 'formation-cap-cuisine-patisserie',
    title: 'Diplome de Cuisine et Patisseries',
    image: sweetImageTwo,
    imagePosition: 'center center',
    intro:
      "Cette formation vise a fournir aux etudiants une base polyvalente en cuisine et en patisserie. Elle permet d'acquerir les techniques essentielles, le sens de l'organisation et une maitrise progressive des productions salees et sucrees.",
    outro:
      "Le diplome CAP s'adresse aux etudiants souhaitant construire un profil complet et evolutif, capable de s'adapter aux exigences de la cuisine professionnelle comme de la patisserie.",
    cards: [
      {
        id: 'formation-cap',
        label: 'CAP Cuisine et Patisseries',
        subtitle: 'Certificat d aptitude professionnelle',
        duration: 'Duree 1 ans : 10 mois de formation et 2 mois de stage',
        level: 'Niveau requis : niveau 9 eme année secondaire',
      },
    ],
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

function ProgramCard({ item }) {
  return (
    <article
      id={item.id}
      className="rounded-[8px] border border-jasmin-brown/10 bg-white p-4 shadow-[0_20px_60px_-42px_rgba(74,58,42,0.35)]"
    >
      <div className="space-y-3">
        <div>
          <h3 className="font-display text-[1.4rem] leading-none text-jasmin-dark">{item.label}</h3>
          <p className="mt-2 text-[0.92rem] font-medium leading-5 text-jasmin-brown">{item.subtitle}</p>
        </div>
        <div className="space-y-2 text-sm leading-6 text-jasmin-dark/72">
          <p>{item.duration}</p>
          <p>{item.level}</p>
        </div>
      </div>
    </article>
  );
}

function ModuleList({ title, items }) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold text-jasmin-brown">{title}</p>
      <ul className="space-y-2 text-sm leading-7 text-jasmin-dark/72">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3"
          >
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-jasmin-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FormationsSection() {
  return (
    <section
      id="formations"
      className="section-shell scroll-mt-32 bg-[linear-gradient(180deg,rgba(237,230,218,0.45),rgba(247,245,240,0))]"
    >
      <div className="site-container space-y-20">
        {formationProgramsData.map((program, index) => (
          <Reveal
            key={program.title}
            delay={index * 0.06}
          >
            <div
              id={program.id}
              className="space-y-8 scroll-mt-32"
            >
              <div className="max-w-4xl space-y-4">
                <div className="inline-flex items-center gap-3 rounded-full border border-jasmin-brown/12 bg-white/78 px-3 py-2 shadow-[0_12px_30px_-24px_rgba(74,58,42,0.38)]">
                  <img
                    src={schoolLogo}
                    alt="Logo Ecole Jasmin"
                    className="h-7 w-7 rounded-full object-cover"
                  />
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-jasmin-brown">
                    Ecole Jasmin
                  </span>
                </div>
                <h2 className="font-display text-4xl leading-tight text-jasmin-dark sm:text-5xl">
                  {program.title}
                </h2>
                <p className="text-sm leading-8 text-jasmin-dark/74 sm:text-base">{program.intro}</p>
                <p className="text-sm leading-8 text-jasmin-dark/74 sm:text-base">{program.outro}</p>
              </div>

              <div className="grid items-start gap-4 xl:grid-cols-[0.98fr_0.82fr_0.82fr]">
                <div className="overflow-hidden rounded-[8px] bg-[#e9ddcb] shadow-[0_20px_60px_-42px_rgba(74,58,42,0.35)]">
                  <img
                    src={program.image}
                    alt={program.title}
                    loading="lazy"
                    className="min-h-[12rem] w-full object-cover xl:h-[12rem]"
                    style={{ objectPosition: program.imagePosition }}
                  />
                </div>

                {program.cards.map((item) => (
                  <ProgramCard
                    key={item.id}
                    item={item}
                  />
                ))}
              </div>

              <div className="grid gap-8 border-t border-jasmin-brown/10 pt-8 lg:grid-cols-2">
                <ModuleList
                  title="Modules techniques :"
                  items={program.modulesLeft}
                />
                <ModuleList
                  title="Modules theoriques :"
                  items={program.modulesRight}
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
