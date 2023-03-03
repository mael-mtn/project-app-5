import React from "react";
import { Fragment} from "react";
import "./DetailLogement.css";
import Favoris from "../../../Components/Boutons/Favoris/Favoris";
import Previous from "../../../Components/Boutons/Previous/Previous";
import Contact from "../../../Components/Cards/Contact/Contact";
import SliderDetailLogement from "../../../Components/Sliders/SliderDetailLogement/SliderDetailLogement"


export default function DetailLogement() {


  return (
    <Fragment>
      <div className="details">
        <div className="images">
          <Previous />
          <Favoris />
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="img du logement"
            width={"100%"}
          />
        </div>
        <div className="coordonnees">
          <div className="coordonnees-titre">
            <h3>Le Baricentre</h3>
            <span>367 €</span>
          </div>
          <div className="coordonnees-info">
            <span className="ville">Ifs</span>
            <span className="surface">21m²</span>
            <p>Le Barycentre, 6 Rue Anton Tchekhov, 14123 Ifs</p>
          </div>
        </div>

        <div className="contacts">
          <h3>Contacter le propriétaire</h3>
          <Contact />
        </div>

        <div className="description">
          <h3>Détails sur le logement</h3>
          <p>
            - Un studio ou un appartement entièrement meublé, avec une
            kitchenette toute équipée, un espace bureau, un coin nuit avec le
            linge de lit fourni, une TV, du rangement et une salle d’eau
            privative avec serviettes fournies, d’une superficie moyenne de 20
            m²
          </p>
          <br />
          <p>- Un Wifi 100% fibre, pour surfer en illimité </p>
          <br />
          <p>
            - Une localisation en centre-ville au plus proche des écoles,
            universités et des transports en commun{" "}
          </p>
          <br />
          <p>
            - Un tarif tout inclus (loyer + wifi + eau + électricité) sans
            mauvaise surprise en fin de mois
          </p>
          <br />
          <p>
            - Des services hôteliers** : petit-déj, laverie, salle de sport,
            parking, ménage, imprimante...
          </p>
        </div>

        <div className="localisation">
          <h3>Où se situe le logement</h3>
          <p className="maps">maps du logement</p>
        </div>

        <div className="sliders">
          <div className="slider-titre">
            <h3>Logements similaires</h3>
            <span>Tous voir(nb)</span>
          </div>
          <SliderDetailLogement/>
          
        </div>
      </div>
    </Fragment>
  );
}
