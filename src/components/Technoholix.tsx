import { motion } from 'motion/react';
import { Play, Flame, Music, Sparkles } from 'lucide-react';

export default function Technoholix() {
  return (
    <section className="relative py-32 bg-[#020617] border-t border-cyan-900/30 overflow-hidden">
      {/* Background Image / Video Mockup */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#020617]/80 z-10" /> {/* Dark overlay */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2000" 
            alt="Concert Crowd" 
            className="w-full h-full object-cover opacity-30 mix-blend-screen"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-purple-950/50 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold uppercase tracking-widest mb-6">
                <Flame className="w-3 h-3" />
                The Night Segment
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-[1.1]">
                Technoholix <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  Unleashed.
                </span>
              </h2>
              <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-8">
                When the sun sets, technology meets entertainment. Witness breathtaking laser shows, international EDM artists, fire-dancing robots, and visual spectacles that defy imagination.
              </p>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="group relative px-8 py-4 bg-purple-600 text-white font-black rounded-none overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] uppercase tracking-widest text-sm flex items-center gap-3"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                  <Play className="w-4 h-4 fill-white" /> Watch Teaser
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
            {[
              { icon: Sparkles, label: 'Laser Shows', bg: 'from-purple-500/20' },
              { icon: Music, label: 'EDM Nights', bg: 'from-pink-500/20' },
              { icon: Flame, label: 'Fire Performers', bg: 'from-red-500/20' },
              { icon: Play, label: '3D Mapping', bg: 'from-blue-500/20' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
                className={`bg-gradient-to-br ${item.bg} to-transparent border border-white/10 p-6 aspect-square flex flex-col items-center justify-center text-center group hover:border-purple-500/50 transition-colors backdrop-blur-sm relative`}
              >
                {/* Tech corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 group-hover:border-purple-400" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 group-hover:border-purple-400" />
                
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                  <item.icon className="w-6 h-6 text-white group-hover:text-purple-300" />
                </div>
                <h4 className="text-white font-bold tracking-wide uppercase text-sm">{item.label}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
