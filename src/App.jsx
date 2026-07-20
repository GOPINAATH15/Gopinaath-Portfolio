import Navbar from "./components/Navbar";
import FloatingBackground from "./components/FloatingBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-base text-ink selection:bg-accent relative overflow-hidden">
      <FloatingBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
