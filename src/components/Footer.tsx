import { Github, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020617] border-t border-cyan-900/40 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-md overflow-hidden border border-white/20">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_techfest.jpg" 
                  alt="Techfest IIT Bombay" 
                  className="w-full h-full object-cover mix-blend-screen"
                />
              </div>
              <span className="font-extrabold text-lg tracking-wider text-white uppercase">TECHFEST</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Asia's Largest Science and Technology Festival. IIT Bombay. <br/>
              Inspiring the next generation of innovators.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Sponsors</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Competitions</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Lectures</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Exhibitions</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Workshops</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex items-center bg-slate-900 rounded-lg p-1 border border-white/10">
              <div className="pl-3 pr-2 py-2">
                <Mail className="w-4 h-4 text-slate-500" />
              </div>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none text-sm text-white w-full py-2 focus:ring-0"
              />
              <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 rounded-md text-sm font-semibold transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Techfest, IIT Bombay. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
