import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [openConnect, setOpenConnect] = useState(false);
  const [openCV, setOpenCV] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-20 overflow-hidden bg-[#0f172a] text-white"
    >
      {/* 🌈 GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-400/10 pointer-events-none" />

      {/* ✨ GLOW BLOBS */}
      <div className="absolute w-[700px] h-[700px] bg-blue-400/20 rounded-full blur-[160px] opacity-30 top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[140px] opacity-20 bottom-[-100px] right-[-100px]" />

      {/* 🌟 CONTENT */}
      <div className="relative z-10 text-center max-w-3xl">

        {/* 🔥 TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-semibold leading-tight"
        >
          Hi, I’m Srabani 👋
          <span className="block text-gray-300 mt-2 text-2xl md:text-3xl">
            Data Science Enthusiast & Android Developer
          </span>
        </motion.h1>

        {/* 📄 SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 mt-6 text-sm md:text-base leading-relaxed max-w-xl mx-auto"
        >
          I love exploring data, building meaningful insights, and creating
          simple, user-friendly applications that deliver real impact.
        </motion.p>

        {/* 🔘 BUTTONS */}
        <div className="mt-10 flex gap-4 justify-center flex-wrap">

          {/* Explore */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -3 }}
            className="px-5 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
          >
            Explore Work
          </motion.a>

          {/* View CV */}
          <motion.button
            onClick={() => setOpenCV(true)}
            whileHover={{ scale: 1.05, y: -3 }}
            className="px-5 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
          >
            View CV
          </motion.button>

          {/* Connect */}
          <motion.button
            onClick={() => setOpenConnect(true)}
            whileHover={{ scale: 1.05, y: -3 }}
            className="px-5 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
          >
            Let’s Connect
          </motion.button>

        </div>
      </div>

      {/* 💬 CONNECT MODAL */}
      {openConnect && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50">

          <div className="bg-[#111827] border border-white/10 rounded-xl p-6 w-[300px] text-center">
            <h2 className="text-lg mb-4 text-white">Connect with me</h2>

            <div className="flex flex-col gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                className="border border-white/20 py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Srabanigorai"
                target="_blank"
                className="border border-white/20 py-2 rounded-lg hover:bg-white hover:text-black transition"
              >
                GitHub
              </a>
            </div>

            <button
              onClick={() => setOpenConnect(false)}
              className="mt-4 text-gray-400 hover:text-white text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 📄 CV MODAL */}
      {openCV && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">

          <div className="relative w-[90%] md:w-[70%] h-[80%] bg-[#111827] border border-white/10 rounded-xl overflow-hidden">

            {/* CLOSE */}
            <button
              onClick={() => setOpenCV(false)}
              className="absolute top-3 right-4 text-white text-xl z-10"
            >
              ✕
            </button>

            {/* PDF */}
            <iframe
              src="/CV.pdf"
              title="CV"
              className="w-full h-full"
            />
          </div>
        </div>
      )}

    </section>
  );
}