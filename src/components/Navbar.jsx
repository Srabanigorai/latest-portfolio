import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // 🔥 HIDE / SHOW LOGIC
      if (currentScroll > lastScroll && currentScroll > 80) {
        setVisible(false); // scrolling down → hide
      } else {
        setVisible(true); // scrolling up → show
      }

      setLastScroll(currentScroll);

      // 🌫️ background trigger
      setScrolled(currentScroll > 50);

      // 📍 active section
      let current = "home";
      links.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop - 120;
          if (currentScroll >= top) {
            current = link.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const handleClick = (id) => {
    setActive(id);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -50
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* 🌌 BACKGROUND */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? "bg-[#0f172a]/70 backdrop-blur-2xl border-b border-white/10"
            : "bg-transparent"
        }`}
      />

      {/* 🌟 CONTENT */}
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* 🔥 LOGO */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          onClick={() => handleClick("home")}
          className="text-lg font-semibold cursor-pointer bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text"
        >
          Srabani
        </motion.div>

        {/* 🔗 LINKS */}
        <div className="flex gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className="relative text-sm group"
            >
              {/* TEXT */}
              <span
                className={`transition-colors duration-300 ${
                  active === link.id
                    ? "text-white"
                    : "text-gray-300 group-hover:text-white"
                }`}
              >
                {link.name}
              </span>

              {/* HOVER LINE */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-300 group-hover:w-full" />

              {/* ACTIVE LINE (SMOOTH MOVE) */}
              {active === link.id && (
                <motion.div
                  layoutId="activeLine"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-400 to-emerald-400"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}