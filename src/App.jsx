import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contacts from "./components/Contacts";
import Welcome from "./components/Welcome"; // ✅ add this

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {/* ✅ Welcome Screen */}
      {!entered && <Welcome onEnter={() => setEntered(true)} />}

      {/* ✅ Your existing code (UNCHANGED) */}
      {entered && (
        <div className="bg-black text-white">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contacts />
        </div>
      )}
    </>
  );
}