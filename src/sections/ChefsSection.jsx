import ChefCard from '../components/ChefCard';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { chefs } from '../data/siteData';

export default function ChefsSection() {
  return (
    <section
      id="chefs"
      className="section-shell scroll-mt-32"
    >
      <div className="site-container space-y-14">
        <SectionHeading
          eyebrow="Chefs formateurs"
          title="Des profils expérimentés au service de votre progression"
          description="Une équipe qui transmet autant la technique que la discipline, le sens du détail et les standards du monde professionnel."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {chefs.map((chef, index) => (
            <Reveal
              key={chef.name}
              delay={index * 0.06}
            >
              <ChefCard {...chef} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

