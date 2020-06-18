import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BurgerButton from "../burger-button/burger-button.component";
import { MenuContext } from "../../context/menu-context";

import "./menu.styles.scss";

const Menu = ({ fold }) => {
   const { open } = useContext(MenuContext);

   return (
      <div className={`menu ${fold} `}>
         <div className={`menu__options ${!open ? "open" : ""}`}>
            <Link className="menu__option" to="/">
               Home
            </Link>
            <Link className="menu__option" to="/about">
               About
            </Link>
            <Link className="menu__option" to="/technologies">
               Technologies
            </Link>
            <Link className="menu__option" to="/projects">
               Projects
            </Link>
         </div>
         <BurgerButton />
      </div>
   );
};

export default Menu;
