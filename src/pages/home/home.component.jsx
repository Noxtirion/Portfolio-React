import React from "react";

import "./home.styles.scss";

const Home = () => (
   <section className="home">
      <div className="home__wrapper">
         <img
            src={require("../../assets/style-images/gear1.svg")}
            className="home__gear"
            alt="gear"
         />
         <div className="home__title">
            <div className="home__name-wrapper">
               <div className="home__greet">Hello!</div>
               <div className="home__name">
                  I'm <span>Darek</span>.
               </div>
            </div>
            <div className="home__who">Front-end Developer</div>
         </div>
         <img
            src={require("../../assets/style-images/gear1.svg")}
            className="home__gear"
            alt="gear"
         />
      </div>
   </section>
);

export default Home;
