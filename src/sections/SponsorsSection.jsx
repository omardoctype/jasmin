import giasLogo from '../assets/sponseurs/png logo gias.png';
import majesteLogo from '../assets/sponseurs/Logo Majesté version finale.png';
import sponsorLogo from '../assets/sponseurs/propatiss.png';
import downloadedLogo from '../assets/sponseurs/télécharger.png';
import aurLogo from '../assets/images aur.png';
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
    name: 'Partenaire',
    image: sponsorLogo,
    imageClassName: 'max-h-20 sm:max-h-24',
  },
  {
    name: 'Partenaire officiel',
    image: downloadedLogo,
    imageClassName: 'max-h-16 sm:max-h-20',
  },
  {
    name: 'AUR',
    image: aurLogo,
    imageClassName: 'max-h-16 sm:max-h-20',
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
            <div className="grid items-center gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
                      className={`${sponsor.imageClassName} w-auto object-contain opacity-85 grayscale-[15%] transition-[opacity,filter,transform] duration-500 ease-out hover:scale-[1.04] hover:opacity-100 hover:grayscale-0`}
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
