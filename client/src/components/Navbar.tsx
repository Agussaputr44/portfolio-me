import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { 
  Home, User, Cpu, FolderGit2, Briefcase, 
  ScrollText, Wand2, BarChart3 
} from "lucide-react";

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <div className="fixed top-8 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
      <LayoutGroup>
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            flex items-center gap-1 p-1.5 pointer-events-auto
            transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
            rounded-[24px] border border-white/20
            ${scrolled 
              ? "bg-[#f5f5f7]/40 dark:bg-[#1d1d1f]/40 backdrop-blur-[25px] backdrop-saturate-[1.8] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)]" 
              : "bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/5"}
          `}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredSection === item.id;
            const showLabel = isActive || isHovered;

            return (
              <button
                key={item.id}
                onMouseEnter={() => setHoveredSection(item.id)}
                onMouseLeave={() => setHoveredSection(null)}
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
                className="relative flex items-center h-10 px-4 rounded-[18px] transition-all duration-300 outline-none"
              >
                {/* PIL AKTIF: Efek Kaca Abu-abu (Apple Style) */}
                {isActive && (
                  <motion.div
                    layoutId="nav-glow"
                    className="absolute inset-0 bg-gray-500/10 dark:bg-white/10 backdrop-blur-md rounded-[18px] border border-white/20 shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                {/* HOVER INDICATOR: Tipis & Halus */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-gray-400/5 dark:bg-white/5 rounded-[18px]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <div className="relative z-10 flex items-center gap-2">
                  <span className={`transition-colors duration-300 ${isActive ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-500"}`}>
                    {item.icon}
                  </span>

                  <AnimatePresence mode="popLayout" initial={false}>
                    {showLabel && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.9, x: -5 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, x: -5 }}
                        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        className={`text-[13px] font-semibold tracking-tight whitespace-nowrap
                          ${isActive ? "text-slate-900 dark:text-white" : "text-slate-500"}`}
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
      </LayoutGroup>
    </div>
  );
};