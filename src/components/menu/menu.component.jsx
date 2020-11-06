import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BurgerButton from "../burger-button/burger-button.component";
import { MenuContext } from "../../context/menu-context";
import { SpinnerContext } from "../../context/spinner-context";

import "./menu.styles.scss";

const Menu = ({ fold }) => {
   const { open, toggleButton } = useContext(MenuContext);
   const { toggleLoading, toggleAfterLoad } = useContext(SpinnerContext);

   return (
      <div className={`menu ${fold} `}>
         <div className={`menu__options ${!open ? "open" : ""}`}>
            <Link
               className="menu__option"
               to="/"
               onClick={() => {
                  toggleLoading(true, "");
                  toggleAfterLoad(true);
                  toggleButton(false);
               }}
            >
               Home
            </Link>
            <Link
               className="menu__option"
               to="/about"
               onClick={() => {
                  toggleLoading(true, "up");
                  toggleAfterLoad(true);
                  toggleButton(false);
               }}
            >
               About
            </Link>
            <Link
               className="menu__option"
               to="/technologies"
               onClick={() => {
                  toggleLoading(true, "right");
                  toggleAfterLoad(true);
                  toggleButton(false);
               }}
            >
               Technologies
            </Link>
            <Link
               className="menu__option"
               to="/projects"
               onClick={() => {
                  toggleLoading(true, "left");
                  toggleAfterLoad(true);
                  toggleButton(false);
               }}
            >
               Projects
            </Link>
         </div>
         <BurgerButton />
      </div>
   );
};

export default Menu;
