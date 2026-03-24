import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/maqlwygr", { // 🔥 REPLACE THIS
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 md:px-20 py-24 bg-[#0f172a] text-white flex items-center overflow-hidden"
    >
      {/* 🌈 BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-emerald-400/10" />

      {/* ✨ GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-blue-400/20 blur-[140px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-emerald-400/20 blur-[120px] rounded-full bottom-[-80px] right-[-80px]" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">

        {/* 🧠 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12 flex flex-col items-center"
        >
          <p className="text-sm tracking-[0.2em] text-gray-400 uppercase">
            Contact
          </p>

          {/* underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.6 }}
            className="h-[2px] bg-cyan-400 mt-2 mb-4"
          />

          <h2 className="text-3xl md:text-4xl font-medium">
            Let’s Work Together
          </h2>
        </motion.div>

        {/* 📩 FORM / SUCCESS */}
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-cyan-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-cyan-400 outline-none"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg bg-white/10 border border-white/20 focus:border-cyan-400 outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-cyan-400 text-black rounded-lg font-medium shadow-lg hover:shadow-cyan-400/40 transition"
            >
              Send Message 
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-2xl"
          >
            <h3 className="text-2xl text-cyan-400 mb-3">
              Message Sent 
            </h3>
            
          </motion.div>
        )}
      </div>
    </section>
  );
}