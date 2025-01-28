import "./about.css";
import "./main-styles.css";
import ProfilePNG from "../../assets/profile-icon.png";
import JavascriptPNG from "../../assets/javascript.png";
import HtmlPNG from "../../assets/html.png";
import CssPNG from "../../assets/css.png";
import MongoDBPNG from "../../assets/mongodb.png";
import NodeJSPNG from "../../assets/nodejs.png";
import SassPNG from "../../assets/sass.png";
import ReactPNG from "../../assets/react.png";
import MuiPNG from "../../assets/mui.png";
import GitPNG from "../../assets/git.png";
import MySQLPNG from "../../assets/mysql.png";
import { RefObject } from "react";

type AboutProps = {
  aboutRef: RefObject<HTMLDivElement>;
};

const AboutSection: React.FC<AboutProps> = ({ aboutRef }) => {
  const skillsObj = {
    first: [HtmlPNG, CssPNG, GitPNG],
    first_names: ["HTML", "CSS", "GIT"],
    first_altNames: ["html", "css", "git"],
    second: [JavascriptPNG, ReactPNG, MySQLPNG, MongoDBPNG],
    second_names: ["JAVASCRIPT", "REACT", "MySQL", "MONGODB"],
    second_altNames: ["javascript", "react", "mysql", "mongodb"],
    third: [NodeJSPNG, SassPNG, MuiPNG],
    third_names: ["NODE.JS", "SASS", "MUI"],
    third_altNames: ["nodejs", "sass", "mui"],
  };

  return (
    <div className="about page">
      <h2 className="page-header" ref={aboutRef}>
        About
      </h2>
      <div className="about-content">
        <div className="about-me">
          <img src={ProfilePNG} className="profile-icon" />
          <div className="about-me-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="about-skills">
          <div className="1st skill-column">
            {skillsObj["first"].map((png, i) => {
              return (
                <div className="skill-container" key={i}>
                  <img
                    src={png}
                    alt={`${skillsObj["first_altNames"][i]}-icon`}
                    className="skill-icon"
                  />
                  <div className="skill-name">
                    {skillsObj["first_names"][i]}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="2nd skill-column">
            {skillsObj["second"].map((png, i) => {
              return (
                <div className="skill-container" key={i}>
                  <img
                    src={png}
                    alt={`${skillsObj["second_altNames"][i]}-icon`}
                    className="skill-icon"
                  />
                  <div className="skill-name">
                    {skillsObj["second_names"][i]}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="3rd skill-column">
            {skillsObj["third"].map((png, i) => {
              return (
                <div className="skill-container" key={i}>
                  <img
                    src={png}
                    alt={`${skillsObj["third_altNames"][i]}-icon`}
                    className="skill-icon"
                  />
                  <div className="skill-name">
                    {skillsObj["third_names"][i]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
