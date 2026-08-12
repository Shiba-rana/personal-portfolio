import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import ExperienceEducation from "./components/ExperienceEducation";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import OpenSource from "./components/OpenSource";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen selection:bg-red-500/30">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <ExperienceEducation />
      <Skills />
      <Projects />
      <Certifications />
      <OpenSource />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
