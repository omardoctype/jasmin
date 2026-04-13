import { ArrowUpRight, Clock3 } from 'lucide-react';
import Reveal from '../components/Reveal';
import schoolLogo from '../assets/logo.png';
import { formationsCatalog } from '../data/formationsData';

const formationRows = [
  {
    title: 'Patisserie',
    items: formationsCatalog.filter((formation) => formation.slug === 'cc-patisserie' || formation.slug === 'btp-patisserie'),
  },
  {
    title: 'Cuisine',
    items: formationsCatalog.filter((formation) => formation.slug === 'cc-cuisine' || formation.slug === 'btp-cuisine'),
  },
  {
    title: 'Parcours cuisine et patisserie',
    items: formationsCatalog.filter((formation) => formation.slug === 'cap'),
  },
];

function FormationSpecialtyLink({ formation }) {
  return (
    <a
      href={`#/formations/${formation.slug}`}
      className="group rounded-[24px] border border-jasmin-brown/10 bg-white/80 p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-jasmin-gold/24 hover:shadow-[0_24px_70px_-40px_rgba(74,58,42,0.32)]"
    >
      <div className="flex h-full flex-col justify-between gap-5">
        <div className="space-y-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-jasmin-dark text-white shadow-[0_18px_34px_-24px_rgba(74,58,42,0.95)]">
            <Clock3 className="h-5 w-5" />
          </div>

          <div className="space-y-3">
            <h3 className="font-display text-[1.9rem] leading-none text-jasmin-dark">{formation.label}</h3>
            <p className="text-sm leading-7 text-jasmin-dark/72">{formation.duration}</p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 text-sm font-medium text-jasmin-dark/78 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-jasmin-dark">
          <span>Voir les details</span>
          <ArrowUpRight className="h-4 w-4 text-jasmin-gold" />
        </div>
      </div>
    </a>
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
                alt="Logo Ecole Jasmin"
                className="h-7 w-7 rounded-full object-cover"
              />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-jasmin-brown">
                Ecole Jasmin
              </span>
            </div>

            <h2 className="font-display text-4xl leading-tight text-jasmin-dark sm:text-5xl">
              Diplomes et formations
            </h2>
            <p className="max-w-3xl text-sm leading-8 text-jasmin-dark/74 sm:text-base">
              Choisissez une formation pour voir sa duree et ses details.
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          {formationRows.map((row, index) => (
            <Reveal
              key={row.title}
              delay={index * 0.07}
              variant="zoom-in"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-jasmin-brown">
                    Parcours
                  </p>
                  <h3 className="font-display text-4xl leading-none text-jasmin-dark">
                    {row.title}
                  </h3>
                </div>

                <div className={`grid gap-5 ${row.items.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1'} ${row.title === 'CAP' ? 'max-w-xl' : ''}`}>
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
