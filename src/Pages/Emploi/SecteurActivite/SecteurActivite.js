import React from "react";
import Previous from "../../../Components/Boutons/Previous/Previous";
import CardsEmploi from "../../../Components/Cards/CardsEmploi/CardsEmploi";
import "./SecteurActivite.css";

export default function SecteurActivite() {
  return (
    <section className="liste-secteur">
      <div className="titre-secteur">
        <Previous />
        <h3 className="titre-liste">Secteurs d'activités</h3>
      </div>

        <CardsEmploi/>
    </section>
  );
}
