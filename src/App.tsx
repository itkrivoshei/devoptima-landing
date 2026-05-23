import CallToActionSection from './components/CallToActionSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import SolutionsSection from './components/SolutionsSection';

const App = () => {
  return (
    <div className='min-h-screen overflow-hidden bg-background text-slate-50'>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SolutionsSection />
        <ProcessSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
