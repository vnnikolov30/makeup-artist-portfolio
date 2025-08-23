import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import FadeInSection from "./components/FadeInSection";

export default function Home() {
  return (
    <>
      <FadeInSection>
        <Header />
      </FadeInSection>
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <Services />
      </FadeInSection>
      <FadeInSection>
        <Portfolio />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
    </>
  );
}
