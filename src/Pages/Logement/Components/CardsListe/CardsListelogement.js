import React, { Fragment, useState } from "react";
import PropertyDetail from "../../../../Utils/apis/PropertyDetail";
import "./CardsListeLogement.css";
import Favoris from "../../../../Components/Boutons/Favoris/Favoris";
import { Link } from "react-router-dom";

export default function CardsListelogement() {
  const [detail, setDetail] = useState(PropertyDetail);

  return (
    <Fragment>
      <div className="property">
        <div className="row">
          {detail.map((detail) => {
            return (
              <div className="column">
                <div className="single-property">
                  <div className="card">
                    <div className="property-thumb">
                      <Favoris />
                      <img src={detail.Image} alt="Palace" width={"100%"} />
                    </div>
                    <Link to="/logements/logements-d">
                      <div className="property-content">
                        <div className="titre-logement">
                          <h3>{detail.heading}</h3>
                          <span className="ville">{detail.ville}</span>
                          <span className="surface">{detail.surface}</span>
                        </div>
                        <p className="adress">
                          Le Barycentre, 6 Rue Anton Tchekhov, 14123 Ifs
                        </p>
                        <div className="mark-logement">
                          <span className="amount">{detail.amount}</span>
                          <span>{detail.span}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}
