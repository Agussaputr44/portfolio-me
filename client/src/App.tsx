import { Suspense, lazy } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Terminal, 
  Clock, 
  ArrowRight, 
  Download, 
  ChevronDown 
} from 'lucide-react';

import { fetchProjects } from './services/api';
import { Navbar } from './components/Navbar';

const LiquidBackground = lazy(() => import('./components/LiquidBackground').then(m => ({ default: m.LiquidBackground })));
const TechStack = lazy(() => import('./components/TechStack').then(m => ({ default: m.TechStack })));
const Experience = lazy(() => import('./components/Experience').then(m => ({ default: m.Experience })));
const ProjectCard = lazy(() => import('./components/ProjectCard').then(m => ({ default: m.ProjectCard })));
import { GithubCalendar } from './components/GithubCalenders';
const LoadingSection = () => (
  <div className="py-20 flex justify-center items-center opacity-50">
    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
  </div>
);

function App() {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-purple-500/50">
      
      <Suspense fallback={null}>
        <LiquidBackground />
      </Suspense>
      
      <Navbar />

      <main className="relative max-w-5xl mx-auto px-6">
        
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center pt-20 relative">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)] cursor-default hover:border-white/20 transition-all"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-medium text-emerald-100 tracking-widest uppercase">
              Available for Hire
            </span>
          </motion.div>

          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-6xl md:text-9xl font-black mb-6 tracking-tighter"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]">
              Agus Saputra
            </span>
            <span className="text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base text-gray-400 font-mono mb-10"
          >
            {/* Lokasi */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-white/5 transition-colors cursor-default border border-transparent hover:border-white/5">
              <MapPin size={16} className="text-purple-400" />
              <span>Pekanbaru, ID</span>
            </div>

            <div className="hidden md:block w-[1px] h-4 bg-white/10"></div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-white/5 transition-colors cursor-default border border-transparent hover:border-white/5">
              <Terminal size={16} className="text-cyan-400" />
              <span>Software Engineer</span>
            </div>

            <div className="hidden md:block w-[1px] h-4 bg-white/10"></div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-white/5 transition-colors cursor-default border border-transparent hover:border-white/5">
              <Clock size={16} className="text-pink-400" />
              <span>WIB (UTC+7)</span>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-12"
          >
            Crafting <span className="text-white font-medium border-b border-purple-500/30">scalable systems</span> & <span className="text-white font-medium border-b border-cyan-500/30">pixel-perfect</span> interfaces for the modern web.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="group relative flex items-center gap-3 px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" /> 
              <span>Download CV</span>
            </button>
            
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 px-8 py-3 bg-white/5 text-white border border-white/10 rounded-full font-medium hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
            >
              View Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1, duration: 2, repeat: Infinity }}
            className="absolute bottom-10 text-gray-600"
          >
            <ChevronDown size={24} />
          </motion.div>
        </section>


        <Suspense fallback={<LoadingSection />}>
          <TechStack />
        </Suspense>

        <section id="github" className="py-24 scroll-mt-20">
           <div className="mb-10 text-center md:text-left">
             <h2 className="text-3xl font-bold text-white mb-2">Coding Activity</h2>
             <p className="text-gray-500">Konsistensi dalam setiap baris kode.</p>
           </div>
           <Suspense fallback={<LoadingSection />}>
             <GithubCalendar />
           </Suspense>
        </section>

        <Suspense fallback={<LoadingSection />}>
          <Experience />
        </Suspense>

        <section id="projects" className="py-24 scroll-mt-20">
          <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Featured Work</h2>
              <p className="text-gray-400">Beberapa project pilihan yang saya banggakan.</p>
            </div>
            <div className="hidden md:block text-sm text-gray-600 font-mono">
              01 — {projects ? String(projects.length).padStart(2, '0') : '00'}
            </div>
          </div>

          {isLoading ? (
            <LoadingSection />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects?.map((project, idx) => (
                <Suspense key={project.id} fallback={<div className="h-96 bg-white/5 rounded-3xl animate-pulse"/>}>
                  <ProjectCard project={project} index={idx} />
                </Suspense>
              ))}
            </div>
          )}
        </section>

        <section id="contact" className="py-32 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's work together.</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Tertarik membuat project bareng atau sekedar diskusi teknologi? 
            Saya selalu terbuka untuk peluang baru.
          </p>
          
          <a 
            href="mailto:agusptr44@gmail.com" 
            className="group relative inline-block text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 hover:text-white transition-colors duration-300"
          >
            agusptr44@gmail.com
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm gap-4">
            <p>© {new Date().getFullYear()} Agus Saputra. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="https://github.com/agusptr44" target="_blank" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;