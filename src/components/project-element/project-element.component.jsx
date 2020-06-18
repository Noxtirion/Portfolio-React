import React from "react";

import "./project-element.styles.scss";

const ProjectElement = ({
   item: { id, title, description, imageUrl, liveUrl, githubUrl, technologyUsed }
}) => {
   const technologies = technologyUsed.map((item, k) => (
      <div className="project-element__technologies" key={k}>
         {item}
      </div>
   ));

   return (
      <div className="project-element">
         <div className="project-element__image">
            <div className="project-element__card">
               <div className="project-element__front face">
                  <img
                     src={require("../../assets/projects-images/" + imageUrl)}
                     alt="project screenshot"
                  />
               </div>
               <div className="project-element__back face">
                  <div className="project-element__back-line">{technologies}</div>
               </div>
            </div>
         </div>

         <div className="project-element__info">
            <div className="project-element__title">{title}</div>
            <div className="project-element__description">{description}</div>
            <div className="project-element__links">
               <a href={githubUrl}>
                  <div className="project-element__github">Github</div>
               </a>
               <a href={liveUrl} style={{ display: !liveUrl && "none" }}>
                  <div className="project-element__live">LIVE</div>
               </a>
            </div>
         </div>
      </div>
   );
};

export default ProjectElement;
