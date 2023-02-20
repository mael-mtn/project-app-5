import React, { Fragment } from "react";
import "./CardsDetailEmploi.css";

const CardsDetailEmploi = () => {
  return (
    <Fragment>
      <section className="emploi-detail">
        <div className="row">
          <div className="column">
            <div className="single-emploi-detail">
              <div className="card">
                <div className="emploi-detail-thumb">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/fr/thumb/e/ea/Mcdonalds_France_2009_logo.svg/1138px-Mcdonalds_France_2009_logo.svg.png"
                    alt="Logo McDonald's"
                  />
                </div>
                <div className="emploi-detail-content">
                  <div className="titre-emploi-detail">
                    <h3 className="titre-info">McDonald's</h3>
                    <span className="info">Employé polyvalent</span>
                    <span className="info">CDI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CardsDetailEmploi;

