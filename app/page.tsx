import Nav from "@/components/Nav";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Jokers from "@/components/Jokers";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import TableWatermarks from "@/components/TableWatermarks";
import TableProps from "@/components/TableProps";

export default function Home() {
  return (
    <div className="page-wrap">
      <TableWatermarks />
      <TableProps />
      <Nav />
      <main>
        <About />
        <Skills />
        <Jokers />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
