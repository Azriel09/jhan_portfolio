import "./projects.css";
import "./main-styles.css";
import { RefObject } from "react";

type ProjectsProps = {
  projectsRef: RefObject<HTMLHeadingElement>;
};
const ProjectsSection: React.FC<ProjectsProps> = ({ projectsRef }) => {
  return (
    <div className="projects page" ref={projectsRef}>
      <h2 className="page-header">Projects</h2>
    </div>
  );
};

export default ProjectsSection;
