import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import WorkSection from './sections/WorkSection';
import PreviouslySection from './sections/PreviouslySection';
import OtherWorkSection from './sections/OtherWorkSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <main>
        <HeroSection />
        <WorkSection />
        <PreviouslySection />
        <OtherWorkSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
