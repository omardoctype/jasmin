import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Award, ChefHat } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import slide2 from '../assets/2.jpg';
import slide3 from '../assets/3.jpg';
import slide5 from '../assets/5.jpg';
import slide6 from '../assets/6.jpg';
import slide7 from '../assets/7.jpg';
import slide8 from '../assets/8.jpg';
import slide9 from '../assets/9.jpg';
import pattt11 from '../assets/pattt11.jpg';
import pattt112 from '../assets/pattt112.jpg';
import pattt113 from '../assets/pattt113.jpg';
import patisserieSlideOne from '../assets/pat1.JPG';
import patisserieSlideTwo from '../assets/pat2.JPG';
import patisserieSlideThree from '../assets/pat3.JPG';
import patisserieSlideFour from '../assets/pat4.JPG';
import Reveal from '../components/Reveal';
import TextReveal from '../components/TextReveal';

const photoSlides = [
  { src: slide2, alt: 'Photo Ecole Jasmin 2' },
  { src: slide3, alt: 'Photo Ecole Jasmin 3' },
  { src: slide5, alt: 'Photo Ecole Jasmin 5' },
  { src: slide6, alt: 'Photo Ecole Jasmin 6' },
  { src: slide7, alt: 'Photo Ecole Jasmin 7' },
  { src: slide8, alt: 'Photo Ecole Jasmin 8' },
  { src: slide9, alt: 'Photo Ecole Jasmin 9' },
];

const patisserieSlides = [
  { src: patisserieSlideOne, alt: 'Atelier de patisserie Ecole Jasmin 1' },
  { src: patisserieSlideTwo, alt: 'Atelier de patisserie Ecole Jasmin 2' },
  { src: patisserieSlideThree, alt: 'Atelier de patisserie Ecole Jasmin 3' },
  { src: patisserieSlideFour, alt: 'Atelier de patisserie Ecole Jasmin 4' },
  { src: pattt11, alt: 'Atelier de patisserie Ecole Jasmin pattt 11' },
  { src: pattt113, alt: 'Atelier de patisserie Ecole Jasmin pattt 113' },
  { src: pattt112, alt: 'Atelier de patisserie Ecole Jasmin pattt 112' },
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCardSlide, setActiveCardSlide] = useState(0);
  const heroRef = useRef(null);
  const cardSliderRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const { scrollYProgress: cardScrollProgress } = useScroll({
    target: cardSliderRef,
    offset: ['start end', 'end start'],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.72]);
  const cardSliderY = useTransform(cardScrollProgress, [0, 1], [34, -18]);

  useEffect(() => {
    [...photoSlides, ...patisserieSlides].forEach((slide) => {
      const image = new Image();
      image.src = slide.src;
    });
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % photoSlides.length);
    }, 3600);

    return () => window.clearInterval(intervalId);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveCardSlide((current) => (current + 1) % patisserieSlides.length);
    }, 3400);

    return () => window.clearInterval(intervalId);
  }, [reduceMotion]);

  return (
    <section
      id="accueil"
      ref={heroRef}
      className="relative overflow-hidden"
    >
      <div className="relative min-h-[68svh] overflow-hidden sm:min-h-[82svh] lg:min-h-[84svh]">
        <motion.img
          src={photoSlides[activeSlide].src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center lg:object-[center_58%]"
          style={{ y: reduceMotion ? 0 : mediaY }}
        />
        <AnimatePresence mode="sync" initial={false}>
          <motion.img
            key={photoSlides[activeSlide].src}
            src={photoSlides[activeSlide].src}
            alt={photoSlides[activeSlide].alt}
            className="absolute inset-0 h-full w-full object-cover object-center lg:object-[center_58%]"
            loading={activeSlide === 0 ? 'eager' : 'lazy'}
            decoding="async"
            style={{ willChange: 'opacity, transform, filter', y: reduceMotion ? 0 : mediaY }}
            initial={reduceMotion ? false : { opacity: 0, scale: 1.02, filter: 'brightness(1.02)' }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, filter: 'brightness(1)' }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.015, filter: 'brightness(0.98)' }}
            transition={reduceMotion ? { duration: 0.2 } : { duration: 1.1, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,26,26,0.52),rgba(26,26,26,0.24)_46%,rgba(26,26,26,0.1))] sm:bg-[linear-gradient(90deg,rgba(26,26,26,0.5),rgba(26,26,26,0.2)_42%,rgba(26,26,26,0.08))]"
          style={{ opacity: reduceMotion ? 1 : overlayOpacity }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(237,230,218,0.22),transparent_28%)]" />
        <motion.div
          aria-hidden="true"
          className="absolute bottom-[20%] right-[8%] hidden h-20 w-20 rounded-[28px] border border-jasmin-gold/20 bg-jasmin-gold/10 lg:block"
          animate={reduceMotion ? undefined : { y: [0, 14, 0], rotate: [0, -5, 0] }}
          transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />

        <div className="site-container relative z-20 flex min-h-[68svh] items-end pb-24 pt-24 sm:min-h-[82svh] sm:pb-28 sm:pt-36 lg:min-h-[84svh] lg:pb-32">
          <Reveal
            className="relative z-20 w-full max-w-[620px]"
            variant="fade-right"
          >
            <div className="relative z-20 flex max-w-[21rem] flex-col items-start sm:max-w-[620px]">
              <div className="space-y-4">
                <motion.h3
  className="text-white text-2xl sm:text-3xl lg:text-4xl font-display leading-snug relative z-10"
  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
>
  L'excellence culinaire commence ici
</motion.h3>
                <motion.p
                  className="max-w-[20rem] text-sm leading-6 text-white/90 sm:max-w-2xl sm:text-lg sm:leading-8"
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={reduceMotion ? undefined : { delay: 0.3, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                >
                  Transformez votre passion en metier grace a une formation pratique et adaptee au monde du travail.
                </motion.p>
              </div>

              <motion.div
                className="mt-5 md:mt-6"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={reduceMotion ? undefined : { delay: 0.42, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href="#contact"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-jasmin-dark shadow-[0_18px_44px_-26px_rgba(255,255,255,0.65)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-jasmin-cream"
                >
                  S'inscrire
                </a>
              </motion.div>
            </div>
          </Reveal>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-[radial-gradient(64%_120%_at_50%_0%,transparent_48%,#f7f5f0_49%)] sm:h-20 lg:h-24" />
      </div>

      <div className="relative mt-0 sm:mt-1">
        <div className="site-container">
          <Reveal variant="zoom-in">
            <motion.div
              ref={cardSliderRef}
              className="mx-auto grid max-w-5xl gap-8 rounded-[30px] border border-jasmin-brown/10 bg-white px-6 py-8 shadow-[0_26px_80px_-44px_rgba(74,58,42,0.42)] sm:px-8 sm:py-10 lg:grid-cols-[1fr_0.94fr] lg:px-12"
              style={{ y: reduceMotion ? 0 : cardSliderY }}
            >
              <div className="relative min-h-[20rem] overflow-hidden rounded-[28px] bg-[#e8ddcb]">
                <AnimatePresence mode="sync" initial={false}>
                  <motion.img
                    key={patisserieSlides[activeCardSlide].src}
                    src={patisserieSlides[activeCardSlide].src}
                    alt={patisserieSlides[activeCardSlide].alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ willChange: 'opacity, transform, filter' }}
                    initial={reduceMotion ? false : { opacity: 0, scale: 1.035, filter: 'brightness(1.03)' }}
                    animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, filter: 'brightness(1)' }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.02, filter: 'brightness(0.98)' }}
                    transition={{ duration: reduceMotion ? 0.2 : 1, ease: 'easeInOut' }}
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
                        index === activeCardSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/50'
                      }`}
                      onClick={() => setActiveCardSlide(index)}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4 lg:pl-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-jasmin-brown">
                  Ecole Jasmin
                </p>
                <h2 className="max-w-2xl font-display text-3xl leading-tight text-jasmin-dark sm:text-4xl">
                  Un espace moderne et bien equipé
                </h2>

                <div className="relative space-y-6 pt-2">
                  <div className="hover-glow flex gap-4 rounded-[24px] border border-jasmin-brown/10 bg-[#fcfbf8] p-5">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-jasmin-gold/16 text-jasmin-gold">
                      <ChefHat className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-jasmin-dark">
                        Un accompagnement attentif
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
                        Qualité et pratique
                      </h4>
                      <p className="text-sm leading-7 text-jasmin-dark/70">
                        Une formation construite autour de la qualite de l'apprentissage, de la pratique en
                        atelier et de l'exigence professionnelle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
