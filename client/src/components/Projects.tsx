import { Suspense, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Layout } from 'lucide-react';
import { fetchProjects } from '../services/api';
import { Project } from '../types';

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
          {project.tech_stack.slice(0, 3).map((tech) => (
            <span key={tech} className="px-3 py-1 text-[10px] font-medium rounded-full border bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-500/20 dark:text-purple-200 dark:border-purple-500/30">
              {tech}
            </span>
          ))}
          {project.tech_stack.length > 3 && <span className="text-[10px] text-slate-400">+{project.tech_stack.length - 3} more</span>}
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// 2. SUB-COMPONENT: PROJECT MODAL (FULL VIEW)
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
            {project.tech_stack.map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300">
                {tech}
              </span>
            ))}
          </div>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h4 className="text-slate-400 uppercase text-xs tracking-widest mb-2">Project Overview</h4>
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

  const { data: projects, isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  if (isLoading) {
    return (
      <section id="projects" className="py-24 px-4">
        <HeaderSection count={0} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-96 bg-gray-100 dark:bg-white/5 rounded-3xl animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  if (isError) return <div className="text-center py-24 text-red-500">Gagal memuat data project.</div>;

  return (
    <section id="projects" className="py-24 px-4 scroll-mt-20 max-w-7xl mx-auto">
      <HeaderSection count={projects?.length || 0} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects?.map((project: Project, idx: number) => (
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