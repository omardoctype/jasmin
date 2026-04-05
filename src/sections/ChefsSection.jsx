import schoolLogo from '../assets/logo.png';
import ChefCard from '../components/ChefCard';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { chefs } from '../data/siteData';

const chefOverrides = {
  'Chef Hassen Allagui': {
    specialty: 'Patisserie fine',
    bio: 'Transmet les fondamentaux de la patisserie fine avec une attention particuliere aux textures, aux finitions et a la regularite du geste.',
  },
  'Chef Khalil Arfi': {
    specialty: 'Cuisine gastronomique',
    bio: "Guide les etudiants en cuisine gastronomique autour de la precision technique, de l'organisation et du sens du detail en service.",
  },
  'Cheffe Manel Sallemi': {
    specialty: 'Patisserie fine',
    bio: 'Cheffe en patisserie fine, elle accompagne les etudiants avec exigence, elegance et sensibilite dans la maitrise des creations sucrees.',
  },
};

export default function ChefsSection() {
  return (
    <section
      id="chefs"
      className="section-shell scroll-mt-32"
    >
      <div className="site-container space-y-14">
        <SectionHeading
          eyebrow="Chefs formateurs"
          eyebrowLogo={schoolLogo}
          title="Des profils experimentes au service de votre progression"
          description="Une equipe qui transmet autant la technique que la discipline, le sens du detail et les standards du monde professionnel."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {chefs.map((chef, index) => (
            <Reveal
              key={chef.name}
              delay={index * 0.06}
            >
              <ChefCard
                {...chef}
                {...chefOverrides[chef.name]}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
