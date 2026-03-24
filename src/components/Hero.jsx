
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  // 🧠 mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  const rotateX = useTransform(smoothY, [-300, 300], [10, -10]);
  const rotateY = useTransform(smoothX, [-300, 300], [-10, 10]);

  const bgX = useTransform(smoothX, [-500, 500], [-80, 80]);
  const bgY = useTransform(smoothY, [-500, 500], [-80, 80]);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="home"
      className="h-screen bg-black text-white flex items-center justify-center relative overflow-hidden"
    >
      {/* 🌌 BACKGROUND GLOW (SMOOTH + PREMIUM) */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[900px] h-[900px] bg-blue-500 rounded-full blur-[220px] opacity-20"
      />

      <motion.div
        style={{ x: bgX, y: bgY }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[700px] h-[700px] bg-green-400 rounded-full blur-[180px] opacity-10"
      />

      {/* 🌟 CONTENT */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="z-10 text-center px-4"
      >
        {/* 👋 INTRO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-400 mb-4 tracking-widest uppercase text-sm"
        >
          Creative Developer
        </motion.p>

        {/* 🔥 NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text"
        >
          Srabani Gorai
        </motion.h1>

        {/* 💬 TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 max-w-xl mx-auto"
        >
          I build smooth, interactive and visually engaging digital experiences
          that feel as good as they look.
        </motion.p>

        {/* 🔘 BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex gap-6 justify-center flex-wrap"
        >
          <a href="#projects">
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              className="px-6 py-3 border border-white hover:bg-white hover:text-black transition"
            >
              View Work
            </motion.button>
          </a>

          <a href="/CV.pdf" download>
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              className="px-6 py-3 border border-white hover:bg-white hover:text-black transition"
            >
              Download CV
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}