import { ArrowLeft, Clock3, GraduationCap, Layers3 } from 'lucide-react';
import schoolLogo from '../assets/logo.png';
import Reveal from '../components/Reveal';
import { getFormationBySlug } from '../data/formationsData';

function ModuleList({ title, items }) {
  return (
    <div className="surface-card h-full p-6 sm:p-7">
      <div className="space-y-4">
        <h3 className="font-display text-3xl leading-none text-jasmin-dark">{title}</h3>
        <ul className="space-y-3 text-sm leading-7 text-jasmin-dark/72">
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
    </div>
  );
}

export default function FormationDetailPage({ slug }) {
  const formation = getFormationBySlug(slug);

  if (!formation) {
    return (
      <main className="pt-28 sm:pt-32">
        <section className="section-shell">
          <div className="site-container">
            <Reveal variant="zoom-in">
              <div className="surface-card max-w-3xl p-8 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-jasmin-brown">
                  Formation introuvable
                </p>
                <h1 className="mt-4 font-display text-4xl text-jasmin-dark sm:text-5xl">
                  Cette specialite n'existe pas.
                </h1>
                <a
                  href="#formations"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-jasmin-dark px-5 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Retour aux formations
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-28 sm:pt-32">
      <section className="section-shell">
        <div className="site-container space-y-10">
          <Reveal variant="fade-right">
            <div className="max-w-4xl space-y-5">
              <a
                href="#formations"
                className="inline-flex items-center gap-2 text-sm font-medium text-jasmin-dark/74 transition-colors hover:text-jasmin-dark"
              >
                <ArrowLeft className="h-4 w-4 text-jasmin-gold" />
                Retour aux formations
              </a>

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

              <h1 className="font-display text-5xl leading-none text-jasmin-dark sm:text-6xl">
                {formation.label}
              </h1>
              <p className="text-lg text-jasmin-brown">{formation.diploma}</p>
              <p className="max-w-3xl text-sm leading-8 text-jasmin-dark/74 sm:text-base">
                {formation.intro}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <Reveal variant="zoom-in">
              <div className="overflow-hidden rounded-[30px] border border-jasmin-brown/10 bg-white shadow-[0_24px_80px_-48px_rgba(74,58,42,0.36)]">
                <img
                  src={formation.image}
                  alt={formation.label}
                  className="h-[18rem] w-full object-cover sm:h-[24rem]"
                  style={{ objectPosition: formation.imagePosition }}
                />
              </div>
            </Reveal>

            <Reveal
              delay={0.06}
              variant="fade-left"
            >
              <div className="grid gap-4">
                <div className="surface-card p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-jasmin-dark text-white">
                      <Clock3 className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-jasmin-brown">
                        Duree
                      </p>
                      <p className="text-sm leading-7 text-jasmin-dark/74">{formation.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="surface-card p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-jasmin-dark text-white">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-jasmin-brown">
                        Niveau requis
                      </p>
                      <p className="text-sm leading-7 text-jasmin-dark/74">{formation.level}</p>
                    </div>
                  </div>
                </div>

                <div className="surface-card p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-jasmin-dark text-white">
                      <Layers3 className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-jasmin-brown">
                        Specialite
                      </p>
                      <p className="text-sm leading-7 text-jasmin-dark/74">{formation.family}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal variant="fade-right">
              <ModuleList
                title="Modules techniques"
                items={formation.modulesLeft}
              />
            </Reveal>
            <Reveal
              delay={0.06}
              variant="fade-left"
            >
              <ModuleList
                title="Modules theoriques"
                items={formation.modulesRight}
              />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
