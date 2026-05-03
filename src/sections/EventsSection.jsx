import EventCard from '../components/EventCard';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { events, newsItems } from '../data/siteData';

export default function EventsSection() {
  return (
    <section
      id="evenements"
      className="section-shell scroll-mt-32 bg-[linear-gradient(180deg,rgba(247,245,240,0),rgba(216,199,166,0.18))]"
    >
      <div className="site-container space-y-14">
        <SectionHeading
          eyebrow="Vie du centre"
          title="Évènements, expériences et moments de partage"
          description="La vie de l’école se prolonge au-delà des cours avec des temps forts conçus pour valoriser les talents et créer une vraie culture culinaire."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event, index) => (
            <Reveal
              key={event.title}
              delay={index * 0.06}
            >
              <EventCard {...event} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div
            id="actualites"
            className="surface-card scroll-mt-32 p-6 sm:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-jasmin-brown">
                  Actualités
                </p>
                <h3 className="font-display text-4xl leading-none text-jasmin-dark">
                  Les nouveautés de l’école
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-7 text-jasmin-dark/68">
                Des informations utiles pour suivre les admissions, les nouveaux formats pédagogiques et les temps forts du centre.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {newsItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-jasmin-brown/10 bg-white/70 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-jasmin-brown">
                    Info
                  </p>
                  <h4 className="mt-3 font-display text-2xl leading-none text-jasmin-dark">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-jasmin-dark/70">{item.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

