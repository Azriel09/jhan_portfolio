import useDetectScroll from "@smakss/react-scroll-direction";
import { useSectionState } from "../../context/section_context";
import "./Navigation.css";
import { useState, useEffect, useRef } from "react";

type NavigationProps = {
  hero: React.RefObject<HTMLElement>;
  projects: React.RefObject<HTMLElement>;
  about: React.RefObject<HTMLElement>;
  contacts: React.RefObject<HTMLElement>;
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
};

export default function Navigation({
  hero,
  projects,
  about,
  contacts,
  scrollToSection,
}: NavigationProps) {
  const navigation = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const { currentSection } = useSectionState();
  const { scrollDir } = useDetectScroll();
  const viewportWidth = window.innerWidth;

  const handleScroll = () => {
    // Detects collision of navbar to the top
    const navContainer = document.getElementById("nav-container");
    if (navContainer) {
      const origPost = navContainer.getBoundingClientRect();
      if (origPost.top <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    } // Detects collision of navbar to the top
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDir]);
  return (
    <div id="nav-container">
      <div
        // Always sticky on wide screen but only sticky in mobile when scrolling up
        className={
          (isSticky && viewportWidth > 600) || (isSticky && scrollDir === "up")
            ? "sticky"
            : "notSticky"
        }
        id="navbar"
        ref={navigation}
      >
        <div className="link-container">
          <a
            onClick={() => scrollToSection(hero)}
            className={`nav-link ${
              currentSection === "hero" ? "highlight" : ""
            }`}
          >
            Home
          </a>
        </div>
        <div className="link-container">
          <a
            onClick={() => scrollToSection(about)}
            className={`nav-link ${
              currentSection === "about" ? "highlight" : ""
            }`}
          >
            About
          </a>
        </div>
        <div className="link-container">
          <a
            onClick={() => scrollToSection(projects)}
            className={`nav-link ${
              currentSection === "projects" ? "highlight" : ""
            }`}
          >
            Projects
          </a>
        </div>
        <div className="link-container">
          <a
            onClick={() => scrollToSection(contacts)}
            className={`nav-link ${
              currentSection === "contact" ? "highlight" : ""
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
