import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contacts from "./components/Contacts";
import Welcome from "./components/Welcome";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <CursorGlow />
      <AnimatePresence mode="wait">
        {!entered && (
          <Welcome key="welcome" onEnter={() => setEntered(true)} />
        )}
      </AnimatePresence>

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