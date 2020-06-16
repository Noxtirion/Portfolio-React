import React from "react";

import "./project-element.styles.scss";

const projectElement = props => (
   <div className="project-element">
      <div className="project-element__image"></div>
      <div className="project-element__info">
         <div className="project-element__title"></div>
         <div className="project-element__description"></div>
      </div>
   </div>
);

export default projectElement;
