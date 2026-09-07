import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

const liveUpdates = [
  "ROBOWARS ARENA NOW OPEN",
  "GUEST LECTURE: AI IN HEALTHCARE AT CONVOCATION HALL",
  "HACKATHON ROUND 2 RESULTS DECLARED",
  "DRONE RACING: QUARTER FINALS UNDERWAY",
  "TECHCONNECT EXHIBITION: HALL 3",
  "INTERNATIONAL CODING CHALLENGE: 1 HOUR LEFT",
];

export default function EventTicker() {
  return (
    <div className="bg-cyan-500/10 border-y border-cyan-500/20 overflow-hidden py-3 relative z-20 backdrop-blur-md">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#020617] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#020617] to-transparent z-10" />
      
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 10,
          }}
          className="flex gap-8 items-center"
        >
          {[...liveUpdates, ...liveUpdates].map((update, index) => (
            <div key={index} className="flex items-center gap-3">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-100 font-mono text-xs uppercase tracking-widest font-bold">
                {update}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
