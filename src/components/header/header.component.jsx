import React from "react";
import { MenuContextProvider } from "../../context/menu-context";
import Menu from "../menu/menu.component";

import "./header.styles.scss";

const Header = ({ fold }) => (
   <header className="header">
      <div className="header__wrapper">
         <div className="header__contact">
            <div className="header__name">
               <div className="header__first-name">Dariusz</div>{" "}
               <div className="header__last-name">Bartyzel</div>
            </div>
            <div className="header__contact-icons">
               <a href="https://github.com/Noxtirion" className="header__contact-link">
                  <img src={require("../../assets/header-icons/github.svg")} alt="github link" />
               </a>
               <a
                  href="https://www.linkedin.com/in/dariusz-bartyzel-521b6a1a9/"
                  className="header__contact-link"
               >
                  <img
                     src={require("../../assets/header-icons/linkedin.svg")}
                     alt="linkedin link"
                  />
               </a>
               <a href="mailto:dariusz.bartyzel88@gmail.com" className="header__contact-link">
                  <img src={require("../../assets/header-icons/mail.svg")} alt="email" />
               </a>
            </div>
         </div>
      </div>
      <MenuContextProvider>
         <Menu fold={fold} />
      </MenuContextProvider>
   </header>
);

export default Header;
