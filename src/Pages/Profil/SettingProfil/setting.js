import React from "react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Profil.css";

export default function Profil() {
  const [showLinks, setShowLinks] = useState(null);

  const handleAddBlue = () => {
    setShowLinks(!showLinks);
  };

  return (
    <Fragment>
      <div className="profil">
        <h3>Mon Profil</h3>
        <div class="circular--portrait">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
            width={"100%"}
            height={"100%"}
            alt="sdv"
          />
        </div>
        <h3>John Williams</h3>
        <p>john.williams@gmail.com</p>
      </div>

      <div className="button">
        <Link to="/Profil/update">
          <button className="btn-primaire">Modifier</button>
        </Link>
        <Link to="/Profil/Settings">
          <button className="btn-secondaire">Réglage</button>
        </Link>
      </div>

      <div className="wishlist">
        <div className="titre-wishlist">
          <svg
            width="18"
            height="23"
            viewBox="0 0 18 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 21.259V2.15625C1 1.51766 1.51766 1 2.15625 1H15.0938C15.7323 1 16.25 1.51766 16.25 2.15625V21.259L9.12887 17.105L8.625 16.811L8.12113 17.105L1 21.259Z"
              fill="#FFBD1D"
              stroke="#FFBD1D"
              stroke-width="2"
            />
          </svg>
          <h3>Favoris</h3>
        </div>
        <div className="button">
          <button
            onClick={handleAddBlue}
            className={`btn-portfolio${showLinks ? "" : "-active"}`}
          >
            Logement
          </button>
          <button
            onClick={handleAddBlue}
            className={`btn-portfolio${showLinks ? "" : "-active"}`}
          >
            Emploi
          </button>
          <button
            onClick={handleAddBlue}
            className={`btn-portfolio${showLinks ? "" : "-active"}`}
          >
            Aide
          </button>
        </div>
      </div>
    </Fragment>
  );
}
