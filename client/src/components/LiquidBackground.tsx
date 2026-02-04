import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const LiquidBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring lebih "kenyal" (stiffness naik dikit)
  const springX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset -150 supaya kursor ada di tengah bola (karena ukurannya 300px)
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden transition-colors duration-500
                    bg-slate-50 dark:bg-[#050505]">
      
      {/* 1. CURSOR FOLLOWER */}
      {/* Light: Biru Langit (blue-400) biar kontras di putih */}
      {/* Dark: Ungu Neon (purple-600) biar estetik di hitam */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-60 transition-colors duration-500
                   bg-blue-400/30 dark:bg-purple-600/30"
      />

      {/* 2. AMBIENCE KANAN BAWAH */}
      {/* Light: Cyan Cerah (cyan-300) */}
      {/* Dark: Cyan Redup (cyan-500/10) */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full blur-[100px] transition-colors duration-500
                   bg-cyan-300/40 dark:bg-cyan-500/10"
      />

      {/* 3. AMBIENCE KIRI ATAS */}
      {/* Light: Pink Lembut (pink-300) */}
      {/* Dark: Fuchsia Gelap (fuchsia-600/10) */}
      <motion.div
        animate={{ x: [0, -50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full blur-[90px] transition-colors duration-500
                   bg-pink-300/40 dark:bg-fuchsia-600/10"
      />
    </div>
  );
};