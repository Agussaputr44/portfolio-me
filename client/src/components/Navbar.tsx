import { motion } from "framer-motion";
import { Home, FolderGit2, User, Mail, Briefcase } from "lucide-react";
// import { useTheme } from "../hooks/useTheme";

export const Navbar = () => {
  // const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", icon: <Home size={18} />, label: "Home" },
    { id: "about", icon: <User size={18} />, label: "About" }, 
    { id: "services", icon: <Briefcase size={18} />, label: "Services" }, 
    { id: "projects", icon: <FolderGit2 size={18} />, label: "Work" },
    { id: "contact", icon: <Mail size={18} />, label: "Contact" },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-1 p-1.5 
                   bg-white/80 dark:bg-black/20 
                   backdrop-blur-xl border border-gray-200 dark:border-white/10 
                   rounded-full shadow-lg dark:shadow-purple-900/20 transition-colors duration-300"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="relative px-4 py-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors group"
          >
            <span className="flex items-center gap-2 text-sm font-medium relative z-10">
              {item.icon}
              <span className="hidden sm:block">{item.label}</span>
            </span>
            <span className="absolute inset-0 bg-gray-100 dark:bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
          </button>
        ))}

        {/* <div className="w-[1px] h-6 bg-gray-300 dark:bg-white/20 mx-2"></div> */}

        {/* <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
        >
          {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-700" />}
        </button> */}
      </motion.nav>
    </div>
  );
};