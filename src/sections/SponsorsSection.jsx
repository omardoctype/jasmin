import gourmandiseLogo from '../assets/sponseurs/gourmandise.jpg';
import raddisonLogo from '../assets/sponseurs/raddison.png';
import waybaLogo from '../assets/sponseurs/wayba.png';
import schoolLogo from '../assets/logo.png';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const sponsors = [
  {
    name: 'Radisson',
    image: raddisonLogo,
    imageClassName: 'max-h-16 md:max-h-20',
  },
  {
    name: 'Gourmandise',
    image: gourmandiseLogo,
    imageClassName: 'max-h-16 md:max-h-20',
  },
  {
    name: 'Wayba',
    image: waybaLogo,
    imageClassName: 'max-h-16 md:max-h-20',
  },
];

export default function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="section-shell scroll-mt-32"
    >
      <div className="site-container space-y-12">
        <SectionHeading
          eyebrow="Nos partenaires"
          eyebrowLogo={schoolLogo}
          title="Nos partenaires"
          description="Des entreprises qui soutiennent la formation et les activités de l'école."
          align="center"
        />

        <Reveal variant="zoom-in">
          <div className="rounded-[34px] border border-jasmin-brown/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(237,230,218,0.34))] px-8 py-10 shadow-[0_24px_80px_-48px_rgba(74,58,42,0.38)] sm:px-12">
            <div className="grid items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {sponsors.map((sponsor, index) => (
                <Reveal
                  key={sponsor.name}
                  delay={index * 0.08}
                  variant="fade-up"
                >
                  <div className="flex min-h-24 items-center justify-center">
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      loading="lazy"
                      className={`${sponsor.imageClassName} w-auto max-w-full object-contain`}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
