import { motion } from "framer-motion";
import { Home, FolderGit2, Github, Mail } from "lucide-react";

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", icon: <Home size={18} />, label: "Home" },
    { id: "github", icon: <Github size={18} />, label: "Stats" },
    { id: "projects", icon: <FolderGit2 size={18} />, label: "Projects" },
    { id: "contact", icon: <Mail size={18} />, label: "Contact" },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-1 px-2 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-purple-500/5"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="relative px-4 py-2 rounded-full text-gray-400 hover:text-white transition-colors group"
          >
            <span className="flex items-center gap-2 text-sm font-medium relative z-10">
              {item.icon}
              <span className="hidden sm:block">{item.label}</span>
            </span>
            
            {/* Hover Effect: Background halus saat di-hover */}
            <span className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
          </button>
        ))}
      </motion.nav>
    </div>
  );
};