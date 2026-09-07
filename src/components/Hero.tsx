import { motion } from 'motion/react';
import { ArrowRight, Terminal, Cpu, Radio } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#020617]">
      {/* Dynamic Cyber Grid Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(34, 211, 238, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.2) 1px, transparent 1px)`,
            backgroundSize: `40px 40px`,
            transform: 'perspective(1000px) rotateX(60deg) scale(2) translateY(-10%)',
            transformOrigin: 'top center',
          }}
        />
        
        {/* Glowing Orbs for Sci-Fi effect */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        {/* Live Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-sm border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md text-cyan-300 text-xs font-mono font-bold mb-8 uppercase tracking-widest"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <span className="flex items-center gap-2"><Radio className="w-3 h-3" /> Registration Open</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white tracking-tighter leading-[1.1] uppercase">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="inline-block"
            >
              Decode
            </motion.span>
            <br className="hidden md:block" />
            <motion.span
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
            >
              The Future.
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Asia's Largest Science & Technology Festival. Step into a realm where artificial intelligence, robotics, and human ingenuity converge.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
        >
          <a
            href="#"
            className="w-full sm:w-auto group relative px-8 py-4 bg-cyan-500 text-slate-950 font-black rounded-none overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] uppercase tracking-widest text-sm"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            {/* Sci-fi corner cut accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-slate-950" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-slate-950" />
            
            <span className="relative flex items-center justify-center gap-2">
              <Cpu className="w-4 h-4" /> Explore Events
            </span>
          </a>
          
          <a
            href="#"
            className="w-full sm:w-auto group relative px-8 py-4 bg-transparent text-cyan-400 font-bold rounded-none border border-cyan-500/50 hover:bg-cyan-500/10 transition-all uppercase tracking-widest text-sm"
          >
            <span className="relative flex items-center justify-center gap-2">
              <Terminal className="w-4 h-4" /> View Schedule
            </span>
          </a>
        </motion.div>
      </div>
      
      {/* Bottom glowing line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
    </section>
  );
}
