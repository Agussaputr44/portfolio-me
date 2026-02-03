import { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { fetchProjects } from '../services/api';
import { Project } from '../types';

// ==========================================
// 1. SUB-COMPONENT: PROJECT CARD (Desain Kamu)
// ==========================================
interface CardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden transition-all duration-300
                 bg-white border border-slate-200 shadow-sm
                 dark:bg-white/5 dark:border-white/10 dark:shadow-none
                 hover:shadow-2xl hover:border-purple-300 dark:hover:border-white/20 
                 dark:hover:shadow-purple-500/10 hover:-translate-y-1"
    >
      <div className="h-48 overflow-hidden relative">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
        
        <img 
          src={project.image_url || 'https://via.placeholder.com/600x400'} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      <div className="p-6 relative z-20">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold transition-colors
                         text-slate-900 group-hover:text-purple-600 
                         dark:text-white dark:group-hover:text-purple-300">
            {project.title}
          </h3>
          
          {project.repo_url && (
            <a href={project.repo_url} target="_blank" 
               className="p-2 rounded-full transition-all
                          bg-slate-100 text-slate-600 hover:bg-slate-200
                          dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
              <Github size={18} />
            </a>
          )}
        </div>
        
        <p className="text-sm mb-5 line-clamp-3 leading-relaxed font-light
                      text-slate-600 dark:text-gray-300">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech_stack.map((tech) => (
            <span key={tech} 
                  className="px-3 py-1 text-xs font-medium rounded-full border transition-colors
                             bg-purple-50 text-purple-700 border-purple-200
                             dark:bg-purple-500/20 dark:text-purple-200 dark:border-purple-500/30">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// 2. MAIN COMPONENT: PROJECTS SECTION
// ==========================================
export const Projects = () => {
  // Fetch Data dari API
  const { data: projects, isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  // Loading State (Skeleton)
  if (isLoading) {
    return (
      <section id="projects" className="py-24 scroll-mt-20">
        <HeaderSection count={0} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-96 bg-gray-100 dark:bg-white/5 rounded-3xl animate-pulse" />
          ))}
        </div>
      </section>
    );
  }

  // Error State
  if (isError) {
    return (
      <section id="projects" className="py-24 text-center">
         <p className="text-red-500">Gagal memuat data project.</p>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 scroll-mt-20">
      
      {/* Header Section */}
      <HeaderSection count={projects?.length || 0} />

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects?.map((project: Project, idx: number) => (
          <Suspense key={project.id || idx} fallback={<div className="h-96 bg-gray-100 dark:bg-white/5 rounded-3xl animate-pulse"/>}>
             {/* Panggil Sub-Component ProjectCard di sini */}
             <ProjectCard project={project} index={idx} />
          </Suspense>
        ))}
      </div>
    </section>
  );
};

// ==========================================
// 3. HELPER: HEADER SECTION
// ==========================================
const HeaderSection = ({ count }: { count: number }) => (
  <div className="flex items-end justify-between mb-12 border-b border-slate-200 dark:border-white/10 pb-6 transition-colors duration-300">
    <div>
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
        Featured Work
      </h2>
      <p className="text-slate-600 dark:text-gray-400">
        Selected projects from my professional journey.
      </p>
    </div>
    <div className="hidden md:block text-sm text-slate-500 dark:text-gray-600 font-mono">
      01 — {String(count).padStart(2, '0')}
    </div>
  </div>
);