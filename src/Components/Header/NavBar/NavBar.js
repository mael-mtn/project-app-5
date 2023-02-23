import React from "react";
import { useState } from "react";
import "./NavBar.css";
import logoMDS from "../../../Images/svg/logoMDS.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "showNav" : "hideNav"}`}>
      <Link to="/accueil">
        <img
          src={logoMDS}
          alt=" logo MyDigitalSchool"
          width="100px"
          height={"50px"}
        />
      </Link>
      <ul className="navbarLinks">
        <Link to="/accueil" className="navbarItem">
          <li className="navbarLink">Accueil</li>
        </Link>

        <Link to="/logements" className="navbarItem">
          <li className="navbarLink">Logement</li>
        </Link>

        <Link to="/emplois-secteurs" className="navbarItem">
          <li className="navbarLink">Emploi</li>
        </Link>

        <Link to="/aides" className="navbarItem">
          <li className="navbarLink">Aide</li>
        </Link>

        <Link to="/profil" className="navbarItem">
          <li className="navbarLink">Profil</li>
        </Link>
      </ul>
      <button className="navbarBurger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}
