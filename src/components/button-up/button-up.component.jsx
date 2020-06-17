import "./button-up.styles.scss";

import React from "react";
import * as Scroll from "react-scroll";
let scroll = Scroll.animateScroll;

const ButtonUp = ({ appear }) => {
   return (
      <div className={`button-up ${appear}`}>
         <img
            src={require("../../assets/button-up-icon/arrowup.svg")}
            alt="Arrow Up"
            onClick={scroll.scrollToTop}
         />
      </div>
   );
};

export default ButtonUp;
