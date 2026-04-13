import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Award, ChefHat } from 'lucide-react';
import brandMark from '../assets/logo.png';
import heroImage from '../assets/image.jpg';
import patisserieSlideOne from '../assets/pat1.JPG';
import patisserieSlideTwo from '../assets/pat2.JPG';
import patisserieSlideThree from '../assets/pat3.JPG';
import patisserieSlideFour from '../assets/pat4.JPG';
import schoolLogo from '../assets/logo.png';
import Reveal from '../components/Reveal';

const patisserieSlides = [
  { src: patisserieSlideOne, alt: 'Atelier de patisserie Ecole Jasmin 1' },
  { src: patisserieSlideTwo, alt: 'Atelier de patisserie Ecole Jasmin 2' },
  { src: patisserieSlideThree, alt: 'Atelier de patisserie Ecole Jasmin 3' },
  { src: patisserieSlideFour, alt: 'Atelier de patisserie Ecole Jasmin 4' },
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % patisserieSlides.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [reduceMotion]);

  return (
    <section
      id="accueil"
      className="relative overflow-hidden"
    >
      <div className="relative min-h-[78svh] sm:min-h-[84svh]">
        <motion.img
          src={heroImage}
          alt="Presentation culinaire Ecole Jasmin"
          className="absolute inset-0 h-full w-full object-cover object-[center_78%] sm:object-[center_68%] lg:object-[center_58%]"
          initial={reduceMotion ? false : { scale: 1.08 }}
          animate={reduceMotion ? undefined : { scale: 1 }}
          transition={reduceMotion ? undefined : { duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,26,26,0.56),rgba(26,26,26,0.24)_42%,rgba(26,26,26,0.1))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(237,230,218,0.22),transparent_28%)]" />
        <motion.div
          aria-hidden="true"
          className="absolute left-[8%] top-[18%] hidden h-28 w-28 rounded-full border border-white/14 bg-white/8 backdrop-blur-sm lg:block"
          animate={reduceMotion ? undefined : { y: [0, -16, 0], rotate: [0, 4, 0] }}
          transition={reduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-[20%] right-[8%] hidden h-20 w-20 rounded-[28px] border border-jasmin-gold/20 bg-jasmin-gold/10 lg:block"
          animate={reduceMotion ? undefined : { y: [0, 14, 0], rotate: [0, -5, 0] }}
          transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />

        <div className="site-container relative z-10 flex min-h-[78svh] items-end pb-24 pt-36 sm:min-h-[84svh] sm:pb-28 lg:pb-32">
          <Reveal
            className="max-w-3xl"
            variant="fade-right"
          >
            <div className="space-y-6">
              <motion.div
                className="section-tag border-white/18 bg-white/10 text-white"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={reduceMotion ? undefined : { delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                Ecole Jasmin
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  className="font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl"
                  initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={reduceMotion ? undefined : { delay: 0.18, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  Ecole de formation professionnelle en cuisine et patisserie
                </motion.h1>
                <motion.p
                  className="max-w-2xl text-base leading-8 text-white/82 sm:text-lg"
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={reduceMotion ? undefined : { delay: 0.3, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                >
                  Une formation professionnelle pour apprendre la cuisine et la patisserie dans un cadre serieux et moderne.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-wrap gap-3 pt-2"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={reduceMotion ? undefined : { delay: 0.42, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/88">
                  Cuisine professionnelle
                </div>
                <div className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/88">
                  Patisserie fine
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-20 bg-[radial-gradient(60%_130%_at_50%_0%,transparent_55%,#f7f5f0_56%)] sm:h-24" />
      </div>

      <div className="relative -mt-3 sm:-mt-6">
        <div className="site-container">
          <Reveal variant="zoom-in">
            <div className="mx-auto grid max-w-5xl gap-8 rounded-[30px] border border-jasmin-brown/10 bg-white px-6 py-8 shadow-[0_26px_80px_-44px_rgba(74,58,42,0.42)] sm:px-8 sm:py-10 lg:grid-cols-[1fr_0.94fr] lg:px-12">
              <div className="relative min-h-[20rem] overflow-hidden rounded-[28px] bg-[#e8ddcb]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={patisserieSlides[activeSlide].src}
                    src={patisserieSlides[activeSlide].src}
                    alt={patisserieSlides[activeSlide].alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
                    animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985 }}
                    transition={{ duration: reduceMotion ? 0.2 : 0.9, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(26,26,26,0.08))]" />

                <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-center gap-2 pb-5">
                  {patisserieSlides.map((slide, index) => (
                    <button
                      key={slide.src}
                      type="button"
                      aria-label={`Afficher l'image ${index + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === activeSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/50'
                      }`}
                      onClick={() => setActiveSlide(index)}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4 lg:pl-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-jasmin-brown">
                  Ecole Jasmin
                </p>
                <h2 className="max-w-2xl font-display text-3xl leading-tight text-jasmin-dark sm:text-4xl">
                  Un centre de formation axe sur la pratique et la qualite de l apprentissage.
                </h2>
                <p className="max-w-2xl text-sm leading-8 text-jasmin-dark/72 sm:text-base">
                  Les etudiants apprennent les techniques essentielles, pratiquent en atelier et se preparent a une insertion professionnelle solide.
                </p>

                <div className="relative space-y-6 pt-2">
                  <div className="hover-glow flex gap-4 rounded-[24px] border border-jasmin-brown/10 bg-[#fcfbf8] p-5">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-jasmin-gold/16 text-jasmin-gold">
                      <ChefHat className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-jasmin-dark">
                        Un accompagnement pedagogique attentif
                      </h4>
                      <p className="text-sm leading-7 text-jasmin-dark/70">
                        Une equipe pedagogique accompagne chaque etudiant avec serieux, methode et regularite.
                      </p>
                    </div>
                  </div>

                  <div className="hover-glow flex gap-4 rounded-[24px] border border-jasmin-brown/10 bg-[#fcfbf8] p-5">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-jasmin-gold/16 text-jasmin-gold">
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-jasmin-dark">
                        Une formation pratique et structuree
                      </h4>
                      <p className="text-sm leading-7 text-jasmin-dark/70">
                        La cuisine, la patisserie et le travail en atelier permettent de developper des competences concretes pour le metier.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="site-container pt-18 sm:pt-22">
        <Reveal variant="fade-up">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-jasmin-brown/10 bg-white px-4 py-2 shadow-[0_14px_34px_-26px_rgba(74,58,42,0.28)]">
              <img
                src={schoolLogo}
                alt="Logo Ecole Jasmin"
                className="h-6 w-6 rounded-full object-cover"
              />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-jasmin-brown">
                Ecole Jasmin
              </span>
            </div>

            <h2 className="mt-6 font-display text-4xl leading-tight text-jasmin-dark sm:text-5xl">
              Des formations claires en cuisine et en patisserie.
            </h2>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
