import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Award, BookOpen, ChefHat } from 'lucide-react';
import { useRef } from 'react';
import cappImageThree from '../assets/capp3.jpg';
import cappImage from '../assets/capp.jpg';
import chefManel from '../assets/chefs/mme manel2.jpg';
import diplomeImage from '../assets/diplome.jpg';
import Reveal from '../components/Reveal';
import TextReveal from '../components/TextReveal';

const values = [
  {
    title: 'Qualite',
    text: "Une formation rigoureuse, claire et orientee vers l'excellence professionnelle.",
    icon: ChefHat,
    backgroundImage: cappImageThree,
  },
  {
    title: 'Pratique',
    text: 'Un apprentissage en atelier pour developper precision, methode et autonomie.',
    icon: Award,
    backgroundImage: cappImage,
  },
  {
    title: 'Accompagnement',
    text: 'Un suivi attentif pour aider chaque etudiant a progresser avec confiance.',
    icon: BookOpen,
    backgroundImage: diplomeImage,
  },
];

export default function AboutSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const { scrollYProgress: imageProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [48, -34]);
  const imageScale = useTransform(imageProgress, [0, 0.5, 1], [0.96, 1, 1.02]);

  return (
    <section
      id="ecole"
      ref={sectionRef}
      className="section-shell section-cinematic scroll-mt-32"
    >
      <div className="site-container space-y-14">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <Reveal
            className="surface-card hover-glow p-6 sm:p-8 lg:min-h-[35rem]"
            variant="fade-right"
          >
            <div className="space-y-6">
              <div className="section-tag">Notre ecole</div>
              <div className="space-y-5">
                <motion.h3
  className="max-w-3xl font-display text-4xl sm:text-5xl leading-tight text-jasmin-dark"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
>
  Mot de la Directrice de l'Ecole Jasmin
</motion.h3>
                <p className="max-w-2xl text-base leading-8 text-jasmin-dark/84 sm:text-lg sm:leading-9">
                  Portes par une vision commune, nous oeuvrons a promouvoir l'excellence culinaire.
                </p>
                <p className="max-w-2xl text-base leading-8 text-jasmin-dark/74 sm:text-lg sm:leading-9">
                  L'Ecole Jasmin est bien plus qu'un centre de formation : c'est un lieu ou les talents
                  se revelent, ou les passions s'epanouissent et ou les ambitions prennent vie.
                </p>
                <p className="max-w-2xl text-base leading-8 text-jasmin-dark/74 sm:text-lg sm:leading-9">
                  Je tiens a exprimer ma profonde reconnaissance envers notre equipe engagee, nos etudiants
                  passionnes et nos partenaires fideles.
                </p>
                <p className="max-w-2xl text-base leading-8 text-jasmin-dark/74 sm:text-lg sm:leading-9">
                  Grace a votre implication et a votre confiance, l'Ecole Jasmin ne cesse de progresser et
                  de se distinguer. Ensemble, poursuivons cette belle aventure et continuons a ecrire une
                  histoire faite de passion, d'innovation et de reussite.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.06}
            variant="zoom-in"
          >
            <motion.div
              ref={imageRef}
              className="surface-card hover-glow overflow-hidden p-3 lg:sticky lg:top-28"
              style={{
                y: reduceMotion ? 0 : imageY,
                scale: reduceMotion ? 1 : imageScale,
              }}
            >
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
                  Fondatrice de l'ecole, elle veille a une formation serieuse, pratique et adaptee aux
                  attentes du metier.
                </p>
              </div>
            </motion.div>
          </Reveal>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal
              key={value.title}
              delay={index * 0.06}
              variant="zoom-in"
            >
              <motion.article
                className="group surface-card relative h-[21rem] overflow-hidden p-6 text-white sm:h-[23rem] sm:p-7"
                whileHover={reduceMotion ? undefined : { y: -8 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                <img
                  src={value.backgroundImage}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  style={{ objectPosition: 'center 50%' }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,26,26,0.42),rgba(26,26,26,0.74))]" />
                <div className="relative flex h-full flex-col justify-between">
                  <motion.div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/16 text-white shadow-[0_18px_34px_-24px_rgba(26,26,26,0.95)] backdrop-blur-sm"
                    whileHover={reduceMotion ? undefined : { rotate: -6, scale: 1.05 }}
                    transition={{ duration: 0.24, ease: 'easeOut' }}
                  >
                    <value.icon className="h-6 w-6" />
                  </motion.div>
                  <div className="space-y-3">
                    <h3 className="font-display text-3xl leading-none text-white">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-7 text-white/84">
                      {value.text}
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
