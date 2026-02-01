import { Briefcase, Award, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: "Google Student Ambassador",
    company: "Google",
    date: "2024 - Present",
    desc: "Community Leadership & Tech Evangelism. Memimpin komunitas developer kampus dan mengadakan workshop teknologi.",
    icon: <Briefcase size={18} />,
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Freelance",
    date: "2023 - Present",
    desc: "Mengembangkan aplikasi web & mobile (Flutter/Laravel) untuk klien, termasuk sistem monitoring IoT.",
    icon: <Briefcase size={18} />,
  },
  {
    id: 3,
    role: "Staff HRD (Kaderisasi)",
    company: "Himpunan Mahasiswa TI",
    date: "2023 - 2024",
    desc: "Mengelola pengembangan soft-skill anggota baru dan manajemen talenta organisasi.",
    icon: <Award size={18} />,
  },
  {
    id: 4,
    role: "BNSP Junior Mobile Dev",
    company: "Certification",
    date: "2024",
    desc: "Sertifikasi kompetensi nasional (BNSP) untuk pengembangan aplikasi mobile berbasis Android.",
    icon: <GraduationCap size={18} />,
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 scroll-mt-20">
      <div className="text-center mb-16">
         {/* Judul juga kita kasih animasi dikit biar sopan */}
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
         >
            <h2 className="text-3xl font-bold text-white mb-2">Professional Journey</h2>
            <p className="text-gray-500 font-mono">Experience, Organization & Certification</p>
         </motion.div>
      </div>
      
      <div className="relative max-w-4xl mx-auto space-y-8">
        {/* Garis Vertikal Tengah (Animasi memanjang) */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-white/10 md:left-1/2 md:-ml-[1px]" 
        />

        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id} 
            // ANIMASI UTAMA: Fade In + Slide Up
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} // margin -100px biar animasinya mulai pas elemen udah agak naik dikit
            transition={{ duration: 0.6, delay: index * 0.2 }} // Ada delay bertahap biar ga muncul barengan
            className={`relative flex items-start gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            
            {/* Ikon Bulat di Tengah (Efek Pop Up) */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.2 + 0.2 }}
              className="absolute left-0 md:left-1/2 md:-ml-[20px] z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#050505] border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] text-purple-400"
            >
              {exp.icon}
            </motion.div>

            {/* Spacer Kosong */}
            <div className="hidden md:block w-1/2" />

            {/* Konten Kartu */}
            <div className="flex-1 ml-12 md:ml-0 md:px-12">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">{exp.role}</h3>
                  <span className="text-xs font-mono text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/10">{exp.date}</span>
                </div>
                <div className="text-sm text-cyan-400 mb-3 font-medium font-mono">{exp.company}</div>
                <p className="text-sm text-gray-400 leading-relaxed font-light">{exp.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};