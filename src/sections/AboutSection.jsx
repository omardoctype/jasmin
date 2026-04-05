import { Award, BookOpen, ChefHat } from 'lucide-react';
import chefManel from '../assets/chefs/Manel SALLEMI.jpg';
import schoolLogo from '../assets/logo.png';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const values = [
  {
    title: 'Notre ambition',
    text: "Former une nouvelle generation de professionnels en cuisine et en patisserie avec exigence, confiance et sens du metier.",
    icon: ChefHat,
  },
  {
    title: 'Notre vision',
    text: "Offrir un cadre d'apprentissage moderne, humain et reconnu, capable d'accompagner chaque etudiant vers une insertion solide.",
    icon: Award,
  },
  {
    title: 'Notre approche',
    text: "Associer la pratique, la rigueur technique et l'accompagnement pedagogique pour construire des competences utiles et durables.",
    icon: BookOpen,
  },
];

export default function AboutSection() {
  return (
    <section
      id="ecole"
      className="section-shell scroll-mt-32"
    >
      <div className="site-container space-y-14">
        <SectionHeading
          eyebrow="L'ecole"
          eyebrowLogo={schoolLogo}
          title="Une ecole pensee pour l'excellence culinaire"
          description="Ecole Jasmin developpe une formation serieuse, chaleureuse et professionnalisante pour preparer les talents de demain en cuisine et en patisserie."
        />

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="surface-card p-6 sm:p-8">
            <div className="space-y-6">
              <div className="section-tag">Notre vision commune</div>
              <div className="space-y-4">
                <h3 className="max-w-3xl font-display text-4xl leading-tight text-jasmin-dark sm:text-5xl">
                  Promouvoir l'excellence culinaire a travers une formation reconnue, concrete et inspiree du terrain.
                </h3>
                <p className="max-w-3xl text-sm leading-8 text-jasmin-dark/74 sm:text-base">
                  Notre centre accompagne les apprenants dans un environnement structure, avec des parcours diplomants,
                  une transmission rigoureuse des gestes professionnels et une vraie culture de la discipline, de la
                  precision et du service.
                </p>
                <p className="max-w-3xl text-sm leading-8 text-jasmin-dark/74 sm:text-base">
                  L'objectif est clair: permettre a chaque etudiant de progresser avec confiance, d'acquerir des bases
                  solides et de construire un avenir professionnel credible en Tunisie comme a l'international.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="surface-card overflow-hidden p-3">
              <img
                src={chefManel}
                alt="Cheffe Manel Sallemi, fondatrice"
                loading="lazy"
                className="h-[25rem] w-full rounded-[24px] object-cover sm:h-[30rem]"
                style={{ objectPosition: 'center 10%' }}
              />
              <div className="space-y-3 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-jasmin-brown">
                  Fondatrice
                </p>
                <h3 className="font-display text-4xl leading-none text-jasmin-dark">
                  Cheffe Manel Sallemi
                </h3>
                <p className="text-sm leading-8 text-jasmin-dark/72">
                  Figure fondatrice de l'ecole, elle porte une vision exigeante et humaine de la formation
                  professionnelle, avec une attention particuliere a la qualite du geste, a la progression des etudiants
                  et a la transmission des standards du metier.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {values.map(({ title, text, icon: Icon }, index) => (
            <Reveal
              key={title}
              delay={index * 0.06}
            >
              <article className="surface-card h-full p-6 sm:p-7">
                <div className="space-y-5">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-jasmin-dark text-white shadow-[0_18px_34px_-24px_rgba(74,58,42,0.95)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display text-3xl leading-none text-jasmin-dark">{title}</h3>
                    <p className="text-sm leading-8 text-jasmin-dark/72">{text}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
