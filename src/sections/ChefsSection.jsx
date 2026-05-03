import schoolLogo from '../assets/logo.png';
import ChefCard from '../components/ChefCard';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import { chefs } from '../data/siteData';

const chefOverrides = {
  'Chef Hassen Allagui': {
    specialty: 'Pâtisserie',
    bio: 'Il transmet les bases de la pâtisserie avec rigueur, précision et sens du détail.',
  },
  'Chef Khalil Arfi': {
    specialty: 'Cuisine',
    bio: "Il accompagne les étudiants dans leur progression en cuisine, avec une attention particulière à l'organisation et à la qualité du travail.",
  },
  'Cheffe Manel Sallemi': {
    specialty: 'Formation pratique',
    bio: 'Elle accompagne les étudiants avec exigence et bienveillance tout au long de leur formation.',
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
          title="Des chefs formateurs au service de votre progression"
          description="Notre équipe transmet les bons gestes, les méthodes de travail et les exigences du métier."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {chefs.map((chef, index) => (
            <Reveal
              key={chef.name}
              delay={index * 0.06}
              variant={index % 2 === 0 ? 'fade-up' : 'zoom-in'}
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

