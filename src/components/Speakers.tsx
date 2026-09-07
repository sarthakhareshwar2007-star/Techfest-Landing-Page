import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const speakers = [
  {
    name: "Sophia",
    title: "First Robot Citizen",
    desc: "Hanson Robotics' most advanced human-like robot, representing the future of AI and human-robot interaction.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Bjarne Stroustrup",
    title: "Creator of C++",
    desc: "Computer scientist and creator of one of the world's most widely used and influential programming languages.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Jimmy Wales",
    title: "Co-founder, Wikipedia",
    desc: "Internet entrepreneur and visionary who democratized access to human knowledge across the globe.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=500"
  }
];

export default function Speakers() {
  return (
    <section className="py-24 bg-[#020617] border-t border-cyan-900/30 relative overflow-hidden">
      {/* Background Matrix/Grid Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            Eminent Personalities
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Voices of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Future</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            Hear from Nobel Laureates, Turing Award winners, and the pioneers who are actively writing the next chapter of human history.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              className="group relative bg-[#030712] border border-cyan-900/40 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Sci-fi corner brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors" />
              
              <div className="relative h-64 w-full mb-6 overflow-hidden bg-slate-900 border border-cyan-900/50 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10" />
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Scanning line animation on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.8)] -translate-y-full group-hover:animate-[scan_1s_ease-in-out_infinite] z-20" />
              </div>

              <Quote className="w-8 h-8 text-cyan-900/50 mb-4 group-hover:text-cyan-500/30 transition-colors" />
              <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-wide">{speaker.name}</h3>
              <p className="text-cyan-400 text-sm font-mono mb-4">{speaker.title}</p>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                {speaker.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
