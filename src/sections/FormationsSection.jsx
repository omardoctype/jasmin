import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import Reveal from '../components/Reveal';
import schoolLogo from '../assets/logo.png';
import { formationsCatalog } from '../data/formationsData';

const formationRows = [
  {
    title: 'Pâtisserie',
    items: formationsCatalog.filter((formation) => formation.slug === 'cc-patisserie' || formation.slug === 'btp-patisserie'),
  },
  {
    title: 'Cuisine',
    items: formationsCatalog.filter((formation) => formation.slug === 'cc-cuisine' || formation.slug === 'btp-cuisine'),
  },
  {
    title: 'Parcours cuisine et pâtisserie',
    items: formationsCatalog.filter((formation) => formation.slug === 'cap'),
  },
];

function FormationSpecialtyLink({ formation }) {
  const reduceMotion = useReducedMotion();
  const imageFitClass = formation.imageFit === 'contain' ? 'object-contain' : 'object-cover';
  const imageBackgroundClass = formation.imageBackgroundClass ?? 'bg-[#e9ddcb]';
  const imageWrapperClass = formation.imageFit === 'contain'
    ? `relative overflow-hidden ${imageBackgroundClass} h-72 sm:h-80 lg:h-96`
    : `relative overflow-hidden ${imageBackgroundClass} h-72 sm:h-80 lg:h-96`;
  const imageMotionClass = 'transition-opacity duration-300 ease-out';

  return (
    <motion.a
      href={`#/formations/${formation.slug}`}
      className="group relative overflow-hidden rounded-[30px] border border-jasmin-brown/10 bg-white/88 shadow-[0_22px_70px_-46px_rgba(74,58,42,0.48)] ring-1 ring-white/70 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-jasmin-gold/30 hover:shadow-[0_32px_90px_-48px_rgba(74,58,42,0.58)]"
      initial={false}
      whileHover={reduceMotion ? undefined : { y: -10 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      <div className="flex flex-col h-full">
        <div className={imageWrapperClass}>
          <img
            src={formation.image}
            alt={formation.label}
            loading="lazy"
            className={`h-full w-full transform-gpu ${imageMotionClass} ${imageFitClass}`}
            style={{ objectPosition: formation.imagePosition }}
          />
          <div className="absolute left-4 top-4 rounded-full border border-white/24 bg-white/92 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-jasmin-dark shadow-[0_14px_34px_-24px_rgba(26,26,26,0.45)]">
            {formation.diploma}
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between gap-5 p-5 sm:p-6">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-3xl leading-none text-jasmin-dark transition-transform duration-300 group-hover:translate-x-1">
                {formation.label}
              </h3>
              <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-jasmin-ivory text-jasmin-gold transition-transform duration-300 group-hover:rotate-12 group-hover:bg-jasmin-dark group-hover:text-white">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-jasmin-ivory/72 px-3 py-1.5 text-xs font-medium text-jasmin-dark/68">
              <Clock3 className="h-3.5 w-3.5 text-jasmin-gold" />
              <span>{formation.duration}</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-sm font-semibold text-jasmin-brown transition-transform duration-300 group-hover:translate-x-1 group-hover:text-jasmin-dark">
            <span>Voir les détails</span>
            <span className="h-px w-8 bg-jasmin-gold/70 transition-all duration-300 group-hover:w-12" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function FormationsSection() {
  return (
    <section
      id="formations"
      className="section-shell scroll-mt-32 bg-[linear-gradient(180deg,rgba(237,230,218,0.45),rgba(247,245,240,0))]"
    >
      <div className="site-container space-y-12">
        <Reveal variant="fade-right">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-3 rounded-full border border-jasmin-brown/12 bg-white/78 px-3 py-2 shadow-[0_12px_30px_-24px_rgba(74,58,42,0.38)]">
              <img
                src={schoolLogo}
                alt="Logo École Jasmin"
                className="h-7 w-auto max-w-7 rounded-full object-contain"
              />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-jasmin-brown">
                École Jasmin
              </span>
            </div>

            <h2 className="font-display text-4xl leading-tight text-jasmin-dark sm:text-5xl">
              Diplômes et formations
            </h2>
            <p className="max-w-3xl text-sm leading-8 text-jasmin-dark/74 sm:text-base">
              Choisissez une formation pour voir sa durée et ses détails.
            </p>
          </div>
        </Reveal>

        <div className="space-y-12">
          {formationRows.map((row, index) => (
            <Reveal
              key={row.title}
              delay={index * 0.07}
              variant="zoom-in"
            >
              <div className="space-y-5">
                <div className="flex flex-col gap-3 border-b border-jasmin-brown/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-jasmin-brown">
                    Parcours
                    </p>
                    <h3 className="font-display text-4xl leading-none text-jasmin-dark sm:text-5xl">
                      {row.title}
                    </h3>
                  </div>
                  <p className="max-w-md text-sm leading-7 text-jasmin-dark/62">
                    Des parcours pratiques, encadrés et pensés pour une insertion professionnelle solide.
                  </p>
                </div>

                <div className={`grid gap-6 ${row.items.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1'} ${row.title === 'CAP' ? 'max-w-xl' : ''}`}>
                  {row.items.map((formation) => (
                    <FormationSpecialtyLink
                      key={formation.slug}
                      formation={formation}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

