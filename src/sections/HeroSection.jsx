import { motion, useReducedMotion } from 'framer-motion';
import { Award, GraduationCap, MapPin } from 'lucide-react';
import ButtonLink from '../components/ButtonLink';
import Reveal from '../components/Reveal';
import { contactDetails, heroContent } from '../data/siteData';

const floatingBadges = [
  { label: 'Cuisine raffinée', top: '12%', left: '-4%' },
  { label: 'Pâtisserie fine', top: '58%', left: '-2%' },
  { label: 'Certifié par l’État', top: '18%', right: '-5%' },
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="accueil"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,rgba(237,230,218,0.92),rgba(247,245,240,0.82))]" />
      <div className="absolute inset-0 -z-10 ambient-grid opacity-45" />
      <div className="absolute left-0 top-24 -z-10 h-64 w-64 rounded-full bg-jasmin-gold/12 blur-3xl" />
      <div className="absolute bottom-12 right-0 -z-10 h-72 w-72 rounded-full bg-jasmin-sand/28 blur-3xl" />

      <div className="site-container flex min-h-[calc(100vh-9rem)] items-center py-12 sm:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="space-y-8">
            <Reveal>
              <div className="section-tag">{heroContent.eyebrow}</div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="space-y-6">
                <h1 className="max-w-3xl font-display text-5xl leading-[0.96] text-jasmin-dark [text-wrap:balance] sm:text-6xl lg:text-7xl">
                  {heroContent.title}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-jasmin-dark/74 sm:text-xl">
                  {heroContent.subtitle}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="flex flex-wrap gap-3">
                {heroContent.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-jasmin-brown/12 bg-white/74 px-4 py-2 text-sm text-jasmin-dark/72"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="#formations">Découvrir les formations</ButtonLink>
                <ButtonLink
                  href="#contact"
                  variant="secondary"
                >
                  S’inscrire maintenant
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="soft-panel flex items-center gap-4 p-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-jasmin-dark text-white">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-jasmin-dark">Diplôme reconnu</p>
                    <p className="text-xs text-jasmin-dark/62">Parcours professionnalisants</p>
                  </div>
                </div>
                <div className="soft-panel flex items-center gap-4 p-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-jasmin-dark shadow-[0_18px_28px_-20px_rgba(74,58,42,0.55)]">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-jasmin-dark">Approche premium</p>
                    <p className="text-xs text-jasmin-dark/62">Apprentissage orienté terrain</p>
                  </div>
                </div>
                <a
                  href={contactDetails.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="soft-panel flex items-center gap-4 p-4 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-jasmin-gold text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-jasmin-dark">Sfax, Tunisie</p>
                    <p className="text-xs text-jasmin-dark/62">Route de Tunis km 6</p>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal
            className="relative"
            delay={0.12}
          >
            <div className="relative mx-auto w-full max-w-[38rem]">
              <div className="surface-card relative overflow-hidden p-3 sm:p-4">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.45),rgba(255,255,255,0.1))]" />
                <img
                  src={heroContent.image}
                  alt="Univers culinaire et pâtisserie"
                  className="relative z-10 h-[28rem] w-full rounded-[24px] object-cover sm:h-[36rem]"
                />
                <div className="absolute inset-x-6 bottom-6 z-20 rounded-[22px] border border-white/52 bg-white/72 p-5 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-jasmin-brown">
                    École Jasmin
                  </p>
                  <p className="mt-2 font-display text-3xl leading-none text-jasmin-dark">
                    Formation culinaire pensée pour le métier
                  </p>
                </div>
              </div>

              {floatingBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          y: [0, index % 2 === 0 ? -6 : 6, 0],
                        }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 8 + index,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: 'easeInOut',
                        }
                  }
                  className="absolute z-20 hidden rounded-full border border-white/58 bg-white/74 px-4 py-3 text-sm font-semibold text-jasmin-dark shadow-[0_20px_50px_-34px_rgba(74,58,42,0.55)] backdrop-blur-sm sm:inline-flex"
                  style={badge}
                >
                  {badge.label}
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
