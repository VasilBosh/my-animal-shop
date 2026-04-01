import './App.css';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Product from './sections/Product';
import Benefits from './sections/Benefits';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  return (
    <main className="min-h-screen bg-[#FDFBF6]">
      <Hero />
      <Problem />
      <Product />
      <Benefits />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
