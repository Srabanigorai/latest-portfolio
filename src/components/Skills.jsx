import {
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from "framer-motion";
import { useEffect } from "react";

export default function Skills() {

  // 🧠 mouse tracking (same system as hero)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const rotateX = useTransform(smoothY, [-300, 300], [10, -10]);
  const rotateY = useTransform(smoothX, [-300, 300], [-10, 10]);

  const parallaxX = useTransform(smoothX, [-500, 500], [-40, 40]);
  const parallaxY = useTransform(smoothY, [-500, 500], [-40, 40]);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const skills = [
    { name: "Python", level: "Advanced" },
    { name: "Data Science", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" }
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center px-6 md:px-20 py-24 overflow-hidden bg-[#0f172a] text-white"
    >
      {/* 🌈 BACKGROUND */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-400/10"
      />

      {/* ✨ GLOW */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute w-[700px] h-[700px] bg-blue-400/20 blur-[160px] rounded-full top-[-120px] left-[-120px]"
      />
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute w-[500px] h-[500px] bg-emerald-400/20 blur-[140px] rounded-full bottom-[-100px] right-[-100px]"
      />

      {/* 🌟 CONTENT */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 max-w-6xl mx-auto w-full"
      >

        {/* 🧠 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] text-gray-400 uppercase mb-4">
            Skills
          </p>

          <h2 className="text-3xl md:text-4xl font-medium">
            What I Work With
          </h2>
        </motion.div>

        {/* 🎴 CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}

              whileHover={{
                scale: 1.08,
                rotateX: 8,
                rotateY: -8
              }}

              className="relative group bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl p-6 text-center overflow-hidden"
            >
              {/* ✨ GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-emerald-400/20 blur-xl" />
              </div>

              {/* 🔥 CONTENT */}
              <h3 className="text-lg font-semibold mb-2">
                {skill.name}
              </h3>

              <p className="text-gray-300 text-sm">
                {skill.level}
              </p>

            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>
  );
}