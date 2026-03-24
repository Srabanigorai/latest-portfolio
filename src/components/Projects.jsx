
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Air Quality Dashboard",
      subtitle: "AQI Trend Analysis with Power BI",
      desc: "Designed an interactive dashboard to visualize air quality trends across Indian states and cities.",
      tech: ["Power BI", "Power Query", "DAX", "Maps"],
      features: [
        "State-wise monitoring station distribution",
        "Pollutant breakdown (PM2.5, PM10, SO2, NO2, CO, O3)",
        "AQI categories from Good to Hazardous",
        "Time-based trend analysis"
      ],
      image: "/aqi.jpeg"
    },
    {
      title: "VetGuard",
      subtitle: "AI-Enabled Pet Health Management",
      desc: "Mobile application to monitor and manage pet health using AI-driven insights.",
      tech: ["Android Studio", "Kotlin", "XML", "Firebase"],
      features: [
        "Pet health tracking system",
        "AI-based recommendations",
        "Realtime data sync",
        "Secure cloud storage"
      ],
      github: "https://github.com/9520140503/Vet-Guard"
    },
    {
      title: "Shopping Trends Dashboard",
      subtitle: "Excel Data Analysis Project",
      desc: "Interactive dashboard to analyze shopping behavior and customer trends.",
      tech: ["Excel", "Pivot Tables", "Slicers", "Charts"],
      features: [
        "Data summarization using Pivot Tables",
        "Dynamic filtering with slicers",
        "Consumer behavior insights",
        "Clean visual reporting"
      ]
    }
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 md:px-20 py-24 bg-[#0f172a] text-white overflow-hidden"
    >
      {/* 🌈 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-400/10" />

      {/* ✨ GLOW */}
      <div className="absolute w-[700px] h-[700px] bg-blue-400/20 blur-[160px] rounded-full top-[-120px] left-[-120px]" />
      <div className="absolute w-[500px] h-[500px] bg-emerald-400/20 blur-[140px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* 🌟 CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* 🧠 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.2em] text-gray-400 uppercase mb-3">
            Projects
          </p>

          <h2 className="text-3xl md:text-4xl font-medium">
            Selected Work
          </h2>
        </motion.div>

        {/* 🔥 PROJECTS */}
        <div className="space-y-20">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >

              {/* 🖼️ IMAGE */}
              {project.image && (
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="rounded-xl overflow-hidden border border-white/10 shadow-lg"
                >
                  <img
                    src={project.image}
                    alt="project"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}

              {/* 📄 TEXT */}
              <div className="space-y-4">

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {project.subtitle}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* ⚙️ TECH */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* ✨ FEATURES */}
                <ul className="text-sm text-gray-400 space-y-1">
                  {project.features.map((f, idx) => (
                    <li key={idx}>• {f}</li>
                  ))}
                </ul>

                {/* 🔗 BUTTON */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="inline-block mt-3 px-4 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
                  >
                    View Code
                  </a>
                )}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}