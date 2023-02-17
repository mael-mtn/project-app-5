import React, { Fragment, useState } from "react";
import PropertyDetail from "../../../../Utils/apis/PropertyDetail";
import "./CardsDetailLogement.css";

const CardsDetailLogement = () => {
  const [detail, setDetail] = useState(PropertyDetail);

  return (
    <Fragment>
      <section className="property-detail">
        <div className="row">
          {detail.map((detail) => {
            return (
              <div className="column">
                <div className="single-property-detail">
                  <div className="card">
                    <div className="property-detail-thumb">
                      <img src={detail.Image} alt="Palace" width={"100%"} />
                    </div>
                    <div className="property-detail-content">
                      <div className="titre-property-detail">
                        <h3>{detail.heading}</h3>
                        <span className="ville">{detail.ville}</span>
                        <span className="surface">{detail.surface}</span>
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

export default CardsDetailLogement;
