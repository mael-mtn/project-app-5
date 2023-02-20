import React from "react";
import { Link } from "react-router-dom";
import Favoris from "../../../../Components/Boutons/Favoris/Favoris";
import "./CardsListeEmploi.css";

export default function CardsListeEmploi() {
  return (
    <div className="liste-cards-emplois">
      <div className="img-card-liste">
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/thumb/e/ea/Mcdonalds_France_2009_logo.svg/1138px-Mcdonalds_France_2009_logo.svg.png"
          alt="Logo McDonald's"
          width={"125px"}
          height={"100%"}
        />
      </div>

      <div className="content-card-liste">
        <h3>McDonald's</h3>
        <p>Employé polyvalent</p>
        <p>CDI</p>
        <Favoris />
        <div className="footer-card-liste">
          <p>Publié aujourd'hui</p>
          <Link to="/emplois-secteurs/emplois/emplois-d">
            <span>Voir plus</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
