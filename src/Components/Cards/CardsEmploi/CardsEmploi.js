import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
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
              <div className="column-emploi">
                <div className="single-emploi">
                  <div className="card">
                    <div className="emploi-thumb">
                      <Link to="/emplois-secteurs/emplois">
                        <div className="emploi-tag">{detail.title}</div>
                        <img src={detail.Image} alt="other" width={"100%"} />
                      </Link>
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
