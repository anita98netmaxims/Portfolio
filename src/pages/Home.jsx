import MainLayout from "../layouts/MainLayout";

import Hero from "../components/sections/hero/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </MainLayout>
  );
}

export default Home;