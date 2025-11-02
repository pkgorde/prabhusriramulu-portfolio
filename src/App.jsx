import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import WorkSection from './sections/WorkSection';
import PreviouslySection from './sections/PreviouslySection';
import OtherWorkSection from './sections/OtherWorkSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <WorkSection />
        <PreviouslySection />
        <OtherWorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
