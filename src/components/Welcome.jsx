import { motion, AnimatePresence } from "framer-motion";

export default function Welcome({ onEnter }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-[#0f172a] flex items-center justify-center z-[999] overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* 🌈 BACKGROUND GLOW */}
        <div className="absolute w-[700px] h-[700px] bg-blue-400/20 blur-[160px] rounded-full top-[-150px] left-[-150px]" />
        <div className="absolute w-[600px] h-[600px] bg-emerald-400/20 blur-[140px] rounded-full bottom-[-120px] right-[-120px]" />

        {/* 🎬 TEXT */}
        <div className="text-center z-10">

          {/* 👋 NAME / TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-semibold text-white mb-4"
          >
            Welcome to My Portfolio
          </motion.h1>

          {/* ✨ SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 mb-10"
          >
            Crafting data-driven & creative experiences
          </motion.p>

          {/* 🚀 ENTER BUTTON */}
          <motion.button
            onClick={onEnter}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 25px rgba(34,211,238,0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg text-black font-medium 
            bg-gradient-to-r from-blue-400 to-emerald-400"
          >
            Enter Experience →
          </motion.button>
        </div>

        {/* 🎥 FADE OVERLAY (cinematic touch) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          className="absolute inset-0 bg-black pointer-events-none"
        />
      </motion.div>
    </AnimatePresence>
  );
}