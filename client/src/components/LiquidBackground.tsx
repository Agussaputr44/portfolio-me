import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const LiquidBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring lebih "kenyal" (stiffness naik dikit)
  const springX = useSpring(mouseX, { stiffness: 120, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset dikurangi karena ukuran blob mengecil (biar tetap tengah)
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-[#050505]">
      
      {/* 1. CURSOR FOLLOWER (Lebih Kecil & Tajam) */}
      <motion.div
        style={{ x: springX, y: springY }}
        // Ukuran dikecilkan jadi 300px (tadinya 500px)
        className="absolute w-[300px] h-[300px] bg-purple-600/30 rounded-full blur-[80px] opacity-60"
      />

      {/* 2. AMBIENCE KANAN BAWAH (Lebih Kecil) */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"
      />

      {/* 3. AMBIENCE KIRI ATAS (Lebih Kecil) */}
      <motion.div
        animate={{ x: [0, -50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[300px] h-[300px] bg-fuchsia-600/10 rounded-full blur-[90px]"
      />
    </div>
  );
};