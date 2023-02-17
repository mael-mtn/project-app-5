import React, { Fragment, useState } from "react";
import AideDetail from "../../../../Utils/apis/AideDetail";
import "./CardsDetailAide.css";

export default function CardsDetailAide() {
  const [detail, setDetail] = useState(AideDetail);

  return (
    <Fragment>
      <section className="aide-detail">
        <div className="row">
          {detail.map((detail) => {
            return (
              <div className="column-aide-detail">
                <div className="single-aide-detail">
                  <div className="card">
                    <div className="aide-detail-thumb">
                      <img src={detail.Image} alt="Palace" width={"100%"} />
                    </div>
                    <div className="aide-detail-content">
                      <h3>{detail.title}</h3>
                      <span className="cat-aide-detail">{detail.catAide}</span>
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
}
