import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
   <div className="header">
      <div className="header__contact">
         <div className="header__name">Dariusz Bartyzel</div>
         <div className="header__contact-icons">
            <a href="https://github.com/Noxtirion" className="header__contact-link">
               <img src={require("../../assets/github.svg")} alt="github link" />
            </a>
            <a href="/" className="header__contact-link">
               <img src={require("../../assets/linkedin.svg")} alt="linkedin link" />
            </a>
            <a href="mailto:dariusz.bartyzel88@gmail.com" className="header__contact-link">
               <img src={require("../../assets/mail.svg")} alt="email" />
            </a>
         </div>
      </div>
      <div className="menu">
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
   </div>
);

export default Header;
