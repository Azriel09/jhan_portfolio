import { RefObject } from "react";
import "./hero.css";

type HeroSectionProps = {
  heroRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
  scrollToSection: (elementRef: RefObject<HTMLElement>) => void;
};
const HeroSection: React.FC<HeroSectionProps> = ({
  heroRef,
  aboutRef,
  scrollToSection,
}) => {
  return (
    <div className="hero" ref={heroRef}>
      <div className="header">
        <div className="heading line1">
          Hello, I&#39;m <span className="name">Jhan</span>
        </div>
        <div className="heading line2">I&#39;m a Front-end Developer</div>
        <div
          className="heading line3"
          onClick={() => scrollToSection(aboutRef)}
        >
          View My Work ↓
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
