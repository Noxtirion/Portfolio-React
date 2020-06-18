import React from "react";
import { MenuContextProvider } from "../../context/menu-context";
import Menu from "../menu/menu.component";

import "./header.styles.scss";

const Header = ({ fold }) => (
   <div className="header">
      <div className="header__contact">
         <div className="header__name">Dariusz Bartyzel</div>
         <div className="header__contact-icons">
            <a href="https://github.com/Noxtirion" className="header__contact-link">
               <img src={require("../../assets/header-icons/github.svg")} alt="github link" />
            </a>
            <a href="/" className="header__contact-link">
               <img src={require("../../assets/header-icons/linkedin.svg")} alt="linkedin link" />
            </a>
            <a href="mailto:dariusz.bartyzel88@gmail.com" className="header__contact-link">
               <img src={require("../../assets/header-icons/mail.svg")} alt="email" />
            </a>
         </div>
      </div>
      <MenuContextProvider>
         <Menu fold={fold} />
      </MenuContextProvider>
   </div>
);

export default Header;
