import { motion } from "framer-motion";
import { GithubCalendar } from "./GithubCalenders";
export const About = () => {
  return (
    <section id="about" className="py-24 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Kolom Kiri: Cerita (Diambil dari PROFILE CV) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            About Me
          </h2>
          
          <div className="space-y-4 text-slate-600 dark:text-gray-400 leading-relaxed text-base md:text-lg">
            <p>
              I am a <strong className="text-slate-900 dark:text-white">Final-year Software Engineering student</strong> with proven expertise in <span className="text-cyan-600 dark:text-cyan-400 font-medium">Mobile Development (Flutter)</span> and <span className="text-cyan-600 dark:text-cyan-400 font-medium">Backend Engineering (Laravel/Spring Boot)</span>.
            </p>
            
            <p>
              Experienced in developing scalable applications for logistics and environmental sectors, including projects utilizing <strong className="text-slate-900 dark:text-white">Generative AI integration</strong>, Location-Based Services (LBS), and secure reporting platforms.
            </p>
            
            <p>
              Complementing my technical skills is my leadership experience as a <span className="text-purple-600 dark:text-purple-400 font-bold">Google Student Ambassador</span>, where I bridge the gap between technology and community.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
               {/* Soft Skills Chips dari CV */}
               {["Public Speaking", "Fast Learner", "Adaptability", "Team Leadership"].map((skill) => (
                 <span key={skill} className="px-3 py-1 bg-slate-200 dark:bg-white/10 rounded-full text-xs font-bold text-slate-700 dark:text-white/80">
                   {skill}
                 </span>
               ))}
            </div>
          </div>
        </motion.div>

        {/* Kolom Kanan: GitHub Stats */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Hiasan background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl -z-10 rounded-full" />
          
          <div className="bg-white/50 dark:bg-[#0a0a0a] p-6 rounded-3xl border border-slate-200 dark:border-white/10 backdrop-blur-sm shadow-xl">
             <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
               Code Consistency
               <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
             </h3>
             <GithubCalendar />
          </div>
        </motion.div>
      </div>
    </section>
  );
};