import React, { Fragment, useState } from "react";
import Favoris from "../../../../Components/Boutons/Favoris/Favoris";
import { Link } from "react-router-dom";
import "./CardsListeAide.css";
import AideDetail from "../../../../Utils/apis/AideDetail";

export default function CardsListeAide() {
  const [detail, setDetail] = useState(AideDetail);

  return (
    <Fragment>
      <section className="aides-liste">
        <div className="row">
          {detail.map((detail) => {
            return (
              <div className="column-aide-liste">
                <div className="single-aide-liste">
                  <div className="card">
                    <div className="aide-liste-thumb">
                      <Favoris />
                      <img src={detail.Image} alt="Palace" width={"100%"} />
                    </div>
                    <Link to="/aides/aides-d">
                      <div className="aide-liste-content">
                        <h3>{detail.title}</h3>
                        <span className="cat-aide-liste">{detail.catAide}</span>
                        <div className="mark">
                          <i className="fa-solid fa-location-dot"></i>
                          <span>Voir plus</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
}
