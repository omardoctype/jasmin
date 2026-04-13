import { motion, useReducedMotion } from 'framer-motion';
import { Award, BookOpen, ChefHat } from 'lucide-react';
import chefManel from '../assets/chefs/mme manel2.jpg';
import schoolLogo from '../assets/logo.png';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const values = [
  {
    title: 'Notre ambition',
    text: 'Former des professionnels competents en cuisine et en patisserie.',
    icon: ChefHat,
  },
  {
    title: 'Notre vision',
    text: "Offrir un cadre moderne, serieux et favorable a un apprentissage de qualite.",
    icon: Award,
  },
  {
    title: 'Notre approche',
    text: 'Associer la pratique, la rigueur technique et un accompagnement regulier.',
    icon: BookOpen,
  },
];

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="ecole"
      className="section-shell scroll-mt-32"
    >
      <div className="site-container space-y-14">
        <SectionHeading
          eyebrow="L'ecole"
          eyebrowLogo={schoolLogo}
          title="Une ecole serieuse, moderne et orientee vers la pratique"
          description="Ecole Jasmin propose une formation professionnelle en cuisine et en patisserie, avec un apprentissage concret et progressif."
        />

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal
            className="surface-card hover-glow p-6 sm:p-8"
            variant="fade-right"
          >
            <div className="space-y-6">
              <div className="section-tag">Notre ecole</div>
              <div className="space-y-4">
                <h3 className="max-w-3xl font-display text-4xl leading-tight text-jasmin-dark sm:text-5xl">
                  Se former dans un cadre professionnel et bien structure.
                </h3>
                <p className="max-w-3xl text-sm leading-8 text-jasmin-dark/74 sm:text-base">
                  Notre centre accompagne les etudiants dans lapprentissage de la cuisine et de la patisserie, dans un environnement organise et favorable a la progression.
                </p>
                <p className="max-w-3xl text-sm leading-8 text-jasmin-dark/74 sm:text-base">
                  Notre objectif est de transmettre des bases solides, de faire progresser chaque etudiant et de preparer une integration reelle dans le monde professionnel.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.06}
            variant="zoom-in"
          >
            <div className="surface-card hover-glow overflow-hidden p-3">
              <img
                src={chefManel}
                alt="Cheffe Manel Sallemi, fondatrice"
                loading="lazy"
                className="h-[25rem] w-full rounded-[24px] object-cover transition-transform duration-700 ease-out hover:scale-[1.03] sm:h-[30rem]"
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
                  Fondatrice de l ecole, elle veille a une formation serieuse, pratique et adaptee aux attentes du metier.
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
              variant="zoom-in"
            >
              <motion.article
                className="group surface-card relative h-full overflow-hidden p-6 sm:p-7"
                whileHover={reduceMotion ? undefined : { y: -8 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(135deg,rgba(183,154,107,0.16),transparent_36%,rgba(255,255,255,0.92)_68%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <motion.div
                  aria-hidden="true"
                  className="absolute -left-1/3 top-0 h-full w-1/2 -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.52),transparent)] opacity-0"
                  initial={false}
                  whileHover={reduceMotion ? undefined : { x: ['0%', '240%'], opacity: [0, 1, 0] }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                />

                <div className="relative space-y-5">
                  <motion.div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-jasmin-dark text-white shadow-[0_18px_34px_-24px_rgba(74,58,42,0.95)]"
                    whileHover={reduceMotion ? undefined : { rotate: -6, scale: 1.05 }}
                    transition={{ duration: 0.24, ease: 'easeOut' }}
                  >
                    <Icon className="h-6 w-6" />
                  </motion.div>
                  <div className="space-y-3">
                    <h3 className="font-display text-3xl leading-none text-jasmin-dark transition-transform duration-300 group-hover:translate-x-1">
                      {title}
                    </h3>
                    <p className="text-sm leading-8 text-jasmin-dark/72 transition-colors duration-300 group-hover:text-jasmin-dark/88">
                      {text}
                    </p>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
