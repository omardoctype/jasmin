import { useEffect, useMemo, useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import FormationsSection from './sections/FormationsSection';
import HeroSection from './sections/HeroSection';
import ChefsSection from './sections/ChefsSection';
import SponsorsSection from './sections/SponsorsSection';
import FormationDetailPage from './pages/FormationDetailPage';

function getCurrentRoute() {
  const hash = window.location.hash || '#accueil';

  if (hash.startsWith('#/formations/')) {
    const slug = hash.replace('#/formations/', '').trim();
    return {
      type: 'formation-detail',
      slug,
    };
  }

  return {
    type: 'home',
    slug: null,
  };
}

function App() {
  const [route, setRoute] = useState(() => getCurrentRoute());

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = getCurrentRoute();
      setRoute(nextRoute);

      if (nextRoute.type === 'formation-detail') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      window.requestAnimationFrame(() => {
        const sectionId = window.location.hash.replace('#', '');
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isFormationDetail = useMemo(() => route.type === 'formation-detail', [route.type]);

  return (
    <div className="relative overflow-x-clip">
      <div className="absolute inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(circle_at_top_right,rgba(183,154,107,0.18),transparent_46%),radial-gradient(circle_at_top_left,rgba(216,199,166,0.36),transparent_40%)]" />

      <header className="relative z-30">
        <Navbar />
      </header>

      {isFormationDetail ? (
        <FormationDetailPage slug={route.slug} />
      ) : (
        <main className="pt-24 sm:pt-26">
          <HeroSection />
          <AboutSection />
          <FormationsSection />
          <ChefsSection />
          <SponsorsSection />
          <ContactSection />
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;
