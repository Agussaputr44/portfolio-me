import { motion } from "framer-motion";
import { 
  SiFlutter, SiDart, SiLaravel, SiPhp, SiPython, 
  SiReact, SiTypescript, SiTailwindcss, SiDocker, 
  SiSupabase, SiGit, SiFigma, SiFirebase // Import Firebase
} from "react-icons/si";

// Tambahkan Firebase ke list
const techs = [
  { name: "Flutter", icon: <SiFlutter className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]" /> },
  { name: "Dart", icon: <SiDart className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.8)]" /> },
  { name: "React", icon: <SiReact className="text-cyan-300 drop-shadow-[0_0_15px_rgba(103,232,249,0.8)]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" /> },
  { name: "Python", icon: <SiPython className="text-yellow-300 drop-shadow-[0_0_15px_rgba(253,224,71,0.8)]" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-300 drop-shadow-[0_0_15px_rgba(94,234,212,0.8)]" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]" /> },
  { name: "Supabase", icon: <SiSupabase className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.8)]" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.8)]" /> }, // Firebase Added
  { name: "Git", icon: <SiGit className="text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-400 drop-shadow-[0_0_15px_rgba(244,114,182,0.8)]" /> },
];

const MarqueeContent = ({ isColored = false }: { isColored?: boolean }) => (
  <motion.div
    className="flex gap-16 whitespace-nowrap px-10"
    animate={{ x: [0, -1500] }}
    transition={{
      repeat: Infinity,
      ease: "linear",
      duration: 30, 
    }}
  >
    {[...techs, ...techs, ...techs].map((tech, index) => (
      <div key={index} className="flex flex-col items-center gap-4 w-20">
        <span className={`text-5xl transition-all duration-300 
          ${isColored ? 'opacity-100 scale-110' : 'opacity-20 grayscale scale-90 dark:opacity-20'}`
        }>
          {tech.icon}
        </span>
      </div>
    ))}
  </motion.div>
);

export const TechStack = () => {
  return (
    <section className="py-24 overflow-hidden relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-wide transition-colors">
          The Arsenal
        </h2>
        <p className="text-slate-500 dark:text-gray-500 text-sm font-mono">
          Tools & Technologies
        </p>
      </div>

      <div className="relative flex w-full h-32 items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-10 flex items-center">
          <MarqueeContent isColored={false} />
        </div>

        <div 
          className="absolute inset-0 z-20 flex items-center"
          style={{
            maskImage: "linear-gradient(90deg, transparent 0%, transparent 40%, black 48%, black 52%, transparent 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, transparent 40%, black 48%, black 52%, transparent 60%, transparent 100%)"
          }}
        >
          <MarqueeContent isColored={true} />
        </div>

      </div>
    </section>
  );
};