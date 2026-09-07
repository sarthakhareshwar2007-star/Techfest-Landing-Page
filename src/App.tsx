import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventTicker from './components/EventTicker';
import About from './components/About';
import Highlights from './components/Highlights';
import Speakers from './components/Speakers';
import Technoholix from './components/Technoholix';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-50 selection:bg-cyan-500/30 selection:text-cyan-100">
      <Navbar />
      <main>
        <Hero />
        <EventTicker />
        <About />
        <Highlights />
        <Speakers />
        <Technoholix />
      </main>
      <Footer />
    </div>
  );
}
