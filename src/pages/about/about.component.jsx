import React, { useEffect, useContext } from "react";

import { SpinnerContext } from "../../context/spinner-context";

import "./about.styles.scss";

const About = () => {
   const { toggleLoading } = useContext(SpinnerContext);

   useEffect(() => {
      toggleLoading(false, "up");
   }, [toggleLoading]);

   return (
      <section className="about">
         <h1 className="about__title">About</h1>
         <div className="about__description">
            <p>
               My name is Dariusz Bartyzel. I have studied Finance and Accounting at University of
               Economics in Cracow. After a few years of working in this profession I came to a
               conclusion that I lack satisfaction from my current specialization. Wondering what
               path should I take next, suddenly an opportunity occurred to create my first website.
               It turned out to be so fascinating that resulted in decision to change my future
               career path. Now is the time when I would like to accelerate my development by
               working in a real environment, because no sources of learning can replace it. Despite
               of lack experience I would like to find a place where I can get the knowledge and
               push forward my skills as a Front-end Developer.
            </p>
         </div>
         <div className="about__gear-wrapper">
            <img
               src={require("../../assets/style-images/gear1.svg")}
               className="about__gear"
               alt="gear"
            />
         </div>
      </section>
   );
};

export default About;
