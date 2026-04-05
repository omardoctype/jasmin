import brandMark from '../assets/logo.png';
import equipmentImage from '../assets/equipement.jpg';
import heroImage from '../assets/image.jpg';
import schoolLogo from '../assets/logo.png';
import { Award, ChefHat } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden"
    >
      <div className="relative min-h-[78svh] sm:min-h-[84svh]">
        <img
          src={heroImage}
          alt="Presentation culinaire Ecole Jasmin"
          className="absolute inset-0 h-full w-full object-cover object-[center_78%] sm:object-[center_68%] lg:object-[center_58%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,26,26,0.56),rgba(26,26,26,0.24)_42%,rgba(26,26,26,0.1))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(237,230,218,0.22),transparent_28%)]" />

        <div className="site-container relative z-10 flex min-h-[78svh] items-end pb-24 pt-36 sm:min-h-[84svh] sm:pb-28 lg:pb-32">
          <Reveal className="max-w-3xl">
            <div className="space-y-6">
              <div className="section-tag border-white/18 bg-white/10 text-white">
                Ecole Jasmin
              </div>
              <div className="space-y-4">
                <h1 className="font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                  Ecole de formation professionnelle en cuisine et patisserie
                </h1>
                <p className="max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                  Un cadre d'apprentissage elegant et professionnalisant pour construire une vraie carriere dans les metiers de la cuisine et de la patisserie.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-20 bg-[radial-gradient(60%_130%_at_50%_0%,transparent_55%,#f7f5f0_56%)] sm:h-24" />
      </div>

      <div className="relative -mt-3 sm:-mt-6">
        <div className="site-container">
          <Reveal>
            <div className="mx-auto grid max-w-5xl gap-8 rounded-[30px] border border-jasmin-brown/10 bg-white px-6 py-8 shadow-[0_26px_80px_-44px_rgba(74,58,42,0.42)] sm:px-8 sm:py-10 lg:grid-cols-[1.18fr_0.82fr] lg:px-12">
              <div className="space-y-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-jasmin-brown">
                  Ecole Jasmin
                </p>
                <h2 className="max-w-2xl font-display text-3xl leading-tight text-jasmin-dark sm:text-4xl">
                  Un centre de formation qui valorise la pratique, l'exigence et l'excellence culinaire.
                </h2>
                <p className="max-w-2xl text-sm leading-8 text-jasmin-dark/72 sm:text-base">
                  A travers une pedagogie orientee terrain, l'ecole accompagne les apprenants dans la maitrise des techniques professionnelles, le developpement du geste juste et la construction d'un projet metier solide.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="flex h-44 w-44 items-center justify-center rounded-[28px] border border-jasmin-brown/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(237,230,218,0.9))] p-7 shadow-[0_22px_60px_-30px_rgba(74,58,42,0.22)] sm:h-52 sm:w-52">
                  <img
                    src={brandMark}
                    alt="Logo Ecole Jasmin"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="site-container pt-18 sm:pt-22">
        <Reveal>
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
              Nos domaines de formation : Cuisine et Patisserie, pour maitriser l'art culinaire.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-12 overflow-hidden rounded-[34px] border border-jasmin-brown/10 bg-white shadow-[0_26px_80px_-44px_rgba(74,58,42,0.3)] lg:grid lg:grid-cols-[1fr_0.94fr]">
            <div className="relative min-h-[20rem] bg-[#e8ddcb]">
              <img
                src={equipmentImage}
                alt="Atelier de formation Ecole Jasmin"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="relative space-y-8 px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(183,154,107,0.12),transparent_28%)]" />
              <div className="relative space-y-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-jasmin-brown">
                  Ecole Jasmin
                </p>
                <h3 className="font-display text-4xl leading-tight text-jasmin-dark">
                  Un espace bien equipe, une matiere premiere de qualite
                </h3>
              </div>

              <div className="relative space-y-6">
                <div className="flex gap-4 rounded-[24px] border border-jasmin-brown/10 bg-[#fcfbf8] p-5">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-jasmin-gold/16 text-jasmin-gold">
                    <ChefHat className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-jasmin-dark">
                      Un encadrement attentif et professionnalisant
                    </h4>
                    <p className="text-sm leading-7 text-jasmin-dark/70">
                      Une equipe pedagogique engagee accompagne chaque etudiant avec rigueur, progression et sens du metier.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-[24px] border border-jasmin-brown/10 bg-[#fcfbf8] p-5">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-jasmin-gold/16 text-jasmin-gold">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-jasmin-dark">
                      Une formation orientee vers l'excellence
                    </h4>
                    <p className="text-sm leading-7 text-jasmin-dark/70">
                      Cuisine, patisserie et pratique en atelier se rejoignent pour preparer des profils solides, appliques et prets pour le terrain.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
