import { motion } from "framer-motion";
import { 
  SiFlutter, SiDart, SiLaravel, SiPhp, SiPython, 
  SiReact, SiTypescript, SiTailwindcss, SiDocker, 
  SiSupabase, SiGit, SiFigma 
} from "react-icons/si";

// Definisi Data Icon dengan Warna Aslinya
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
  { name: "Git", icon: <SiGit className="text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-400 drop-shadow-[0_0_15px_rgba(244,114,182,0.8)]" /> },
];

// Komponen Helper biar kodingan gak duplikat
// Menerima prop 'isColored' untuk menentukan mode B/W atau Warna
const MarqueeContent = ({ isColored = false }: { isColored?: boolean }) => (
  <motion.div
    className="flex gap-16 whitespace-nowrap px-10"
    animate={{ x: [0, -1500] }}
    transition={{
      repeat: Infinity,
      ease: "linear",
      duration: 30, // Kecepatan harus SAMA PERSIS antara dua layer
    }}
  >
    {[...techs, ...techs, ...techs].map((tech, index) => (
      <div key={index} className="flex flex-col items-center gap-4 w-20">
        <span className={`text-5xl transition-all duration-300 
          ${isColored ? 'opacity-100 scale-110' : 'opacity-20 grayscale scale-90'}`
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
        <h2 className="text-2xl font-bold text-white mb-2 tracking-wide">The Arsenal</h2>
        <p className="text-gray-500 text-sm font-mono">Tools & Technologies</p>
      </div>

      <div className="relative flex w-full h-32 items-center justify-center overflow-hidden">
        
        {/* === LAYER 1: BASE (HITAM PUTIH) === */}
        {/* Layer ini terlihat di pinggir kiri & kanan */}
        <div className="absolute inset-0 z-10 flex items-center">
          <MarqueeContent isColored={false} />
        </div>

        {/* === LAYER 2: OVERLAY (BERWARNA) === */}
        {/* Layer ini ditumpuk di atas, TAPI kita potong (masking) pinggirnya */}
        {/* Jadi warna aslinya cuma bocor di tengah doang */}
       <div 
  className="absolute inset-0 z-20 flex items-center"
  style={{
    // Masking Lebih Sempit (Sniper Focus):
    // Kiri Transparan (0-40%) -> Fade In (40-48%) -> Tengah Jelas (48-52%) -> Fade Out (52-60%) -> Kanan Transparan
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