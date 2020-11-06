import React, { useContext } from "react";
import { MenuContext } from "../../context/menu-context";

import "./burger-button.styles.scss";

const BurgerButton = () => {
   const { open, toggleButton } = useContext(MenuContext);

   return (
      <div className={`burger ${open ? "open" : ""}`} onClick={() => toggleButton(!open)}>
         <div className="burger-inside"></div>
      </div>
   );
};

export default BurgerButton;
