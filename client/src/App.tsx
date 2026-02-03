import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Terminal, User, Download, ArrowRight, ChevronDown } from 'lucide-react';
import { Navbar } from './components/Navbar';

const LiquidBackground = lazy(() => import('./components/LiquidBackground').then(m => ({ default: m.LiquidBackground })));
const TechStack = lazy(() => import('./components/TechStack').then(m => ({ default: m.TechStack })));
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services }))); 
const Resume = lazy(() => import('./components/Resume').then(m => ({ default: m.Resume })));
const Certifications = lazy(() => import('./components/Certifications').then(m => ({ default: m.Certifications })));
const About = lazy(() => import('./components/AboutMe').then(m => ({ default: m.About })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
const LoadingSection = () => (
  <div className="py-20 flex justify-center items-center opacity-50">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-900 dark:border-white"></div>
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-purple-500/30 transition-colors duration-500 bg-slate-50 dark:bg-[#050505]">
      
      <Suspense fallback={null}>
        <LiquidBackground />
      </Suspense>
      
      <Navbar />

      <main className="relative max-w-6xl mx-auto px-6">
        
        {/* === HERO SECTION === */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center pt-20 relative">
          
           {/* Badge Status */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border 
                       bg-white/50 border-gray-200 text-slate-700
                       dark:bg-white/5 dark:border-white/10 dark:text-emerald-100
                       backdrop-blur-md transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase">
              Available for Hire
            </span>
          </motion.div>

          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-6xl md:text-9xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white"
          >
             Agus Saputra
            <span className="text-purple-600 dark:text-purple-500">.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base font-mono mb-10 text-slate-600 dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-purple-600 dark:text-purple-400" />
              <span>Bengkalis, ID</span>
            </div>
            <div className="hidden md:block w-[1px] h-4 bg-slate-300 dark:bg-white/10"></div>
            <div className="flex items-center gap-2">
              <Terminal size={16} className="text-cyan-600 dark:text-cyan-400" />
              <span>Mobile & Backend Dev</span>
            </div>
            <div className="hidden md:block w-[1px] h-4 bg-slate-300 dark:bg-white/10"></div>
            <div className="flex items-center gap-2">
              <User size={16} className="text-pink-600 dark:text-pink-400" />
              <span>Google Student Ambassador</span>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-light mb-12 text-slate-700 dark:text-gray-300"
          >
            Engineering <span className="font-semibold text-slate-900 dark:text-white border-b-2 border-purple-500/30">scalable solutions</span> with precision & <span className="font-semibold text-slate-900 dark:text-white border-b-2 border-cyan-500/30">user-centric</span> design.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="group relative flex items-center gap-3 px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl
                               bg-slate-900 text-white hover:bg-slate-800
                               dark:bg-white dark:text-black dark:hover:bg-gray-200">
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" /> 
              <span>Download CV</span>
            </button>
            
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 px-8 py-3 rounded-full font-medium transition-all backdrop-blur-md border
                         bg-white/50 border-slate-200 text-slate-900 hover:bg-white/80
                         dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
            >
              View Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 text-slate-400 dark:text-gray-600"
          >
            <ChevronDown size={24} />
          </motion.div>
        </section>

        {/* 1. About Me (Personal + Github Calendar) */}
        <Suspense fallback={<LoadingSection />}>
          <About />
        </Suspense>

        {/* 2. Tech Stack (Arsenal) */}
        <Suspense fallback={<LoadingSection />}>
          <TechStack />
        </Suspense>

        {/* 3. Services (What I Do) */}
        <Suspense fallback={<LoadingSection />}>
          <Services />
        </Suspense>

        {/* 4. RESUME (Experience & Education) */}
        <Suspense fallback={<LoadingSection />}>
          <Resume />
        </Suspense>

        {/* 5. CERTIFICATIONS */}
        <Suspense fallback={<LoadingSection />}>
          <Certifications />
        </Suspense>

        {/* 6. PROJECTS (Featured Work)  */}
        <Suspense fallback={<LoadingSection />}>
          <Projects />
        </Suspense>

        {/* 7. FOOTER  */}
        <Suspense fallback={<LoadingSection />}>
          <Footer />
        </Suspense>

      </main>
    </div>
  );
}

export default App;