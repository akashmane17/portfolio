import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import statements from "@/content/about-me";
import projects from "@/content/projects";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <Navbar />
        <Hero />
        <About statements={statements} />

        <h2 id="projects" className="section-title">
          Projects
        </h2>

        <Projects projects={projects} />

        <div className="background" />

        <h2 id="contact" className="section-title">
          Contact me!
        </h2>

        <Contact />

        <Footer />

        <ScrollToTop />
      </div>
    </>
  );
}
