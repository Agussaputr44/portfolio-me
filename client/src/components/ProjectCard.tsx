import { Project } from '../types';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface Props {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      // CLASS BARU: Glass Effect
      className="group relative rounded-2xl overflow-hidden 
                 bg-white/5 border border-white/10 backdrop-blur-md 
                 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 
                 transition-all duration-300"
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img 
          src={project.image_url || 'https://via.placeholder.com/600x400'} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      <div className="p-6 relative z-20">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
            {project.title}
          </h3>
          {project.repo_url && (
            <a href={project.repo_url} target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all text-white">
              <Github size={18} />
            </a>
          )}
        </div>
        
        <p className="text-gray-300 text-sm mb-5 line-clamp-3 leading-relaxed font-light">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech_stack.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-medium text-purple-200 bg-purple-500/20 rounded-full border border-purple-500/30">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};