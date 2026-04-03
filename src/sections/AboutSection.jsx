import AnimatedStat from '../components/AnimatedStat';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { aboutContent } from '../data/siteData';

export default function AboutSection() {
  return (
    <section
      id="ecole"
      className="section-shell scroll-mt-32"
    >
      <div className="site-container space-y-14">
        <SectionHeading
          eyebrow="L’école"
          title="École Jasmin – Centre de Formation Professionnelle"
          description="Une signature visuelle chaleureuse, un cadre rigoureux et une pédagogie tournée vers l’excellence culinaire."
        />

        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal className="surface-card overflow-hidden p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="overflow-hidden rounded-[24px] bg-[#eadfce]">
                <img
                  src={aboutContent.image}
                  alt="Atelier de formation culinaire"
                  loading="lazy"
                  className="h-full min-h-72 w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-6">
                <p
                  dir="rtl"
                  className="font-display text-3xl leading-[1.3] text-jasmin-dark sm:text-4xl"
                >
                  {aboutContent.text}
                </p>
                <p className="max-w-xl text-base leading-8 text-jasmin-dark/72">
                  {aboutContent.description}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {aboutContent.stats.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 0.08}
              >
                <AnimatedStat {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

