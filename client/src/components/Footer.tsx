import { Github, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <section id="contact" className="py-32 text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
        Ready to collaborate?
      </h2>
      <p className="text-slate-600 dark:text-gray-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
        Seeking a professional software engineering internship or freelance opportunities. Let's create something impactful together.
      </p>
      
      {/* Email CTA */}
      <a 
        href="mailto:agusptr44@gmail.com" 
        className="group relative inline-block text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
      >
        agussaputra.dev@gmail.com
        <span className="my-2  absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
      </a>
      
      {/* Bottom Footer */}
      <div className="mt-24 pt-10 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 dark:text-gray-600 text-sm gap-4 transition-colors duration-300">
        <p>© {new Date().getFullYear()} Agus Saputra. All Rights Reserved.</p>
        
        <div className="flex gap-6 items-center">
          <a href="https://github.com/Agussaputr44" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2">
            <Github size={16} /> GitHub
          </a>
          <a href="https://linkedin.com/in/agusptraa" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="https://instagram.com/agusptr44" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2">
            <Instagram size={16} /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
};