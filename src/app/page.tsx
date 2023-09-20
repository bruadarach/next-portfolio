import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Intro from "@/components/IntroSection/Intro";
import About from "@/components/aboutSection/About";
import Skill from "@/components/skillSection/Skill";
import Project from "@/components/projectSection/Project";
import Contact from "@/components/contactSection/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <Intro />
        <About />
        <Skill />
        <Project />
        <Contact />
      </div>
    </>
  );
}
