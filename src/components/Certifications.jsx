import { useState } from "react";
import { motion } from "framer-motion";

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  const certs = [
    {
      title: "Cloud Computing",
      org: "NPTEL",
      desc: "Completed 12-week certified course with strong fundamentals in cloud technologies.",
      score: "67%",
      date: "Jan – Apr 2025",
      img: "/cert1.jpeg"
    },
    {
      title: "Android Developer Pro",
      org: "Lovely Professional University",
      desc: "Hands-on training covering Android development, UI/UX, and Play Store deployment.",
      score: "Completed",
      date: "Jun – Jul 2025",
      img: "/cert2.jpeg"
    },
    {
      title: "Communication Skills",
      org: "Lovely Professional University",
      desc: "Focused on professional communication, confidence building, and presentation skills.",
      score: "Grade A",
      date: "Sep – Oct 2023",
      img: "/cert3.jpeg"
    }
  ];

  return (
    <>
      <section
        id="certifications"
        className="relative min-h-screen px-6 md:px-20 py-24 bg-[#0f172a] text-white overflow-hidden"
      >
        {/* 🌈 BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-400/10" />

        {/* ✨ GLOW */}
        <div className="absolute w-[700px] h-[700px] bg-blue-400/20 blur-[160px] rounded-full top-[-120px] left-[-120px]" />
        <div className="absolute w-[500px] h-[500px] bg-emerald-400/20 blur-[140px] rounded-full bottom-[-100px] right-[-100px]" />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* 🧠 HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16 flex flex-col items-center"
          >
            <p className="text-sm tracking-[0.2em] text-gray-400 uppercase">
              Certifications
            </p>

            {/* ✨ UNDERLINE */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 0.6 }}
              className="h-[2px] bg-cyan-400 mt-2 mb-4"
            />

            <h2 className="text-3xl md:text-4xl font-medium">
              My Achievements
            </h2>
          </motion.div>

          {/* 🎴 CARDS */}
          <div className="grid md:grid-cols-3 gap-8">

            {certs.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}

                whileHover={{
                  scale: 1.05,
                  y: -8
                }}

                onClick={() => setSelected(cert.img)}

                className="relative group bg-black/40 border border-cyan-400/20 backdrop-blur-xl rounded-xl p-6 cursor-pointer overflow-hidden text-left"
              >
                {/* ✨ GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 blur-xl" />
                </div>

                {/* 🔥 CONTENT */}
                <h3 className="text-lg font-semibold mb-1">
                  {cert.title}
                </h3>

                <p className="text-cyan-400 text-sm mb-2">
                  {cert.org}
                </p>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.desc}
                </p>

                {/* 📊 DETAILS */}
                <div className="flex justify-between text-xs text-gray-400">
                  <span>📅 {cert.date}</span>
                  <span>⭐ {cert.score}</span>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  Click to view certificate
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* 🔥 MODAL */}
      {selected && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* OUTSIDE CLICK */}
          <div
            className="absolute inset-0"
            onClick={() => setSelected(null)}
          />

          {/* MODAL BOX */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0, y: 80 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative w-[90%] md:w-[70%] max-h-[85%] z-10"
          >
            {/* CLOSE */}
            <button
  onClick={() => setSelected(null)}
  className="absolute top-4 right-4 z-20 
             w-9 h-9 flex items-center justify-center 
             rounded-full 
             bg-white/30 backdrop-blur-md 
             text-black text-lg 
             border border-white/40 
             shadow-lg 
             hover:scale-110 hover:bg-white/50 
             transition duration-300"
>
  ✕
</button>

            {/* IMAGE */}
            <img
              src={selected}
              alt="certificate"
              className="w-full h-full object-contain rounded-xl border border-white/20 shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}