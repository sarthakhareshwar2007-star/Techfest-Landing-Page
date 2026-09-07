import { motion } from 'motion/react';
import { Globe2, Users, Zap, Trophy, ArrowRight } from 'lucide-react';

const stats = [
  { label: 'Footfall', value: '175K+', icon: Users },
  { label: 'Colleges', value: '2500+', icon: Globe2 },
  { label: 'Events', value: '100+', icon: Zap },
  { label: 'Prizes', value: '₹5M+', icon: Trophy },
];

export default function About() {
  return (
    <section className="py-24 bg-[#020617] border-t border-cyan-900/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-4">About Techfest</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Catalyzing the <br/> Next Revolution.
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Since its inception in 1998, Techfest has grown to become Asia's Largest Science and Technology Festival. 
                We bring together the brightest minds, the latest innovations, and industry leaders to inspire, educate, and push the boundaries of human potential.
              </p>
              
              <a href="#" className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors group">
                Read our story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 30, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: 0.1 + (index * 0.1), ease: "easeOut" }}
                className="bg-[#030712] p-8 rounded-none border border-cyan-900/30 flex flex-col items-center justify-center text-center group hover:border-cyan-500/50 hover:bg-cyan-950/20 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] relative"
              >
                {/* Tech corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500/50" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500/50" />
                
                <div className="w-12 h-12 bg-[#020617] border border-cyan-900/50 flex items-center justify-center mb-4 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">{stat.value}</div>
                <div className="text-slate-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
