import { motion } from "framer-motion";
import { Smartphone, Globe, Database, Server } from "lucide-react";

const services = [
  {
    icon: <Globe size={24} />,
    title: "Web Development",
    desc: "Building high-performance, SEO-friendly, and responsive web applications using React & Laravel."
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile Apps",
    desc: "Developing native-feel Android & iOS applications with Flutter. Single codebase for multi-platform delivery."
  },
  {
    icon: <Database size={24} />,
    title: "Backend Systems",
    desc: "Architecting scalable, secure, and fast REST APIs using Python (FastAPI), PHP (Laravel), or Spring Boot."
  },
  {
    icon: <Server size={24} />,
    title: "DevOps & Deployment",
    desc: "Managing application deployment on VPS/Cloud (AWS), utilizing Docker for containerization and ensuring reliable uptime."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          How I Can Help
        </h2>
        <p className="text-slate-600 dark:text-gray-400 max-w-2xl font-mono mx-auto">
          Bridging technical engineering with product strategy to deliver scalable digital solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border transition-all duration-300 group
                       bg-white/50 dark:bg-white/5 
                       border-gray-200 dark:border-white/10 
                       hover:border-purple-500/50 dark:hover:border-purple-500/50
                       hover:shadow-xl hover:shadow-purple-500/10"
          >
            <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-900 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
            <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};