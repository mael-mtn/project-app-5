import React from "react";
import { Fragment } from "react";
import "./DetailEmploi.css";
import Favoris from "../../../Components/Boutons/Favoris/Favoris";
import Previous from "../../../Components/Boutons/Previous/Previous";
import Contact from "../../../Components/Cards/Contact/Contact";
import SliderDetailEmploi from "../../../Components/Sliders/SliderDetailEmploi/SliderDetailEmploi";
import CardsDetailEmploi from "../components/CardsDetailEmploi/CardsDetailEmploi";

export default function DetailEmploi() {
  return (
    <Fragment>
      <div className="details">
        <div className="images">
          <Previous />
          <Favoris />
          <img
            src="https://www.immojeune.com/uploads/article/mainImage/mobilijeune-etudiant.jpg"
            alt="logo de l'aide"
            width={"100%"}
          />
        </div>
        <div className="detail-emplois">
          <div className="emplois-titre">
            <h3>Employé polyvalent</h3>
            <span className="adress">1 Rue Claude Bloch, 14000 Caen</span>
          </div>

          <div className="emplois-titre">
            <h3>Type de contrat</h3>
            <span className="type">CDI</span>
          </div>
        </div>

        <div className="contacts">
          <h3>Contacter l'entreprise</h3>
          <Contact />
        </div>

        <div className="description">
          <h3>Vos principales missions :</h3>
          <p>
            - Réaliser les livraisons en deux roues dans le respect de nos
            standards de qualité
          </p>
          <br />
          <p> - Respecter le Code de la route et les règles de courtoisie</p>
          <br />
          <p>
            - Être responsable de l’entretien de son scooter mis à disposition
            pendant le service
          </p>
          <br />
          <p>- Participer à la préparation des sacs de livraison </p>
          <br />
          <p>
            - Réaliser toutes autres tâches nécessaires au fonctionnement de la
            boutique
          </p>
        </div>

        <div className="localisation">
          <h3>Où se situe le logement</h3>
          <p className="maps">Bientôt une maps interactive</p>
        </div>

        <div className="sliders">
          <div className="slider-titre">
            <h3>Logements similaires</h3>
            <span>Tous voir(nb)</span>
          </div>
          <SliderDetailEmploi />
        </div>
      </div>
    </Fragment>
  );
}
