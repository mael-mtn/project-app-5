import React from "react";
import { Fragment } from "react";
import "./DetailAide.css";
import Favoris from "../../../Components/Boutons/Favoris/Favoris";
import Previous from "../../../Components/Boutons/Previous/Previous";
import Contact from "../../../Components/Cards/Contact/Contact";
import SliderDetailAide from "../../../Components/Sliders/SliderDetailAide/SliderDetailAide";

export default function DetailAide() {
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
        <div className="detail-aides">
          <div className="aide-titre">
            <h3>Aide Mobil Jeune</h3>
            <span className="Cat">Transport</span>
          </div>
        </div>

        <div className="contacts">
          <h3>Contacter le propriétaire</h3>
          <Contact />
        </div>

        <div className="description">
          <h3>Détails sur le logement</h3>
          <p>
            L'aide mobili-jeune permet de prendre en charge une partie de votre
            loyer ou redevance pour les logements-foyer ou résidences sociales
            pendant la durée de votre formation en alternance. Vous pouvez en
            bénéficier si vous avez moins de 30 ans.
          </p>
          <br />
          <p>
            Elle est versée par un organisme appelé Action logement : Organisme
            qui finance la construction de logements et qui verse des aides
            financières aux salariés pour se loger.
          </p>
          <br />
          <p>
            Les sommes versées proviennent des entreprises qui paient la
            participation des employeurs à l'effort de construction (PEEC). (Ex
            1 % Logement).
          </p>
          <br />
          <p> Elle est attribuée sous certaines conditions.</p>
        </div>

        <div className="localisation">
          <h3>Où se situe le logement</h3>
          <p>maps du logement</p>
        </div>

        <div className="sliders">
          <div className="slider-titre">
            <h3>Logements similaires</h3>
            <span>Tous voir(nb)</span>
          </div>
          <SliderDetailAide />
        </div>
      </div>
    </Fragment>
  );
}
