import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import FadeInSection from "./components/FadeInSection";
import Events from "./components/Events";

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
        <Events/>
      <FadeInSection>
        <Contact />
      </FadeInSection>
    </>
  );
}
