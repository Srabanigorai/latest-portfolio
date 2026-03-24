import {
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [openCV, setOpenCV] = useState(false);

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
    <section className="h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      
      {/* 🌌 BACKGROUND */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[900px] h-[900px] bg-blue-500 rounded-full blur-[220px] opacity-20"
      />

      <motion.div
        style={{ x: bgX, y: bgY }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[700px] h-[700px] bg-green-400 rounded-full blur-[180px] opacity-10"
      />

      {/* 🌟 CONTENT */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="z-10 text-center px-4"
      >
        <p className="text-gray-400 mb-4 tracking-widest uppercase text-sm">
          Creative Developer
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
          Srabani Gorai
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto">
          I build smooth, interactive and visually engaging digital experiences
          that feel as good as they look.
        </p>

        {/* 🔘 BUTTONS */}
        <div className="mt-10 flex gap-6 justify-center flex-wrap">

          {/* View Work */}
          <a href="#projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 border border-white hover:bg-white hover:text-black transition"
            >
              View Work
            </motion.button>
          </a>

          {/* Download CV */}
          <a href="/CV.pdf" download>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 border border-white hover:bg-white hover:text-black transition"
            >
              Download CV
            </motion.button>
          </a>

          {/* View CV (MODAL) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setOpenCV(true)}
            className="px-6 py-3 border border-white hover:bg-white hover:text-black transition"
          >
            View CV
          </motion.button>

        </div>
      </motion.div>

      {/* 💬 CV MODAL */}
      {openCV && (
        <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center">

          {/* CLOSE BACKDROP */}
          <div
            className="absolute inset-0"
            onClick={() => setOpenCV(false)}
          />

          {/* MODAL CONTENT */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-[90%] h-[90%] bg-black border border-white/10 rounded-xl overflow-hidden z-10"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpenCV(false)}
              className="absolute top-3 right-4 text-white text-xl z-20"
            >
              ✕
            </button>

            {/* PDF VIEWER */}
            <iframe
              src="/CV.pdf"
              title="CV"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      )}
    </section>
  );
}