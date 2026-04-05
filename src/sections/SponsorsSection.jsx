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
  },
  {
    name: 'Majeste',
    image: majesteLogo,
  },
  {
    name: 'Sponsor partenaire',
    image: sponsorLogo,
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
          description="Un reseau de marques et d'entreprises qui soutiennent la formation, la pratique et l'excellence professionnelle."
          align="center"
        />

        <Reveal>
          <div className="rounded-[32px] border border-jasmin-brown/10 bg-white/82 px-6 py-8 shadow-[0_24px_80px_-48px_rgba(74,58,42,0.35)] sm:px-10 sm:py-10">
            <div className="grid items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex min-h-28 items-center justify-center rounded-[24px] bg-white px-6 py-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    loading="lazy"
                    className="max-h-20 w-auto object-contain sm:max-h-24"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
