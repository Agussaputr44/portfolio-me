import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { 
  Home, User, Cpu, FolderGit2, Briefcase, 
  ScrollText, Wand2, BarChart3, Menu, X 
} from "lucide-react";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", icon: <Home size={18} />, label: "Home" },
    { id: "about", icon: <User size={18} />, label: "About" },
    { id: "skills", icon: <Cpu size={18} />, label: "Skills" },
    { id: "projects", icon: <FolderGit2 size={18} />, label: "Work" },
    { id: "experience", icon: <Briefcase size={18} />, label: "Resume" },
    { id: "certs", icon: <ScrollText size={18} />, label: "Certs" },
    { id: "services", icon: <Wand2 size={18} />, label: "Services" },
    { id: "analytics", icon: <BarChart3 size={18} />, label: "Stats" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const current = navItems.find((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -200 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="fixed top-6 sm:top-8 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
      <LayoutGroup>
        {/* DESKTOP NAVBAR */}
        <motion.nav
          className={`
            hidden md:flex items-center gap-1 p-1.5 pointer-events-auto
            rounded-[24px] border border-white/20 transition-all duration-700
            ${scrolled 
              ? "bg-[#f5f5f7]/40 dark:bg-[#1d1d1f]/40 backdrop-blur-[25px] backdrop-saturate-[1.8] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)]" 
              : "bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/5"}
          `}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredSection === item.id;
            return (
              <button
                key={item.id}
                onMouseEnter={() => setHoveredSection(item.id)}
                onMouseLeave={() => setHoveredSection(null)}
                onClick={() => handleNavClick(item.id)}
                className="relative flex items-center h-10 px-4 rounded-[18px] transition-all duration-300 outline-none"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute inset-0 bg-gray-500/10 dark:bg-white/10 backdrop-blur-md rounded-[18px] border border-white/20 shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <div className="relative z-10 flex items-center gap-2">
                  <span className={`${isActive ? "text-slate-900 dark:text-white" : "text-slate-500"}`}>
                    {item.icon}
                  </span>
                  <AnimatePresence mode="popLayout">
                    {(isActive || isHovered) && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.9, x: -5 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, x: -5 }}
                        className={`text-[13px] font-semibold tracking-tight ${isActive ? "text-slate-900 dark:text-white" : "text-slate-500"}`}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            );
          })}
        </motion.nav>

        {/* MOBILE HAMBURGER BUTTON */}
        <motion.div className="md:hidden flex justify-end w-full max-w-md pointer-events-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-4 rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/20 shadow-xl text-slate-900 dark:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>

        {/* MOBILE MENU OVERLAY */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute top-20 left-4 right-4 md:hidden pointer-events-auto
                         bg-white/80 dark:bg-[#1d1d1f]/90 backdrop-blur-[30px] 
                         border border-white/20 rounded-[32px] p-4 shadow-2xl"
            >
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex flex-col items-center justify-center gap-3 p-6 rounded-[24px] transition-all
                                ${activeSection === item.id 
                                  ? "bg-gray-500/10 dark:bg-white/10 border border-white/20" 
                                  : "hover:bg-white/50 dark:hover:bg-white/5"}`}
                  >
                    <span className={activeSection === item.id ? "text-purple-500" : "text-slate-500"}>
                      {item.icon}
                    </span>
                    <span className={`text-xs font-bold uppercase tracking-widest 
                                    ${activeSection === item.id ? "text-slate-900 dark:text-white" : "text-slate-500"}`}>
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
};