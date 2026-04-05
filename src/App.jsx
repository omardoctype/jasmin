import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import FormationsSection from './sections/FormationsSection';
import HeroSection from './sections/HeroSection';
import ChefsSection from './sections/ChefsSection';
import SponsorsSection from './sections/SponsorsSection';

function App() {
  return (
    <div className="relative overflow-x-clip">
      <div className="absolute inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(circle_at_top_right,rgba(183,154,107,0.18),transparent_46%),radial-gradient(circle_at_top_left,rgba(216,199,166,0.36),transparent_40%)]" />

      <header className="relative z-30">
        <Navbar />
      </header>

      <main className="pt-24 sm:pt-26">
        <HeroSection />
        <AboutSection />
        <FormationsSection />
        <ChefsSection />
        <SponsorsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
