import React from "react";
import { useState } from "react";
import "./NavBar.css";
import logoMDS from "../../../Images/svg/logoMDS.svg";

export default function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "showNav" : "hideNav"}`}>
      <img src={logoMDS} alt=" logo MyDigitalSchool" width="100px" height={"50px"} />
      <ul className="navbarLinks">
        <li className="navbarItem">
          <a href="/" className="navbarLink">
            Accueil
          </a>
        </li>
        <li className="navbarItem">
          <a href="/" className="navbarLink">
            Logement
          </a>
        </li>
        <li className="navbarItem">
          <a href="/" className="navbarLink">
            Emploi
          </a>
        </li>
        <li className="navbarItem">
          <a href="/" className="navbarLink">
            Aide
          </a>
        </li>
        <li className="navbarItem">
          <a href="/" className="navbarLink">
            Profil
          </a>
        </li>
      </ul>
      <button className="navbarBurger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}
