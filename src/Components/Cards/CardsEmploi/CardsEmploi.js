import { useState,  Fragment } from "react";
import EmploiDetail from "../../../Utils/apis/EmploiDetail";
import "./CardsEmploi.css";

const CardsEmploi = () => {
  const [detail, setDetail] = useState(EmploiDetail);

  return (
    <Fragment>
      <section className="emploi">
        <div className="row">
          {detail.map((detail) => {
            return (
              <div className="column">
                <div className="single-emploi">
                  <div className="card">
                    <div className="emploi-thumb">
                      <div className="emploi-tag">{detail.title}</div>
                      <img src={detail.Image} alt="other" width={"100%"} />
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

export default CardsEmploi;
