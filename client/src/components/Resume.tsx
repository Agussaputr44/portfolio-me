import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, Building2 } from "lucide-react";

const experienceData = [
  {
    id: 1,
    role: "Google Student Ambassador",
    company: "Google",
    date: "Aug 2025 - Feb 2026", 
    desc: "Selected as a campus leader to bridge the gap between Google technologies and university students. Organized 'Gemini AI Socialization' events and designed creative campaigns to promote Google developer tools.",
    type: "Leadership"
  },
  {
    id: 2,
    role: "Flutter Developer & Project Manager",
    company: "Rekaloka (Project)",
    date: "Nov 2025 - Des 2025",
    desc: "Leading the development of a gamified cultural heritage app. Engineered AI-powered features (Gen AI) to reconstruct 2D prompts into 3D models and implemented LBS for mission validation.",
    type: "Work"
  },
{
    id: 3,
    role: "Flutter Developer & Project Manager", 
    company: "GreenPoint (Project)",
    date: "Nov 2024 - Jan 2025", 
    desc: "Created a digital waste bank ecosystem using Flutter & Laravel to incentivize recycling. Integrated QR Code scanning for seamless transactions and Google Maps API for location services.",
    type: "Work"
  },
  {
    id: 4,
    role: "Staff of Kaderisasi",
    company: "HMTI (Student Association)",
    date: "Feb 2024 - Jan 2025",
    desc: "Coordinated annual student orientation for 200+ new students and collaborated with the core committee to execute regeneration strategies.",
    type: "Organization"
  }
];

const educationData = [
  {
    id: 1,
    school: "Politeknik Negeri Bengkalis",
    degree: "B.ASc - Software Engineering",
    date: "2022 - 2026 (Expected)",
    gpa: "3.75/4.00",
    desc: "Relevant Coursework: AI, Mobile & Web Programming, Software Testing & QA. Achievements: 2nd Best Winner ICIF 2025.",
    location: "Bengkalis, Riau"
  },
  {
    id: 2,
    school: "Universitas Airlangga",
    degree: "Exchange Student - Informatics Engineering",
    date: "2024",
    gpa: "-",
    desc: "Pertukaran Mahasiswa Merdeka. Focused on building Multiplatform & Web Apps and IT Project Management methodologies.",
    location: "Surabaya, Indonesia"
  }
];

export const Resume = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="resume" className="py-24 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Professional History
        </h2>
        
        {/* TAB SWITCHER */}
        <div className="inline-flex p-1 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 relative">
          <motion.div 
            className="absolute top-1 bottom-1 rounded-full bg-white dark:bg-purple-600 shadow-sm z-0"
            layoutId="activeTab"
            initial={false}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            style={{
              left: activeTab === 'experience' ? '4px' : '50%',
              width: 'calc(50% - 4px)'
            }}
          />
          
          <button onClick={() => setActiveTab('experience')} className={`relative z-10 px-6 md:px-10 py-2 rounded-full text-sm font-bold transition-colors duration-300 flex items-center gap-2 ${activeTab === 'experience' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-gray-400'}`}>
            <Briefcase size={16} /> Experience
          </button>
          
          <button onClick={() => setActiveTab('education')} className={`relative z-10 px-6 md:px-10 py-2 rounded-full text-sm font-bold transition-colors duration-300 flex items-center gap-2 ${activeTab === 'education' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-gray-400'}`}>
            <GraduationCap size={16} /> Education
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 min-h-[400px]">
        <AnimatePresence mode="wait">
          {/* EXPERIENCE CONTENT */}
          {activeTab === 'experience' && (
            <motion.div key="experience" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }} className="space-y-8">
              {experienceData.map((item) => (
                <div key={item.id} className="group relative pl-8 border-l-2 border-slate-200 dark:border-white/10 hover:border-purple-500 dark:hover:border-purple-500 transition-colors duration-300">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-100 dark:bg-[#0a0a0a] border-2 border-slate-300 dark:border-white/20 group-hover:border-purple-500 group-hover:bg-purple-500 transition-all" />
                  <div className="bg-white/60 dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{item.role}</h3>
                      <span className="flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full">
                         <Calendar size={12} /> {item.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-cyan-700 dark:text-cyan-400 mb-4">
                      <Building2 size={14} /> {item.company}
                    </div>
                    <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* EDUCATION CONTENT */}
          {activeTab === 'education' && (
            <motion.div key="education" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationData.map((item) => (
                <div key={item.id} className="bg-white/60 dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-cyan-500 dark:hover:border-cyan-500 hover:shadow-lg transition-all duration-300 group">
                   <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                      <GraduationCap size={24} />
                   </div>
                   <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.school}</h3>
                   <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-6">{item.degree}</div>
                   <div className="flex flex-col gap-3 text-xs text-slate-500 dark:text-gray-400 font-mono border-t border-slate-200 dark:border-white/10 pt-4">
                      <div className="flex items-center gap-2"><Calendar size={14} /> {item.date}</div>
                      <div className="flex items-center gap-2"><MapPin size={14} /> {item.location}</div>
                      {item.gpa !== "-" && <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-900/20 w-fit px-2 py-1 rounded">GPA: {item.gpa}</div>}
                   </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};