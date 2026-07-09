import Nav from "@/components/Nav";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Jokers from "@/components/Jokers";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <About />
        <Skills />
        <Jokers />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
