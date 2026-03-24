import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
;
export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      
    </div>
  );
}