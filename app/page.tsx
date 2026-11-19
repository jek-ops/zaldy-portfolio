import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Goals from "@/components/Goals";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Skills />
      <Projects />
      <Journey />
      <Goals />
      <Contact />
    </main>
  );
}
