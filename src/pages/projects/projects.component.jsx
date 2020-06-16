import React from "react";
import PROJECTS_DATA from "./projects.data";

import ProjectElement from "../../components/project-element/project-element.component";

import "./projects.styles.scss";

const Projects = () => {
   const projectElements = PROJECTS_DATA.map(item => <ProjectElement key={item.id} item={item} />);

   return (
      <section className="projects">
         <div className="projects__title">Projects</div>
         {projectElements}
      </section>
   );
};

export default Projects;
