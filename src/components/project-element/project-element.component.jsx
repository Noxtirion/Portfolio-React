import React from "react";

import "./project-element.styles.scss";

const ProjectElement = ({ item: { id, title, description, imageUrl, liveUrl, githubUrl } }) => (
   <div className="project-element">
      <div className="project-element__image">
         <img src={require("../../assets/projects-images/" + imageUrl)} alt="project screenshot" />
         <div className="project-element__links">
            <a href={githubUrl}>Github</a>
            <a href={liveUrl}>LIVE</a>
         </div>
      </div>
      <div className="project-element__info">
         <div className="project-element__title">{title}</div>
         <div className="project-element__description">{description}</div>
      </div>
   </div>
);

export default ProjectElement;
