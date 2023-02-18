import { useState, Fragment } from "react";
import EmploiDetail from "../../../../Utils/apis/EmploiDetail";
import "./CardsListeSecteur.css";


export default function CardsListeSecteur() {
    const [detail, setDetail] = useState(EmploiDetail);

    return (
      <Fragment>
        <div className="emploi">
          <div className="row">
            {detail.map((detail) => {
              return (
                <div className="column-emploi">
                  <div className="single-emploi">
                    <div className="card">
                      <link to="/emplois-secteurs/emplois">
                        <div className="emploi-thumb">
                          <div className="emploi-tag">{detail.title}</div>
                          <img src={detail.Image} alt="other" width={"100%"} />
                        </div>
                      </link>
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
