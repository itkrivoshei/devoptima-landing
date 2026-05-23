import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import SolutionsSection from './components/SolutionsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-primary-bg text-text-primary">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SolutionsSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
