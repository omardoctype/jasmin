import giasLogo from '../assets/sponseurs/png logo gias.png';
import majesteLogo from '../assets/sponseurs/Logo Majesté version finale.png';
import sponsorLogo from '../assets/sponseurs/images.jpeg';
import schoolLogo from '../assets/logo.png';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const sponsors = [
  {
    name: 'CSM GIAS',
    image: giasLogo,
    imageClassName: 'max-h-20 sm:max-h-24',
  },
  {
    name: 'Majeste',
    image: majesteLogo,
    imageClassName: 'max-h-14 sm:max-h-16',
  },
  {
    name: 'Sponsor partenaire',
    image: sponsorLogo,
    imageClassName: 'max-h-20 sm:max-h-24',
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
          eyebrow="Nos sponsors"
          eyebrowLogo={schoolLogo}
          title="Des partenaires qui accompagnent l'ecole"
          description="Des entreprises qui soutiennent la formation et les activites de l ecole."
          align="center"
        />

        <Reveal variant="zoom-in">
          <div className="rounded-[32px] border border-jasmin-brown/10 bg-white/82 px-6 py-8 shadow-[0_24px_80px_-48px_rgba(74,58,42,0.35)] sm:px-10 sm:py-10">
            <div className="grid items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {sponsors.map((sponsor, index) => (
                <Reveal
                  key={sponsor.name}
                  delay={index * 0.08}
                  variant="fade-up"
                >
                  <div className="hover-glow flex min-h-28 items-center justify-center rounded-[24px] bg-white px-6 py-6">
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      loading="lazy"
                      className={`${sponsor.imageClassName} w-auto object-contain transition-transform duration-500 ease-out hover:scale-[1.05]`}
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
