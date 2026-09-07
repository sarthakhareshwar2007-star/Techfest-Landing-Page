import { motion } from 'motion/react';
import { Trophy, Mic, Lightbulb, Users } from 'lucide-react';

const events = [
  {
    title: 'Competitions',
    description: 'Test your mettle against the best minds. From robotics to coding, hardware to strategy.',
    icon: Trophy,
    color: 'from-orange-400 to-red-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20'
  },
  {
    title: 'Lectures',
    description: 'Hear from Nobel laureates, industry leaders, and pioneers pushing the boundaries of science.',
    icon: Mic,
    color: 'from-blue-400 to-indigo-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20'
  },
  {
    title: 'Exhibitions',
    description: 'Witness the future firsthand. Cutting-edge prototypes and innovations from around the globe.',
    icon: Lightbulb,
    color: 'from-emerald-400 to-teal-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20'
  },
  {
    title: 'Workshops',
    description: 'Hands-on learning sessions conducted by experts to upskill you in the latest technologies.',
    icon: Users,
    color: 'from-purple-400 to-pink-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20'
  }
];

export default function Highlights() {
  return (
    <section className="py-24 bg-[#020617] relative z-10 border-t border-cyan-900/30">
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-screen pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Something for Everyone.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Techfest is a celebration of ideas. Whether you're here to compete, learn, or simply marvel at what's possible, you'll find your place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              className={`p-8 rounded-none bg-[#030712] border border-cyan-900/40 hover:border-cyan-500/60 hover:bg-cyan-950/20 backdrop-blur-sm group hover:-translate-y-2 transition-all duration-300 relative`}
            >
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/50" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500/50" />
              
              <div className={`w-12 h-12 border border-cyan-900/50 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform bg-gradient-to-br ${event.color} bg-clip-text text-transparent group-hover:text-cyan-300`}>
                <event.icon className="w-6 h-6 stroke-cyan-400 group-hover:stroke-cyan-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {event.description}
              </p>
              <div className="mt-6 flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors cursor-pointer">
                Learn more <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
