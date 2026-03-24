import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/maqlwygr", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setShowModal(true); // 🔥 open modal
    }
  };

  const handleClose = () => {
    setShowModal(false);
    window.location.reload(); // 🔥 refresh page
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

        {/* 📩 FORM */}
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
      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-black rounded-xl p-8 w-[90%] max-w-md text-center relative"
            >
              {/* ❌ CLOSE BUTTON */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-black text-xl font-bold"
              >
                ✕
              </button>

              <h3 className="text-2xl font-semibold mb-3">
                Message Sent ✅
              </h3>

              <p className="text-gray-600 mb-6">
                Your message has been successfully submitted!
              </p>

              <button
                onClick={handleClose}
                className="px-5 py-2 bg-cyan-400 rounded-lg font-medium"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}