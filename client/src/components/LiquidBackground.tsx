import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const LiquidBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-slate-50 dark:bg-[#050505] transition-colors duration-500">
      
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-60
                   bg-blue-300/40 dark:bg-purple-600/30 transition-colors duration-500"
      />

      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full blur-[100px]
                   bg-pink-300/30 dark:bg-cyan-500/10 transition-colors duration-500"
      />

      <motion.div
        animate={{ x: [0, -50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full blur-[90px]
                   bg-purple-300/30 dark:bg-fuchsia-600/10 transition-colors duration-500"
      />
    </div>
  );
};