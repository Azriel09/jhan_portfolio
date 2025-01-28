import { RefObject, useRef } from "react";
import Navigation from "./Navigation/Navigation";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Contacts from "./Sections/Contacts";
import Projects from "./Sections/Projects";
import { useSectionState } from "../context/section_context";
import { useElementDetector } from "use-detector-hook";

export default function HomeContainer() {
  const { setCurrentSection } = useSectionState();
  const hero = useRef<HTMLElement>(null);
  const about = useRef<HTMLElement>(null);
  const contacts = useRef<HTMLElement>(null);
  const projects = useRef<HTMLElement>(null);

  const scrollToSection = (elementRef: RefObject<HTMLDivElement>) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const heroVisible = useElementDetector(
    hero,
    { threshold: 0.6 },
    {
      onTriggerEnter: () => setCurrentSection("hero"),
    }
  );

  const aboutVisible = useElementDetector(
    about,
    { threshold: 0.6 },
    {
      onTriggerEnter: () => setCurrentSection("about"),
    }
  );

  const projectsVisible = useElementDetector(
    projects,
    { threshold: 0.6 },
    {
      onTriggerEnter: () => setCurrentSection("projects"),
    }
  );

  const contactVisible = useElementDetector(
    contacts,
    { threshold: 0.6 },
    {
      onTriggerEnter: () => setCurrentSection("contact"),
    }
  );

  return (
    <>
      <Hero heroRef={hero} scrollToSection={scrollToSection} aboutRef={about} />
      <Navigation
        scrollToSection={scrollToSection}
        hero={hero}
        projects={projects}
        about={about}
        contacts={contacts}
      />
      <About aboutRef={about} scrollToSection={scrollToSection} />
      <Projects projectsRef={projects} scrollToSection={scrollToSection} />
      <Contacts contactsRef={contacts} scrollToSection={scrollToSection} />
    </>
  );
}
