import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Competitions', href: '#' },
    { name: 'Lectures', href: '#' },
    { name: 'Exhibitions', href: '#' },
    { name: 'Workshops', href: '#' },
    { name: 'Sponsors', href: '#' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#020617]/90 backdrop-blur-md border-cyan-900/50 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-md overflow-hidden border border-white/20 shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_techfest.jpg" 
              alt="Techfest IIT Bombay" 
              className="w-full h-full object-cover mix-blend-screen"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-wider text-white uppercase leading-none">TECHFEST</span>
            <span className="text-[0.65rem] text-cyan-400 tracking-widest uppercase font-mono mt-0.5">IIT Bombay</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href="#"
            className="px-5 py-2.5 rounded-full bg-white text-slate-950 font-semibold text-sm hover:bg-cyan-50 transition-colors"
          >
            Register Now
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 p-6 shadow-2xl md:hidden flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 mt-4 border-t border-white/10">
            <a
              href="#"
              className="block w-full text-center px-5 py-3 rounded-lg bg-white text-slate-950 font-semibold hover:bg-cyan-50 transition-colors"
            >
              Register Now
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
