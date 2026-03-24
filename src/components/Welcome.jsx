
import { motion } from "framer-motion";

export default function Welcome({ onEnter }) {
  return (
    <div className="fixed inset-0 bg-[#0f172a] flex items-center justify-center z-[999] overflow-hidden">

      {/* 🌈 BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-blue-400/20 blur-[150px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-emerald-400/20 blur-[140px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* ✨ CONTENT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        {/* 👋 TEXT */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-semibold text-white mb-4"
        >
          Welcome
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 mb-8"
        >
          Step into my digital space 
        </motion.p>

        {/* 🚀 BUTTON */}
        <motion.button
          onClick={onEnter}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-blue-400 to-emerald-400 text-black rounded-lg font-medium shadow-lg hover:shadow-emerald-400/40 transition"
        >
          Enter →
        </motion.button>
      </motion.div>
    </div>
  );
}