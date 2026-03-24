import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center px-6 md:px-20 py-24 overflow-hidden bg-[#0f172a] text-white"
    >
      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-400/10 pointer-events-none" />

      {/* ✨ GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-blue-400/20 blur-[150px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-emerald-400/20 blur-[120px] rounded-full bottom-[-80px] right-[-80px]" />

      {/* 🌟 CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* 🖼️ IMAGE (LEFT) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative group">

            {/* IMAGE */}
            <div className="w-[260px] md:w-[320px] h-[340px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/profile.jpeg"
                alt="profile"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* ✨ GLOW BORDER */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 to-emerald-400/20 blur-xl -z-10" />
          </div>
        </motion.div>

        {/* 🧠 TEXT (RIGHT) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          {/* SMALL TITLE */}
          <p className="text-sm tracking-[0.2em] text-gray-400 uppercase mb-4">
            About Me
          </p>

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-medium leading-snug mb-5">
            I explore data & build experiences
            <span className="block text-gray-400 mt-2 text-2xl md:text-3xl">
              blending logic with creativity.
            </span>
          </h2>

          {/* TEXT */}
          <div className="space-y-4 text-gray-300 text-[15px] md:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
            <p>
              I’m a data science enthusiast passionate about uncovering insights
              from data and solving real-world problems with analytical thinking.
            </p>

            <p>
              I also explore Android development, building clean and intuitive
              applications focused on user experience and simplicity.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}