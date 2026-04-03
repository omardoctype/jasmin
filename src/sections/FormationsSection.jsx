import FormationCard from '../components/FormationCard';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { formations, programHighlights } from '../data/siteData';

export default function FormationsSection() {
  return (
    <section
      id="formations"
      className="section-shell scroll-mt-32 bg-[linear-gradient(180deg,rgba(237,230,218,0.45),rgba(247,245,240,0))]"
    >
      <div className="site-container space-y-14">
        <SectionHeading
          eyebrow="Programmes"
          title="Des parcours conçus pour la réalité du métier"
          description="Chaque formation combine exigence technique, progression structurée et pratique concrète pour installer des bases solides et durables."
        />

        <div className="grid gap-4 lg:grid-cols-2">
          {programHighlights.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 0.08}
              className="h-full"
            >
              <div
                id={item.id}
                className="surface-card h-full scroll-mt-32 p-6 sm:p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-jasmin-brown">
                  Parcours
                </p>
                <h3 className="mt-4 font-display text-3xl leading-none text-jasmin-dark">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-jasmin-dark/72">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {formations.map((formation, index) => (
            <Reveal
              key={formation.title}
              delay={index * 0.05}
              className={index === formations.length - 1 ? 'md:col-span-2 xl:col-span-1' : ''}
            >
              <FormationCard {...formation} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

