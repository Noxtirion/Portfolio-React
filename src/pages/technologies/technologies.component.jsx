import React from "react";

import TechnologiesElement from "../../components/technologies-element/technologies-element.component";

import "./technologies.styles.scss";

const Technologies = () => {
   const technologiesNames = {
      mainNames: ["HTML", "CSS", "JS", "REACT", "REDUX", "SCSS"],
      toolNames: ["WEBPACK", "GIT"],
      methodologyNames: ["BEM"]
   };

   const { mainNames, toolNames, methodologyNames } = technologiesNames;

   const allNames = [...mainNames, ...toolNames, ...methodologyNames];

   const technologyElements = allNames.map((name, k) => (
      <TechnologiesElement key={k} name={name} />
   ));

   return (
      <section className="technologies">
         <h1 className="technologies__title">Technologies</h1>
         <p className="technologies__description">
            More or less everything that I have been using during learning and creating projects.
         </p>
         <p className="technologies__description technologies__description--extra">
            Currently I am learning Angular due to open source project in which I participate.
         </p>
         <div className="technologies__elements">
            <div className="technologies__main">
               {technologyElements.slice(0, mainNames.length)}
            </div>
            <h2>Tools</h2>
            <div className="technologies__tool">
               {technologyElements.slice(mainNames.length, mainNames.length + toolNames.length)}
            </div>
            <h2>Methodology</h2>
            <div className="technologies__methodology">
               {technologyElements.slice(mainNames.length + toolNames.length)}
            </div>
         </div>
      </section>
   );
};

export default Technologies;
