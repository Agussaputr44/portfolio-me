import { Suspense, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Layout } from 'lucide-react';
import { Project } from '../types';

// ==========================================
// UTILS: DYNAMIC VARIANTS
// ==========================================
const getVariant = (id: number) => {
  const variants = [
    { color: "from-purple-600 to-indigo-600", bg: "1e1b4b", text: "a855f7" }, 
    { color: "from-cyan-500 to-blue-600", bg: "083344", text: "22d3ee" },    
    { color: "from-rose-500 to-pink-600", bg: "450a0a", text: "fb7185" },    
    { color: "from-amber-500 to-orange-600", bg: "451a03", text: "fbbf24" }, 
    { color: "from-emerald-500 to-teal-600", bg: "022c22", text: "34d399" }, 
  ];
  return variants[id % variants.length];
};

// ==========================================
// STATIC DATA — sourced from CV "KEY PROJECT" section
// (previously fetched from Supabase; now static since the backend is offline)
// ==========================================
const placeholderImg = (title: string, idx: number) => {
  const v = getVariant(idx);
  return `https://placehold.co/600x400/${v.bg}/${v.text}?text=${encodeURIComponent(title)}&font=playfair`;
};

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Rekaloka',
    description:
      'A gamified cultural heritage exploration app built with Flutter, integrating Location-Based Services (LBS) to surface cultural content based on user proximity. Includes a Generative AI feature that reconstructs 2D prompts into 3D cultural object models via a chat interface, plus a mission validation system using geolocation and camera access to verify visits to cultural sites.',
    tech_stack: ['Flutter', 'Generative AI', 'LBS', 'Firebase'],
    image_url: placeholderImg('Rekaloka', 0),
  },
  {
    id: '2',
    title: 'Siap PA',
    description:
      'A secure reporting platform for violence against women and children, built with Flutter (mobile) and Laravel (backend). Supports multimedia evidence uploads (photos & videos) via API, real-time report status tracking, and a monitoring dashboard for authorities to manage cases efficiently.',
    tech_stack: ['Flutter', 'Laravel', 'REST API'],
    image_url: placeholderImg('Siap PA', 1),
  },
  {
    id: '3',
    title: 'My Presensi',
    description:
      'A secure mobile attendance system using Location-Based Services (LBS) for precise employee tracking. Features a custom Fake GPS Detection algorithm to prevent location spoofing and ensure data integrity during check-ins, optimized for reliability on low-bandwidth Android devices.',
    tech_stack: ['Flutter', 'Android', 'LBS'],
    image_url: placeholderImg('My Presensi', 2),
  },
  {
    id: '4',
    title: 'GreenPoint',
    description:
      'A digital waste bank application built with Flutter and Laravel that incentivizes recycling through a reward point system. Integrates QR Code scanning for transaction recording, Google Maps API for locating nearby waste banks, Google Sign-In authentication, and real-time push notifications.',
    tech_stack: ['Flutter', 'Laravel', 'Google Maps API'],
    image_url: placeholderImg('GreenPoint', 3),
  },
];

// ==========================================
// 1. SUB-COMPONENT: PROJECT CARD
// ==========================================
interface CardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ project, index, onClick }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer relative rounded-2xl overflow-hidden transition-all duration-300
                 bg-white border border-slate-200 shadow-sm
                 dark:bg-white/5 dark:border-white/10 dark:shadow-none
                 hover:shadow-2xl hover:border-purple-300 dark:hover:border-white/20 
                 dark:hover:shadow-purple-500/10 hover:-translate-y-1"
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
        <img 
          src={project.image_url || 'https://via.placeholder.com/600x400'} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      <div className="p-6 relative z-20">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold transition-colors text-slate-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-300">
            {project.title}
          </h3>
          <Layout size={18} className="text-slate-400 group-hover:text-purple-500 transition-colors" />
        </div>
        
        <p className="text-sm mb-5 line-clamp-2 leading-relaxed font-light text-slate-600 dark:text-gray-300">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech_stack.slice(0, 3).map((tech, i) => {
            const variant = getVariant(i);
            return (
              <span 
                key={tech} 
                style={{ 
                  backgroundColor: `#${variant.bg}15`, // 15 = low opacity hex
                  color: `#${variant.text}`,
                  borderColor: `#${variant.text}30`
                }}
                className="px-3 py-1 text-[10px] font-bold rounded-full border"
              >
                {tech}
              </span>
            );
          })}
          {project.tech_stack.length > 3 && (
            <span className="text-[10px] text-slate-400 self-center">
              +{project.tech_stack.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// 2. SUB-COMPONENT: PROJECT MODAL
// ==========================================
const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-5xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors">
          <X size={24} />
        </button>

        <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
          <img src={project.image_url || 'https://via.placeholder.com/600x400'} className="w-full h-full object-cover" alt={project.title} />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white leading-tight">{project.title}</h2>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech_stack.map((tech, i) => {
              const variant = getVariant(i);
              return (
                <span 
                  key={tech} 
                  style={{ 
                    backgroundColor: `#${variant.bg}`, 
                    color: `#${variant.text}`,
                    borderColor: `#${variant.text}40`
                  }}
                  className="px-3 py-1 text-xs font-bold rounded-full border"
                >
                  {tech}
                </span>
              );
            })}
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h4 className="text-slate-400 uppercase text-xs tracking-widest mb-2 font-semibold">Project Overview</h4>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-line font-light">
              {project.description}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {project.repo_url && (
              <a href={project.repo_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-all font-medium">
                <Github size={20} /> Repository
              </a>
            )}
            <a href="#" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white transition-all font-medium shadow-lg shadow-purple-500/25">
              <ExternalLink size={20} /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// ==========================================
// 3. MAIN COMPONENT: PROJECTS SECTION
// ==========================================
export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects = projectsData;

  return (
    <section id="projects" className="py-24 px-4 scroll-mt-20 max-w-7xl mx-auto">
      <HeaderSection count={projects.length} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: Project, idx: number) => (
          <Suspense key={project.id || idx} fallback={<div className="h-96 bg-gray-100 dark:bg-white/5 rounded-3xl animate-pulse"/>}>
            <ProjectCard 
              project={project} 
              index={idx} 
              onClick={() => setSelectedProject(project)} 
            />
          </Suspense>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const HeaderSection = ({ count }: { count: number }) => (
  <div className="flex items-end justify-between mb-12 border-b border-slate-200 dark:border-white/10 pb-6 transition-colors duration-300">
    <div>
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Featured Work</h2>
      <p className="text-slate-600 dark:text-gray-400">Selected projects from my professional journey.</p>
    </div>
    <div className="hidden md:block text-sm text-slate-500 dark:text-gray-600 font-mono">
      01 — {String(count).padStart(2, '0')}
    </div>
  </div>
);