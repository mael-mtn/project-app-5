import React, { Fragment, useState } from "react";
import AideDetail from "../../../Utils/apis/AideDetail";
import "./CardsAide.css";
import Favoris from "../../Boutons/Favoris/Favoris";

const CardsAide = () => {
  const [detail, setDetail] = useState(AideDetail);

  return (
    <Fragment>
      <section className="aide">
        <div className="row">
          {detail.map((detail) => {
            return (
              <div className="column-aide">
                <div className="single-aide">
                  <div className="card">
                    <div className="aide-thumb">
                      <Favoris />
                      <img src={detail.Image} alt="Palace" width={"100%"} />
                    </div>
                    <div className="aide-content">
                      <h3>{detail.title}</h3>
                      <span className="cat-aide">{detail.catAide}</span>
                      <div className="mark">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>Voir plus</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default CardsAide;
